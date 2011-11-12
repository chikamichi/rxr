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

      # Components.
      # TODO: allows for more than one canvas (pre-rendering & the like,
      # should be the responsibility of Sprites)
      @fps      = new RXR.FPS(el: @options.fps) if @settings.has_fps
      @canvas   = new RXR.Canvas(el: $(@options.el).find("canvas"))
      @keyboard = new RXR.Keyboard()
      @player   = new RXR.Player(canvas: @canvas)
      @loop     = new RXR.MainLoop(has_fps: (@settings.has_fps))

      #_.bindAll this, "start", "checkIfReady"

      @mustBeReady = [ "canvas", "keyboard", "player" ]
      @readyComponents = []
      _.each @mustBeReady, (component) =>
        RXR.Events.bind component + ":ready", @.checkIfReady

      @init()

    checkIfReady: (component) =>
      @readyComponents.push component
      @start() if _.isEmpty(_.difference(@mustBeReady, @readyComponents))

    init: ->
      @canvas.init()
      @keyboard.init()
      @player.init()

    start: =>
      @loop.start()

  return RXR
)(window.RXR || {})
