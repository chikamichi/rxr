* use drawImage, not putImageData (slower)
* use clearRect, not the width hack (slower)
* do pre-render things, it's faster (except in Opera and mobile devices)

## Next steps

* use several canvas (layers) and associate an asset (sprite) to a layer
* layers may be either referenced from the DOM (absolute positions for <canvas>) or dynamically added to the DOM
* queue rendering instructions per layers
* render layers by increasing z-index (background, foreground…)

First step: get rid of the <canvas> element, absolute position the container
            add the Player asset by creating a new <canvas> element
            Player enqueues rendering ops in the appropriate canvas queue
            mainLoop is aware of available layers and triggers Canvas.refresh in the correct order

Next step: pre-render on a second, hidden canvas (à la double buffering)
           pre-render all a layer's queue, then apply the whole image on the visible canvas layer
