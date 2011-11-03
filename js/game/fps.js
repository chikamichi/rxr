/**
 * FPS measurement and displaying.
 */
Game.FPS = Backbone.View.extend({
  initialize: function() {
    this.frameCount = 0;
    this.fps = 0;
    this.lastTime = this._getTime();

    _.bindAll(this, 'refresh');

    Game.Events.bind('fps:refresh', this.refresh);
  },

  /**
   * Public: Refresh the FPS counter.
   */
  refresh: function() {
    $(this.el).find('.value').html(this._compute());
  },

  /**
   * Private: return the current time as a UNIX timestamp.
   */
  _getTime: function() {
    return +(new Date());
  },

  /**
   * Private: Computes the current FPS by diffing the two latest
   * time frames.
   */
  _compute: function() {
    var newTime = this._getTime();
    var diffTime = newTime - this.lastTime;

    if (diffTime >= 1000) {
      this.fps = this.frameCount;
      this.frameCount = 0;
      this.lastTime = newTime;
    }

    this.frameCount++;
    return this.fps;
  }
});
