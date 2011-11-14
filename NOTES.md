* use drawImage, not putImageData (slower)
* use clearRect, not the width hack (slower)
* do pre-render things, it's faster (except in Opera and mobile devices)
  => well, it's faster if there are not too many changing elements on the layer

## BUGs

Rendering is broken. The mainLoop triggers canvas:refresh but this is bound only to the player.

## Next steps

* render layers by increasing z-index (background, foreground…) => this is implicit (declaration order) for now
* mainLoop is aware of available layers and triggers Canvas.refresh in the correct order
* refacto: get rid of canvas declaration (just pass the container in the options)
* refacto: the init process in Base is lame. One should rather add a newly created entity in a RXR.current.entities array, and the init process will be fired as an automated thingy?
* not really found of the rendering queue callbacks thing after all

Next step: have mainLoop be aware of available canvas?

Next step 2: pre-render on a second, hidden canvas (à la double buffering)
           pre-render all a layer's queue, then apply the whole image on the visible canvas layer
