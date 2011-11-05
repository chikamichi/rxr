(function() {
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
      return Game.Events.bind('player:update:coordinates', this.updateCoordinates);
    },
    init: function() {
      return this.ready();
    },
    refresh: function(context) {
      return Game.Events.trigger('canvas:refresh', {
        x: this.x,
        y: this.y
      });
    },
    setCoordinates: function(data) {
      if (data === void 0) {
        data = {};
      }
      this.x = data.x || 0;
      return this.y = data.y || 0;
    },
    coordinates: function() {
      return {
        x: this.x,
        y: this.y
      };
    },
    updateCoordinates: function(directions) {
      return this._move(directions);
    },
    _move: function(directions) {
      if (_.include(directions, 'left')) {
        this.x -= this.speed.normal;
      }
      if (_.include(directions, 'up')) {
        this.y -= this.speed.normal;
      }
      if (_.include(directions, 'right')) {
        this.x += this.speed.normal;
      }
      if (_.include(directions, 'down')) {
        return this.y += this.speed.normal;
      }
    }
  });
}).call(this);
