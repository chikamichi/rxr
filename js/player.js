(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  Game.Player = (function() {
    function Player() {
      this.updateCoordinates = __bind(this.updateCoordinates, this);
      this.setCoordinates = __bind(this.setCoordinates, this);      _.extend(this, Game.Helpers.components);
      _.extend(this, Game.Helpers.keyCodes);
      this.component_name = 'player';
      this.speed = {
        normal: 1,
        fast: 3
      };
      Game.Events.bind('player:set:coordinates', this.setCoordinates);
      Game.Events.bind('player:update:coordinates', this.updateCoordinates);
    }
    Player.prototype.init = function() {
      return this.ready();
    };
    Player.prototype.refresh = function(context) {
      return Game.Events.trigger('canvas:refresh', {
        x: this.x,
        y: this.y
      });
    };
    Player.prototype.setCoordinates = function(data) {
      if (data === void 0) {
        data = {};
      }
      this.x = data.x || 0;
      return this.y = data.y || 0;
    };
    Player.prototype.coordinates = function() {
      return {
        x: this.x,
        y: this.y
      };
    };
    Player.prototype.updateCoordinates = function(directions) {
      return this._move(directions);
    };
    Player.prototype._move = function(directions) {
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
    };
    return Player;
  })();
}).call(this);
