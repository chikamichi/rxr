# Game.Canvas
# -----------
#
# All canvas-related functions.
#
Game.Canvas = Backbone.View.extend({
  initialize: ->
    # TODO: the components could extend a Game.Component which would
    # extend Backbone.View/Model?
    _.extend(this, Game.Helpers.components)
    @.component_name = 'canvas'

    @.context = $(@.el).get(0).getContext("2d")
    @._setDimensions()

    _.bindAll(this, 'refresh')

    Game.Events.bind('canvas:refresh', @.refresh)

  # Private: Sets the dimensions of the canvas. This is mandatory
  # to get a proper ratio. This is based on the declared width and
  # height in the CSS. This could be made dynamic (resizing) without
  # much efforts.
  _setDimensions: ->
    @.width  = Game.Helpers.pixels2int($(@.el).css('width'))
    @.height = Game.Helpers.pixels2int($(@.el).css('height'))
    $(@.el).attr('width',  @.width)
    $(@.el).attr('height', @.height)

  # Public: Bootstrap the canvas.
  init: ->
    data =
      x: @.width / 2 - 16,
      y: @.height / 2 - 16

    @.clear()
    @.refresh(data)
    Game.Events.trigger('player:set:coordinates', data)
    @.ready()

  clear: ->
    @.context.clearRect(0, 0, @.width, @.height)

  # Public: Updates the square on the screen.
  refresh: (data) ->
    @.clear()
    @.context.fillRect(data.x, data.y, 32, 32)
})
