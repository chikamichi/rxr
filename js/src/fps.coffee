#
# FPS measurement and displaying.
#
Game.FPS = Backbone.View.extend({
  initialize: ->
    @.frameCount = 0
    @.fps = 0
    @.lastTime = @._getTime()

    _.bindAll(this, 'refresh')

    Game.Events.bind('fps:refresh', @.refresh)

  # Public: Refresh the FPS counter.
  refresh: ->
    $(@.el).find('.value').html(@._compute())

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
})
