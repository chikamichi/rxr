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
      @loop     = new RXR.MainLoop
        has_fps: @settings.has_fps
        current_game: @

      # Current game's init
      (@options.init || $.noop).apply(@)

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
