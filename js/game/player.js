/**
 * Represents the player inside the canvas. Currently, this is a black
 * square.
 *
 * This obviously assumes the player controls only one entity at a time…
 */
Game.Player = Backbone.Model.extend({
  initialize: function() {
    _.extend(this, Game.Helpers.components);
    _.extend(this, Game.Helpers.keyCodes);
    this.component_name = 'player';

    this.speed = {
      normal: 1,
      fast: 3
    };

    _.bindAll(this, 'setCoordinates', 'updateCoordinates');

    Game.Events.bind('player:set:coordinates', this.setCoordinates);
    Game.Events.bind('player:update:coordinates', this.updateCoordinates);
  },

  /**
   * Public: Bootstrap the player component.
   */
  init: function() {
    this.ready();
  },

  /**
   * TODO: remove this and pass a specific draw order (cb) to the canvas instead.
   */
  refresh: function(context) {
    Game.Events.trigger('canvas:refresh', {x: this.x, y: this.y});
  },

  setCoordinates: function(data) {
    console.log(data);
    if (data === undefined) { var data = {}; }
    this.x = data.x || 0;
    this.y = data.y || 0;
  },

  /**
   * Public: Returns the player's coordinates.
   */
  coordinates: function() {
    return {x: this.x, y: this.y};
  },

  /**
   * Public: Updates the player's coordinates according to the specified
   * directions (that is, several directions may be passed at once).
   *
   * Directions must be passed as a normalized list of human-readable values,
   * such as ['left', 'top'].
   *
   * directions - Normalized directions list
   */
  updateCoordinates: function(directions) {
    this._move(directions);
  },

  /**
   * Private: Inspects a normalized directions hash and updates the player's
   * coordinates.
   *
   * directions - Normalized directions list
   */
  _move: function(directions) {
    if (_.include(directions, 'left'))  { this.x -= this.speed.normal; }
    if (_.include(directions, 'up'))    { this.y -= this.speed.normal; }
    if (_.include(directions, 'right')) { this.x += this.speed.normal; }
    if (_.include(directions, 'down'))  { this.y += this.speed.normal; }
  }
});
