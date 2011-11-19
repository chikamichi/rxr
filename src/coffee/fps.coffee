#
# FPS measurement and displaying.
#
window.RXR = ((RXR) ->
  RXR.FPS = class
    constructor: (@options) ->
      @.frameCount = 0
      @.fps = 0
      @.lastTime = @._getTime()

      #_.bindAll(this, 'refresh')

      RXR.Events.bind('fps:refresh', @.refresh)

    # Public: Refresh the FPS counter.
    refresh: =>
      $(@options.el).find('.value').html(@._compute())

    # Private: return the current time as a UNIX timestamp.
    _getTime: ->
      return +(new Date())

    # Private: Computes the current FPS by diffing the two latest
    # time frames.
    _compute: ->
      newTime = @._getTime()
      diffTime = newTime - @.lastTime

      if diffTime >= 1000
        @.fps = @.frameCount
        @.frameCount = 0
        @.lastTime = newTime

      @.frameCount++
      return @.fps

  return RXR
)(window.RXR || {})
