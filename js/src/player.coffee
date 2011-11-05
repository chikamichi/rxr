# Game.Player
# -----------
#
# Represents the player inside the canvas. Currently, this is a black
# square.
#
# This obviously assumes the player controls only one entity at a time…
#
class Game.Player
  constructor: ->
    _.extend(this, Game.Helpers.components)
    _.extend(this, Game.Helpers.keyCodes)
    @.component_name = 'player'

    @.speed =
      normal: 1,
      fast: 3

    Game.Events.bind 'player:set:coordinates',    @.setCoordinates
    Game.Events.bind 'player:update:coordinates', @.updateCoordinates

  # Public: Bootstrap the player component.
  init: ->
    @.ready()

  # TODO: remove this and pass a specific draw order (cb) to the canvas instead.
  refresh: (context) ->
    Game.Events.trigger 'canvas:refresh', {x: @.x, y: @.y}

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
