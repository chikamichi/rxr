# RXR namespace.
window.RXR = {}

# Cheap event aggregator.
RXR._events = ->
MicroEvent.mixin(RXR._events)
RXR.Events = new RXR._events()

# Core ext.
Array::remove = (e) -> @[t..t] = [] if (t = @indexOf(e)) > -1

# Ready, proceeding.
$(document).ready ->
  window.game = new RXR.Base
    el:  $("#my-game")
    fps: $("#fps")
