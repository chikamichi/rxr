# RXR.Entity
# -----------
#
# Represents a generic entity/entity, to be drawn on a canvas.
#
# This is expected to act as a factory. Subclassing entities must
# declare a @component_name.
#
window.RXR = ((RXR) ->
  RXR.Entity = class
    constructor: (@options) ->
      console.log @options
      _.extend @, (new RXR.Helpers).components
      _.extend @, (new RXR.Helpers).keyCodes
      @scene = @options.scene

      @available_directions = ['left', 'up', 'right', 'down']
      @speed =
        normal: 1,
        fast:   3

    # Public: Bootstrap the entity component.
    init: ->
      RXR.Events.bind @options.component_name + ':set:coordinates',    @setCoordinates
      RXR.Events.bind @options.component_name + ':update:coordinates', @updateCoordinates
      RXR.Events.bind @options.component_name + ':refresh',            @refresh
      @setCoordinates(x: @scene.width / 2 - 16, y: @scene.height / 2 - 16)
      @refresh()
      @ready()

    # Public: Sets the entity's coordinates
    setCoordinates: (data) =>
      if data == undefined
        data = {}

      @x = data.x || 0
      @y = data.y || 0

    # Public: Returns the entity's coordinates.
    coordinates: ->
      x: @.x,
      y: @.y

    # Public: Updates the entity's coordinates according to the specified
    # directions (that is, several directions may be passed at once).
    #
    # Directions are passed as a normalized list of human-readable values,
    # such as ['left', 'top']. This is handled by the Keyboard component.
    #
    # pressed - Normalized pressed keys list with states
    updateCoordinates: (pressed) =>
      for keyCode, state of pressed
        if _.include(@available_directions, keyCode)
          # if previous keyDown timestamp is not undefined, then
          # we want to entity to run
          speed = if state[1] then @speed.fast else @speed.normal
          @_move(keyCode, speed)

    # To be executed on redrawing, in the context of a the canvas.
    # Does nothing by default.
    refresh: =>

    # Private: Inspects a normalized directions hash and updates the entity's
    # coordinates.
    #
    # directions - Normalized directions list
    _move: (direction, speed) ->
      if direction is 'left'
        @x -= speed
        return
      if direction is 'up'
        @y -= speed
        return
      if direction is 'right'
        @x += speed
        return
      if direction is 'down'
        @y += speed
        return

  return RXR
)(window.RXR || {})
