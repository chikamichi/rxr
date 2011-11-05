# Game.Keyboard
# -------------
#
# Listens and reacts to keyboard events.
#
class Game.Keyboard
  constructor: ->
    _.extend this, Game.Helpers.components
    _.extend this, Game.Helpers.keyCodes
    @.component_name = 'keyboard'

    Game.Events.bind 'keyboard:clear_old_pressed', @.clearOldPressed

    @.pressed = {}
    @.was_pressed = {}

    @.pressed_threshold = 200 # in ms

  # Public: Bootstrap the keyboard IO monitoring.
  init: ->
    @._startMonitoringKeyEvents()
    Game.Events.trigger 'keyboard:ready', @.component_name
    @.ready()

  # Public: Get only the pressed key for a given type.
  #
  # Examples:
  #
  #   get_pressed('directions')
  #
  # Check Game.Helpers for a list of available filters.
  get_pressed: ->
    filtered = {}
    for keyCode, timestamp of @.pressed
      filtered[@.KEYCODES[keyCode]] = [timestamp, @.was_pressed[keyCode]]

    return filtered

  clearOldPressed: =>
    now = +(new Date())
    for keyCode, timestamp of @.was_pressed
      if (now - timestamp) > @.pressed_threshold and not @.pressed[keyCode]
        delete @.was_pressed[keyCode]

  # Private: Bind listeners to keyboard events.
  _startMonitoringKeyEvents: ->
    $(window).keyup   (event) => @._onKeyup(event)
    $(window).keydown (event) => @._onKeyDown(event)

  # Private: Adds a key to the list of pressed keys.
  _onKeyDown: (event) ->
    @.pressed[event.keyCode] = +(new Date())

  # Private: Removes a key to the list of pressed keys.
  _onKeyup: (event) ->
    @.was_pressed[event.keyCode] = @.pressed[event.keyCode]
    delete @.pressed[event.keyCode]
