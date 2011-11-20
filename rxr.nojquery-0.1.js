((function() {
    var root = this;
    var previousUnderscore = root._;
    var breaker = {};
    var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;
    var slice = ArrayProto.slice, unshift = ArrayProto.unshift, toString = ObjProto.toString, hasOwnProperty = ObjProto.hasOwnProperty;
    var nativeForEach = ArrayProto.forEach, nativeMap = ArrayProto.map, nativeReduce = ArrayProto.reduce, nativeReduceRight = ArrayProto.reduceRight, nativeFilter = ArrayProto.filter, nativeEvery = ArrayProto.every, nativeSome = ArrayProto.some, nativeIndexOf = ArrayProto.indexOf, nativeLastIndexOf = ArrayProto.lastIndexOf, nativeIsArray = Array.isArray, nativeKeys = Object.keys, nativeBind = FuncProto.bind;
    var _ = function(obj) {
        return new wrapper(obj);
    };
    if (typeof exports !== "undefined") {
        if (typeof module !== "undefined" && module.exports) {
            exports = module.exports = _;
        }
        exports._ = _;
    } else if (typeof define === "function" && define.amd) {
        define("underscore", function() {
            return _;
        });
    } else {
        root["_"] = _;
    }
    _.VERSION = "1.2.2";
    var each = _.each = _.forEach = function(obj, iterator, context) {
        if (obj == null) return;
        if (nativeForEach && obj.forEach === nativeForEach) {
            obj.forEach(iterator, context);
        } else if (obj.length === +obj.length) {
            for (var i = 0, l = obj.length; i < l; i++) {
                if (i in obj && iterator.call(context, obj[i], i, obj) === breaker) return;
            }
        } else {
            for (var key in obj) {
                if (hasOwnProperty.call(obj, key)) {
                    if (iterator.call(context, obj[key], key, obj) === breaker) return;
                }
            }
        }
    };
    _.map = function(obj, iterator, context) {
        var results = [];
        if (obj == null) return results;
        if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
        each(obj, function(value, index, list) {
            results[results.length] = iterator.call(context, value, index, list);
        });
        return results;
    };
    _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
        var initial = memo !== void 0;
        if (obj == null) obj = [];
        if (nativeReduce && obj.reduce === nativeReduce) {
            if (context) iterator = _.bind(iterator, context);
            return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
        }
        each(obj, function(value, index, list) {
            if (!initial) {
                memo = value;
                initial = true;
            } else {
                memo = iterator.call(context, memo, value, index, list);
            }
        });
        if (!initial) throw new TypeError("Reduce of empty array with no initial value");
        return memo;
    };
    _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
        if (obj == null) obj = [];
        if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
            if (context) iterator = _.bind(iterator, context);
            return memo !== void 0 ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
        }
        var reversed = (_.isArray(obj) ? obj.slice() : _.toArray(obj)).reverse();
        return _.reduce(reversed, iterator, memo, context);
    };
    _.find = _.detect = function(obj, iterator, context) {
        var result;
        any(obj, function(value, index, list) {
            if (iterator.call(context, value, index, list)) {
                result = value;
                return true;
            }
        });
        return result;
    };
    _.filter = _.select = function(obj, iterator, context) {
        var results = [];
        if (obj == null) return results;
        if (nativeFilter && obj.filter === nativeFilter) return obj.filter(iterator, context);
        each(obj, function(value, index, list) {
            if (iterator.call(context, value, index, list)) results[results.length] = value;
        });
        return results;
    };
    _.reject = function(obj, iterator, context) {
        var results = [];
        if (obj == null) return results;
        each(obj, function(value, index, list) {
            if (!iterator.call(context, value, index, list)) results[results.length] = value;
        });
        return results;
    };
    _.every = _.all = function(obj, iterator, context) {
        var result = true;
        if (obj == null) return result;
        if (nativeEvery && obj.every === nativeEvery) return obj.every(iterator, context);
        each(obj, function(value, index, list) {
            if (!(result = result && iterator.call(context, value, index, list))) return breaker;
        });
        return result;
    };
    var any = _.some = _.any = function(obj, iterator, context) {
        iterator = iterator || _.identity;
        var result = false;
        if (obj == null) return result;
        if (nativeSome && obj.some === nativeSome) return obj.some(iterator, context);
        each(obj, function(value, index, list) {
            if (result || (result = iterator.call(context, value, index, list))) return breaker;
        });
        return !!result;
    };
    _.include = _.contains = function(obj, target) {
        var found = false;
        if (obj == null) return found;
        if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
        found = any(obj, function(value) {
            return value === target;
        });
        return found;
    };
    _.invoke = function(obj, method) {
        var args = slice.call(arguments, 2);
        return _.map(obj, function(value) {
            return (method.call ? method || value : value[method]).apply(value, args);
        });
    };
    _.pluck = function(obj, key) {
        return _.map(obj, function(value) {
            return value[key];
        });
    };
    _.max = function(obj, iterator, context) {
        if (!iterator && _.isArray(obj)) return Math.max.apply(Math, obj);
        if (!iterator && _.isEmpty(obj)) return -Infinity;
        var result = {
            computed: -Infinity
        };
        each(obj, function(value, index, list) {
            var computed = iterator ? iterator.call(context, value, index, list) : value;
            computed >= result.computed && (result = {
                value: value,
                computed: computed
            });
        });
        return result.value;
    };
    _.min = function(obj, iterator, context) {
        if (!iterator && _.isArray(obj)) return Math.min.apply(Math, obj);
        if (!iterator && _.isEmpty(obj)) return Infinity;
        var result = {
            computed: Infinity
        };
        each(obj, function(value, index, list) {
            var computed = iterator ? iterator.call(context, value, index, list) : value;
            computed < result.computed && (result = {
                value: value,
                computed: computed
            });
        });
        return result.value;
    };
    _.shuffle = function(obj) {
        var shuffled = [], rand;
        each(obj, function(value, index, list) {
            if (index == 0) {
                shuffled[0] = value;
            } else {
                rand = Math.floor(Math.random() * (index + 1));
                shuffled[index] = shuffled[rand];
                shuffled[rand] = value;
            }
        });
        return shuffled;
    };
    _.sortBy = function(obj, iterator, context) {
        return _.pluck(_.map(obj, function(value, index, list) {
            return {
                value: value,
                criteria: iterator.call(context, value, index, list)
            };
        }).sort(function(left, right) {
            var a = left.criteria, b = right.criteria;
            return a < b ? -1 : a > b ? 1 : 0;
        }), "value");
    };
    _.groupBy = function(obj, val) {
        var result = {};
        var iterator = _.isFunction(val) ? val : function(obj) {
            return obj[val];
        };
        each(obj, function(value, index) {
            var key = iterator(value, index);
            (result[key] || (result[key] = [])).push(value);
        });
        return result;
    };
    _.sortedIndex = function(array, obj, iterator) {
        iterator || (iterator = _.identity);
        var low = 0, high = array.length;
        while (low < high) {
            var mid = low + high >> 1;
            iterator(array[mid]) < iterator(obj) ? low = mid + 1 : high = mid;
        }
        return low;
    };
    _.toArray = function(iterable) {
        if (!iterable) return [];
        if (iterable.toArray) return iterable.toArray();
        if (_.isArray(iterable)) return slice.call(iterable);
        if (_.isArguments(iterable)) return slice.call(iterable);
        return _.values(iterable);
    };
    _.size = function(obj) {
        return _.toArray(obj).length;
    };
    _.first = _.head = function(array, n, guard) {
        return n != null && !guard ? slice.call(array, 0, n) : array[0];
    };
    _.initial = function(array, n, guard) {
        return slice.call(array, 0, array.length - (n == null || guard ? 1 : n));
    };
    _.last = function(array, n, guard) {
        if (n != null && !guard) {
            return slice.call(array, Math.max(array.length - n, 0));
        } else {
            return array[array.length - 1];
        }
    };
    _.rest = _.tail = function(array, index, guard) {
        return slice.call(array, index == null || guard ? 1 : index);
    };
    _.compact = function(array) {
        return _.filter(array, function(value) {
            return !!value;
        });
    };
    _.flatten = function(array, shallow) {
        return _.reduce(array, function(memo, value) {
            if (_.isArray(value)) return memo.concat(shallow ? value : _.flatten(value));
            memo[memo.length] = value;
            return memo;
        }, []);
    };
    _.without = function(array) {
        return _.difference(array, slice.call(arguments, 1));
    };
    _.uniq = _.unique = function(array, isSorted, iterator) {
        var initial = iterator ? _.map(array, iterator) : array;
        var result = [];
        _.reduce(initial, function(memo, el, i) {
            if (0 == i || (isSorted === true ? _.last(memo) != el : !_.include(memo, el))) {
                memo[memo.length] = el;
                result[result.length] = array[i];
            }
            return memo;
        }, []);
        return result;
    };
    _.union = function() {
        return _.uniq(_.flatten(arguments, true));
    };
    _.intersection = _.intersect = function(array) {
        var rest = slice.call(arguments, 1);
        return _.filter(_.uniq(array), function(item) {
            return _.every(rest, function(other) {
                return _.indexOf(other, item) >= 0;
            });
        });
    };
    _.difference = function(array, other) {
        return _.filter(array, function(value) {
            return !_.include(other, value);
        });
    };
    _.zip = function() {
        var args = slice.call(arguments);
        var length = _.max(_.pluck(args, "length"));
        var results = new Array(length);
        for (var i = 0; i < length; i++) results[i] = _.pluck(args, "" + i);
        return results;
    };
    _.indexOf = function(array, item, isSorted) {
        if (array == null) return -1;
        var i, l;
        if (isSorted) {
            i = _.sortedIndex(array, item);
            return array[i] === item ? i : -1;
        }
        if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item);
        for (i = 0, l = array.length; i < l; i++) if (array[i] === item) return i;
        return -1;
    };
    _.lastIndexOf = function(array, item) {
        if (array == null) return -1;
        if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) return array.lastIndexOf(item);
        var i = array.length;
        while (i--) if (array[i] === item) return i;
        return -1;
    };
    _.range = function(start, stop, step) {
        if (arguments.length <= 1) {
            stop = start || 0;
            start = 0;
        }
        step = arguments[2] || 1;
        var len = Math.max(Math.ceil((stop - start) / step), 0);
        var idx = 0;
        var range = new Array(len);
        while (idx < len) {
            range[idx++] = start;
            start += step;
        }
        return range;
    };
    var ctor = function() {};
    _.bind = function bind(func, context) {
        var bound, args;
        if (func.bind === nativeBind && nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
        if (!_.isFunction(func)) throw new TypeError;
        args = slice.call(arguments, 2);
        return bound = function() {
            if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
            ctor.prototype = func.prototype;
            var self = new ctor;
            var result = func.apply(self, args.concat(slice.call(arguments)));
            if (Object(result) === result) return result;
            return self;
        };
    };
    _.bindAll = function(obj) {
        var funcs = slice.call(arguments, 1);
        if (funcs.length == 0) funcs = _.functions(obj);
        each(funcs, function(f) {
            obj[f] = _.bind(obj[f], obj);
        });
        return obj;
    };
    _.memoize = function(func, hasher) {
        var memo = {};
        hasher || (hasher = _.identity);
        return function() {
            var key = hasher.apply(this, arguments);
            return hasOwnProperty.call(memo, key) ? memo[key] : memo[key] = func.apply(this, arguments);
        };
    };
    _.delay = function(func, wait) {
        var args = slice.call(arguments, 2);
        return setTimeout(function() {
            return func.apply(func, args);
        }, wait);
    };
    _.defer = function(func) {
        return _.delay.apply(_, [ func, 1 ].concat(slice.call(arguments, 1)));
    };
    _.throttle = function(func, wait) {
        var context, args, timeout, throttling, more;
        var whenDone = _.debounce(function() {
            more = throttling = false;
        }, wait);
        return function() {
            context = this;
            args = arguments;
            var later = function() {
                timeout = null;
                if (more) func.apply(context, args);
                whenDone();
            };
            if (!timeout) timeout = setTimeout(later, wait);
            if (throttling) {
                more = true;
            } else {
                func.apply(context, args);
            }
            whenDone();
            throttling = true;
        };
    };
    _.debounce = function(func, wait) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                func.apply(context, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };
    _.once = function(func) {
        var ran = false, memo;
        return function() {
            if (ran) return memo;
            ran = true;
            return memo = func.apply(this, arguments);
        };
    };
    _.wrap = function(func, wrapper) {
        return function() {
            var args = [ func ].concat(slice.call(arguments));
            return wrapper.apply(this, args);
        };
    };
    _.compose = function() {
        var funcs = slice.call(arguments);
        return function() {
            var args = slice.call(arguments);
            for (var i = funcs.length - 1; i >= 0; i--) {
                args = [ funcs[i].apply(this, args) ];
            }
            return args[0];
        };
    };
    _.after = function(times, func) {
        if (times <= 0) return func();
        return function() {
            if (--times < 1) {
                return func.apply(this, arguments);
            }
        };
    };
    _.keys = nativeKeys || function(obj) {
        if (obj !== Object(obj)) throw new TypeError("Invalid object");
        var keys = [];
        for (var key in obj) if (hasOwnProperty.call(obj, key)) keys[keys.length] = key;
        return keys;
    };
    _.values = function(obj) {
        return _.map(obj, _.identity);
    };
    _.functions = _.methods = function(obj) {
        var names = [];
        for (var key in obj) {
            if (_.isFunction(obj[key])) names.push(key);
        }
        return names.sort();
    };
    _.extend = function(obj) {
        each(slice.call(arguments, 1), function(source) {
            for (var prop in source) {
                if (source[prop] !== void 0) obj[prop] = source[prop];
            }
        });
        return obj;
    };
    _.defaults = function(obj) {
        each(slice.call(arguments, 1), function(source) {
            for (var prop in source) {
                if (obj[prop] == null) obj[prop] = source[prop];
            }
        });
        return obj;
    };
    _.clone = function(obj) {
        if (!_.isObject(obj)) return obj;
        return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
    };
    _.tap = function(obj, interceptor) {
        interceptor(obj);
        return obj;
    };
    function eq(a, b, stack) {
        if (a === b) return a !== 0 || 1 / a == 1 / b;
        if (a == null || b == null) return a === b;
        if (a._chain) a = a._wrapped;
        if (b._chain) b = b._wrapped;
        if (_.isFunction(a.isEqual)) return a.isEqual(b);
        if (_.isFunction(b.isEqual)) return b.isEqual(a);
        var className = toString.call(a);
        if (className != toString.call(b)) return false;
        switch (className) {
          case "[object String]":
            return String(a) == String(b);
          case "[object Number]":
            a = +a;
            b = +b;
            return a != a ? b != b : a == 0 ? 1 / a == 1 / b : a == b;
          case "[object Date]":
          case "[object Boolean]":
            return +a == +b;
          case "[object RegExp]":
            return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase;
        }
        if (typeof a != "object" || typeof b != "object") return false;
        var length = stack.length;
        while (length--) {
            if (stack[length] == a) return true;
        }
        stack.push(a);
        var size = 0, result = true;
        if (className == "[object Array]") {
            size = a.length;
            result = size == b.length;
            if (result) {
                while (size--) {
                    if (!(result = size in a == size in b && eq(a[size], b[size], stack))) break;
                }
            }
        } else {
            if ("constructor" in a != "constructor" in b || a.constructor != b.constructor) return false;
            for (var key in a) {
                if (hasOwnProperty.call(a, key)) {
                    size++;
                    if (!(result = hasOwnProperty.call(b, key) && eq(a[key], b[key], stack))) break;
                }
            }
            if (result) {
                for (key in b) {
                    if (hasOwnProperty.call(b, key) && !(size--)) break;
                }
                result = !size;
            }
        }
        stack.pop();
        return result;
    }
    _.isEqual = function(a, b) {
        return eq(a, b, []);
    };
    _.isEmpty = function(obj) {
        if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
        for (var key in obj) if (hasOwnProperty.call(obj, key)) return false;
        return true;
    };
    _.isElement = function(obj) {
        return !!(obj && obj.nodeType == 1);
    };
    _.isArray = nativeIsArray || function(obj) {
        return toString.call(obj) == "[object Array]";
    };
    _.isObject = function(obj) {
        return obj === Object(obj);
    };
    if (toString.call(arguments) == "[object Arguments]") {
        _.isArguments = function(obj) {
            return toString.call(obj) == "[object Arguments]";
        };
    } else {
        _.isArguments = function(obj) {
            return !!(obj && hasOwnProperty.call(obj, "callee"));
        };
    }
    _.isFunction = function(obj) {
        return toString.call(obj) == "[object Function]";
    };
    _.isString = function(obj) {
        return toString.call(obj) == "[object String]";
    };
    _.isNumber = function(obj) {
        return toString.call(obj) == "[object Number]";
    };
    _.isNaN = function(obj) {
        return obj !== obj;
    };
    _.isBoolean = function(obj) {
        return obj === true || obj === false || toString.call(obj) == "[object Boolean]";
    };
    _.isDate = function(obj) {
        return toString.call(obj) == "[object Date]";
    };
    _.isRegExp = function(obj) {
        return toString.call(obj) == "[object RegExp]";
    };
    _.isNull = function(obj) {
        return obj === null;
    };
    _.isUndefined = function(obj) {
        return obj === void 0;
    };
    _.noConflict = function() {
        root._ = previousUnderscore;
        return this;
    };
    _.identity = function(value) {
        return value;
    };
    _.times = function(n, iterator, context) {
        for (var i = 0; i < n; i++) iterator.call(context, i);
    };
    _.escape = function(string) {
        return ("" + string).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;");
    };
    _.mixin = function(obj) {
        each(_.functions(obj), function(name) {
            addToWrapper(name, _[name] = obj[name]);
        });
    };
    var idCounter = 0;
    _.uniqueId = function(prefix) {
        var id = idCounter++;
        return prefix ? prefix + id : id;
    };
    _.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    _.template = function(str, data) {
        var c = _.templateSettings;
        var tmpl = "var __p=[],print=function(){__p.push.apply(__p,arguments);};" + "with(obj||{}){__p.push('" + str.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(c.escape, function(match, code) {
            return "',_.escape(" + code.replace(/\\'/g, "'") + "),'";
        }).replace(c.interpolate, function(match, code) {
            return "'," + code.replace(/\\'/g, "'") + ",'";
        }).replace(c.evaluate || null, function(match, code) {
            return "');" + code.replace(/\\'/g, "'").replace(/[\r\n\t]/g, " ") + ";__p.push('";
        }).replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/\t/g, "\\t") + "');}return __p.join('');";
        var func = new Function("obj", "_", tmpl);
        return data ? func(data, _) : function(data) {
            return func(data, _);
        };
    };
    var wrapper = function(obj) {
        this._wrapped = obj;
    };
    _.prototype = wrapper.prototype;
    var result = function(obj, chain) {
        return chain ? _(obj).chain() : obj;
    };
    var addToWrapper = function(name, func) {
        wrapper.prototype[name] = function() {
            var args = slice.call(arguments);
            unshift.call(args, this._wrapped);
            return result(func.apply(_, args), this._chain);
        };
    };
    _.mixin(_);
    each([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(name) {
        var method = ArrayProto[name];
        wrapper.prototype[name] = function() {
            method.apply(this._wrapped, arguments);
            return result(this._wrapped, this._chain);
        };
    });
    each([ "concat", "join", "slice" ], function(name) {
        var method = ArrayProto[name];
        wrapper.prototype[name] = function() {
            return result(method.apply(this._wrapped, arguments), this._chain);
        };
    });
    wrapper.prototype.chain = function() {
        this._chain = true;
        return this;
    };
    wrapper.prototype.value = function() {
        return this._wrapped;
    };
})).call(this);

var MicroEvent = function() {};

MicroEvent.prototype = {
    bind: function(event, fct) {
        this._events = this._events || {};
        this._events[event] = this._events[event] || [];
        this._events[event].push(fct);
    },
    unbind: function(event, fct) {
        console.assert(typeof fct === "function");
        this._events = this._events || {};
        if (event in this._events === false) return;
        console.assert(this._events[event].indexOf(fct) !== -1);
        this._events[event].splice(this._events[event].indexOf(fct), 1);
    },
    trigger: function(event) {
        this._events = this._events || {};
        if (event in this._events === false) return;
        for (var i = 0; i < this._events[event].length; i++) {
            this._events[event][i].apply(this, Array.prototype.slice.call(arguments, 1));
        }
    }
};

MicroEvent.mixin = function(destObject) {
    var props = [ "bind", "unbind", "trigger" ];
    for (var i = 0; i < props.length; i++) {
        destObject.prototype[props[i]] = MicroEvent.prototype[props[i]];
    }
};

if (typeof module !== "undefined" && "exports" in module) {
    module.exports = MicroEvent;
}

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