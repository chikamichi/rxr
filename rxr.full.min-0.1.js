(function(a,b){function c(a){return J.isWindow(a)?a:a.nodeType===9?a.defaultView||
a.parentWindow:!1}function d(a){if(!cr[a]){var b=G.body,c=J("<"+a+">").appendTo(b
),d=c.css("display");c.remove();if(d==="none"||d===""){cs||(cs=G.createElement("iframe"
),cs.frameBorder=cs.width=cs.height=0),b.appendChild(cs);if(!ct||!cs.createElement
)ct=(cs.contentWindow||cs.contentDocument).document,ct.write((G.compatMode==="CSS1Compat"?"<!doctype html>"
:"")+"<html><body>"),ct.close();c=ct.createElement(a),ct.body.appendChild(c),d=J.
css(c,"display"),b.removeChild(cs)}cr[a]=d}return cr[a]}function e(a,b){var c={};
return J.each(cx.concat.apply([],cx.slice(0,b)),function(){c[this]=a}),c}function f
(){cy=b}function g(){return setTimeout(f,0),cy=J.now()}function h(){try{return new 
a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function i(){try{return new a.XMLHttpRequest
}catch(b){}}function j(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.
dataTypes,e={},f,g,h=d.length,i,j=d[0],k,l,m,n,o;for(f=1;f<h;f++){if(f===1)for(g in 
a.converters)typeof g=="string"&&(e[g.toLowerCase()]=a.converters[g]);k=j,j=d[f];
if(j==="*")j=k;else if(k!=="*"&&k!==j){l=k+" "+j,m=e[l]||e["* "+j];if(!m){o=b;for(
n in e){i=n.split(" ");if(i[0]===k||i[0]==="*"){o=e[i[1]+" "+j];if(o){n=e[n],n===!0?
m=o:o===!0&&(m=n);break}}}}!m&&!o&&J.error("No conversion from "+l.replace(" "," to "
)),m!==!0&&(c=m?m(c):o(n(c)))}}return c}function k(a,c,d){var e=a.contents,f=a.dataTypes
,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.
shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in 
e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!
f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j)return j!==f[0]&&f
.unshift(j),d[j]}function l(a,b,c,d){if(J.isArray(b))J.each(b,function(b,e){c||bT
.test(a)?d(a,e):l(a+"["+(typeof e=="object"||J.isArray(e)?b:"")+"]",e,c,d)});else if(!
c&&b!=null&&typeof b=="object")for(var e in b)l(a+"["+e+"]",b[e],c,d);else d(a,b)
}function m(a,c){var d,e,f=J.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((
f[d]?a:e||(e={}))[d]=c[d]);e&&J.extend(!0,a,e)}function n(a,c,d,e,f,g){f=f||c.dataTypes
[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===cg,l;for(;i<j&&(k||!l);i++
)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=n(a,c,
d,e,l,g)));return(k||!l)&&!g["*"]&&(l=n(a,c,d,e,"*",g)),l}function o(a){return function(
b,c){typeof b!="string"&&(c=b,b="*");if(J.isFunction(c)){var d=b.toLowerCase().split
(cc),e=0,f=d.length,g,h,i;for(;e<f;e++)g=d[e],i=/^\+/.test(g),i&&(g=g.substr(1)||"*"
),h=a[g]=a[g]||[],h[i?"unshift":"push"](c)}}}function p(a,b,c){var d=b==="width"?
a.offsetWidth:a.offsetHeight,e=b==="width"?bN:bO;if(d>0)return c!=="border"&&J.each
(e,function(){c||(d-=parseFloat(J.css(a,"padding"+this))||0),c==="margin"?d+=parseFloat
(J.css(a,c+this))||0:d-=parseFloat(J.css(a,"border"+this+"Width"))||0}),d+"px";d=
bP(a,b,b);if(d<0||d==null)d=a.style[b]||0;return d=parseFloat(d)||0,c&&J.each(e,function(
){d+=parseFloat(J.css(a,"padding"+this))||0,c!=="padding"&&(d+=parseFloat(J.css(a
,"border"+this+"Width"))||0),c==="margin"&&(d+=parseFloat(J.css(a,c+this))||0)}),
d+"px"}function q(a,b){b.src?J.ajax({url:b.src,async:!1,dataType:"script"}):J.globalEval
((b.text||b.textContent||b.innerHTML||"").replace(bD,"/*$0*/")),b.parentNode&&b.parentNode
.removeChild(b)}function r(a){var b=(a.nodeName||"").toLowerCase();b==="input"?s(
a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&J.grep(a.getElementsByTagName
("input"),s)}function s(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=
a.checked}function t(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName
("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function u
(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&
b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML
;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=
a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue
}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=
a.value);b.removeAttribute(J.expando)}}function v(a,b){if(b.nodeType===1&&!!J.hasData
(a)){var c,d,e,f=J._data(a),g=J._data(b,f),h=f.events;if(h){delete g.handle,g.events=
{};for(c in h)for(d=0,e=h[c].length;d<e;d++)J.event.add(b,c+(h[c][d].namespace?"."
:"")+h[c][d].namespace,h[c][d],h[c][d].data)}g.data&&(g.data=J.extend({},g.data))
}}function w(a,b){return J.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||
a.appendChild(a.ownerDocument.createElement("tbody")):a}function x(a){var b=br.split
(" "),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement
(b.pop());return c}function y(a,b,c){b=b||0;if(J.isFunction(b))return J.grep(a,function(
a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return J.grep(a,function(
a,d){return a===b===c});if(typeof b=="string"){var d=J.grep(a,function(a){return a
.nodeType===1});if(bn.test(b))return J.filter(b,d,!c);b=J.filter(b,d)}return J.grep
(a,function(a,d){return J.inArray(a,b)>=0===c})}function z(a){return!a||!a.parentNode||
a.parentNode.nodeType===11}function A(){return!0}function B(){return!1}function C
(a,b,c){var d=b+"defer",e=b+"queue",f=b+"mark",g=J._data(a,d);g&&(c==="queue"||!J
._data(a,e))&&(c==="mark"||!J._data(a,f))&&setTimeout(function(){!J._data(a,e)&&!
J._data(a,f)&&(J.removeData(a,d,!0),g.fire())},0)}function D(a){for(var b in a){if(
b==="data"&&J.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function E
(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(N,"-$1").toLowerCase();
d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?
null:J.isNumeric(d)?parseFloat(d):M.test(d)?J.parseJSON(d):d}catch(f){}J.data(a,c
,d)}else d=b}return d}function F(a){var b=K[a]={},c,d;a=a.split(/\s+/);for(c=0,d=
a.length;c<d;c++)b[a[c]]=!0;return b}var G=a.document,H=a.navigator,I=a.location,
J=function(){function c(){if(!d.isReady){try{G.documentElement.doScroll("left")}catch(
a){setTimeout(c,1);return}d.ready()}}var d=function(a,b){return new d.fn.init(a,b
,g)},e=a.jQuery,f=a.$,g,h=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,i=/\S/,j=/^\s+/
,k=/\s+$/,l=/\d/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g
,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g
,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/
,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b)
{return(b+"").toUpperCase()},y=H.userAgent,z,A,B,C=Object.prototype.toString,D=Object
.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,I=String
.prototype.trim,J=Array.prototype.indexOf,K={};return d.fn=d.prototype={constructor
:d,init:function(a,c,e){var f,g,i,j;if(!a)return this;if(a.nodeType)return this.context=
this[0]=a,this.length=1,this;if(a==="body"&&!c&&G.body)return this.context=G,this
[0]=G.body,this.selector=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)!=="<"||
a.charAt(a.length-1)!==">"||a.length<3?f=h.exec(a):f=[null,a,null];if(f&&(f[1]||!
c)){if(f[1])return c=c instanceof d?c[0]:c,j=c?c.ownerDocument||c:G,i=m.exec(a),i?
d.isPlainObject(c)?(a=[G.createElement(i[1])],d.fn.attr.call(a,c,!0)):a=[j.createElement
(i[1])]:(i=d.buildFragment([f[1]],[j]),a=(i.cacheable?d.clone(i.fragment):i.fragment
).childNodes),d.merge(this,a);g=G.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==
f[2])return e.find(a);this.length=1,this[0]=g}return this.context=G,this.selector=
a,this}return!c||c.jquery?(c||e).find(a):this.constructor(c).find(a)}return d.isFunction
(a)?e.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context)
,d.makeArray(a,this))},selector:"",jquery:"1.7",length:0,size:function(){return this
.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?
this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var e=this
.constructor();return d.isArray(a)?E.apply(e,a):d.merge(e,a),e.prevObject=this,e.
context=this.context,b==="find"?e.selector=this.selector+(this.selector?" ":"")+c
:b&&(e.selector=this.selector+"."+b+"("+c+")"),e},each:function(a,b){return d.each
(this,a,b)},ready:function(a){return d.bindReady(),A.add(a),this},eq:function(a){
return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0
)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply
(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this
.pushStack(d.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this
.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},d.fn.init
.prototype=d.fn,d.extend=d.fn.extend=function(){var a,c,e,f,g,h,i=arguments[0]||{
},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof 
i!="object"&&!d.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments
[j])!=null)for(c in a){e=i[c],f=a[c];if(i===f)continue;l&&f&&(d.isPlainObject(f)||
(g=d.isArray(f)))?(g?(g=!1,h=e&&d.isArray(e)?e:[]):h=e&&d.isPlainObject(e)?e:{},i
[c]=d.extend(l,h,f)):f!==b&&(i[c]=f)}return i},d.extend({noConflict:function(b){return a
.$===d&&(a.$=f),b&&a.jQuery===d&&(a.jQuery=e),d},isReady:!1,readyWait:1,holdReady
:function(a){a?d.readyWait++:d.ready(!0)},ready:function(a){if(a===!0&&!--d.readyWait||
a!==!0&&!d.isReady){if(!G.body)return setTimeout(d.ready,1);d.isReady=!0;if(a!==!0&&--
d.readyWait>0)return;A.fireWith(G,[d]),d.fn.trigger&&d(G).trigger("ready").unbind
("ready")}},bindReady:function(){if(!A){A=d.Callbacks("once memory");if(G.readyState==="complete"
)return setTimeout(d.ready,1);if(G.addEventListener)G.addEventListener("DOMContentLoaded"
,B,!1),a.addEventListener("load",d.ready,!1);else if(G.attachEvent){G.attachEvent
("onreadystatechange",B),a.attachEvent("onload",d.ready);var b=!1;try{b=a.frameElement==
null}catch(e){}G.documentElement.doScroll&&b&&c()}}},isFunction:function(a){return d
.type(a)==="function"},isArray:Array.isArray||function(a){return d.type(a)==="array"
},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric
:function(a){return a!=null&&l.test(a)&&!isNaN(a)},type:function(a){return a==null?
String(a):K[C.call(a)]||"object"},isPlainObject:function(a){if(!a||d.type(a)!=="object"||
a.nodeType||d.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!
D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var e;
for(e in a);return e===b||D.call(a,e)},isEmptyObject:function(a){for(var b in a)return!1
;return!0},error:function(a){throw a},parseJSON:function(b){if(typeof b!="string"||!
b)return null;b=d.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test
(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))
();d.error("Invalid JSON: "+b)},parseXML:function(c){var e,f;try{a.DOMParser?(f=new 
DOMParser,e=f.parseFromString(c,"text/xml")):(e=new ActiveXObject("Microsoft.XMLDOM"
),e.async="false",e.loadXML(c))}catch(g){e=b}return(!e||!e.documentElement||e.getElementsByTagName
("parsererror").length)&&d.error("Invalid XML: "+c),e},noop:function(){},globalEval
:function(b){b&&i.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase
:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a
.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,e){var f
,g=0,h=a.length,i=h===b||d.isFunction(a);if(e){if(i){for(f in a)if(c.apply(a[f],e
)===!1)break}else for(;g<h;)if(c.apply(a[g++],e)===!1)break}else if(i){for(f in a
)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;
return a},trim:I?function(a){return a==null?"":I.call(a)}:function(a){return a==null?""
:(a+"").replace(j,"").replace(k,"")},makeArray:function(a,b){var c=b||[];if(a!=null
){var e=d.type(a);a.length==null||e==="string"||e==="function"||e==="regexp"||d.isWindow
(a)?E.call(c,a):d.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(J)return J
.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===
a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number"
)for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];return a
.length=d,a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++
)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,e){var f,g,h=[],i=0
,j=a.length,k=a instanceof d||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||
d.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,e),f!=null&&(h[h.length]=f);else for(g in 
a)f=c(a[g],g,e),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy
:function(a,c){if(typeof c=="string"){var e=a[c];c=a,a=e}if(!d.isFunction(a))return b
;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments
)))};return g.guid=a.guid=a.guid||g.guid||d.guid++,g},access:function(a,c,e,f,g,h
){var i=a.length;if(typeof c=="object"){for(var j in c)d.access(a,j,c[j],f,g,e);return a
}if(e!==b){f=!h&&f&&d.isFunction(e);for(var k=0;k<i;k++)g(a[k],c,f?e.call(a[k],k,
g(a[k],c)):e,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime
()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||
a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"
}},sub:function(){function a(b,c){return new a.fn.init(b,c)}d.extend(!0,a,this),a
.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=
function(c,e){return e&&e instanceof d&&!(e instanceof a)&&(e=a(e)),d.fn.init.call
(this,c,e,b)},a.fn.init.prototype=a.fn;var b=a(G);return a},browser:{}}),d.each("Boolean Number String Function Array Date RegExp Object"
.split(" "),function(a,b){K["[object "+b+"]"]=b.toLowerCase()}),z=d.uaMatch(y),z.
browser&&(d.browser[z.browser]=!0,d.browser.version=z.version),d.browser.webkit&&
(d.browser.safari=!0),i.test(" ")&&(j=/^[\s\xA0]+/,k=/[\s\xA0]+$/),g=d(G),G.addEventListener?
B=function(){G.removeEventListener("DOMContentLoaded",B,!1),d.ready()}:G.attachEvent&&
(B=function(){G.readyState==="complete"&&(G.detachEvent("onreadystatechange",B),d
.ready())}),typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery"
,[],function(){return d}),d}(),K={};J.Callbacks=function(a){a=a?K[a]||F(a):{};var c=
[],d=[],e,f,g,h,i,j=function(b){var d,e,f,g,h;for(d=0,e=b.length;d<e;d++)f=b[d],g=
J.type(f),g==="array"?j(f):g==="function"&&(!a.unique||!l.has(f))&&c.push(f)},k=function(
b,j){j=j||[],e=!a.memory||[b,j],f=!0,i=g||0,g=0,h=c.length;for(;c&&i<h;i++)if(c[i
].apply(b,j)===!1&&a.stopOnFalse){e=!0;break}f=!1,c&&(a.once?e===!0?l.disable():c=
[]:d&&d.length&&(e=d.shift(),l.fireWith(e[0],e[1])))},l={add:function(){if(c){var a=
c.length;j(arguments),f?h=c.length:e&&e!==!0&&(g=a,k(e[0],e[1]))}return this},remove
:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var g=0;g<c.length
;g++)if(b[d]===c[g]){f&&g<=h&&(h--,g<=i&&i--),c.splice(g--,1);if(a.unique)break}}
return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0
}return!1},empty:function(){return c=[],this},disable:function(){return c=d=e=b,this
},disabled:function(){return!c},lock:function(){return d=b,(!e||e===!0)&&l.disable
(),this},locked:function(){return!d},fireWith:function(b,c){return d&&(f?a.once||
d.push([b,c]):(!a.once||!e)&&k(b,c)),this},fire:function(){return l.fireWith(this
,arguments),this},fired:function(){return!!e}};return l};var L=[].slice;J.extend(
{Deferred:function(a){var b=J.Callbacks("once memory"),c=J.Callbacks("once memory"
),d=J.Callbacks("memory"),e="pending",f={resolve:b,reject:c,notify:d},g={done:b.add
,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected
:c.fired,then:function(a,b,c){return h.done(a).fail(b).progress(c),this},always:function(
){return h.done.apply(h,arguments).fail.apply(h,arguments)},pipe:function(a,b,c){
return J.Deferred(function(d){J.each({done:[a,"resolve"],fail:[b,"reject"],progress
:[c,"notify"]},function(a,b){var c=b[0],e=b[1],f;J.isFunction(c)?h[a](function(){
f=c.apply(this,arguments),f&&J.isFunction(f.promise)?f.promise().then(d.resolve,d
.reject,d.notify):d[e+"With"](this===h?d:this,[f])}):h[a](d[e])})}).promise()},promise
:function(a){if(a==null)a=g;else for(var b in g)a[b]=g[b];return a}},h=g.promise(
{}),i;for(i in f)h[i]=f[i].fire,h[i+"With"]=f[i].fireWith;return h.done(function(
){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock)
,a&&a.call(h,h),h},when:function(a){function b(a){return function(b){g[a]=arguments
.length>1?L.call(arguments,0):b,j.notifyWith(k,g)}}function c(a){return function(
b){d[a]=arguments.length>1?L.call(arguments,0):b,--h||j.resolveWith(j,d)}}var d=L
.call(arguments,0),e=0,f=d.length,g=Array(f),h=f,i=f,j=f<=1&&a&&J.isFunction(a.promise
)?a:J.Deferred(),k=j.promise();if(f>1){for(;e<f;e++)d[e]&&d[e].promise&&J.isFunction
(d[e].promise)?d[e].promise().then(c(e),j.reject,b(e)):--h;h||j.resolveWith(j,d)}
else j!==a&&j.resolveWith(j,f?[a]:[]);return k}}),J.support=function(){var a=G.createElement
("div"),b=G.documentElement,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;a.setAttribute("className"
,"t"),a.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/><nav></nav>"
,c=a.getElementsByTagName("*"),d=a.getElementsByTagName("a")[0];if(!c||!c.length||!
d)return{};e=G.createElement("select"),f=e.appendChild(G.createElement("option"))
,g=a.getElementsByTagName("input")[0],i={leadingWhitespace:a.firstChild.nodeType===3
,tbody:!a.getElementsByTagName("tbody").length,htmlSerialize:!!a.getElementsByTagName
("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute
("href")==="/a",opacity:/^0.55/.test(d.style.opacity),cssFloat:!!d.style.cssFloat
,unknownElems:!!a.getElementsByTagName("nav").length,checkOn:g.value==="on",optSelected
:f.selected,getSetAttribute:a.className!=="t",enctype:!!G.createElement("form").enctype
,submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent
:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},g.checked=!0
,i.noCloneChecked=g.cloneNode(!0).checked,e.disabled=!0,i.optDisabled=!f.disabled
;try{delete a.test}catch(t){i.deleteExpando=!1}!a.addEventListener&&a.attachEvent&&
a.fireEvent&&(a.attachEvent("onclick",function(){i.noCloneEvent=!1}),a.cloneNode(!0
).fireEvent("onclick")),g=G.createElement("input"),g.value="t",g.setAttribute("type"
,"radio"),i.radioValue=g.value==="t",g.setAttribute("checked","checked"),a.appendChild
(g),j=G.createDocumentFragment(),j.appendChild(a.lastChild),i.checkClone=j.cloneNode
(!0).cloneNode(!0).lastChild.checked,a.innerHTML="",a.style.width=a.style.paddingLeft="1px"
,k=G.getElementsByTagName("body")[0],m=G.createElement(k?"div":"body"),n={visibility
:"hidden",width:0,height:0,border:0,margin:0,background:"none"},k&&J.extend(n,{position
:"absolute",left:"-999px",top:"-999px"});for(r in n)m.style[r]=n[r];m.appendChild
(a),l=k||b,l.insertBefore(m,l.firstChild),i.appendChecked=g.checked,i.boxModel=a.
offsetWidth===2,"zoom"in a.style&&(a.style.display="inline",a.style.zoom=1,i.inlineBlockNeedsLayout=
a.offsetWidth===2,a.style.display="",a.innerHTML="<div style='width:4px;'></div>"
,i.shrinkWrapBlocks=a.offsetWidth!==2),a.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>"
,o=a.getElementsByTagName("td"),s=o[0].offsetHeight===0,o[0].style.display="",o[1
].style.display="none",i.reliableHiddenOffsets=s&&o[0].offsetHeight===0,a.innerHTML=""
,G.defaultView&&G.defaultView.getComputedStyle&&(h=G.createElement("div"),h.style
.width="0",h.style.marginRight="0",a.appendChild(h),i.reliableMarginRight=(parseInt
((G.defaultView.getComputedStyle(h,null)||{marginRight:0}).marginRight,10)||0)===0
);if(a.attachEvent)for(r in{submit:1,change:1,focusin:1})q="on"+r,s=q in a,s||(a.
setAttribute(q,"return;"),s=typeof a[q]=="function"),i[r+"Bubbles"]=s;return J(function(
){var a,b,c,d,e,f,g=1,h="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;"
,j="visibility:hidden;border:0;",l="style='"+h+"border:5px solid #000;padding:0;'"
,n="<div "+l+"><div></div></div>"+"<table "+l+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>"
;k=G.getElementsByTagName("body")[0],!k||(a=G.createElement("div"),a.style.cssText=
j+"width:0;height:0;position:static;top:0;margin-top:"+g+"px",k.insertBefore(a,k.
firstChild),m=G.createElement("div"),m.style.cssText=h+j,m.innerHTML=n,a.appendChild
(m),b=m.firstChild,c=b.firstChild,e=b.nextSibling.firstChild.firstChild,f={doesNotAddBorder
:c.offsetTop!==5,doesAddBorderForTableAndCells:e.offsetTop===5},c.style.position="fixed"
,c.style.top="20px",f.fixedPosition=c.offsetTop===20||c.offsetTop===15,c.style.position=
c.style.top="",b.style.overflow="hidden",b.style.position="relative",f.subtractsBorderForOverflowNotVisible=
c.offsetTop===-5,f.doesNotIncludeMarginInBodyOffset=k.offsetTop!==g,k.removeChild
(a),m=a=null,J.extend(i,f))}),m.innerHTML="",l.removeChild(m),m=j=e=f=k=h=a=g=null
,i}(),J.boxModel=J.support.boxModel;var M=/^(?:\{.*\}|\[.*\])$/,N=/([A-Z])/g;J.extend
({cache:{},uuid:0,expando:"jQuery"+(J.fn.jquery+Math.random()).replace(/\D/g,""),
noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData
:function(a){return a=a.nodeType?J.cache[a[J.expando]]:a[J.expando],!!a&&!D(a)},data
:function(a,c,d,e){if(!!J.acceptData(a)){var f,g,h,i=J.expando,j=typeof c=="string"
,k=a.nodeType,l=k?J.cache:a,m=k?a[J.expando]:a[J.expando]&&J.expando,n=c==="events"
;if((!m||!l[m]||!n&&!e&&!l[m].data)&&j&&d===b)return;m||(k?a[J.expando]=m=++J.uuid
:m=J.expando),l[m]||(l[m]={},k||(l[m].toJSON=J.noop));if(typeof c=="object"||typeof 
c=="function")e?l[m]=J.extend(l[m],c):l[m].data=J.extend(l[m].data,c);return f=g=
l[m],e||(g.data||(g.data={}),g=g.data),d!==b&&(g[J.camelCase(c)]=d),n&&!g[c]?f.events
:(j?(h=g[c],h==null&&(h=g[J.camelCase(c)])):h=g,h)}},removeData:function(a,b,c){if(!!
J.acceptData(a)){var d,e,f,g=J.expando,h=a.nodeType,i=h?J.cache:a,j=h?a[J.expando
]:J.expando;if(!i[j])return;if(b){d=c?i[j]:i[j].data;if(d){J.isArray(b)?b=b:b in 
d?b=[b]:(b=J.camelCase(b),b in d?b=[b]:b=b.split(" "));for(e=0,f=b.length;e<f;e++
)delete d[b[e]];if(!(c?D:J.isEmptyObject)(d))return}}if(!c){delete i[j].data;if(!
D(i[j]))return}J.support.deleteExpando||!i.setInterval?delete i[j]:i[j]=null,h&&(
J.support.deleteExpando?delete a[J.expando]:a.removeAttribute?a.removeAttribute(J
.expando):a[J.expando]=null)}},_data:function(a,b,c){return J.data(a,b,c,!0)},acceptData
:function(a){if(a.nodeName){var b=J.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&
a.getAttribute("classid")===b}return!0}}),J.fn.extend({data:function(a,c){var d,e
,f,g=null;if(typeof a=="undefined"){if(this.length){g=J.data(this[0]);if(this[0].
nodeType===1&&!J._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var h=0,i=
e.length;h<i;h++)f=e[h].name,f.indexOf("data-")===0&&(f=J.camelCase(f.substring(5
)),E(this[0],f,g[f]));J._data(this[0],"parsedAttrs",!0)}}return g}return typeof a=="object"?
this.each(function(){J.data(this,a)}):(d=a.split("."),d[1]=d[1]?"."+d[1]:"",c===b?
(g=this.triggerHandler("getData"+d[1]+"!",[d[0]]),g===b&&this.length&&(g=J.data(this
[0],a),g=E(this[0],a,g)),g===b&&d[1]?this.data(d[0]):g):this.each(function(){var b=
J(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),J.data(this,a,c),b.triggerHandler
("changeData"+d[1]+"!",e)}))},removeData:function(a){return this.each(function(){
J.removeData(this,a)})}}),J.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",J.
_data(a,b,(J._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(
b){c=c||"fx";var d=c+"mark",e=a?0:(J._data(b,d)||1)-1;e?J._data(b,d,e):(J.removeData
(b,d,!0),C(b,c,"mark"))}},queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue"
,d=J._data(a,b),c&&(!d||J.isArray(c)?d=J._data(a,b,J.makeArray(c)):d.push(c)),d||
[]},dequeue:function(a,b){b=b||"fx";var c=J.queue(a,b),d=c.shift(),e={};d==="inprogress"&&
(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),J._data(a,b+".run",e),d.call(
a,function(){J.dequeue(a,b)},e)),c.length||(J.removeData(a,b+"queue "+b+".run",!0
),C(a,b,"queue"))}}),J.fn.extend({queue:function(a,c){return typeof a!="string"&&
(c=a,a="fx"),c===b?J.queue(this[0],a):this.each(function(){var b=J.queue(this,a,c
);a==="fx"&&b[0]!=="inprogress"&&J.dequeue(this,a)})},dequeue:function(a){return this
.each(function(){J.dequeue(this,a)})},delay:function(a,b){return a=J.fx?J.fx.speeds
[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(
){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise
:function(a,c){function d(){--h||e.resolveWith(f,[f])}typeof a!="string"&&(c=a,a=
b),a=a||"fx";var e=J.Deferred(),f=this,g=f.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark"
,l;while(g--)if(l=J.data(f[g],i,b,!0)||(J.data(f[g],j,b,!0)||J.data(f[g],k,b,!0))&&
J.data(f[g],i,J.Callbacks("once memory"),!0))h++,l.add(d);return d(),e.promise()}
});var O=/[\n\t\r]/g,P=/\s+/,Q=/\r/g,R=/^(?:button|input)$/i,S=/^(?:button|input|object|select|textarea)$/i
,T=/^a(?:rea)?$/i,U=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i
,V=J.support.getSetAttribute,W,X,Y;J.fn.extend({attr:function(a,b){return J.access
(this,a,b,!0,J.attr)},removeAttr:function(a){return this.each(function(){J.removeAttr
(this,a)})},prop:function(a,b){return J.access(this,a,b,!0,J.prop)},removeProp:function(
a){return a=J.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(
c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(J.isFunction(a))return this.each
(function(b){J(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"
){b=a.split(P);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&
b.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)~
f.indexOf(" "+b[g]+" ")||(f+=b[g]+" ");e.className=J.trim(f)}}}return this},removeClass
:function(a){var c,d,e,f,g,h,i;if(J.isFunction(a))return this.each(function(b){J(
this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===
b){c=(a||"").split(P);for(d=0,e=this.length;d<e;d++){f=this[d];if(f.nodeType===1&&
f.className)if(a){g=(" "+f.className+" ").replace(O," ");for(h=0,i=c.length;h<i;h++
)g=g.replace(" "+c[h]+" "," ");f.className=J.trim(g)}else f.className=""}}return this
},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";return J.isFunction
(a)?this.each(function(c){J(this).toggleClass(a.call(this,c,this.className,b),b)}
):this.each(function(){if(c==="string"){var e,f=0,g=J(this),h=b,i=a.split(P);while(
e=i[f++])h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)}else if(c==="undefined"||
c==="boolean")this.className&&J._data(this,"__className__",this.className),this.className=
this.className||a===!1?"":J._data(this,"__className__")||""})},hasClass:function(
a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this
[c].className+" ").replace(O," ").indexOf(b)>-1)return!0;return!1},val:function(a
){var c,d,e,f=this[0];if(!arguments.length)return f?(c=J.valHooks[f.nodeName.toLowerCase
()]||J.valHooks[f.type],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,typeof 
d=="string"?d.replace(Q,""):d==null?"":d)):b;return e=J.isFunction(a),this.each(function(
d){var f=J(this),g;if(this.nodeType===1){e?g=a.call(this,d,f.val()):g=a,g==null?g=""
:typeof g=="number"?g+="":J.isArray(g)&&(g=J.map(g,function(a){return a==null?"":
a+""})),c=J.valHooks[this.nodeName.toLowerCase()]||J.valHooks[this.type];if(!c||!
("set"in c)||c.set(this,g,"value")===b)this.value=g}})}}),J.extend({valHooks:{option
:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}}
,select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i=a.type==="select-one"
;if(f<0)return null;c=i?f:0,d=i?f+1:h.length;for(;c<d;c++){e=h[c];if(e.selected&&
(J.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode
.disabled||!J.nodeName(e.parentNode,"optgroup"))){b=J(e).val();if(i)return b;g.push
(b)}}return i&&!g.length&&h.length?J(h[f]).val():g},set:function(a,b){var c=J.makeArray
(b);return J(a).find("option").each(function(){this.selected=J.inArray(J(this).val
(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{val:!0,css:!0,html:!0,text
:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var f,g,h,i=a.nodeType
;if(!a||i===3||i===8||i===2)return b;if(e&&c in J.attrFn)return J(a)[c](d);if("getAttribute"in 
a)return h=i!==1||!J.isXMLDoc(a),h&&(c=c.toLowerCase(),g=J.attrHooks[c]||(U.test(
c)?X:W)),d!==b?d===null?(J.removeAttr(a,c),b):g&&"set"in g&&h&&(f=g.set(a,d,c))!==
b?f:(a.setAttribute(c,""+d),d):g&&"get"in g&&h&&(f=g.get(a,c))!==null?f:(f=a.getAttribute
(c),f===null?b:f);return J.prop(a,c,d)},removeAttr:function(a,b){var c,d,e,f,g=0;
if(a.nodeType===1){d=(b||"").split(P),f=d.length;for(;g<f;g++)e=d[g].toLowerCase(
),c=J.propFix[e]||e,J.attr(a,e,""),a.removeAttribute(V?e:c),U.test(e)&&c in a&&(a
[c]=!1)}},attrHooks:{type:{set:function(a,b){if(R.test(a.nodeName)&&a.parentNode)
J.error("type property can't be changed");else if(!J.support.radioValue&&b==="radio"&&
J.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=
c),b}}},value:{get:function(a,b){return W&&J.nodeName(a,"button")?W.get(a,b):b in 
a?a.value:null},set:function(a,b,c){if(W&&J.nodeName(a,"button"))return W.set(a,b
,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor"
,"class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding"
,rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable
:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;return!a||h===3||
h===8||h===2?b:(g=h!==1||!J.isXMLDoc(a),g&&(c=J.propFix[c]||c,f=J.propHooks[c]),d!==
b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&(e=f.get(a,c))!==null?
e:a[c])},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex"
);return c&&c.specified?parseInt(c.value,10):S.test(a.nodeName)||T.test(a.nodeName
)&&a.href?0:b}}}}),J.attrHooks.tabindex=J.propHooks.tabIndex,X={get:function(a,c)
{var d,e=J.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c)
)&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?J.
removeAttr(a,c):(d=J.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase
())),c}},V||(Y={name:!0,id:!0},W=J.valHooks.button={get:function(a,c){var d;return d=
a.getAttributeNode(c),d&&(Y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(
a,b,c){var d=a.getAttributeNode(c);return d||(d=G.createAttribute(c),a.setAttributeNode
(d)),d.nodeValue=b+""}},J.attrHooks.tabindex.set=W.set,J.each(["width","height"],
function(a,b){J.attrHooks[b]=J.extend(J.attrHooks[b],{set:function(a,c){if(c===""
)return a.setAttribute(b,"auto"),c}})}),J.attrHooks.contenteditable={get:W.get,set
:function(a,b,c){b===""&&(b="false"),W.set(a,b,c)}}),J.support.hrefNormalized||J.
each(["href","src","width","height"],function(a,c){J.attrHooks[c]=J.extend(J.attrHooks
[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),J.support
.style||(J.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||
b},set:function(a,b){return a.style.cssText=""+b}}),J.support.optSelected||(J.propHooks
.selected=J.extend(J.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&
(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),J.support.enctype||
(J.propFix.enctype="encoding"),J.support.checkOn||J.each(["radio","checkbox"],function(
){J.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.
value}}}),J.each(["radio","checkbox"],function(){J.valHooks[this]=J.extend(J.valHooks
[this],{set:function(a,b){if(J.isArray(b))return a.checked=J.inArray(J(a).val(),b
)>=0}})});var Z=/\.(.*)$/,$=/^(?:textarea|input|select)$/i,_=/\./g,ba=/ /g,bb=/[^\w\s.|`]/g
,bc=/^([^\.]*)?(?:\.(.+))?$/,bd=/\bhover(\.\S+)?/,be=/^key/,bf=/^(?:mouse|contextmenu)|click/
,bg=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,bh=function(a){var b=bg.exec(a);return b&&
(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"
)),b},bi=function(a,b){return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||a.
id===b[2])&&(!b[3]||b[3].test(a.className))},bj=function(a){return J.event.special
.hover?a:a.replace(bd,"mouseenter$1 mouseleave$1")};J.event={add:function(a,c,d,e
,f){var g,h,i,j,k,l,m,n,o,p,q,r;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(g=
J._data(a)))){d.handler&&(o=d,d=o.handler),d.guid||(d.guid=J.guid++),i=g.events,i||
(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof J=="undefined"||!!
a&&J.event.triggered===a.type?b:J.event.dispatch.apply(h.elem,arguments)},h.elem=
a),c=bj(c).split(" ");for(j=0;j<c.length;j++){k=bc.exec(c[j])||[],l=k[1],m=(k[2]||""
).split(".").sort(),r=J.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=
J.event.special[l]||{},n=J.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid
,selector:f,namespace:m.join(".")},o),f&&(n.quick=bh(f),!n.quick&&J.expr.match.POS
.test(f)&&(n.isPositional=!0)),q=i[l];if(!q){q=i[l]=[],q.delegateCount=0;if(!r.setup||
r.setup.call(a,e,m,h)===!1)a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&
a.attachEvent("on"+l,h)}r.add&&(r.add.call(a,n),n.handler.guid||(n.handler.guid=d
.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),J.event.global[l]=!0}a=null}}
,global:{},remove:function(a,b,c,d){var e=J.hasData(a)&&J._data(a),f,g,h,i,j,k,l,
m,n,o,p;if(!!e&&!!(l=e.events)){b=bj(b||"").split(" ");for(f=0;f<b.length;f++){g=
bc.exec(b[f])||[],h=g[1],i=g[2];if(!h){i=i?"."+i:"";for(k in l)J.event.remove(a,k+
i,c,d);return}m=J.event.special[h]||{},h=(d?m.delegateType:m.bindType)||h,o=l[h]||
[],j=o.length,i=i?new RegExp("(^|\\.)"+i.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"
):null;if(c||i||d||m.remove)for(k=0;k<o.length;k++){p=o[k];if(!c||c.guid===p.guid
)if(!i||i.test(p.namespace))if(!d||d===p.selector||d==="**"&&p.selector)o.splice(
k--,1),p.selector&&o.delegateCount--,m.remove&&m.remove.call(a,p)}else o.length=0
;o.length===0&&j!==o.length&&((!m.teardown||m.teardown.call(a,i)===!1)&&J.removeEvent
(a,h,e.handle),delete l[h])}J.isEmptyObject(l)&&(n=e.handle,n&&(n.elem=null),J.removeData
(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger
:function(c,d,e,f){if(!e||e.nodeType!==3&&e.nodeType!==8){var g=c.type||c,h=[],i,
j,k,l,m,n,o,p,q,r;g.indexOf("!")>=0&&(g=g.slice(0,-1),j=!0),g.indexOf(".")>=0&&(h=
g.split("."),g=h.shift(),h.sort());if((!e||J.event.customEvent[g])&&!J.event.global
[g])return;c=typeof c=="object"?c[J.expando]?c:new J.Event(g,c):new J.Event(g),c.
type=g,c.isTrigger=!0,c.exclusive=j,c.namespace=h.join("."),c.namespace_re=c.namespace?new 
RegExp("(^|\\.)"+h.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,n=g.indexOf(":")<0?"on"+
g:"",(f||!e)&&c.preventDefault();if(!e){i=J.cache;for(k in i)i[k].events&&i[k].events
[g]&&J.event.trigger(c,d,i[k].handle.elem,!0);return}c.result=b,c.target||(c.target=
e),d=d!=null?J.makeArray(d):[],d.unshift(c),o=J.event.special[g]||{};if(o.trigger&&
o.trigger.apply(e,d)===!1)return;q=[[e,o.bindType||g]];if(!f&&!o.noBubble&&!J.isWindow
(e)){r=o.delegateType||g,m=null;for(l=e.parentNode;l;l=l.parentNode)q.push([l,r])
,m=l;m&&m===e.ownerDocument&&q.push([m.defaultView||m.parentWindow||a,r])}for(k=0
;k<q.length;k++){l=q[k][0],c.type=q[k][1],p=(J._data(l,"events")||{})[c.type]&&J.
_data(l,"handle"),p&&p.apply(l,d),p=n&&l[n],p&&J.acceptData(l)&&p.apply(l,d);if(c
.isPropagationStopped())break}return c.type=g,c.isDefaultPrevented()||(!o._default||
o._default.apply(e.ownerDocument,d)===!1)&&(g!=="click"||!J.nodeName(e,"a"))&&J.acceptData
(e)&&n&&e[g]&&(g!=="focus"&&g!=="blur"||c.target.offsetWidth!==0)&&!J.isWindow(e)&&
(m=e[n],m&&(e[n]=null),J.event.triggered=g,e[g](),J.event.triggered=b,m&&(e[n]=m)
),c.result}},dispatch:function(c){c=J.event.fix(c||a.event);var d=(J._data(this,"events"
)||{})[c.type]||[],e=d.delegateCount,f=[].slice.call(arguments,0),g=!c.exclusive&&!
c.namespace,h=(J.event.special[c.type]||{}).handle,i=[],j,k,l,m,n,o,p,q,r,s,t;f[0
]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click")
)for(l=c.target;l!=this;l=l.parentNode||this){n={},p=[];for(j=0;j<e;j++)q=d[j],r=
q.selector,s=n[r],q.isPositional?s=(s||(n[r]=J(r))).index(l)>=0:s===b&&(s=n[r]=q.
quick?bi(l,q.quick):J(l).is(r)),s&&p.push(q);p.length&&i.push({elem:l,matches:p})
}d.length>e&&i.push({elem:this,matches:d.slice(e)});for(j=0;j<i.length&&!c.isPropagationStopped
();j++){o=i[j],c.currentTarget=o.elem;for(k=0;k<o.matches.length&&!c.isImmediatePropagationStopped
();k++){q=o.matches[k];if(g||!c.namespace&&!q.namespace||c.namespace_re&&c.namespace_re
.test(q.namespace))c.data=q.data,c.handleObj=q,m=(h||q.handler).apply(o.elem,f),m!==
b&&(c.result=m,m===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result
},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which"
.split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter
:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode
),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement wheelDelta"
.split(" "),filter:function(a,c){var d,e,f,g=c.button,h=c.fromElement;return a.pageX==
null&&c.clientX!=null&&(d=a.target.ownerDocument||G,e=d.documentElement,f=d.body,
a.pageX=c.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0
),a.pageY=c.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0
)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?c.toElement:h),!a.which&&g!==
b&&(a.which=g&1?1:g&2?3:g&4?2:0),a}},fix:function(a){if(a[J.expando])return a;var c
,d,e=a,f=J.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props
;a=J.Event(e);for(c=g.length;c;)d=g[--c],a[d]=e[d];return a.target||(a.target=e.srcElement||
G),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=
a.ctrlKey),f.filter?f.filter(a,e):a},special:{ready:{setup:J.bindReady},focus:{delegateType
:"focusin",noBubble:!0},blur:{delegateType:"focusout",noBubble:!0},beforeunload:{
setup:function(a,b,c){J.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(
a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b
,c,d){var e=J.extend(new J.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?J.
event.trigger(e,null,b):J.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault
()}},J.event.handle=J.event.dispatch,J.removeEvent=G.removeEventListener?function(
a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&
a.detachEvent("on"+b,c)},J.Event=function(a,b){if(this instanceof J.Event)a&&a.type?
(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||
a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?A:B):this.type=a,b&&
J.extend(this,b),this.timeStamp=a&&a.timeStamp||J.now(),this[J.expando]=!0;else return new 
J.Event(a,b)},J.Event.prototype={preventDefault:function(){this.isDefaultPrevented=
A;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1
)},stopPropagation:function(){this.isPropagationStopped=A;var a=this.originalEvent
;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation
:function(){this.isImmediatePropagationStopped=A,this.stopPropagation()},isDefaultPrevented
:B,isPropagationStopped:B,isImmediatePropagationStopped:B},J.each({mouseenter:"mouseover"
,mouseleave:"mouseout"},function(a,b){J.event.special[a]=J.event.special[b]={delegateType
:b,bindType:b,handle:function(a){var b=this,c=a.relatedTarget,d=a.handleObj,e=d.selector
,f,g;if(!c||d.origType===a.type||c!==b&&!J.contains(b,c))f=a.type,a.type=d.origType
,g=d.handler.apply(this,arguments),a.type=f;return g}}}),J.support.submitBubbles||
(J.event.special.submit={setup:function(){if(J.nodeName(this,"form"))return!1;J.event
.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=J.nodeName
(c,"input")||J.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(J.event.add
(d,"submit._submit",function(a){this.parentNode&&J.event.simulate("submit",this.parentNode
,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(J.nodeName(this,"form")
)return!1;J.event.remove(this,"._submit")}}),J.support.changeBubbles||(J.event.special
.change={setup:function(){if($.test(this.nodeName)){if(this.type==="checkbox"||this
.type==="radio")J.event.add(this,"propertychange._change",function(a){a.originalEvent
.propertyName==="checked"&&(this._just_changed=!0)}),J.event.add(this,"click._change"
,function(a){this._just_changed&&(this._just_changed=!1,J.event.simulate("change"
,this,a,!0))});return!1}J.event.add(this,"beforeactivate._change",function(a){var b=
a.target;$.test(b.nodeName)&&!b._change_attached&&(J.event.add(b,"change._change"
,function(a){this.parentNode&&!a.isSimulated&&J.event.simulate("change",this.parentNode
,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||
a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj
.handler.apply(this,arguments)},teardown:function(){return J.event.remove(this,"._change"
),$.test(this.nodeName)}}),J.support.focusinBubbles||J.each({focus:"focusin",blur
:"focusout"},function(a,b){var c=0,d=function(a){J.event.simulate(b,a.target,J.event
.fix(a),!0)};J.event.special[b]={setup:function(){c++===0&&G.addEventListener(a,d
,!0)},teardown:function(){--c===0&&G.removeEventListener(a,d,!0)}}}),J.fn.extend(
{on:function(a,c,d,e,f){var g,h;if(typeof a=="object"){typeof c!="string"&&(d=c,c=
b);for(h in a)this.on(h,c,d,a[h],f);return this}d==null&&e==null?(e=c,d=c=b):e==null&&
(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=B;else if(!e)return this
;return f===1&&(g=e,e=function(a){return J().off(a),g.apply(this,arguments)},e.guid=
g.guid||(g.guid=J.guid++)),this.each(function(){J.event.add(this,a,e,d,c)})},one:
function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&
a.preventDefault&&a.handleObj){var e=a.handleObj;return J(a.delegateTarget).off(e
.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler),this}if(typeof a=="object"
){for(var f in a)this.off(f,c,a[f]);return this}if(c===!1||typeof c=="function")d=
c,c=b;return d===!1&&(d=B),this.each(function(){J.event.remove(this,a,d,c)})},bind
:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off
(a,null,b)},live:function(a,b,c){return J(this.context).on(a,this.selector,b,c),this
},die:function(a,b){return J(this.context).off(a,this.selector||"**",b),this},delegate
:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments
.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each
(function(){J.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])
return J.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||
J.guid++,d=0,e=function(c){var e=(J._data(this,"lastToggle"+a.guid)||0)%d;return J
._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments
)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(
a,b){return this.mouseenter(a).mouseleave(b||a)}}),J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu"
.split(" "),function(a,b){J.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments
.length>0?this.bind(b,a,c):this.trigger(b)},J.attrFn&&(J.attrFn[b]=!0),be.test(b)&&
(J.event.fixHooks[b]=J.event.keyHooks),bf.test(b)&&(J.event.fixHooks[b]=J.event.mouseHooks
)}),function(){function a(a,b,c,d,f,g){for(var h=0,i=d.length;h<i;h++){var j=d[h]
;if(j){var k=!1;j=j[a];while(j){if(j[e]===c){k=d[j.sizset];break}if(j.nodeType===1
){g||(j[e]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter
(b,[j]).length>0){k=j;break}}j=j[a]}d[h]=k}}}function c(a,b,c,d,f,g){for(var h=0,
i=d.length;h<i;h++){var j=d[h];if(j){var k=!1;j=j[a];while(j){if(j[e]===c){k=d[j.
sizset];break}j.nodeType===1&&!g&&(j[e]=c,j.sizset=h);if(j.nodeName.toLowerCase()===
b){k=j;break}j=j[a]}d[h]=k}}}var d=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g
,e="sizcache"+(Math.random()+"").replace(".",""),f=0,g=Object.prototype.toString,
h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){return i=!1,0});var m=function(
a,b,c,e){c=c||[],b=b||G;var f=b;if(b.nodeType!==1&&b.nodeType!==9)return[];if(!a||typeof 
a!="string")return c;var h,i,j,k,l,n,q,r,t=!0,u=m.isXML(b),v=[],x=a;do{d.exec("")
,h=d.exec(x);if(h){x=h[3],v.push(h[1]);if(h[2]){k=h[3];break}}}while(h);if(v.length>1&&
p.exec(a))if(v.length===2&&o.relative[v[0]])i=w(v[0]+v[1],b,e);else{i=o.relative[
v[0]]?[b]:m(v.shift(),b);while(v.length)a=v.shift(),o.relative[a]&&(a+=v.shift())
,i=w(a,i,e)}else{!e&&v.length>1&&b.nodeType===9&&!u&&o.match.ID.test(v[0])&&!o.match
.ID.test(v[v.length-1])&&(l=m.find(v.shift(),b,u),b=l.expr?m.filter(l.expr,l.set)
[0]:l.set[0]);if(b){l=e?{expr:v.pop(),set:s(e)}:m.find(v.pop(),v.length!==1||v[0]!=="~"&&
v[0]!=="+"||!b.parentNode?b:b.parentNode,u),i=l.expr?m.filter(l.expr,l.set):l.set
,v.length>0?j=s(i):t=!1;while(v.length)n=v.pop(),q=n,o.relative[n]?q=v.pop():n=""
,q==null&&(q=b),o.relative[n](j,q,u)}else j=v=[]}j||(j=i),j||m.error(n||a);if(g.call
(j)==="[object Array]")if(!t)c.push.apply(c,j);else if(b&&b.nodeType===1)for(r=0;
j[r]!=null;r++)j[r]&&(j[r]===!0||j[r].nodeType===1&&m.contains(b,j[r]))&&c.push(i
[r]);else for(r=0;j[r]!=null;r++)j[r]&&j[r].nodeType===1&&c.push(i[r]);else s(j,c
);return k&&(m(k,f,c,e),m.uniqueSort(c)),c};m.uniqueSort=function(a){if(u){h=i,a.
sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},
m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){
return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)
return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(
a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(
j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}return d||
(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]),{set
:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0
]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a
))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\"
)continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=
i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^
i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o
.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a
}return s},m.error=function(a){throw"Syntax error, unrecognized expression: "+a};
var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1){if(typeof a
.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a
.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||
d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e
},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/
,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/
,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/
,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/
,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(
a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}
},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&
(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling
)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter
(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test
(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName
.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===
b);d&&m.filter(b,a,!0)}},"":function(b,d,e){var g,h=f++,i=a;typeof d=="string"&&!
l.test(d)&&(d=d.toLowerCase(),g=d,i=c),i("parentNode",d,h,b,g,e)},"~":function(b,
d,e){var g,h=f++,i=a;typeof d=="string"&&!l.test(d)&&(d=d.toLowerCase(),g=d,i=c),
i("previousSibling",d,h,b,g,e)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!
c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b
){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]
);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c
.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined"
)return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+
a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&
(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[
g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a
[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error
(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a
[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2
]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);return a[0]=f++,a},ATTR:function(
a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");return!f&&o.attrMap[g]&&(a[1]=o.attrMap
[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" "),a},PSEUDO
:function(a,b,c,e,f){if(a[1]==="not")if((d.exec(a[3])||"").length>1||/^\w/.test(a
[3]))a[3]=m(a[3],null,null,b);else{var g=m.filter(a[3],b,c,!0^f);return c||e.push
.apply(e,g),!1}else if(o.match.POS.test(a[0])||o.match.CHILD.test(a[0]))return!0;
return a},POS:function(a){return a.unshift(!0),a}},filters:{enabled:function(a){return a
.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked
:function(a){return a.checked===!0},selected:function(a){return a.parentNode&&a.parentNode
.selectedIndex,a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(
a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(
a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=
a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},
radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox
:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file
:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password
:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit
:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===
a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.
type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button"
)&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===
a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test
(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters
:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1}
,even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(
a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c
[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d
){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||
a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=
g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c
,d,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling
)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling
)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],d=b[3];if(c===1&&d===0)return!0
;f=b[0],g=a.parentNode;if(g&&(g[e]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=
l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[e]=f}return j=a.nodeIndex-d,c===0?
j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id"
)===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName
.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"
))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle
[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==
null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?
(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr
(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1
},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=
o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new 
RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp
(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(
a,b){return a=Array.prototype.slice.call(a,0),b?(b.push.apply(b,a),b):a};try{Array
.prototype.slice.call(G.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(
a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d
,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(
;a[c];c++)d.push(a[c]);return d}}var u,v;G.documentElement.compareDocumentPosition?
u=function(a,b){return a===b?(h=!0,0):!a.compareDocumentPosition||!b.compareDocumentPosition?
a.compareDocumentPosition?-1:1:a.compareDocumentPosition(b)&4?-1:1}:(u=function(a
,b){if(a===b)return h=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b
.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v
(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(
j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e
[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(
a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling
}return 1}),function(){var a=G.createElement("div"),c="script"+(new Date).getTime
(),d=G.documentElement;a.innerHTML="<a name='"+c+"'/>",d.insertBefore(a,d.firstChild
),G.getElementById(c)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!
d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&
e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof 
a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&
c&&c.nodeValue===b}),d.removeChild(a),d=a=null}(),function(){var a=G.createElement
("div");a.appendChild(G.createComment("")),a.getElementsByTagName("*").length>0&&
(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=
[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>"
,a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute
("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),
a=null}(),G.querySelectorAll&&function(){var a=m,b=G.createElement("div"),c="__sizzle__"
;b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST"
).length!==0){m=function(b,d,e,f){d=d||G;if(!f&&!m.isXML(d)){var g=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/
.exec(b);if(g&&(d.nodeType===1||d.nodeType===9)){if(g[1])return s(d.getElementsByTagName
(b),e);if(g[2]&&o.find.CLASS&&d.getElementsByClassName)return s(d.getElementsByClassName
(g[2]),e)}if(d.nodeType===9){if(b==="body"&&d.body)return s([d.body],e);if(g&&g[3
]){var h=d.getElementById(g[3]);if(!h||!h.parentNode)return s([],e);if(h.id===g[3
])return s([h],e)}try{return s(d.querySelectorAll(b),e)}catch(i){}}else if(d.nodeType===1&&
d.nodeName.toLowerCase()!=="object"){var j=d,k=d.getAttribute("id"),l=k||c,n=d.parentNode
,p=/^\s*[+~]/.test(b);k?l=l.replace(/'/g,"\\$&"):d.setAttribute("id",l),p&&n&&(d=
d.parentNode);try{if(!p||n)return s(d.querySelectorAll("[id='"+l+"'] "+b),e)}catch(
q){}finally{k||j.removeAttribute("id")}}}return a(b,d,e,f)};for(var d in a)m[d]=a
[d];b=null}}(),function(){var a=G.documentElement,b=a.matchesSelector||a.mozMatchesSelector||
a.webkitMatchesSelector||a.msMatchesSelector;if(b){var c=!b.call(G.createElement("div"
),"div"),d=!1;try{b.call(G.documentElement,"[test!='']:sizzle")}catch(e){d=!0}m.matchesSelector=
function(a,e){e=e.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(
d||!o.match.PSEUDO.test(e)&&!/!=/.test(e)){var f=b.call(a,e);if(f||!c||a.document&&
a.document.nodeType!==11)return f}}catch(g){}return m(e,null,null,[a]).length>0}}
}(),function(){var a=G.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>"
;if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild
.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1
,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!
c)return b.getElementsByClassName(a[1])},a=null}}(),G.documentElement.contains?m.
contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:G.documentElement
.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition
(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||
a:0).documentElement;return b?b.nodeName!=="HTML":!1};var w=function(a,b,c){var d
,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(
o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h
],e,c);return m.filter(f,e)};m.attr=J.attr,m.selectors.attrMap={},J.find=m,J.expr=
m.selectors,J.expr[":"]=J.expr.filters,J.unique=m.uniqueSort,J.text=m.getText,J.isXMLDoc=
m.isXML,J.contains=m.contains}();var bk=/Until$/,bl=/^(?:parents|prevUntil|prevAll)/
,bm=/,/,bn=/^.[^:#\[\.,]*$/,bo=Array.prototype.slice,bp=J.expr.match.POS,bq={children
:!0,contents:!0,next:!0,prev:!0};J.fn.extend({find:function(a){var b=this,c,d;if(typeof 
a!="string")return J(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(J.contains
(b[c],this))return!0});var e=this.pushStack("","find",a),f,g,h;for(c=0,d=this.length
;c<d;c++){f=e.length,J.find(a,this[c],e);if(c>0)for(g=f;g<e.length;g++)for(h=0;h<
f;h++)if(e[h]===e[g]){e.splice(g--,1);break}}return e},has:function(a){var b=J(a)
;return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(J.contains(this,
b[a]))return!0})},not:function(a){return this.pushStack(y(this,a,!1),"not",a)},filter
:function(a){return this.pushStack(y(this,a,!0),"filter",a)},is:function(a){return!!
a&&(typeof a=="string"?bp.test(a)?J(a,this.context).index(this[0])>=0:J.filter(a,
this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,f=this
[0];if(J.isArray(a)){var g=1;while(f&&f.ownerDocument&&f!==b){for(d=0;d<a.length;
d++)J(f).is(a[d])&&c.push({selector:a[d],elem:f,level:g});f=f.parentNode,g++}return c
}var h=bp.test(a)||typeof a!="string"?J(a,b||this.context):0;for(d=0,e=this.length
;d<e;d++){f=this[d];while(f){if(h?h.index(f)>-1:J.find.matchesSelector(f,a)){c.push
(f);break}f=f.parentNode;if(!f||!f.ownerDocument||f===b||f.nodeType===11)break}}return c=
c.length>1?J.unique(c):c,this.pushStack(c,"closest",a)},index:function(a){return a?typeof 
a=="string"?J.inArray(this[0],J(a)):J.inArray(a.jquery?a[0]:a,this):this[0]&&this
[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a=="string"?
J(a,b):J.makeArray(a&&a.nodeType?[a]:a),d=J.merge(this.get(),c);return this.pushStack
(z(c[0])||z(d[0])?d:J.unique(d))},andSelf:function(){return this.add(this.prevObject
)}}),J.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null
},parents:function(a){return J.dir(a,"parentNode")},parentsUntil:function(a,b,c){
return J.dir(a,"parentNode",c)},next:function(a){return J.nth(a,2,"nextSibling")}
,prev:function(a){return J.nth(a,2,"previousSibling")},nextAll:function(a){return J
.dir(a,"nextSibling")},prevAll:function(a){return J.dir(a,"previousSibling")},nextUntil
:function(a,b,c){return J.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return J
.dir(a,"previousSibling",c)},siblings:function(a){return J.sibling(a.parentNode.firstChild
,a)},children:function(a){return J.sibling(a.firstChild)},contents:function(a){return J
.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:J.makeArray(a.childNodes
)}},function(a,b){J.fn[a]=function(c,d){var e=J.map(this,b,c),f=bo.call(arguments
);return bk.test(a)||(d=c),d&&typeof d=="string"&&(e=J.filter(d,e)),e=this.length>1&&!
bq[a]?J.unique(e):e,(this.length>1||bm.test(d))&&bl.test(a)&&(e=e.reverse()),this
.pushStack(e,a,f.join(","))}}),J.extend({filter:function(a,b,c){return c&&(a=":not("+
a+")"),b.length===1?J.find.matchesSelector(b[0],a)?[b[0]]:[]:J.find.matches(a,b)}
,dir:function(a,c,d){var e=[],f=a[c];while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!
J(f).is(d)))f.nodeType===1&&e.push(f),f=f[c];return e},nth:function(a,b,c,d){b=b||1
;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(
a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}})
;var br="abbr article aside audio canvas datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video"
,bs=/ jQuery\d+="(?:\d+|null)"/g,bt=/^\s+/,bu=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig
,bv=/<([\w:]+)/,bw=/<tbody/i,bx=/<|&#?\w+;/,by=/<(?:script|style)/i,bz=/<(?:script|object|embed|option|style)/i
,bA=new RegExp("<(?:"+br.replace(" ","|")+")","i"),bB=/checked\s*(?:[^=]|=\s*.checked.)/i
,bC=/\/(java|ecma)script/i,bD=/^\s*<!(?:\[CDATA\[|\-\-)/,bE={option:[1,"<select multiple='multiple'>"
,"</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"
],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"
],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>"
,"</map>"],_default:[0,"",""]},bF=x(G);bE.optgroup=bE.option,bE.tbody=bE.tfoot=bE
.colgroup=bE.caption=bE.thead,bE.th=bE.td,J.support.htmlSerialize||(bE._default=[1
,"div<div>","</div>"]),J.fn.extend({text:function(a){return J.isFunction(a)?this.
each(function(b){var c=J(this);c.text(a.call(this,b,c.text()))}):typeof a!="object"&&
a!==b?this.empty().append((this[0]&&this[0].ownerDocument||G).createTextNode(a)):
J.text(this)},wrapAll:function(a){if(J.isFunction(a))return this.each(function(b)
{J(this).wrapAll(a.call(this,b))});if(this[0]){var b=J(a,this[0].ownerDocument).eq
(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=
this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append
(this)}return this},wrapInner:function(a){return J.isFunction(a)?this.each(function(
b){J(this).wrapInner(a.call(this,b))}):this.each(function(){var b=J(this),c=b.contents
();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(
){J(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){J.
nodeName(this,"body")||J(this).replaceWith(this.childNodes)}).end()},append:function(
){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild
(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&
this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode
)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this
)});if(arguments.length){var a=J(arguments[0]);return a.push.apply(a,this.toArray
()),this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode
)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this
.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments)
;return a.push.apply(a,J(arguments[0]).toArray()),a}},remove:function(a,b){for(var c=0
,d;(d=this[c])!=null;c++)if(!a||J.filter(a,[d]).length)!b&&d.nodeType===1&&(J.cleanData
(d.getElementsByTagName("*")),J.cleanData([d])),d.parentNode&&d.parentNode.removeChild
(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&
J.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild
)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(
){return J.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?
this[0].innerHTML.replace(bs,""):null;if(typeof a=="string"&&!by.test(a)&&(J.support
.leadingWhitespace||!bt.test(a))&&!bE[(bv.exec(a)||["",""])[1].toLowerCase()]){a=
a.replace(bu,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&
(J.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this
.empty().append(a)}}else J.isFunction(a)?this.each(function(b){var c=J(this);c.html
(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(
a){return this[0]&&this[0].parentNode?J.isFunction(a)?this.each(function(b){var c=
J(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=J(a)
.detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;J(this).
remove(),b?J(b).before(a):J(c).append(a)})):this.length?this.pushStack(J(J.isFunction
(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip
:function(a,c,d){var e,f,g,h,i=a[0],j=[];if(!J.support.checkClone&&arguments.length===3&&typeof 
i=="string"&&bB.test(i))return this.each(function(){J(this).domManip(a,c,d,!0)});
if(J.isFunction(i))return this.each(function(e){var f=J(this);a[0]=i.call(this,e,
c?f.html():b),f.domManip(a,c,d)});if(this[0]){h=i&&i.parentNode,J.support.parentNode&&
h&&h.nodeType===11&&h.childNodes.length===this.length?e={fragment:h}:e=J.buildFragment
(a,this,j),g=e.fragment,g.childNodes.length===1?f=g=g.firstChild:f=g.firstChild;if(
f){c=c&&J.nodeName(f,"tr");for(var k=0,l=this.length,m=l-1;k<l;k++)d.call(c?w(this
[k],f):this[k],e.cacheable||l>1&&k<m?J.clone(g,!0,!0):g)}j.length&&J.each(j,q)}return this
}}),J.buildFragment=function(a,b,c){var d,e,f,g,h=a[0];return b&&b[0]&&(g=b[0].ownerDocument||
b[0]),g.createDocumentFragment||(g=G),a.length===1&&typeof h=="string"&&h.length<512&&
g===G&&h.charAt(0)==="<"&&!bz.test(h)&&(J.support.checkClone||!bB.test(h))&&!J.support
.unknownElems&&bA.test(h)&&(e=!0,f=J.fragments[h],f&&f!==1&&(d=f)),d||(d=g.createDocumentFragment
(),J.clean(a,g,d,c)),e&&(J.fragments[h]=f?d:1),{fragment:d,cacheable:e}},J.fragments=
{},J.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter
:"after",replaceAll:"replaceWith"},function(a,b){J.fn[a]=function(c){var d=[],e=J
(c),f=this.length===1&&this[0].parentNode;if(f&&f.nodeType===11&&f.childNodes.length===1&&
e.length===1)return e[b](this[0]),this;for(var g=0,h=e.length;g<h;g++){var i=(g>0?
this.clone(!0):this).get();J(e[g])[b](i),d=d.concat(i)}return this.pushStack(d,a,
e.selector)}}),J.extend({clone:function(a,b,c){var d=a.cloneNode(!0),e,f,g;if((!J
.support.noCloneEvent||!J.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11
)&&!J.isXMLDoc(a)){u(a,d),e=t(a),f=t(d);for(g=0;e[g];++g)f[g]&&u(e[g],f[g])}if(b)
{v(a,d);if(c){e=t(a),f=t(d);for(g=0;e[g];++g)v(e[g],f[g])}}return e=f=null,d},clean
:function(a,b,c,d){var e;b=b||G,typeof b.createElement=="undefined"&&(b=b.ownerDocument||
b[0]&&b[0].ownerDocument||G);var f=[],g;for(var h=0,i;(i=a[h])!=null;h++){typeof 
i=="number"&&(i+="");if(!i)continue;if(typeof i=="string")if(!bx.test(i))i=b.createTextNode
(i);else{i=i.replace(bu,"<$1></$2>");var j=(bv.exec(i)||["",""])[1].toLowerCase()
,k=bE[j]||bE._default,l=k[0],m=b.createElement("div");b===G?bF.appendChild(m):x(b
).appendChild(m),m.innerHTML=k[1]+i+k[2];while(l--)m=m.lastChild;if(!J.support.tbody
){var n=bw.test(i),o=j==="table"&&!n?m.firstChild&&m.firstChild.childNodes:k[1]==="<table>"&&!
n?m.childNodes:[];for(g=o.length-1;g>=0;--g)J.nodeName(o[g],"tbody")&&!o[g].childNodes
.length&&o[g].parentNode.removeChild(o[g])}!J.support.leadingWhitespace&&bt.test(
i)&&m.insertBefore(b.createTextNode(bt.exec(i)[0]),m.firstChild),i=m.childNodes}var p
;if(!J.support.appendChecked)if(i[0]&&typeof (p=i.length)=="number")for(g=0;g<p;g++
)r(i[g]);else r(i);i.nodeType?f.push(i):f=J.merge(f,i)}if(c){e=function(a){return!
a.type||bC.test(a.type)};for(h=0;f[h];h++)if(d&&J.nodeName(f[h],"script")&&(!f[h]
.type||f[h].type.toLowerCase()==="text/javascript"))d.push(f[h].parentNode?f[h].parentNode
.removeChild(f[h]):f[h]);else{if(f[h].nodeType===1){var q=J.grep(f[h].getElementsByTagName
("script"),e);f.splice.apply(f,[h+1,0].concat(q))}c.appendChild(f[h])}}return f},
cleanData:function(a){var b,c,d=J.cache,e=J.event.special,f=J.support.deleteExpando
;for(var g=0,h;(h=a[g])!=null;g++){if(h.nodeName&&J.noData[h.nodeName.toLowerCase
()])continue;c=h[J.expando];if(c){b=d[c];if(b&&b.events){for(var i in b.events)e[
i]?J.event.remove(h,i):J.removeEvent(h,i,b.handle);b.handle&&(b.handle.elem=null)
}f?delete h[J.expando]:h.removeAttribute&&h.removeAttribute(J.expando),delete d[c
]}}}});var bG=/alpha\([^)]*\)/i,bH=/opacity=([^)]*)/,bI=/([A-Z]|^ms)/g,bJ=/^-?\d+(?:px)?$/i
,bK=/^-?\d/,bL=/^([\-+])=([\-+.\de]+)/,bM={position:"absolute",visibility:"hidden"
,display:"block"},bN=["Left","Right"],bO=["Top","Bottom"],bP,bQ,bR;J.fn.css=function(
a,c){return arguments.length===2&&c===b?this:J.access(this,a,c,!0,function(a,c,d)
{return d!==b?J.style(a,c,d):J.css(a,c)})},J.extend({cssHooks:{opacity:{get:function(
a,b){if(b){var c=bP(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity
}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows
:!0,zIndex:!0,zoom:!0},cssProps:{"float":J.support.cssFloat?"cssFloat":"styleFloat"
},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var f
,g,h=J.camelCase(c),i=a.style,j=J.cssHooks[h];c=J.cssProps[h]||h;if(d===b)return j&&"get"in 
j&&(f=j.get(a,!1,e))!==b?f:i[c];g=typeof d,g==="string"&&(f=bL.exec(d))&&(d=+(f[1
]+1)*+f[2]+parseFloat(J.css(a,c)),g="number");if(d==null||g==="number"&&isNaN(d))
return;g==="number"&&!J.cssNumber[h]&&(d+="px");if(!j||!("set"in j)||(d=j.set(a,d
))!==b)try{i[c]=d}catch(k){}}},css:function(a,c,d){var e,f;c=J.camelCase(c),f=J.cssHooks
[c],c=J.cssProps[c]||c,c==="cssFloat"&&(c="float");if(f&&"get"in f&&(e=f.get(a,!0
,d))!==b)return e;if(bP)return bP(a,c)},swap:function(a,b,c){var d={};for(var e in 
b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),J.curCSS=
J.css,J.each(["height","width"],function(a,b){J.cssHooks[b]={get:function(a,c,d){
var e;if(c)return a.offsetWidth!==0?p(a,b,d):(J.swap(a,bM,function(){e=p(a,b,d)})
,e)},set:function(a,b){if(!bJ.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"
}}}),J.support.opacity||(J.cssHooks.opacity={get:function(a,b){return bH.test((b&&
a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+""
:b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=J.isNumeric(b)?"alpha(opacity="+
b*100+")":"",f=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&J.trim(f.replace(bG,""
))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bG.test(f)?f
.replace(bG,e):f+" "+e}}),J(function(){J.support.reliableMarginRight||(J.cssHooks
.marginRight={get:function(a,b){var c;return J.swap(a,{display:"inline-block"},function(
){b?c=bP(a,"margin-right","marginRight"):c=a.style.marginRight}),c}})}),G.defaultView&&
G.defaultView.getComputedStyle&&(bQ=function(a,c){var d,e,f;c=c.replace(bI,"-$1")
.toLowerCase();if(!(e=a.ownerDocument.defaultView))return b;if(f=e.getComputedStyle
(a,null))d=f.getPropertyValue(c),d===""&&!J.contains(a.ownerDocument.documentElement
,a)&&(d=J.style(a,c));return d}),G.documentElement.currentStyle&&(bR=function(a,b
){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;return f===null&&g&&(e=
g[b])&&(f=e),!bJ.test(f)&&bK.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.
left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0
,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d)),f===""?"auto":f}),bP=bQ||
bR,J.expr&&J.expr.filters&&(J.expr.filters.hidden=function(a){var b=a.offsetWidth
,c=a.offsetHeight;return b===0&&c===0||!J.support.reliableHiddenOffsets&&(a.style&&
a.style.display||J.css(a,"display"))==="none"},J.expr.filters.visible=function(a)
{return!J.expr.filters.hidden(a)});var bS=/%20/g,bT=/\[\]$/,bU=/\r?\n/g,bV=/#.*$/
,bW=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bX=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i
,bY=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bZ=/^(?:GET|HEAD)$/
,b$=/^\/\//,b_=/\?/,ca=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,cb=/^(?:select|textarea)/i
,cc=/\s+/,cd=/([?&])_=[^&]*/,ce=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
cf=J.fn.load,cg={},ch={},ci,cj,ck=["*/"]+["*"];try{ci=I.href}catch(cl){ci=G.createElement
("a"),ci.href="",ci=ci.href}cj=ce.exec(ci.toLowerCase())||[],J.fn.extend({load:function(
a,c,d){if(typeof a!="string"&&cf)return cf.apply(this,arguments);if(!this.length)
return this;var e=a.indexOf(" ");if(e>=0){var f=a.slice(e,a.length);a=a.slice(0,e
)}var g="GET";c&&(J.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=J.param(c,J.ajaxSettings
.traditional),g="POST"));var h=this;return J.ajax({url:a,type:g,dataType:"html",data
:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){
c=a}),h.html(f?J("<div>").append(c.replace(ca,"")).find(f):c)),d&&h.each(d,[c,b,a
])}}),this},serialize:function(){return J.param(this.serializeArray())},serializeArray
:function(){return this.map(function(){return this.elements?J.makeArray(this.elements
):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||cb.test
(this.nodeName)||bX.test(this.type))}).map(function(a,b){var c=J(this).val();return c==
null?null:J.isArray(c)?J.map(c,function(a,c){return{name:b.name,value:a.replace(bU
,"\r\n")}}):{name:b.name,value:c.replace(bU,"\r\n")}}).get()}}),J.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend"
.split(" "),function(a,b){J.fn[b]=function(a){return this.bind(b,a)}}),J.each(["get"
,"post"],function(a,c){J[c]=function(a,d,e,f){return J.isFunction(d)&&(f=f||e,e=d
,d=b),J.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),J.extend({getScript:function(
a,c){return J.get(a,b,c,"script")},getJSON:function(a,b,c){return J.get(a,b,c,"json"
)},ajaxSetup:function(a,b){return b?m(a,J.ajaxSettings):(b=a,a=J.ajaxSettings),m(
a,b),a},ajaxSettings:{url:ci,isLocal:bY.test(cj[1]),global:!0,type:"GET",contentType
:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml"
,html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":
ck},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML"
,text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":J.
parseJSON,"text xml":J.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:o
(cg),ajaxTransport:o(ch),ajax:function(a,c){function d(a,c,d,n){if(v!==2){v=2,t&&
clearTimeout(t),s=b,q=n||"",y.readyState=a>0?4:0;var o,p,r,u=c,x=d?k(e,y,d):b,z,A
;if(a>=200&&a<300||a===304){if(e.ifModified){if(z=y.getResponseHeader("Last-Modified"
))J.lastModified[m]=z;if(A=y.getResponseHeader("Etag"))J.etag[m]=A}if(a===304)u="notmodified"
,o=!0;else try{p=j(e,x),u="success",o=!0}catch(B){u="parsererror",r=B}}else{r=u;if(!
u||a)u="error",a<0&&(a=0)}y.status=a,y.statusText=""+(c||u),o?h.resolveWith(f,[p,
u,y]):h.rejectWith(f,[y,u,r]),y.statusCode(l),l=b,w&&g.trigger("ajax"+(o?"Success"
:"Error"),[y,e,o?p:r]),i.fireWith(f,[y,u]),w&&(g.trigger("ajaxComplete",[y,e]),--
J.active||J.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var e=
J.ajaxSetup({},c),f=e.context||e,g=f!==e&&(f.nodeType||f instanceof J)?J(f):J.event
,h=J.Deferred(),i=J.Callbacks("once memory"),l=e.statusCode||{},m,o={},p={},q,r,s
,t,u,v=0,w,x,y={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase
();a=p[c]=p[c]||a,o[a]=b}return this},getAllResponseHeaders:function(){return v===2?
q:null},getResponseHeader:function(a){var c;if(v===2){if(!r){r={};while(c=bW.exec
(q))r[c[1].toLowerCase()]=c[2]}c=r[a.toLowerCase()]}return c===b?null:c},overrideMimeType
:function(a){return v||(e.mimeType=a),this},abort:function(a){return a=a||"abort"
,s&&s.abort(a),d(0,a),this}};h.promise(y),y.success=y.done,y.error=y.fail,y.complete=
i.add,y.statusCode=function(a){if(a){var b;if(v<2)for(b in a)l[b]=[l[b],a[b]];else b=
a[y.status],y.then(b,b)}return this},e.url=((a||e.url)+"").replace(bV,"").replace
(b$,cj[1]+"//"),e.dataTypes=J.trim(e.dataType||"*").toLowerCase().split(cc),e.crossDomain==
null&&(u=ce.exec(e.url.toLowerCase()),e.crossDomain=!(!u||u[1]==cj[1]&&u[2]==cj[2
]&&(u[3]||(u[1]==="http:"?80:443))==(cj[3]||(cj[1]==="http:"?80:443)))),e.data&&e
.processData&&typeof e.data!="string"&&(e.data=J.param(e.data,e.traditional)),n(cg
,e,c,y);if(v===2)return!1;w=e.global,e.type=e.type.toUpperCase(),e.hasContent=!bZ
.test(e.type),w&&J.active++===0&&J.event.trigger("ajaxStart");if(!e.hasContent){e
.data&&(e.url+=(b_.test(e.url)?"&":"?")+e.data,delete e.data),m=e.url;if(e.cache===!1
){var z=J.now(),A=e.url.replace(cd,"$1_="+z);e.url=A+(A===e.url?(b_.test(e.url)?"&"
:"?")+"_="+z:"")}}(e.data&&e.hasContent&&e.contentType!==!1||c.contentType)&&y.setRequestHeader
("Content-Type",e.contentType),e.ifModified&&(m=m||e.url,J.lastModified[m]&&y.setRequestHeader
("If-Modified-Since",J.lastModified[m]),J.etag[m]&&y.setRequestHeader("If-None-Match"
,J.etag[m])),y.setRequestHeader("Accept",e.dataTypes[0]&&e.accepts[e.dataTypes[0]
]?e.accepts[e.dataTypes[0]]+(e.dataTypes[0]!=="*"?", "+ck+"; q=0.01":""):e.accepts
["*"]);for(x in e.headers)y.setRequestHeader(x,e.headers[x]);if(!e.beforeSend||e.
beforeSend.call(f,y,e)!==!1&&v!==2){for(x in{success:1,error:1,complete:1})y[x](e
[x]);s=n(ch,e,c,y);if(!s)d(-1,"No Transport");else{y.readyState=1,w&&g.trigger("ajaxSend"
,[y,e]),e.async&&e.timeout>0&&(t=setTimeout(function(){y.abort("timeout")},e.timeout
));try{v=1,s.send(o,d)}catch(B){v<2?d(-1,B):J.error(B)}}return y}return y.abort()
,!1},param:function(a,c){var d=[],e=function(a,b){b=J.isFunction(b)?b():b,d[d.length
]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=J.ajaxSettings.traditional
);if(J.isArray(a)||a.jquery&&!J.isPlainObject(a))J.each(a,function(){e(this.name,
this.value)});else for(var f in a)l(f,a[f],c,e);return d.join("&").replace(bS,"+"
)}}),J.extend({active:0,lastModified:{},etag:{}});var cm=J.now(),cn=/(\=)\?(&|$)|\?\?/i
;J.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return J.expando+"_"+cm++
}}),J.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof 
b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cn.test(b.url)||e&&cn
.test(b.data))){var f,g=b.jsonpCallback=J.isFunction(b.jsonpCallback)?b.jsonpCallback
():b.jsonpCallback,h=a[g],i=b.url,j=b.data,k="$1"+g+"$2";return b.jsonp!==!1&&(i=
i.replace(cn,k),b.url===i&&(e&&(j=j.replace(cn,k)),b.data===j&&(i+=(/\?/.test(i)?"&"
:"?")+b.jsonp+"="+g))),b.url=i,b.data=j,a[g]=function(a){f=[a]},d.always(function(
){a[g]=h,f&&J.isFunction(h)&&a[g](f[0])}),b.converters["script json"]=function(){
return f||J.error(g+" was not called"),f[0]},b.dataTypes[0]="json","script"}}),J.
ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a)
{return J.globalEval(a),a}}}),J.ajaxPrefilter("script",function(a){a.cache===b&&(
a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),J.ajaxTransport("script",
function(a){if(a.crossDomain){var c,d=G.head||G.getElementsByTagName("head")[0]||
G.documentElement;return{send:function(e,f){c=G.createElement("script"),c.async="async"
,a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=
function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=
c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||f(200,"success"
)},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var co=
a.ActiveXObject?function(){for(var a in cq)cq[a](0,1)}:!1,cp=0,cq;J.ajaxSettings.
xhr=a.ActiveXObject?function(){return!this.isLocal&&i()||h()}:i,function(a){J.extend
(J.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(J.ajaxSettings.xhr()),J.support
.ajax&&J.ajaxTransport(function(c){if(!c.crossDomain||J.support.cors){var d;return{
send:function(e,f){var g=c.xhr(),h,i;c.username?g.open(c.type,c.url,c.async,c.username
,c.password):g.open(c.type,c.url,c.async);if(c.xhrFields)for(i in c.xhrFields)g[i
]=c.xhrFields[i];c.mimeType&&g.overrideMimeType&&g.overrideMimeType(c.mimeType),!
c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{
for(i in e)g.setRequestHeader(i,e[i])}catch(j){}g.send(c.hasContent&&c.data||null
),d=function(a,e){var i,j,k,l,m;try{if(d&&(e||g.readyState===4)){d=b,h&&(g.onreadystatechange=
J.noop,co&&delete cq[h]);if(e)g.readyState!==4&&g.abort();else{i=g.status,k=g.getAllResponseHeaders
(),l={},m=g.responseXML,m&&m.documentElement&&(l.xml=m),l.text=g.responseText;try{
j=g.statusText}catch(n){j=""}!i&&c.isLocal&&!c.crossDomain?i=l.text?200:404:i===1223&&
(i=204)}}}catch(o){e||f(-1,o)}l&&f(i,j,l,k)},!c.async||g.readyState===4?d():(h=++
cp,co&&(cq||(cq={},J(a).unload(co)),cq[h]=d),g.onreadystatechange=d)},abort:function(
){d&&d(0,1)}}}});var cr={},cs,ct,cu=/^(?:toggle|show|hide)$/,cv=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i
,cw,cx=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width"
,"marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cy;J.fn.extend
({show:function(a,b,c){var f,g;if(a||a===0)return this.animate(e("show",3),a,b,c)
;for(var h=0,i=this.length;h<i;h++)f=this[h],f.style&&(g=f.style.display,!J._data
(f,"olddisplay")&&g==="none"&&(g=f.style.display=""),g===""&&J.css(f,"display")==="none"&&
J._data(f,"olddisplay",d(f.nodeName)));for(h=0;h<i;h++){f=this[h];if(f.style){g=f
.style.display;if(g===""||g==="none")f.style.display=J._data(f,"olddisplay")||""}
}return this},hide:function(a,b,c){if(a||a===0)return this.animate(e("hide",3),a,
b,c);var d,f,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(f=J.css(d,"display"
),f!=="none"&&!J._data(d,"olddisplay")&&J._data(d,"olddisplay",f));for(g=0;g<h;g++
)this[g].style&&(this[g].style.display="none");return this},_toggle:J.fn.toggle,toggle
:function(a,b,c){var d=typeof a=="boolean";return J.isFunction(a)&&J.isFunction(b
)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:J(
this).is(":hidden");J(this)[b?"show":"hide"]()}):this.animate(e("toggle",3),a,b,c
),this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show
().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,e){function f(){g.queue===!1&&
J._mark(this);var b=J.extend({},g),c=this.nodeType===1,e=c&&J(this).is(":hidden")
,f,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){f=J.camelCase(i),i!==f&&(a
[f]=a[i],delete a[i]),h=a[f],J.isArray(h)?(b.animatedProperties[f]=h[1],h=a[f]=h[0
]):b.animatedProperties[f]=b.specialEasing&&b.specialEasing[f]||b.easing||"swing"
;if(h==="hide"&&e||h==="show"&&!e)return b.complete.call(this);c&&(f==="height"||
f==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY
],J.css(this,"display")==="inline"&&J.css(this,"float")==="none"&&(!J.support.inlineBlockNeedsLayout||
d(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))
}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new J.fx(this,b,i)
,h=a[i],cu.test(h)?(o=J._data(this,"toggle"+i)||(h==="toggle"?e?"show":"hide":0),
o?(J._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=cv.exec(h
),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(J.cssNumber[i]?"":"px"),n!=="px"&&(J.style
(this,i,(m||1)+n),l=(m||1)/j.cur()*l,J.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1
:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""));return!0}var g=J.speed(b,c,e);return J
.isEmptyObject(a)?this.each(g.complete,[!1]):(a=J.extend({},a),g.queue===!1?this.
each(f):this.queue(g.queue,f))},stop:function(a,c,d){return typeof a!="string"&&(
d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){function b(a,
b,c){var e=b[c];J.removeData(a,c,!0),e.stop(d)}var c,e=!1,f=J.timers,g=J._data(this
);d||J._unmark(!0,this);if(a==null)for(c in g)g[c].stop&&c.indexOf(".run")===c.length-4&&
b(this,g,c);else g[c=a+".run"]&&g[c].stop&&b(this,g,c);for(c=f.length;c--;)f[c].elem===
this&&(a==null||f[c].queue===a)&&(d?f[c](!0):f[c].saveState(),e=!0,f.splice(c,1))
;(!d||!e)&&J.dequeue(this,a)})}}),J.each({slideDown:e("show",1),slideUp:e("hide",1
),slideToggle:e("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle
:{opacity:"toggle"}},function(a,b){J.fn[a]=function(a,c,d){return this.animate(b,
a,c,d)}}),J.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?J.extend({}
,a):{complete:c||!c&&b||J.isFunction(a)&&a,duration:a,easing:c&&b||b&&!J.isFunction
(b)&&b};d.duration=J.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in 
J.fx.speeds?J.fx.speeds[d.duration]:J.fx.speeds._default;if(d.queue==null||d.queue===!0
)d.queue="fx";return d.old=d.complete,d.complete=function(a){J.isFunction(d.old)&&
d.old.call(this),d.queue?J.dequeue(this,d.queue):a!==!1&&J._unmark(this)},d},easing
:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos
(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this
.prop=c,b.orig=b.orig||{}}}),J.fx.prototype={update:function(){this.options.step&&
this.options.step.call(this.elem,this.now,this),(J.fx.step[this.prop]||J.fx.step.
_default)(this)},cur:function(){if(this.elem[this.prop]==null||!!this.elem.style&&
this.elem.style[this.prop]!=null){var a,b=J.css(this.elem,this.prop);return isNaN
(a=parseFloat(b))?!b||b==="auto"?0:b:a}return this.elem[this.prop]},custom:function(
a,c,d){function e(a){return f.step(a)}var f=this,h=J.fx;this.startTime=cy||g(),this
.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(J.cssNumber
[this.prop]?"":"px"),e.queue=this.options.queue,e.elem=this.elem,e.saveState=function(
){f.options.hide&&J._data(f.elem,"fxshow"+f.prop)===b&&J._data(f.elem,"fxshow"+f.
prop,f.start)},e()&&J.timers.push(e)&&!cw&&(cw=setInterval(h.tick,h.interval))},show
:function(){var a=J._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop
]=a||J.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur
(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),J(this
.elem).show()},hide:function(){this.options.orig[this.prop]=J._data(this.elem,"fxshow"+
this.prop)||J.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur
(),0)},step:function(a){var b,c,d,e=cy||g(),f=!0,h=this.elem,i=this.options;if(a||
e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update
(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties
[b]!==!0&&(f=!1);if(f){i.overflow!=null&&!J.support.shrinkWrapBlocks&&J.each(["","X"
,"Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&J(h).hide();if(
i.hide||i.show)for(b in i.animatedProperties)J.style(h,b,i.orig[b]),J.removeData(
h,"fxshow"+b,!0),J.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call
(h))}return!1}return i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=
c/i.duration,this.pos=J.easing[i.animatedProperties[this.prop]](this.state,c,0,1,
i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update(),!0}
},J.extend(J.fx,{tick:function(){var a,b=J.timers,c=0;for(;c<b.length;c++)a=b[c],!
a()&&b[c]===a&&b.splice(c--,1);b.length||J.fx.stop()},interval:13,stop:function()
{clearInterval(cw),cw=null},speeds:{slow:600,fast:200,_default:400},step:{opacity
:function(a){J.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&
a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now
}}}),J.each(["width","height"],function(a,b){J.fx.step[b]=function(a){J.style(a.elem
,b,Math.max(0,a.now))}}),J.expr&&J.expr.filters&&(J.expr.filters.animated=function(
a){return J.grep(J.timers,function(b){return a===b.elem}).length});var cz=/^t(?:able|d|h)$/i
,cA=/^(?:body|html)$/i;"getBoundingClientRect"in G.documentElement?J.fn.offset=function(
a){var b=this[0],d;if(a)return this.each(function(b){J.offset.setOffset(this,a,b)
});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return J.offset
.bodyOffset(b);try{d=b.getBoundingClientRect()}catch(e){}var f=b.ownerDocument,g=
f.documentElement;if(!d||!J.contains(g,b))return d?{top:d.top,left:d.left}:{top:0
,left:0};var h=f.body,i=c(f),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0
,l=i.pageYOffset||J.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||J
.support.boxModel&&g.scrollLeft||h.scrollLeft,n=d.top+l-j,o=d.left+m-k;return{top
:n,left:o}}:J.fn.offset=function(a){var b=this[0];if(a)return this.each(function(
b){J.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument
.body)return J.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,f=b.ownerDocument,
g=f.documentElement,h=f.body,i=f.defaultView,j=i?i.getComputedStyle(b,null):b.currentStyle
,k=b.offsetTop,l=b.offsetLeft;while((b=b.parentNode)&&b!==h&&b!==g){if(J.support.
fixedPosition&&j.position==="fixed")break;c=i?i.getComputedStyle(b,null):b.currentStyle
,k-=b.scrollTop,l-=b.scrollLeft,b===d&&(k+=b.offsetTop,l+=b.offsetLeft,J.support.
doesNotAddBorder&&(!J.support.doesAddBorderForTableAndCells||!cz.test(b.nodeName)
)&&(k+=parseFloat(c.borderTopWidth)||0,l+=parseFloat(c.borderLeftWidth)||0),e=d,d=
b.offsetParent),J.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&
(k+=parseFloat(c.borderTopWidth)||0,l+=parseFloat(c.borderLeftWidth)||0),j=c}if(j
.position==="relative"||j.position==="static")k+=h.offsetTop,l+=h.offsetLeft;return J
.support.fixedPosition&&j.position==="fixed"&&(k+=Math.max(g.scrollTop,h.scrollTop
),l+=Math.max(g.scrollLeft,h.scrollLeft)),{top:k,left:l}},J.offset={bodyOffset:function(
a){var b=a.offsetTop,c=a.offsetLeft;return J.support.doesNotIncludeMarginInBodyOffset&&
(b+=parseFloat(J.css(a,"marginTop"))||0,c+=parseFloat(J.css(a,"marginLeft"))||0),
{top:b,left:c}},setOffset:function(a,b,c){var d=J.css(a,"position");d==="static"&&
(a.style.position="relative");var e=J(a),f=e.offset(),g=J.css(a,"top"),h=J.css(a,"left"
),i=(d==="absolute"||d==="fixed")&&J.inArray("auto",[g,h])>-1,j={},k={},l,m;i?(k=
e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),J.isFunction
(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b
.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)}},J.fn.extend({position:function(
){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cA
.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(J.css(a,"marginTop"
))||0,c.left-=parseFloat(J.css(a,"marginLeft"))||0,d.top+=parseFloat(J.css(b[0],"borderTopWidth"
))||0,d.left+=parseFloat(J.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:
c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||
G.body;while(a&&!cA.test(a.nodeName)&&J.css(a,"position")==="static")a=a.offsetParent
;return a})}}),J.each(["Left","Top"],function(a,d){var e="scroll"+d;J.fn[e]=function(
d){var f,g;return d===b?(f=this[0],f?(g=c(f),g?"pageXOffset"in g?g[a?"pageYOffset"
:"pageXOffset"]:J.support.boxModel&&g.document.documentElement[e]||g.document.body
[e]:f[e]):null):this.each(function(){g=c(this),g?g.scrollTo(a?J(g).scrollLeft():d
,a?d:J(g).scrollTop()):this[e]=d})}}),J.each(["Height","Width"],function(a,c){var d=
c.toLowerCase();J.fn["inner"+c]=function(){var a=this[0];return a?a.style?parseFloat
(J.css(a,d,"padding")):this[d]():null},J.fn["outer"+c]=function(a){var b=this[0];
return b?b.style?parseFloat(J.css(b,d,a?"margin":"border")):this[d]():null},J.fn[
d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(J.isFunction(a))return this
.each(function(b){var c=J(this);c[d](a.call(this,b,c[d]()))});if(J.isWindow(e)){var f=
e.document.documentElement["client"+c],g=e.document.body;return e.document.compatMode==="CSS1Compat"&&
f||g&&g["client"+c]||f}if(e.nodeType===9)return Math.max(e.documentElement["client"+
c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement
["offset"+c]);if(a===b){var h=J.css(e,d),i=parseFloat(h);return J.isNumeric(i)?i:
h}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=J})(window),function(
){function a(b,c,d){if(b===c)return b!==0||1/b==1/c;if(b==null||c==null)return b===
c;b._chain&&(b=b._wrapped),c._chain&&(c=c._wrapped);if(v.isFunction(b.isEqual))return b
.isEqual(c);if(v.isFunction(c.isEqual))return c.isEqual(b);var e=i.call(b);if(e!=
i.call(c))return!1;switch(e){case"[object String]":return String(b)==String(c);case"[object Number]"
:return b=+b,c=+c,b!=b?c!=c:b==0?1/b==1/c:b==c;case"[object Date]":case"[object Boolean]"
:return+b==+c;case"[object RegExp]":return b.source==c.source&&b.global==c.global&&
b.multiline==c.multiline&&b.ignoreCase==c.ignoreCase}if(typeof b!="object"||typeof 
c!="object")return!1;for(var f=d.length;f--;)if(d[f]==b)return!0;d.push(b);var f=0
,g=!0;if(e=="[object Array]"){if(f=b.length,g=f==c.length)for(;f--;)if(!(g=f in b==
f in c&&a(b[f],c[f],d)))break}else{if("constructor"in b!="constructor"in c||b.constructor!=
c.constructor)return!1;for(var h in b)if(j.call(b,h)&&(f++,!(g=j.call(c,h)&&a(b[h
],c[h],d))))break;if(g){for(h in c)if(j.call(c,h)&&!(f--))break;g=!f}}return d.pop
(),g}var b=this,c=b._,d={},e=Array.prototype,f=Object.prototype,g=e.slice,h=e.unshift
,i=f.toString,j=f.hasOwnProperty,k=e.forEach,l=e.map,m=e.reduce,n=e.reduceRight,o=
e.filter,p=e.every,q=e.some,r=e.indexOf,s=e.lastIndexOf,f=Array.isArray,t=Object.
keys,u=Function.prototype.bind,v=function(a){return new A(a)};typeof exports!="undefined"?
(typeof module!="undefined"&&module.exports&&(exports=module.exports=v),exports._=
v):typeof define=="function"&&define.amd?define("underscore",function(){return v}
):b._=v,v.VERSION="1.2.2";var w=v.each=v.forEach=function(a,b,c){if(a!=null)if(k&&
a.forEach===k)a.forEach(b,c);else if(a.length===+a.length){for(var e=0,f=a.length
;e<f;e++)if(e in a&&b.call(c,a[e],e,a)===d)break}else for(e in a)if(j.call(a,e)&&
b.call(c,a[e],e,a)===d)break};v.map=function(a,b,c){var d=[];return a==null?d:l&&
a.map===l?a.map(b,c):(w(a,function(a,e,f){d[d.length]=b.call(c,a,e,f)}),d)},v.reduce=
v.foldl=v.inject=function(a,b,c,d){var e=c!==void 0;a==null&&(a=[]);if(m&&a.reduce===
m)return d&&(b=v.bind(b,d)),e?a.reduce(b,c):a.reduce(b);w(a,function(a,f,g){e?c=b
.call(d,c,a,f,g):(c=a,e=!0)});if(!e)throw new TypeError("Reduce of empty array with no initial value"
);return c},v.reduceRight=v.foldr=function(a,b,c,d){return a==null&&(a=[]),n&&a.reduceRight===
n?(d&&(b=v.bind(b,d)),c!==void 0?a.reduceRight(b,c):a.reduceRight(b)):(a=(v.isArray
(a)?a.slice():v.toArray(a)).reverse(),v.reduce(a,b,c,d))},v.find=v.detect=function(
a,b,c){var d;return x(a,function(a,e,f){if(b.call(c,a,e,f))return d=a,!0}),d},v.filter=
v.select=function(a,b,c){var d=[];return a==null?d:o&&a.filter===o?a.filter(b,c):
(w(a,function(a,e,f){b.call(c,a,e,f)&&(d[d.length]=a)}),d)},v.reject=function(a,b
,c){var d=[];return a==null?d:(w(a,function(a,e,f){b.call(c,a,e,f)||(d[d.length]=
a)}),d)},v.every=v.all=function(a,b,c){var e=!0;return a==null?e:p&&a.every===p?a
.every(b,c):(w(a,function(a,f,g){if(!(e=e&&b.call(c,a,f,g)))return d}),e)};var x=
v.some=v.any=function(a,b,c){var b=b||v.identity,e=!1;return a==null?e:q&&a.some===
q?a.some(b,c):(w(a,function(a,f,g){if(e||(e=b.call(c,a,f,g)))return d}),!!e)};v.include=
v.contains=function(a,b){var c=!1;return a==null?c:r&&a.indexOf===r?a.indexOf(b)!=-1
:c=x(a,function(a){return a===b})},v.invoke=function(a,b){var c=g.call(arguments,2
);return v.map(a,function(a){return(b.call?b||a:a[b]).apply(a,c)})},v.pluck=function(
a,b){return v.map(a,function(a){return a[b]})},v.max=function(a,b,c){if(!b&&v.isArray
(a))return Math.max.apply(Math,a);if(!b&&v.isEmpty(a))return-Infinity;var d={computed
:-Infinity};return w(a,function(a,e,f){e=b?b.call(c,a,e,f):a,e>=d.computed&&(d={value
:a,computed:e})}),d.value},v.min=function(a,b,c){if(!b&&v.isArray(a))return Math.
min.apply(Math,a);if(!b&&v.isEmpty(a))return Infinity;var d={computed:Infinity};return w
(a,function(a,e,f){e=b?b.call(c,a,e,f):a,e<d.computed&&(d={value:a,computed:e})})
,d.value},v.shuffle=function(a){var b=[],c;return w(a,function(a,d){d==0?b[0]=a:(
c=Math.floor(Math.random()*(d+1)),b[d]=b[c],b[c]=a)}),b},v.sortBy=function(a,b,c)
{return v.pluck(v.map(a,function(a,d,e){return{value:a,criteria:b.call(c,a,d,e)}}
).sort(function(a,b){var c=a.criteria,d=b.criteria;return c<d?-1:c>d?1:0}),"value"
)},v.groupBy=function(a,b){var c={},d=v.isFunction(b)?b:function(a){return a[b]};
return w(a,function(a,b){var e=d(a,b);(c[e]||(c[e]=[])).push(a)}),c},v.sortedIndex=
function(a,b,c){c||(c=v.identity);for(var d=0,e=a.length;d<e;){var f=d+e>>1;c(a[f
])<c(b)?d=f+1:e=f}return d},v.toArray=function(a){return a?a.toArray?a.toArray():
v.isArray(a)?g.call(a):v.isArguments(a)?g.call(a):v.values(a):[]},v.size=function(
a){return v.toArray(a).length},v.first=v.head=function(a,b,c){return b!=null&&!c?
g.call(a,0,b):a[0]},v.initial=function(a,b,c){return g.call(a,0,a.length-(b==null||
c?1:b))},v.last=function(a,b,c){return b!=null&&!c?g.call(a,Math.max(a.length-b,0
)):a[a.length-1]},v.rest=v.tail=function(a,b,c){return g.call(a,b==null||c?1:b)},
v.compact=function(a){return v.filter(a,function(a){return!!a})},v.flatten=function(
a,b){return v.reduce(a,function(a,c){return v.isArray(c)?a.concat(b?c:v.flatten(c
)):(a[a.length]=c,a)},[])},v.without=function(a){return v.difference(a,g.call(arguments
,1))},v.uniq=v.unique=function(a,b,c){var c=c?v.map(a,c):a,d=[];return v.reduce(c
,function(c,e,f){if(0==f||(b===!0?v.last(c)!=e:!v.include(c,e)))c[c.length]=e,d[d
.length]=a[f];return c},[]),d},v.union=function(){return v.uniq(v.flatten(arguments
,!0))},v.intersection=v.intersect=function(a){var b=g.call(arguments,1);return v.
filter(v.uniq(a),function(a){return v.every(b,function(b){return v.indexOf(b,a)>=0
})})},v.difference=function(a,b){return v.filter(a,function(a){return!v.include(b
,a)})},v.zip=function(){for(var a=g.call(arguments),b=v.max(v.pluck(a,"length")),
c=Array(b),d=0;d<b;d++)c[d]=v.pluck(a,""+d);return c},v.indexOf=function(a,b,c){if(
a==null)return-1;var d;if(c)return c=v.sortedIndex(a,b),a[c]===b?c:-1;if(r&&a.indexOf===
r)return a.indexOf(b);for(c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},v
.lastIndexOf=function(a,b){if(a==null)return-1;if(s&&a.lastIndexOf===s)return a.lastIndexOf
(b);for(var c=a.length;c--;)if(a[c]===b)return c;return-1},v.range=function(a,b,c
){arguments.length<=1&&(b=a||0,a=0);for(var c=arguments[2]||1,d=Math.max(Math.ceil
((b-a)/c),0),e=0,f=Array(d);e<d;)f[e++]=a,a+=c;return f};var y=function(){};v.bind=
function(a,b){var c,d;if(a.bind===u&&u)return u.apply(a,g.call(arguments,1));if(!
v.isFunction(a))throw new TypeError;return d=g.call(arguments,2),c=function(){if(
this instanceof c){y.prototype=a.prototype;var e=new y,f=a.apply(e,d.concat(g.call
(arguments)));return Object(f)===f?f:e}return a.apply(b,d.concat(g.call(arguments
)))}},v.bindAll=function(a){var b=g.call(arguments,1);return b.length==0&&(b=v.functions
(a)),w(b,function(b){a[b]=v.bind(a[b],a)}),a},v.memoize=function(a,b){var c={};return b||
(b=v.identity),function(){var d=b.apply(this,arguments);return j.call(c,d)?c[d]:c
[d]=a.apply(this,arguments)}},v.delay=function(a,b){var c=g.call(arguments,2);return setTimeout
(function(){return a.apply(a,c)},b)},v.defer=function(a){return v.delay.apply(v,[
a,1].concat(g.call(arguments,1)))},v.throttle=function(a,b){var c,d,e,f,g,h=v.debounce
(function(){g=f=!1},b);return function(){c=this,d=arguments;var i;e||(e=setTimeout
(function(){e=null,g&&a.apply(c,d),h()},b)),f?g=!0:a.apply(c,d),h(),f=!0}},v.debounce=
function(a,b){var c;return function(){var d=this,e=arguments;clearTimeout(c),c=setTimeout
(function(){c=null,a.apply(d,e)},b)}},v.once=function(a){var b=!1,c;return function(
){return b?c:(b=!0,c=a.apply(this,arguments))}},v.wrap=function(a,b){return function(
){var c=[a].concat(g.call(arguments));return b.apply(this,c)}},v.compose=function(
){var a=g.call(arguments);return function(){for(var b=g.call(arguments),c=a.length-1
;c>=0;c--)b=[a[c].apply(this,b)];return b[0]}},v.after=function(a,b){return a<=0?
b():function(){if(--a<1)return b.apply(this,arguments)}},v.keys=t||function(a){if(
a!==Object(a))throw new TypeError("Invalid object");var b=[],c;for(c in a)j.call(
a,c)&&(b[b.length]=c);return b},v.values=function(a){return v.map(a,v.identity)},
v.functions=v.methods=function(a){var b=[],c;for(c in a)v.isFunction(a[c])&&b.push
(c);return b.sort()},v.extend=function(a){return w(g.call(arguments,1),function(b
){for(var c in b)b[c]!==void 0&&(a[c]=b[c])}),a},v.defaults=function(a){return w(
g.call(arguments,1),function(b){for(var c in b)a[c]==null&&(a[c]=b[c])}),a},v.clone=
function(a){return v.isObject(a)?v.isArray(a)?a.slice():v.extend({},a):a},v.tap=function(
a,b){return b(a),a},v.isEqual=function(b,c){return a(b,c,[])},v.isEmpty=function(
a){if(v.isArray(a)||v.isString(a))return a.length===0;for(var b in a)if(j.call(a,
b))return!1;return!0},v.isElement=function(a){return!!a&&a.nodeType==1},v.isArray=
f||function(a){return i.call(a)=="[object Array]"},v.isObject=function(a){return a===
Object(a)},v.isArguments=i.call(arguments)=="[object Arguments]"?function(a){return i
.call(a)=="[object Arguments]"}:function(a){return!!a&&!!j.call(a,"callee")},v.isFunction=
function(a){return i.call(a)=="[object Function]"},v.isString=function(a){return i
.call(a)=="[object String]"},v.isNumber=function(a){return i.call(a)=="[object Number]"
},v.isNaN=function(a){return a!==a},v.isBoolean=function(a){return a===!0||a===!1||
i.call(a)=="[object Boolean]"},v.isDate=function(a){return i.call(a)=="[object Date]"
},v.isRegExp=function(a){return i.call(a)=="[object RegExp]"},v.isNull=function(a
){return a===null},v.isUndefined=function(a){return a===void 0},v.noConflict=function(
){return b._=c,this},v.identity=function(a){return a},v.times=function(a,b,c){for(
var d=0;d<a;d++)b.call(c,d)},v.escape=function(a){return(""+a).replace(/&/g,"&amp;"
).replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"
).replace(/\//g,"&#x2F;")},v.mixin=function(a){w(v.functions(a),function(b){C(b,v
[b]=a[b])})};var z=0;v.uniqueId=function(a){var b=z++;return a?a+b:b},v.templateSettings=
{evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g
},v.template=function(a,b){var c=v.templateSettings,c="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+
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
.value=function(){return this._wrapped}}.call(this);var MicroEvent=function(){};MicroEvent
.prototype={bind:function(a,b){this._events=this._events||{},this._events[a]=this
._events[a]||[],this._events[a].push(b)},unbind:function(a,b){this._events=this._events||
{};if(a in this._events==0)return;this._events[a].splice(this._events[a].indexOf(
b),1)},trigger:function(a){this._events=this._events||{};if(a in this._events==0)
return;for(var b=0;b<this._events[a].length;b++)this._events[a][b].apply(this,Array
.prototype.slice.call(arguments,1))}},MicroEvent.mixin=function(a){var b=["bind","unbind"
,"trigger"];for(var c=0;c<b.length;c++)a.prototype[b[c]]=MicroEvent.prototype[b[c
]]},typeof module!="undefined"&&"exports"in module&&(module.exports=MicroEvent),function(
){window.RXR=function(a){return a.Helpers=function(){function b(){}return b.prototype
.drawable={pixels2int:function(a){return parseInt(a,10)}},b.prototype.components=
{ready:function(){return a.Events.trigger(this.component_name+":ready",this.component_name
)}},b.prototype.keyCodes={keyCode:{left:37,up:38,right:39,down:40},KEYTYPES:{directions
:["37","38","39","40"]},KEYCODES:{37:"left",38:"up",39:"right",40:"down"}},b}(),a
}(window.RXR||{})}.call(this),function(){var a=function(a,b){return function(){return a
.apply(b,arguments)}};Array.prototype.remove=function(a){var b,c;if((b=this.indexOf
(a))>-1)return[].splice.apply(this,[b,b-b+1].concat(c=[])),c},window.RXR=function(
b){return b.Base=function(){function c(c){return this.options=c,this.start=a(this
.start,this),this.checkIfReady=a(this.checkIfReady,this),this.settings={},this.settings
.has_fps=Boolean(this.options.fps),this.settings.container=$(this.options.el),this
.layers=[],this.entities=[],b.Events||(b._events=function(){},MicroEvent.mixin(b.
_events),b.Events=new b._events),this.settings.has_fps&&(this.fps=new b.FPS({el:this
.options.fps})),this.keyboard=new b.Keyboard,this.loop=new b.MainLoop({has_fps:this
.settings.has_fps,current_game:this}),(this.options.init||$.noop).apply(this),this
.init(),this}return c.prototype.checkIfReady=function(a){this.readyComponents.push
(a);if(_.isEmpty(_.difference(this.mustBeReady,this.readyComponents)))return this
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