# Game.Canvas
# -----------
#
# All canvas-related functions.
#
class Game.Canvas
  constructor: (@options) ->
    # TODO: the components could extend a Game.Component which would
    # extend Backbone.View/Model?
    _.extend(this, Game.Helpers.components)
    @.component_name = 'canvas'

    @.context = $(@options.el).get(0).getContext("2d")
    @._setDimensions()

    @.render_queue = []

    Game.Events.bind('canvas:refresh', @.refresh)

  # Public: Bootstrap the canvas.
  init: ->
    data =
      x: @.width / 2 - 16,
      y: @.height / 2 - 16

    @.clear()
    Game.Events.trigger('player:set:coordinates', data)

    @.ready()

  # Clears the scene.
  clear: ->
    @.context.fillStyle = 'rgba(255,255,255,1)'
    @.context.strokeStyle = 'rgba(255,255,255,1)'
    @.context.clearRect(0, 0, @.width, @.height)

  queue: (callback) ->
    @.render_queue.push(callback)

  # Public: Updates the scene accordingly to what components pushed in the
  # rendering queue.
  refresh: =>
    callback[0].apply(this, callback[1]) for callback in @.render_queue
    @.render_queue = []

  # Private: Sets the dimensions of the canvas. This is mandatory
  # to get a proper ratio. This is based on the declared width and
  # height in the CSS. This could be made dynamic (resizing) without
  # much efforts.
  _setDimensions: ->
    @.width  = Game.Helpers.pixels2int($(@options.el).css('width'))
    @.height = Game.Helpers.pixels2int($(@options.el).css('height'))
    $(@options.el).attr('width',  @.width)
    $(@options.el).attr('height', @.height)
