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
      this.available_directions = ['left', 'up', 'right', 'down'];
      this.speed = {
        normal: 1,
        fast: 3
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
    Player.prototype.updateCoordinates = function(pressed) {
      var keyCode, speed, state, _results;
      _results = [];
      for (keyCode in pressed) {
        state = pressed[keyCode];
        _results.push(_.include(this.available_directions, keyCode) ? (speed = state[1] ? this.speed.fast : this.speed.normal, this._move(keyCode, speed)) : void 0);
      }
      return _results;
    };
    Player.prototype.refresh = function() {
      return this.options.canvas.queue([
        function(player) {
          this.clear();
          this.context.fillStyle = '#000000';
          return this.context.fillRect(player.x, player.y, 32, 32);
        }, [this]
      ]);
    };
    Player.prototype._move = function(direction, speed) {
      if (direction === 'left') {
        this.x -= speed;
        return;
      }
      if (direction === 'up') {
        this.y -= speed;
        return;
      }
      if (direction === 'right') {
        this.x += speed;
        return;
      }
      if (direction === 'down') {
        this.y += speed;
      }
    };
    return Player;
  })();
}).call(this);
