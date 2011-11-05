(function() {
  Game.MainLoop = Backbone.Model.extend({
    initialize: function() {
      this.frameSet = 1000 / 60;
      return _.bindAll(this, 'perform', '_mainLoop');
    },
    perform: function() {
      this._update();
      return this._redraw();
    },
    _update: function() {
      return Game.Events.trigger('player:update:coordinates', Game.current.keyboard.get_pressed('directions'));
    },
    _redraw: function() {
      return Game.Events.trigger('canvas:refresh', Game.current.player.coordinates());
    },
    start: function() {
      return this._loop(this._mainLoop);
    },
    _loop: function(next) {
      return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback, element) {
        return window.setTimeout(callback, 1000 / 60);
      })(next);
    },
    _mainLoop: function() {
      (this.perform || $.noop)();
      if (this.get('has_fps')) {
        Game.Events.trigger('fps:refresh');
      }
      return this._loop(this._mainLoop);
    }
  });
}).call(this);
