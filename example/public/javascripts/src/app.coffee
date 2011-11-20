# Ready, proceeding.
$(document).ready ->
  window.game = new RXR.Base
    el:  $("#my-game")
    fps: $("#fps")
    init: ->
      # Layers.
      bg_canvas = new RXR.Canvas
        container: @settings.container
        layer_name: 'bg'
      player_canvas = new RXR.Canvas
        container: @settings.container
        layer_name: 'player'
      @layers.push bg_canvas
      @layers.push player_canvas

      # Entities.
      bg = new RXR.Entity
        component_name: 'bg'
        scene: bg_canvas
        refresh: (entity) ->
          entity.scene.queue [
            (scene) ->
              scene.clear()
              scene.context.fillStyle = '#FFFFFF'
              scene.context.fillRect(0, 0, scene.width, scene.height)
            [entity.scene]
          ]
      #player = new RXR.Entity
      player = new RXR.Player
        component_name: 'player'
        scene: player_canvas
        #refresh: (entity) ->
          #entity.scene.queue [
            #(scene) ->
              #scene.clear()
              #scene.context.fillStyle = '#000000'
              #scene.context.fillRect(scene.x, scene.y, 32, 32)
            #[entity.scene]
          #]
      @entities.push bg
      @entities.push player
