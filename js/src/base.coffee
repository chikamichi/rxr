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
      @entities = []

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
      bg = new RXR.Entity
        component_name: 'bg',
        scene: bg_canvas,
        refresh: (entity) ->
          entity.scene.queue [
            (scene) ->
              scene.clear()
              scene.context.fillStyle = '#FFFFFF'
              scene.context.fillRect(0, 0, scene.width, scene.height)
            [entity.scene]
          ]
      @layers.push(bg_canvas)
      @entities.push(bg)

      player_canvas = new RXR.Canvas
        container: @settings.container,
        layer_name: 'player'
      player = new RXR.Player
        component_name: 'player',
        scene: player_canvas
      @layers.push(player_canvas)
      @entities.push(player)

      # Proceed…
      @init()
      return @

    checkIfReady: (component) =>
      @readyComponents.push component
      @start() if _.isEmpty(_.difference(@mustBeReady, @readyComponents))

    init: ->
      @mustBeReady = _.map @entities, ((entity) -> entity.component_name)
      @mustBeReady.push 'keyboard'
      @readyComponents = []
      _.each @mustBeReady, (component) =>
        RXR.Events.bind component + ":ready", @.checkIfReady

      @keyboard.init()
      component.init() for component in @entities

    start: =>
      @loop.start()

  return RXR
)(window.RXR || {})
