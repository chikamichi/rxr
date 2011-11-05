(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  Game.MainLoop = (function() {
    function MainLoop(options) {
      this.options = options;
      this._mainLoop = __bind(this._mainLoop, this);
      this.perform = __bind(this.perform, this);
      this.rate = 1000 / 60;
    }
    MainLoop.prototype.start = function() {
      return this._loop(this._mainLoop);
    };
    MainLoop.prototype.perform = function() {
      this._update();
      return this._redraw();
    };
    MainLoop.prototype._update = function() {
      Game.Events.trigger('keyboard:clear_old_pressed');
      return Game.Events.trigger('player:update:coordinates', Game.current.keyboard.get_pressed());
    };
    MainLoop.prototype._redraw = function() {
      Game.Events.trigger('player:refresh');
      return Game.Events.trigger('canvas:refresh');
    };
    MainLoop.prototype._mainLoop = function() {
      this.perform();
      if (this.options.has_fps) {
        Game.Events.trigger('fps:refresh');
      }
      return this._loop(this._mainLoop);
    };
    MainLoop.prototype._loop = function(next) {
      return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback, element) {
        return window.setTimeout(callback, this.rate);
      })(next);
    };
    return MainLoop;
  })();
}).call(this);
