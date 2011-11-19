(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.RXR = (function(RXR) {
    RXR.MainLoop = (function() {
      function _Class(options) {
        this.options = options;
        this._mainLoop = __bind(this._mainLoop, this);
        this._perform = __bind(this._perform, this);
        this.currentGame = this.options.current_game;
        this.rate = 1000 / 60;
      }
      _Class.prototype.start = function() {
        return this._loop(this._mainLoop);
      };
      _Class.prototype._perform = function() {
        this._update();
        return this._redraw();
      };
      _Class.prototype._update = function() {
        RXR.Events.trigger('keyboard:clear_old_pressed');
        return RXR.Events.trigger('player:update:coordinates', this.currentGame.keyboard.get_pressed());
      };
      _Class.prototype._redraw = function() {
        var entity, layer, _i, _j, _len, _len2, _ref, _ref2, _results;
        _ref = this.currentGame.entities;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          entity = _ref[_i];
          RXR.Events.trigger(entity.component_name + ':refresh', entity);
        }
        _ref2 = this.currentGame.layers;
        _results = [];
        for (_j = 0, _len2 = _ref2.length; _j < _len2; _j++) {
          layer = _ref2[_j];
          _results.push(RXR.Events.trigger('layers:' + layer.options.layer_name + ':refresh'));
        }
        return _results;
      };
      _Class.prototype._mainLoop = function() {
        this._perform();
        if (this.options.has_fps) {
          RXR.Events.trigger('fps:refresh');
        }
        return this._loop(this._mainLoop);
      };
      _Class.prototype._loop = function(next) {
        return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback, element) {
          return window.setTimeout(callback, this.rate);
        })(next);
      };
      return _Class;
    })();
    return RXR;
  })(window.RXR || {});
}).call(this);
