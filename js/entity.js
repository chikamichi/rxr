(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.RXR = (function(RXR) {
    RXR.Entity = (function() {
      function _Class(options) {
        this.options = options;
        this.refresh = __bind(this.refresh, this);
        this.updateCoordinates = __bind(this.updateCoordinates, this);
        this.setCoordinates = __bind(this.setCoordinates, this);
        console.log(this.options);
        _.extend(this, (new RXR.Helpers).components);
        _.extend(this, (new RXR.Helpers).keyCodes);
        this.scene = this.options.scene;
        this.available_directions = ['left', 'up', 'right', 'down'];
        this.speed = {
          normal: 1,
          fast: 3
        };
      }
      _Class.prototype.init = function() {
        RXR.Events.bind(this.options.component_name + ':set:coordinates', this.setCoordinates);
        RXR.Events.bind(this.options.component_name + ':update:coordinates', this.updateCoordinates);
        RXR.Events.bind(this.options.component_name + ':refresh', this.refresh);
        this.setCoordinates({
          x: this.scene.width / 2 - 16,
          y: this.scene.height / 2 - 16
        });
        this.refresh();
        return this.ready();
      };
      _Class.prototype.setCoordinates = function(data) {
        if (data === void 0) {
          data = {};
        }
        this.x = data.x || 0;
        return this.y = data.y || 0;
      };
      _Class.prototype.coordinates = function() {
        return {
          x: this.x,
          y: this.y
        };
      };
      _Class.prototype.updateCoordinates = function(pressed) {
        var keyCode, speed, state, _results;
        _results = [];
        for (keyCode in pressed) {
          state = pressed[keyCode];
          _results.push(_.include(this.available_directions, keyCode) ? (speed = state[1] ? this.speed.fast : this.speed.normal, this._move(keyCode, speed)) : void 0);
        }
        return _results;
      };
      _Class.prototype.refresh = function() {};
      _Class.prototype._move = function(direction, speed) {
        if (direction === 'left') {
          this.x -= speed;
          return;
        }
        if (direction === 'up') {
          this.y -= speed;
          return;
        }
        if (direction === 'right') {
          this.x += speed;
          return;
        }
        if (direction === 'down') {
          this.y += speed;
        }
      };
      return _Class;
    })();
    return RXR;
  })(window.RXR || {});
}).call(this);
