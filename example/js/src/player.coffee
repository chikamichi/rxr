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
        (entity) ->
          @clear()
          @context.fillStyle = '#000000'
          @context.fillRect(entity.x, entity.y, 32, 32)
        [@]
      ]

  return RXR
)(window.RXR || {})
