!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="https://kuraimaiko.github.io/oyasumi/",n(n.s=33)}([function(t,e,n){"use strict";var r=n(2),o=n.n(r)()((function(t){return t[1]}));o.push([t.i,'body{font-family:Consolas,monaco,monospace;color:aqua;margin:0}main{padding-top:6px;padding-bottom:6px;padding-left:5px;padding-right:5px}.ct:last-of-type::after{border-right:1px solid #000}.ct{background:#181818;border:1px solid #000;border-bottom:1px solid aqua;border-right:1px solid aqua;height:55px}.ct::after{border-right:1px solid #000;width:95px;min-height:67px}.ct>.j{display:flex;align-items:center}.ct::after,.tt::after{content:"";background:#282828;position:absolute;z-index:-1;border-top:1px solid #000;border-bottom:1px solid #000}.tt{display:flex;background:#282828;height:57px}.tt>.t{display:flex;align-items:center;font-size:18px;font-weight:700;padding:5px;border-bottom:1px solid aqua}.tt>.d{font-size:20px;padding:5px}.tt::after{border-left:1px solid #000;width:130px;min-height:67px}.header{display:flex}.header>.tt,.header .ct{display:flex;align-items:center;justify-content:center;flex-direction:column;position:relative}.header>.tt:not(:last-child),.header .ct:not(:last-child){margin-right:5px}.header>.tt{flex:1 0 120px;max-width:120px}.header>.ct{flex:1 0 80px;max-width:80px}.ic{fill:aqua}.-m{font-weight:700}.-pls{padding-left:5px}.-fs18{font-size:18px}.-fs20{font-size:20px}.-fs22{font-size:22px}.-fsh0{flex-shrink:0}',""]),e.a=o},function(t,e,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),u=[];function l(t){for(var e=-1,n=0;n<u.length;n++)if(u[n].identifier===t){e=n;break}return e}function s(t,e){for(var n={},r=[],o=0;o<t.length;o++){var i=t[o],s=e.base?i[0]+e.base:i[0],a=n[s]||0,c="".concat(s," ").concat(a);n[s]=a+1;var f=l(c),_={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(u[f].references++,u[f].updater(_)):u.push({identifier:c,updater:h(_,e),references:1}),r.push(c)}return r}function a(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var u=i(t.insert||"head");if(!u)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");u.appendChild(e)}return e}var c,f=(c=[],function(t,e){return c[t]=e,c.filter(Boolean).join("\n")});function _(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=f(e,o);else{var i=document.createTextNode(o),u=t.childNodes;u[e]&&t.removeChild(u[e]),u.length?t.insertBefore(i,u[e]):t.appendChild(i)}}function d(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var p=null,v=0;function h(t,e){var n,r,o;if(e.singleton){var i=v++;n=p||(p=a(e)),r=_.bind(null,n,i,!1),o=_.bind(null,n,i,!0)}else n=a(e),r=d.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=s(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var o=l(n[r]);u[o].references--}for(var i=s(t,e),a=0;a<n.length;a++){var c=l(n[a]);0===u[c].references&&(u[c].updater(),u.splice(c,1))}n=i}}}},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var u=this[i][0];null!=u&&(o[u]=!0)}for(var l=0;l<t.length;l++){var s=[].concat(t[l]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),e.push(s))}},e}},function(t,e,n){var r={"./acn.svg":4,"./arc.svg":5,"./ast.svg":6,"./blm.svg":7,"./blu.svg":8,"./brd.svg":9,"./clock.svg":10,"./cnj.svg":11,"./default.svg":12,"./dnc.svg":13,"./drg.svg":14,"./drk.svg":15,"./gld.svg":16,"./gnb.svg":17,"./lnc.svg":18,"./mch.svg":19,"./mnk.svg":20,"./mrd.svg":21,"./nin.svg":22,"./pld.svg":23,"./pug.svg":24,"./rdm.svg":25,"./rog.svg":26,"./sam.svg":27,"./sch.svg":28,"./smn.svg":29,"./thm.svg":30,"./war.svg":31,"./whm.svg":32};function o(t){var e=i(t);return n(e)}function i(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=i,t.exports=o,o.id=3},function(t,e,n){"use strict";n.r(e),e.default={id:"acn-usage",viewBox:"0 0 512 512",url:n.p+"sprites.svg#acn",toString:function(){return this.url}}},function(t,e,n){"use strict";n.r(e),e.default={id:"arc-usage",viewBox:"0 0 512 512",url:n.p+"sprites.svg#arc",toString:function(){return this.url}}},function(t,e,n){"use strict";n.r(e),e.default={id:"ast-usage",viewBox:"0 0 512 512",url:n.p+"sprites.svg#ast",toString:function(){return this.url}}},function(t,e,n){"use strict";n.r(e),e.default={id:"blm-usage",viewBox:"0 0 512 512",url:n.p+"sprites.svg#blm",toString:function(){return this.url}}},function(t,e,n){"use strict";n.r(e),e.default={id:"blu-usage",viewBox:"0 0 512 512",url:n.p+"sprites.svg#blu",toString:function(){return this.url}}},function(t,e,n){"use strict";n.r(e),e.default={id:"brd-usage",viewBox:"0 0 512 512",url:n.p+"sprites.svg#brd",toString:function(){return this.url}}},function(t,e,n){"use strict";n.r(e),e.default={id:"clock-usage",viewBox:"0 0 24 24",url:n.p+"sprites.svg#clock",toString:function(){return this.url}}},function(t,e,n){"use strict";n.r(e),e.default={id:"cnj-usage",viewBox:"0 0 512 512",url:n.p+"sprites.svg#cnj",toString:function(){return this.url}}},function(t,e,n){"use strict";n.r(e),e.default={id:"default-usage",viewBox:"0 0 501 512",url:n.p+"sprites.svg#default",toString:function(){return this.url}}},function(t,e,n){"use strict";n.r(e),e.default={id:"dnc-usage",viewBox:"0 0 512 512",url:n.p+"sprites.svg#dnc",toString:function(){return this.url}}},function(t,e,n){"use strict";n.r(e),e.default={id:"drg-usage",viewBox:"0 0 512 512",url:n.p+"sprites.svg#drg",toString:function(){return this.url}}},function(t,e,n){"use strict";n.r(e),e.default={id:"drk-usage",viewBox:"0 0 512 512",url:n.p+"sprites.svg#drk",toString:function(){return this.url}}},function(t,e,n){"use strict";n.r(e),e.default={id:"gld-usage",viewBox:"0 0 512 512",url:n.p+"sprites.svg#gld",toString:function(){return this.url}}},function(t,e,n){"use strict";n.r(e),e.default={id:"gnb-usage",viewBox:"0 0 512 512",url:n.p+"sprites.svg#gnb",toString:function(){return this.url}}},function(t,e,n){"use strict";n.r(e),e.default={id:"lnc-usage",viewBox:"0 0 512 512",url:n.p+"sprites.svg#lnc",toString:function(){return this.url}}},function(t,e,n){"use strict";n.r(e),e.default={id:"mch-usage",viewBox:"0 0 512 512",url:n.p+"sprites.svg#mch",toString:function(){return this.url}}},function(t,e,n){"use strict";n.r(e),e.default={id:"mnk-usage",viewBox:"0 0 512 512",url:n.p+"sprites.svg#mnk",toString:function(){return this.url}}},function(t,e,n){"use strict";n.r(e),e.default={id:"mrd-usage",viewBox:"0 0 512 512",url:n.p+"sprites.svg#mrd",toString:function(){return this.url}}},function(t,e,n){"use strict";n.r(e),e.default={id:"nin-usage",viewBox:"0 0 512 512",url:n.p+"sprites.svg#nin",toString:function(){return this.url}}},function(t,e,n){"use strict";n.r(e),e.default={id:"pld-usage",viewBox:"0 0 512 512",url:n.p+"sprites.svg#pld",toString:function(){return this.url}}},function(t,e,n){"use strict";n.r(e),e.default={id:"pug-usage",viewBox:"0 0 512 512",url:n.p+"sprites.svg#pug",toString:function(){return this.url}}},function(t,e,n){"use strict";n.r(e),e.default={id:"rdm-usage",viewBox:"0 0 512 512",url:n.p+"sprites.svg#rdm",toString:function(){return this.url}}},function(t,e,n){"use strict";n.r(e),e.default={id:"rog-usage",viewBox:"0 0 512 512",url:n.p+"sprites.svg#rog",toString:function(){return this.url}}},function(t,e,n){"use strict";n.r(e),e.default={id:"sam-usage",viewBox:"0 0 512 512",url:n.p+"sprites.svg#sam",toString:function(){return this.url}}},function(t,e,n){"use strict";n.r(e),e.default={id:"sch-usage",viewBox:"0 0 512 512",url:n.p+"sprites.svg#sch",toString:function(){return this.url}}},function(t,e,n){"use strict";n.r(e),e.default={id:"smn-usage",viewBox:"0 0 512 512",url:n.p+"sprites.svg#smn",toString:function(){return this.url}}},function(t,e,n){"use strict";n.r(e),e.default={id:"thm-usage",viewBox:"0 0 512 512",url:n.p+"sprites.svg#thm",toString:function(){return this.url}}},function(t,e,n){"use strict";n.r(e),e.default={id:"war-usage",viewBox:"0 0 512 512",url:n.p+"sprites.svg#war",toString:function(){return this.url}}},function(t,e,n){"use strict";n.r(e),e.default={id:"whm-usage",viewBox:"0 0 512 512",url:n.p+"sprites.svg#whm",toString:function(){return this.url}}},function(t,e,n){"use strict";n.r(e);var r,o,i,u,l,s,a={},c=[],f=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function _(t,e){for(var n in e)t[n]=e[n];return t}function d(t){var e=t.parentNode;e&&e.removeChild(t)}function p(t,e,n){var r,o=arguments,i={};for(r in e)"key"!==r&&"ref"!==r&&(i[r]=e[r]);if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(o[r]);if(null!=n&&(i.children=n),"function"==typeof t&&null!=t.defaultProps)for(r in t.defaultProps)void 0===i[r]&&(i[r]=t.defaultProps[r]);return v(t,i,e&&e.key,e&&e.ref,null)}function v(t,e,n,o,i){var u={type:t,props:e,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:i};return null==i&&(u.__v=u),r.vnode&&r.vnode(u),u}function h(t){return t.children}function g(t,e){this.props=t,this.context=e}function m(t,e){if(null==e)return t.__?m(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?m(t):null}function y(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return y(t)}}function b(t){(!t.__d&&(t.__d=!0)&&o.push(t)&&!w.__r++||u!==r.debounceRendering)&&((u=r.debounceRendering)||i)(w)}function w(){for(var t;w.__r=o.length;)t=o.sort((function(t,e){return t.__v.__b-e.__v.__b})),o=[],t.some((function(t){var e,n,r,o,i,u,l;t.__d&&(u=(i=(e=t).__v).__e,(l=e.__P)&&(n=[],(r=_({},i)).__v=r,o=C(l,i,r,e.__n,void 0!==l.ownerSVGElement,null,n,null==u?m(i):u),E(n,i),o!=u&&y(i)))}))}function x(t,e,n,r,o,i,u,l,s,f){var _,p,g,y,b,w,x,k=r&&r.__k||c,O=k.length;for(s==a&&(s=null!=u?u[0]:O?m(r,0):null),n.__k=[],_=0;_<e.length;_++)if(null!=(y=n.__k[_]=null==(y=e[_])||"boolean"==typeof y?null:"string"==typeof y||"number"==typeof y?v(null,y,null,null,y):Array.isArray(y)?v(h,{children:y},null,null,null):null!=y.__e||null!=y.__c?v(y.type,y.props,y.key,null,y.__v):y)){if(y.__=n,y.__b=n.__b+1,null===(g=k[_])||g&&y.key==g.key&&y.type===g.type)k[_]=void 0;else for(p=0;p<O;p++){if((g=k[p])&&y.key==g.key&&y.type===g.type){k[p]=void 0;break}g=null}b=C(t,y,g=g||a,o,i,u,l,s,f),(p=y.ref)&&g.ref!=p&&(x||(x=[]),g.ref&&x.push(g.ref,null,y),x.push(p,y.__c||b,y)),null!=b?(null==w&&(w=b),s=S(t,y,g,k,u,b,s),f||"option"!=n.type?"function"==typeof n.type&&(n.__d=s):t.value=""):s&&g.__e==s&&s.parentNode!=t&&(s=m(g))}if(n.__e=w,null!=u&&"function"!=typeof n.type)for(_=u.length;_--;)null!=u[_]&&d(u[_]);for(_=O;_--;)null!=k[_]&&T(k[_],k[_]);if(x)for(_=0;_<x.length;_++)P(x[_],x[++_],x[++_])}function S(t,e,n,r,o,i,u){var l,s,a;if(void 0!==e.__d)l=e.__d,e.__d=void 0;else if(o==n||i!=u||null==i.parentNode)t:if(null==u||u.parentNode!==t)t.appendChild(i),l=null;else{for(s=u,a=0;(s=s.nextSibling)&&a<r.length;a+=2)if(s==i)break t;t.insertBefore(i,u),l=u}return void 0!==l?l:i.nextSibling}function k(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]="number"==typeof n&&!1===f.test(e)?n+"px":null==n?"":n}function O(t,e,n,r,o){var i,u,l,s,a;if(o?"className"===e&&(e="class"):"class"===e&&(e="className"),"style"===e)if(i=t.style,"string"==typeof n)i.cssText=n;else{if("string"==typeof r&&(i.cssText="",r=null),r)for(s in r)n&&s in n||k(i,s,"");if(n)for(a in n)r&&n[a]===r[a]||k(i,a,n[a])}else"o"===e[0]&&"n"===e[1]?(u=e!==(e=e.replace(/Capture$/,"")),l=e.toLowerCase(),e=(l in t?l:e).slice(2),n?(r||t.addEventListener(e,j,u),(t.l||(t.l={}))[e]=n):t.removeEventListener(e,j,u)):"list"!==e&&"tagName"!==e&&"form"!==e&&"type"!==e&&"size"!==e&&"download"!==e&&!o&&e in t?t[e]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==e&&(e!==(e=e.replace(/^xlink:?/,""))?null==n||!1===n?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(e)?t.removeAttribute(e):t.setAttribute(e,n))}function j(t){this.l[t.type](r.event?r.event(t):t)}function A(t,e,n){var r,o;for(r=0;r<t.__k.length;r++)(o=t.__k[r])&&(o.__=t,o.__e&&("function"==typeof o.type&&o.__k.length>1&&A(o,e,n),e=S(n,o,o,t.__k,null,o.__e,e),"function"==typeof t.type&&(t.__d=e)))}function C(t,e,n,o,i,u,l,s,a){var c,f,d,p,v,m,y,b,w,S,k,O=e.type;if(void 0!==e.constructor)return null;(c=r.__b)&&c(e);try{t:if("function"==typeof O){if(b=e.props,w=(c=O.contextType)&&o[c.__c],S=c?w?w.props.value:c.__:o,n.__c?y=(f=e.__c=n.__c).__=f.__E:("prototype"in O&&O.prototype.render?e.__c=f=new O(b,S):(e.__c=f=new g(b,S),f.constructor=O,f.render=N),w&&w.sub(f),f.props=b,f.state||(f.state={}),f.context=S,f.__n=o,d=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=O.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=_({},f.__s)),_(f.__s,O.getDerivedStateFromProps(b,f.__s))),p=f.props,v=f.state,d)null==O.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==O.getDerivedStateFromProps&&b!==p&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(b,S),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(b,f.__s,S)||e.__v===n.__v){f.props=b,f.state=f.__s,e.__v!==n.__v&&(f.__d=!1),f.__v=e,e.__e=n.__e,e.__k=n.__k,f.__h.length&&l.push(f),A(e,s,t);break t}null!=f.componentWillUpdate&&f.componentWillUpdate(b,f.__s,S),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(p,v,m)}))}f.context=S,f.props=b,f.state=f.__s,(c=r.__r)&&c(e),f.__d=!1,f.__v=e,f.__P=t,c=f.render(f.props,f.state,f.context),f.state=f.__s,null!=f.getChildContext&&(o=_(_({},o),f.getChildContext())),d||null==f.getSnapshotBeforeUpdate||(m=f.getSnapshotBeforeUpdate(p,v)),k=null!=c&&c.type==h&&null==c.key?c.props.children:c,x(t,Array.isArray(k)?k:[k],e,n,o,i,u,l,s,a),f.base=e.__e,f.__h.length&&l.push(f),y&&(f.__E=f.__=null),f.__e=!1}else null==u&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=B(n.__e,e,n,o,i,u,l,a);(c=r.diffed)&&c(e)}catch(t){e.__v=null,r.__e(t,e,n)}return e.__e}function E(t,e){r.__c&&r.__c(e,t),t.some((function(e){try{t=e.__h,e.__h=[],t.some((function(t){t.call(e)}))}catch(t){r.__e(t,e.__v)}}))}function B(t,e,n,r,o,i,u,l){var s,f,_,d,p,v=n.props,h=e.props;if(o="svg"===e.type||o,null!=i)for(s=0;s<i.length;s++)if(null!=(f=i[s])&&((null===e.type?3===f.nodeType:f.localName===e.type)||t==f)){t=f,i[s]=null;break}if(null==t){if(null===e.type)return document.createTextNode(h);t=o?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type,h.is&&{is:h.is}),i=null,l=!1}if(null===e.type)v!==h&&t.data!==h&&(t.data=h);else{if(null!=i&&(i=c.slice.call(t.childNodes)),_=(v=n.props||a).dangerouslySetInnerHTML,d=h.dangerouslySetInnerHTML,!l){if(null!=i)for(v={},p=0;p<t.attributes.length;p++)v[t.attributes[p].name]=t.attributes[p].value;(d||_)&&(d&&_&&d.__html==_.__html||(t.innerHTML=d&&d.__html||""))}(function(t,e,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in e||O(t,i,null,n[i],r);for(i in e)o&&"function"!=typeof e[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===e[i]||O(t,i,e[i],n[i],r)})(t,h,v,o,l),d?e.__k=[]:(s=e.props.children,x(t,Array.isArray(s)?s:[s],e,n,r,"foreignObject"!==e.type&&o,i,u,a,l)),l||("value"in h&&void 0!==(s=h.value)&&s!==t.value&&O(t,"value",s,v.value,!1),"checked"in h&&void 0!==(s=h.checked)&&s!==t.checked&&O(t,"checked",s,v.checked,!1))}return t}function P(t,e,n){try{"function"==typeof t?t(e):t.current=e}catch(t){r.__e(t,n)}}function T(t,e,n){var o,i,u;if(r.unmount&&r.unmount(t),(o=t.ref)&&(o.current&&o.current!==t.__e||P(o,null,e)),n||"function"==typeof t.type||(n=null!=(i=t.__e)),t.__e=t.__d=void 0,null!=(o=t.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(t){r.__e(t,e)}o.base=o.__P=null}if(o=t.__k)for(u=0;u<o.length;u++)o[u]&&T(o[u],e,n);null!=i&&d(i)}function N(t,e,n){return this.constructor(t,n)}function L(t,e,n){var o,i,u;r.__&&r.__(t,e),i=(o=n===l)?null:n&&n.__k||e.__k,t=p(h,null,[t]),u=[],C(e,(o?e:n||e).__k=t,i||a,a,void 0!==e.ownerSVGElement,n&&!o?[n]:i?null:e.childNodes.length?c.slice.call(e.childNodes):null,u,n||a,o),E(u,t)}r={__e:function(t,e){for(var n,r;e=e.__;)if((n=e.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(r=!0,n.setState(n.constructor.getDerivedStateFromError(t))),null!=n.componentDidCatch&&(r=!0,n.componentDidCatch(t)),r)return b(n.__E=n)}catch(e){t=e}throw t}},g.prototype.setState=function(t,e){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=_({},this.state),"function"==typeof t&&(t=t(n,this.props)),t&&_(n,t),null!=t&&this.__v&&(e&&this.__h.push(e),b(this))},g.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),b(this))},g.prototype.render=h,o=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,w.__r=0,l=a,s=0;var H,M,U,I=0,q=[],D=r.__r,F=r.diffed,W=r.__c,R=r.unmount;function z(t,e){r.__h&&r.__h(M,t,I||e),I=0;var n=M.__H||(M.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function J(t){return I=1,function(t,e,n){var r=z(H++,2);return r.t=t,r.__c||(r.__c=M,r.__=[n?n(e):Q(void 0,e),function(t){var e=r.t(r.__[0],t);r.__[0]!==e&&(r.__=[e,r.__[1]],r.__c.setState({}))}]),r.__}(Q,t)}function $(){q.some((function(t){if(t.__P)try{t.__H.__h.forEach(V),t.__H.__h.forEach(Y),t.__H.__h=[]}catch(e){return t.__H.__h=[],r.__e(e,t.__v),!0}})),q=[]}r.__r=function(t){D&&D(t),H=0;var e=(M=t.__c).__H;e&&(e.__h.forEach(V),e.__h.forEach(Y),e.__h=[])},r.diffed=function(t){F&&F(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(1!==q.push(e)&&U===r.requestAnimationFrame||((U=r.requestAnimationFrame)||function(t){var e,n=function(){clearTimeout(r),G&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);G&&(e=requestAnimationFrame(n))})($))},r.__c=function(t,e){e.some((function(t){try{t.__h.forEach(V),t.__h=t.__h.filter((function(t){return!t.__||Y(t)}))}catch(n){e.some((function(t){t.__h&&(t.__h=[])})),e=[],r.__e(n,t.__v)}})),W&&W(t,e)},r.unmount=function(t){R&&R(t);var e=t.__c;if(e&&e.__H)try{e.__H.__.forEach(V)}catch(t){r.__e(t,e.__v)}};var G="function"==typeof requestAnimationFrame;function V(t){"function"==typeof t.u&&t.u()}function Y(t){t.u=t.__()}function K(t,e){return!t||e.some((function(e,n){return e!==t[n]}))}function Q(t,e){return"function"==typeof e?e(t):e}function X(t){return(X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var Z=function(){for(var t=[],e=0;e<arguments.length;e++){var n=e<0||arguments.length<=e?void 0:arguments[e];if(n){var r=X(n);if("string"===r)t.push(n);else if("object"===r&&!Array.isArray(n))for(var o in n)!0===n[o]&&t.push(o)}}if(!(t.length<1))return t.join(" ")};function tt(){return(tt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function et(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}n(3);var nt=function(t){var e=t.name,n=t.classes,r=t.width,o=t.height,i=(t.isRTL,t.sprites,t.store,t.viewBox),u=(t.icons,et(t,["name","classes","width","height","isRTL","sprites","store","viewBox","icons"])),l="sprites.svg#".concat(e);return p("svg",tt({},u,i?{viewBox:i}:{},{class:Z("ic",n),width:r||"30",height:o||"30"}),p("use",{xlinkHref:l}))},rt=["acn","arc","ast","blm","blu","brd","cnj","dnc","drg","drk","gld","gnb","lnc","mch","mnk","mrd","nin","pld","pug","rdm","rog","sam","sch","smn","thm","war","whm"],ot=function(t){var e=t.job,n=t.name,r=t.dps;return p("div",{class:"ct"},p("div",{class:"j"},p(nt,{classes:"-fsh0",name:rt.includes(e)?e:"default"}),p("span",null," ",n," ")),p("span",{class:"-m -fs18"},r))};function it(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function ut(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var u,l=t[Symbol.iterator]();!(r=(u=l.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return lt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return lt(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function lt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var st=function(t){var e={},n={__c:"__cC"+s++,__:t,Consumer:function(t,e){return t.children(e)},Provider:function(t){var r,o=this;return this.getChildContext||(r=[],this.getChildContext=function(){return e[n.__c]=o,e},this.shouldComponentUpdate=function(t){o.props.value!==t.value&&r.some((function(e){e.context=t.value,b(e)}))},this.sub=function(t){r.push(t);var e=t.componentWillUnmount;t.componentWillUnmount=function(){r.splice(r.indexOf(t),1),e&&e.call(t)}}),t.children}};return n.Consumer.contextType=n,n.Provider.__=n,n}([{},[]]),at=function(t){var e,n,o,i=t.children,u=ut(J({}),2),l=u[0],s=u[1],a=ut(J([]),2),c=a[0],f=a[1],_=ut(J(!1),2),d=_[0],v=_[1];return e=function(){window.addOverlayListener("CombatData",(function(t){v("true"===t.isActive),s({time:t.Encounter.duration,rdps:t.Encounter["encdps-*"]}),f(Object.keys(t.Combatant).slice(0,8).map((function(e){return function(t){var e=t.Job,n=(t.encdps,t.name),r=it(t,["Job","encdps","name"]);return{job:e.toLowerCase(),dps:r["encdps-*"],name:n.split(" ").slice(0,2).map((function(t){return"YOU"===t?"You":"".concat(t.charAt(0),".")})).join(" ")}}(t.Combatant[e])})))})),window.startOverlayEvents()},n=[],o=z(H++,3),!r.__s&&K(o.__H,n)&&(o.__=e,o.__H=n,M.__H.__h.push(o)),p(st.Provider,{value:[l,c,d]},i)},ct=st;function ft(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var u,l=t[Symbol.iterator]();!(r=(u=l.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return _t(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _t(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _t(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var dt=function(){var t=ft(function(t){var e=M.context[t.__c],n=z(H++,9);return n.__c=t,e?(null==n.__&&(n.__=!0,e.sub(M)),e.props.value):t.__}(ct),3),e=t[0],n=t[1];if(t[2])return p("div",{class:"w"},p("div",{class:"header"},p("div",{class:"tt"},p("div",{class:"t"},p(nt,{name:"clock",height:"20",width:"20"}),p("span",{class:"-pls"},e.time)),p("span",{class:"d"},e.rdps)),n.map((function(t){return p(ot,t)}))))},pt=new URLSearchParams(window.location.search);function vt(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var u,l=t[Symbol.iterator]();!(r=(u=l.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}return n}(t,e)||gt(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ht(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=gt(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return u=t.done,t},e:function(t){l=!0,i=t},f:function(){try{u||null==n.return||n.return()}finally{if(l)throw i}}}}function gt(t,e){if(t){if("string"==typeof t)return mt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?mt(t,e):void 0}}function mt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var yt,bt=(yt="ws",pt.get(yt)),wt=null,xt=[],St=0,kt={},Ot={},jt=null,At=!1;if(bt){jt=function(t){xt?xt.push(t):wt.send(JSON.stringify(t))};!function t(){(wt=new WebSocket(bt)).addEventListener("error",(function(t){console.error(t)})),wt.addEventListener("open",(function(){console.log("Connected!");var t=xt;xt=null;var e,n=ht(t);try{for(n.s();!(e=n.n()).done;){var r=e.value;jt(r)}}catch(t){n.e(t)}finally{n.f()}})),wt.addEventListener("message",(function(t){try{t=JSON.parse(t.data)}catch(e){return void console.error("Invalid message received:",t)}void 0!==t.rseq&&kt[t.rseq]?(kt[t.rseq](t),delete kt[t.rseq]):Ct(t)})),wt.addEventListener("close",(function(){xt=[],console.log("Trying to reconnect..."),setTimeout((function(){t()}),300)}))}()}else{jt=function(t,e){xt?xt.push([t,e]):OverlayPluginApi.callHandler(JSON.stringify(t),e)};!function t(){if(window.OverlayPluginApi&&window.OverlayPluginApi.ready){var e=xt;xt=null,window.__OverlayCallback=Ct;var n,r=ht(e);try{for(r.s();!(n=r.n()).done;){var o=vt(n.value,2),i=o[0],u=o[1];jt(i,u)}}catch(t){r.e(t)}finally{r.f()}}else setTimeout(t,300)}()}var Ct=function(t){if(Ot[t.type]){var e,n=ht(Ot[t.type]);try{for(n.s();!(e=n.n()).done;){(0,e.value)(t)}}catch(t){n.e(t)}finally{n.f()}}};window.dispatchOverlayEvent=Ct,window.addOverlayListener=function(t,e){At&&Ot[t]&&console.warn("A new listener for ".concat(t," has been registered after event transmission has already begun.\nSome events might have been missed and no cached values will be transmitted.\nPlease register your listeners before calling startOverlayEvents().")),Ot[t]||(Ot[t]=[]),Ot[t].push(e)},window.removeOverlayListener=function(t,e){if(Ot[t]){var n=Ot[t],r=n.indexOf(e);r>-1&&n.splice(r,1)}},window.callOverlayHandler=function(t){var e;return wt?(t.rseq=St++,e=new Promise((function(e,n){kt[t.rseq]=e})),jt(t)):e=new Promise((function(e){jt(t,(function(t){e(null===t?null:JSON.parse(t))}))})),e},window.startOverlayEvents=function(){At=!1,jt({call:"subscribe",events:Object.keys(Ot)})};var Et=n(1),Bt=n.n(Et),Pt=n(0),Tt={insert:"head",singleton:!1};Bt()(Pt.a,Tt),Pt.a.locals;L(p((function(){return p("main",null,p(at,null,p(dt,null)))}),null),document.querySelector("body"))}]);