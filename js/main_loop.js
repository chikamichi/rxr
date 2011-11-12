(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.RXR = (function(RXR) {
    RXR.MainLoop = (function() {
      function _Class(options) {
        this.options = options;
        this._mainLoop = __bind(this._mainLoop, this);
        this.perform = __bind(this.perform, this);
        this.rate = 1000 / 60;
      }
      _Class.prototype.start = function() {
        return this._loop(this._mainLoop);
      };
      _Class.prototype.perform = function() {
        this._update();
        return this._redraw();
      };
      _Class.prototype._update = function() {
        RXR.Events.trigger('keyboard:clear_old_pressed');
        return RXR.Events.trigger('player:update:coordinates', RXR.current.keyboard.get_pressed());
      };
      _Class.prototype._redraw = function() {
        RXR.Events.trigger('player:refresh');
        return RXR.Events.trigger('canvas:refresh');
      };
      _Class.prototype._mainLoop = function() {
        this.perform();
        if (this.options.has_fps) {
          RXR.Events.trigger('fps:refresh');
        }
        return this._loop(this._mainLoop);
      };
      _Class.prototype._loop = function(next) {
        return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback, element) {
          return window.setTimeout(callback, this.rate);
        })(next);
      };
      return _Class;
    })();
    return RXR;
  })(window.RXR || {});
}).call(this);
