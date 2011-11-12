(function() {
  window.RXR = {};
  $(document).ready(function() {
    return RXR.current = new RXR.Base({
      el: $("#my-game"),
      fps: $("#fps")
    });
  });
  Array.prototype.remove = function(e) {
    var t, _ref;
    if ((t = this.indexOf(e)) > -1) {
      return ([].splice.apply(this, [t, t - t + 1].concat(_ref = [])), _ref);
    }
  };
  RXR.Events = _.extend({}, Backbone.Events);
}).call(this);
