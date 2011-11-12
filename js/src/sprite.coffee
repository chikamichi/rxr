# Game.Sprite
# -----------
#
# Represents a generic sprite, to be drawn on a canvas.
#
class Game.Sprite
  constructor: (@options) ->
    _.extend(this, Game.Helpers.components)
    _.extend(this, Game.Helpers.keyCodes)
    @.component_name = 'player'

    if (@options.layer)
      @.layer = @options.layer
    else
      @.layer = new Game.Canvas()

    @.available_directions = ['left', 'up', 'right', 'down']
    @.speed =
      normal: 1,
      fast: 3

    Game.Events.bind 'player:set:coordinates',    @.setCoordinates
    Game.Events.bind 'player:update:coordinates', @.updateCoordinates
    Game.Events.bind 'player:refresh',            @.refresh

  # Public: Bootstrap the player component.
  init: ->
    @.refresh()
    @.ready()

  # Public: Sets the player's coordinates
  setCoordinates: (data) =>
    if data == undefined
      data = {}

    @.x = data.x || 0
    @.y = data.y || 0

  # Public: Returns the player's coordinates.
  coordinates: ->
    x: @.x,
    y: @.y

  # Public: Updates the player's coordinates according to the specified
  # directions (that is, several directions may be passed at once).
  #
  # Directions are passed as a normalized list of human-readable values,
  # such as ['left', 'top']. This is handled by the Keyboard component.
  #
  # pressed - Normalized pressed keys list with states
  updateCoordinates: (pressed) =>
    for keyCode, state of pressed
      if _.include(@.available_directions, keyCode)
        # if previous keyDown timestamp is not undefined, then
        # we want to player to run
        speed = if state[1] then @.speed.fast else @.speed.normal
        @._move(keyCode, speed)

  # To be executed on redrawing, in the context of a the canvas.
  # TODO: @options.canvas should be @canvas, a pre-rendering canvas attached to
  # a specific layer, obtained from subclassing Sprite and passing the
  # pre-render: true option (otherwise,
  # it'd be the shared, on-screen canvas, but maybe we don't want that).
  refresh: =>
    @options.canvas.queue [
      (player) ->
        @.clear()
        @.context.fillStyle = '#000000'
        @.context.fillRect(player.x, player.y, 32, 32)
      [this]
    ]
