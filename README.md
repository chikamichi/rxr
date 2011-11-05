# W3techcourses.com — Game Development in HTML5 (October 2011)

## Week 1 — Introduction to HTML5/JavaScript game development

From b882491 to HEAD (*work in progress*).

**Assignment: Create a single object on a scene and control it using mouse or/and keyboard**

I used a [Backbone](http://documentcloud.github.com/backbone/)-back app to architecture my code.

### Backend

* `Game.Base` is the main entry point. It's a Backbone view bound to a container where lies the canvas.
* `Game.Events` is an event aggregator, used to synchronize and decouple the other components from one another.
* `Game.MainLoop` is a Backbone model implementing a game's loop.

### Components

* `Game.Player` is a Backbone model modelizing the current player within the game. It's kind of a mix between the character and a IO channel.
* `Game.Keyboard` is a Backbone model responsible for listening and dispatching keyboard events.
* `Game.FPS` is a Backbone view responsible for computing and displaying the FPS (it could be separated in a view + a model though).
* `Game.Canvas` is a Backbone view responsible for rendering.

## Week 2 — ?

## Week 3 — ?

## Week 4 — ?

## Local dev

    coffee -w -o js js/src
    annyong
