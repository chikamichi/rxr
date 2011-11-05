(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  Game.FPS = (function() {
    function FPS() {
      this.refresh = __bind(this.refresh, this);      this.frameCount = 0;
      this.fps = 0;
      this.lastTime = this._getTime();
      Game.Events.bind('fps:refresh', this.refresh);
    }
    FPS.prototype.refresh = function() {
      return $(this.el).find('.value').html(this._compute());
    };
    FPS.prototype._getTime = function() {
      return +(new Date());
    };
    FPS.prototype._compute = function() {
      var diffTime, newTime;
      newTime = this._getTime();
      diffTime = newTime - this.lastTime;
      if (diffTime >= 1000) {
        this.fps = this.frameCount;
        this.frameCount = 0;
        this.lastTime = newTime;
      }
      this.frameCount++;
      return this.fps;
    };
    return FPS;
  })();
}).call(this);
