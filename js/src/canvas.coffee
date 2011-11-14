# RXR.Canvas
# -----------
#
# All canvas-related functions.
#
window.RXR = ((RXR) ->
  RXR.Canvas = class
    constructor: (@options) ->
      _.extend(@, (new RXR.Helpers).components)
      _.extend(@, (new RXR.Helpers).drawable)
      @component_name = 'canvas'

      # If there is no underlying canvas element yet, create it;
      # otherwise, let's use the provided canvas.
      if @options.container
        @attachToContainer()
      else
        @bindScene()

      # Rendering operations queue (to be filled by components
      # using this layer on each tick).
      @render_queue = []

      RXR.Events.bind('canvas:refresh', @refresh)

    # Public: Bootstrap the canvas.
    init: ->
      @.clear()
      @.ready()

    attachToContainer: ->
      @container = @options.container
      canvas = $('<canvas>')
      @container.append(canvas)
      @canvas = $(@container).find('canvas:last')
      @context = @canvas.get(0).getContext('2d')
      @_setDimensions()

    bindScene: ->
      @canvas = options.canvas
      @container = @canvas.parent()
      @context = @canvas.get(0).getContext('2d')
      @_setDimensions()

    # Clears the scene.
    clear: ->
      @context.save()
      @context.setTransform(1,0,0,1,0,0)
      @context.fillStyle = 'rgba(255,255,255,1)'
      @context.strokeStyle = 'rgba(255,255,255,1)'
      @context.clearRect(0, 0, @width, @height)
      @context.restore()

    queue: (callback) ->
      @render_queue.push(callback)

    # Public: Updates the scene accordingly to what components pushed in the
    # rendering queue.
    refresh: =>
      callback[0].apply(this, callback[1]) for callback in @render_queue
      @render_queue = []

    # Private: Sets the dimensions of the canvas. This is mandatory
    # to get a proper ratio. This is based on the declared width and
    # height in the CSS. This could be made dynamic (resizing) without
    # much efforts.
    _setDimensions: ->
      # TODO: substract borders & the like
      @width  = @pixels2int($(@options.container).css('width'))
      @height = @pixels2int($(@options.container).css('height'))
      $(@canvas).attr('width',  @width)
      $(@canvas).attr('height', @height)

  return RXR
)(window.RXR || {})
