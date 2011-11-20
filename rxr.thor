# coding: utf-8

class Rxr < Thor
  map "-L" => :list

  module Config
    # Enforce silent system calls, unless the --verbose option is passed.
    # One may either pass -v, --verbose or --[v|verbose]=[true|t|yes|y|1].
    #
    def run(cmd, *args)
      args = args.empty? ? {} : args.pop
      verbose = !!(options[:verbose] && options[:verbose].to_s.match(/(verbose|true|t|yes|y|1)$/i))
      super(cmd, args.merge(:verbose => verbose))
    end

    # Enforce green output by default.
    def say(message = "", color = nil, force_new_line = (message.to_s !~ /( |\t)$/))
      color ||= :green
      super
    end
  end

  include Thor::Actions
  include Config

  desc 'version', 'shows the current version of RXR'
  method_option :silent, aliases: '-t', default: false, desc: 'no outputs, just return the version (for dev. use)'
  def version
    version = File.read('VERSION').gsub("\n", '')
    say version unless options[:silent]
    version
  end

  desc "build", "combine and compile JS source"
  def build
    say 'Combining, compiling…'
    version = invoke :version, [], silent: true
    simple = "rxr.min-#{version}.js"
    full = "rxr.full.min-#{version}.js"
    in_root do
      run 'assetspkg -c assets.yml', verbose: true
      run "mv public/javascripts/bundled/rxr.js #{simple}"
      run "mv public/javascripts/bundled/rxrfull.js #{full}"
      run "chmod u+x #{simple} #{full}"
      run 'rm -rf public/javascripts/bundled'
    end
    say 'Done.'
  end
end
