(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.RXR = (function(RXR) {
    RXR.FPS = (function() {
      function _Class(options) {
        this.options = options;
        this.refresh = __bind(this.refresh, this);
        this.frameCount = 0;
        this.fps = 0;
        this.lastTime = this._getTime();
        RXR.Events.bind('fps:refresh', this.refresh);
      }
      _Class.prototype.refresh = function() {
        return $(this.options.el).find('.value').html(this._compute());
      };
      _Class.prototype._getTime = function() {
        return +(new Date());
      };
      _Class.prototype._compute = function() {
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
      return _Class;
    })();
    return RXR;
  })(window.RXR || {});
}).call(this);
