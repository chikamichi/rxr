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
    return RXR.current = new RXR.Base({
      el: $("#my-game"),
      fps: $("#fps")
    });
  });
}).call(this);
