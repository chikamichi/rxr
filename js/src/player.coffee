# Game.Player
# -----------
#
# Represents the player inside the canvas. Currently, this is a black
# square.
#
# This obviously assumes the player controls only one entity at a time…
#
class Game.Player
  constructor: (@options) ->
    _.extend(this, Game.Helpers.components)
    _.extend(this, Game.Helpers.keyCodes)
    @.component_name = 'player'

    @.speed =
      normal: 3

    Game.Events.bind 'player:set:coordinates',    @.setCoordinates
    Game.Events.bind 'player:update:coordinates', @.updateCoordinates
    Game.Events.bind 'player:refresh',            @.refresh

  # Public: Bootstrap the player component.
  init: ->
    @.refresh()
    @.ready()

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
  # Directions must be passed as a normalized list of human-readable values,
  # such as ['left', 'top'].
  #
  # directions - Normalized directions list
  updateCoordinates: (directions) =>
    @._move(directions)

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

  # Private: Inspects a normalized directions hash and updates the player's
  # coordinates.
  #
  # directions - Normalized directions list
  _move: (directions) ->
    if _.include(directions, 'left')
      @.x -= @.speed.normal
    if _.include(directions, 'up')
      @.y -= @.speed.normal
    if _.include(directions, 'right')
      @.x += @.speed.normal
    if _.include(directions, 'down')
      @.y += @.speed.normal
