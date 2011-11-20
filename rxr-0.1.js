((function() {
    window.RXR = function(RXR) {
        RXR.Helpers = function() {
            function _Class() {}
            _Class.prototype.drawable = {
                pixels2int: function(pixels) {
                    return parseInt(pixels, 10);
                }
            };
            _Class.prototype.components = {
                ready: function() {
                    return RXR.Events.trigger(this.component_name + ":ready", this.component_name);
                }
            };
            _Class.prototype.keyCodes = {
                keyCode: {
                    left: 37,
                    up: 38,
                    right: 39,
                    down: 40
                },
                KEYTYPES: {
                    directions: [ "37", "38", "39", "40" ]
                },
                KEYCODES: {
                    37: "left",
                    38: "up",
                    39: "right",
                    40: "down"
                }
            };
            return _Class;
        }();
        return RXR;
    }(window.RXR || {});
})).call(this);

((function() {
    var __bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments);
        };
    };
    Array.prototype.remove = function(e) {
        var t, _ref;
        if ((t = this.indexOf(e)) > -1) {
            return [].splice.apply(this, [ t, t - t + 1 ].concat(_ref = [])), _ref;
        }
    };
    window.RXR = function(RXR) {
        RXR.Base = function() {
            function _Class(options) {
                this.options = options;
                this.start = __bind(this.start, this);
                this.checkIfReady = __bind(this.checkIfReady, this);
                this.settings = {};
                this.settings.has_fps = Boolean(this.options.fps);
                this.settings.container = $(this.options.el);
                this.layers = [];
                this.entities = [];
                if (!RXR.Events) {
                    RXR._events = function() {};
                    MicroEvent.mixin(RXR._events);
                    RXR.Events = new RXR._events;
                }
                if (this.settings.has_fps) {
                    this.fps = new RXR.FPS({
                        el: this.options.fps
                    });
                }
                this.keyboard = new RXR.Keyboard;
                this.loop = new RXR.MainLoop({
                    has_fps: this.settings.has_fps,
                    current_game: this
                });
                (this.options.init || $.noop).apply(this);
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
                this.mustBeReady = _.map(this.entities, function(entity) {
                    return entity.component_name;
                });
                this.mustBeReady.push("keyboard");
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
        }();
        return RXR;
    }(window.RXR || {});
})).call(this);

((function() {
    var __bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments);
        };
    };
    window.RXR = function(RXR) {
        RXR.MainLoop = function() {
            function _Class(options) {
                this.options = options;
                this._mainLoop = __bind(this._mainLoop, this);
                this._perform = __bind(this._perform, this);
                this.currentGame = this.options.current_game;
                this.rate = 1e3 / 60;
            }
            _Class.prototype.start = function() {
                return this._loop(this._mainLoop);
            };
            _Class.prototype._perform = function() {
                this._update();
                return this._redraw();
            };
            _Class.prototype._update = function() {
                RXR.Events.trigger("keyboard:clear_old_pressed");
                return RXR.Events.trigger("player:update:coordinates", this.currentGame.keyboard.get_pressed());
            };
            _Class.prototype._redraw = function() {
                var entity, layer, _i, _j, _len, _len2, _ref, _ref2, _results;
                _ref = this.currentGame.entities;
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                    entity = _ref[_i];
                    RXR.Events.trigger(entity.component_name + ":refresh", entity);
                }
                _ref2 = this.currentGame.layers;
                _results = [];
                for (_j = 0, _len2 = _ref2.length; _j < _len2; _j++) {
                    layer = _ref2[_j];
                    _results.push(RXR.Events.trigger("layers:" + layer.options.layer_name + ":refresh"));
                }
                return _results;
            };
            _Class.prototype._mainLoop = function() {
                this._perform();
                if (this.options.has_fps) {
                    RXR.Events.trigger("fps:refresh");
                }
                return this._loop(this._mainLoop);
            };
            _Class.prototype._loop = function(next) {
                return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback, element) {
                    return window.setTimeout(callback, this.rate);
                })(next);
            };
            return _Class;
        }();
        return RXR;
    }(window.RXR || {});
})).call(this);

((function() {
    var __bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments);
        };
    };
    window.RXR = function(RXR) {
        RXR.FPS = function() {
            function _Class(options) {
                this.options = options;
                this.refresh = __bind(this.refresh, this);
                this.frameCount = 0;
                this.fps = 0;
                this.lastTime = this._getTime();
                RXR.Events.bind("fps:refresh", this.refresh);
            }
            _Class.prototype.refresh = function() {
                return $(this.options.el).find(".value").html(this._compute());
            };
            _Class.prototype._getTime = function() {
                return +(new Date);
            };
            _Class.prototype._compute = function() {
                var diffTime, newTime;
                newTime = this._getTime();
                diffTime = newTime - this.lastTime;
                if (diffTime >= 1e3) {
                    this.fps = this.frameCount;
                    this.frameCount = 0;
                    this.lastTime = newTime;
                }
                this.frameCount++;
                return this.fps;
            };
            return _Class;
        }();
        return RXR;
    }(window.RXR || {});
})).call(this);

((function() {
    var __bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments);
        };
    };
    window.RXR = function(RXR) {
        RXR.Canvas = function() {
            function _Class(options) {
                this.options = options;
                this.refresh = __bind(this.refresh, this);
                _.extend(this, (new RXR.Helpers).components);
                _.extend(this, (new RXR.Helpers).drawable);
                if (this.options.container) {
                    this.attachToContainer();
                } else {
                    this.bindScene();
                }
                this.render_queue = [];
                RXR.Events.bind("layers:" + this.options.layer_name + ":refresh", this.refresh);
            }
            _Class.prototype.init = function() {
                this.clear();
                return this.ready();
            };
            _Class.prototype.attachToContainer = function() {
                var canvas;
                this.container = this.options.container;
                canvas = $("<canvas>");
                this.container.append(canvas);
                this.canvas = $(this.container).find("canvas:last");
                this.context = this.canvas.get(0).getContext("2d");
                return this._setDimensions();
            };
            _Class.prototype.bindScene = function() {
                this.canvas = this.options.canvas;
                this.container = this.canvas.parent();
                this.context = this.canvas.get(0).getContext("2d");
                return this._setDimensions();
            };
            _Class.prototype.clear = function() {
                this.context.save();
                this.context.setTransform(1, 0, 0, 1, 0, 0);
                this.context.fillStyle = "rgba(255,255,255,1)";
                this.context.strokeStyle = "rgba(255,255,255,1)";
                this.context.clearRect(0, 0, this.width, this.height);
                return this.context.restore();
            };
            _Class.prototype.queue = function(callback) {
                return this.render_queue.push(callback);
            };
            _Class.prototype.refresh = function() {
                var callback, _i, _len, _ref;
                _ref = this.render_queue;
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                    callback = _ref[_i];
                    callback[0].apply(this, callback[1]);
                }
                return this.render_queue = [];
            };
            _Class.prototype._setDimensions = function() {
                this.width = this.pixels2int($(this.options.container).css("width"));
                this.height = this.pixels2int($(this.options.container).css("height"));
                $(this.canvas).attr("width", this.width);
                return $(this.canvas).attr("height", this.height);
            };
            return _Class;
        }();
        return RXR;
    }(window.RXR || {});
})).call(this);

((function() {
    var __bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments);
        };
    };
    window.RXR = function(RXR) {
        RXR.Keyboard = function() {
            function _Class() {
                this.clearOldPressed = __bind(this.clearOldPressed, this);
                _.extend(this, (new RXR.Helpers).components);
                _.extend(this, (new RXR.Helpers).keyCodes);
                this.component_name = "keyboard";
                RXR.Events.bind("keyboard:clear_old_pressed", this.clearOldPressed);
                this.pressed = {};
                this.was_pressed = {};
                this.pressed_threshold = 200;
            }
            _Class.prototype.init = function() {
                this._startMonitoringKeyEvents();
                return this.ready();
            };
            _Class.prototype.get_pressed = function() {
                var filtered, keyCode, timestamp, _ref;
                filtered = {};
                _ref = this.pressed;
                for (keyCode in _ref) {
                    timestamp = _ref[keyCode];
                    filtered[this.KEYCODES[keyCode]] = [ timestamp, this.was_pressed[keyCode] ];
                }
                return filtered;
            };
            _Class.prototype.clearOldPressed = function() {
                var keyCode, now, timestamp, _ref, _results;
                now = +(new Date);
                _ref = this.was_pressed;
                _results = [];
                for (keyCode in _ref) {
                    timestamp = _ref[keyCode];
                    _results.push(now - timestamp > this.pressed_threshold && !this.pressed[keyCode] ? delete this.was_pressed[keyCode] : void 0);
                }
                return _results;
            };
            _Class.prototype._startMonitoringKeyEvents = function() {
                $(window).keyup(__bind(function(event) {
                    return this._onKeyup(event);
                }, this));
                return $(window).keydown(__bind(function(event) {
                    return this._onKeyDown(event);
                }, this));
            };
            _Class.prototype._onKeyDown = function(event) {
                return this.pressed[event.keyCode] = +(new Date);
            };
            _Class.prototype._onKeyup = function(event) {
                this.was_pressed[event.keyCode] = this.pressed[event.keyCode];
                return delete this.pressed[event.keyCode];
            };
            return _Class;
        }();
        return RXR;
    }(window.RXR || {});
})).call(this);

((function() {
    var __bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments);
        };
    };
    window.RXR = function(RXR) {
        RXR.Entity = function() {
            function _Class(options) {
                this.options = options;
                this.updateCoordinates = __bind(this.updateCoordinates, this);
                this.setCoordinates = __bind(this.setCoordinates, this);
                _.extend(this, (new RXR.Helpers).components);
                _.extend(this, (new RXR.Helpers).keyCodes);
                this.scene = this.options.scene;
                this.component_name = this.options.component_name;
                this.available_directions = [ "left", "up", "right", "down" ];
                this.speed = {
                    normal: 1,
                    fast: 3
                };
            }
            _Class.prototype.init = function() {
                if (this.options.refresh && _.isFunction(this.options.refresh)) {
                    this.refresh = this.options.refresh;
                }
                RXR.Events.bind(this.options.component_name + ":set:coordinates", this.setCoordinates);
                RXR.Events.bind(this.options.component_name + ":update:coordinates", this.updateCoordinates);
                RXR.Events.bind(this.options.component_name + ":refresh", this.refresh);
                this.setCoordinates({
                    x: this.scene.width / 2 - 16,
                    y: this.scene.height / 2 - 16
                });
                this.refresh(this);
                return this.ready();
            };
            _Class.prototype.setCoordinates = function(data) {
                if (data === void 0) {
                    data = {};
                }
                this.x = data.x || 0;
                return this.y = data.y || 0;
            };
            _Class.prototype.coordinates = function() {
                return {
                    x: this.x,
                    y: this.y
                };
            };
            _Class.prototype.updateCoordinates = function(pressed) {
                var keyCode, speed, state, _results;
                _results = [];
                for (keyCode in pressed) {
                    state = pressed[keyCode];
                    _results.push(_.include(this.available_directions, keyCode) ? (speed = state[1] ? this.speed.fast : this.speed.normal, this._move(keyCode, speed)) : void 0);
                }
                return _results;
            };
            _Class.prototype._move = function(direction, speed) {
                if (direction === "left") {
                    this.x -= speed;
                    return;
                }
                if (direction === "up") {
                    this.y -= speed;
                    return;
                }
                if (direction === "right") {
                    this.x += speed;
                    return;
                }
                if (direction === "down") {
                    this.y += speed;
                }
            };
            return _Class;
        }();
        return RXR;
    }(window.RXR || {});
})).call(this);