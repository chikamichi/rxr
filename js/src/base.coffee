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

      @layers = []

      # Components.
      @fps      = new RXR.FPS(el: @options.fps) if @settings.has_fps
      @keyboard = new RXR.Keyboard()
      @loop     = new RXR.MainLoop(has_fps: (@settings.has_fps))

      # Entities.
      # TODO: allow a container key in the Entity options, and
      # create the RXR.Canvas in the background
      bg_canvas = new RXR.Canvas
        container: @settings.container,
        layer_name: 'bg'
      @layers.push(bg_canvas)
      @bg = new RXR.Entity
        component_name: 'bg',
        scene: bg_canvas,
        refresh: ->
          console.log('toto')
          @scene.queue [
            (bg) ->
              @clear()
              @context.fillStyle = '#FFFFFF'
              @context.fillRect(0, 0, bg.scene.width, bg.scene.height)
            [@]
          ]

      player_canvas = new RXR.Canvas
        container: @settings.container,
        layer_name: 'player'
      @layers.push(player_canvas)
      @player = new RXR.Player(scene: player_canvas)

      # Proceed…
      @init()
      return @

    checkIfReady: (component) =>
      @readyComponents.push component
      @start() if _.isEmpty(_.difference(@mustBeReady, @readyComponents))

    init: ->
      @mustBeReady = [ "keyboard", "bg", "player" ]
      @readyComponents = []
      _.each @mustBeReady, (component) =>
        RXR.Events.bind component + ":ready", @.checkIfReady

      @bg.init()
      @keyboard.init()
      @player.init()

    start: =>
      @loop.start()

  return RXR
)(window.RXR || {})
