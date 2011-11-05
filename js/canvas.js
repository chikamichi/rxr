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
      this.render_queue = [];
      Game.Events.bind('canvas:refresh', this.refresh);
    }
    Canvas.prototype.init = function() {
      var data;
      data = {
        x: this.width / 2 - 16,
        y: this.height / 2 - 16
      };
      this.clear();
      Game.Events.trigger('player:set:coordinates', data);
      return this.ready();
    };
    Canvas.prototype.clear = function() {
      return this.context.clearRect(0, 0, this.width, this.height);
    };
    Canvas.prototype.queue = function(callback) {
      return this.render_queue.push(callback);
    };
    Canvas.prototype.refresh = function() {
      var callback, _i, _len, _ref;
      _ref = this.render_queue;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        callback = _ref[_i];
        callback[0].apply(this, callback[1]);
      }
      return this.render_queue = [];
    };
    Canvas.prototype._setDimensions = function() {
      this.width = Game.Helpers.pixels2int($(this.options.el).css('width'));
      this.height = Game.Helpers.pixels2int($(this.options.el).css('height'));
      $(this.options.el).attr('width', this.width);
      return $(this.options.el).attr('height', this.height);
    };
    return Canvas;
  })();
}).call(this);
