# RXR.Keyboard
# -------------
#
# Listens and reacts to keyboard events.
#
window.RXR = ((RXR) ->
  RXR.Keyboard = class
    constructor: ->
      _.extend @, (new RXR.Helpers).components
      _.extend @, (new RXR.Helpers).keyCodes
      @.component_name = 'keyboard'

      RXR.Events.bind 'keyboard:clear_old_pressed', @.clearOldPressed

      @.pressed = {}
      @.was_pressed = {}

      @.pressed_threshold = 200 # in ms

    # Public: Bootstrap the keyboard IO monitoring.
    init: ->
      @_startMonitoringKeyEvents()
      @ready()

    # Public: Get only the pressed key for a given type.
    #
    # Examples:
    #
    #   get_pressed('directions')
    #
    # Check RXR.Helpers for a list of available filters.
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

  return RXR
)(window.RXR || {})
