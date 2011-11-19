(function() {
  window.RXR = {};
  RXR._events = function() {};
  MicroEvent.mixin(RXR._events);
  RXR.Events = new RXR._events();
  Array.prototype.remove = function(e) {
    var t, _ref;
    if ((t = this.indexOf(e)) > -1) {
      return ([].splice.apply(this, [t, t - t + 1].concat(_ref = [])), _ref);
    }
  };
  $(document).ready(function() {
    return window.game = new RXR.Base({
      el: $("#my-game"),
      fps: $("#fps"),
      init: function() {
        var bg, bg_canvas, player, player_canvas;
        bg_canvas = new RXR.Canvas({
          container: this.settings.container,
          layer_name: 'bg'
        });
        player_canvas = new RXR.Canvas({
          container: this.settings.container,
          layer_name: 'player'
        });
        this.layers.push(bg_canvas);
        this.layers.push(player_canvas);
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
        player = new RXR.Player({
          component_name: 'player',
          scene: player_canvas
        });
        this.entities.push(bg);
        return this.entities.push(player);
      }
    });
  });
}).call(this);
