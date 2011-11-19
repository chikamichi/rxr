(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.RXR = (function(RXR) {
    RXR.Base = (function() {
      function _Class(options) {
        var bg, bg_canvas, player, player_canvas;
        this.options = options;
        this.start = __bind(this.start, this);
        this.checkIfReady = __bind(this.checkIfReady, this);
        this.settings = {};
        this.settings.has_fps = Boolean(this.options.fps);
        this.settings.container = $(this.options.el);
        this.layers = [];
        this.entities = [];
        if (this.settings.has_fps) {
          this.fps = new RXR.FPS({
            el: this.options.fps
          });
        }
        this.keyboard = new RXR.Keyboard();
        this.loop = new RXR.MainLoop({
          has_fps: this.settings.has_fps,
          current_game: this
        });
        bg_canvas = new RXR.Canvas({
          container: this.settings.container,
          layer_name: 'bg'
        });
        bg = new RXR.Entity({
          component_name: 'bg',
          scene: bg_canvas,
          refresh: function(entity) {
            return entity.scene.queue([
              function(scene) {
                scene.clear();
                scene.context.fillStyle = '#FFFFFF';
                return scene.context.fillRect(0, 0, scene.width, scene.height);
              }, [entity.scene]
            ]);
          }
        });
        this.layers.push(bg_canvas);
        this.entities.push(bg);
        player_canvas = new RXR.Canvas({
          container: this.settings.container,
          layer_name: 'player'
        });
        player = new RXR.Player({
          component_name: 'player',
          scene: player_canvas
        });
        this.layers.push(player_canvas);
        this.entities.push(player);
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
        var component, _i, _len, _ref, _results;
        this.mustBeReady = _.map(this.entities, (function(entity) {
          return entity.component_name;
        }));
        this.mustBeReady.push('keyboard');
        this.readyComponents = [];
        _.each(this.mustBeReady, __bind(function(component) {
          return RXR.Events.bind(component + ":ready", this.checkIfReady);
        }, this));
        this.keyboard.init();
        _ref = this.entities;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          component = _ref[_i];
          _results.push(component.init());
        }
        return _results;
      };
      _Class.prototype.start = function() {
        return this.loop.start();
      };
      return _Class;
    })();
    return RXR;
  })(window.RXR || {});
}).call(this);
