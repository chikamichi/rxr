(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  Game.Keyboard = Backbone.Model.extend({
    initialize: function() {
      _.extend(this, Game.Helpers.components);
      _.extend(this, Game.Helpers.keyCodes);
      this.component_name = 'keyboard';
      return this.pressed = {};
    },
    init: function() {
      this._startMonitoringKeyEvents();
      return Game.Events.trigger('keyboard:ready', this.component_name);
    },
    get_pressed: function(type) {
      var filtered;
      filtered = _.intersection(this.KEYTYPES[type], _.keys(this.pressed));
      return _.map(filtered, __bind(function(keyCode) {
        return this.KEYCODES[keyCode];
      }, this));
    },
    _startMonitoringKeyEvents: function() {
      window.addEventListener('keyup', (__bind(function(event) {
        return this._onKeyup(event);
      }, this)), false);
      return window.addEventListener('keydown', (__bind(function(event) {
        return this._onKeydown(event);
      }, this)), false);
    },
    _onKeydown: function(event) {
      return this.pressed[event.keyCode] = true;
    },
    _onKeyup: function(event) {
      return delete this.pressed[event.keyCode];
    }
  });
}).call(this);
