# Game.Base
# ---------
#
# Base game object.
#
# TODO: maybe make this a singleton
window.RXR = ((RXR) ->
  RXR.Base = class
    constructor: (@options) ->
      @settings         = {}
      @settings.has_fps = Boolean(@options.fps)
      @settings.container = $(@options.el)

      # Components.
      # TODO: allows for more than one canvas (pre-rendering & the like,
      # should be the responsibility of Sprites)
      @fps      = new RXR.FPS(el: @options.fps) if @settings.has_fps
      @keyboard = new RXR.Keyboard()
      @loop     = new RXR.MainLoop(has_fps: (@settings.has_fps))

      # Entities.
      #bg_canvas = new RXR.Canvas(container: @settings.container)
      #@bg = new RXR.Sprite(scene: bg_canvas)
      player_canvas = new RXR.Canvas(container: @settings.container)
      @player = new RXR.Player(scene: player_canvas)

      # Proceed…
      @init()
      return @

    checkIfReady: (component) =>
      @readyComponents.push component
      @start() if _.isEmpty(_.difference(@mustBeReady, @readyComponents))

    init: ->
      @mustBeReady = [ "keyboard", "player" ]
      @readyComponents = []
      _.each @mustBeReady, (component) =>
        RXR.Events.bind component + ":ready", @.checkIfReady

      @keyboard.init()
      @player.init()

    start: =>
      @loop.start()

  return RXR
)(window.RXR || {})
