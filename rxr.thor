# coding: utf-8

require 'yaml'
require 'fileutils'

module Rxr
  module Config
    # Enforce silent system calls, unless the --verbose option is passed.
    # One may either pass -v, --verbose or --[v|verbose]=[true|t|yes|y|1].
    def run(cmd, *args)
      args = args.empty? ? {} : args.pop
      verbose = !!(options[:verbose] && options[:verbose].to_s.match(/(verbose|true|t|yes|y|1)$/i))
      super(cmd, args.merge(:verbose => verbose))
    end

    # Enforce green output by default.
    def say(message = "", color = nil)
      color ||= :green
      super
    end
  end

  include Thor::Actions
  include Config

  class Utils < Thor
    include Thor::Actions
    include Config

    namespace :utils

    desc 'version', 'shows the current version of RXR'
    method_option :silent, aliases: '-t', default: false, desc: 'no outputs, just return the version (for dev. use)'
    def version
      version = File.read('VERSION').gsub("\n", '')
      say version unless options[:silent]
      version
    end
  end

  class Build < Thor::Group
    include FileUtils
    include Thor::Actions
    include Config

    desc "combine and compile JS sources"
    class_option :reload, aliases: '-r', default: false, desc: 'reload (fetch) external JS dependencies'

    def fetch_dependencies
      if options[:reload]
        say 'Fetching external dependencies…'
        %w{development production}.each do |env|
          FileUtils.rm_rf("deps-#{env}") if Dir.exist?("deps-#{env}")
        end
        deps = YAML.load(File.read('.js_deps.yml'))

        in_root do
          wget_options = '-vS -a build.log -t 3 --no-cookies --no-cache'

          deps.keys.each do |env|
            say "> #{env}"
            run "mkdir -p public/javascripts/deps-#{env}"

            inside("public/javascripts/deps-#{env}") do
              deps[env.to_sym].each do |dep, url|
                filename = url.split("/").last
                say "  - #{dep} (#{url})"
                run "wget #{wget_options} #{url}"
                run "mv #{filename} #{dep}.js" unless filename == "#{dep}.js"
              end

              run 'cd ../..'
            end
          end
        end
      end
    end

    def build
      say 'Combining, compiling…'
      version = invoke 'utils:version', [], silent: true

      in_root do
        %w{development production}.each do |env|
          suffix = env == 'production' ? '.min' : ''
          assetspkg_options = "-c assets.#{env}.yml"
          assetspkg_options << " --nominifyjs --indent 4" if env == 'development'
          simple = "rxr#{suffix}-#{version}.js"
          full = "rxr.full#{suffix}-#{version}.js"
          nojquery = "rxr.nojquery#{suffix}-#{version}.js"

          say "> #{env}"
          run "assetspkg #{assetspkg_options}", verbose: true
          run "mv public/javascripts/bundled/rxr.js #{simple}"
          run "mv public/javascripts/bundled/rxrfull.js #{full}"
          run "mv public/javascripts/bundled/rxrnojquery.js #{nojquery}"
          run "chmod u+x #{simple} #{full}"

          FileUtils.rm_rf 'public/javascripts/bundled'
        end
      end

      say 'Done.'
    end

    def cleanup
      inside('public/javascripts') do
        FileUtils.rm_rf 'deps-development'
        FileUtils.rm_rf 'deps-production'
      end
    end
  end
end
