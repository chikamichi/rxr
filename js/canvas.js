(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.RXR = (function(RXR) {
    RXR.Canvas = (function() {
      function _Class(options) {
        this.options = options;
        this.refresh = __bind(this.refresh, this);
        _.extend(this, (new RXR.Helpers).components);
        _.extend(this, (new RXR.Helpers).drawable);
        this.component_name = 'canvas';
        this.context = $(this.options.el).get(0).getContext("2d");
        this._setDimensions();
        this.render_queue = [];
        RXR.Events.bind('canvas:refresh', this.refresh);
      }
      _Class.prototype.init = function() {
        var data;
        data = {
          x: this.width / 2 - 16,
          y: this.height / 2 - 16
        };
        this.clear();
        RXR.Events.trigger('player:set:coordinates', data);
        return this.ready();
      };
      _Class.prototype.clear = function() {
        this.context.fillStyle = 'rgba(255,255,255,1)';
        this.context.strokeStyle = 'rgba(255,255,255,1)';
        return this.context.clearRect(0, 0, this.width, this.height);
      };
      _Class.prototype.queue = function(callback) {
        return this.render_queue.push(callback);
      };
      _Class.prototype.refresh = function() {
        var callback, _i, _len, _ref;
        _ref = this.render_queue;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          callback = _ref[_i];
          callback[0].apply(this, callback[1]);
        }
        return this.render_queue = [];
      };
      _Class.prototype._setDimensions = function() {
        this.width = this.pixels2int($(this.options.el).css('width'));
        this.height = this.pixels2int($(this.options.el).css('height'));
        $(this.options.el).attr('width', this.width);
        return $(this.options.el).attr('height', this.height);
      };
      return _Class;
    })();
    return RXR;
  })(window.RXR || {});
}).call(this);
