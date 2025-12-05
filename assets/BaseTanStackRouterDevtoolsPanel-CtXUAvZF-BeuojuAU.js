import{G as e,J as t,K as n,gt as r,q as i}from"./index-DjIYh1rc.js";import{t as a}from"./goober.modern-D6OJqqHb.js";var o={context:void 0,registry:void 0,effects:void 0,done:!1,getContextId(){return s(this.context.count)},getNextContextId(){return s(this.context.count++)}};function s(e){let t=String(e),n=t.length-1;return o.context.id+(n?String.fromCharCode(96+n):``)+t}function c(e){o.context=e}var l=(e,t)=>e===t,u=Symbol(`solid-proxy`),d=typeof Proxy==`function`,f=Symbol(`solid-track`),p={equals:l},m=re,h=1,g=2,_={owned:null,cleanups:null,context:null,owner:null},v=null,y=null,b=null,x=null,S=0;function C(e,t){let n=y,r=v,i=e.length===0,a=t===void 0?r:t,o=i?_:{owned:null,cleanups:null,context:a?a.context:null,owner:a},s=i?e:()=>e(()=>O(()=>R(o)));v=o,y=null;try{return L(s,!0)}finally{y=n,v=r}}function w(e,t){t=t?Object.assign({},p,t):p;let n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0};return[N.bind(n),e=>(typeof e==`function`&&(e=e(n.value)),ee(n,e))]}function T(e,t,n){P(F(e,t,!1,h))}function E(e,t,n){m=ie;let r=F(e,t,!1,h);(!n||!n.render)&&(r.user=!0),x?x.push(r):P(r)}function D(e,t,n){n=n?Object.assign({},p,n):p;let r=F(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,P(r),N.bind(r)}function O(e){if(y===null)return e();let t=y;y=null;try{return e()}finally{y=t}}function k(e){return v===null||(v.cleanups===null?v.cleanups=[e]:v.cleanups.push(e)),e}function A(e,t){let n=Symbol(`context`);return{id:n,Provider:ue(n),defaultValue:e}}function j(e){let t;return v&&v.context&&(t=v.context[e.id])!==void 0?t:e.defaultValue}function M(e){let t=D(e),n=D(()=>le(t()));return n.toArray=()=>{let e=n();return Array.isArray(e)?e:e==null?[]:[e]},n}function N(){if(this.sources&&this.state)if(this.state===h)P(this);else{let e=b;b=null,L(()=>ae(this),!1),b=e}if(y){let e=this.observers?this.observers.length:0;y.sources?(y.sources.push(this),y.sourceSlots.push(e)):(y.sources=[this],y.sourceSlots=[e]),this.observers?(this.observers.push(y),this.observerSlots.push(y.sources.length-1)):(this.observers=[y],this.observerSlots=[y.sources.length-1])}return this.value}function ee(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&L(()=>{for(let t=0;t<e.observers.length;t+=1){let n=e.observers[t];n.state||(n.pure?b.push(n):x.push(n),n.observers&&oe(n)),n.state=h}if(b.length>1e6)throw b=[],Error()},!1)),t}function P(e){if(!e.fn)return;R(e);let t=S;te(e,e.value,t)}function te(e,t,n){let r,i=v,a=y;y=v=e;try{r=e.fn(t)}catch(t){return e.pure&&(e.state=h,e.owned&&e.owned.forEach(R),e.owned=null),e.updatedAt=n+1,ce(t)}finally{y=a,v=i}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&`observers`in e?ee(e,r):e.value=r,e.updatedAt=n)}function F(e,t,n,r=h,i){let a={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:v,context:v?v.context:null,pure:n};return v===null||v!==_&&(v.owned?v.owned.push(a):v.owned=[a]),a}function I(e){if(e.state===0)return;if(e.state===g)return ae(e);if(e.suspense&&O(e.suspense.inFallback))return e.suspense.effects.push(e);let t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<S);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===h)P(e);else if(e.state===g){let n=b;b=null,L(()=>ae(e,t[0]),!1),b=n}}function L(e,t){if(b)return e();let n=!1;t||(b=[]),x?n=!0:x=[],S++;try{let t=e();return ne(n),t}catch(e){n||(x=null),b=null,ce(e)}}function ne(e){if(b&&=(re(b),null),e)return;let t=x;x=null,t.length&&L(()=>m(t),!1)}function re(e){for(let t=0;t<e.length;t++)I(e[t])}function ie(e){let t,n=0;for(t=0;t<e.length;t++){let r=e[t];r.user?e[n++]=r:I(r)}if(o.context){if(o.count){o.effects||=[],o.effects.push(...e.slice(0,n));return}c()}for(o.effects&&(o.done||!o.count)&&(e=[...o.effects,...e],n+=o.effects.length,delete o.effects),t=0;t<n;t++)I(e[t])}function ae(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){let r=e.sources[n];if(r.sources){let e=r.state;e===h?r!==t&&(!r.updatedAt||r.updatedAt<S)&&I(r):e===g&&ae(r,t)}}}function oe(e){for(let t=0;t<e.observers.length;t+=1){let n=e.observers[t];n.state||(n.state=g,n.pure?b.push(n):x.push(n),n.observers&&oe(n))}}function R(e){let t;if(e.sources)for(;e.sources.length;){let t=e.sources.pop(),n=e.sourceSlots.pop(),r=t.observers;if(r&&r.length){let e=r.pop(),i=t.observerSlots.pop();n<r.length&&(e.sourceSlots[i]=n,r[n]=e,t.observerSlots[n]=i)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)R(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)R(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function se(e){return e instanceof Error?e:Error(typeof e==`string`?e:`Unknown error`,{cause:e})}function ce(e,t=v){throw se(e)}function le(e){if(typeof e==`function`&&!e.length)return le(e());if(Array.isArray(e)){let t=[];for(let n=0;n<e.length;n++){let r=le(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function ue(e,t){return function(t){let n;return T(()=>n=O(()=>(v.context={...v.context,[e]:t.value},M(()=>t.children))),void 0),n}}var de=Symbol(`fallback`);function fe(e){for(let t=0;t<e.length;t++)e[t]()}function pe(e,t,n={}){let r=[],i=[],a=[],o=0,s=t.length>1?[]:null;return k(()=>fe(a)),()=>{let c=e()||[],l=c.length,u,d;return c[f],O(()=>{let e,t,f,m,h,g,_,v,y;if(l===0)o!==0&&(fe(a),a=[],r=[],i=[],o=0,s&&=[]),n.fallback&&(r=[de],i[0]=C(e=>(a[0]=e,n.fallback())),o=1);else if(o===0){for(i=Array(l),d=0;d<l;d++)r[d]=c[d],i[d]=C(p);o=l}else{for(f=Array(l),m=Array(l),s&&(h=Array(l)),g=0,_=Math.min(o,l);g<_&&r[g]===c[g];g++);for(_=o-1,v=l-1;_>=g&&v>=g&&r[_]===c[v];_--,v--)f[v]=i[_],m[v]=a[_],s&&(h[v]=s[_]);for(e=new Map,t=Array(v+1),d=v;d>=g;d--)y=c[d],u=e.get(y),t[d]=u===void 0?-1:u,e.set(y,d);for(u=g;u<=_;u++)y=r[u],d=e.get(y),d!==void 0&&d!==-1?(f[d]=i[u],m[d]=a[u],s&&(h[d]=s[u]),d=t[d],e.set(y,d)):a[u]();for(d=g;d<l;d++)d in f?(i[d]=f[d],a[d]=m[d],s&&(s[d]=h[d],s[d](d))):i[d]=C(p);i=i.slice(0,o=l),r=c.slice(0)}return i});function p(e){if(a[d]=e,s){let[e,n]=w(d);return s[d]=n,t(c[d],e)}return t(c[d])}}}function z(e,t){return O(()=>e(t||{}))}function me(){return!0}var he={get(e,t,n){return t===u?n:e.get(t)},has(e,t){return t===u?!0:e.has(t)},set:me,deleteProperty:me,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:me,deleteProperty:me}},ownKeys(e){return e.keys()}};function ge(e){return(e=typeof e==`function`?e():e)?e:{}}function _e(){for(let e=0,t=this.length;e<t;++e){let t=this[e]();if(t!==void 0)return t}}function B(...e){let t=!1;for(let n=0;n<e.length;n++){let r=e[n];t||=!!r&&u in r,e[n]=typeof r==`function`?(t=!0,D(r)):r}if(d&&t)return new Proxy({get(t){for(let n=e.length-1;n>=0;n--){let r=ge(e[n])[t];if(r!==void 0)return r}},has(t){for(let n=e.length-1;n>=0;n--)if(t in ge(e[n]))return!0;return!1},keys(){let t=[];for(let n=0;n<e.length;n++)t.push(...Object.keys(ge(e[n])));return[...new Set(t)]}},he);let n={},r=Object.create(null);for(let t=e.length-1;t>=0;t--){let i=e[t];if(!i)continue;let a=Object.getOwnPropertyNames(i);for(let e=a.length-1;e>=0;e--){let t=a[e];if(t===`__proto__`||t===`constructor`)continue;let o=Object.getOwnPropertyDescriptor(i,t);if(!r[t])r[t]=o.get?{enumerable:!0,configurable:!0,get:_e.bind(n[t]=[o.get.bind(i)])}:o.value===void 0?void 0:o;else{let e=n[t];e&&(o.get?e.push(o.get.bind(i)):o.value!==void 0&&e.push(()=>o.value))}}}let i={},a=Object.keys(r);for(let e=a.length-1;e>=0;e--){let t=a[e],n=r[t];n&&n.get?Object.defineProperty(i,t,n):i[t]=n?n.value:void 0}return i}function ve(e,...t){let n=t.length;if(d&&u in e){let r=n>1?t.flat():t[0],i=t.map(t=>new Proxy({get(n){return t.includes(n)?e[n]:void 0},has(n){return t.includes(n)&&n in e},keys(){return t.filter(t=>t in e)}},he));return i.push(new Proxy({get(t){return r.includes(t)?void 0:e[t]},has(t){return r.includes(t)?!1:t in e},keys(){return Object.keys(e).filter(e=>!r.includes(e))}},he)),i}let r=[];for(let e=0;e<=n;e++)r[e]={};for(let i of Object.getOwnPropertyNames(e)){let a=n;for(let e=0;e<t.length;e++)if(t[e].includes(i)){a=e;break}let o=Object.getOwnPropertyDescriptor(e,i);!o.get&&!o.set&&o.enumerable&&o.writable&&o.configurable?r[a][i]=o.value:Object.defineProperty(r[a],i,o)}return r}var ye=0;function be(){return o.context?o.getNextContextId():`cl-${ye++}`}var xe=e=>`Stale read from <${e}>.`;function Se(e){let t=`fallback`in e&&{fallback:()=>e.fallback};return D(pe(()=>e.each,e.children,t||void 0))}function Ce(e){let t=e.keyed,n=D(()=>e.when,void 0,void 0),r=t?n:D(n,void 0,{equals:(e,t)=>!e==!t});return D(()=>{let i=r();if(i){let a=e.children;return typeof a==`function`&&a.length>0?O(()=>a(t?i:()=>{if(!O(r))throw xe(`Show`);return n()})):a}return e.fallback},void 0,void 0)}function we(e){let t=M(()=>e.children),n=D(()=>{let e=t(),n=Array.isArray(e)?e:[e],r=()=>void 0;for(let e=0;e<n.length;e++){let t=e,i=n[e],a=r,o=D(()=>a()?void 0:i.when,void 0,void 0),s=i.keyed?o:D(o,void 0,{equals:(e,t)=>!e==!t});r=()=>a()||(s()?[t,o,i]:void 0)}return r});return D(()=>{let t=n()();if(!t)return e.fallback;let[r,i,a]=t,o=a.children;return typeof o==`function`&&o.length>0?O(()=>o(a.keyed?i():()=>{if(O(n)()?.[0]!==r)throw xe(`Match`);return i()})):o},void 0,void 0)}function Te(e){return e}var Ee=new Set([`className`,`value`,`readOnly`,`noValidate`,`formNoValidate`,`isMap`,`noModule`,`playsInline`,`adAuctionHeaders`,`allowFullscreen`,`browsingTopics`,`defaultChecked`,`defaultMuted`,`defaultSelected`,`disablePictureInPicture`,`disableRemotePlayback`,`preservesPitch`,`shadowRootClonable`,`shadowRootCustomElementRegistry`,`shadowRootDelegatesFocus`,`shadowRootSerializable`,`sharedStorageWritable`,...`allowfullscreen.async.alpha.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.hidden.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.adauctionheaders.browsingtopics.credentialless.defaultchecked.defaultmuted.defaultselected.defer.disablepictureinpicture.disableremoteplayback.preservespitch.shadowrootclonable.shadowrootcustomelementregistry.shadowrootdelegatesfocus.shadowrootserializable.sharedstoragewritable`.split(`.`)]),De=new Set([`innerHTML`,`textContent`,`innerText`,`children`]),Oe=Object.assign(Object.create(null),{className:`class`,htmlFor:`for`}),ke=Object.assign(Object.create(null),{class:`className`,novalidate:{$:`noValidate`,FORM:1},formnovalidate:{$:`formNoValidate`,BUTTON:1,INPUT:1},ismap:{$:`isMap`,IMG:1},nomodule:{$:`noModule`,SCRIPT:1},playsinline:{$:`playsInline`,VIDEO:1},readonly:{$:`readOnly`,INPUT:1,TEXTAREA:1},adauctionheaders:{$:`adAuctionHeaders`,IFRAME:1},allowfullscreen:{$:`allowFullscreen`,IFRAME:1},browsingtopics:{$:`browsingTopics`,IMG:1},defaultchecked:{$:`defaultChecked`,INPUT:1},defaultmuted:{$:`defaultMuted`,AUDIO:1,VIDEO:1},defaultselected:{$:`defaultSelected`,OPTION:1},disablepictureinpicture:{$:`disablePictureInPicture`,VIDEO:1},disableremoteplayback:{$:`disableRemotePlayback`,AUDIO:1,VIDEO:1},preservespitch:{$:`preservesPitch`,AUDIO:1,VIDEO:1},shadowrootclonable:{$:`shadowRootClonable`,TEMPLATE:1},shadowrootdelegatesfocus:{$:`shadowRootDelegatesFocus`,TEMPLATE:1},shadowrootserializable:{$:`shadowRootSerializable`,TEMPLATE:1},sharedstoragewritable:{$:`sharedStorageWritable`,IFRAME:1,IMG:1}});function Ae(e,t){let n=ke[e];return typeof n==`object`?n[t]?n.$:void 0:n}var je=new Set([`beforeinput`,`click`,`dblclick`,`contextmenu`,`focusin`,`focusout`,`input`,`keydown`,`keyup`,`mousedown`,`mousemove`,`mouseout`,`mouseover`,`mouseup`,`pointerdown`,`pointermove`,`pointerout`,`pointerover`,`pointerup`,`touchend`,`touchmove`,`touchstart`]),Me=new Set(`altGlyph.altGlyphDef.altGlyphItem.animate.animateColor.animateMotion.animateTransform.circle.clipPath.color-profile.cursor.defs.desc.ellipse.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.filter.font.font-face.font-face-format.font-face-name.font-face-src.font-face-uri.foreignObject.g.glyph.glyphRef.hkern.image.line.linearGradient.marker.mask.metadata.missing-glyph.mpath.path.pattern.polygon.polyline.radialGradient.rect.set.stop.svg.switch.symbol.text.textPath.tref.tspan.use.view.vkern`.split(`.`)),Ne={xlink:`http://www.w3.org/1999/xlink`,xml:`http://www.w3.org/XML/1998/namespace`},V=e=>D(()=>e());function Pe(e,t,n){let r=n.length,i=t.length,a=r,o=0,s=0,c=t[i-1].nextSibling,l=null;for(;o<i||s<a;){if(t[o]===n[s]){o++,s++;continue}for(;t[i-1]===n[a-1];)i--,a--;if(i===o){let t=a<r?s?n[s-1].nextSibling:n[a-s]:c;for(;s<a;)e.insertBefore(n[s++],t)}else if(a===s)for(;o<i;)(!l||!l.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[a-1]&&n[s]===t[i-1]){let r=t[--i].nextSibling;e.insertBefore(n[s++],t[o++].nextSibling),e.insertBefore(n[--a],r),t[i]=n[a]}else{if(!l){l=new Map;let e=s;for(;e<a;)l.set(n[e],e++)}let r=l.get(t[o]);if(r!=null)if(s<r&&r<a){let c=o,u=1,d;for(;++c<i&&c<a&&!((d=l.get(t[c]))==null||d!==r+u);)u++;if(u>r-s){let i=t[o];for(;s<r;)e.insertBefore(n[s++],i)}else e.replaceChild(n[s++],t[o++])}else o++;else t[o++].remove()}}}var Fe=`_$DX_DELEGATE`;function H(e,t,n,r){let i,a=()=>{let t=document.createElement(`template`);return t.innerHTML=e,t.content.firstChild},o=t?()=>O(()=>document.importNode(i||=a(),!0)):()=>(i||=a()).cloneNode(!0);return o.cloneNode=o,o}function U(e,t=window.document){let n=t[Fe]||(t[Fe]=new Set);for(let r=0,i=e.length;r<i;r++){let i=e[r];n.has(i)||(n.add(i),t.addEventListener(i,Je))}}function W(e,t,n){q(e)||(n==null?e.removeAttribute(t):e.setAttribute(t,n))}function Ie(e,t,n,r){q(e)||(r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r))}function Le(e,t,n){q(e)||(n?e.setAttribute(t,``):e.removeAttribute(t))}function G(e,t){q(e)||(t==null?e.removeAttribute(`class`):e.className=t)}function Re(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){let r=n[0];e.addEventListener(t,n[0]=t=>r.call(e,n[1],t))}else e.addEventListener(t,n,typeof n!=`function`&&n)}function ze(e,t,n={}){let r=Object.keys(t||{}),i=Object.keys(n),a,o;for(a=0,o=i.length;a<o;a++){let r=i[a];!r||r===`undefined`||t[r]||(Ke(e,r,!1),delete n[r])}for(a=0,o=r.length;a<o;a++){let i=r[a],o=!!t[i];!i||i===`undefined`||n[i]===o||!o||(Ke(e,i,!0),n[i]=o)}return n}function Be(e,t,n){if(!t)return n?W(e,`style`):t;let r=e.style;if(typeof t==`string`)return r.cssText=t;typeof n==`string`&&(r.cssText=n=void 0),n||={},t||={};let i,a;for(a in n)t[a]??r.removeProperty(a),delete n[a];for(a in t)i=t[a],i!==n[a]&&(r.setProperty(a,i),n[a]=i);return n}function Ve(e,t={},n,r){let i={};return r||T(()=>i.children=J(e,t.children,i.children)),T(()=>typeof t.ref==`function`&&He(t.ref,e)),T(()=>Ue(e,t,n,!0,i,!0)),i}function He(e,t,n){return O(()=>e(t,n))}function K(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!=`function`)return J(e,t,r,n);T(r=>J(e,t(),r,n),r)}function Ue(e,t,n,r,i={},a=!1){for(let r in t||={},i)if(!(r in t)){if(r===`children`)continue;i[r]=qe(e,r,null,i[r],n,a,t)}for(let r in t){if(r===`children`)continue;let o=t[r];i[r]=qe(e,r,o,i[r],n,a,t)}}function We(e){let t,n;return!q()||!(t=o.registry.get(n=Ze()))?e():(o.completed&&o.completed.add(t),o.registry.delete(n),t)}function q(e){return!!o.context&&!o.done&&(!e||e.isConnected)}function Ge(e){return e.toLowerCase().replace(/-([a-z])/g,(e,t)=>t.toUpperCase())}function Ke(e,t,n){let r=t.trim().split(/\s+/);for(let t=0,i=r.length;t<i;t++)e.classList.toggle(r[t],n)}function qe(e,t,n,r,i,a,o){let s,c,l,u,d;if(t===`style`)return Be(e,n,r);if(t===`classList`)return ze(e,n,r);if(n===r)return r;if(t===`ref`)a||n(e);else if(t.slice(0,3)===`on:`){let i=t.slice(3);r&&e.removeEventListener(i,r,typeof r!=`function`&&r),n&&e.addEventListener(i,n,typeof n!=`function`&&n)}else if(t.slice(0,10)===`oncapture:`){let i=t.slice(10);r&&e.removeEventListener(i,r,!0),n&&e.addEventListener(i,n,!0)}else if(t.slice(0,2)===`on`){let i=t.slice(2).toLowerCase(),a=je.has(i);if(!a&&r){let t=Array.isArray(r)?r[0]:r;e.removeEventListener(i,t)}(a||n)&&(Re(e,i,n,a),a&&U([i]))}else if(t.slice(0,5)===`attr:`)W(e,t.slice(5),n);else if(t.slice(0,5)===`bool:`)Le(e,t.slice(5),n);else if((d=t.slice(0,5)===`prop:`)||(l=De.has(t))||!i&&((u=Ae(t,e.tagName))||(c=Ee.has(t)))||(s=e.nodeName.includes(`-`)||`is`in o)){if(d)t=t.slice(5),c=!0;else if(q(e))return n;t===`class`||t===`className`?G(e,n):s&&!c&&!l?e[Ge(t)]=n:e[u||t]=n}else{let r=i&&t.indexOf(`:`)>-1&&Ne[t.split(`:`)[0]];r?Ie(e,r,t,n):W(e,Oe[t]||t,n)}return n}function Je(e){if(o.registry&&o.events&&o.events.find(([t,n])=>n===e))return;let t=e.target,n=`$$${e.type}`,r=e.target,i=e.currentTarget,a=t=>Object.defineProperty(e,`target`,{configurable:!0,value:t}),s=()=>{let r=t[n];if(r&&!t.disabled){let i=t[`${n}Data`];if(i===void 0?r.call(t,e):r.call(t,i,e),e.cancelBubble)return}return t.host&&typeof t.host!=`string`&&!t.host._$host&&t.contains(e.target)&&a(t.host),!0},c=()=>{for(;s()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,`currentTarget`,{configurable:!0,get(){return t||document}}),o.registry&&!o.done&&(o.done=_$HY.done=!0),e.composedPath){let n=e.composedPath();a(n[0]);for(let e=0;e<n.length-2&&(t=n[e],s());e++){if(t._$host){t=t._$host,c();break}if(t.parentNode===i)break}}else c();a(r)}function J(e,t,n,r,i){let a=q(e);if(a){!n&&(n=[...e.childNodes]);let t=[];for(let e=0;e<n.length;e++){let r=n[e];r.nodeType===8&&r.data.slice(0,2)===`!$`?r.remove():t.push(r)}n=t}for(;typeof n==`function`;)n=n();if(t===n)return n;let o=typeof t,s=r!==void 0;if(e=s&&n[0]&&n[0].parentNode||e,o===`string`||o===`number`){if(a||o===`number`&&(t=t.toString(),t===n))return n;if(s){let i=n[0];i&&i.nodeType===3?i.data!==t&&(i.data=t):i=document.createTextNode(t),n=Y(e,n,r,i)}else n=n!==``&&typeof n==`string`?e.firstChild.data=t:e.textContent=t}else if(t==null||o===`boolean`){if(a)return n;n=Y(e,n,r)}else if(o===`function`)return T(()=>{let i=t();for(;typeof i==`function`;)i=i();n=J(e,i,n,r)}),()=>n;else if(Array.isArray(t)){let o=[],c=n&&Array.isArray(n);if(Ye(o,t,n,i))return T(()=>n=J(e,o,n,r,!0)),()=>n;if(a){if(!o.length)return n;if(r===void 0)return n=[...e.childNodes];let t=o[0];if(t.parentNode!==e)return n;let i=[t];for(;(t=t.nextSibling)!==r;)i.push(t);return n=i}if(o.length===0){if(n=Y(e,n,r),s)return n}else c?n.length===0?Xe(e,o,r):Pe(e,n,o):(n&&Y(e),Xe(e,o));n=o}else if(t.nodeType){if(a&&t.parentNode)return n=s?[t]:t;if(Array.isArray(n)){if(s)return n=Y(e,n,r,t);Y(e,n,null,t)}else n==null||n===``||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}return n}function Ye(e,t,n,r){let i=!1;for(let a=0,o=t.length;a<o;a++){let o=t[a],s=n&&n[e.length],c;if(!(o==null||o===!0||o===!1))if((c=typeof o)==`object`&&o.nodeType)e.push(o);else if(Array.isArray(o))i=Ye(e,o,s)||i;else if(c===`function`)if(r){for(;typeof o==`function`;)o=o();i=Ye(e,Array.isArray(o)?o:[o],Array.isArray(s)?s:[s])||i}else e.push(o),i=!0;else{let t=String(o);s&&s.nodeType===3&&s.data===t?e.push(s):e.push(document.createTextNode(t))}}return i}function Xe(e,t,n=null){for(let r=0,i=t.length;r<i;r++)e.insertBefore(t[r],n)}function Y(e,t,n,r){if(n===void 0)return e.textContent=``;let i=r||document.createTextNode(``);if(t.length){let r=!1;for(let a=t.length-1;a>=0;a--){let o=t[a];if(i!==o){let t=o.parentNode===e;!r&&!a?t?e.replaceChild(i,o):e.insertBefore(i,n):t&&o.remove()}else r=!0}}else e.insertBefore(i,n);return[i]}function Ze(){return o.getNextContextId()}var Qe=`http://www.w3.org/2000/svg`;function $e(e,t=!1,n=void 0){return t?document.createElementNS(Qe,e):document.createElement(e,{is:n})}function et(e,t){let n=D(e);return D(()=>{let e=n();switch(typeof e){case`function`:return O(()=>e(t));case`string`:let n=Me.has(e),r=o.context?We():$e(e,n,O(()=>t.is));return Ve(r,t,n),r}})}function tt(e){let[,t]=ve(e,[`component`]);return et(()=>e.component,t)}var nt=A(void 0),rt=A(void 0),it=()=>{let e=j(rt);if(!e)throw Error(`useDevtoolsOnClose must be used within a TanStackRouterDevtools component`);return e},at=typeof window>`u`;function ot(e){return e.isFetching&&e.status===`success`?e.isFetching===`beforeLoad`?`purple`:`blue`:{pending:`yellow`,success:`green`,error:`red`,notFound:`purple`,redirected:`gray`}[e.status]}function st(e,t){let n=e.find(e=>e.routeId===t.id);return n?ot(n):`gray`}function ct(){let[e,t]=w(!1);return(at?E:T)(()=>{t(!0)}),e}var lt=e=>{let t=Object.getOwnPropertyNames(Object(e)),n=typeof e==`bigint`?`${e.toString()}n`:e;try{return JSON.stringify(n,t)}catch{return`unable to stringify`}};function ut(e,t=[e=>e]){return e.map((e,t)=>[e,t]).sort(([e,n],[r,i])=>{for(let n of t){let t=n(e),i=n(r);if(t===void 0){if(i===void 0)continue;return 1}if(t!==i)return t>i?1:-1}return n-i}).map(([e])=>e)}var X={colors:{inherit:`inherit`,current:`currentColor`,transparent:`transparent`,black:`#000000`,white:`#ffffff`,neutral:{50:`#f9fafb`,100:`#f2f4f7`,200:`#eaecf0`,300:`#d0d5dd`,400:`#98a2b3`,500:`#667085`,600:`#475467`,700:`#344054`,800:`#1d2939`,900:`#101828`},darkGray:{50:`#525c7a`,100:`#49536e`,200:`#414962`,300:`#394056`,400:`#313749`,500:`#292e3d`,600:`#212530`,700:`#191c24`,800:`#111318`,900:`#0b0d10`},gray:{50:`#f9fafb`,100:`#f2f4f7`,200:`#eaecf0`,300:`#d0d5dd`,400:`#98a2b3`,500:`#667085`,600:`#475467`,700:`#344054`,800:`#1d2939`,900:`#101828`},blue:{25:`#F5FAFF`,50:`#EFF8FF`,100:`#D1E9FF`,200:`#B2DDFF`,300:`#84CAFF`,400:`#53B1FD`,500:`#2E90FA`,600:`#1570EF`,700:`#175CD3`,800:`#1849A9`,900:`#194185`},green:{25:`#F6FEF9`,50:`#ECFDF3`,100:`#D1FADF`,200:`#A6F4C5`,300:`#6CE9A6`,400:`#32D583`,500:`#12B76A`,600:`#039855`,700:`#027A48`,800:`#05603A`,900:`#054F31`},red:{50:`#fef2f2`,100:`#fee2e2`,200:`#fecaca`,300:`#fca5a5`,400:`#f87171`,500:`#ef4444`,600:`#dc2626`,700:`#b91c1c`,800:`#991b1b`,900:`#7f1d1d`,950:`#450a0a`},yellow:{25:`#FFFCF5`,50:`#FFFAEB`,100:`#FEF0C7`,200:`#FEDF89`,300:`#FEC84B`,400:`#FDB022`,500:`#F79009`,600:`#DC6803`,700:`#B54708`,800:`#93370D`,900:`#7A2E0E`},purple:{25:`#FAFAFF`,50:`#F4F3FF`,100:`#EBE9FE`,200:`#D9D6FE`,300:`#BDB4FE`,400:`#9B8AFB`,500:`#7A5AF8`,600:`#6938EF`,700:`#5925DC`,800:`#4A1FB8`,900:`#3E1C96`},teal:{25:`#F6FEFC`,50:`#F0FDF9`,100:`#CCFBEF`,200:`#99F6E0`,300:`#5FE9D0`,400:`#2ED3B7`,500:`#15B79E`,600:`#0E9384`,700:`#107569`,800:`#125D56`,900:`#134E48`},pink:{25:`#fdf2f8`,50:`#fce7f3`,100:`#fbcfe8`,200:`#f9a8d4`,300:`#f472b6`,400:`#ec4899`,500:`#db2777`,600:`#be185d`,700:`#9d174d`,800:`#831843`,900:`#500724`},cyan:{25:`#ecfeff`,50:`#cffafe`,100:`#a5f3fc`,200:`#67e8f9`,300:`#22d3ee`,400:`#06b6d4`,500:`#0891b2`,600:`#0e7490`,700:`#155e75`,800:`#164e63`,900:`#083344`}},alpha:{90:`e5`,70:`b3`,20:`33`},font:{size:{"2xs":`calc(var(--tsrd-font-size) * 0.625)`,xs:`calc(var(--tsrd-font-size) * 0.75)`,sm:`calc(var(--tsrd-font-size) * 0.875)`,md:`var(--tsrd-font-size)`},lineHeight:{xs:`calc(var(--tsrd-font-size) * 1)`,sm:`calc(var(--tsrd-font-size) * 1.25)`},weight:{normal:`400`,medium:`500`,semibold:`600`,bold:`700`},fontFamily:{sans:`ui-sans-serif, Inter, system-ui, sans-serif, sans-serif`,mono:`ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`}},border:{radius:{xs:`calc(var(--tsrd-font-size) * 0.125)`,sm:`calc(var(--tsrd-font-size) * 0.25)`,md:`calc(var(--tsrd-font-size) * 0.375)`,full:`9999px`}},size:{0:`0px`,.5:`calc(var(--tsrd-font-size) * 0.125)`,1:`calc(var(--tsrd-font-size) * 0.25)`,1.5:`calc(var(--tsrd-font-size) * 0.375)`,2:`calc(var(--tsrd-font-size) * 0.5)`,2.5:`calc(var(--tsrd-font-size) * 0.625)`,3:`calc(var(--tsrd-font-size) * 0.75)`,3.5:`calc(var(--tsrd-font-size) * 0.875)`,4:`calc(var(--tsrd-font-size) * 1)`,5:`calc(var(--tsrd-font-size) * 1.25)`,8:`calc(var(--tsrd-font-size) * 2)`}},dt=e=>{let{colors:t,font:n,size:r,alpha:i,border:o}=X,{fontFamily:s,lineHeight:c,size:l}=n,u=e?a.bind({target:e}):a;return{devtoolsPanelContainer:u`
      direction: ltr;
      position: fixed;
      bottom: 0;
      right: 0;
      z-index: 99999;
      width: 100%;
      max-height: 90%;
      border-top: 1px solid ${t.gray[700]};
      transform-origin: top;
    `,devtoolsPanelContainerVisibility:e=>u`
        visibility: ${e?`visible`:`hidden`};
      `,devtoolsPanelContainerResizing:e=>e()?u`
          transition: none;
        `:u`
        transition: all 0.4s ease;
      `,devtoolsPanelContainerAnimation:(e,t)=>e?u`
          pointer-events: auto;
          transform: translateY(0);
        `:u`
        pointer-events: none;
        transform: translateY(${t}px);
      `,logo:u`
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;
      font-family: ${s.sans};
      gap: ${X.size[.5]};
      padding: 0px;
      &:hover {
        opacity: 0.7;
      }
      &:focus-visible {
        outline-offset: 4px;
        border-radius: ${o.radius.xs};
        outline: 2px solid ${t.blue[800]};
      }
    `,tanstackLogo:u`
      font-size: ${n.size.md};
      font-weight: ${n.weight.bold};
      line-height: ${n.lineHeight.xs};
      white-space: nowrap;
      color: ${t.gray[300]};
    `,routerLogo:u`
      font-weight: ${n.weight.semibold};
      font-size: ${n.size.xs};
      background: linear-gradient(to right, #84cc16, #10b981);
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,devtoolsPanel:u`
      display: flex;
      font-size: ${l.sm};
      font-family: ${s.sans};
      background-color: ${t.darkGray[700]};
      color: ${t.gray[300]};

      @media (max-width: 700px) {
        flex-direction: column;
      }
      @media (max-width: 600px) {
        font-size: ${l.xs};
      }
    `,dragHandle:u`
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 4px;
      cursor: row-resize;
      z-index: 100000;
      &:hover {
        background-color: ${t.purple[400]}${i[90]};
      }
    `,firstContainer:u`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      border-right: 1px solid ${t.gray[700]};
      display: flex;
      flex-direction: column;
    `,routerExplorerContainer:u`
      overflow-y: auto;
      flex: 1;
    `,routerExplorer:u`
      padding: ${X.size[2]};
    `,row:u`
      display: flex;
      align-items: center;
      padding: ${X.size[2]} ${X.size[2.5]};
      gap: ${X.size[2.5]};
      border-bottom: ${t.darkGray[500]} 1px solid;
      align-items: center;
    `,detailsHeader:u`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      position: sticky;
      top: 0;
      z-index: 2;
      background-color: ${t.darkGray[600]};
      padding: 0px ${X.size[2]};
      font-weight: ${n.weight.medium};
      font-size: ${n.size.xs};
      min-height: ${X.size[8]};
      line-height: ${n.lineHeight.xs};
      text-align: left;
      display: flex;
      align-items: center;
    `,maskedBadge:u`
      background: ${t.yellow[900]}${i[70]};
      color: ${t.yellow[300]};
      display: inline-block;
      padding: ${X.size[0]} ${X.size[2.5]};
      border-radius: ${o.radius.full};
      font-size: ${n.size.xs};
      font-weight: ${n.weight.normal};
      border: 1px solid ${t.yellow[300]};
    `,maskedLocation:u`
      color: ${t.yellow[300]};
    `,detailsContent:u`
      padding: ${X.size[1.5]} ${X.size[2]};
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: ${n.size.xs};
    `,routeMatchesToggle:u`
      display: flex;
      align-items: center;
      border: 1px solid ${t.gray[500]};
      border-radius: ${o.radius.sm};
      overflow: hidden;
    `,routeMatchesToggleBtn:(e,r)=>{let a=[u`
        appearance: none;
        border: none;
        font-size: 12px;
        padding: 4px 8px;
        background: transparent;
        cursor: pointer;
        font-family: ${s.sans};
        font-weight: ${n.weight.medium};
      `];if(e){let e=u`
          background: ${t.darkGray[400]};
          color: ${t.gray[300]};
        `;a.push(e)}else{let e=u`
          color: ${t.gray[500]};
          background: ${t.darkGray[800]}${i[20]};
        `;a.push(e)}return r&&a.push(u`
          border-right: 1px solid ${X.colors.gray[500]};
        `),a},detailsHeaderInfo:u`
      flex: 1;
      justify-content: flex-end;
      display: flex;
      align-items: center;
      font-weight: ${n.weight.normal};
      color: ${t.gray[400]};
    `,matchRow:e=>{let n=[u`
        display: flex;
        border-bottom: 1px solid ${t.darkGray[400]};
        cursor: pointer;
        align-items: center;
        padding: ${r[1]} ${r[2]};
        gap: ${r[2]};
        font-size: ${l.xs};
        color: ${t.gray[300]};
      `];if(e){let e=u`
          background: ${t.darkGray[500]};
        `;n.push(e)}return n},matchIndicator:e=>{let n=[u`
        flex: 0 0 auto;
        width: ${r[3]};
        height: ${r[3]};
        background: ${t[e][900]};
        border: 1px solid ${t[e][500]};
        border-radius: ${o.radius.full};
        transition: all 0.25s ease-out;
        box-sizing: border-box;
      `];if(e===`gray`){let e=u`
          background: ${t.gray[700]};
          border-color: ${t.gray[400]};
        `;n.push(e)}return n},matchID:u`
      flex: 1;
      line-height: ${c.xs};
    `,ageTicker:e=>{let n=[u`
        display: flex;
        gap: ${r[1]};
        font-size: ${l.xs};
        color: ${t.gray[400]};
        font-variant-numeric: tabular-nums;
        line-height: ${c.xs};
      `];if(e){let e=u`
          color: ${t.yellow[400]};
        `;n.push(e)}return n},secondContainer:u`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      border-right: 1px solid ${t.gray[700]};
      display: flex;
      flex-direction: column;
    `,thirdContainer:u`
      flex: 1 1 500px;
      overflow: auto;
      display: flex;
      flex-direction: column;
      height: 100%;
      border-right: 1px solid ${t.gray[700]};

      @media (max-width: 700px) {
        border-top: 2px solid ${t.gray[700]};
      }
    `,fourthContainer:u`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      display: flex;
      flex-direction: column;
    `,routesContainer:u`
      overflow-x: auto;
      overflow-y: visible;
    `,routesRowContainer:(e,n)=>{let i=[u`
        display: flex;
        border-bottom: 1px solid ${t.darkGray[400]};
        align-items: center;
        padding: ${r[1]} ${r[2]};
        gap: ${r[2]};
        font-size: ${l.xs};
        color: ${t.gray[300]};
        cursor: ${n?`pointer`:`default`};
        line-height: ${c.xs};
      `];if(e){let e=u`
          background: ${t.darkGray[500]};
        `;i.push(e)}return i},routesRow:e=>{let n=[u`
        flex: 1 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: ${l.xs};
        line-height: ${c.xs};
      `];if(!e){let e=u`
          color: ${t.gray[400]};
        `;n.push(e)}return n},routesRowInner:u`
      display: 'flex';
      align-items: 'center';
      flex-grow: 1;
      min-width: 0;
    `,routeParamInfo:u`
      color: ${t.gray[400]};
      font-size: ${l.xs};
      line-height: ${c.xs};
    `,nestedRouteRow:e=>u`
        margin-left: ${e?0:r[3.5]};
        border-left: ${e?``:`solid 1px ${t.gray[700]}`};
      `,code:u`
      font-size: ${l.xs};
      line-height: ${c.xs};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `,matchesContainer:u`
      flex: 1 1 auto;
      overflow-y: auto;
    `,cachedMatchesContainer:u`
      flex: 1 1 auto;
      overflow-y: auto;
      max-height: 50%;
    `,historyContainer:u`
      display: flex;
      flex: 1 1 auto;
      overflow-y: auto;
      max-height: 50%;
    `,historyOverflowContainer:u`
      padding: ${r[1]} ${r[2]};
      font-size: ${X.font.size.xs};
    `,maskedBadgeContainer:u`
      flex: 1;
      justify-content: flex-end;
      display: flex;
    `,matchDetails:u`
      display: flex;
      flex-direction: column;
      padding: ${X.size[2]};
      font-size: ${X.font.size.xs};
      color: ${X.colors.gray[300]};
      line-height: ${X.font.lineHeight.sm};
    `,matchStatus:(e,t)=>{let n=t&&e===`success`?t===`beforeLoad`?`purple`:`blue`:{pending:`yellow`,success:`green`,error:`red`,notFound:`purple`,redirected:`gray`}[e];return u`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        border-radius: ${X.border.radius.sm};
        font-weight: ${X.font.weight.normal};
        background-color: ${X.colors[n][900]}${X.alpha[90]};
        color: ${X.colors[n][300]};
        border: 1px solid ${X.colors[n][600]};
        margin-bottom: ${X.size[2]};
        transition: all 0.25s ease-out;
      `},matchDetailsInfo:u`
      display: flex;
      justify-content: flex-end;
      flex: 1;
    `,matchDetailsInfoLabel:u`
      display: flex;
    `,mainCloseBtn:u`
      background: ${t.darkGray[700]};
      padding: ${r[1]} ${r[2]} ${r[1]} ${r[1.5]};
      border-radius: ${o.radius.md};
      position: fixed;
      z-index: 99999;
      display: inline-flex;
      width: fit-content;
      cursor: pointer;
      appearance: none;
      border: 0;
      gap: 8px;
      align-items: center;
      border: 1px solid ${t.gray[500]};
      font-size: ${n.size.xs};
      cursor: pointer;
      transition: all 0.25s ease-out;

      &:hover {
        background: ${t.darkGray[500]};
      }
    `,mainCloseBtnPosition:e=>u`
        ${e===`top-left`?`top: ${r[2]}; left: ${r[2]};`:``}
        ${e===`top-right`?`top: ${r[2]}; right: ${r[2]};`:``}
        ${e===`bottom-left`?`bottom: ${r[2]}; left: ${r[2]};`:``}
        ${e===`bottom-right`?`bottom: ${r[2]}; right: ${r[2]};`:``}
      `,mainCloseBtnAnimation:e=>e?u`
        opacity: 0;
        pointer-events: none;
        visibility: hidden;
      `:u`
          opacity: 1;
          pointer-events: auto;
          visibility: visible;
        `,routerLogoCloseButton:u`
      font-weight: ${n.weight.semibold};
      font-size: ${n.size.xs};
      background: linear-gradient(to right, #98f30c, #00f4a3);
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,mainCloseBtnDivider:u`
      width: 1px;
      background: ${X.colors.gray[600]};
      height: 100%;
      border-radius: 999999px;
      color: transparent;
    `,mainCloseBtnIconContainer:u`
      position: relative;
      width: ${r[5]};
      height: ${r[5]};
      background: pink;
      border-radius: 999999px;
      overflow: hidden;
    `,mainCloseBtnIconOuter:u`
      width: ${r[5]};
      height: ${r[5]};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      filter: blur(3px) saturate(1.8) contrast(2);
    `,mainCloseBtnIconInner:u`
      width: ${r[4]};
      height: ${r[4]};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `,panelCloseBtn:u`
      position: absolute;
      cursor: pointer;
      z-index: 100001;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      background-color: ${t.darkGray[700]};
      &:hover {
        background-color: ${t.darkGray[500]};
      }

      top: 0;
      right: ${r[2]};
      transform: translate(0, -100%);
      border-right: ${t.darkGray[300]} 1px solid;
      border-left: ${t.darkGray[300]} 1px solid;
      border-top: ${t.darkGray[300]} 1px solid;
      border-bottom: none;
      border-radius: ${o.radius.sm} ${o.radius.sm} 0px 0px;
      padding: ${r[1]} ${r[1.5]} ${r[.5]} ${r[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        top: 100%;
        left: -${r[2.5]};
        height: ${r[1.5]};
        width: calc(100% + ${r[5]});
      }
    `,panelCloseBtnIcon:u`
      color: ${t.gray[400]};
      width: ${r[2]};
      height: ${r[2]};
    `,navigateButton:u`
      background: none;
      border: none;
      padding: 0 0 0 4px;
      margin: 0;
      color: ${t.gray[400]};
      font-size: ${l.md};
      cursor: pointer;
      line-height: 1;
      vertical-align: middle;
      margin-right: 0.5ch;
      flex-shrink: 0;
      &:hover {
        color: ${t.blue[300]};
      }
    `}};function Z(){let[e]=w(dt(j(nt)));return e}var ft=e=>{try{let t=localStorage.getItem(e);return typeof t==`string`?JSON.parse(t):void 0}catch{return}};function pt(e,t){let[n,r]=w();return E(()=>{r(ft(e)??(typeof t==`function`?t():t))}),[n,t=>{r(n=>{let r=t;typeof t==`function`&&(r=t(n));try{localStorage.setItem(e,JSON.stringify(r))}catch{}return r})}]}var mt=H(`<span><svg xmlns=http://www.w3.org/2000/svg width=12 height=12 fill=none viewBox="0 0 24 24"><path stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M9 18l6-6-6-6">`),ht=H(`<div>`),gt=H(`<button><span> `),_t=H(`<div><div><button> [<!> ... <!>]`),vt=H(`<button><span></span> 🔄 `),yt=H(`<span>:`),bt=H(`<span>`),xt=({expanded:e,style:t={}})=>{let n=Tt();return(()=>{var t=mt(),i=t.firstChild;return T(a=>{var o=n().expander,s=r(n().expanderIcon(e));return o!==a.e&&G(t,a.e=o),s!==a.t&&W(i,`class`,a.t=s),a},{e:void 0,t:void 0}),t})()};function St(e,t){if(t<1)return[];let n=0,r=[];for(;n<e.length;)r.push(e.slice(n,n+t)),n+=t;return r}function Ct(e){return Symbol.iterator in e}function Q({value:e,defaultExpanded:t,pageSize:n=100,filterSubEntries:i,...a}){let[o,s]=w(!!t),c=()=>s(e=>!e),l=D(()=>typeof e()),u=D(()=>{let n=[],r=e=>{let n=t===!0?{[e.label]:!0}:t?.[e.label];return{...e,value:()=>e.value,defaultExpanded:n}};return Array.isArray(e())?n=e().map((e,t)=>r({label:t.toString(),value:e})):e()!==null&&typeof e()==`object`&&Ct(e())&&typeof e()[Symbol.iterator]==`function`?n=Array.from(e(),(e,t)=>r({label:t.toString(),value:e})):typeof e()==`object`&&e()!==null&&(n=Object.entries(e()).map(([e,t])=>r({label:e,value:t}))),i?i(n):n}),d=D(()=>St(u(),n)),[f,p]=w([]),[m,h]=w(void 0),g=Tt(),_=()=>{h(e()())},v=t=>z(Q,B({value:e,filterSubEntries:i},a,t));return(()=>{var t=ht();return K(t,(()=>{var t=V(()=>!!d().length);return()=>t()?[(()=>{var e=gt(),t=e.firstChild,n=t.firstChild;return e.$$click=()=>c(),K(e,z(xt,{get expanded(){return o()??!1}}),t),K(e,()=>a.label,t),K(t,()=>String(l).toLowerCase()===`iterable`?`(Iterable) `:``,n),K(t,()=>u().length,n),K(t,()=>u().length>1?`items`:`item`,null),T(n=>{var r=g().expandButton,i=g().info;return r!==n.e&&G(e,n.e=r),i!==n.t&&G(t,n.t=i),n},{e:void 0,t:void 0}),e})(),V(()=>V(()=>!!(o()??!1))()?V(()=>d().length===1)()?(()=>{var e=ht();return K(e,()=>u().map((e,t)=>v(e))),T(()=>G(e,g().subEntries)),e})():(()=>{var e=ht();return K(e,()=>d().map((e,t)=>(()=>{var i=_t(),a=i.firstChild,o=a.firstChild,s=o.firstChild,c=s.nextSibling,l=c.nextSibling.nextSibling;return l.nextSibling,o.$$click=()=>p(e=>e.includes(t)?e.filter(e=>e!==t):[...e,t]),K(o,z(xt,{get expanded(){return f().includes(t)}}),s),K(o,t*n,c),K(o,t*n+n-1,l),K(a,(()=>{var n=V(()=>!!f().includes(t));return()=>n()?(()=>{var t=ht();return K(t,()=>e.map(e=>v(e))),T(()=>G(t,g().subEntries)),t})():null})(),null),T(e=>{var t=g().entry,n=r(g().labelButton,`labelButton`);return t!==e.e&&G(a,e.e=t),n!==e.t&&G(o,e.t=n),e},{e:void 0,t:void 0}),i})())),T(()=>G(e,g().subEntries)),e})():null)]:(()=>{var t=V(()=>l()===`function`);return()=>t()?z(Q,{get label(){return(()=>{var e=vt(),t=e.firstChild;return e.$$click=_,K(t,()=>a.label),T(()=>G(e,g().refreshValueBtn)),e})()},value:m,defaultExpanded:{}}):[(()=>{var e=yt(),t=e.firstChild;return K(e,()=>a.label,t),e})(),` `,(()=>{var t=bt();return K(t,()=>lt(e())),T(()=>G(t,g().value)),t})()]})()})()),T(()=>G(t,g().entry)),t})()}var wt=e=>{let{colors:t,font:n,size:r}=X,{fontFamily:i,lineHeight:o,size:s}=n,c=e?a.bind({target:e}):a;return{entry:c`
      font-family: ${i.mono};
      font-size: ${s.xs};
      line-height: ${o.sm};
      outline: none;
      word-break: break-word;
    `,labelButton:c`
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      background: transparent;
      border: none;
      padding: 0;
    `,expander:c`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: ${r[3]};
      height: ${r[3]};
      padding-left: 3px;
      box-sizing: content-box;
    `,expanderIcon:e=>e?c`
          transform: rotate(90deg);
          transition: transform 0.1s ease;
        `:c`
        transform: rotate(0deg);
        transition: transform 0.1s ease;
      `,expandButton:c`
      display: flex;
      gap: ${r[1]};
      align-items: center;
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      background: transparent;
      border: none;
      padding: 0;
    `,value:c`
      color: ${t.purple[400]};
    `,subEntries:c`
      margin-left: ${r[2]};
      padding-left: ${r[2]};
      border-left: 2px solid ${t.darkGray[400]};
    `,info:c`
      color: ${t.gray[500]};
      font-size: ${s[`2xs`]};
      padding-left: ${r[1]};
    `,refreshValueBtn:c`
      appearance: none;
      border: 0;
      cursor: pointer;
      background: transparent;
      color: inherit;
      padding: 0;
      font-family: ${i.mono};
      font-size: ${s.xs};
    `}};function Tt(){let[e]=w(wt(j(nt)));return e}U([`click`]);var Et=H(`<div><div></div><div>/</div><div></div><div>/</div><div>`);function Dt(e){let t=[`s`,`min`,`h`,`d`],n=[e/1e3,e/6e4,e/36e5,e/864e5],r=0;for(let e=1;e<n.length&&!(n[e]<1);e++)r=e;return new Intl.NumberFormat(navigator.language,{compactDisplay:`short`,notation:`compact`,maximumFractionDigits:0}).format(n[r])+t[r]}function Ot({match:e,router:t}){let n=Z();if(!e)return null;let i=t().looseRoutesById[e.routeId];if(!i.options.loader)return null;let a=Date.now()-e.updatedAt,o=i.options.staleTime??t().options.defaultStaleTime??0,s=i.options.gcTime??t().options.defaultGcTime??1800*1e3;return(()=>{var e=Et(),t=e.firstChild,i=t.nextSibling.nextSibling,c=i.nextSibling.nextSibling;return K(t,()=>Dt(a)),K(i,()=>Dt(o)),K(c,()=>Dt(s)),T(()=>G(e,r(n().ageTicker(a>o)))),e})()}var kt=H(`<button type=button>➔`);function At({to:e,params:t,search:n,router:r}){let i=Z();return(()=>{var a=kt();return a.$$click=i=>{i.stopPropagation(),r().navigate({to:e,params:t,search:n})},W(a,`title`,`Navigate to ${e}`),T(()=>G(a,i().navigateButton)),a})()}U([`click`]);var jt=H(`<button><div>TANSTACK</div><div>TanStack Router v1`),Mt=H(`<div><div>`),Nt=H(`<code> `),$=H(`<code>`),Pt=H(`<div><div role=button><div>`),Ft=H(`<div>`),It=H(`<div><ul>`),Lt=H(`<div><button><svg xmlns=http://www.w3.org/2000/svg width=10 height=6 fill=none viewBox="0 0 10 6"><path stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=1.667 d="M1 1l4 4 4-4"></path></svg></button><div><div></div><div><div></div></div></div><div><div><div><span>Pathname</span></div><div><code></code></div><div><div><button type=button>Routes</button><button type=button>Matches</button><button type=button>History</button></div><div><div>age / staleTime / gcTime</div></div></div><div>`),Rt=H(`<div><span>masked`),zt=H(`<div role=button><div>`),Bt=H(`<li><div>`),Vt=H(`<li>This panel displays the most recent 15 navigations.`),Ht=H(`<div><div><div>Cached Matches</div><div>age / staleTime / gcTime</div></div><div>`),Ut=H(`<div><div>Match Details</div><div><div><div><div></div></div><div><div>ID:</div><div><code></code></div></div><div><div>State:</div><div></div></div><div><div>Last Updated:</div><div></div></div></div></div><div>Explorer</div><div>`),Wt=H(`<div>Loader Data`),Gt=H(`<div><div><span>Search Params</span></div><div>`),Kt=H(`<span style=margin-left:0.5rem;>`),qt=H(`<button type=button style=cursor:pointer; aria-label="Copy value to clipboard">`),Jt=15;function Yt(e){let{className:t,...n}=e,i=Z();return(()=>{var e=jt(),a=e.firstChild,o=a.nextSibling;return Ve(e,B(n,{get class(){return r(i().logo,t?t():``)}}),!1,!0),T(e=>{var t=i().tanstackLogo,n=i().routerLogo;return t!==e.e&&G(a,e.e=t),n!==e.t&&G(o,e.t=n),e},{e:void 0,t:void 0}),e})()}function Xt(e){return(()=>{var t=Mt(),n=t.firstChild;return t.style.setProperty(`display`,`flex`),t.style.setProperty(`align-items`,`center`),t.style.setProperty(`width`,`100%`),K(t,()=>e.left,n),n.style.setProperty(`flex-grow`,`1`),n.style.setProperty(`min-width`,`0`),K(n,()=>e.children),K(t,()=>e.right,null),T(()=>G(t,e.class)),t})()}function Zt({routerState:t,router:a,route:o,isRoot:s,activeId:c,setActiveId:l}){let u=Z(),d=D(()=>t().pendingMatches||t().matches),f=D(()=>t().matches.find(e=>e.routeId===o.id)),p=D(()=>{try{if(f()?.params){let e=f()?.params,t=o.path||i(o.id);if(t.startsWith(`$`)){let n=t.slice(1);if(e[n])return`(${e[n]})`}}return``}catch{return``}}),m=D(()=>{if(s||!o.path)return;let e=Object.assign({},...d().map(e=>e.params)),t=n({path:o.fullPath,params:e,leaveWildcards:!1,leaveParams:!1,decodeCharMap:a().pathParamsDecodeCharMap});return t.isMissingParams?void 0:t.interpolatedPath});return(()=>{var n=Pt(),h=n.firstChild,g=h.firstChild;return h.$$click=()=>{f()&&l(c()===o.id?``:o.id)},K(h,z(Xt,{get class(){return r(u().routesRow(!!f()))},get left(){return z(Ce,{get when(){return m()},children:e=>z(At,{get to(){return e()},router:a})})},get right(){return z(Ot,{get match(){return f()},router:a})},get children(){return[(()=>{var t=Nt(),n=t.firstChild;return K(t,()=>s?e:o.path||i(o.id),n),T(()=>G(t,u().code)),t})(),(()=>{var e=$();return K(e,p),T(()=>G(e,u().routeParamInfo)),e})()]}}),null),K(n,(()=>{var e=V(()=>!!o.children?.length);return()=>e()?(()=>{var e=Ft();return K(e,()=>[...o.children].sort((e,t)=>e.rank-t.rank).map(e=>z(Zt,{routerState:t,router:a,route:e,activeId:c,setActiveId:l}))),T(()=>G(e,u().nestedRouteRow(!!s))),e})():null})(),null),T(e=>{var t=`Open match details for ${o.id}`,n=r(u().routesRowContainer(o.id===c(),!!f())),i=r(u().matchIndicator(st(d(),o)));return t!==e.e&&W(h,`aria-label`,e.e=t),n!==e.t&&G(h,e.t=n),i!==e.a&&G(g,e.a=i),e},{e:void 0,t:void 0,a:void 0}),n})()}var Qt=function({...n}){let{isOpen:i=!0,setIsOpen:a,handleDragStart:o,router:s,routerState:c,shadowDOMTarget:l,...u}=n,{onCloseClick:d}=it(),f=Z(),{className:p,style:m,...h}=u;t(s,`No router was found for the TanStack Router Devtools. Please place the devtools in the <RouterProvider> component tree or pass the router instance to the devtools manually.`);let[g,_]=pt(`tanstackRouterDevtoolsActiveTab`,`routes`),[v,y]=pt(`tanstackRouterDevtoolsActiveRouteId`,``),[b,x]=w([]),[S,C]=w(!1);E(()=>{let e=c().matches,t=e[e.length-1];if(!t)return;let n=O(()=>b()),r=n[0],i=r&&r.pathname===t.pathname&&JSON.stringify(r.search??{})===JSON.stringify(t.search??{});(!r||!i)&&(n.length>=Jt&&C(!0),x(e=>{let n=[t,...e];return n.splice(Jt),n}))});let k=D(()=>[...c().pendingMatches??[],...c().matches,...c().cachedMatches].find(e=>e.routeId===v()||e.id===v())),A=D(()=>Object.keys(c().location.search).length),j=D(()=>({...s(),state:c()})),M=D(()=>Object.fromEntries(ut(Object.keys(j()),[`state`,`routesById`,`routesByPath`,`flatRoutes`,`options`,`manifest`].map(e=>t=>t!==e)).map(e=>[e,j()[e]]).filter(e=>typeof e[1]!=`function`&&![`__store`,`basepath`,`injectedHtml`,`subscribers`,`latestLoadPromise`,`navigateTimeout`,`resetNextScroll`,`tempLocationKey`,`latestLocation`,`routeTree`,`history`].includes(e[0])))),N=D(()=>k()?.loaderData),ee=D(()=>k()),P=D(()=>c().location.search);return(()=>{var t=Lt(),n=t.firstChild,i=n.firstChild,l=n.nextSibling,u=l.firstChild,x=u.nextSibling,C=x.firstChild,w=l.nextSibling,E=w.firstChild,D=E.firstChild;D.firstChild;var O=D.nextSibling,j=O.firstChild,te=O.nextSibling,F=te.firstChild,I=F.firstChild,L=I.nextSibling,ne=L.nextSibling,re=F.nextSibling,ie=te.nextSibling;return Ve(t,B({get class(){return r(f().devtoolsPanel,`TanStackRouterDevtoolsPanel`,p?p():``)},get style(){return m?m():``}},h),!1,!0),K(t,o?(()=>{var e=Ft();return Re(e,`mousedown`,o,!0),T(()=>G(e,f().dragHandle)),e})():null,n),n.$$click=e=>{a&&a(!1),d(e)},K(u,z(Yt,{"aria-hidden":!0,onClick:e=>{a&&a(!1),d(e)}})),K(C,z(Q,{label:`Router`,value:M,defaultExpanded:{state:{},context:{},options:{}},filterSubEntries:e=>e.filter(e=>typeof e.value()!=`function`)})),K(D,(()=>{var e=V(()=>!!c().location.maskedLocation);return()=>e()?(()=>{var e=Rt(),t=e.firstChild;return T(n=>{var r=f().maskedBadgeContainer,i=f().maskedBadge;return r!==n.e&&G(e,n.e=r),i!==n.t&&G(t,n.t=i),n},{e:void 0,t:void 0}),e})():null})(),null),K(j,()=>c().location.pathname),K(O,(()=>{var e=V(()=>!!c().location.maskedLocation);return()=>e()?(()=>{var e=$();return K(e,()=>c().location.maskedLocation?.pathname),T(()=>G(e,f().maskedLocation)),e})():null})(),null),I.$$click=()=>{_(`routes`)},L.$$click=()=>{_(`matches`)},ne.$$click=()=>{_(`history`)},K(ie,z(we,{get children(){return[z(Te,{get when(){return g()===`routes`},get children(){return z(Zt,{routerState:c,router:s,get route(){return s().routeTree},isRoot:!0,activeId:v,setActiveId:y})}}),z(Te,{get when(){return g()===`matches`},get children(){var t=Ft();return K(t,()=>(c().pendingMatches?.length?c().pendingMatches:c().matches)?.map((t,n)=>(()=>{var n=zt(),i=n.firstChild;return n.$$click=()=>y(v()===t.id?``:t.id),K(n,z(Xt,{get left(){return z(At,{get to(){return t.pathname},get params(){return t.params},get search(){return t.search},router:s})},get right(){return z(Ot,{match:t,router:s})},get children(){var n=$();return K(n,()=>`${t.routeId===`__root__`?e:t.pathname}`),T(()=>G(n,f().matchID)),n}}),null),T(e=>{var a=`Open match details for ${t.id}`,o=r(f().matchRow(t===k())),s=r(f().matchIndicator(ot(t)));return a!==e.e&&W(n,`aria-label`,e.e=a),o!==e.t&&G(n,e.t=o),s!==e.a&&G(i,e.a=s),e},{e:void 0,t:void 0,a:void 0}),n})())),t}}),z(Te,{get when(){return g()===`history`},get children(){var t=It(),n=t.firstChild;return K(n,z(Se,{get each(){return b()},children:(t,n)=>(()=>{var i=Bt(),a=i.firstChild;return K(i,z(Xt,{get left(){return z(At,{get to(){return t.pathname},get params(){return t.params},get search(){return t.search},router:s})},get right(){return z(Ot,{match:t,router:s})},get children(){var n=$();return K(n,()=>`${t.routeId===`__root__`?e:t.pathname}`),T(()=>G(n,f().matchID)),n}}),null),T(e=>{var o=r(f().matchRow(t===k())),s=r(f().matchIndicator(n()===0?`green`:`gray`));return o!==e.e&&G(i,e.e=o),s!==e.t&&G(a,e.t=s),e},{e:void 0,t:void 0}),i})()}),null),K(n,(()=>{var e=V(()=>!!S());return()=>e()?(()=>{var e=Vt();return T(()=>G(e,f().historyOverflowContainer)),e})():null})(),null),t}})]}})),K(w,(()=>{var e=V(()=>!!c().cachedMatches.length);return()=>e()?(()=>{var e=Ht(),t=e.firstChild,n=t.firstChild.nextSibling,i=t.nextSibling;return K(i,()=>c().cachedMatches.map(e=>(()=>{var t=zt(),n=t.firstChild;return t.$$click=()=>y(v()===e.id?``:e.id),K(t,z(Xt,{get left(){return z(At,{get to(){return e.pathname},get params(){return e.params},get search(){return e.search},router:s})},get right(){return z(Ot,{match:e,router:s})},get children(){var t=$();return K(t,()=>`${e.id}`),T(()=>G(t,f().matchID)),t}}),null),T(i=>{var a=`Open match details for ${e.id}`,o=r(f().matchRow(e===k())),s=r(f().matchIndicator(ot(e)));return a!==i.e&&W(t,`aria-label`,i.e=a),o!==i.t&&G(t,i.t=o),s!==i.a&&G(n,i.a=s),i},{e:void 0,t:void 0,a:void 0}),t})())),T(r=>{var i=f().cachedMatchesContainer,a=f().detailsHeader,o=f().detailsHeaderInfo;return i!==r.e&&G(e,r.e=i),a!==r.t&&G(t,r.t=a),o!==r.a&&G(n,r.a=o),r},{e:void 0,t:void 0,a:void 0}),e})():null})(),null),K(t,(()=>{var e=V(()=>!!(k()&&k()?.status));return()=>e()?(()=>{var e=Ut(),t=e.firstChild,n=t.nextSibling,r=n.firstChild,i=r.firstChild,a=i.firstChild,o=i.nextSibling,s=o.firstChild.nextSibling,l=s.firstChild,u=o.nextSibling,d=u.firstChild.nextSibling,p=u.nextSibling,m=p.firstChild.nextSibling,h=n.nextSibling,g=h.nextSibling;return K(a,(()=>{var e=V(()=>!!(k()?.status===`success`&&k()?.isFetching));return()=>e()?`fetching`:k()?.status})()),K(l,()=>k()?.id),K(d,(()=>{var e=V(()=>!!c().pendingMatches?.find(e=>e.id===k()?.id));return()=>e()?`Pending`:c().matches.find(e=>e.id===k()?.id)?`Active`:`Cached`})()),K(m,(()=>{var e=V(()=>!!k()?.updatedAt);return()=>e()?new Date(k()?.updatedAt).toLocaleTimeString():`N/A`})()),K(e,(()=>{var e=V(()=>!!N());return()=>e()?[(()=>{var e=Wt();return T(()=>G(e,f().detailsHeader)),e})(),(()=>{var e=Ft();return K(e,z(Q,{label:`loaderData`,value:N,defaultExpanded:{}})),T(()=>G(e,f().detailsContent)),e})()]:null})(),h),K(g,z(Q,{label:`Match`,value:ee,defaultExpanded:{}})),T(n=>{var a=f().thirdContainer,c=f().detailsHeader,l=f().matchDetails,_=f().matchStatus(k()?.status,k()?.isFetching),v=f().matchDetailsInfoLabel,y=f().matchDetailsInfo,b=f().matchDetailsInfoLabel,x=f().matchDetailsInfo,S=f().matchDetailsInfoLabel,C=f().matchDetailsInfo,w=f().detailsHeader,T=f().detailsContent;return a!==n.e&&G(e,n.e=a),c!==n.t&&G(t,n.t=c),l!==n.a&&G(r,n.a=l),_!==n.o&&G(i,n.o=_),v!==n.i&&G(o,n.i=v),y!==n.n&&G(s,n.n=y),b!==n.s&&G(u,n.s=b),x!==n.h&&G(d,n.h=x),S!==n.r&&G(p,n.r=S),C!==n.d&&G(m,n.d=C),w!==n.l&&G(h,n.l=w),T!==n.u&&G(g,n.u=T),n},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0}),e})():null})(),null),K(t,(()=>{var e=V(()=>!!A());return()=>e()?(()=>{var e=Gt(),t=e.firstChild;t.firstChild;var n=t.nextSibling;return K(t,typeof navigator<`u`?(()=>{var e=Kt();return K(e,z($t,{getValue:()=>{let e=c().location.search;return JSON.stringify(e)}})),e})():null,null),K(n,z(Q,{value:P,get defaultExpanded(){return Object.keys(c().location.search).reduce((e,t)=>(e[t]={},e),{})}})),T(r=>{var i=f().fourthContainer,a=f().detailsHeader,o=f().detailsContent;return i!==r.e&&G(e,r.e=i),a!==r.t&&G(t,r.t=a),o!==r.a&&G(n,r.a=o),r},{e:void 0,t:void 0,a:void 0}),e})():null})(),null),T(e=>{var t=f().panelCloseBtn,a=f().panelCloseBtnIcon,o=f().firstContainer,s=f().row,c=f().routerExplorerContainer,d=f().routerExplorer,p=f().secondContainer,m=f().matchesContainer,h=f().detailsHeader,_=f().detailsContent,v=f().detailsHeader,y=f().routeMatchesToggle,b=g()===`routes`,S=r(f().routeMatchesToggleBtn(g()===`routes`,!0)),T=g()===`matches`,k=r(f().routeMatchesToggleBtn(g()===`matches`,!0)),A=g()===`history`,j=r(f().routeMatchesToggleBtn(g()===`history`,!1)),M=f().detailsHeaderInfo,N=r(f().routesContainer);return t!==e.e&&G(n,e.e=t),a!==e.t&&W(i,`class`,e.t=a),o!==e.a&&G(l,e.a=o),s!==e.o&&G(u,e.o=s),c!==e.i&&G(x,e.i=c),d!==e.n&&G(C,e.n=d),p!==e.s&&G(w,e.s=p),m!==e.h&&G(E,e.h=m),h!==e.r&&G(D,e.r=h),_!==e.d&&G(O,e.d=_),v!==e.l&&G(te,e.l=v),y!==e.u&&G(F,e.u=y),b!==e.c&&(I.disabled=e.c=b),S!==e.w&&G(I,e.w=S),T!==e.m&&(L.disabled=e.m=T),k!==e.f&&G(L,e.f=k),A!==e.y&&(ne.disabled=e.y=A),j!==e.g&&G(ne,e.g=j),M!==e.p&&G(re,e.p=M),N!==e.b&&G(ie,e.b=N),e},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0,p:void 0,b:void 0}),t})()};function $t({getValue:e}){let[t,n]=w(!1),r=null,i=async()=>{if(typeof navigator>`u`||!navigator.clipboard?.writeText){console.warn(`TanStack Router Devtools: Clipboard API unavailable`);return}try{let t=e();await navigator.clipboard.writeText(t),n(!0),r&&clearTimeout(r),r=setTimeout(()=>n(!1),2500)}catch(e){console.error(`TanStack Router Devtools: Failed to copy`,e)}};return k(()=>{r&&clearTimeout(r)}),(()=>{var e=qt();return e.$$click=i,K(e,()=>t()?`✅`:`📋`),T(()=>W(e,`title`,t()?`Copied!`:`Copy`)),e})()}U([`click`,`mousedown`]);var en=Object.freeze(Object.defineProperty({__proto__:null,BaseTanStackRouterDevtoolsPanel:Qt,default:Qt},Symbol.toStringTag,{value:`Module`}));export{W as _,Z as a,G as c,D as d,T as f,B as g,K as h,pt as i,z as l,be as m,en as n,rt as o,w as p,ct as r,tt as s,Qt as t,E as u,Ve as v,H as y};