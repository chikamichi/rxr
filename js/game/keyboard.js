/**
 * Listens and reacts to keyboard events.
 */
Game.Keyboard = Backbone.Model.extend({
  initialize: function() {
    _.extend(this, Game.Helpers.components);
    _.extend(this, Game.Helpers.keyCodes);
    this.component_name = 'keyboard';

    this.pressed = {};
  },

  /**
   * Public: Bootstrap the keyboard IO monitoring.
   */
  init: function() {
    this._startMonitoringKeyEvents();
    Game.Events.trigger('keyboard:ready', this.component_name);
  },

  /**
   * Public: Get only the pressed key for a given type.
   *
   * Examples:
   *
   *   get_pressed('directions')
   *
   * Check Game.Helpers for a list of available filters.
   */
  get_pressed: function(type) {
    var that = this;
    var filtered = _.intersection(this.KEYTYPES[type], _.keys(this.pressed));
    return _.map(filtered, function(keyCode) {
      return that.KEYCODES[keyCode];
    });
  },

  /**
   * Private: Bind listeners to keyboard events.
   *
   * TODO: support IE
   */
  _startMonitoringKeyEvents: function() {
    var that = this;
    window.addEventListener('keyup',   function(event) { that._onKeyup(event); },   false);
    window.addEventListener('keydown', function(event) { that._onKeydown(event); }, false);
  },

  /**
   * Private: Adds a key to the list of pressed keys.
   */
  _onKeydown: function(event) {
    this.pressed[event.keyCode] = true;
  },

  /**
   * Private: Removes a key to the list of pressed keys.
   */
  _onKeyup: function(event) {
    delete this.pressed[event.keyCode];
  }
});
