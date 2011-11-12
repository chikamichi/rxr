window.RXR = {}

$(document).ready ->
  RXR.current = new RXR.Base
    el:  $("#my-game")
    fps: $("#fps")

Array::remove = (e) -> @[t..t] = [] if (t = @indexOf(e)) > -1

# Cheap event aggregator.
RXR.Events = _.extend({}, Backbone.Events)
