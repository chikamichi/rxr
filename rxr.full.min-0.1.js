window.Modernizr=function(a,b,c){function d(){l.input=function(a){for(var b=0,c=a
.length;b<c;b++)A[a[b]]=a[b]in s;return A}("autocomplete autofocus list placeholder max min multiple pattern required step"
.split(" ")),l.inputtypes=function(a){for(var d=0,e,f,g,h=a.length;d<h;d++)s.setAttribute
("type",f=a[d]),e=s.type!=="text",e&&(s.value=t,s.style.cssText="position:absolute;visibility:hidden;"
,/^range$/.test(f)&&s.style.WebkitAppearance!==c?(n.appendChild(s),g=b.defaultView
,e=g.getComputedStyle&&g.getComputedStyle(s,null).WebkitAppearance!=="textfield"&&
s.offsetHeight!==0,n.removeChild(s)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test
(f)?e=s.checkValidity&&s.checkValidity()===!1:/^color$/.test(f)?(n.appendChild(s)
,n.offsetWidth,e=s.value!=t,n.removeChild(s)):e=s.value!=t)),z[a[d]]=!!e;return z
}("search tel url email datetime date month week time datetime-local number range color"
.split(" "))}function e(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1),d=(a+" "+
w.join(c+" ")+c).split(" ");return f(d,b)}function f(a,b){for(var d in a)if(r[a[d
]]!==c)return b=="pfx"?a[d]:!0;return!1}function g(a,b){return!!~(""+a).indexOf(b
)}function h(a,b){return typeof a===b}function i(a,b){return j(v.join(a+";")+(b||""
))}function j(a){r.cssText=a}var k="2.0.6",l={},m=!0,n=b.documentElement,o=b.head||
b.getElementsByTagName("head")[0],p="modernizr",q=b.createElement(p),r=q.style,s=
b.createElement("input"),t=":)",u=Object.prototype.toString,v=" -webkit- -moz- -o- -ms- -khtml- "
.split(" "),w="Webkit Moz O ms Khtml".split(" "),x={svg:"http://www.w3.org/2000/svg"
},y={},z={},A={},B=[],C=function(a,c,d,e){var f,g,h,i=b.createElement("div");if(parseInt
(d,10))while(d--)h=b.createElement("div"),h.id=e?e[d]:p+(d+1),i.appendChild(h);return f=
["&shy;","<style>",a,"</style>"].join(""),i.id=p,i.innerHTML+=f,n.appendChild(i),
g=c(i,a),i.parentNode.removeChild(i),!!g},D=function(b){if(a.matchMedia)return matchMedia
(b).matches;var c;return C("@media "+b+" { #"+p+" { position: absolute; } }",function(
b){c=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle).position=="absolute"
}),c},E=function(){function a(a,e){e=e||b.createElement(d[a]||"div"),a="on"+a;var f=
a in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&
(e.setAttribute(a,""),f=h(e[a],"function"),h(e[a],c)||(e[a]=c),e.removeAttribute(
a))),e=null,f}var d={select:"input",change:"input",submit:"form",reset:"form",error
:"img",load:"img",abort:"img"};return a}(),F,G={}.hasOwnProperty,H;!h(G,c)&&!h(G.
call,c)?H=function(a,b){return G.call(a,b)}:H=function(a,b){return b in a&&h(a.constructor
.prototype[b],c)};var I=function(c,d){var e=c.join(""),f=d.length;C(e,function(c,
d){var e=b.styleSheets[b.styleSheets.length-1],g=e.cssRules&&e.cssRules[0]?e.cssRules
[0].cssText:e.cssText||"",h=c.childNodes,i={};while(f--)i[h[f].id]=h[f];l.touch="ontouchstart"in 
a||i.touch.offsetTop===9,l.csstransforms3d=i.csstransforms3d.offsetLeft===9,l.generatedcontent=
i.generatedcontent.offsetHeight>=1,l.fontface=/src/i.test(g)&&g.indexOf(d.split(" "
)[0])===0},f,d)}(['@font-face {font-family:"font";src:url("https://")}',["@media ("
,v.join("touch-enabled),("),p,")","{#touch{top:9px;position:absolute}}"].join("")
,["@media (",v.join("transform-3d),("),p,")","{#csstransforms3d{left:9px;position:absolute}}"
].join(""),['#generatedcontent:after{content:"',t,'";visibility:hidden}'].join(""
)],["fontface","touch","csstransforms3d","generatedcontent"]);y.flexbox=function(
){function a(a,b,c,d){a.style.cssText=v.join(b+":"+c+";")+(d||"")}function c(a,b,
c,d){b+=":",a.style.cssText=(b+v.join(c+";"+b)).slice(0,-b.length)+(d||"")}var d=
b.createElement("div"),e=b.createElement("div");c(d,"display","box","width:42px;padding:0;"
),a(e,"box-flex","1","width:10px;"),d.appendChild(e),n.appendChild(d);var f=e.offsetWidth===42
;return d.removeChild(e),n.removeChild(d),f},y.canvas=function(){var a=b.createElement
("canvas");return!!a.getContext&&!!a.getContext("2d")},y.canvastext=function(){return!!
l.canvas&&!!h(b.createElement("canvas").getContext("2d").fillText,"function")},y.
webgl=function(){return!!a.WebGLRenderingContext},y.touch=function(){return l.touch
},y.geolocation=function(){return!!navigator.geolocation},y.postmessage=function(
){return!!a.postMessage},y.websqldatabase=function(){var b=!!a.openDatabase;return b
},y.indexedDB=function(){for(var b=-1,c=w.length;++b<c;)if(a[w[b].toLowerCase()+"IndexedDB"
])return!0;return!!a.indexedDB},y.hashchange=function(){return E("hashchange",a)&&
(b.documentMode===c||b.documentMode>7)},y.history=function(){return!!a.history&&!!
history.pushState},y.draganddrop=function(){return E("dragstart")&&E("drop")},y.websockets=
function(){for(var b=-1,c=w.length;++b<c;)if(a[w[b]+"WebSocket"])return!0;return"WebSocket"in 
a},y.rgba=function(){return j("background-color:rgba(150,255,150,.5)"),g(r.backgroundColor
,"rgba")},y.hsla=function(){return j("background-color:hsla(120,40%,100%,.5)"),g(
r.backgroundColor,"rgba")||g(r.backgroundColor,"hsla")},y.multiplebgs=function(){
return j("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/
.test(r.background)},y.backgroundsize=function(){return e("backgroundSize")},y.borderimage=
function(){return e("borderImage")},y.borderradius=function(){return e("borderRadius"
)},y.boxshadow=function(){return e("boxShadow")},y.textshadow=function(){return b
.createElement("div").style.textShadow===""},y.opacity=function(){return i("opacity:.55"
),/^0.55$/.test(r.opacity)},y.cssanimations=function(){return e("animationName")}
,y.csscolumns=function(){return e("columnCount")},y.cssgradients=function(){var a="background-image:"
,b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);"
;return j((a+v.join(b+a)+v.join(c+a)).slice(0,-a.length)),g(r.backgroundImage,"gradient"
)},y.cssreflections=function(){return e("boxReflect")},y.csstransforms=function()
{return!!f(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"
])},y.csstransforms3d=function(){var a=!!f(["perspectiveProperty","WebkitPerspective"
,"MozPerspective","OPerspective","msPerspective"]);return a&&"webkitPerspective"in 
n.style&&(a=l.csstransforms3d),a},y.csstransitions=function(){return e("transitionProperty"
)},y.fontface=function(){return l.fontface},y.generatedcontent=function(){return l
.generatedcontent},y.video=function(){var a=b.createElement("video"),c=!1;try{if(
c=!!a.canPlayType){c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"'
);var d='video/mp4; codecs="avc1.42E01E';c.h264=a.canPlayType(d+'"')||a.canPlayType
(d+', mp4a.40.2"'),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"')}}catch(
e){}return c},y.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a
.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"'),c
.mp3=a.canPlayType("audio/mpeg;"),c.wav=a.canPlayType('audio/wav; codecs="1"'),c.
m4a=a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")}catch(d){}return c
},y.localstorage=function(){try{return!!localStorage.getItem}catch(a){return!1}},
y.sessionstorage=function(){try{return!!sessionStorage.getItem}catch(a){return!1}
},y.webworkers=function(){return!!a.Worker},y.applicationcache=function(){return!!
a.applicationCache},y.svg=function(){return!!b.createElementNS&&!!b.createElementNS
(x.svg,"svg").createSVGRect},y.inlinesvg=function(){var a=b.createElement("div");
return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==x.svg},y.smil=
function(){return!!b.createElementNS&&/SVG/.test(u.call(b.createElementNS(x.svg,"animate"
)))},y.svgclippaths=function(){return!!b.createElementNS&&/SVG/.test(u.call(b.createElementNS
(x.svg,"clipPath")))};for(var J in y)H(y,J)&&(F=J.toLowerCase(),l[F]=y[J](),B.push
((l[F]?"":"no-")+F));return l.input||d(),l.addTest=function(a,b){if(typeof a=="object"
)for(var d in a)H(a,d)&&l.addTest(d,a[d]);else{a=a.toLowerCase();if(l[a]!==c)return;
b=typeof b=="boolean"?b:!!b(),n.className+=" "+(b?"":"no-")+a,l[a]=b}return l},j(""
),q=s=null,a.attachEvent&&function(){var a=b.createElement("div");return a.innerHTML="<elem></elem>"
,a.childNodes.length!==1}()&&function(a,b){function d(a){var b=-1;while(++b<h)a.createElement
(g[b])}a.iepp=a.iepp||{};var e=a.iepp,f=e.html5elements||"abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
,g=f.split("|"),h=g.length,i=new RegExp("(^|\\s)("+f+")","gi"),j=new RegExp("<(/*)("+
f+")","gi"),k=/^\s*[\{\}]\s*$/,l=new RegExp("(^|[^\\n]*?\\s)("+f+")([^\\n]*)({[\\n\\w\\W]*?})"
,"gi"),m=b.createDocumentFragment(),n=b.documentElement,o=n.firstChild,p=b.createElement
("body"),q=b.createElement("style"),r=/print|all/,s;e.getCSS=function(a,b){if(a+""===
c)return"";var d=-1,f=a.length,g,h=[];while(++d<f){g=a[d];if(g.disabled)continue;
b=g.media||b,r.test(b)&&h.push(e.getCSS(g.imports,b),g.cssText),b="all"}return h.
join("")},e.parseCSS=function(a){var b=[],c;while((c=l.exec(a))!=null)b.push(((k.
exec(c[1])?"\n":c[1])+c[2]+c[3]).replace(i,"$1.iepp_$2")+c[4]);return b.join("\n"
)},e.writeHTML=function(){var a=-1;s=s||b.body;while(++a<h){var c=b.getElementsByTagName
(g[a]),d=c.length,e=-1;while(++e<d)c[e].className.indexOf("iepp_")<0&&(c[e].className+=" iepp_"+
g[a])}m.appendChild(s),n.appendChild(p),p.className=s.className,p.id=s.id,p.innerHTML=
s.innerHTML.replace(j,"<$1font")},e._beforePrint=function(){q.styleSheet.cssText=
e.parseCSS(e.getCSS(b.styleSheets,"all")),e.writeHTML()},e.restoreHTML=function()
{p.innerHTML="",n.removeChild(p),n.appendChild(s)},e._afterPrint=function(){e.restoreHTML
(),q.styleSheet.cssText=""},d(b),d(m),e.disablePP||(o.insertBefore(q,o.firstChild
),q.media="print",q.className="iepp-printshim",a.attachEvent("onbeforeprint",e._beforePrint
),a.attachEvent("onafterprint",e._afterPrint))}(a,b),l._version=k,l._prefixes=v,l
._domPrefixes=w,l.mq=D,l.hasEvent=E,l.testProp=function(a){return f([a])},l.testAllProps=
e,l.testStyles=C,l.prefixed=function(a){return e(a,"pfx")},n.className=n.className
.replace(/\bno-js\b/,"")+(m?" js "+B.join(" "):""),l}(this,this.document),function(
a,b){function c(){s(!0)}a.respond={},respond.update=function(){},respond.mediaQueriesSupported=
b;if(!b){var d=a.document,e=d.documentElement,f=[],g=[],h=[],i={},j=30,k=d.getElementsByTagName
("head")[0]||e,l=k.getElementsByTagName("link"),m=[],n=function(){var b=l,c=b.length
,d=0,e,f,g,h;for(;d<c;d++)e=b[d],f=e.href,g=e.media,h=e.rel&&e.rel.toLowerCase()==="stylesheet"
,!!f&&h&&!i[f]&&(!/^([a-zA-Z]+?:(\/\/)?(www\.)?)/.test(f)||f.replace(RegExp.$1,""
).split("/")[0]===a.location.host?m.push({href:f,media:g}):i[f]=!0);o()},o=function(
){if(m.length){var a=m.shift();t(a.href,function(b){p(b,a.href,a.media),i[a.href]=!0
,o()})}},p=function(a,b,c){var d=a.match(/@media[^\{]+\{([^\{\}]+\{[^\}\{]+\})+/gi
),e=d&&d.length||0,b=b.substring(0,b.lastIndexOf("/")),h=function(a){return a.replace
(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+b+"$2$3")},i=!e&&c,j=0,k,l,m,n
,o;b.length&&(b+="/"),i&&(e=1);for(;j<e;j++){k=0,i?(l=c,g.push(h(a))):(l=d[j].match
(/@media ([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,g.push(RegExp.$2&&h(RegExp.$2))),n=l.
split(","),o=n.length;for(;k<o;k++)m=n[k],f.push({media:m.match(/(only\s+)?([a-zA-Z]+)(\sand)?/
)&&RegExp.$2,rules:g.length-1,minw:m.match(/\(min\-width:[\s]*([\s]*[0-9]+)px[\s]*\)/
)&&parseFloat(RegExp.$1),maxw:m.match(/\(max\-width:[\s]*([\s]*[0-9]+)px[\s]*\)/)&&
parseFloat(RegExp.$1)})}s()},q,r,s=function(a){var b="clientWidth",c=e[b],i=d.compatMode==="CSS1Compat"&&
c||d.body[b]||c,m={},n=d.createDocumentFragment(),o=l[l.length-1],p=(new Date).getTime
();if(a&&q&&p-q<j)clearTimeout(r),r=setTimeout(s,j);else{q=p;for(var t in f){var u=
f[t];if(!u.minw&&!u.maxw||(!u.minw||u.minw&&i>=u.minw)&&(!u.maxw||u.maxw&&i<=u.maxw
))m[u.media]||(m[u.media]=[]),m[u.media].push(g[u.rules])}for(var t in h)h[t]&&h[
t].parentNode===k&&k.removeChild(h[t]);for(var t in m){var v=d.createElement("style"
),w=m[t].join("\n");v.type="text/css",v.media=t,v.styleSheet?v.styleSheet.cssText=
w:v.appendChild(d.createTextNode(w)),n.appendChild(v),h.push(v)}k.insertBefore(n,
o.nextSibling)}},t=function(a,b){var c=u();if(!!c){c.open("GET",a,!0),c.onreadystatechange=
function(){c.readyState==4&&(c.status==200||c.status==304)&&b(c.responseText)};if(
c.readyState==4)return;c.send()}},u=function(){var a=!1,b=[function(){return new 
ActiveXObject("Microsoft.XMLHTTP")},function(){return new XMLHttpRequest}],c=b.length
;while(c--){try{a=b[c]()}catch(d){continue}break}return function(){return a}}();n
(),respond.update=n,a.addEventListener?a.addEventListener("resize",c,!1):a.attachEvent&&
a.attachEvent("onresize",c)}}(this,Modernizr.mq("only all")),function(a,b,c){function d
(a){return!a||a=="loaded"||a=="complete"}function e(){var a=1,b=-1;while(p.length- ++
b)if(p[b].s&&!(a=p[b].r))break;a&&h()}function f(a){var c=b.createElement("script"
),f;c.src=a.s,c.onreadystatechange=c.onload=function(){!f&&d(c.readyState)&&(f=1,
e(),c.onload=c.onreadystatechange=null)},m(function(){f||(f=1,e())},H.errorTimeout
),a.e?c.onload():n.parentNode.insertBefore(c,n)}function g(a){var c=b.createElement
("link"),d;c.href=a.s,c.rel="stylesheet",c.type="text/css";if(!a.e&&(w||r)){var f=
function(a){m(function(){if(!d)try{a.sheet.cssRules.length?(d=1,e()):f(a)}catch(b
){b.code==1e3||b.message=="security"||b.message=="denied"?(d=1,m(function(){e()},0
)):f(a)}},0)};f(c)}else c.onload=function(){d||(d=1,m(function(){e()},0))},a.e&&c
.onload();m(function(){d||(d=1,e())},H.errorTimeout),!a.e&&n.parentNode.insertBefore
(c,n)}function h(){var a=p.shift();q=1,a?a.t?m(function(){a.t=="c"?g(a):f(a)},0):
(a(),e()):q=0}function i(a,c,f,g,i,j){function k(){!o&&d(l.readyState)&&(r.r=o=1,!
q&&e(),l.onload=l.onreadystatechange=null,m(function(){u.removeChild(l)},0))}var l=
b.createElement(a),o=0,r={t:f,s:c,e:j};l.src=l.data=c,!s&&(l.style.display="none"
),l.width=l.height="0",a!="object"&&(l.type=f),l.onload=l.onreadystatechange=k,a=="img"?
l.onerror=k:a=="script"&&(l.onerror=function(){r.e=r.r=1,h()}),p.splice(g,0,r),u.
insertBefore(l,s?null:n),m(function(){o||(u.removeChild(l),r.r=r.e=o=1,e())},H.errorTimeout
)}function j(a,b,c){var d=b=="c"?z:y;return q=0,b=b||"j",C(a)?i(d,a,b,this.i++,l,
c):(p.splice(this.i++,0,a),p.length==1&&h()),this}function k(){var a=H;return a.loader=
{load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script"
)[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode
,t=r&&!s,u=s?l:n.parentNode,v=a.opera&&o.call(a.opera)=="[object Opera]",w="webkitAppearance"in 
l.style,x=w&&"async"in b.createElement("script"),y=r?"object":v||x?"img":"script"
,z=w?"img":y,A=Array.isArray||function(a){return o.call(a)=="[object Array]"},B=function(
a){return Object(a)===a},C=function(a){return typeof a=="string"},D=function(a){return o
.call(a)=="[object Function]"},E=[],F={},G,H;H=function(a){function b(a){var b=a.
split("!"),c=E.length,d=b.pop(),e=b.length,f={url:d,origUrl:d,prefixes:b},g,h;for(
h=0;h<e;h++)g=F[b[h]],g&&(f=g(f));for(h=0;h<c;h++)f=E[h](f);return f}function d(a
,d,e,f,g){var h=b(a),i=h.autoCallback;if(!h.bypass){d&&(d=D(d)?d:d[a]||d[f]||d[a.
split("/").pop().split("?")[0]]);if(h.instead)return h.instead(a,d,e,f,g);e.load(
h.url,h.forceCSS||!h.forceJS&&/css$/.test(h.url)?"c":c,h.noexec),(D(d)||D(i))&&e.
load(function(){k(),d&&d(h.origUrl,g,f),i&&i(h.origUrl,g,f)})}}function e(a,b){function c
(a){if(C(a))d(a,h,b,0,e);else if(B(a))for(i in a)a.hasOwnProperty(i)&&d(a[i],h,b,
i,e)}var e=!!a.test,f=e?a.yep:a.nope,g=a.load||a.both,h=a.callback,i;c(f),c(g),a.
complete&&b.load(a.complete)}var f,g,h=this.yepnope.loader;if(C(a))d(a,0,h,0);else if(
A(a))for(f=0;f<a.length;f++)g=a[f],C(g)?d(g,0,h,0):A(g)?H(g):B(g)&&e(g,h);else B(
a)&&e(a,h)},H.addPrefix=function(a,b){F[a]=b},H.addFilter=function(a){E.push(a)},
H.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading"
,b.addEventListener("DOMContentLoaded",G=function(){b.removeEventListener("DOMContentLoaded"
,G,0),b.readyState="complete"},0)),a.yepnope=k()}(this,this.document),Modernizr.load=
function(){yepnope.apply(window,[].slice.call(arguments,0))},function(a,b){function c
(a){return J.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function d
(a){if(!cl[a]){var b=G.body,c=J("<"+a+">").appendTo(b),d=c.css("display");c.remove
();if(d==="none"||d===""){cm||(cm=G.createElement("iframe"),cm.frameBorder=cm.width=
cm.height=0),b.appendChild(cm);if(!cn||!cm.createElement)cn=(cm.contentWindow||cm
.contentDocument).document,cn.write((G.compatMode==="CSS1Compat"?"<!doctype html>"
:"")+"<html><body>"),cn.close();c=cn.createElement(a),cn.body.appendChild(c),d=J.
css(c,"display"),b.removeChild(cm)}cl[a]=d}return cl[a]}function e(a,b){var c={};
return J.each(cr.concat.apply([],cr.slice(0,b)),function(){c[this]=a}),c}function f
(){cs=b}function g(){return setTimeout(f,0),cs=J.now()}function h(){try{return new 
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
.unshift(j),d[j]}function l(a,b,c,d){if(J.isArray(b))J.each(b,function(b,e){c||bO
.test(a)?d(a,e):l(a+"["+(typeof e=="object"||J.isArray(e)?b:"")+"]",e,c,d)});else if(!
c&&b!=null&&typeof b=="object")for(var e in b)l(a+"["+e+"]",b[e],c,d);else d(a,b)
}function m(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h
.length:0,k=a===cb,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||
g[l]?l=b:(c.dataTypes.unshift(l),l=m(a,c,d,e,l,g)));return(k||!l)&&!g["*"]&&(l=m(
a,c,d,e,"*",g)),l}function n(a){return function(b,c){typeof b!="string"&&(c=b,b="*"
);if(J.isFunction(c)){var d=b.toLowerCase().split(bZ),e=0,f=d.length,g,h,i;for(;e<
f;e++)g=d[e],i=/^\+/.test(g),i&&(g=g.substr(1)||"*"),h=a[g]=a[g]||[],h[i?"unshift"
:"push"](c)}}}function o(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=
b==="width"?bI:bJ;if(d>0)return c!=="border"&&J.each(e,function(){c||(d-=parseFloat
(J.css(a,"padding"+this))||0),c==="margin"?d+=parseFloat(J.css(a,c+this))||0:d-=parseFloat
(J.css(a,"border"+this+"Width"))||0}),d+"px";d=bK(a,b,b);if(d<0||d==null)d=a.style
[b]||0;return d=parseFloat(d)||0,c&&J.each(e,function(){d+=parseFloat(J.css(a,"padding"+
this))||0,c!=="padding"&&(d+=parseFloat(J.css(a,"border"+this+"Width"))||0),c==="margin"&&
(d+=parseFloat(J.css(a,c+this))||0)}),d+"px"}function p(a,b){b.src?J.ajax({url:b.
src,async:!1,dataType:"script"}):J.globalEval((b.text||b.textContent||b.innerHTML||""
).replace(by,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function q(a){J
.nodeName(a,"input")?r(a):"getElementsByTagName"in a&&J.grep(a.getElementsByTagName
("input"),r)}function r(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=
a.checked}function s(a){return"getElementsByTagName"in a?a.getElementsByTagName("*"
):"querySelectorAll"in a?a.querySelectorAll("*"):[]}function t(a,b){var c;if(b.nodeType===1
){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),
c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||
a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected
;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&
(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute
(J.expando)}}function u(a,b){if(b.nodeType===1&&!!J.hasData(a)){var c=J.expando,d=
J.data(a),e=J.data(b,d);if(d=d[c]){var f=d.events;e=e[c]=J.extend({},d);if(f){delete 
e.handle,e.events={};for(var g in f)for(var h=0,i=f[g].length;h<i;h++)J.event.add
(b,g+(f[g][h].namespace?".":"")+f[g][h].namespace,f[g][h],f[g][h].data)}}}}function v
(a,b){return J.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild
(a.ownerDocument.createElement("tbody")):a}function w(a,b,c){b=b||0;if(J.isFunction
(b))return J.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType
)return J.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=J.
grep(a,function(a){return a.nodeType===1});if(bl.test(b))return J.filter(b,d,!c);
b=J.filter(b,d)}return J.grep(a,function(a,d){return J.inArray(a,b)>=0===c})}function x
(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function y(a,b){return(a&&
a!=="*"?a+".":"")+b.replace($,"`").replace(_,"&")}function z(a){var b,c,d,e,f,g,h
,i,j,k,l,m,n,o=[],p=[],q=J._data(this,"events");if(!(a.liveFired===this||!q||!q.live||
a.target.disabled||a.button&&a.type==="click")){a.namespace&&(m=new RegExp("(^|\\.)"+
a.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")),a.liveFired=this;var r=q
.live.slice(0);for(h=0;h<r.length;h++)f=r[h],f.origType.replace(Y,"")===a.type?p.
push(f.selector):r.splice(h--,1);e=J(a.target).closest(p,a.currentTarget);for(i=0
,j=e.length;i<j;i++){l=e[i];for(h=0;h<r.length;h++){f=r[h];if(l.selector===f.selector&&
(!m||m.test(f.namespace))&&!l.elem.disabled){g=l.elem,d=null;if(f.preType==="mouseenter"||
f.preType==="mouseleave")a.type=f.preType,d=J(a.relatedTarget).closest(f.selector
)[0],d&&J.contains(g,d)&&(d=g);(!d||d!==g)&&o.push({elem:g,handleObj:f,level:l.level
})}}}for(i=0,j=o.length;i<j;i++){e=o[i];if(c&&e.level>c)break;a.currentTarget=e.elem
,a.data=e.handleObj.data,a.handleObj=e.handleObj,n=e.handleObj.origHandler.apply(
e.elem,arguments);if(n===!1||a.isPropagationStopped()){c=e.level,n===!1&&(b=!1);if(
a.isImmediatePropagationStopped())break}}return b}}function A(a,c,d){var e=J.extend
({},d[0]);e.type=a,e.originalEvent={},e.liveFired=b,J.event.handle.call(c,e),e.isDefaultPrevented
()&&d[0].preventDefault()}function B(){return!0}function C(){return!1}function D(
a,c,d){var e=c+"defer",f=c+"queue",g=c+"mark",h=J.data(a,e,b,!0);h&&(d==="queue"||!
J.data(a,f,b,!0))&&(d==="mark"||!J.data(a,g,b,!0))&&setTimeout(function(){!J.data
(a,f,b,!0)&&!J.data(a,g,b,!0)&&(J.removeData(a,e,!0),h.resolve())},0)}function E(
a){for(var b in a)if(b!=="toJSON")return!1;return!0}function F(a,c,d){if(d===b&&a
.nodeType===1){var e="data-"+c.replace(N,"$1-$2").toLowerCase();d=a.getAttribute(
e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:J.isNaN
(d)?M.test(d)?J.parseJSON(d):d:parseFloat(d)}catch(f){}J.data(a,c,d)}else d=b}return d
}var G=a.document,H=a.navigator,I=a.location,J=function(){function c(){if(!d.isReady
){try{G.documentElement.doScroll("left")}catch(a){setTimeout(c,1);return}d.ready(
)}}var d=function(a,b){return new d.fn.init(a,b,g)},e=a.jQuery,f=a.$,g,h=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/
,i=/\S/,j=/^\s+/,k=/\s+$/,l=/\d/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/
,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g
,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/
,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z])/ig,w=function(
a,b){return b.toUpperCase()},x=H.userAgent,y,z,A,B=Object.prototype.toString,C=Object
.prototype.hasOwnProperty,D=Array.prototype.push,E=Array.prototype.slice,F=String
.prototype.trim,I=Array.prototype.indexOf,J={};return d.fn=d.prototype={constructor
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
,d.makeArray(a,this))},selector:"",jquery:"1.6.2",length:0,size:function(){return this
.length},toArray:function(){return E.call(this,0)},get:function(a){return a==null?
this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var e=this
.constructor();return d.isArray(a)?D.apply(e,a):d.merge(e,a),e.prevObject=this,e.
context=this.context,b==="find"?e.selector=this.selector+(this.selector?" ":"")+c
:b&&(e.selector=this.selector+"."+b+"("+c+")"),e},each:function(a,b){return d.each
(this,a,b)},ready:function(a){return d.bindReady(),z.done(a),this},eq:function(a)
{return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0
)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(E.apply
(this,arguments),"slice",E.call(arguments).join(","))},map:function(a){return this
.pushStack(d.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this
.prevObject||this.constructor(null)},push:D,sort:[].sort,splice:[].splice},d.fn.init
.prototype=d.fn,d.extend=d.fn.extend=function(){var a,c,e,f,g,h,i=arguments[0]||{
},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof 
i!="object"&&!d.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments
[j])!=null)for(c in a){e=i[c],f=a[c];if(i===f)continue;l&&f&&(d.isPlainObject(f)||
(g=d.isArray(f)))?(g?(g=!1,h=e&&d.isArray(e)?e:[]):h=e&&d.isPlainObject(e)?e:{},i
[c]=d.extend(l,h,f)):f!==b&&(i[c]=f)}return i},d.extend({noConflict:function(b){return a
.$===d&&(a.$=f),b&&a.jQuery===d&&(a.jQuery=e),d},isReady:!1,readyWait:1,holdReady
:function(a){a?d.readyWait++:d.ready(!0)},ready:function(a){if(a===!0&&!--d.readyWait||
a!==!0&&!d.isReady){if(!G.body)return setTimeout(d.ready,1);d.isReady=!0;if(a!==!0&&--
d.readyWait>0)return;z.resolveWith(G,[d]),d.fn.trigger&&d(G).trigger("ready").unbind
("ready")}},bindReady:function(){if(!z){z=d._Deferred();if(G.readyState==="complete"
)return setTimeout(d.ready,1);if(G.addEventListener)G.addEventListener("DOMContentLoaded"
,A,!1),a.addEventListener("load",d.ready,!1);else if(G.attachEvent){G.attachEvent
("onreadystatechange",A),a.attachEvent("onload",d.ready);var b=!1;try{b=a.frameElement==
null}catch(e){}G.documentElement.doScroll&&b&&c()}}},isFunction:function(a){return d
.type(a)==="function"},isArray:Array.isArray||function(a){return d.type(a)==="array"
},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNaN:function(
a){return a==null||!l.test(a)||isNaN(a)},type:function(a){return a==null?String(a
):J[B.call(a)]||"object"},isPlainObject:function(a){if(!a||d.type(a)!=="object"||
a.nodeType||d.isWindow(a))return!1;if(a.constructor&&!C.call(a,"constructor")&&!C
.call(a.constructor.prototype,"isPrototypeOf"))return!1;var c;for(c in a);return c===
b||C.call(a,c)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error
:function(a){throw a},parseJSON:function(b){if(typeof b!="string"||!b)return null
;b=d.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o
,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();d.error("Invalid JSON: "+
b)},parseXML:function(b,c,e){return a.DOMParser?(e=new DOMParser,c=e.parseFromString
(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML
(b)),e=c.documentElement,(!e||!e.nodeName||e.nodeName==="parsererror")&&d.error("Invalid XML: "+
b),c},noop:function(){},globalEval:function(b){b&&i.test(b)&&(a.execScript||function(
b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(v,w)},nodeName:function(
a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(
a,c,e){var f,g=0,h=a.length,i=h===b||d.isFunction(a);if(e){if(i){for(f in a)if(c.
apply(a[f],e)===!1)break}else for(;g<h;)if(c.apply(a[g++],e)===!1)break}else if(i
){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[
g++])===!1)break;return a},trim:F?function(a){return a==null?"":F.call(a)}:function(
a){return a==null?"":(a+"").replace(j,"").replace(k,"")},makeArray:function(a,b){
var c=b||[];if(a!=null){var e=d.type(a);a.length==null||e==="string"||e==="function"||
e==="regexp"||d.isWindow(a)?D.call(c,a):d.merge(c,a)}return c},inArray:function(a
,b){if(I)return I.call(b,a);for(var c=0,d=b.length;c<d;c++)if(b[c]===a)return c;return-1
},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c
.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];return a.length=d,a
},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f]
,f),c!==e&&d.push(a[f]);return d},map:function(a,c,e){var f,g,h=[],i=0,j=a.length
,k=a instanceof d||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||d.isArray
(a));if(k)for(;i<j;i++)f=c(a[i],i,e),f!=null&&(h[h.length]=f);else for(g in a)f=c
(a[g],g,e),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(
a,c){if(typeof c=="string"){var e=a[c];c=a,a=e}if(!d.isFunction(a))return b;var f=
E.call(arguments,2),g=function(){return a.apply(c,f.concat(E.call(arguments)))};return g
.guid=a.guid=a.guid||g.guid||d.guid++,g},access:function(a,c,e,f,g,h){var i=a.length
;if(typeof c=="object"){for(var j in c)d.access(a,j,c[j],f,g,e);return a}if(e!==b
){f=!h&&f&&d.isFunction(e);for(var k=0;k<i;k++)g(a[k],c,f?e.call(a[k],k,g(a[k],c)
):e,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},
uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf
("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(
){function a(b,c){return new a.fn.init(b,c)}d.extend(!0,a,this),a.superclass=this
,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(c,e
){return e&&e instanceof d&&!(e instanceof a)&&(e=a(e)),d.fn.init.call(this,c,e,b
)},a.fn.init.prototype=a.fn;var b=a(G);return a},browser:{}}),d.each("Boolean Number String Function Array Date RegExp Object"
.split(" "),function(a,b){J["[object "+b+"]"]=b.toLowerCase()}),y=d.uaMatch(x),y.
browser&&(d.browser[y.browser]=!0,d.browser.version=y.version),d.browser.webkit&&
(d.browser.safari=!0),i.test(" ")&&(j=/^[\s\xA0]+/,k=/[\s\xA0]+$/),g=d(G),G.addEventListener?
A=function(){G.removeEventListener("DOMContentLoaded",A,!1),d.ready()}:G.attachEvent&&
(A=function(){G.readyState==="complete"&&(G.detachEvent("onreadystatechange",A),d
.ready())}),d}(),K="done fail isResolved isRejected promise then always pipe".split
(" "),L=[].slice;J.extend({_Deferred:function(){var a=[],b,c,d,e={done:function()
{if(!d){var c=arguments,f,g,h,i,j;b&&(j=b,b=0);for(f=0,g=c.length;f<g;f++)h=c[f],
i=J.type(h),i==="array"?e.done.apply(e,h):i==="function"&&a.push(h);j&&e.resolveWith
(j[0],j[1])}return this},resolveWith:function(e,f){if(!d&&!b&&!c){f=f||[],c=1;try{
while(a[0])a.shift().apply(e,f)}finally{b=[e,f],c=0}}return this},resolve:function(
){return e.resolveWith(this,arguments),this},isResolved:function(){return!!c||!!b
},cancel:function(){return d=1,a=[],this}};return e},Deferred:function(a){var b=J
._Deferred(),c=J._Deferred(),d;return J.extend(b,{then:function(a,c){return b.done
(a).fail(c),this},always:function(){return b.done.apply(b,arguments).fail.apply(this
,arguments)},fail:c.done,rejectWith:c.resolveWith,reject:c.resolve,isRejected:c.isResolved
,pipe:function(a,c){return J.Deferred(function(d){J.each({done:[a,"resolve"],fail
:[c,"reject"]},function(a,c){var e=c[0],f=c[1],g;J.isFunction(e)?b[a](function(){
g=e.apply(this,arguments),g&&J.isFunction(g.promise)?g.promise().then(d.resolve,d
.reject):d[f](g)}):b[a](d[f])})}).promise()},promise:function(a){if(a==null){if(d
)return d;d=a={}}var c=K.length;while(c--)a[K[c]]=b[K[c]];return a}}),b.done(c.cancel
).fail(b.cancel),delete b.cancel,a&&a.call(b,b),b},when:function(a){function b(a)
{return function(b){c[a]=arguments.length>1?L.call(arguments,0):b,--f||g.resolveWith
(g,L.call(c,0))}}var c=arguments,d=0,e=c.length,f=e,g=e<=1&&a&&J.isFunction(a.promise
)?a:J.Deferred();if(e>1){for(;d<e;d++)c[d]&&J.isFunction(c[d].promise)?c[d].promise
().then(b(d),g.reject):--f;f||g.resolveWith(g,c)}else g!==a&&g.resolveWith(g,e?[a
]:[]);return g.promise()}}),J.support=function(){var a=G.createElement("div"),b=G
.documentElement,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;a.setAttribute("className","t"
),a.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>"
,c=a.getElementsByTagName("*"),d=a.getElementsByTagName("a")[0];if(!c||!c.length||!
d)return{};e=G.createElement("select"),f=e.appendChild(G.createElement("option"))
,g=a.getElementsByTagName("input")[0],i={leadingWhitespace:a.firstChild.nodeType===3
,tbody:!a.getElementsByTagName("tbody").length,htmlSerialize:!!a.getElementsByTagName
("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute
("href")==="/a",opacity:/^0.55$/.test(d.style.opacity),cssFloat:!!d.style.cssFloat
,checkOn:g.value==="on",optSelected:f.selected,getSetAttribute:a.className!=="t",
submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent
:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},g.checked=!0
,i.noCloneChecked=g.cloneNode(!0).checked,e.disabled=!0,i.optDisabled=!f.disabled
;try{delete a.test}catch(t){i.deleteExpando=!1}!a.addEventListener&&a.attachEvent&&
a.fireEvent&&(a.attachEvent("onclick",function(){i.noCloneEvent=!1}),a.cloneNode(!0
).fireEvent("onclick")),g=G.createElement("input"),g.value="t",g.setAttribute("type"
,"radio"),i.radioValue=g.value==="t",g.setAttribute("checked","checked"),a.appendChild
(g),j=G.createDocumentFragment(),j.appendChild(a.firstChild),i.checkClone=j.cloneNode
(!0).cloneNode(!0).lastChild.checked,a.innerHTML="",a.style.width=a.style.paddingLeft="1px"
,k=G.getElementsByTagName("body")[0],m=G.createElement(k?"div":"body"),n={visibility
:"hidden",width:0,height:0,border:0,margin:0},k&&J.extend(n,{position:"absolute",
left:-1e3,top:-1e3});for(r in n)m.style[r]=n[r];m.appendChild(a),l=k||b,l.insertBefore
(m,l.firstChild),i.appendChecked=g.checked,i.boxModel=a.offsetWidth===2,"zoom"in 
a.style&&(a.style.display="inline",a.style.zoom=1,i.inlineBlockNeedsLayout=a.offsetWidth===2
,a.style.display="",a.innerHTML="<div style='width:4px;'></div>",i.shrinkWrapBlocks=
a.offsetWidth!==2),a.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>"
,o=a.getElementsByTagName("td"),s=o[0].offsetHeight===0,o[0].style.display="",o[1
].style.display="none",i.reliableHiddenOffsets=s&&o[0].offsetHeight===0,a.innerHTML=""
,G.defaultView&&G.defaultView.getComputedStyle&&(h=G.createElement("div"),h.style
.width="0",h.style.marginRight="0",a.appendChild(h),i.reliableMarginRight=(parseInt
((G.defaultView.getComputedStyle(h,null)||{marginRight:0}).marginRight,10)||0)===0
),m.innerHTML="",l.removeChild(m);if(a.attachEvent)for(r in{submit:1,change:1,focusin
:1})q="on"+r,s=q in a,s||(a.setAttribute(q,"return;"),s=typeof a[q]=="function"),
i[r+"Bubbles"]=s;return m=j=e=f=k=h=a=g=null,i}(),J.boxModel=J.support.boxModel;var M=/^(?:\{.*\}|\[.*\])$/
,N=/([a-z])([A-Z])/g;J.extend({cache:{},uuid:0,expando:"jQuery"+(J.fn.jquery+Math
.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
,applet:!0},hasData:function(a){return a=a.nodeType?J.cache[a[J.expando]]:a[J.expando
],!!a&&!E(a)},data:function(a,c,d,e){if(!!J.acceptData(a)){var f=J.expando,g=typeof 
c=="string",h,i=a.nodeType,j=i?J.cache:a,k=i?a[J.expando]:a[J.expando]&&J.expando
;if((!k||e&&k&&!j[k][f])&&g&&d===b)return;k||(i?a[J.expando]=k=++J.uuid:k=J.expando
),j[k]||(j[k]={},i||(j[k].toJSON=J.noop));if(typeof c=="object"||typeof c=="function"
)e?j[k][f]=J.extend(j[k][f],c):j[k]=J.extend(j[k],c);return h=j[k],e&&(h[f]||(h[f
]={}),h=h[f]),d!==b&&(h[J.camelCase(c)]=d),c==="events"&&!h[c]?h[f]&&h[f].events:
g?h[J.camelCase(c)]||h[c]:h}},removeData:function(b,c,d){if(!!J.acceptData(b)){var e=
J.expando,f=b.nodeType,g=f?J.cache:b,h=f?b[J.expando]:J.expando;if(!g[h])return;if(
c){var i=d?g[h][e]:g[h];if(i){delete i[c];if(!E(i))return}}if(d){delete g[h][e];if(!
E(g[h]))return}var j=g[h][e];J.support.deleteExpando||g!=a?delete g[h]:g[h]=null,
j?(g[h]={},f||(g[h].toJSON=J.noop),g[h][e]=j):f&&(J.support.deleteExpando?delete 
b[J.expando]:b.removeAttribute?b.removeAttribute(J.expando):b[J.expando]=null)}},
_data:function(a,b,c){return J.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName
){var b=J.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid"
)===b}return!0}}),J.fn.extend({data:function(a,c){var d=null;if(typeof a=="undefined"
){if(this.length){d=J.data(this[0]);if(this[0].nodeType===1){var e=this[0].attributes
,f;for(var g=0,h=e.length;g<h;g++)f=e[g].name,f.indexOf("data-")===0&&(f=J.camelCase
(f.substring(5)),F(this[0],f,d[f]))}}return d}if(typeof a=="object")return this.each
(function(){J.data(this,a)});var i=a.split(".");return i[1]=i[1]?"."+i[1]:"",c===
b?(d=this.triggerHandler("getData"+i[1]+"!",[i[0]]),d===b&&this.length&&(d=J.data
(this[0],a),d=F(this[0],a,d)),d===b&&i[1]?this.data(i[0]):d):this.each(function()
{var b=J(this),d=[i[0],c];b.triggerHandler("setData"+i[1]+"!",d),J.data(this,a,c)
,b.triggerHandler("changeData"+i[1]+"!",d)})},removeData:function(a){return this.
each(function(){J.removeData(this,a)})}}),J.extend({_mark:function(a,c){a&&(c=(c||"fx"
)+"mark",J.data(a,c,(J.data(a,c,b,!0)||0)+1,!0))},_unmark:function(a,c,d){a!==!0&&
(d=c,c=a,a=!1);if(c){d=d||"fx";var e=d+"mark",f=a?0:(J.data(c,e,b,!0)||1)-1;f?J.data
(c,e,f,!0):(J.removeData(c,e,!0),D(c,d,"mark"))}},queue:function(a,c,d){if(a){c=(
c||"fx")+"queue";var e=J.data(a,c,b,!0);return d&&(!e||J.isArray(d)?e=J.data(a,c,
J.makeArray(d),!0):e.push(d)),e||[]}},dequeue:function(a,b){b=b||"fx";var c=J.queue
(a,b),d=c.shift(),e;d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"
),d.call(a,function(){J.dequeue(a,b)})),c.length||(J.removeData(a,b+"queue",!0),D
(a,b,"queue"))}}),J.fn.extend({queue:function(a,c){return typeof a!="string"&&(c=
a,a="fx"),c===b?J.queue(this[0],a):this.each(function(){var b=J.queue(this,a,c);a==="fx"&&
b[0]!=="inprogress"&&J.dequeue(this,a)})},dequeue:function(a){return this.each(function(
){J.dequeue(this,a)})},delay:function(a,b){return a=J.fx?J.fx.speeds[a]||a:a,b=b||"fx"
,this.queue(b,function(){var c=this;setTimeout(function(){J.dequeue(c,b)},a)})},clearQueue
:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function d(){--
h||e.resolveWith(f,[f])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var e=J.Deferred(
),f=this,g=f.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=J.data
(f[g],i,b,!0)||(J.data(f[g],j,b,!0)||J.data(f[g],k,b,!0))&&J.data(f[g],i,J._Deferred
(),!0))h++,l.done(d);return d(),e.promise()}});var O=/[\n\t\r]/g,P=/\s+/,Q=/\r/g,
R=/^(?:button|input)$/i,S=/^(?:button|input|object|select|textarea)$/i,T=/^a(?:rea)?$/i
,U=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i
,V=/\:|^on/,W,X;J.fn.extend({attr:function(a,b){return J.access(this,a,b,!0,J.attr
)},removeAttr:function(a){return this.each(function(){J.removeAttr(this,a)})},prop
:function(a,b){return J.access(this,a,b,!0,J.prop)},removeProp:function(a){return a=
J.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass
:function(a){var b,c,d,e,f,g,h;if(J.isFunction(a))return this.each(function(b){J(
this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split
(P);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b
.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)~
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
a){var b=" "+a+" ";for(var c=0,d=this.length;c<d;c++)if((" "+this[c].className+" "
).replace(O," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e=this[0
];if(!arguments.length)return e?(c=J.valHooks[e.nodeName.toLowerCase()]||J.valHooks
[e.type],c&&"get"in c&&(d=c.get(e,"value"))!==b?d:(d=e.value,typeof d=="string"?d
.replace(Q,""):d==null?"":d)):b;var f=J.isFunction(a);return this.each(function(d
){var e=J(this),g;if(this.nodeType===1){f?g=a.call(this,d,e.val()):g=a,g==null?g=""
:typeof g=="number"?g+="":J.isArray(g)&&(g=J.map(g,function(a){return a==null?"":
a+""})),c=J.valHooks[this.nodeName.toLowerCase()]||J.valHooks[this.type];if(!c||!
("set"in c)||c.set(this,g,"value")===b)this.value=g}})}}),J.extend({valHooks:{option
:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}}
,select:{get:function(a){var b,c=a.selectedIndex,d=[],e=a.options,f=a.type==="select-one"
;if(c<0)return null;for(var g=f?c:0,h=f?c+1:e.length;g<h;g++){var i=e[g];if(i.selected&&
(J.support.optDisabled?!i.disabled:i.getAttribute("disabled")===null)&&(!i.parentNode
.disabled||!J.nodeName(i.parentNode,"optgroup"))){b=J(i).val();if(f)return b;d.push
(b)}}return f&&!d.length&&e.length?J(e[c]).val():d},set:function(a,b){var c=J.makeArray
(b);return J(a).find("option").each(function(){this.selected=J.inArray(J(this).val
(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{val:!0,css:!0,html:!0,text
:!0,data:!0,width:!0,height:!0,offset:!0},attrFix:{tabindex:"tabIndex"},attr:function(
a,c,d,e){var f=a.nodeType;if(!a||f===3||f===8||f===2)return b;if(e&&c in J.attrFn
)return J(a)[c](d);if("getAttribute"in a){var g,h,i=f!==1||!J.isXMLDoc(a);return i&&
(c=J.attrFix[c]||c,h=J.attrHooks[c],h||(U.test(c)?h=X:W&&c!=="className"&&(J.nodeName
(a,"form")||V.test(c))&&(h=W))),d!==b?d===null?(J.removeAttr(a,c),b):h&&"set"in h&&
i&&(g=h.set(a,d,c))!==b?g:(a.setAttribute(c,""+d),d):h&&"get"in h&&i&&(g=h.get(a,
c))!==null?g:(g=a.getAttribute(c),g===null?b:g)}return J.prop(a,c,d)},removeAttr:
function(a,b){var c;a.nodeType===1&&(b=J.attrFix[b]||b,J.support.getSetAttribute?
a.removeAttribute(b):(J.attr(a,b,""),a.removeAttributeNode(a.getAttributeNode(b))
),U.test(b)&&(c=J.propFix[b]||b)in a&&(a[c]=!1))},attrHooks:{type:{set:function(a
,b){if(R.test(a.nodeName)&&a.parentNode)J.error("type property can't be changed")
;else if(!J.support.radioValue&&b==="radio"&&J.nodeName(a,"input")){var c=a.value
;return a.setAttribute("type",b),c&&(a.value=c),b}}},tabIndex:{get:function(a){var c=
a.getAttributeNode("tabIndex");return c&&c.specified?parseInt(c.value,10):S.test(
a.nodeName)||T.test(a.nodeName)&&a.href?0:b}},value:{get:function(a,b){return W&&
J.nodeName(a,"button")?W.get(a,b):b in a?a.value:null},set:function(a,b,c){if(W&&
J.nodeName(a,"button"))return W.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex"
,readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing
:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap
:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(
a,c,d){var e=a.nodeType;if(!a||e===3||e===8||e===2)return b;var f,g,h=e!==1||!J.isXMLDoc
(a);return h&&(c=J.propFix[c]||c,g=J.propHooks[c]),d!==b?g&&"set"in g&&(f=g.set(a
,d,c))!==b?f:a[c]=d:g&&"get"in g&&(f=g.get(a,c))!==b?f:a[c]},propHooks:{}}),X={get
:function(a,c){return J.prop(a,c)?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?
J.removeAttr(a,c):(d=J.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase
())),c}},J.support.getSetAttribute||(J.attrFix=J.propFix,W=J.attrHooks.name=J.attrHooks
.title=J.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),
d&&d.nodeValue!==""?d.nodeValue:b},set:function(a,b,c){var d=a.getAttributeNode(c
);if(d)return d.nodeValue=b,b}},J.each(["width","height"],function(a,b){J.attrHooks
[b]=J.extend(J.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"
),c}})})),J.support.hrefNormalized||J.each(["href","src","width","height"],function(
a,c){J.attrHooks[c]=J.extend(J.attrHooks[c],{get:function(a){var d=a.getAttribute
(c,2);return d===null?b:d}})}),J.support.style||(J.attrHooks.style={get:function(
a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+
b}}),J.support.optSelected||(J.propHooks.selected=J.extend(J.propHooks.selected,{
get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode
.selectedIndex)}})),J.support.checkOn||J.each(["radio","checkbox"],function(){J.valHooks
[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),J.
each(["radio","checkbox"],function(){J.valHooks[this]=J.extend(J.valHooks[this],{
set:function(a,b){if(J.isArray(b))return a.checked=J.inArray(J(a).val(),b)>=0}})}
);var Y=/\.(.*)$/,Z=/^(?:textarea|input|select)$/i,$=/\./g,_=/ /g,ba=/[^\w\s.|`]/g
,bb=function(a){return a.replace(ba,"\\$&")};J.event={add:function(a,c,d,e){if(a.
nodeType!==3&&a.nodeType!==8){if(d===!1)d=C;else if(!d)return;var f,g;d.handler&&
(f=d,d=f.handler),d.guid||(d.guid=J.guid++);var h=J._data(a);if(!h)return;var i=h
.events,j=h.handle;i||(h.events=i={}),j||(h.handle=j=function(a){return typeof J=="undefined"||!!
a&&J.event.triggered===a.type?b:J.event.handle.apply(j.elem,arguments)}),j.elem=a
,c=c.split(" ");var k,l=0,m;while(k=c[l++]){g=f?J.extend({},f):{handler:d,data:e}
,k.indexOf(".")>-1?(m=k.split("."),k=m.shift(),g.namespace=m.slice(0).sort().join
(".")):(m=[],g.namespace=""),g.type=k,g.guid||(g.guid=d.guid);var n=i[k],o=J.event
.special[k]||{};if(!n){n=i[k]=[];if(!o.setup||o.setup.call(a,e,m,j)===!1)a.addEventListener?
a.addEventListener(k,j,!1):a.attachEvent&&a.attachEvent("on"+k,j)}o.add&&(o.add.call
(a,g),g.handler.guid||(g.handler.guid=d.guid)),n.push(g),J.event.global[k]=!0}a=null
}},global:{},remove:function(a,c,d,e){if(a.nodeType!==3&&a.nodeType!==8){d===!1&&
(d=C);var f,g,h,i,j=0,k,l,m,n,o,p,q,r=J.hasData(a)&&J._data(a),s=r&&r.events;if(!
r||!s)return;c&&c.type&&(d=c.handler,c=c.type);if(!c||typeof c=="string"&&c.charAt
(0)==="."){c=c||"";for(g in s)J.event.remove(a,g+c);return}c=c.split(" ");while(g=
c[j++]){q=g,p=null,k=g.indexOf(".")<0,l=[],k||(l=g.split("."),g=l.shift(),m=new RegExp
("(^|\\.)"+J.map(l.slice(0).sort(),bb).join("\\.(?:.*\\.)?")+"(\\.|$)")),o=s[g];if(!
o)continue;if(!d){for(i=0;i<o.length;i++){p=o[i];if(k||m.test(p.namespace))J.event
.remove(a,q,p.handler,i),o.splice(i--,1)}continue}n=J.event.special[g]||{};for(i=
e||0;i<o.length;i++){p=o[i];if(d.guid===p.guid){if(k||m.test(p.namespace))e==null&&
o.splice(i--,1),n.remove&&n.remove.call(a,p);if(e!=null)break}}if(o.length===0||e!=
null&&o.length===1)(!n.teardown||n.teardown.call(a,l)===!1)&&J.removeEvent(a,g,r.
handle),f=null,delete s[g]}if(J.isEmptyObject(s)){var t=r.handle;t&&(t.elem=null)
,delete r.events,delete r.handle,J.isEmptyObject(r)&&J.removeData(a,b,!0)}}},customEvent
:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,f){var g=c.type||c,
h=[],i;g.indexOf("!")>=0&&(g=g.slice(0,-1),i=!0),g.indexOf(".")>=0&&(h=g.split("."
),g=h.shift(),h.sort());if(!!e&&!J.event.customEvent[g]||!!J.event.global[g]){c=typeof 
c=="object"?c[J.expando]?c:new J.Event(g,c):new J.Event(g),c.type=g,c.exclusive=i
,c.namespace=h.join("."),c.namespace_re=new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.)?"
)+"(\\.|$)");if(f||!e)c.preventDefault(),c.stopPropagation();if(!e){J.each(J.cache
,function(){var a=J.expando,b=this[a];b&&b.events&&b.events[g]&&J.event.trigger(c
,d,b.handle.elem)});return}if(e.nodeType===3||e.nodeType===8)return;c.result=b,c.
target=e,d=d!=null?J.makeArray(d):[],d.unshift(c);var j=e,k=g.indexOf(":")<0?"on"+
g:"";do{var l=J._data(j,"handle");c.currentTarget=j,l&&l.apply(j,d),k&&J.acceptData
(j)&&j[k]&&j[k].apply(j,d)===!1&&(c.result=!1,c.preventDefault()),j=j.parentNode||
j.ownerDocument||j===c.target.ownerDocument&&a}while(j&&!c.isPropagationStopped()
);if(!c.isDefaultPrevented()){var m,n=J.event.special[g]||{};if((!n._default||n._default
.call(e.ownerDocument,c)===!1)&&(g!=="click"||!J.nodeName(e,"a"))&&J.acceptData(e
)){try{k&&e[g]&&(m=e[k],m&&(e[k]=null),J.event.triggered=g,e[g]())}catch(o){}m&&(
e[k]=m),J.event.triggered=b}}return c.result}},handle:function(c){c=J.event.fix(c||
a.event);var d=((J._data(this,"events")||{})[c.type]||[]).slice(0),e=!c.exclusive&&!
c.namespace,f=Array.prototype.slice.call(arguments,0);f[0]=c,c.currentTarget=this
;for(var g=0,h=d.length;g<h;g++){var i=d[g];if(e||c.namespace_re.test(i.namespace
)){c.handler=i.handler,c.data=i.data,c.handleObj=i;var j=i.handler.apply(this,f);
j!==b&&(c.result=j,j===!1&&(c.preventDefault(),c.stopPropagation()));if(c.isImmediatePropagationStopped
())break}}return c.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which"
.split(" "),fix:function(a){if(a[J.expando])return a;var c=a;a=J.Event(c);for(var d=
this.props.length,e;d;)e=this.props[--d],a[e]=c[e];a.target||(a.target=a.srcElement||
G),a.target.nodeType===3&&(a.target=a.target.parentNode),!a.relatedTarget&&a.fromElement&&
(a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement);if(a.pageX==
null&&a.clientX!=null){var f=a.target.ownerDocument||G,g=f.documentElement,h=f.body
;a.pageX=a.clientX+(g&&g.scrollLeft||h&&h.scrollLeft||0)-(g&&g.clientLeft||h&&h.clientLeft||0
),a.pageY=a.clientY+(g&&g.scrollTop||h&&h.scrollTop||0)-(g&&g.clientTop||h&&h.clientTop||0
)}return a.which==null&&(a.charCode!=null||a.keyCode!=null)&&(a.which=a.charCode!=
null?a.charCode:a.keyCode),!a.metaKey&&a.ctrlKey&&(a.metaKey=a.ctrlKey),!a.which&&
a.button!==b&&(a.which=a.button&1?1:a.button&2?3:a.button&4?2:0),a},guid:1e8,proxy
:J.proxy,special:{ready:{setup:J.bindReady,teardown:J.noop},live:{add:function(a)
{J.event.add(this,y(a.origType,a.selector),J.extend({},a,{handler:z,guid:a.handler
.guid}))},remove:function(a){J.event.remove(this,y(a.origType,a.selector),a)}},beforeunload
:{setup:function(a,b,c){J.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(
a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}}},J.removeEvent=G.removeEventListener?
function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,
b,c){a.detachEvent&&a.detachEvent("on"+b,c)},J.Event=function(a,b){if(!this.preventDefault
)return new J.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=
a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault(
)?B:C):this.type=a,b&&J.extend(this,b),this.timeStamp=J.now(),this[J.expando]=!0}
,J.Event.prototype={preventDefault:function(){this.isDefaultPrevented=B;var a=this
.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation
:function(){this.isPropagationStopped=B;var a=this.originalEvent;!a||(a.stopPropagation&&
a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.
isImmediatePropagationStopped=B,this.stopPropagation()},isDefaultPrevented:C,isPropagationStopped
:C,isImmediatePropagationStopped:C};var bc=function(a){var b=a.relatedTarget,c=!1
,d=a.type;a.type=a.data,b!==this&&(b&&(c=J.contains(this,b)),c||(J.event.handle.apply
(this,arguments),a.type=d))},bd=function(a){a.type=a.data,J.event.handle.apply(this
,arguments)};J.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){
J.event.special[a]={setup:function(c){J.event.add(this,b,c&&c.selector?bd:bc,a)},
teardown:function(a){J.event.remove(this,b,a&&a.selector?bd:bc)}}}),J.support.submitBubbles||
(J.event.special.submit={setup:function(a,b){if(!J.nodeName(this,"form"))J.event.
add(this,"click.specialSubmit",function(a){var b=a.target,c=b.type;(c==="submit"||
c==="image")&&J(b).closest("form").length&&A("submit",this,arguments)}),J.event.add
(this,"keypress.specialSubmit",function(a){var b=a.target,c=b.type;(c==="text"||c==="password"
)&&J(b).closest("form").length&&a.keyCode===13&&A("submit",this,arguments)});else return!1
},teardown:function(a){J.event.remove(this,".specialSubmit")}});if(!J.support.changeBubbles
){var be,bf=function(a){var b=a.type,c=a.value;return b==="radio"||b==="checkbox"?
c=a.checked:b==="select-multiple"?c=a.selectedIndex>-1?J.map(a.options,function(a
){return a.selected}).join("-"):"":J.nodeName(a,"select")&&(c=a.selectedIndex),c}
,bg=function(a){var c=a.target,d,e;if(!!Z.test(c.nodeName)&&!c.readOnly){d=J._data
(c,"_change_data"),e=bf(c),(a.type!=="focusout"||c.type!=="radio")&&J._data(c,"_change_data"
,e);if(d===b||e===d)return;if(d!=null||e)a.type="change",a.liveFired=b,J.event.trigger
(a,arguments[1],c)}};J.event.special.change={filters:{focusout:bg,beforedeactivate
:bg,click:function(a){var b=a.target,c=J.nodeName(b,"input")?b.type:"";(c==="radio"||
c==="checkbox"||J.nodeName(b,"select"))&&bg.call(this,a)},keydown:function(a){var b=
a.target,c=J.nodeName(b,"input")?b.type:"";(a.keyCode===13&&!J.nodeName(b,"textarea"
)||a.keyCode===32&&(c==="checkbox"||c==="radio")||c==="select-multiple")&&bg.call
(this,a)},beforeactivate:function(a){var b=a.target;J._data(b,"_change_data",bf(b
))}},setup:function(a,b){if(this.type==="file")return!1;for(var c in be)J.event.add
(this,c+".specialChange",be[c]);return Z.test(this.nodeName)},teardown:function(a
){return J.event.remove(this,".specialChange"),Z.test(this.nodeName)}},be=J.event
.special.change.filters,be.focus=be.beforeactivate}J.support.focusinBubbles||J.each
({focus:"focusin",blur:"focusout"},function(a,b){function c(a){var c=J.event.fix(
a);c.type=b,c.originalEvent={},J.event.trigger(c,null,c.target),c.isDefaultPrevented
()&&a.preventDefault()}var d=0;J.event.special[b]={setup:function(){d++===0&&G.addEventListener
(a,c,!0)},teardown:function(){--d===0&&G.removeEventListener(a,c,!0)}}}),J.each(["bind"
,"one"],function(a,c){J.fn[c]=function(a,d,e){var f;if(typeof a=="object"){for(var g in 
a)this[c](g,d,a[g],e);return this}if(arguments.length===2||d===!1)e=d,d=b;c==="one"?
(f=function(a){return J(this).unbind(a,f),e.apply(this,arguments)},f.guid=e.guid||
J.guid++):f=e;if(a==="unload"&&c!=="one")this.one(a,d,e);else for(var h=0,i=this.
length;h<i;h++)J.event.add(this[h],a,f,d);return this}}),J.fn.extend({unbind:function(
a,b){if(typeof a=="object"&&!a.preventDefault)for(var c in a)this.unbind(c,a[c]);
else for(var d=0,e=this.length;d<e;d++)J.event.remove(this[d],a,b);return this},delegate
:function(a,b,c,d){return this.live(b,c,d,a)},undelegate:function(a,b,c){return arguments
.length===0?this.unbind("live"):this.die(b,null,c,a)},trigger:function(a,b){return this
.each(function(){J.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this
[0])return J.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=
a.guid||J.guid++,d=0,e=function(c){var e=(J.data(this,"lastToggle"+a.guid)||0)%d;
return J.data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments
)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(
a,b){return this.mouseenter(a).mouseleave(b||a)}});var bh={focus:"focusin",blur:"focusout"
,mouseenter:"mouseover",mouseleave:"mouseout"};J.each(["live","die"],function(a,c
){J.fn[c]=function(a,d,e,f){var g,h=0,i,j,k,l=f||this.selector,m=f?this:J(this.context
);if(typeof a=="object"&&!a.preventDefault){for(var n in a)m[c](n,d,a[n],l);return this
}if(c==="die"&&!a&&f&&f.charAt(0)===".")return m.unbind(f),this;if(d===!1||J.isFunction
(d))e=d||C,d=b;a=(a||"").split(" ");while((g=a[h++])!=null){i=Y.exec(g),j="",i&&(
j=i[0],g=g.replace(Y,""));if(g==="hover"){a.push("mouseenter"+j,"mouseleave"+j);continue}
k=g,bh[g]?(a.push(bh[g]+j),g+=j):g=(bh[g]||g)+j;if(c==="live")for(var o=0,p=m.length
;o<p;o++)J.event.add(m[o],"live."+y(g,l),{data:d,selector:l,handler:e,origType:g,
origHandler:e,preType:k});else m.unbind("live."+y(g,l),e)}return this}}),J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error"
.split(" "),function(a,b){J.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments
.length>0?this.bind(b,a,c):this.trigger(b)},J.attrFn&&(J.attrFn[b]=!0)}),function(
){function a(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1
;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}if(i.nodeType===1){f||(i.
sizcache=c,i.sizset=g);if(typeof b!="string"){if(i===b){j=!0;break}}else if(k.filter
(b,[i]).length>0){j=i;break}}i=i[a]}d[g]=j}}}function c(a,b,c,d,e,f){for(var g=0,
h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){
j=d[i.sizset];break}i.nodeType===1&&!f&&(i.sizcache=c,i.sizset=g);if(i.nodeName.toLowerCase
()===b){j=i;break}i=i[a]}d[g]=j}}}var d=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g
,e=0,f=Object.prototype.toString,g=!1,h=!0,i=/\\/g,j=/\W/;[0,0].sort(function(){return h=!1
,0});var k=function(a,b,c,e){c=c||[],b=b||G;var g=b;if(b.nodeType!==1&&b.nodeType!==9
)return[];if(!a||typeof a!="string")return c;var h,i,j,n,o,q,r,s,u=!0,v=k.isXML(b
),w=[],x=a;do{d.exec(""),h=d.exec(x);if(h){x=h[3],w.push(h[1]);if(h[2]){n=h[3];break}
}}while(h);if(w.length>1&&m.exec(a))if(w.length===2&&l.relative[w[0]])i=t(w[0]+w[1
],b);else{i=l.relative[w[0]]?[b]:k(w.shift(),b);while(w.length)a=w.shift(),l.relative
[a]&&(a+=w.shift()),i=t(a,i)}else{!e&&w.length>1&&b.nodeType===9&&!v&&l.match.ID.
test(w[0])&&!l.match.ID.test(w[w.length-1])&&(o=k.find(w.shift(),b,v),b=o.expr?k.
filter(o.expr,o.set)[0]:o.set[0]);if(b){o=e?{expr:w.pop(),set:p(e)}:k.find(w.pop(
),w.length!==1||w[0]!=="~"&&w[0]!=="+"||!b.parentNode?b:b.parentNode,v),i=o.expr?
k.filter(o.expr,o.set):o.set,w.length>0?j=p(i):u=!1;while(w.length)q=w.pop(),r=q,
l.relative[q]?r=w.pop():q="",r==null&&(r=b),l.relative[q](j,r,v)}else j=w=[]}j||(
j=i),j||k.error(q||a);if(f.call(j)==="[object Array]")if(!u)c.push.apply(c,j);else if(
b&&b.nodeType===1)for(s=0;j[s]!=null;s++)j[s]&&(j[s]===!0||j[s].nodeType===1&&k.contains
(b,j[s]))&&c.push(i[s]);else for(s=0;j[s]!=null;s++)j[s]&&j[s].nodeType===1&&c.push
(i[s]);else p(j,c);return n&&(k(n,g,c,e),k.uniqueSort(c)),c};k.uniqueSort=function(
a){if(r){g=h,a.sort(r);if(g)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--
,1)}return a},k.matches=function(a,b){return k(a,null,null,b)},k.matchesSelector=
function(a,b){return k(b,null,null,[a]).length>0},k.find=function(a,b,c){var d;if(!
a)return[];for(var e=0,f=l.order.length;e<f;e++){var g,h=l.order[e];if(g=l.leftMatch
[h].exec(a)){var j=g[1];g.splice(1,1);if(j.substr(j.length-1)!=="\\"){g[1]=(g[1]||""
).replace(i,""),d=l.find[h](g,b,c);if(d!=null){a=a.replace(l.match[h],"");break}}
}}return d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"
):[]),{set:d,expr:a}},k.filter=function(a,c,d,e){var f,g,h=a,i=[],j=c,m=c&&c[0]&&
k.isXML(c[0]);while(a&&c.length){for(var n in l.filter)if((f=l.leftMatch[n].exec(
a))!=null&&f[2]){var o,p,q=l.filter[n],r=f[1];g=!1,f.splice(1,1);if(r.substr(r.length-1
)==="\\")continue;j===i&&(i=[]);if(l.preFilter[n]){f=l.preFilter[n](f,j,d,i,e,m);
if(!f)g=o=!0;else if(f===!0)continue}if(f)for(var s=0;(p=j[s])!=null;s++)if(p){o=
q(p,f,s,j);var t=e^!!o;d&&o!=null?t?g=!0:j[s]=!1:t&&(i.push(p),g=!0)}if(o!==b){d||
(j=i),a=a.replace(l.match[n],"");if(!g)return[];break}}if(a===h)if(g==null)k.error
(a);else break;h=a}return j},k.error=function(a){throw"Syntax error, unrecognized expression: "+
a};var l=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/
,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/
,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/
,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/
,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(
a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}
},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!j.test(b),e=c&&!d;d&&
(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling
)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&k.filter
(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!j.test
(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName
.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===
b);d&&k.filter(b,a,!0)}},"":function(b,d,f){var g,h=e++,i=a;typeof d=="string"&&!
j.test(d)&&(d=d.toLowerCase(),g=d,i=c),i("parentNode",d,h,b,g,f)},"~":function(b,
d,f){var g,h=e++,i=a;typeof d=="string"&&!j.test(d)&&(d=d.toLowerCase(),g=d,i=c),
i("previousSibling",d,h,b,g,f)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!
c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b
){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]
);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c
.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined"
)return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+
a[1].replace(i,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&
(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[
g]=!1));return!1},ID:function(a){return a[1].replace(i,"")},TAG:function(a,b){return a
[1].replace(i,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||k.error
(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a
[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2
]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&k.error(a[0]);return a[0]=e++,a},ATTR:function(
a,b,c,d,e,f){var g=a[1]=a[1].replace(i,"");return!f&&l.attrMap[g]&&(a[1]=l.attrMap
[g]),a[4]=(a[4]||a[5]||"").replace(i,""),a[2]==="~="&&(a[4]=" "+a[4]+" "),a},PSEUDO
:function(a,b,c,e,f){if(a[1]==="not")if((d.exec(a[3])||"").length>1||/^\w/.test(a
[3]))a[3]=k(a[3],null,null,b);else{var g=k.filter(a[3],b,c,!0^f);return c||e.push
.apply(e,g),!1}else if(l.match.POS.test(a[0])||l.match.CHILD.test(a[0]))return!0;
return a},POS:function(a){return a.unshift(!0),a}},filters:{enabled:function(a){return a
.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked
:function(a){return a.checked===!0},selected:function(a){return a.parentNode&&a.parentNode
.selectedIndex,a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(
a){return!a.firstChild},has:function(a,b,c){return!!k(c[3],a).length},header:function(
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
){var e=b[1],f=l.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||
a.innerText||k.getText([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0
,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}k.error(e)},CHILD:function(a,b)
{var c=b[1],d=a;switch(c){case"only":case"first":while(d=d.previousSibling)if(d.nodeType===1
)return!1;if(c==="first")return!0;d=a;case"last":while(d=d.nextSibling)if(d.nodeType===1
)return!1;return!0;case"nth":var e=b[2],f=b[3];if(e===1&&f===0)return!0;var g=b[0
],h=a.parentNode;if(h&&(h.sizcache!==g||!a.nodeIndex)){var i=0;for(d=h.firstChild
;d;d=d.nextSibling)d.nodeType===1&&(d.nodeIndex=++i);h.sizcache=g}var j=a.nodeIndex-
f;return e===0?j===0:j%e===0&&j/e>=0}},ID:function(a,b){return a.nodeType===1&&a.
getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||a.nodeName
.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"
))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=l.attrHandle[c]?l.attrHandle
[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!="
:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?
e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?
e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b
[2],f=l.setFilters[e];if(f)return f(a,c,b,d)}}},m=l.match.POS,n=function(a,b){return"\\"+
(b-0+1)};for(var o in l.match)l.match[o]=new RegExp(l.match[o].source+/(?![^\[]*\])(?![^\(]*\))/
.source),l.leftMatch[o]=new RegExp(/(^(?:.|\r|\n)*?)/.source+l.match[o].source.replace
(/\\(\d+)/g,n));var p=function(a,b){return a=Array.prototype.slice.call(a,0),b?(b
.push.apply(b,a),b):a};try{Array.prototype.slice.call(G.documentElement.childNodes
,0)[0].nodeType}catch(q){p=function(a,b){var c=0,d=b||[];if(f.call(a)==="[object Array]"
)Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length
;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var r,s;G.documentElement
.compareDocumentPosition?r=function(a,b){return a===b?(g=!0,0):!a.compareDocumentPosition||!
b.compareDocumentPosition?a.compareDocumentPosition?-1:1:a.compareDocumentPosition
(b)&4?-1:1}:(r=function(a,b){if(a===b)return g=!0,0;if(a.sourceIndex&&b.sourceIndex
)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],h=a.parentNode,i=b.parentNode
,j=h;if(h===i)return s(a,b);if(!h)return-1;if(!i)return 1;while(j)e.unshift(j),j=
j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0
;k<c&&k<d;k++)if(e[k]!==f[k])return s(e[k],f[k]);return k===c?s(a,f[k],-1):s(e[k]
,b,1)},s=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)
return-1;d=d.nextSibling}return 1}),k.getText=function(a){var b="",c;for(var d=0;
a[d];d++)c=a[d],c.nodeType===3||c.nodeType===4?b+=c.nodeValue:c.nodeType!==8&&(b+=
k.getText(c.childNodes));return b},function(){var a=G.createElement("div"),c="script"+
(new Date).getTime(),d=G.documentElement;a.innerHTML="<a name='"+c+"'/>",d.insertBefore
(a,d.firstChild),G.getElementById(c)&&(l.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!
d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&
e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},l.filter.ID=function(a,b){var c=typeof 
a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&
c&&c.nodeValue===b}),d.removeChild(a),d=a=null}(),function(){var a=G.createElement
("div");a.appendChild(G.createComment("")),a.getElementsByTagName("*").length>0&&
(l.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=
[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>"
,a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute
("href")!=="#"&&(l.attrHandle.href=function(a){return a.getAttribute("href",2)}),
a=null}(),G.querySelectorAll&&function(){var a=k,b=G.createElement("div"),c="__sizzle__"
;b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST"
).length!==0){k=function(b,d,e,f){d=d||G;if(!f&&!k.isXML(d)){var g=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/
.exec(b);if(g&&(d.nodeType===1||d.nodeType===9)){if(g[1])return p(d.getElementsByTagName
(b),e);if(g[2]&&l.find.CLASS&&d.getElementsByClassName)return p(d.getElementsByClassName
(g[2]),e)}if(d.nodeType===9){if(b==="body"&&d.body)return p([d.body],e);if(g&&g[3
]){var h=d.getElementById(g[3]);if(!h||!h.parentNode)return p([],e);if(h.id===g[3
])return p([h],e)}try{return p(d.querySelectorAll(b),e)}catch(i){}}else if(d.nodeType===1&&
d.nodeName.toLowerCase()!=="object"){var j=d,m=d.getAttribute("id"),n=m||c,o=d.parentNode
,q=/^\s*[+~]/.test(b);m?n=n.replace(/'/g,"\\$&"):d.setAttribute("id",n),q&&o&&(d=
d.parentNode);try{if(!q||o)return p(d.querySelectorAll("[id='"+n+"'] "+b),e)}catch(
r){}finally{m||j.removeAttribute("id")}}}return a(b,d,e,f)};for(var d in a)k[d]=a
[d];b=null}}(),function(){var a=G.documentElement,b=a.matchesSelector||a.mozMatchesSelector||
a.webkitMatchesSelector||a.msMatchesSelector;if(b){var c=!b.call(G.createElement("div"
),"div"),d=!1;try{b.call(G.documentElement,"[test!='']:sizzle")}catch(e){d=!0}k.matchesSelector=
function(a,e){e=e.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!k.isXML(a))try{if(
d||!l.match.PSEUDO.test(e)&&!/!=/.test(e)){var f=b.call(a,e);if(f||!c||a.document&&
a.document.nodeType!==11)return f}}catch(g){}return k(e,null,null,[a]).length>0}}
}(),function(){var a=G.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>"
;if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild
.className="e";if(a.getElementsByClassName("e").length===1)return;l.order.splice(1
,0,"CLASS"),l.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!
c)return b.getElementsByClassName(a[1])},a=null}}(),G.documentElement.contains?k.
contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:G.documentElement
.compareDocumentPosition?k.contains=function(a,b){return!!(a.compareDocumentPosition
(b)&16)}:k.contains=function(){return!1},k.isXML=function(a){var b=(a?a.ownerDocument||
a:0).documentElement;return b?b.nodeName!=="HTML":!1};var t=function(a,b){var c,d=
[],e="",f=b.nodeType?[b]:b;while(c=l.match.PSEUDO.exec(a))e+=c[0],a=a.replace(l.match
.PSEUDO,"");a=l.relative[a]?a+"*":a;for(var g=0,h=f.length;g<h;g++)k(a,f[g],d);return k
.filter(e,d)};J.find=k,J.expr=k.selectors,J.expr[":"]=J.expr.filters,J.unique=k.uniqueSort
,J.text=k.getText,J.isXMLDoc=k.isXML,J.contains=k.contains}();var bi=/Until$/,bj=/^(?:parents|prevUntil|prevAll)/
,bk=/,/,bl=/^.[^:#\[\.,]*$/,bm=Array.prototype.slice,bn=J.expr.match.POS,bo={children
:!0,contents:!0,next:!0,prev:!0};J.fn.extend({find:function(a){var b=this,c,d;if(typeof 
a!="string")return J(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(J.contains
(b[c],this))return!0});var e=this.pushStack("","find",a),f,g,h;for(c=0,d=this.length
;c<d;c++){f=e.length,J.find(a,this[c],e);if(c>0)for(g=f;g<e.length;g++)for(h=0;h<
f;h++)if(e[h]===e[g]){e.splice(g--,1);break}}return e},has:function(a){var b=J(a)
;return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(J.contains(this,
b[a]))return!0})},not:function(a){return this.pushStack(w(this,a,!1),"not",a)},filter
:function(a){return this.pushStack(w(this,a,!0),"filter",a)},is:function(a){return!!
a&&(typeof a=="string"?J.filter(a,this).length>0:this.filter(a).length>0)},closest
:function(a,b){var c=[],d,e,f=this[0];if(J.isArray(a)){var g,h,i={},j=1;if(f&&a.length
){for(d=0,e=a.length;d<e;d++)h=a[d],i[h]||(i[h]=bn.test(h)?J(h,b||this.context):h
);while(f&&f.ownerDocument&&f!==b){for(h in i)g=i[h],(g.jquery?g.index(f)>-1:J(f)
.is(g))&&c.push({selector:h,elem:f,level:j});f=f.parentNode,j++}}return c}var k=bn
.test(a)||typeof a!="string"?J(a,b||this.context):0;for(d=0,e=this.length;d<e;d++
){f=this[d];while(f){if(k?k.index(f)>-1:J.find.matchesSelector(f,a)){c.push(f);break}
f=f.parentNode;if(!f||!f.ownerDocument||f===b||f.nodeType===11)break}}return c=c.
length>1?J.unique(c):c,this.pushStack(c,"closest",a)},index:function(a){return!a||typeof 
a=="string"?J.inArray(this[0],a?J(a):this.parent().children()):J.inArray(a.jquery?
a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?J(a,b):J.makeArray(a&&a.
nodeType?[a]:a),d=J.merge(this.get(),c);return this.pushStack(x(c[0])||x(d[0])?d:
J.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),J.each({parent
:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(
a){return J.dir(a,"parentNode")},parentsUntil:function(a,b,c){return J.dir(a,"parentNode"
,c)},next:function(a){return J.nth(a,2,"nextSibling")},prev:function(a){return J.
nth(a,2,"previousSibling")},nextAll:function(a){return J.dir(a,"nextSibling")},prevAll
:function(a){return J.dir(a,"previousSibling")},nextUntil:function(a,b,c){return J
.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return J.dir(a,"previousSibling"
,c)},siblings:function(a){return J.sibling(a.parentNode.firstChild,a)},children:function(
a){return J.sibling(a.firstChild)},contents:function(a){return J.nodeName(a,"iframe"
)?a.contentDocument||a.contentWindow.document:J.makeArray(a.childNodes)}},function(
a,b){J.fn[a]=function(c,d){var e=J.map(this,b,c),f=bm.call(arguments);return bi.test
(a)||(d=c),d&&typeof d=="string"&&(e=J.filter(d,e)),e=this.length>1&&!bo[a]?J.unique
(e):e,(this.length>1||bk.test(d))&&bj.test(a)&&(e=e.reverse()),this.pushStack(e,a
,f.join(","))}}),J.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?
J.find.matchesSelector(b[0],a)?[b[0]]:[]:J.find.matches(a,b)},dir:function(a,c,d)
{var e=[],f=a[c];while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!J(f).is(d)))f.
nodeType===1&&e.push(f),f=f[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(
;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=
[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var bp=/ jQuery\d+="(?:\d+|null)"/g
,bq=/^\s+/,br=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig
,bs=/<([\w:]+)/,bt=/<tbody/i,bu=/<|&#?\w+;/,bv=/<(?:script|object|embed|option|style)/i
,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*<!(?:\[CDATA\[|\-\-)/
,bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>"
,"</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"
],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>"
,"</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};bz.optgroup=
bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,J.support
.htmlSerialize||(bz._default=[1,"div<div>","</div>"]),J.fn.extend({text:function(
a){return J.isFunction(a)?this.each(function(b){var c=J(this);c.text(a.call(this,
b,c.text()))}):typeof a!="object"&&a!==b?this.empty().append((this[0]&&this[0].ownerDocument||
G).createTextNode(a)):J.text(this)},wrapAll:function(a){if(J.isFunction(a))return this
.each(function(b){J(this).wrapAll(a.call(this,b))});if(this[0]){var b=J(a,this[0]
.ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map
(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild
;return a}).append(this)}return this},wrapInner:function(a){return J.isFunction(a
)?this.each(function(b){J(this).wrapInner(a.call(this,b))}):this.each(function(){
var b=J(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a
){return this.each(function(){J(this).wrapAll(a)})},unwrap:function(){return this
.parent().each(function(){J.nodeName(this,"body")||J(this).replaceWith(this.childNodes
)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&
this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(
a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(
this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode
.insertBefore(a,this)});if(arguments.length){var a=J(arguments[0]);return a.push.
apply(a,this.toArray()),this.pushStack(a,"before",arguments)}},after:function(){if(
this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode
.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this
,"after",arguments);return a.push.apply(a,J(arguments[0]).toArray()),a}},remove:function(
a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||J.filter(a,[d]).length)!b&&d.nodeType===1&&
(J.cleanData(d.getElementsByTagName("*")),J.cleanData([d])),d.parentNode&&d.parentNode
.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++
){b.nodeType===1&&J.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild
(b.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a
:b,this.map(function(){return J.clone(this,a,b)})},html:function(a){if(a===b)return this
[0]&&this[0].nodeType===1?this[0].innerHTML.replace(bp,""):null;if(typeof a=="string"&&!
bv.test(a)&&(J.support.leadingWhitespace||!bq.test(a))&&!bz[(bs.exec(a)||["",""])
[1].toLowerCase()]){a=a.replace(br,"<$1></$2>");try{for(var c=0,d=this.length;c<d
;c++)this[c].nodeType===1&&(J.cleanData(this[c].getElementsByTagName("*")),this[c
].innerHTML=a)}catch(e){this.empty().append(a)}}else J.isFunction(a)?this.each(function(
b){var c=J(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this
},replaceWith:function(a){return this[0]&&this[0].parentNode?J.isFunction(a)?this
.each(function(b){var c=J(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof 
a!="string"&&(a=J(a).detach()),this.each(function(){var b=this.nextSibling,c=this
.parentNode;J(this).remove(),b?J(b).before(a):J(c).append(a)})):this.length?this.
pushStack(J(J.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this
.remove(a,!0)},domManip:function(a,c,d){var e,f,g,h,i=a[0],j=[];if(!J.support.checkClone&&
arguments.length===3&&typeof i=="string"&&bw.test(i))return this.each(function(){
J(this).domManip(a,c,d,!0)});if(J.isFunction(i))return this.each(function(e){var f=
J(this);a[0]=i.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){h=i&&i.parentNode
,J.support.parentNode&&h&&h.nodeType===11&&h.childNodes.length===this.length?e={fragment
:h}:e=J.buildFragment(a,this,j),g=e.fragment,g.childNodes.length===1?f=g=g.firstChild
:f=g.firstChild;if(f){c=c&&J.nodeName(f,"tr");for(var k=0,l=this.length,m=l-1;k<l
;k++)d.call(c?v(this[k],f):this[k],e.cacheable||l>1&&k<m?J.clone(g,!0,!0):g)}j.length&&
J.each(j,p)}return this}}),J.buildFragment=function(a,b,c){var d,e,f,g;return b&&
b[0]&&(g=b[0].ownerDocument||b[0]),g.createDocumentFragment||(g=G),a.length===1&&typeof 
a[0]=="string"&&a[0].length<512&&g===G&&a[0].charAt(0)==="<"&&!bv.test(a[0])&&(J.
support.checkClone||!bw.test(a[0]))&&(e=!0,f=J.fragments[a[0]],f&&f!==1&&(d=f)),d||
(d=g.createDocumentFragment(),J.clean(a,g,d,c)),e&&(J.fragments[a[0]]=f?d:1),{fragment
:d,cacheable:e}},J.fragments={},J.each({appendTo:"append",prependTo:"prepend",insertBefore
:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){J.fn[a]=function(
c){var d=[],e=J(c),f=this.length===1&&this[0].parentNode;if(f&&f.nodeType===11&&f
.childNodes.length===1&&e.length===1)return e[b](this[0]),this;for(var g=0,h=e.length
;g<h;g++){var i=(g>0?this.clone(!0):this).get();J(e[g])[b](i),d=d.concat(i)}return this
.pushStack(d,a,e.selector)}}),J.extend({clone:function(a,b,c){var d=a.cloneNode(!0
),e,f,g;if((!J.support.noCloneEvent||!J.support.noCloneChecked)&&(a.nodeType===1||
a.nodeType===11)&&!J.isXMLDoc(a)){t(a,d),e=s(a),f=s(d);for(g=0;e[g];++g)t(e[g],f[
g])}if(b){u(a,d);if(c){e=s(a),f=s(d);for(g=0;e[g];++g)u(e[g],f[g])}}return e=f=null
,d},clean:function(a,b,c,d){var e;b=b||G,typeof b.createElement=="undefined"&&(b=
b.ownerDocument||b[0]&&b[0].ownerDocument||G);var f=[],g;for(var h=0,i;(i=a[h])!=
null;h++){typeof i=="number"&&(i+="");if(!i)continue;if(typeof i=="string")if(!bu
.test(i))i=b.createTextNode(i);else{i=i.replace(br,"<$1></$2>");var j=(bs.exec(i)||
["",""])[1].toLowerCase(),k=bz[j]||bz._default,l=k[0],m=b.createElement("div");m.
innerHTML=k[1]+i+k[2];while(l--)m=m.lastChild;if(!J.support.tbody){var n=bt.test(
i),o=j==="table"&&!n?m.firstChild&&m.firstChild.childNodes:k[1]==="<table>"&&!n?m
.childNodes:[];for(g=o.length-1;g>=0;--g)J.nodeName(o[g],"tbody")&&!o[g].childNodes
.length&&o[g].parentNode.removeChild(o[g])}!J.support.leadingWhitespace&&bq.test(
i)&&m.insertBefore(b.createTextNode(bq.exec(i)[0]),m.firstChild),i=m.childNodes}var p
;if(!J.support.appendChecked)if(i[0]&&typeof (p=i.length)=="number")for(g=0;g<p;g++
)q(i[g]);else q(i);i.nodeType?f.push(i):f=J.merge(f,i)}if(c){e=function(a){return!
a.type||bx.test(a.type)};for(h=0;f[h];h++)if(d&&J.nodeName(f[h],"script")&&(!f[h]
.type||f[h].type.toLowerCase()==="text/javascript"))d.push(f[h].parentNode?f[h].parentNode
.removeChild(f[h]):f[h]);else{if(f[h].nodeType===1){var r=J.grep(f[h].getElementsByTagName
("script"),e);f.splice.apply(f,[h+1,0].concat(r))}c.appendChild(f[h])}}return f},
cleanData:function(a){var b,c,d=J.cache,e=J.expando,f=J.event.special,g=J.support
.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&J.noData[i.nodeName
.toLowerCase()])continue;c=i[J.expando];if(c){b=d[c]&&d[c][e];if(b&&b.events){for(
var j in b.events)f[j]?J.event.remove(i,j):J.removeEvent(i,j,b.handle);b.handle&&
(b.handle.elem=null)}g?delete i[J.expando]:i.removeAttribute&&i.removeAttribute(J
.expando),delete d[c]}}}});var bA=/alpha\([^)]*\)/i,bB=/opacity=([^)]*)/,bC=/([A-Z]|^ms)/g
,bD=/^-?\d+(?:px)?$/i,bE=/^-?\d/,bF=/^[+\-]=/,bG=/[^+\-\.\de]+/g,bH={position:"absolute"
,visibility:"hidden",display:"block"},bI=["Left","Right"],bJ=["Top","Bottom"],bK,
bL,bM;J.fn.css=function(a,c){return arguments.length===2&&c===b?this:J.access(this
,a,c,!0,function(a,c,d){return d!==b?J.style(a,c,d):J.css(a,c)})},J.extend({cssHooks
:{opacity:{get:function(a,b){if(b){var c=bK(a,"opacity","opacity");return c===""?"1"
:c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0
,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":J.support.cssFloat?"cssFloat"
:"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!
a.style){var f,g,h=J.camelCase(c),i=a.style,j=J.cssHooks[h];c=J.cssProps[h]||h;if(
d===b)return j&&"get"in j&&(f=j.get(a,!1,e))!==b?f:i[c];g=typeof d;if(g==="number"&&
isNaN(d)||d==null)return;g==="string"&&bF.test(d)&&(d=+d.replace(bG,"")+parseFloat
(J.css(a,c)),g="number"),g==="number"&&!J.cssNumber[h]&&(d+="px");if(!j||!("set"in 
j)||(d=j.set(a,d))!==b)try{i[c]=d}catch(k){}}},css:function(a,c,d){var e,f;c=J.camelCase
(c),f=J.cssHooks[c],c=J.cssProps[c]||c,c==="cssFloat"&&(c="float");if(f&&"get"in 
f&&(e=f.get(a,!0,d))!==b)return e;if(bK)return bK(a,c)},swap:function(a,b,c){var d=
{};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=
d[e]}}),J.curCSS=J.css,J.each(["height","width"],function(a,b){J.cssHooks[b]={get
:function(a,c,d){var e;if(c)return a.offsetWidth!==0?o(a,b,d):(J.swap(a,bH,function(
){e=o(a,b,d)}),e)},set:function(a,b){if(!bD.test(b))return b;b=parseFloat(b);if(b>=0
)return b+"px"}}}),J.support.opacity||(J.cssHooks.opacity={get:function(a,b){return bB
.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp
.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle;c.zoom=1;var e=
J.isNaN(b)?"":"alpha(opacity="+b*100+")",f=d&&d.filter||c.filter||"";c.filter=bA.
test(f)?f.replace(bA,e):f+" "+e}}),J(function(){J.support.reliableMarginRight||(J
.cssHooks.marginRight={get:function(a,b){var c;return J.swap(a,{display:"inline-block"
},function(){b?c=bK(a,"margin-right","marginRight"):c=a.style.marginRight}),c}})}
),G.defaultView&&G.defaultView.getComputedStyle&&(bL=function(a,c){var d,e,f;c=c.
replace(bC,"-$1").toLowerCase();if(!(e=a.ownerDocument.defaultView))return b;if(f=
e.getComputedStyle(a,null))d=f.getPropertyValue(c),d===""&&!J.contains(a.ownerDocument
.documentElement,a)&&(d=J.style(a,c));return d}),G.documentElement.currentStyle&&
(bM=function(a,b){var c,d=a.currentStyle&&a.currentStyle[b],e=a.runtimeStyle&&a.runtimeStyle
[b],f=a.style;return!bD.test(d)&&bE.test(d)&&(c=f.left,e&&(a.runtimeStyle.left=a.
currentStyle.left),f.left=b==="fontSize"?"1em":d||0,d=f.pixelLeft+"px",f.left=c,e&&
(a.runtimeStyle.left=e)),d===""?"auto":d}),bK=bL||bM,J.expr&&J.expr.filters&&(J.expr
.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!
J.support.reliableHiddenOffsets&&(a.style.display||J.css(a,"display"))==="none"},
J.expr.filters.visible=function(a){return!J.expr.filters.hidden(a)});var bN=/%20/g
,bO=/\[\]$/,bP=/\r?\n/g,bQ=/#.*$/,bR=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bS=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i
,bT=/^(?:about|app|app\-storage|.+\-extension|file|widget):$/,bU=/^(?:GET|HEAD)$/
,bV=/^\/\//,bW=/\?/,bX=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bY=/^(?:select|textarea)/i
,bZ=/\s+/,b$=/([?&])_=[^&]*/,b_=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
ca=J.fn.load,cb={},cc={},cd,ce;try{cd=I.href}catch(cf){cd=G.createElement("a"),cd
.href="",cd=cd.href}ce=b_.exec(cd.toLowerCase())||[],J.fn.extend({load:function(a
,c,d){if(typeof a!="string"&&ca)return ca.apply(this,arguments);if(!this.length)return this
;var e=a.indexOf(" ");if(e>=0){var f=a.slice(e,a.length);a=a.slice(0,e)}var g="GET"
;c&&(J.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=J.param(c,J.ajaxSettings.traditional
),g="POST"));var h=this;return J.ajax({url:a,type:g,dataType:"html",data:c,complete
:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),h.html
(f?J("<div>").append(c.replace(bX,"")).find(f):c)),d&&h.each(d,[c,b,a])}}),this},
serialize:function(){return J.param(this.serializeArray())},serializeArray:function(
){return this.map(function(){return this.elements?J.makeArray(this.elements):this
}).filter(function(){return this.name&&!this.disabled&&(this.checked||bY.test(this
.nodeName)||bS.test(this.type))}).map(function(a,b){var c=J(this).val();return c==
null?null:J.isArray(c)?J.map(c,function(a,c){return{name:b.name,value:a.replace(bP
,"\r\n")}}):{name:b.name,value:c.replace(bP,"\r\n")}}).get()}}),J.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend"
.split(" "),function(a,b){J.fn[b]=function(a){return this.bind(b,a)}}),J.each(["get"
,"post"],function(a,c){J[c]=function(a,d,e,f){return J.isFunction(d)&&(f=f||e,e=d
,d=b),J.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),J.extend({getScript:function(
a,c){return J.get(a,b,c,"script")},getJSON:function(a,b,c){return J.get(a,b,c,"json"
)},ajaxSetup:function(a,b){b?J.extend(!0,a,J.ajaxSettings,b):(b=a,a=J.extend(!0,J
.ajaxSettings,b));for(var c in{context:1,url:1})c in b?a[c]=b[c]:c in J.ajaxSettings&&
(a[c]=J.ajaxSettings[c]);return a},ajaxSettings:{url:cd,isLocal:bT.test(ce[1]),global
:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async
:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json
:"application/json, text/javascript","*":"*/*"},contents:{xml:/xml/,html:/html/,json
:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text"
:a.String,"text html":!0,"text json":J.parseJSON,"text xml":J.parseXML}},ajaxPrefilter
:n(cb),ajaxTransport:n(cc),ajax:function(a,c){function d(a,c,d,m){if(v!==2){v=2,t&&
clearTimeout(t),s=b,q=m||"",y.readyState=a?4:0;var o,p,r,u=d?k(e,y,d):b,x,z;if(a>=200&&
a<300||a===304){if(e.ifModified){if(x=y.getResponseHeader("Last-Modified"))J.lastModified
[n]=x;if(z=y.getResponseHeader("Etag"))J.etag[n]=z}if(a===304)c="notmodified",o=!0
;else try{p=j(e,u),c="success",o=!0}catch(A){c="parsererror",r=A}}else{r=c;if(!c||
a)c="error",a<0&&(a=0)}y.status=a,y.statusText=c,o?h.resolveWith(f,[p,c,y]):h.rejectWith
(f,[y,c,r]),y.statusCode(l),l=b,w&&g.trigger("ajax"+(o?"Success":"Error"),[y,e,o?
p:r]),i.resolveWith(f,[y,c]),w&&(g.trigger("ajaxComplete",[y,e]),--J.active||J.event
.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var e=J.ajaxSetup({}
,c),f=e.context||e,g=f!==e&&(f.nodeType||f instanceof J)?J(f):J.event,h=J.Deferred
(),i=J._Deferred(),l=e.statusCode||{},n,o={},p={},q,r,s,t,u,v=0,w,x,y={readyState
:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();a=p[c]=p[c]||a,o[a
]=b}return this},getAllResponseHeaders:function(){return v===2?q:null},getResponseHeader
:function(a){var c;if(v===2){if(!r){r={};while(c=bR.exec(q))r[c[1].toLowerCase()]=
c[2]}c=r[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return v||
(e.mimeType=a),this},abort:function(a){return a=a||"abort",s&&s.abort(a),d(0,a),this
}};h.promise(y),y.success=y.done,y.error=y.fail,y.complete=i.done,y.statusCode=function(
a){if(a){var b;if(v<2)for(b in a)l[b]=[l[b],a[b]];else b=a[y.status],y.then(b,b)}
return this},e.url=((a||e.url)+"").replace(bQ,"").replace(bV,ce[1]+"//"),e.dataTypes=
J.trim(e.dataType||"*").toLowerCase().split(bZ),e.crossDomain==null&&(u=b_.exec(e
.url.toLowerCase()),e.crossDomain=!(!u||u[1]==ce[1]&&u[2]==ce[2]&&(u[3]||(u[1]==="http:"?80
:443))==(ce[3]||(ce[1]==="http:"?80:443)))),e.data&&e.processData&&typeof e.data!="string"&&
(e.data=J.param(e.data,e.traditional)),m(cb,e,c,y);if(v===2)return!1;w=e.global,e
.type=e.type.toUpperCase(),e.hasContent=!bU.test(e.type),w&&J.active++===0&&J.event
.trigger("ajaxStart");if(!e.hasContent){e.data&&(e.url+=(bW.test(e.url)?"&":"?")+
e.data),n=e.url;if(e.cache===!1){var z=J.now(),A=e.url.replace(b$,"$1_="+z);e.url=
A+(A===e.url?(bW.test(e.url)?"&":"?")+"_="+z:"")}}(e.data&&e.hasContent&&e.contentType!==!1||
c.contentType)&&y.setRequestHeader("Content-Type",e.contentType),e.ifModified&&(n=
n||e.url,J.lastModified[n]&&y.setRequestHeader("If-Modified-Since",J.lastModified
[n]),J.etag[n]&&y.setRequestHeader("If-None-Match",J.etag[n])),y.setRequestHeader
("Accept",e.dataTypes[0]&&e.accepts[e.dataTypes[0]]?e.accepts[e.dataTypes[0]]+(e.
dataTypes[0]!=="*"?", */*; q=0.01":""):e.accepts["*"]);for(x in e.headers)y.setRequestHeader
(x,e.headers[x]);if(!e.beforeSend||e.beforeSend.call(f,y,e)!==!1&&v!==2){for(x in
{success:1,error:1,complete:1})y[x](e[x]);s=m(cc,e,c,y);if(!s)d(-1,"No Transport"
);else{y.readyState=1,w&&g.trigger("ajaxSend",[y,e]),e.async&&e.timeout>0&&(t=setTimeout
(function(){y.abort("timeout")},e.timeout));try{v=1,s.send(o,d)}catch(B){status<2?
d(-1,B):J.error(B)}}return y}return y.abort(),!1},param:function(a,c){var d=[],e=
function(a,b){b=J.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent
(b)};c===b&&(c=J.ajaxSettings.traditional);if(J.isArray(a)||a.jquery&&!J.isPlainObject
(a))J.each(a,function(){e(this.name,this.value)});else for(var f in a)l(f,a[f],c,
e);return d.join("&").replace(bN,"+")}}),J.extend({active:0,lastModified:{},etag:
{}});var cg=J.now(),ch=/(\=)\?(&|$)|\?\?/i;J.ajaxSetup({jsonp:"callback",jsonpCallback
:function(){return J.expando+"_"+cg++}}),J.ajaxPrefilter("json jsonp",function(b,
c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string"
;if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ch.test(b.url)||e&&ch.test(b.data)))
{var f,g=b.jsonpCallback=J.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback
,h=a[g],i=b.url,j=b.data,k="$1"+g+"$2";return b.jsonp!==!1&&(i=i.replace(ch,k),b.
url===i&&(e&&(j=j.replace(ch,k)),b.data===j&&(i+=(/\?/.test(i)?"&":"?")+b.jsonp+"="+
g))),b.url=i,b.data=j,a[g]=function(a){f=[a]},d.always(function(){a[g]=h,f&&J.isFunction
(h)&&a[g](f[0])}),b.converters["script json"]=function(){return f||J.error(g+" was not called"
),f[0]},b.dataTypes[0]="json","script"}}),J.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a)
{return J.globalEval(a),a}}}),J.ajaxPrefilter("script",function(a){a.cache===b&&(
a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),J.ajaxTransport("script",
function(a){if(a.crossDomain){var c,d=G.head||G.getElementsByTagName("head")[0]||
G.documentElement;return{send:function(e,f){c=G.createElement("script"),c.async="async"
,a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=
function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=
c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||f(200,"success"
)},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var ci=
a.ActiveXObject?function(){for(var a in ck)ck[a](0,1)}:!1,cj=0,ck;J.ajaxSettings.
xhr=a.ActiveXObject?function(){return!this.isLocal&&i()||h()}:i,function(a){J.extend
(J.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(J.ajaxSettings.xhr()),J.support
.ajax&&J.ajaxTransport(function(c){if(!c.crossDomain||J.support.cors){var d;return{
send:function(e,f){var g=c.xhr(),h,i;c.username?g.open(c.type,c.url,c.async,c.username
,c.password):g.open(c.type,c.url,c.async);if(c.xhrFields)for(i in c.xhrFields)g[i
]=c.xhrFields[i];c.mimeType&&g.overrideMimeType&&g.overrideMimeType(c.mimeType),!
c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{
for(i in e)g.setRequestHeader(i,e[i])}catch(j){}g.send(c.hasContent&&c.data||null
),d=function(a,e){var i,j,k,l,m;try{if(d&&(e||g.readyState===4)){d=b,h&&(g.onreadystatechange=
J.noop,ci&&delete ck[h]);if(e)g.readyState!==4&&g.abort();else{i=g.status,k=g.getAllResponseHeaders
(),l={},m=g.responseXML,m&&m.documentElement&&(l.xml=m),l.text=g.responseText;try{
j=g.statusText}catch(n){j=""}!i&&c.isLocal&&!c.crossDomain?i=l.text?200:404:i===1223&&
(i=204)}}}catch(o){e||f(-1,o)}l&&f(i,j,l,k)},!c.async||g.readyState===4?d():(h=++
cj,ci&&(ck||(ck={},J(a).unload(ci)),ck[h]=d),g.onreadystatechange=d)},abort:function(
){d&&d(0,1)}}}});var cl={},cm,cn,co=/^(?:toggle|show|hide)$/,cp=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i
,cq,cr=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width"
,"marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cs,ct=a.webkitRequestAnimationFrame||
a.mozRequestAnimationFrame||a.oRequestAnimationFrame;J.fn.extend({show:function(a
,b,c){var f,g;if(a||a===0)return this.animate(e("show",3),a,b,c);for(var h=0,i=this
.length;h<i;h++)f=this[h],f.style&&(g=f.style.display,!J._data(f,"olddisplay")&&g==="none"&&
(g=f.style.display=""),g===""&&J.css(f,"display")==="none"&&J._data(f,"olddisplay"
,d(f.nodeName)));for(h=0;h<i;h++){f=this[h];if(f.style){g=f.style.display;if(g===""||
g==="none")f.style.display=J._data(f,"olddisplay")||""}}return this},hide:function(
a,b,c){if(a||a===0)return this.animate(e("hide",3),a,b,c);for(var d=0,f=this.length
;d<f;d++)if(this[d].style){var g=J.css(this[d],"display");g!=="none"&&!J._data(this
[d],"olddisplay")&&J._data(this[d],"olddisplay",g)}for(d=0;d<f;d++)this[d].style&&
(this[d].style.display="none");return this},_toggle:J.fn.toggle,toggle:function(a
,b,c){var d=typeof a=="boolean";return J.isFunction(a)&&J.isFunction(b)?this._toggle
.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:J(this).is(":hidden"
);J(this)[b?"show":"hide"]()}):this.animate(e("toggle",3),a,b,c),this},fadeTo:function(
a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity
:b},a,c,d)},animate:function(a,b,c,e){var f=J.speed(b,c,e);return J.isEmptyObject
(a)?this.each(f.complete,[!1]):(a=J.extend({},a),this[f.queue===!1?"each":"queue"
](function(){f.queue===!1&&J._mark(this);var b=J.extend({},f),c=this.nodeType===1
,e=c&&J(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a)
{g=J.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],J.isArray(h)?(b.animatedProperties
[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||
b.easing||"swing";if(h==="hide"&&e||h==="show"&&!e)return b.complete.call(this);c&&
(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX
,this.style.overflowY],J.css(this,"display")==="inline"&&J.css(this,"float")==="none"&&
(J.support.inlineBlockNeedsLayout?(j=d(this.nodeName),j==="inline"?this.style.display="inline-block"
:(this.style.display="inline",this.style.zoom=1)):this.style.display="inline-block"
))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)k=new J.fx(this,b,
i),h=a[i],co.test(h)?k[h==="toggle"?e?"show":"hide":h]():(l=cp.exec(h),m=k.cur(),
l?(n=parseFloat(l[2]),o=l[3]||(J.cssNumber[i]?"":"px"),o!=="px"&&(J.style(this,i,
(n||1)+o),m=(n||1)/k.cur()*m,J.style(this,i,m+o)),l[1]&&(n=(l[1]==="-="?-1:1)*n+m
),k.custom(m,n,o)):k.custom(m,h,""));return!0}))},stop:function(a,b){return a&&this
.queue([]),this.each(function(){var a=J.timers,c=a.length;b||J._unmark(!0,this);while(
c--)a[c].elem===this&&(b&&a[c](!0),a.splice(c,1))}),b||this.dequeue(),this}}),J.each
({slideDown:e("show",1),slideUp:e("hide",1),slideToggle:e("toggle",1),fadeIn:{opacity
:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){J.
fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),J.extend({speed:function(a,
b,c){var d=a&&typeof a=="object"?J.extend({},a):{complete:c||!c&&b||J.isFunction(
a)&&a,duration:a,easing:c&&b||b&&!J.isFunction(b)&&b};return d.duration=J.fx.off?0
:typeof d.duration=="number"?d.duration:d.duration in J.fx.speeds?J.fx.speeds[d.duration
]:J.fx.speeds._default,d.old=d.complete,d.complete=function(a){J.isFunction(d.old
)&&d.old.call(this),d.queue!==!1?J.dequeue(this):a!==!1&&J._unmark(this)},d},easing
:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos
(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this
.prop=c,b.orig=b.orig||{}}}),J.fx.prototype={update:function(){this.options.step&&
this.options.step.call(this.elem,this.now,this),(J.fx.step[this.prop]||J.fx.step.
_default)(this)},cur:function(){if(this.elem[this.prop]==null||!!this.elem.style&&
this.elem.style[this.prop]!=null){var a,b=J.css(this.elem,this.prop);return isNaN
(a=parseFloat(b))?!b||b==="auto"?0:b:a}return this.elem[this.prop]},custom:function(
a,b,c){function d(a){return e.step(a)}var e=this,f=J.fx,h;this.startTime=cs||g(),
this.start=a,this.end=b,this.unit=c||this.unit||(J.cssNumber[this.prop]?"":"px"),
this.now=this.start,this.pos=this.state=0,d.elem=this.elem,d()&&J.timers.push(d)&&!
cq&&(ct?(cq=!0,h=function(){cq&&(ct(h),f.tick())},ct(h)):cq=setInterval(f.tick,f.
interval))},show:function(){this.options.orig[this.prop]=J.style(this.elem,this.prop
),this.options.show=!0,this.custom(this.prop==="width"||this.prop==="height"?1:0,
this.cur()),J(this.elem).show()},hide:function(){this.options.orig[this.prop]=J.style
(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(
a){var b=cs||g(),c=!0,d=this.elem,e=this.options,f,h;if(a||b>=e.duration+this.startTime
){this.now=this.end,this.pos=this.state=1,this.update(),e.animatedProperties[this
.prop]=!0;for(f in e.animatedProperties)e.animatedProperties[f]!==!0&&(c=!1);if(c
){e.overflow!=null&&!J.support.shrinkWrapBlocks&&J.each(["","X","Y"],function(a,b
){d.style["overflow"+b]=e.overflow[a]}),e.hide&&J(d).hide();if(e.hide||e.show)for(
var i in e.animatedProperties)J.style(d,i,e.orig[i]);e.complete.call(d)}return!1}
return e.duration==Infinity?this.now=b:(h=b-this.startTime,this.state=h/e.duration
,this.pos=J.easing[e.animatedProperties[this.prop]](this.state,h,0,1,e.duration),
this.now=this.start+(this.end-this.start)*this.pos),this.update(),!0}},J.extend(J
.fx,{tick:function(){for(var a=J.timers,b=0;b<a.length;++b)a[b]()||a.splice(b--,1
);a.length||J.fx.stop()},interval:13,stop:function(){clearInterval(cq),cq=null},speeds
:{slow:600,fast:200,_default:400},step:{opacity:function(a){J.style(a.elem,"opacity"
,a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style
[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit:a.elem
[a.prop]=a.now}}}),J.expr&&J.expr.filters&&(J.expr.filters.animated=function(a){return J
.grep(J.timers,function(b){return a===b.elem}).length});var cu=/^t(?:able|d|h)$/i
,cv=/^(?:body|html)$/i;"getBoundingClientRect"in G.documentElement?J.fn.offset=function(
a){var b=this[0],d;if(a)return this.each(function(b){J.offset.setOffset(this,a,b)
});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return J.offset
.bodyOffset(b);try{d=b.getBoundingClientRect()}catch(e){}var f=b.ownerDocument,g=
f.documentElement;if(!d||!J.contains(g,b))return d?{top:d.top,left:d.left}:{top:0
,left:0};var h=f.body,i=c(f),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0
,l=i.pageYOffset||J.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||J
.support.boxModel&&g.scrollLeft||h.scrollLeft,n=d.top+l-j,o=d.left+m-k;return{top
:n,left:o}}:J.fn.offset=function(a){var b=this[0];if(a)return this.each(function(
b){J.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument
.body)return J.offset.bodyOffset(b);J.offset.initialize();var c,d=b.offsetParent,
e=b,f=b.ownerDocument,g=f.documentElement,h=f.body,i=f.defaultView,j=i?i.getComputedStyle
(b,null):b.currentStyle,k=b.offsetTop,l=b.offsetLeft;while((b=b.parentNode)&&b!==
h&&b!==g){if(J.offset.supportsFixedPosition&&j.position==="fixed")break;c=i?i.getComputedStyle
(b,null):b.currentStyle,k-=b.scrollTop,l-=b.scrollLeft,b===d&&(k+=b.offsetTop,l+=
b.offsetLeft,J.offset.doesNotAddBorder&&(!J.offset.doesAddBorderForTableAndCells||!
cu.test(b.nodeName))&&(k+=parseFloat(c.borderTopWidth)||0,l+=parseFloat(c.borderLeftWidth
)||0),e=d,d=b.offsetParent),J.offset.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&
(k+=parseFloat(c.borderTopWidth)||0,l+=parseFloat(c.borderLeftWidth)||0),j=c}if(j
.position==="relative"||j.position==="static")k+=h.offsetTop,l+=h.offsetLeft;return J
.offset.supportsFixedPosition&&j.position==="fixed"&&(k+=Math.max(g.scrollTop,h.scrollTop
),l+=Math.max(g.scrollLeft,h.scrollLeft)),{top:k,left:l}},J.offset={initialize:function(
){var a=G.body,b=G.createElement("div"),c,d,e,f,g=parseFloat(J.css(a,"marginTop")
)||0,h="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>"
;J.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px"
,height:"1px",visibility:"hidden"}),b.innerHTML=h,a.insertBefore(b,a.firstChild),
c=b.firstChild,d=c.firstChild,f=c.nextSibling.firstChild.firstChild,this.doesNotAddBorder=
d.offsetTop!==5,this.doesAddBorderForTableAndCells=f.offsetTop===5,d.style.position="fixed"
,d.style.top="20px",this.supportsFixedPosition=d.offsetTop===20||d.offsetTop===15
,d.style.position=d.style.top="",c.style.overflow="hidden",c.style.position="relative"
,this.subtractsBorderForOverflowNotVisible=d.offsetTop===-5,this.doesNotIncludeMarginInBodyOffset=
a.offsetTop!==g,a.removeChild(b),J.offset.initialize=J.noop},bodyOffset:function(
a){var b=a.offsetTop,c=a.offsetLeft;return J.offset.initialize(),J.offset.doesNotIncludeMarginInBodyOffset&&
(b+=parseFloat(J.css(a,"marginTop"))||0,c+=parseFloat(J.css(a,"marginLeft"))||0),
{top:b,left:c}},setOffset:function(a,b,c){var d=J.css(a,"position");d==="static"&&
(a.style.position="relative");var e=J(a),f=e.offset(),g=J.css(a,"top"),h=J.css(a,"left"
),i=(d==="absolute"||d==="fixed")&&J.inArray("auto",[g,h])>-1,j={},k={},l,m;i?(k=
e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),J.isFunction
(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b
.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)}},J.fn.extend({position:function(
){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cv
.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(J.css(a,"marginTop"
))||0,c.left-=parseFloat(J.css(a,"marginLeft"))||0,d.top+=parseFloat(J.css(b[0],"borderTopWidth"
))||0,d.left+=parseFloat(J.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:
c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||
G.body;while(a&&!cv.test(a.nodeName)&&J.css(a,"position")==="static")a=a.offsetParent
;return a})}}),J.each(["Left","Top"],function(a,d){var e="scroll"+d;J.fn[e]=function(
d){var f,g;return d===b?(f=this[0],f?(g=c(f),g?"pageXOffset"in g?g[a?"pageYOffset"
:"pageXOffset"]:J.support.boxModel&&g.document.documentElement[e]||g.document.body
[e]:f[e]):null):this.each(function(){g=c(this),g?g.scrollTo(a?J(g).scrollLeft():d
,a?d:J(g).scrollTop()):this[e]=d})}}),J.each(["Height","Width"],function(a,c){var d=
c.toLowerCase();J.fn["inner"+c]=function(){var a=this[0];return a&&a.style?parseFloat
(J.css(a,d,"padding")):null},J.fn["outer"+c]=function(a){var b=this[0];return b&&
b.style?parseFloat(J.css(b,d,a?"margin":"border")):null},J.fn[d]=function(a){var e=
this[0];if(!e)return a==null?null:this;if(J.isFunction(a))return this.each(function(
b){var c=J(this);c[d](a.call(this,b,c[d]()))});if(J.isWindow(e)){var f=e.document
.documentElement["client"+c];return e.document.compatMode==="CSS1Compat"&&f||e.document
.body["client"+c]||f}if(e.nodeType===9)return Math.max(e.documentElement["client"+
c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement
["offset"+c]);if(a===b){var g=J.css(e,d),h=parseFloat(g);return J.isNaN(h)?g:h}return this
.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=J}(window),function(){function A
(a,b,c){if(a===b)return a!==0||1/a==1/b;if(a==null||b==null)return a===b;a._chain&&
(a=a._wrapped),b._chain&&(b=b._wrapped);if(w.isFunction(a.isEqual))return a.isEqual
(b);if(w.isFunction(b.isEqual))return b.isEqual(a);var d=typeof a;if(d!=typeof b)
return!1;if(!a!=!b)return!1;if(w.isNaN(a))return w.isNaN(b);var e=w.isString(a),f=
w.isString(b);if(e||f)return e&&f&&String(a)==String(b);var g=w.isNumber(a),h=w.isNumber
(b);if(g||h)return g&&h&&+a==+b;var i=w.isBoolean(a),k=w.isBoolean(b);if(i||k)return i&&
k&&+a==+b;var l=w.isDate(a),m=w.isDate(b);if(l||m)return l&&m&&a.getTime()==b.getTime
();var n=w.isRegExp(a),o=w.isRegExp(b);if(n||o)return n&&o&&a.source==b.source&&a
.global==b.global&&a.multiline==b.multiline&&a.ignoreCase==b.ignoreCase;if(d!="object"
)return!1;if(a.length!==b.length)return!1;if(a.constructor!==b.constructor)return!1
;var p=c.length;while(p--)if(c[p]==a)return!0;c.push(a);var q=0,r=!0;for(var s in 
a)if(j.call(a,s)){q++;if(!(r=j.call(b,s)&&A(a[s],b[s],c)))break}if(r){for(s in b)
if(j.call(b,s)&&!(q--))break;r=!q}return c.pop(),r}var a=this,b=a._,c={},d=Array.
prototype,e=Object.prototype,f=Function.prototype,g=d.slice,h=d.unshift,i=e.toString
,j=e.hasOwnProperty,k=d.forEach,l=d.map,m=d.reduce,n=d.reduceRight,o=d.filter,p=d
.every,q=d.some,r=d.indexOf,s=d.lastIndexOf,t=Array.isArray,u=Object.keys,v=f.bind
,w=function(a){return new C(a)};typeof exports!="undefined"?(typeof module!="undefined"&&
module.exports&&(exports=module.exports=w),exports._=w):typeof define=="function"&&
define.amd?define("underscore",function(){return w}):a._=w,w.VERSION="1.2.1";var x=
w.each=w.forEach=function(a,b,d){if(a==null)return;if(k&&a.forEach===k)a.forEach(
b,d);else if(a.length===+a.length){for(var e=0,f=a.length;e<f;e++)if(e in a&&b.call
(d,a[e],e,a)===c)return}else for(var g in a)if(j.call(a,g)&&b.call(d,a[g],g,a)===
c)return};w.map=function(a,b,c){var d=[];return a==null?d:l&&a.map===l?a.map(b,c)
:(x(a,function(a,e,f){d[d.length]=b.call(c,a,e,f)}),d)},w.reduce=w.foldl=w.inject=
function(a,b,c,d){var e=c!==void 0;a==null&&(a=[]);if(m&&a.reduce===m)return d&&(
b=w.bind(b,d)),e?a.reduce(b,c):a.reduce(b);x(a,function(a,f,g){e?c=b.call(d,c,a,f
,g):(c=a,e=!0)});if(!e)throw new TypeError("Reduce of empty array with no initial value"
);return c},w.reduceRight=w.foldr=function(a,b,c,d){a==null&&(a=[]);if(n&&a.reduceRight===
n)return d&&(b=w.bind(b,d)),c!==void 0?a.reduceRight(b,c):a.reduceRight(b);var e=
(w.isArray(a)?a.slice():w.toArray(a)).reverse();return w.reduce(e,b,c,d)},w.find=
w.detect=function(a,b,c){var d;return y(a,function(a,e,f){if(b.call(c,a,e,f))return d=
a,!0}),d},w.filter=w.select=function(a,b,c){var d=[];return a==null?d:o&&a.filter===
o?a.filter(b,c):(x(a,function(a,e,f){b.call(c,a,e,f)&&(d[d.length]=a)}),d)},w.reject=
function(a,b,c){var d=[];return a==null?d:(x(a,function(a,e,f){b.call(c,a,e,f)||(
d[d.length]=a)}),d)},w.every=w.all=function(a,b,d){var e=!0;return a==null?e:p&&a
.every===p?a.every(b,d):(x(a,function(a,f,g){if(!(e=e&&b.call(d,a,f,g)))return c}
),e)};var y=w.some=w.any=function(a,b,d){b=b||w.identity;var e=!1;return a==null?
e:q&&a.some===q?a.some(b,d):(x(a,function(a,f,g){if(e|=b.call(d,a,f,g))return c})
,!!e)};w.include=w.contains=function(a,b){var c=!1;return a==null?c:r&&a.indexOf===
r?a.indexOf(b)!=-1:(c=y(a,function(a){if(a===b)return!0}),c)},w.invoke=function(a
,b){var c=g.call(arguments,2);return w.map(a,function(a){return(b.call?b||a:a[b])
.apply(a,c)})},w.pluck=function(a,b){return w.map(a,function(a){return a[b]})},w.
max=function(a,b,c){if(!b&&w.isArray(a))return Math.max.apply(Math,a);if(!b&&w.isEmpty
(a))return-Infinity;var d={computed:-Infinity};return x(a,function(a,e,f){var g=b?
b.call(c,a,e,f):a;g>=d.computed&&(d={value:a,computed:g})}),d.value},w.min=function(
a,b,c){if(!b&&w.isArray(a))return Math.min.apply(Math,a);if(!b&&w.isEmpty(a))return Infinity
;var d={computed:Infinity};return x(a,function(a,e,f){var g=b?b.call(c,a,e,f):a;g<
d.computed&&(d={value:a,computed:g})}),d.value},w.shuffle=function(a){var b=[],c;
return x(a,function(a,d,e){d==0?b[0]=a:(c=Math.floor(Math.random()*(d+1)),b[d]=b[
c],b[c]=a)}),b},w.sortBy=function(a,b,c){return w.pluck(w.map(a,function(a,d,e){return{
value:a,criteria:b.call(c,a,d,e)}}).sort(function(a,b){var c=a.criteria,d=b.criteria
;return c<d?-1:c>d?1:0}),"value")},w.groupBy=function(a,b){var c={},d=w.isFunction
(b)?b:function(a){return a[b]};return x(a,function(a,b){var e=d(a,b);(c[e]||(c[e]=
[])).push(a)}),c},w.sortedIndex=function(a,b,c){c||(c=w.identity);var d=0,e=a.length
;while(d<e){var f=d+e>>1;c(a[f])<c(b)?d=f+1:e=f}return d},w.toArray=function(a){return a?
a.toArray?a.toArray():w.isArray(a)?g.call(a):w.isArguments(a)?g.call(a):w.values(
a):[]},w.size=function(a){return w.toArray(a).length},w.first=w.head=function(a,b
,c){return b!=null&&!c?g.call(a,0,b):a[0]},w.initial=function(a,b,c){return g.call
(a,0,a.length-(b==null||c?1:b))},w.last=function(a,b,c){return b!=null&&!c?g.call
(a,a.length-b):a[a.length-1]},w.rest=w.tail=function(a,b,c){return g.call(a,b==null||
c?1:b)},w.compact=function(a){return w.filter(a,function(a){return!!a})},w.flatten=
function(a,b){return w.reduce(a,function(a,c){return w.isArray(c)?a.concat(b?c:w.
flatten(c)):(a[a.length]=c,a)},[])},w.without=function(a){return w.difference(a,g
.call(arguments,1))},w.uniq=w.unique=function(a,b,c){var d=c?w.map(a,c):a,e=[];return w
.reduce(d,function(c,d,f){if(0==f||(b===!0?w.last(c)!=d:!w.include(c,d)))c[c.length
]=d,e[e.length]=a[f];return c},[]),e},w.union=function(){return w.uniq(w.flatten(
arguments,!0))},w.intersection=w.intersect=function(a){var b=g.call(arguments,1);
return w.filter(w.uniq(a),function(a){return w.every(b,function(b){return w.indexOf
(b,a)>=0})})},w.difference=function(a,b){return w.filter(a,function(a){return!w.include
(b,a)})},w.zip=function(){var a=g.call(arguments),b=w.max(w.pluck(a,"length")),c=new 
Array(b);for(var d=0;d<b;d++)c[d]=w.pluck(a,""+d);return c},w.indexOf=function(a,
b,c){if(a==null)return-1;var d,e;if(c)return d=w.sortedIndex(a,b),a[d]===b?d:-1;if(
r&&a.indexOf===r)return a.indexOf(b);for(d=0,e=a.length;d<e;d++)if(a[d]===b)return d
;return-1},w.lastIndexOf=function(a,b){if(a==null)return-1;if(s&&a.lastIndexOf===
s)return a.lastIndexOf(b);var c=a.length;while(c--)if(a[c]===b)return c;return-1}
,w.range=function(a,b,c){arguments.length<=1&&(b=a||0,a=0),c=arguments[2]||1;var d=
Math.max(Math.ceil((b-a)/c),0),e=0,f=new Array(d);while(e<d)f[e++]=a,a+=c;return f
};var z=function(){};w.bind=function(a,b){var c,d;if(a.bind===v&&v)return v.apply
(a,g.call(arguments,1));if(!w.isFunction(a))throw new TypeError;return d=g.call(arguments
,2),c=function(){if(this instanceof c){z.prototype=a.prototype;var e=new z,f=a.apply
(e,d.concat(g.call(arguments)));return Object(f)===f?f:e}return a.apply(b,d.concat
(g.call(arguments)))}},w.bindAll=function(a){var b=g.call(arguments,1);return b.length==0&&
(b=w.functions(a)),x(b,function(b){a[b]=w.bind(a[b],a)}),a},w.memoize=function(a,
b){var c={};return b||(b=w.identity),function(){var d=b.apply(this,arguments);return j
.call(c,d)?c[d]:c[d]=a.apply(this,arguments)}},w.delay=function(a,b){var c=g.call
(arguments,2);return setTimeout(function(){return a.apply(a,c)},b)},w.defer=function(
a){return w.delay.apply(w,[a,1].concat(g.call(arguments,1)))},w.throttle=function(
a,b){var c,d,e,f,g;return g=w.debounce(function(){f=!1},b),function(){d=this,e=arguments
;var h=function(){c=null,a.apply(d,e),g()};c||(c=setTimeout(h,b)),f||a.apply(d,e)
,g&&g(),f=!0}},w.debounce=function(a,b){var c;return function(){var d=this,e=arguments
,f=function(){c=null,a.apply(d,e)};clearTimeout(c),c=setTimeout(f,b)}},w.once=function(
a){var b=!1,c;return function(){return b?c:(b=!0,c=a.apply(this,arguments))}},w.wrap=
function(a,b){return function(){var c=[a].concat(g.call(arguments));return b.apply
(this,c)}},w.compose=function(){var a=g.call(arguments);return function(){var b=g
.call(arguments);for(var c=a.length-1;c>=0;c--)b=[a[c].apply(this,b)];return b[0]
}},w.after=function(a,b){return function(){if(--a<1)return b.apply(this,arguments
)}},w.keys=u||function(a){if(a!==Object(a))throw new TypeError("Invalid object");
var b=[];for(var c in a)j.call(a,c)&&(b[b.length]=c);return b},w.values=function(
a){return w.map(a,w.identity)},w.functions=w.methods=function(a){var b=[];for(var c in 
a)w.isFunction(a[c])&&b.push(c);return b.sort()},w.extend=function(a){return x(g.
call(arguments,1),function(b){for(var c in b)b[c]!==void 0&&(a[c]=b[c])}),a},w.defaults=
function(a){return x(g.call(arguments,1),function(b){for(var c in b)a[c]==null&&(
a[c]=b[c])}),a},w.clone=function(a){return w.isObject(a)?w.isArray(a)?a.slice():w
.extend({},a):a},w.tap=function(a,b){return b(a),a},w.isEqual=function(a,b){return A
(a,b,[])},w.isEmpty=function(a){if(w.isArray(a)||w.isString(a))return a.length===0
;for(var b in a)if(j.call(a,b))return!1;return!0},w.isElement=function(a){return!!
a&&a.nodeType==1},w.isArray=t||function(a){return i.call(a)=="[object Array]"},w.
isObject=function(a){return a===Object(a)},i.call(arguments)=="[object Arguments]"?
w.isArguments=function(a){return i.call(a)=="[object Arguments]"}:w.isArguments=function(
a){return!!a&&!!j.call(a,"callee")},w.isFunction=function(a){return i.call(a)=="[object Function]"
},w.isString=function(a){return i.call(a)=="[object String]"},w.isNumber=function(
a){return i.call(a)=="[object Number]"},w.isNaN=function(a){return a!==a},w.isBoolean=
function(a){return a===!0||a===!1||i.call(a)=="[object Boolean]"},w.isDate=function(
a){return i.call(a)=="[object Date]"},w.isRegExp=function(a){return i.call(a)=="[object RegExp]"
},w.isNull=function(a){return a===null},w.isUndefined=function(a){return a===void 0
},w.noConflict=function(){return a._=b,this},w.identity=function(a){return a},w.times=
function(a,b,c){for(var d=0;d<a;d++)b.call(c,d)},w.escape=function(a){return(""+a
).replace(/&(?!\w+;|#\d+;|#x[\da-f]+;)/gi,"&amp;").replace(/</g,"&lt;").replace(/>/g
,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")},w
.mixin=function(a){x(w.functions(a),function(b){E(b,w[b]=a[b])})};var B=0;w.uniqueId=
function(a){var b=B++;return a?a+b:b},w.templateSettings={evaluate:/<%([\s\S]+?)%>/g
,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},w.template=function(a,
b){var c=w.templateSettings,d="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+
a.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(c.escape,function(a,b){return"',_.escape("+
b.replace(/\\'/g,"'")+"),'"}).replace(c.interpolate,function(a,b){return"',"+b.replace
(/\\'/g,"'")+",'"}).replace(c.evaluate||null,function(a,b){return"');"+b.replace(/\\'/g
,"'").replace(/[\r\n\t]/g," ")+"__p.push('"}).replace(/\r/g,"\\r").replace(/\n/g,"\\n"
).replace(/\t/g,"\\t")+"');}return __p.join('');",e=new Function("obj",d);return b?
e(b):e};var C=function(a){this._wrapped=a};w.prototype=C.prototype;var D=function(
a,b){return b?w(a).chain():a},E=function(a,b){C.prototype[a]=function(){var a=g.call
(arguments);return h.call(a,this._wrapped),D(b.apply(w,a),this._chain)}};w.mixin(
w),x(["pop","push","reverse","shift","sort","splice","unshift"],function(a){var b=
d[a];C.prototype[a]=function(){return b.apply(this._wrapped,arguments),D(this._wrapped
,this._chain)}}),x(["concat","join","slice"],function(a){var b=d[a];C.prototype[a
]=function(){return D(b.apply(this._wrapped,arguments),this._chain)}}),C.prototype
.chain=function(){return this._chain=!0,this},C.prototype.value=function(){return this
._wrapped}}();var MicroEvent=function(){};MicroEvent.prototype={bind:function(a,b
){this._events=this._events||{},this._events[a]=this._events[a]||[],this._events[
a].push(b)},unbind:function(a,b){this._events=this._events||{};if(a in this._events==0
)return;this._events[a].splice(this._events[a].indexOf(b),1)},trigger:function(a)
{this._events=this._events||{};if(a in this._events==0)return;for(var b=0;b<this.
_events[a].length;b++)this._events[a][b].apply(this,Array.prototype.slice.call(arguments
,1))}},MicroEvent.mixin=function(a){var b=["bind","unbind","trigger"];for(var c=0
;c<b.length;c++)a.prototype[b[c]]=MicroEvent.prototype[b[c]]},typeof module!="undefined"&&"exports"in 
module&&(module.exports=MicroEvent),function(){window.RXR=function(a){return a.Helpers=
function(){function b(){}return b.prototype.drawable={pixels2int:function(a){return parseInt
(a,10)}},b.prototype.components={ready:function(){return a.Events.trigger(this.component_name+":ready"
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