# RXR.Player
# -----------
#
# Represents the player inside the canvas. Currently, this is a black
# square.
#
# This obviously assumes the player controls only one entity at a time…
#
window.RXR = ((RXR) ->
  RXR.Player = class extends RXR.Entity
    # To be executed on redrawing, in the context of a the canvas.
    refresh: =>
      @scene.queue [
        (x,y) ->
          @clear()
          @context.fillStyle = '#000000'
          @context.fillRect(x, y, 32, 32)
        [@x, @y]
      ]

  return RXR
)(window.RXR || {})
