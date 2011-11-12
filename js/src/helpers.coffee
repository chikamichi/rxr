# RXR.Helpers
# ------------
#
# Mixins to be included (extended) witthin components. One still can access
# them directly, though…
#
window.RXR = ((RXR) ->
  RXR.Helpers = class
    drawable:
      pixels2int: (pixels) ->
        parseInt pixels, 10

    components:
      ready: ->
        RXR.Events.trigger @component_name + ":ready", @component_name

    keyCodes:
      keyCode:
        left: 37
        up: 38
        right: 39
        down: 40

      KEYTYPES:
        directions: [ "37", "38", "39", "40" ]

      KEYCODES:
        37: "left"
        38: "up"
        39: "right"
        40: "down"

  return RXR
)(window.RXR || {})
