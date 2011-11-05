(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  Game.Player = (function() {
    function Player(options) {
      this.options = options;
      this.refresh = __bind(this.refresh, this);
      this.updateCoordinates = __bind(this.updateCoordinates, this);
      this.setCoordinates = __bind(this.setCoordinates, this);
      _.extend(this, Game.Helpers.components);
      _.extend(this, Game.Helpers.keyCodes);
      this.component_name = 'player';
      this.speed = {
        normal: 2
      };
      Game.Events.bind('player:set:coordinates', this.setCoordinates);
      Game.Events.bind('player:update:coordinates', this.updateCoordinates);
      Game.Events.bind('player:refresh', this.refresh);
    }
    Player.prototype.init = function() {
      this.refresh();
      return this.ready();
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
    Player.prototype.refresh = function() {
      return this.options.canvas.queue([
        function(player) {
          this.clear();
          this.context.fillStyle = 'rgba(5,5,5,1)';
          return this.context.fillRect(player.x, player.y, 32, 32);
        }, [this]
      ]);
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
