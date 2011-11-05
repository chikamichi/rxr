(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  Game.Canvas = (function() {
    function Canvas(options) {
      this.options = options;
      this.refresh = __bind(this.refresh, this);
      _.extend(this, Game.Helpers.components);
      this.component_name = 'canvas';
      this.context = $(this.options.el).get(0).getContext("2d");
      this._setDimensions();
      Game.Events.bind('canvas:refresh', this.refresh);
    }
    Canvas.prototype._setDimensions = function() {
      this.width = Game.Helpers.pixels2int($(this.options.el).css('width'));
      this.height = Game.Helpers.pixels2int($(this.options.el).css('height'));
      $(this.options.el).attr('width', this.width);
      return $(this.options.el).attr('height', this.height);
    };
    Canvas.prototype.init = function() {
      var data;
      data = {
        x: this.width / 2 - 16,
        y: this.height / 2 - 16
      };
      this.refresh(data);
      Game.Events.trigger('player:set:coordinates', data);
      return this.ready();
    };
    Canvas.prototype.clear = function() {
      return this.context.clearRect(0, 0, this.width, this.height);
    };
    Canvas.prototype.refresh = function(data) {
      this.clear();
      return this.context.fillRect(data.x, data.y, 32, 32);
    };
    return Canvas;
  })();
}).call(this);
