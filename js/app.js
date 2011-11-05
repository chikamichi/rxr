(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.Game = {};
  $(document).ready(function() {
    return Game.current = new Game.Base({
      el: $("#my-game"),
      fps: $("#fps")
    });
  });
  Game.Events = _.extend({}, Backbone.Events);
  Game.Base = Backbone.View.extend({
    initialize: function() {
      this.settings = {};
      this.settings.has_fps = Boolean(this.options.fps);
      if (this.settings.has_fps) {
        this.fps = new Game.FPS({
          el: this.options.fps
        });
      }
      this.canvas = new Game.Canvas({
        el: $(this.el).find("canvas")
      });
      this.keyboard = new Game.Keyboard();
      this.player = new Game.Player();
      this.loop = new Game.MainLoop({
        has_fps: this.settings.has_fps
      });
      _.bindAll(this, "start", "checkIfReady");
      this.mustBeReady = ["canvas", "keyboard", "player"];
      this.readyComponents = [];
      _.each(this.mustBeReady, __bind(function(component) {
        return Game.Events.bind(component + ":ready", this.checkIfReady);
      }, this));
      return this.init();
    },
    checkIfReady: function(component) {
      this.readyComponents.push(component);
      if (_.isEmpty(_.difference(this.mustBeReady, this.readyComponents))) {
        return this.start();
      }
    },
    init: function() {
      this.canvas.init();
      this.keyboard.init();
      return this.player.init();
    },
    start: function() {
      return this.loop.start();
    }
  });
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
