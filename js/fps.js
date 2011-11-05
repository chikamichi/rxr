(function() {
  Game.FPS = Backbone.View.extend({
    initialize: function() {
      this.frameCount = 0;
      this.fps = 0;
      this.lastTime = this._getTime();
      _.bindAll(this, 'refresh');
      return Game.Events.bind('fps:refresh', this.refresh);
    },
    refresh: function() {
      return $(this.el).find('.value').html(this._compute());
    },
    _getTime: function() {
      return +(new Date());
    },
    _compute: function() {
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
    }
  });
}).call(this);
