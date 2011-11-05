(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.Game = {};
  $(document).ready(function() {
    return Game.current = new Game.Base({
      el: $("#my-game"),
      fps: $("#fps")
    });
  });
  if (!Array.prototype.remove) {
    Array.prototype.remove = function(e) {
      var t, _ref;
      if ((t = this.indexOf(e)) > -1) {
        return ([].splice.apply(this, [t, t - t + 1].concat(_ref = [])), _ref);
      }
    };
  }
  Game.Events = _.extend({}, Backbone.Events);
  Game.Base = (function() {
    function Base(options) {
      this.options = options;
      this.start = __bind(this.start, this);
      this.checkIfReady = __bind(this.checkIfReady, this);
      this.settings = {};
      this.settings.has_fps = Boolean(this.options.fps);
      if (this.settings.has_fps) {
        this.fps = new Game.FPS({
          el: this.options.fps
        });
      }
      this.canvas = new Game.Canvas({
        el: $(this.options.el).find("canvas")
      });
      this.keyboard = new Game.Keyboard();
      this.player = new Game.Player({
        canvas: this.canvas
      });
      this.loop = new Game.MainLoop({
        has_fps: this.settings.has_fps
      });
      this.mustBeReady = ["canvas", "keyboard", "player"];
      this.readyComponents = [];
      _.each(this.mustBeReady, __bind(function(component) {
        return Game.Events.bind(component + ":ready", this.checkIfReady);
      }, this));
      this.init();
    }
    Base.prototype.checkIfReady = function(component) {
      this.readyComponents.push(component);
      if (_.isEmpty(_.difference(this.mustBeReady, this.readyComponents))) {
        return this.start();
      }
    };
    Base.prototype.init = function() {
      this.canvas.init();
      this.keyboard.init();
      return this.player.init();
    };
    Base.prototype.start = function() {
      return this.loop.start();
    };
    return Base;
  })();
  Game.Helpers = {
    pixels2int: function(pixels) {
      return parseInt(pixels, 10);
    },
    components: {
      ready: function() {
        return Game.Events.trigger(this.component_name + ":ready", this.component_name);
      }
    },
    keyCodes: {
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
    }
  };
}).call(this);
