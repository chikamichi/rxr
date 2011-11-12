# RXR.Player
# -----------
#
# Represents the player inside the canvas. Currently, this is a black
# square.
#
# This obviously assumes the player controls only one entity at a time…
#
window.RXR = ((RXR) ->
  RXR.Player = class
    constructor: (@options) ->
      _.extend @, (new RXR.Helpers).components
      _.extend @, (new RXR.Helpers).keyCodes
      @.component_name = 'player'

      @.available_directions = ['left', 'up', 'right', 'down']
      @.speed =
        normal: 1,
        fast: 3

      RXR.Events.bind 'player:set:coordinates',    @.setCoordinates
      RXR.Events.bind 'player:update:coordinates', @.updateCoordinates
      RXR.Events.bind 'player:refresh',            @.refresh

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

    # Private: Inspects a normalized directions hash and updates the player's
    # coordinates.
    #
    # directions - Normalized directions list
    _move: (direction, speed) ->
      if direction is 'left'
        @.x -= speed
        return
      if direction is 'up'
        @.y -= speed
        return
      if direction is 'right'
        @.x += speed
        return
      if direction is 'down'
        @.y += speed
        return

  return RXR
)(window.RXR || {})
