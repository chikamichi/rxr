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

    #def self.source_root
      #File.dirname(__FILE__)
    #end

    desc "combine and compile JS sources"
    class_option :reload, aliases: '-r', default: false, desc: 'reload (fetch) external JS dependencies'

    def fetch_dependencies
      if options[:reload]
        say 'Fetching external dependencies…'
        FileUtils.rm_rf('fetch') if Dir.exist?('fetch')
        deps = YAML.load(File.read('.js_deps.yml'))

        in_root do
          wget_options = '-vS -a build.log -t 3 --no-cookies --no-cache'

          deps.keys.each do |env|
            say "> #{env}"
            run "mkdir -p fetch/#{env}"

            inside("fetch/#{env}") do
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
      simple = "rxr.min-#{version}.js"
      full = "rxr.full.min-#{version}.js"

      in_root do
        run 'assetspkg -c assets.yml', verbose: true
        run "mv public/javascripts/bundled/rxr.js #{simple}"
        run "mv public/javascripts/bundled/rxrfullprod.js #{full}"
        run "chmod u+x #{simple} #{full}"
      end

      say 'Done.'
    end

    def cleanup
      in_root do
        FileUtils.rm_rf 'public/javascripts/bundled'
        FileUtils.rm_rf 'fetch'
      end
    end
  end
end
