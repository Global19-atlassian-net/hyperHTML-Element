var HyperHTMLElement = (function (exports) {
  'use strict';

  /*! (c) Andrea Giammarchi (ISC) */var hyperHTML=function(e){function t(){return this}function n(e){this.childNodes=e,this.length=e.length,this.first=e[0],this.last=e[this.length-1],this._=null;}function r(){}function i(e){var t=Ze.get(this);return t&&t.template===pe(e)?a.apply(t.updates,arguments):o.apply(this,arguments),this}function o(e){e=pe(e);var t=Ve.get(e)||u.call(this,e),n=he(this.ownerDocument,t.fragment),r=Be.create(n,t.paths);Ze.set(this,{template:e,updates:r}),a.apply(r,arguments),this.textContent="",this.appendChild(n);}function a(){for(var e=arguments.length,t=1;t<e;t++)this[t-1](arguments[t]);}function u(e){var t=[],n=e.join(G).replace(Ge,Ie),r=fe(this,n);Be.find(r,t,e.slice());var i={fragment:r,paths:t};return Ve.set(e,i),i}function c(e){return arguments.length<2?null==e?Ke("html"):"string"==typeof e?c.wire(null,e):"raw"in e?Ke("html")(e):"nodeType"in e?c.bind(e):Qe(e,"html"):("raw"in e?Ke("html"):c.wire).apply(null,arguments)}/*! (c) Andrea Giammarchi - ISC */
  var l={};try{l.WeakMap=WeakMap;}catch(WeakMap){l.WeakMap=function(e,t){function n(t){i(this,"_",{value:"_@ungap/weakmap"+e++}),t&&t.forEach(r,this);}function r(e){this.set(e[0],e[1]);}var i=t.defineProperty,o=t.hasOwnProperty,a=n.prototype;return a["delete"]=function(e){return this.has(e)&&delete e[this._]},a.get=function(e){return this.has(e)?e[this._]:void 0},a.has=function(e){return o.call(e,this._)},a.set=function(e,t){return i(e,this._,{configurable:!0,value:t}),this},n}(Math.random(),Object);}var s=l.WeakMap,f={};try{f.WeakSet=WeakSet;}catch(WeakSet){!function(e,t){function n(){t(this,"_",{value:"_@ungap/weakmap"+e++});}var r=n.prototype;r.add=function(e){return this.has(e)||t(e,this._,{value:!0,configurable:!0}),this},r.has=function(e){return this.hasOwnProperty.call(e,this._)},r["delete"]=function(e){return this.has(e)&&delete e[this._]},f.WeakSet=n;}(Math.random(),Object.defineProperty);}var d=f.WeakSet,h={};try{h.Map=Map;}catch(Map){h.Map=function(){function e(e){return -1<(t=n.indexOf(e))}var t=0,n=[],r=[];return {"delete":function(i){var o=e(i);return o&&(n.splice(t,1),r.splice(t,1)),o},get:function(n){return e(n)?r[t]:void 0},has:function(t){return e(t)},set:function(i,o){return r[e(i)?t:n.push(i)-1]=o,this}}};}var v=h.Map,p=function(e,t,n,r,i,o){if(i-r<2)t.insertBefore(e(n[r],1),o);else{for(var a=t.ownerDocument.createDocumentFragment();r<i;)a.appendChild(e(n[r++],1));t.insertBefore(a,o);}},m=function(e,t){return e==t},g=function(e){return e},b=function(e,t,n,r,i,o,a){var u=o-i;if(u<1)return -1;for(;n-t>=u;){for(var c=t,l=i;c<n&&l<o&&a(e[c],r[l]);)c++,l++;if(l===o)return t;t=c+1;}return -1},w=function(e,t,n,r,i,o){for(;r<i&&o(n[r],e[t-1]);)r++,t--;return 0===t},y=function(e,t,n,r,i){return n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:i},N=function(e,t,n,r,i){if(i-r<2)t.removeChild(e(n[r],-1));else{var o=t.ownerDocument.createRange();o.setStartBefore(e(n[r],-1)),o.setEndAfter(e(n[i-1],-1)),o.deleteContents();}},E=function(e,t,n,r,i,o,a,u){var c=0,l=r<u?r:u,s=Array(l++),f=Array(l);f[0]=-1;for(var d=1;d<l;d++)f[d]=a;for(var h=new v,p=o;p<a;p++)h.set(i[p],p);for(var m=t;m<n;m++){var g=h.get(e[m]);null!=g&&-1<(c=C(f,l,g))&&(f[c]=g,s[c]={newi:m,oldi:g,prev:s[c-1]});}for(c=--l,--a;f[c]>a;)--c;l=u+r-c;var b=Array(l),w=s[c];for(--n;w;){for(var y=w,N=y.newi,E=y.oldi;n>N;)b[--l]=1,--n;for(;a>E;)b[--l]=-1,--a;b[--l]=0,--n,--a,w=w.prev;}for(;n>=t;)b[--l]=1,--n;for(;a>=o;)b[--l]=-1,--a;return b},k=function(e,t,n,r,i,o,a){var u=n+o,c=[],l=void 0,s=void 0,f=void 0,d=void 0,h=void 0,v=void 0,p=void 0;e:for(l=0;l<=u;l++){if(l>50)return null;for(p=l-1,h=l?c[l-1]:[0,0],v=c[l]=[],s=-l;s<=l;s+=2){for(d=s===-l||s!==l&&h[p+s-1]<h[p+s+1]?h[p+s+1]:h[p+s-1]+1,f=d-s;d<o&&f<n&&a(r[i+d],e[t+f]);)d++,f++;if(d===o&&f===n)break e;v[l+s]=d;}}var m=Array(l/2+u/2),g=m.length-1;for(l=c.length-1;l>=0;l--){for(;d>0&&f>0&&a(r[i+d-1],e[t+f-1]);)m[g--]=0,d--,f--;if(!l)break;p=l-1,h=l?c[l-1]:[0,0],s=d-f,s===-l||s!==l&&h[p+s-1]<h[p+s+1]?(f--,m[g--]=1):(d--,m[g--]=-1);}return m},x=function(e,t,n,r,i,o,a,u,c){for(var l=new v,s=e.length,f=a,d=0;d<s;)switch(e[d++]){case 0:i++,f++;break;case 1:l.set(r[i],1),p(t,n,r,i++,i,f<u?t(o[f],1):c);break;case-1:f++;}for(d=0;d<s;)switch(e[d++]){case 0:a++;break;case-1:l.has(o[a])?a++:N(t,n,o,a++,a);}},C=function(e,t,n){for(var r=1,i=t;r<i;){var o=(r+i)/2>>>0;n<e[o]?i=o:r=o+1;}return r},S=function(e,t,n,r,i,o,a,u,c,l,s,f,d){x(k(n,r,o,a,u,l,f)||E(n,r,i,o,a,u,c,l),e,t,n,r,a,u,s,d);},M=function(e,t,n,r){r||(r={});for(var i=r.compare||m,o=r.node||g,a=null==r.before?null:o(r.before,0),u=t.length,c=u,l=0,s=n.length,f=0;l<c&&f<s&&i(t[l],n[f]);)l++,f++;for(;l<c&&f<s&&i(t[c-1],n[s-1]);)c--,s--;var d=l===c,h=f===s;if(d&&h)return n;if(d&&f<s)return p(o,e,n,f,s,y(o,t,l,u,a)),n;if(h&&l<c)return N(o,e,t,l,c),n;var v=c-l,E=s-f,k=-1;if(v<E){if(-1<(k=b(n,f,s,t,l,c,i)))return p(o,e,n,f,k,o(t[l],0)),p(o,e,n,k+v,s,y(o,t,c,u,a)),n}else if(E<v&&-1<(k=b(t,l,c,n,f,s,i)))return N(o,e,t,l,k),N(o,e,t,k+E,c),n;return v<2||E<2?(p(o,e,n,f,s,o(t[l],0)),N(o,e,t,l,c),n):v===E&&w(n,s,t,l,c,i)?(p(o,e,n,f,s,y(o,t,c,u,a)),n):(S(o,e,n,f,s,E,t,l,c,v,u,i,a),n)},_={};try{_.CustomEvent=new CustomEvent(".").constructor;}catch(CustomEvent){_.CustomEvent=function(e,t){t||(t={});var n=document.createEvent("Event"),r=!!t.bubbles,i=!!t.cancelable;return n.initEvent(e,r,i),n.bubbles=r,n.cancelable=i,n.detail=t.detail,n};}var A=_.CustomEvent,O=function(e,t){var n="_"+e+"$";return {get:function(){return this[n]||j(this,n,t.call(this,e))},set:function(e){j(this,n,e);}}},j=function(e,t,n){return Object.defineProperty(e,t,{configurable:!0,value:"function"==typeof n?function(){return e._wire$=n.apply(this,arguments)}:n})[t]},T={},L={},P=[],W=L.hasOwnProperty,$=0,D={attributes:T,define:function(e,t){e.indexOf("-")<0?(e in L||($=P.push(e)),L[e]=t):T[e]=t;},invoke:function(e,t){for(var n=0;n<$;n++){var r=P[n];if(W.call(e,r))return L[r](e[r],t)}}},R=Array.isArray||function(e){var t=e.call([]);return function(n){return e.call(n)===t}}({}.toString),H="".trim||function(){return String(this).replace(/^\s+|\s+/g,"")},z=document.defaultView,F=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,B="http://www.w3.org/2000/svg",Z=/^(?:style|textarea)$/i,V="_hyper: "+(Math.random()*new Date|0)+";",G="\x3c!--"+V+"--\x3e",I=" \\f\\n\\r\\t",q="[ "+I+"]+[^  \\f\\n\\r\\t\\/>\"'=]+",J="<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",K="(?:=(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|[^  \\f\\n\\r\\t\\/>\"'=]+))?)",Q=new RegExp(J+q+K+"+)([ "+I+"]*/?>)","g"),U=new RegExp(J+q+K+"*)([ "+I+"]*/>)","g"),X=function(e,t){return Y(e).createElement(t)},Y=function(e){return e.ownerDocument||e},ee=function(e){return Y(e).createDocumentFragment()},te=function(e,t){return Y(e).createTextNode(t)},ne=ee(document),re="append"in ne,ie="content"in X(document,"template");ne.appendChild(te(ne,"g")),ne.appendChild(te(ne,""));var oe=1===ne.cloneNode(!0).childNodes.length,ae="importNode"in document,ue=re?function(e,t){e.append.apply(e,t);}:function(e,t){for(var n=t.length,r=0;r<n;r++)e.appendChild(t[r]);},ce=new RegExp("("+q+"=)(['\"]?)"+G+"\\2","gi"),le=function(e,t,n,r){return "<"+t+n.replace(ce,se)+r},se=function(e,t,n){return t+(n||'"')+V+(n||'"')},fe=function(e,t){return ("ownerSVGElement"in e?be:ge)(e,t.replace(Q,le))},de=oe?function(e){for(var t=e.cloneNode(),n=e.childNodes||[],r=n.length,i=0;i<r;i++)t.appendChild(de(n[i]));return t}:function(e){return e.cloneNode(!0)},he=ae?function(e,t){return e.importNode(t,!0)}:function(e,t){return de(t)},ve=[].slice,pe=function(e){return me(e)},me=function(e){if(e.propertyIsEnumerable("raw")||!Object.isFrozen(e.raw)||/Firefox\/(\d+)/.test((z.navigator||{}).userAgent)&&parseFloat(RegExp.$1)<55){var t={};me=function(e){var n="^"+e.join("^");return t[n]||(t[n]=e)};}else me=function(e){return e};return me(e)},ge=ie?function(e,t){var n=X(e,"template");return n.innerHTML=t,n.content}:function(e,t){var n=X(e,"template"),r=ee(e);if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)){var i=RegExp.$1;n.innerHTML="<table>"+t+"</table>",ue(r,ve.call(n.querySelectorAll(i)));}else n.innerHTML=t,ue(r,ve.call(n.childNodes));return r},be=ie?function(e,t){var n=ee(e),r=Y(e).createElementNS(B,"svg");return r.innerHTML=t,ue(n,ve.call(r.childNodes)),n}:function(e,t){var n=ee(e),r=X(e,"div");return r.innerHTML='<svg xmlns="'+B+'">'+t+"</svg>",ue(n,ve.call(r.firstChild.childNodes)),n};n.prototype.valueOf=function(e){var t=null==this._;return t&&(this._=ee(this.first)),(t||e)&&ue(this._,this.childNodes),this._},n.prototype.remove=function(){this._=null;var e=this.first,t=this.last;if(2===this.length)t.parentNode.removeChild(t);else{var n=Y(e).createRange();n.setStartBefore(this.childNodes[1]),n.setEndAfter(t),n.deleteContents();}return e};var we=function(e){var t=[],n=void 0;switch(e.nodeType){case 1:case 11:n=e;break;case 8:n=e.parentNode,ye(t,n,e);break;default:n=e.ownerElement;}for(e=n;n=n.parentNode;e=n)ye(t,n,e);return t},ye=function(e,t,n){e.unshift(e.indexOf.call(t.childNodes,n));},Ne={create:function(e,t,n){return {type:e,name:n,node:t,path:we(t)}},find:function(e,t){for(var n=t.length,r=0;r<n;r++)e=e.childNodes[t[r]];return e}},Ee=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,ke=function(e,t,n){if(n){var r=t.cloneNode(!0);return r.value="",e.setAttributeNode(r),xe(r,n)}return xe(e.style,n)},xe=function(e,t){var n=void 0,r=void 0;return function(i){switch(typeof i){case"object":if(i){if("object"===n){if(!t&&r!==i)for(var o in r)o in i||(e[o]="");}else t?e.value="":e.cssText="";var a=t?{}:e;for(var u in i){var c=i[u],l="number"!=typeof c||Ee.test(u)?c:c+"px";!t&&/^--/.test(u)?a.setProperty(u,l):a[u]=l;}n="object",t?e.value=Me(r=a):r=i;break}default:r!=i&&(n="string",r=i,t?e.value=i||"":e.cssText=i||"");}}},Ce=/([^A-Z])([A-Z]+)/g,Se=function(e,t,n){return t+"-"+n.toLowerCase()},Me=function(e){var t=[];for(var n in e)t.push(n.replace(Ce,Se),":",e[n],";");return t.join("")},_e=z.document,Ae=/*! (c) Andrea Giammarchi */
  function(e){function t(e){function t(e){s=new l;for(var t,i=e.length,o=0;o<i;o++)t=e[o],a(t.removedNodes,r,n),a(t.addedNodes,n,r);s=null;}function a(e,t,n){for(var r,o=new i(t),a=e.length,u=0;u<a;1===(r=e[u++]).nodeType&&c(r,o,t,n));}function c(e,t,n,r){u.has(e)&&!s[n].has(e)&&(s[r]["delete"](e),s[n].add(e),e.dispatchEvent(t));for(var i=e.children,o=i.length,a=0;a<o;c(i[a++],t,n,r));}function l(){this[n]=new o,this[r]=new o;}var s=null;try{new MutationObserver(t).observe(e,{subtree:!0,childList:!0});}catch(v){var f=0,d=[],h=function(e){d.push(e),clearTimeout(f),f=setTimeout(function(){t(d.splice(f=0,d.length));},0);};e.addEventListener("DOMNodeRemoved",function(e){h({addedNodes:[],removedNodes:[e.target]});},!0),e.addEventListener("DOMNodeInserted",function(e){h({addedNodes:[e.target],removedNodes:[]});},!0);}}var n="connected",r="dis"+n,i=e.Event,o=e.WeakSet,a=!0,u=new o;return function(e){return a&&(a=!a,t(e.ownerDocument)),u.add(e),e}}({Event:A,WeakSet:d});r.prototype=Object.create(null);var Oe=function(e){return {html:e}},je=function et(e,t){return "ELEMENT_NODE"in e?e:e.constructor===n?1/t<0?t?e.remove():e.last:t?e.valueOf(!0):e.first:et(e.render(),t)},Te=function(e){return "ELEMENT_NODE"in e||e instanceof n||e instanceof t},Le=function(e,t){for(var n=[],r=t.length,i=0;i<r;i++){var o=t[i],a=Ne.find(e,o.path);switch(o.type){case"any":n.push(He(a,[]));break;case"attr":n.push(ze(a,o.name,o.node));break;case"text":n.push(Fe(a)),a.textContent="";}}return n},Pe=function tt(e,t,n){for(var r=e.childNodes,i=r.length,o=0;o<i;o++){var a=r[o];switch(a.nodeType){case 1:We(a,t,n),tt(a,t,n);break;case 8:a.textContent===V&&(n.shift(),t.push(Z.test(e.nodeName)?Ne.create("text",e):Ne.create("any",a)));break;case 3:Z.test(e.nodeName)&&H.call(a.textContent)===G&&(n.shift(),t.push(Ne.create("text",e)));}}},We=function(e,t,n){for(var i=new r,o=e.attributes,a=ve.call(o),u=[],c=a.length,l=0;l<c;l++){var s=a[l];if(s.value===V){var f=s.name;if(!(f in i)){var d=n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)=['"]?$/,"$1");i[f]=o[d]||o[d.toLowerCase()],t.push(Ne.create("attr",i[f],d));}u.push(s);}}for(var h=u.length,v=0;v<h;v++){var p=u[v];/^id$/i.test(p.name)?e.removeAttribute(p.name):e.removeAttributeNode(u[v]);}var m=e.nodeName;if(/^script$/i.test(m)){for(var g=_e.createElement(m),b=0;b<o.length;b++)g.setAttributeNode(o[b].cloneNode(!0));g.textContent=e.textContent,e.parentNode.replaceChild(g,e);}},$e=function(e,t){t(e.placeholder),"text"in e?Promise.resolve(e.text).then(String).then(t):"any"in e?Promise.resolve(e.any).then(t):"html"in e?Promise.resolve(e.html).then(Oe).then(t):Promise.resolve(D.invoke(e,t)).then(t);},De=function(e){return null!=e&&"then"in e},Re=/^(?:form|list)$/i,He=function(e,t){var n={node:je,before:e},r=!1,i=void 0;return function o(a){switch(typeof a){case"string":case"number":case"boolean":r?i!==a&&(i=a,t[0].textContent=a):(r=!0,i=a,t=M(e.parentNode,t,[te(e,a)],n));break;case"function":o(a(e));break;case"object":case"undefined":if(null==a){r=!1,t=M(e.parentNode,t,[],n);break}default:if(r=!1,i=a,R(a))if(0===a.length)t.length&&(t=M(e.parentNode,t,[],n));else switch(typeof a[0]){case"string":case"number":case"boolean":o({html:a});break;case"object":if(R(a[0])&&(a=a.concat.apply([],a)),De(a[0])){Promise.all(a).then(o);break}default:t=M(e.parentNode,t,a,n);}else Te(a)?t=M(e.parentNode,t,11===a.nodeType?ve.call(a.childNodes):[a],n):De(a)?a.then(o):"placeholder"in a?$e(a,o):"text"in a?o(String(a.text)):"any"in a?o(a.any):"html"in a?t=M(e.parentNode,t,ve.call(fe(e,[].concat(a.html).join("")).childNodes),n):o("length"in a?ve.call(a):D.invoke(a,o));}}},ze=function(e,t,n){var r="ownerSVGElement"in e,i=void 0;if("style"===t)return ke(e,n,r);if(/^on/.test(t)){var o=t.slice(2);return "connected"===o||"disconnected"===o?Ae(e):t.toLowerCase()in e&&(o=o.toLowerCase()),function(t){i!==t&&(i&&e.removeEventListener(o,i,!1),i=t,t&&e.addEventListener(o,t,!1));}}if("data"===t||!r&&t in e&&!Re.test(t))return function(n){i!==n&&(i=n,e[t]!==n&&(e[t]=n,null==n&&e.removeAttribute(t)));};if(t in D.attributes)return function(n){i=D.attributes[t](e,n),e.setAttribute(t,null==i?"":i);};var a=!1,u=n.cloneNode(!0);return function(t){i!==t&&(i=t,u.value!==t&&(null==t?(a&&(a=!1,e.removeAttributeNode(u)),u.value=t):(u.value=t,a||(a=!0,e.setAttributeNode(u)))));}},Fe=function(e){var t=void 0;return function n(r){if(t!==r){t=r;var i=typeof r;"object"===i&&r?De(r)?r.then(n):"placeholder"in r?$e(r,n):n("text"in r?String(r.text):"any"in r?r.any:"html"in r?[].concat(r.html).join(""):"length"in r?ve.call(r).join(""):D.invoke(r,n)):"function"===i?n(r(e)):e.textContent=null==r?"":r;}}},Be={create:Le,find:Pe},Ze=new s,Ve=function(){try{var e=new s,t=Object.freeze([]);if(e.set(t,!0),!e.get(t))throw t;return e}catch(t){return new v}}(),Ge=U,Ie=function(e,t,n){return F.test(t)?e:"<"+t+n+"></"+t+">"},qe=new s,Je=function(e,t){return null==e?Ke(t||"html"):Qe(e,t||"html")},Ke=function(e){var t=void 0,n=void 0,r=void 0,o=void 0,a=void 0;return function(u){u=pe(u);var c=o!==u;return c&&(o=u,r=ee(document),n="svg"===e?document.createElementNS(B,"svg"):r,a=i.bind(n)),a.apply(null,arguments),c&&("svg"===e&&ue(r,ve.call(n.childNodes)),t=Ue(r)),t}},Qe=function(e,t){var n=t.indexOf(":"),r=qe.get(e),i=t;return -1<n&&(i=t.slice(n+1),t=t.slice(0,n)||"html"),r||qe.set(e,r={}),r[i]||(r[i]=Ke(t))},Ue=function(e){for(var t=e.childNodes,r=t.length,i=[],o=0;o<r;o++){var a=t[o];1!==a.nodeType&&0===H.call(a.textContent).length||i.push(a);}return 1===i.length?i[0]:new n(i)},Xe=function(e){return i.bind(e)},Ye=D.define;return c.Component=t,c.bind=Xe,c.define=Ye,c.diff=M,c.hyper=c,c.observe=Ae,c.wire=Je,c._={global:z,WeakMap:s,WeakSet:d},function(e){var n=new s,r=Object.create,i=function(e,t,n){return e.set(t,n),n},o=function(e,t,n,o){var u=t.get(e)||a(e,t);switch(typeof o){case"object":case"function":var c=u.w||(u.w=new s);return c.get(o)||i(c,o,new e(n));default:var l=u.p||(u.p=r(null));return l[o]||(l[o]=new e(n))}},a=function(e,t){var n={w:null,p:null};return t.set(e,n),n},u=function(e){var t=new v;return n.set(e,t),t};Object.defineProperties(t,{"for":{configurable:!0,value:function(e,t){return o(this,n.get(e)||u(e),e,null==t?"default":t)}}}),Object.defineProperties(t.prototype,{handleEvent:{value:function(e){var t=e.currentTarget;this["getAttribute"in t&&t.getAttribute("data-call")||"on"+e.type](e);}},html:O("html",e),svg:O("svg",e),state:O("state",function(){return this.defaultState}),defaultState:{get:function(){return {}}},dispatch:{value:function(e,t){var n=this._wire$;if(n){var r=new A(e,{bubbles:!0,cancelable:!0,detail:t});return r.component=this,(n.dispatchEvent?n:n.childNodes[0]).dispatchEvent(r)}return !1}},setState:{value:function(e,t){var n=this.state,r="function"==typeof e?e.call(this,n):e;for(var i in r)n[i]=r[i];return !1!==t&&this.render(),this}}});}(Ke),c}(window);
  const {Component, bind, define, diff, hyper, wire} = hyperHTML;

  /*! (C) 2017-2018 Andrea Giammarchi - ISC Style License */

  // utils to deal with custom elements builtin extends
  const ATTRIBUTE_CHANGED_CALLBACK = 'attributeChangedCallback';
  const O = Object;
  const classes = [];
  const defineProperty = O.defineProperty;
  const getOwnPropertyDescriptor = O.getOwnPropertyDescriptor;
  const getOwnPropertyNames = O.getOwnPropertyNames;
  const getOwnPropertySymbols = O.getOwnPropertySymbols || (() => []);
  const getPrototypeOf = O.getPrototypeOf || (o => o.__proto__);
  const ownKeys = typeof Reflect === 'object' && Reflect.ownKeys ||
                  (o => getOwnPropertyNames(o).concat(getOwnPropertySymbols(o)));
  const setPrototypeOf = O.setPrototypeOf ||
                        ((o, p) => (o.__proto__ = p, o));
  const camel = name => name.replace(/-([a-z])/g, ($0, $1) => $1.toUpperCase());

  class HyperHTMLElement extends HTMLElement {

    // define a custom-element in the CustomElementsRegistry
    // class MyEl extends HyperHTMLElement {}
    // MyEl.define('my-el');
    static define(name, options) {
      const Class = this;
      const proto = Class.prototype;

      const onChanged = proto[ATTRIBUTE_CHANGED_CALLBACK];
      const hasChange = !!onChanged;

      // Class.booleanAttributes
      // -----------------------------------------------
      // attributes defined as boolean will have
      // an either available or not available attribute
      // regardless of the value.
      // All falsy values, or "false", mean attribute removed
      // while truthy values will be set as is.
      // Boolean attributes are also automatically observed.
      const booleanAttributes = Class.booleanAttributes || [];
      booleanAttributes.forEach(name => {
        if (!(name in proto)) defineProperty(
          proto,
          camel(name),
          {
            configurable: true,
            get() {
              return this.hasAttribute(name);
            },
            set(value) {
              if (!value || value === 'false')
                this.removeAttribute(name);
              else
                this.setAttribute(name, value);
            }
          }
        );
      });

      // Class.observedAttributes
      // -------------------------------------------------------
      // HyperHTMLElement will directly reflect get/setAttribute
      // operation once these attributes are used, example:
      // el.observed = 123;
      // will automatically do
      // el.setAttribute('observed', 123);
      // triggering also the attributeChangedCallback
      const observedAttributes = Class.observedAttributes || [];
      observedAttributes.forEach(name => {
        // it is possible to redefine the behavior at any time
        // simply overwriting get prop() and set prop(value)
        if (!(name in proto)) defineProperty(
          proto,
          camel(name),
          {
            configurable: true,
            get() {
              return this.getAttribute(name);
            },
            set(value) {
              if (value == null)
                this.removeAttribute(name);
              else
                this.setAttribute(name, value);
            }
          }
        );
      });

      // if these are defined, overwrite the observedAttributes getter
      // to include also booleanAttributes
      const attributes = booleanAttributes.concat(observedAttributes);
      if (attributes.length)
        defineProperty(Class, 'observedAttributes', {
          get() { return attributes; }
        });

      // created() {}
      // ---------------------------------
      // an initializer method that grants
      // the node is fully known to the browser.
      // It is ensured to run either after DOMContentLoaded,
      // or once there is a next sibling (stream-friendly) so that
      // you have full access to element attributes and/or childNodes.
      const created = proto.created || function () {
        this.render();
      };

      // used to ensure create() is called once and once only
      defineProperty(
        proto,
        '_init$',
        {
          configurable: true,
          writable: true,
          value: true
        }
      );

      defineProperty(
        proto,
        ATTRIBUTE_CHANGED_CALLBACK,
        {
          configurable: true,
          value: function aCC(name, prev, curr) {
            if (this._init$) {
              checkReady.call(this, created);
              if (this._init$)
                return this._init$$.push(aCC.bind(this, name, prev, curr));
            }
            // ensure setting same value twice
            // won't trigger twice attributeChangedCallback
            if (hasChange && prev !== curr) {
              onChanged.apply(this, arguments);
            }
          }
        }
      );

      const onConnected = proto.connectedCallback;
      const hasConnect = !!onConnected;
      defineProperty(
        proto,
        'connectedCallback',
        {
          configurable: true,
          value: function cC() {
            if (this._init$) {
              checkReady.call(this, created);
              if (this._init$)
                return this._init$$.push(cC.bind(this));
            }
            if (hasConnect) {
              onConnected.apply(this, arguments);
            }
          }
        }
      );

      // define lazily all handlers
      // class { handleClick() { ... }
      // render() { `<a onclick=${this.handleClick}>` } }
      getOwnPropertyNames(proto).forEach(key => {
        if (/^handle[A-Z]/.test(key)) {
          const _key$ = '_' + key + '$';
          const method = proto[key];
          defineProperty(proto, key, {
            configurable: true,
            get() {
              return  this[_key$] ||
                      (this[_key$] = method.bind(this));
            }
          });
        }
      });

      // whenever you want to directly use the component itself
      // as EventListener, you can pass it directly.
      // https://medium.com/@WebReflection/dom-handleevent-a-cross-platform-standard-since-year-2000-5bf17287fd38
      //  class Reactive extends HyperHTMLElement {
      //    oninput(e) { console.log(this, 'changed', e.target.value); }
      //    render() { this.html`<input oninput="${this}">`; }
      //  }
      if (!('handleEvent' in proto)) {
        defineProperty(
          proto,
          'handleEvent',
          {
            configurable: true,
            value(event) {
              this[
                (event.currentTarget.dataset || {}).call ||
                ('on' + event.type)
              ](event);
            }
          }
        );
      }

      if (options && options.extends) {
        const Native = document.createElement(options.extends).constructor;
        const Intermediate = class extends Native {};
        const Super = getPrototypeOf(Class);
        ownKeys(Super)
          .filter(key => [
            'length', 'name', 'arguments', 'caller', 'prototype'
          ].indexOf(key) < 0)
          .forEach(key => defineProperty(
            Intermediate,
            key,
            getOwnPropertyDescriptor(Super, key)
          )
        );
        ownKeys(Super.prototype)
          .forEach(key => defineProperty(
            Intermediate.prototype,
            key,
            getOwnPropertyDescriptor(Super.prototype, key)
          )
        );
        setPrototypeOf(Class, Intermediate);
        setPrototypeOf(proto, Intermediate.prototype);
        customElements.define(name, Class, options);
      } else {
        customElements.define(name, Class);
      }
      classes.push(Class);
      return Class;
    }

    // lazily bind once hyperHTML logic
    // to either the shadowRoot, if present and open,
    // the _shadowRoot property, if set due closed shadow root,
    // or the custom-element itself if no Shadow DOM is used.
    get html() {
      return this._html$ || (this.html = bind(
        // in case of Shadow DOM {mode: "open"}, use it
        this.shadowRoot ||
        // in case of Shadow DOM {mode: "close"}, use it
        // this needs the following reference created upfront
        // this._shadowRoot = this.attachShadow({mode: "close"});
        this._shadowRoot ||
        // if no Shadow DOM is used, simply use the component
        // as container for its own content (it just works too)
        this
      ));
    }

    // it can be set too if necessary, it won't invoke render()
    set html(value) {
      defineProperty(this, '_html$', {configurable: true, value: value});
    }

    // overwrite this method with your own render
    render() {}

    // ---------------------//
    // Basic State Handling //
    // ---------------------//

    // define the default state object
    // you could use observed properties too
    get defaultState() { return {}; }

    // the state with a default
    get state() {
      return this._state$ || (this.state = this.defaultState);
    }

    // it can be set too if necessary, it won't invoke render()
    set state(value) {
      defineProperty(this, '_state$', {configurable: true, value: value});
    }

    // currently a state is a shallow copy, like in Preact or other libraries.
    // after the state is updated, the render() method will be invoked.
    // ⚠️ do not ever call this.setState() inside this.render()
    setState(state, render) {
      const target = this.state;
      const source = typeof state === 'function' ? state.call(this, target) : state;
      for (const key in source) target[key] = source[key];
      if (render !== false) this.render();
      return this;
    }

  }
  // exposing hyperHTML utilities
  HyperHTMLElement.Component = Component;
  HyperHTMLElement.bind = bind;
  HyperHTMLElement.intent = define;
  HyperHTMLElement.wire = wire;
  HyperHTMLElement.hyper = hyper;

  try {
    if (Symbol.hasInstance) classes.push(
      defineProperty(HyperHTMLElement, Symbol.hasInstance, {
        enumerable: false,
        configurable: true,
        value(instance) {
          return classes.some(isPrototypeOf, getPrototypeOf(instance));
        }
      }));
  } catch(meh) {}

  // ------------------------------//
  // DOMContentLoaded VS created() //
  // ------------------------------//
  const dom = {
    type: 'DOMContentLoaded',
    handleEvent() {
      if (dom.ready()) {
        document.removeEventListener(dom.type, dom, false);
        dom.list.splice(0).forEach(invoke);
      }
      else
        setTimeout(dom.handleEvent);
    },
    ready() {
      return document.readyState === 'complete';
    },
    list: []
  };

  if (!dom.ready()) {
    document.addEventListener(dom.type, dom, false);
  }

  function checkReady(created) {
    if (dom.ready() || isReady.call(this, created)) {
      if (this._init$) {
        const list = this._init$$;
        if (list) delete this._init$$;
        created.call(defineProperty(this, '_init$', {value: false}));
        if (list) list.forEach(invoke);
      }
    } else {
      if (!this.hasOwnProperty('_init$$'))
        defineProperty(this, '_init$$', {configurable: true, value: []});
      dom.list.push(checkReady.bind(this, created));
    }
  }

  function invoke(fn) {
    fn();
  }

  function isPrototypeOf(Class) {
    return this === Class.prototype;
  }

  function isReady(created) {
    let el = this;
    do { if (el.nextSibling) return true; }
    while (el = el.parentNode);
    setTimeout(checkReady.bind(this, created));
    return false;
  }

  exports.default = HyperHTMLElement;

  return exports.default;

}({}));
