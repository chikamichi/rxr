(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.RXR = (function(RXR) {
    RXR.Keyboard = (function() {
      function _Class() {
        this.clearOldPressed = __bind(this.clearOldPressed, this);        _.extend(this, (new RXR.Helpers).components);
        _.extend(this, (new RXR.Helpers).keyCodes);
        this.component_name = 'keyboard';
        RXR.Events.bind('keyboard:clear_old_pressed', this.clearOldPressed);
        this.pressed = {};
        this.was_pressed = {};
        this.pressed_threshold = 200;
      }
      _Class.prototype.init = function() {
        this._startMonitoringKeyEvents();
        RXR.Events.trigger('keyboard:ready', this.component_name);
        return this.ready();
      };
      _Class.prototype.get_pressed = function() {
        var filtered, keyCode, timestamp, _ref;
        filtered = {};
        _ref = this.pressed;
        for (keyCode in _ref) {
          timestamp = _ref[keyCode];
          filtered[this.KEYCODES[keyCode]] = [timestamp, this.was_pressed[keyCode]];
        }
        return filtered;
      };
      _Class.prototype.clearOldPressed = function() {
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
      _Class.prototype._startMonitoringKeyEvents = function() {
        $(window).keyup(__bind(function(event) {
          return this._onKeyup(event);
        }, this));
        return $(window).keydown(__bind(function(event) {
          return this._onKeyDown(event);
        }, this));
      };
      _Class.prototype._onKeyDown = function(event) {
        return this.pressed[event.keyCode] = +(new Date());
      };
      _Class.prototype._onKeyup = function(event) {
        this.was_pressed[event.keyCode] = this.pressed[event.keyCode];
        return delete this.pressed[event.keyCode];
      };
      return _Class;
    })();
    return RXR;
  })(window.RXR || {});
}).call(this);
