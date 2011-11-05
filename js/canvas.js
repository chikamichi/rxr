(function() {
  Game.Canvas = Backbone.View.extend({
    initialize: function() {
      _.extend(this, Game.Helpers.components);
      this.component_name = 'canvas';
      this.context = $(this.el).get(0).getContext("2d");
      this._setDimensions();
      _.bindAll(this, 'refresh');
      return Game.Events.bind('canvas:refresh', this.refresh);
    },
    _setDimensions: function() {
      this.width = Game.Helpers.pixels2int($(this.el).css('width'));
      this.height = Game.Helpers.pixels2int($(this.el).css('height'));
      $(this.el).attr('width', this.width);
      return $(this.el).attr('height', this.height);
    },
    init: function() {
      var data;
      data = {
        x: this.width / 2 - 16,
        y: this.height / 2 - 16
      };
      this.clear();
      this.refresh(data);
      Game.Events.trigger('player:set:coordinates', data);
      return this.ready();
    },
    clear: function() {
      return this.context.clearRect(0, 0, this.width, this.height);
    },
    refresh: function(data) {
      this.clear();
      return this.context.fillRect(data.x, data.y, 32, 32);
    }
  });
}).call(this);
