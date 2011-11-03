/**
 * All canvas-related functions.
 */
Game.Canvas = Backbone.View.extend({
  initialize: function() {
    // TODO: the components could extend a Game.Component which would
    // extend Backbone.View/Model?
    _.extend(this, Game.Helpers.components);
    this.component_name = 'canvas';

    this.context = $(this.el).get(0).getContext("2d");
    this._setDimensions();

    _.bindAll(this, 'refresh');

    Game.Events.bind('canvas:refresh', this.refresh);
  },

  /**
   * Private: Sets the dimensions of the canvas. This is mandatory
   * to get a proper ratio. This is based on the declared width and
   * height in the CSS. This could be made dynamic (resizing) without
   * much efforts.
   */
  _setDimensions: function() {
    this.width  = Game.Helpers.pixels2int($(this.el).css('width'));
    this.height = Game.Helpers.pixels2int($(this.el).css('height'));
    $(this.el).attr('width',  this.width);
    $(this.el).attr('height', this.height);
  },

  /**
   * Public: Bootstrap the canvas.
   */
  init: function() {
    var data = {
      x: this.width / 2 - 16,
      y: this.height / 2 - 16
    };

    this.clear();
    this.refresh(data);
    Game.Events.trigger('player:set:coordinates', data);
    this.ready();
  },

  clear: function() {
    this.context.clearRect(0, 0, this.width, this.height);
  },

  /**
   * Public: Updates the square on the screen.
   */
  refresh: function(data) {
    this.clear();
    this.context.fillRect(data.x, data.y, 32, 32);
  }
});
