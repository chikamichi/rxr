(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  Game.Keyboard = (function() {
    function Keyboard() {
      _.extend(this, Game.Helpers.components);
      _.extend(this, Game.Helpers.keyCodes);
      this.component_name = 'keyboard';
      this.pressed = {};
    }
    Keyboard.prototype.init = function() {
      this._startMonitoringKeyEvents();
      Game.Events.trigger('keyboard:ready', this.component_name);
      return this.ready();
    };
    Keyboard.prototype.get_pressed = function(type) {
      var filtered;
      filtered = _.intersection(this.KEYTYPES[type], _.keys(this.pressed));
      return _.map(filtered, __bind(function(keyCode) {
        return this.KEYCODES[keyCode];
      }, this));
    };
    Keyboard.prototype._startMonitoringKeyEvents = function() {
      window.addEventListener('keyup', (__bind(function(event) {
        return this._onKeyup(event);
      }, this)), false);
      return window.addEventListener('keydown', (__bind(function(event) {
        return this._onKeydown(event);
      }, this)), false);
    };
    Keyboard.prototype._onKeydown = function(event) {
      return this.pressed[event.keyCode] = true;
    };
    Keyboard.prototype._onKeyup = function(event) {
      return delete this.pressed[event.keyCode];
    };
    return Keyboard;
  })();
}).call(this);
