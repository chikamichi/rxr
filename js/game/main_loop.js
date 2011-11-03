/**
 * Game's main loop.
 *
 * Public API:
 *
 * start() : starts the game's main loop
 */
Game.MainLoop = Backbone.Model.extend({
  initialize: function() {
    this.frameSet = 1000 / 60;
    _.bindAll(this, 'perform', '_mainLoop');
  },

  /**
   * Public: This is going to be performed on each cycle.
   *
   * This mostly does two things: asks the components to update themselves,
   * then asks the canvas to redraw itself based on the updated data.
   *
   * TODO: add hooks (before, after, around)
   */
  perform: function() {
    this._update();
    this._redraw();
  },

  /**
   * Private: Asks core components to update themselves, based on IO and other
   * components' data sets.
   */
  _update: function() {
    Game.Events.trigger('player:update:coordinates', Game.current.keyboard.get_pressed('directions'));
  },

  /**
   * Private: Asks the canvas to re-render itself, based on latest available
   * data.
   */
  _redraw: function() {
    Game.Events.trigger('canvas:refresh', Game.current.player.coordinates());
  },

  /**
   * Public: Starts the loop!
   */
  start: function() {
    this._loop(this._mainLoop);
  },

  /**
   * Private: Triggers the next cycle, providing the computation closure.
   *
   * next - The computation to be run in the next cycle
   */
  _loop: function(next) {
    return(window.requestAnimationFrame ||
           window.webkitRequestAnimationFrame ||
           window.mozRequestAnimationFrame ||
           window.oRequestAnimationFrame ||
           window.msRequestAnimationFrame ||
           function(callback, element){
             window.setTimeout(callback, 1000 / 60);
           })(next);
  },

  /**
   * Private: Unitary computation cycle. Responsible for computing
   * both internal logic code chuncks (such as FPS update, canvas
   * refresh…) and an external closure. Automatically triggers the
   * next computation cycle.
   */
  _mainLoop: function() {
    (this.perform || $.noop)();

    if (this.get('has_fps')) {
      Game.Events.trigger('fps:refresh');
    }

    this._loop(this._mainLoop);
  }
});
