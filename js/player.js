(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  window.RXR = (function(RXR) {
    RXR.Player = (function() {
      __extends(_Class, RXR.Entity);
      function _Class(options) {
        this.options = options;
        this.refresh = __bind(this.refresh, this);
        this.component_name = 'player';
        _Class.__super__.constructor.call(this, _.extend(this.options, {
          component_name: this.component_name
        }));
      }
      _Class.prototype.refresh = function() {
        return this.scene.queue([
          function(entity) {
            this.clear();
            this.context.fillStyle = '#000000';
            return this.context.fillRect(entity.x, entity.y, 32, 32);
          }, [this]
        ]);
      };
      return _Class;
    })();
    return RXR;
  })(window.RXR || {});
}).call(this);
