var jQuery=function(){function r(){if(!c.isReady){try{document.documentElement.doScroll("left")}catch(a){setTimeout(r,1);return}c.ready()}}var c=function(a,b){return new c.fn.init(a,b)},y=window.jQuery,z=window.$,m,A=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,B=/\S/,s=/^\s+/,t=/\s+$/,C=/\W/,D=/\d/,E=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,F=/^[\],:{}\s]*$/,G=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,H=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,I=/(?:^|:|,)(?:\s*\[)+/g,J=/(webkit)[ \/]([\w.]+)/,
K=/(opera)(?:.*version)?[ \/]([\w.]+)/,L=/(msie) ([\w.]+)/,M=/(mozilla)(?:.*? rv:([\w.]+))?/,k=navigator.userAgent,u=false,l=[],j,N=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o=Array.prototype.push,p=Array.prototype.slice,v=String.prototype.trim,w=Array.prototype.indexOf,x={};c.fn=c.prototype={init:function(a,b){var d,e,f;if(!a)return this;if(a.nodeType){this.context=this[0]=a;this.length=1;return this}if(a==="body"&&!b&&document.body){this.context=document;this[0]=document.body;
this.selector="body";this.length=1;return this}if(typeof a==="string")if((d=A.exec(a))&&(d[1]||!b))if(d[1]){f=b?b.ownerDocument||b:document;if(e=E.exec(a))if(c.isPlainObject(b)){a=[document.createElement(e[1])];c.fn.attr.call(a,b,true)}else a=[f.createElement(e[1])];else{e=c.buildFragment([d[1]],[f]);a=(e.cacheable?e.fragment.cloneNode(true):e.fragment).childNodes}return c.merge(this,a)}else{if((e=document.getElementById(d[2]))&&e.parentNode){if(e.id!==d[2])return m.find(a);this.length=1;this[0]=
e}this.context=document;this.selector=a;return this}else if(!b&&!C.test(a)){this.selector=a;this.context=document;a=document.getElementsByTagName(a);return c.merge(this,a)}else return!b||b.jquery?(b||m).find(a):c(b).find(a);else if(c.isFunction(a))return m.ready(a);if(a.selector!==undefined){this.selector=a.selector;this.context=a.context}return c.makeArray(a,this)},selector:"",jquery:"@VERSION",length:0,size:function(){return this.length},toArray:function(){return p.call(this,0)},get:function(a){return a==
null?this.toArray():a<0?this.slice(a)[0]:this[a]},pushStack:function(a,b,d){var e=c();c.isArray(a)?o.apply(e,a):c.merge(e,a);e.prevObject=this;e.context=this.context;if(b==="find")e.selector=this.selector+(this.selector?" ":"")+d;else if(b)e.selector=this.selector+"."+b+"("+d+")";return e},each:function(a,b){return c.each(this,a,b)},ready:function(a){c.bindReady();if(c.isReady)a.call(document,c);else l&&l.push(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},
last:function(){return this.eq(-1)},slice:function(){return this.pushStack(p.apply(this,arguments),"slice",p.call(arguments).join(","))},map:function(a){return this.pushStack(c.map(this,function(b,d){return a.call(b,d,b)}))},end:function(){return this.prevObject||c(null)},push:o,sort:[].sort,splice:[].splice};c.fn.init.prototype=c.fn;c.extend=c.fn.extend=function(){var a=arguments[0]||{},b=1,d=arguments.length,e=false,f,g,i,h,q;if(typeof a==="boolean"){e=a;a=arguments[1]||{};b=2}if(typeof a!=="object"&&
!c.isFunction(a))a={};if(d===b){a=this;--b}for(;b<d;b++)if((f=arguments[b])!=null)for(g in f){i=a[g];h=f[g];if(a!==h)if(e&&h&&(c.isPlainObject(h)||(q=c.isArray(h)))){if(q){q=false;clone=i&&c.isArray(i)?i:[]}else clone=i&&c.isPlainObject(i)?i:{};a[g]=c.extend(e,clone,h)}else if(h!==undefined)a[g]=h}return a};c.extend({noConflict:function(a){window.$=z;if(a)window.jQuery=y;return c},isReady:false,readyWait:1,ready:function(a){a===true&&c.readyWait--;if(!c.readyWait||a!==true&&!c.isReady){if(!document.body)return setTimeout(c.ready,
1);c.isReady=true;if(!(a!==true&&--c.readyWait>0)){if(l){for(var b=0;a=l[b++];)a.call(document,c);l=null}c.fn.triggerHandler&&c(document).triggerHandler("ready")}}},bindReady:function(){if(!u){u=true;if(document.readyState==="complete")return setTimeout(c.ready,1);if(document.addEventListener){document.addEventListener("DOMContentLoaded",j,false);window.addEventListener("load",c.ready,false)}else if(document.attachEvent){document.attachEvent("onreadystatechange",j);window.attachEvent("onload",c.ready);
var a=false;try{a=window.frameElement==null}catch(b){}document.documentElement.doScroll&&a&&r()}}},isFunction:function(a){return c.type(a)==="function"},isArray:Array.isArray||function(a){return c.type(a)==="array"},isWindow:function(a){return a&&typeof a==="object"&&"setInterval"in a},isNaN:function(a){return a==null||!D.test(a)||isNaN(a)},type:function(a){return a==null?String(a):x[N.call(a)]||"object"},isPlainObject:function(a){if(!a||c.type(a)!=="object"||a.nodeType||c.isWindow(a))return false;
if(a.constructor&&!n.call(a,"constructor")&&!n.call(a.constructor.prototype,"isPrototypeOf"))return false;for(var b in a);return b===undefined||n.call(a,b)},isEmptyObject:function(a){for(var b in a)return false;return true},error:function(a){throw a;},parseJSON:function(a){if(typeof a!=="string"||!a)return null;a=c.trim(a);if(F.test(a.replace(G,"@").replace(H,"]").replace(I,"")))return window.JSON&&window.JSON.parse?window.JSON.parse(a):(new Function("return "+a))();else c.error("Invalid JSON: "+
a)},noop:function(){},globalEval:function(a){if(a&&B.test(a)){var b=document.getElementsByTagName("head")[0]||document.documentElement,d=document.createElement("script");d.type="text/javascript";if(c.support.scriptEval)d.appendChild(document.createTextNode(a));else d.text=a;b.insertBefore(d,b.firstChild);b.removeChild(d)}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,b,d){var e,f=0,g=a.length,i=g===undefined||c.isFunction(a);if(d)if(i)for(e in a){if(b.apply(a[e],
d)===false)break}else for(;f<g;){if(b.apply(a[f++],d)===false)break}else if(i)for(e in a){if(b.call(a[e],e,a[e])===false)break}else for(d=a[0];f<g&&b.call(d,f,d)!==false;d=a[++f]);return a},trim:v?function(a){return a==null?"":v.call(a)}:function(a){return a==null?"":a.toString().replace(s,"").replace(t,"")},makeArray:function(a,b){var d=b||[];if(a!=null){var e=c.type(a);a.length==null||e==="string"||e==="function"||e==="regexp"||c.isWindow(a)?o.call(d,a):c.merge(d,a)}return d},inArray:function(a,
b){if(b.indexOf)return b.indexOf(a);for(var d=0,e=b.length;d<e;d++)if(b[d]===a)return d;return-1},merge:function(a,b){var d=a.length,e=0;if(typeof b.length==="number")for(var f=b.length;e<f;e++)a[d++]=b[e];else for(;b[e]!==undefined;)a[d++]=b[e++];a.length=d;return a},grep:function(a,b,d){var e=[],f;d=!!d;for(var g=0,i=a.length;g<i;g++){f=!!b(a[g],g);d!==f&&e.push(a[g])}return e},map:function(a,b,d){for(var e=[],f,g=0,i=a.length;g<i;g++){f=b(a[g],g,d);if(f!=null)e[e.length]=f}return e.concat.apply([],
e)},guid:1,proxy:function(a,b,d){if(arguments.length===2)if(typeof b==="string"){d=a;a=d[b];b=undefined}else if(b&&!c.isFunction(b)){d=b;b=undefined}if(!b&&a)b=function(){return a.apply(d||this,arguments)};if(a)b.guid=a.guid=a.guid||b.guid||c.guid++;return b},access:function(a,b,d,e,f,g){var i=a.length;if(typeof b==="object"){for(var h in b)c.access(a,h,b[h],e,f,d);return a}if(d!==undefined){e=!g&&e&&c.isFunction(d);for(h=0;h<i;h++)f(a[h],b,e?d.call(a[h],h,f(a[h],b)):d,g);return a}return i?f(a[0],
b):undefined},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();a=J.exec(a)||K.exec(a)||L.exec(a)||a.indexOf("compatible")<0&&M.exec(a)||[];return{browser:a[1]||"",version:a[2]||"0"}},browser:{}});c.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){x["[object "+b+"]"]=b.toLowerCase()});k=c.uaMatch(k);if(k.browser){c.browser[k.browser]=true;c.browser.version=k.version}if(c.browser.webkit)c.browser.safari=true;if(w)c.inArray=function(a,
b){return w.call(b,a)};if(!/\s/.test("\u00a0")){s=/^[\s\xA0]+/;t=/[\s\xA0]+$/}m=c(document);if(document.addEventListener)j=function(){document.removeEventListener("DOMContentLoaded",j,false);c.ready()};else if(document.attachEvent)j=function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",j);c.ready()}};return window.jQuery=window.$=c}();
