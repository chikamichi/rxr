((function(){window.RXR=function(a){return a.Helpers=function(){function b(){}return b
.prototype.drawable={pixels2int:function(a){return parseInt(a,10)}},b.prototype.components=
{ready:function(){return a.Events.trigger(this.component_name+":ready",this.component_name
)}},b.prototype.keyCodes={keyCode:{left:37,up:38,right:39,down:40},KEYTYPES:{directions
:["37","38","39","40"]},KEYCODES:{37:"left",38:"up",39:"right",40:"down"}},b}(),a
}(window.RXR||{})})).call(this),function(){var a=function(a,b){return function(){
return a.apply(b,arguments)}};Array.prototype.remove=function(a){var b,c;if((b=this
.indexOf(a))>-1)return[].splice.apply(this,[b,b-b+1].concat(c=[])),c},window.RXR=
function(b){return b.Base=function(){function c(c){return this.options=c,this.start=
a(this.start,this),this.checkIfReady=a(this.checkIfReady,this),this.settings={},this
.settings.has_fps=Boolean(this.options.fps),this.settings.container=$(this.options
.el),this.layers=[],this.entities=[],b.Events||(b._events=function(){},MicroEvent
.mixin(b._events),b.Events=new b._events),this.settings.has_fps&&(this.fps=new b.
FPS({el:this.options.fps})),this.keyboard=new b.Keyboard,this.loop=new b.MainLoop
({has_fps:this.settings.has_fps,current_game:this}),(this.options.init||$.noop).apply
(this),this.init(),this}return c.prototype.checkIfReady=function(a){this.readyComponents
.push(a);if(_.isEmpty(_.difference(this.mustBeReady,this.readyComponents)))return this
.start()},c.prototype.init=function(){var c,d,e,f,g;this.mustBeReady=_.map(this.entities
,function(a){return a.component_name}),this.mustBeReady.push("keyboard"),this.readyComponents=
[],_.each(this.mustBeReady,a(function(a){return b.Events.bind(a+":ready",this.checkIfReady
)},this)),this.keyboard.init(),f=this.entities,g=[];for(d=0,e=f.length;d<e;d++)c=
f[d],g.push(c.init());return g},c.prototype.start=function(){return this.loop.start
()},c}(),b}(window.RXR||{})}.call(this),function(){var a=function(a,b){return function(
){return a.apply(b,arguments)}};window.RXR=function(b){return b.MainLoop=function(
){function c(b){this.options=b,this._mainLoop=a(this._mainLoop,this),this._perform=
a(this._perform,this),this.currentGame=this.options.current_game,this.rate=1e3/60
}return c.prototype.start=function(){return this._loop(this._mainLoop)},c.prototype
._perform=function(){return this._update(),this._redraw()},c.prototype._update=function(
){return b.Events.trigger("keyboard:clear_old_pressed"),b.Events.trigger("player:update:coordinates"
,this.currentGame.keyboard.get_pressed())},c.prototype._redraw=function(){var a,c
,d,e,f,g,h,i,j;h=this.currentGame.entities;for(d=0,f=h.length;d<f;d++)a=h[d],b.Events
.trigger(a.component_name+":refresh",a);i=this.currentGame.layers,j=[];for(e=0,g=
i.length;e<g;e++)c=i[e],j.push(b.Events.trigger("layers:"+c.options.layer_name+":refresh"
));return j},c.prototype._mainLoop=function(){return this._perform(),this.options
.has_fps&&b.Events.trigger("fps:refresh"),this._loop(this._mainLoop)},c.prototype
._loop=function(a){return(window.requestAnimationFrame||window.webkitRequestAnimationFrame||
window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||
function(a,b){return window.setTimeout(a,this.rate)})(a)},c}(),b}(window.RXR||{})
}.call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments
)}};window.RXR=function(b){return b.FPS=function(){function c(c){this.options=c,this
.refresh=a(this.refresh,this),this.frameCount=0,this.fps=0,this.lastTime=this._getTime
(),b.Events.bind("fps:refresh",this.refresh)}return c.prototype.refresh=function(
){return $(this.options.el).find(".value").html(this._compute())},c.prototype._getTime=
function(){return+(new Date)},c.prototype._compute=function(){var a,b;return b=this
._getTime(),a=b-this.lastTime,a>=1e3&&(this.fps=this.frameCount,this.frameCount=0
,this.lastTime=b),this.frameCount++,this.fps},c}(),b}(window.RXR||{})}.call(this)
,function(){var a=function(a,b){return function(){return a.apply(b,arguments)}};window
.RXR=function(b){return b.Canvas=function(){function c(c){this.options=c,this.refresh=
a(this.refresh,this),_.extend(this,(new b.Helpers).components),_.extend(this,(new 
b.Helpers).drawable),this.options.container?this.attachToContainer():this.bindScene
(),this.render_queue=[],b.Events.bind("layers:"+this.options.layer_name+":refresh"
,this.refresh)}return c.prototype.init=function(){return this.clear(),this.ready(
)},c.prototype.attachToContainer=function(){var a;return this.container=this.options
.container,a=$("<canvas>"),this.container.append(a),this.canvas=$(this.container)
.find("canvas:last"),this.context=this.canvas.get(0).getContext("2d"),this._setDimensions
()},c.prototype.bindScene=function(){return this.canvas=this.options.canvas,this.
container=this.canvas.parent(),this.context=this.canvas.get(0).getContext("2d"),this
._setDimensions()},c.prototype.clear=function(){return this.context.save(),this.context
.setTransform(1,0,0,1,0,0),this.context.fillStyle="rgba(255,255,255,1)",this.context
.strokeStyle="rgba(255,255,255,1)",this.context.clearRect(0,0,this.width,this.height
),this.context.restore()},c.prototype.queue=function(a){return this.render_queue.
push(a)},c.prototype.refresh=function(){var a,b,c,d;d=this.render_queue;for(b=0,c=
d.length;b<c;b++)a=d[b],a[0].apply(this,a[1]);return this.render_queue=[]},c.prototype
._setDimensions=function(){return this.width=this.pixels2int($(this.options.container
).css("width")),this.height=this.pixels2int($(this.options.container).css("height"
)),$(this.canvas).attr("width",this.width),$(this.canvas).attr("height",this.height
)},c}(),b}(window.RXR||{})}.call(this),function(){var a=function(a,b){return function(
){return a.apply(b,arguments)}};window.RXR=function(b){return b.Keyboard=function(
){function c(){this.clearOldPressed=a(this.clearOldPressed,this),_.extend(this,(new 
b.Helpers).components),_.extend(this,(new b.Helpers).keyCodes),this.component_name="keyboard"
,b.Events.bind("keyboard:clear_old_pressed",this.clearOldPressed),this.pressed={}
,this.was_pressed={},this.pressed_threshold=200}return c.prototype.init=function(
){return this._startMonitoringKeyEvents(),this.ready()},c.prototype.get_pressed=function(
){var a,b,c,d;a={},d=this.pressed;for(b in d)c=d[b],a[this.KEYCODES[b]]=[c,this.was_pressed
[b]];return a},c.prototype.clearOldPressed=function(){var a,b,c,d,e;b=+(new Date)
,d=this.was_pressed,e=[];for(a in d)c=d[a],e.push(b-c>this.pressed_threshold&&!this
.pressed[a]?delete this.was_pressed[a]:void 0);return e},c.prototype._startMonitoringKeyEvents=
function(){return $(window).keyup(a(function(a){return this._onKeyup(a)},this)),$
(window).keydown(a(function(a){return this._onKeyDown(a)},this))},c.prototype._onKeyDown=
function(a){return this.pressed[a.keyCode]=+(new Date)},c.prototype._onKeyup=function(
a){return this.was_pressed[a.keyCode]=this.pressed[a.keyCode],delete this.pressed
[a.keyCode]},c}(),b}(window.RXR||{})}.call(this),function(){var a=function(a,b){return function(
){return a.apply(b,arguments)}};window.RXR=function(b){return b.Entity=function()
{function c(c){this.options=c,this.updateCoordinates=a(this.updateCoordinates,this
),this.setCoordinates=a(this.setCoordinates,this),_.extend(this,(new b.Helpers).components
),_.extend(this,(new b.Helpers).keyCodes),this.scene=this.options.scene,this.component_name=
this.options.component_name,this.available_directions=["left","up","right","down"
],this.speed={normal:1,fast:3}}return c.prototype.init=function(){return this.options
.refresh&&_.isFunction(this.options.refresh)&&(this.refresh=this.options.refresh)
,b.Events.bind(this.options.component_name+":set:coordinates",this.setCoordinates
),b.Events.bind(this.options.component_name+":update:coordinates",this.updateCoordinates
),b.Events.bind(this.options.component_name+":refresh",this.refresh),this.setCoordinates
({x:this.scene.width/2-16,y:this.scene.height/2-16}),this.refresh(this),this.ready
()},c.prototype.setCoordinates=function(a){return a===void 0&&(a={}),this.x=a.x||0
,this.y=a.y||0},c.prototype.coordinates=function(){return{x:this.x,y:this.y}},c.prototype
.updateCoordinates=function(a){var b,c,d,e;e=[];for(b in a)d=a[b],e.push(_.include
(this.available_directions,b)?(c=d[1]?this.speed.fast:this.speed.normal,this._move
(b,c)):void 0);return e},c.prototype._move=function(a,b){if(a==="left"){this.x-=b
;return}if(a==="up"){this.y-=b;return}if(a==="right"){this.x+=b;return}a==="down"&&
(this.y+=b)},c}(),b}(window.RXR||{})}.call(this)