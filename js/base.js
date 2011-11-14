(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.RXR = (function(RXR) {
    RXR.Base = (function() {
      function _Class(options) {
        var bg_canvas, player_canvas;
        this.options = options;
        this.start = __bind(this.start, this);
        this.checkIfReady = __bind(this.checkIfReady, this);
        this.settings = {};
        this.settings.has_fps = Boolean(this.options.fps);
        this.settings.container = $(this.options.el);
        if (this.settings.has_fps) {
          this.fps = new RXR.FPS({
            el: this.options.fps
          });
        }
        this.keyboard = new RXR.Keyboard();
        this.loop = new RXR.MainLoop({
          has_fps: this.settings.has_fps
        });
        bg_canvas = new RXR.Canvas({
          container: this.settings.container
        });
        this.bg = new RXR.Entity({
          component_name: 'bg',
          scene: bg_canvas,
          refresh: function() {
            return this.scene.queue([
              function(bg) {
                this.clear();
                this.context.fillStyle = '#FFFFFF';
                return this.context.fillRect(0, 0, bg.scene.width, bg.scene.height);
              }, [this]
            ]);
          }
        });
        player_canvas = new RXR.Canvas({
          container: this.settings.container
        });
        this.player = new RXR.Player({
          scene: player_canvas
        });
        this.init();
        return this;
      }
      _Class.prototype.checkIfReady = function(component) {
        this.readyComponents.push(component);
        if (_.isEmpty(_.difference(this.mustBeReady, this.readyComponents))) {
          return this.start();
        }
      };
      _Class.prototype.init = function() {
        this.mustBeReady = ["keyboard", "bg", "player"];
        this.readyComponents = [];
        _.each(this.mustBeReady, __bind(function(component) {
          return RXR.Events.bind(component + ":ready", this.checkIfReady);
        }, this));
        this.bg.init();
        this.keyboard.init();
        return this.player.init();
      };
      _Class.prototype.start = function() {
        return this.loop.start();
      };
      return _Class;
    })();
    return RXR;
  })(window.RXR || {});
}).call(this);
