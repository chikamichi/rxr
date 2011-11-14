(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.RXR = (function(RXR) {
    RXR.Canvas = (function() {
      function _Class(options) {
        this.options = options;
        this.refresh = __bind(this.refresh, this);
        _.extend(this, (new RXR.Helpers).components);
        _.extend(this, (new RXR.Helpers).drawable);
        if (this.options.container) {
          this.attachToContainer();
        } else {
          this.bindScene();
        }
        this.render_queue = [];
        RXR.Events.bind('layer:' + this.options.layer_name + ':refresh', this.refresh);
      }
      _Class.prototype.init = function() {
        this.clear();
        return this.ready();
      };
      _Class.prototype.attachToContainer = function() {
        var canvas;
        this.container = this.options.container;
        canvas = $('<canvas>');
        this.container.append(canvas);
        this.canvas = $(this.container).find('canvas:last');
        this.context = this.canvas.get(0).getContext('2d');
        return this._setDimensions();
      };
      _Class.prototype.bindScene = function() {
        this.canvas = options.canvas;
        this.container = this.canvas.parent();
        this.context = this.canvas.get(0).getContext('2d');
        return this._setDimensions();
      };
      _Class.prototype.clear = function() {
        this.context.save();
        this.context.setTransform(1, 0, 0, 1, 0, 0);
        this.context.fillStyle = 'rgba(255,255,255,1)';
        this.context.strokeStyle = 'rgba(255,255,255,1)';
        this.context.clearRect(0, 0, this.width, this.height);
        return this.context.restore();
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
        this.width = this.pixels2int($(this.options.container).css('width'));
        this.height = this.pixels2int($(this.options.container).css('height'));
        $(this.canvas).attr('width', this.width);
        return $(this.canvas).attr('height', this.height);
      };
      return _Class;
    })();
    return RXR;
  })(window.RXR || {});
}).call(this);
