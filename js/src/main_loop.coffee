#
# RXR's main loop.
#
# Public API:
#
# start() : starts the game's main loop
#
window.RXR = ((RXR) ->
  RXR.MainLoop = class
    constructor: (@options) ->
      @.rate = 1000 / 60

    # Public: Starts the loop!
    start: ->
      @._loop(@._mainLoop)

    # Public: This is going to be performed on each cycle.
    #
    # This mostly does two things: asks the components to update themselves,
    # then asks the canvas to redraw itself based on the updated data.
    perform: =>
      @._update()
      @._redraw()

    # Private: Asks core components to update themselves, based on IO and other
    # components' data sets.
    #
    # TODO: dislike that actually
    _update: ->
      RXR.Events.trigger 'keyboard:clear_old_pressed'
      RXR.Events.trigger 'player:update:coordinates', RXR.current.keyboard.get_pressed()

    # Private: Asks the canvas to re-render itself, based on latest available
    # data.
    _redraw: ->
      RXR.Events.trigger 'bg:refresh'
      RXR.Events.trigger 'player:refresh'

      # This *must* be called after all other components refresh
      for layer in RXR.current.layers
        RXR.Events.trigger 'layer:' + layer.options.layer_name + ':refresh'

    # Private: Unitary computation cycle. Responsible for computing
    # both internal logic code chuncks (such as FPS update, canvas
    # refresh…) and an external closure. Automatically triggers the
    # next computation cycle.
    _mainLoop: =>
      @.perform()

      if @options.has_fps
        RXR.Events.trigger('fps:refresh')

      @._loop(@._mainLoop)

    # Private: Triggers the next cycle, providing the computation closure.
    #
    # next - The computation to be run in the next cycle
    _loop: (next) ->
      return (window.requestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.oRequestAnimationFrame ||
              window.msRequestAnimationFrame ||
              (callback, element) ->
                window.setTimeout(callback, @.rate)
            )(next)

  return RXR
)(window.RXR || {})
