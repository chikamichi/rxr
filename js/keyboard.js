(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  Game.Keyboard = (function() {
    function Keyboard() {
      this.clearOldPressed = __bind(this.clearOldPressed, this);      _.extend(this, Game.Helpers.components);
      _.extend(this, Game.Helpers.keyCodes);
      this.component_name = 'keyboard';
      Game.Events.bind('keyboard:clear_old_pressed', this.clearOldPressed);
      this.pressed = {};
      this.was_pressed = {};
      this.pressed_threshold = 200;
    }
    Keyboard.prototype.init = function() {
      this._startMonitoringKeyEvents();
      Game.Events.trigger('keyboard:ready', this.component_name);
      return this.ready();
    };
    Keyboard.prototype.get_pressed = function() {
      var filtered, keyCode, timestamp, _ref;
      filtered = {};
      _ref = this.pressed;
      for (keyCode in _ref) {
        timestamp = _ref[keyCode];
        filtered[this.KEYCODES[keyCode]] = [timestamp, this.was_pressed[keyCode]];
      }
      return filtered;
    };
    Keyboard.prototype.clearOldPressed = function() {
      var keyCode, now, timestamp, _ref, _results;
      now = +(new Date());
      _ref = this.was_pressed;
      _results = [];
      for (keyCode in _ref) {
        timestamp = _ref[keyCode];
        _results.push((now - timestamp) > this.pressed_threshold && !this.pressed[keyCode] ? delete this.was_pressed[keyCode] : void 0);
      }
      return _results;
    };
    Keyboard.prototype._startMonitoringKeyEvents = function() {
      $(window).keyup(__bind(function(event) {
        return this._onKeyup(event);
      }, this));
      return $(window).keydown(__bind(function(event) {
        return this._onKeyDown(event);
      }, this));
    };
    Keyboard.prototype._onKeyDown = function(event) {
      return this.pressed[event.keyCode] = +(new Date());
    };
    Keyboard.prototype._onKeyup = function(event) {
      this.was_pressed[event.keyCode] = this.pressed[event.keyCode];
      return delete this.pressed[event.keyCode];
    };
    return Keyboard;
  })();
}).call(this);
