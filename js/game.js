window.Game = {};
$(document).ready(function() {
  Game.current = new Game.Base({
    el:  $('#my-game'),
    fps: $('#fps')
  });
});

/**
 * Events aggregator. Main synch channel.
 * Shared: not too complicated yet.
 */
Game.Events = _.extend({}, Backbone.Events);

/**
 * The game base object. Initialize the game with a main loop, a fps
 * tracker.
 *
 * Public API:
 *
 * init() : starts the game's main loop
 */
Game.Base = Backbone.View.extend({
  initialize: function() {
    var that = this;

    // TODO: make this pseudo-global (shared under Game.current's components?)
    this.settings = {};
    this.settings.has_fps = Boolean(this.options.fps);

    if (this.settings.has_fps) {
      this.fps = new Game.FPS({
        el: this.options.fps
      });
    }

    this.canvas = new Game.Canvas({
      el: $(this.el).find('canvas')
    });

    this.keyboard = new Game.Keyboard();

    this.player = new Game.Player();

    this.loop = new Game.MainLoop({
      has_fps: (this.settings.has_fps)
    });

    _.bindAll(this, 'start', 'checkIfReady');

    this.mustBeReady = ['canvas', 'keyboard', 'player'];
    this.readyComponents = [];

    _.each(this.mustBeReady, function(component) {
      Game.Events.bind(component + ':ready', that.checkIfReady);
    });

    // ignition!
    this.init();
  },

  checkIfReady: function(component) {
    this.readyComponents.push(component);
    if (_.isEmpty(_.difference( this.mustBeReady, this.readyComponents))) {
      this.start();
    }
  },

  init: function() {
    this.canvas.init();
    this.keyboard.init();
    this.player.init();
  },

  /**
   * Public: starts the game's main loop.
   */
  start: function() {
    this.loop.start();
  }
});

Game.Helpers = {
  pixels2int: function(pixels) {
    return parseInt(pixels, 10);
  },

  components: {
    ready: function() {
      Game.Events.trigger(this.component_name + ':ready', this.component_name);
    }
  },

  keyCodes: {
    keyCode: {
      left: 37,
      up: 38,
      right: 39,
      down: 40
    },

    // filtering by key types: codes as strings here, to normalize comparison keys
    KEYTYPES: {
      directions: ['37', '38', '39', '40']
    },

    KEYCODES: {
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down'
    }
  }
};
