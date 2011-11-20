# RXR

RXR (pronounced *roxor* or [r-x-r]) is yet another 2D game engine in JavaScript. It's `canvas`-based only.

## Installation & usage

Include either `rxr.min-v0.1.js` or `rxr.full.min-v0.1.js` in your page, and you're good to go. The former version has some external dependencies which are bundled within the latter:

* [jQuery](http://jquery.com/) — a recent version, such as v1.6.2+
* [Underscore.js](http://documentcloud.github.com/underscore/) — the latest version will do
* [MicroEvent.js](https://github.com/jeromeetienne/microevent.js) — the latest version will do

So, use the `.full` version if you don't want to bother picking all of those libraries by yourself.

**Check the [example](https://github.com/chikamichi/rxr/tree/master/example) to get started**, it's a kind of a tutorial with many inline comments.

## Local development

I'm using a [tmuxinator](https://github.com/aziz/tmuxinator) project to automate all of the following tasks while hacking on the .coffee sources:

**Compiling .sass files**

``` bash
cd example && compass watch public/stylesheets/*.sass`
```

**Compiling the .coffee files**

``` bash
coffee -w -o public/javascripts src/
cd example && coffee -w -o public/javascripts public/javascripts/src
```

**Serving the example project through HTTP**

Requires a file server. [annyong](https://github.com/remiprev/annyong) is a great one, use whatever you want (Thin, Python's native server…)

``` bash
cd example && annyong
```

**Rebuilding the project when necessary**

Requires Ruby 1.9.2+, [thor](https://github.com/wycats/thor), [node.js](http://nodejs.org/) and the [assets-packager](https://github.com/GoalSmashers/assets-packager) to be installed.

``` bash
thor rxr:build
```

One may force external deps refetch (for instance, for version bumps in `.js_deps.yml`):

```
thor rxr:build -r
```
