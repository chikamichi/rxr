(function() {
  window.RXR = (function(RXR) {
    RXR.Helpers = (function() {
      function _Class() {}
      _Class.prototype.drawable = {
        pixels2int: function(pixels) {
          return parseInt(pixels, 10);
        }
      };
      _Class.prototype.components = {
        ready: function() {
          return RXR.Events.trigger(this.component_name + ":ready", this.component_name);
        }
      };
      _Class.prototype.keyCodes = {
        keyCode: {
          left: 37,
          up: 38,
          right: 39,
          down: 40
        },
        KEYTYPES: {
          directions: ["37", "38", "39", "40"]
        },
        KEYCODES: {
          37: "left",
          38: "up",
          39: "right",
          40: "down"
        }
      };
      return _Class;
    })();
    return RXR;
  })(window.RXR || {});
}).call(this);
