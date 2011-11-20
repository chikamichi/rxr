#
#     _/_/_/    _/      _/  _/_/_/
#    _/    _/    _/  _/    _/    _/
#   _/_/_/        _/      _/_/_/
#  _/    _/    _/  _/    _/    _/
# _/    _/  _/      _/  _/    _/
#
# Author: Jean-Denis Vauguet <jd@vauguet.fr>
# Website: http://github.com/chikamichi/rxr
# License: MIT

# Core ext.
Array::remove = (e) -> @[t..t] = [] if (t = @indexOf(e)) > -1

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

      # Cheap event aggregator. It's shared and simple.
      unless RXR.Events
        RXR._events = ->
        MicroEvent.mixin(RXR._events)
        RXR.Events = new RXR._events()

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
