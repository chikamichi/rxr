# Game.Keyboard
# -------------
#
# Listens and reacts to keyboard events.
#
Game.Keyboard = Backbone.Model.extend({
  initialize: ->
    _.extend(this, Game.Helpers.components)
    _.extend(this, Game.Helpers.keyCodes)
    @.component_name = 'keyboard'

    @.pressed = {}

  # Public: Bootstrap the keyboard IO monitoring.
  init: ->
    @._startMonitoringKeyEvents()
    Game.Events.trigger('keyboard:ready', @.component_name)

   # Public: Get only the pressed key for a given type.
   #
   # Examples:
   #
   #   get_pressed('directions')
   #
   # Check Game.Helpers for a list of available filters.
  get_pressed: (type) ->
    filtered = _.intersection(@.KEYTYPES[type], _.keys(@.pressed))
    return _.map(filtered, (keyCode) =>
      return @.KEYCODES[keyCode]
    )

  # Private: Bind listeners to keyboard events.
  #
  # TODO: support IE
  _startMonitoringKeyEvents: ->
    window.addEventListener('keyup', ((event) => @._onKeyup(event)), false)
    window.addEventListener('keydown', ((event) => @._onKeydown(event)), false)

  # Private: Adds a key to the list of pressed keys.
  _onKeydown: (event) ->
    @.pressed[event.keyCode] = true

  # Private: Removes a key to the list of pressed keys.
  _onKeyup: (event) ->
    delete @.pressed[event.keyCode]
})
