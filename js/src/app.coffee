window.Game = {}
$(document).ready ->
  Game.current = new Game.Base
    el:  $("#my-game")
    fps: $("#fps")

# Cheap event aggregator.
Game.Events = _.extend({}, Backbone.Events)

# Game.Base
# ---------
#
# Base game object.
class Game.Base
  constructor: (@options) ->
    @settings         = {}
    @settings.has_fps = Boolean(@options.fps)

    # Components.
    # TODO: allows for more than one canvas (pre-rendering & the like,
    # should be the responsibility of Sprites)
    @fps      = new Game.FPS(el: @options.fps) if @settings.has_fps
    @canvas   = new Game.Canvas(el: $(@options.el).find("canvas"))
    @keyboard = new Game.Keyboard()
    @player   = new Game.Player()
    @loop     = new Game.MainLoop(has_fps: (@settings.has_fps))

    #_.bindAll this, "start", "checkIfReady"

    @mustBeReady = [ "canvas", "keyboard", "player" ]
    @readyComponents = []
    _.each @mustBeReady, (component) =>
      Game.Events.bind component + ":ready", @.checkIfReady

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

# Game.Helpers
# ------------
#
# Mixins to be included (extended) witthin components. One still can access
# them directly, though…
#
Game.Helpers =
  pixels2int: (pixels) ->
    parseInt pixels, 10

  components:
    ready: ->
      Game.Events.trigger @component_name + ":ready", @component_name

  keyCodes:
    keyCode:
      left: 37
      up: 38
      right: 39
      down: 40

    KEYTYPES:
      directions: [ "37", "38", "39", "40" ]

    KEYCODES:
      37: "left"
      38: "up"
      39: "right"
      40: "down"
