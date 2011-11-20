((function(){function a(b,c,d){if(b===c)return b!==0||1/b==1/c;if(b==null||c==null
)return b===c;b._chain&&(b=b._wrapped),c._chain&&(c=c._wrapped);if(v.isFunction(b
.isEqual))return b.isEqual(c);if(v.isFunction(c.isEqual))return c.isEqual(b);var e=
i.call(b);if(e!=i.call(c))return!1;switch(e){case"[object String]":return String(
b)==String(c);case"[object Number]":return b=+b,c=+c,b!=b?c!=c:b==0?1/b==1/c:b==c
;case"[object Date]":case"[object Boolean]":return+b==+c;case"[object RegExp]":return b
.source==c.source&&b.global==c.global&&b.multiline==c.multiline&&b.ignoreCase==c.
ignoreCase}if(typeof b!="object"||typeof c!="object")return!1;for(var f=d.length;
f--;)if(d[f]==b)return!0;d.push(b);var f=0,g=!0;if(e=="[object Array]"){if(f=b.length
,g=f==c.length)for(;f--;)if(!(g=f in b==f in c&&a(b[f],c[f],d)))break}else{if("constructor"in 
b!="constructor"in c||b.constructor!=c.constructor)return!1;for(var h in b)if(j.call
(b,h)&&(f++,!(g=j.call(c,h)&&a(b[h],c[h],d))))break;if(g){for(h in c)if(j.call(c,
h)&&!(f--))break;g=!f}}return d.pop(),g}var b=this,c=b._,d={},e=Array.prototype,f=
Object.prototype,g=e.slice,h=e.unshift,i=f.toString,j=f.hasOwnProperty,k=e.forEach
,l=e.map,m=e.reduce,n=e.reduceRight,o=e.filter,p=e.every,q=e.some,r=e.indexOf,s=e
.lastIndexOf,f=Array.isArray,t=Object.keys,u=Function.prototype.bind,v=function(a
){return new A(a)};typeof exports!="undefined"?(typeof module!="undefined"&&module
.exports&&(exports=module.exports=v),exports._=v):typeof define=="function"&&define
.amd?define("underscore",function(){return v}):b._=v,v.VERSION="1.2.2";var w=v.each=
v.forEach=function(a,b,c){if(a!=null)if(k&&a.forEach===k)a.forEach(b,c);else if(a
.length===+a.length){for(var e=0,f=a.length;e<f;e++)if(e in a&&b.call(c,a[e],e,a)===
d)break}else for(e in a)if(j.call(a,e)&&b.call(c,a[e],e,a)===d)break};v.map=function(
a,b,c){var d=[];return a==null?d:l&&a.map===l?a.map(b,c):(w(a,function(a,e,f){d[d
.length]=b.call(c,a,e,f)}),d)},v.reduce=v.foldl=v.inject=function(a,b,c,d){var e=
c!==void 0;a==null&&(a=[]);if(m&&a.reduce===m)return d&&(b=v.bind(b,d)),e?a.reduce
(b,c):a.reduce(b);w(a,function(a,f,g){e?c=b.call(d,c,a,f,g):(c=a,e=!0)});if(!e)throw new 
TypeError("Reduce of empty array with no initial value");return c},v.reduceRight=
v.foldr=function(a,b,c,d){return a==null&&(a=[]),n&&a.reduceRight===n?(d&&(b=v.bind
(b,d)),c!==void 0?a.reduceRight(b,c):a.reduceRight(b)):(a=(v.isArray(a)?a.slice()
:v.toArray(a)).reverse(),v.reduce(a,b,c,d))},v.find=v.detect=function(a,b,c){var d
;return x(a,function(a,e,f){if(b.call(c,a,e,f))return d=a,!0}),d},v.filter=v.select=
function(a,b,c){var d=[];return a==null?d:o&&a.filter===o?a.filter(b,c):(w(a,function(
a,e,f){b.call(c,a,e,f)&&(d[d.length]=a)}),d)},v.reject=function(a,b,c){var d=[];return a==
null?d:(w(a,function(a,e,f){b.call(c,a,e,f)||(d[d.length]=a)}),d)},v.every=v.all=
function(a,b,c){var e=!0;return a==null?e:p&&a.every===p?a.every(b,c):(w(a,function(
a,f,g){if(!(e=e&&b.call(c,a,f,g)))return d}),e)};var x=v.some=v.any=function(a,b,
c){var b=b||v.identity,e=!1;return a==null?e:q&&a.some===q?a.some(b,c):(w(a,function(
a,f,g){if(e||(e=b.call(c,a,f,g)))return d}),!!e)};v.include=v.contains=function(a
,b){var c=!1;return a==null?c:r&&a.indexOf===r?a.indexOf(b)!=-1:c=x(a,function(a)
{return a===b})},v.invoke=function(a,b){var c=g.call(arguments,2);return v.map(a,
function(a){return(b.call?b||a:a[b]).apply(a,c)})},v.pluck=function(a,b){return v
.map(a,function(a){return a[b]})},v.max=function(a,b,c){if(!b&&v.isArray(a))return Math
.max.apply(Math,a);if(!b&&v.isEmpty(a))return-Infinity;var d={computed:-Infinity}
;return w(a,function(a,e,f){e=b?b.call(c,a,e,f):a,e>=d.computed&&(d={value:a,computed
:e})}),d.value},v.min=function(a,b,c){if(!b&&v.isArray(a))return Math.min.apply(Math
,a);if(!b&&v.isEmpty(a))return Infinity;var d={computed:Infinity};return w(a,function(
a,e,f){e=b?b.call(c,a,e,f):a,e<d.computed&&(d={value:a,computed:e})}),d.value},v.
shuffle=function(a){var b=[],c;return w(a,function(a,d){d==0?b[0]=a:(c=Math.floor
(Math.random()*(d+1)),b[d]=b[c],b[c]=a)}),b},v.sortBy=function(a,b,c){return v.pluck
(v.map(a,function(a,d,e){return{value:a,criteria:b.call(c,a,d,e)}}).sort(function(
a,b){var c=a.criteria,d=b.criteria;return c<d?-1:c>d?1:0}),"value")},v.groupBy=function(
a,b){var c={},d=v.isFunction(b)?b:function(a){return a[b]};return w(a,function(a,
b){var e=d(a,b);(c[e]||(c[e]=[])).push(a)}),c},v.sortedIndex=function(a,b,c){c||(
c=v.identity);for(var d=0,e=a.length;d<e;){var f=d+e>>1;c(a[f])<c(b)?d=f+1:e=f}return d
},v.toArray=function(a){return a?a.toArray?a.toArray():v.isArray(a)?g.call(a):v.isArguments
(a)?g.call(a):v.values(a):[]},v.size=function(a){return v.toArray(a).length},v.first=
v.head=function(a,b,c){return b!=null&&!c?g.call(a,0,b):a[0]},v.initial=function(
a,b,c){return g.call(a,0,a.length-(b==null||c?1:b))},v.last=function(a,b,c){return b!=
null&&!c?g.call(a,Math.max(a.length-b,0)):a[a.length-1]},v.rest=v.tail=function(a
,b,c){return g.call(a,b==null||c?1:b)},v.compact=function(a){return v.filter(a,function(
a){return!!a})},v.flatten=function(a,b){return v.reduce(a,function(a,c){return v.
isArray(c)?a.concat(b?c:v.flatten(c)):(a[a.length]=c,a)},[])},v.without=function(
a){return v.difference(a,g.call(arguments,1))},v.uniq=v.unique=function(a,b,c){var c=
c?v.map(a,c):a,d=[];return v.reduce(c,function(c,e,f){if(0==f||(b===!0?v.last(c)!=
e:!v.include(c,e)))c[c.length]=e,d[d.length]=a[f];return c},[]),d},v.union=function(
){return v.uniq(v.flatten(arguments,!0))},v.intersection=v.intersect=function(a){
var b=g.call(arguments,1);return v.filter(v.uniq(a),function(a){return v.every(b,
function(b){return v.indexOf(b,a)>=0})})},v.difference=function(a,b){return v.filter
(a,function(a){return!v.include(b,a)})},v.zip=function(){for(var a=g.call(arguments
),b=v.max(v.pluck(a,"length")),c=Array(b),d=0;d<b;d++)c[d]=v.pluck(a,""+d);return c
},v.indexOf=function(a,b,c){if(a==null)return-1;var d;if(c)return c=v.sortedIndex
(a,b),a[c]===b?c:-1;if(r&&a.indexOf===r)return a.indexOf(b);for(c=0,d=a.length;c<
d;c++)if(a[c]===b)return c;return-1},v.lastIndexOf=function(a,b){if(a==null)return-1
;if(s&&a.lastIndexOf===s)return a.lastIndexOf(b);for(var c=a.length;c--;)if(a[c]===
b)return c;return-1},v.range=function(a,b,c){arguments.length<=1&&(b=a||0,a=0);for(
var c=arguments[2]||1,d=Math.max(Math.ceil((b-a)/c),0),e=0,f=Array(d);e<d;)f[e++]=
a,a+=c;return f};var y=function(){};v.bind=function(a,b){var c,d;if(a.bind===u&&u
)return u.apply(a,g.call(arguments,1));if(!v.isFunction(a))throw new TypeError;return d=
g.call(arguments,2),c=function(){if(this instanceof c){y.prototype=a.prototype;var e=new 
y,f=a.apply(e,d.concat(g.call(arguments)));return Object(f)===f?f:e}return a.apply
(b,d.concat(g.call(arguments)))}},v.bindAll=function(a){var b=g.call(arguments,1)
;return b.length==0&&(b=v.functions(a)),w(b,function(b){a[b]=v.bind(a[b],a)}),a},
v.memoize=function(a,b){var c={};return b||(b=v.identity),function(){var d=b.apply
(this,arguments);return j.call(c,d)?c[d]:c[d]=a.apply(this,arguments)}},v.delay=function(
a,b){var c=g.call(arguments,2);return setTimeout(function(){return a.apply(a,c)},
b)},v.defer=function(a){return v.delay.apply(v,[a,1].concat(g.call(arguments,1)))
},v.throttle=function(a,b){var c,d,e,f,g,h=v.debounce(function(){g=f=!1},b);return function(
){c=this,d=arguments;var i;e||(e=setTimeout(function(){e=null,g&&a.apply(c,d),h()
},b)),f?g=!0:a.apply(c,d),h(),f=!0}},v.debounce=function(a,b){var c;return function(
){var d=this,e=arguments;clearTimeout(c),c=setTimeout(function(){c=null,a.apply(d
,e)},b)}},v.once=function(a){var b=!1,c;return function(){return b?c:(b=!0,c=a.apply
(this,arguments))}},v.wrap=function(a,b){return function(){var c=[a].concat(g.call
(arguments));return b.apply(this,c)}},v.compose=function(){var a=g.call(arguments
);return function(){for(var b=g.call(arguments),c=a.length-1;c>=0;c--)b=[a[c].apply
(this,b)];return b[0]}},v.after=function(a,b){return a<=0?b():function(){if(--a<1
)return b.apply(this,arguments)}},v.keys=t||function(a){if(a!==Object(a))throw new 
TypeError("Invalid object");var b=[],c;for(c in a)j.call(a,c)&&(b[b.length]=c);return b
},v.values=function(a){return v.map(a,v.identity)},v.functions=v.methods=function(
a){var b=[],c;for(c in a)v.isFunction(a[c])&&b.push(c);return b.sort()},v.extend=
function(a){return w(g.call(arguments,1),function(b){for(var c in b)b[c]!==void 0&&
(a[c]=b[c])}),a},v.defaults=function(a){return w(g.call(arguments,1),function(b){
for(var c in b)a[c]==null&&(a[c]=b[c])}),a},v.clone=function(a){return v.isObject
(a)?v.isArray(a)?a.slice():v.extend({},a):a},v.tap=function(a,b){return b(a),a},v
.isEqual=function(b,c){return a(b,c,[])},v.isEmpty=function(a){if(v.isArray(a)||v
.isString(a))return a.length===0;for(var b in a)if(j.call(a,b))return!1;return!0}
,v.isElement=function(a){return!!a&&a.nodeType==1},v.isArray=f||function(a){return i
.call(a)=="[object Array]"},v.isObject=function(a){return a===Object(a)},v.isArguments=
i.call(arguments)=="[object Arguments]"?function(a){return i.call(a)=="[object Arguments]"
}:function(a){return!!a&&!!j.call(a,"callee")},v.isFunction=function(a){return i.
call(a)=="[object Function]"},v.isString=function(a){return i.call(a)=="[object String]"
},v.isNumber=function(a){return i.call(a)=="[object Number]"},v.isNaN=function(a)
{return a!==a},v.isBoolean=function(a){return a===!0||a===!1||i.call(a)=="[object Boolean]"
},v.isDate=function(a){return i.call(a)=="[object Date]"},v.isRegExp=function(a){
return i.call(a)=="[object RegExp]"},v.isNull=function(a){return a===null},v.isUndefined=
function(a){return a===void 0},v.noConflict=function(){return b._=c,this},v.identity=
function(a){return a},v.times=function(a,b,c){for(var d=0;d<a;d++)b.call(c,d)},v.
escape=function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace
(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;"
)},v.mixin=function(a){w(v.functions(a),function(b){C(b,v[b]=a[b])})};var z=0;v.uniqueId=
function(a){var b=z++;return a?a+b:b},v.templateSettings={evaluate:/<%([\s\S]+?)%>/g
,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},v.template=function(a,
b){var c=v.templateSettings,c="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+
a.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(c.escape,function(a,b){return"',_.escape("+
b.replace(/\\'/g,"'")+"),'"}).replace(c.interpolate,function(a,b){return"',"+b.replace
(/\\'/g,"'")+",'"}).replace(c.evaluate||null,function(a,b){return"');"+b.replace(/\\'/g
,"'").replace(/[\r\n\t]/g," ")+";__p.push('"}).replace(/\r/g,"\\r").replace(/\n/g
,"\\n").replace(/\t/g,"\\t")+"');}return __p.join('');",d=new Function("obj","_",
c);return b?d(b,v):function(a){return d(a,v)}};var A=function(a){this._wrapped=a}
;v.prototype=A.prototype;var B=function(a,b){return b?v(a).chain():a},C=function(
a,b){A.prototype[a]=function(){var a=g.call(arguments);return h.call(a,this._wrapped
),B(b.apply(v,a),this._chain)}};v.mixin(v),w("pop,push,reverse,shift,sort,splice,unshift"
.split(","),function(a){var b=e[a];A.prototype[a]=function(){return b.apply(this.
_wrapped,arguments),B(this._wrapped,this._chain)}}),w(["concat","join","slice"],function(
a){var b=e[a];A.prototype[a]=function(){return B(b.apply(this._wrapped,arguments)
,this._chain)}}),A.prototype.chain=function(){return this._chain=!0,this},A.prototype
.value=function(){return this._wrapped}})).call(this);var MicroEvent=function(){}
;MicroEvent.prototype={bind:function(a,b){this._events=this._events||{},this._events
[a]=this._events[a]||[],this._events[a].push(b)},unbind:function(a,b){this._events=
this._events||{};if(a in this._events==0)return;this._events[a].splice(this._events
[a].indexOf(b),1)},trigger:function(a){this._events=this._events||{};if(a in this
._events==0)return;for(var b=0;b<this._events[a].length;b++)this._events[a][b].apply
(this,Array.prototype.slice.call(arguments,1))}},MicroEvent.mixin=function(a){var b=
["bind","unbind","trigger"];for(var c=0;c<b.length;c++)a.prototype[b[c]]=MicroEvent
.prototype[b[c]]},typeof module!="undefined"&&"exports"in module&&(module.exports=
MicroEvent),function(){window.RXR=function(a){return a.Helpers=function(){function b
(){}return b.prototype.drawable={pixels2int:function(a){return parseInt(a,10)}},b
.prototype.components={ready:function(){return a.Events.trigger(this.component_name+":ready"
,this.component_name)}},b.prototype.keyCodes={keyCode:{left:37,up:38,right:39,down
:40},KEYTYPES:{directions:["37","38","39","40"]},KEYCODES:{37:"left",38:"up",39:"right"
,40:"down"}},b}(),a}(window.RXR||{})}.call(this),function(){var a=function(a,b){return function(
){return a.apply(b,arguments)}};Array.prototype.remove=function(a){var b,c;if((b=
this.indexOf(a))>-1)return[].splice.apply(this,[b,b-b+1].concat(c=[])),c},window.
RXR=function(b){return b.Base=function(){function c(c){return this.options=c,this
.start=a(this.start,this),this.checkIfReady=a(this.checkIfReady,this),this.settings=
{},this.settings.has_fps=Boolean(this.options.fps),this.settings.container=$(this
.options.el),this.layers=[],this.entities=[],b.Events||(b._events=function(){},MicroEvent
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