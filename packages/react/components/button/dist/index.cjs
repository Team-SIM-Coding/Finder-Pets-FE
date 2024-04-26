"use strict";var v=Object.defineProperty;var E=Object.getOwnPropertyDescriptor;var z=Object.getOwnPropertyNames;var D=Object.prototype.hasOwnProperty;var F=(r,t)=>{for(var e in t)v(r,e,{get:t[e],enumerable:!0})},I=(r,t,e,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of z(t))!D.call(r,n)&&n!==e&&v(r,n,{get:()=>t[n],enumerable:!(a=E(t,n))||a.enumerable});return r};var K=r=>I(v({},"__esModule",{value:!0}),r);var G={};F(G,{Button:()=>_});module.exports=K(G);var N=require("react"),c=require("@design-system/themes"),k=require("@design-system/react-hooks-button"),B=require("clsx");function L(r,t){if(typeof r!="object"||!r)return r;var e=r[Symbol.toPrimitive];if(e!==void 0){var a=e.call(r,t||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(r)}function T(r){var t=L(r,"string");return typeof t=="symbol"?t:String(t)}function $(r,t,e){return t=T(t),t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function j(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);t&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})),e.push.apply(e,a)}return e}function V(r){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?j(Object(e),!0).forEach(function(a){$(r,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):j(Object(e)).forEach(function(a){Object.defineProperty(r,a,Object.getOwnPropertyDescriptor(e,a))})}return r}function O(r,t){var e={};for(var a in r)e[a]=t(r[a],a);return e}var H=(r,t,e)=>{for(var a of Object.keys(r)){var n;if(r[a]!==((n=t[a])!==null&&n!==void 0?n:e[a]))return!1}return!0},p=r=>{var t=e=>{var a=r.defaultClassName,n=V(V({},r.defaultVariants),e);for(var o in n){var s,l=(s=n[o])!==null&&s!==void 0?s:r.defaultVariants[o];if(l!=null){var i=l;typeof i=="boolean"&&(i=i===!0?"true":"false");var f=r.variantClassNames[o][i];f&&(a+=" "+f)}}for(var[m,b]of r.compoundVariants)H(m,n,r.defaultVariants)&&(a+=" "+b);return a};return t.variants=()=>Object.keys(r.variantClassNames),t.classNames={get base(){return r.defaultClassName.split(" ")[0]},get variants(){return O(r.variantClassNames,e=>O(e,a=>a.split(" ")[0]))}},t};var q="var(--_12k0qb72)",P=p({defaultClassName:"_12k0qb73",variantClassNames:{size:{xs:"_12k0qb74",sm:"_12k0qb75",md:"_12k0qb76",lg:"_12k0qb77"},variant:{solid:"_12k0qb78",outline:"_12k0qb79",ghost:"_12k0qb7a"}},defaultVariants:{},compoundVariants:[]}),h="var(--_12k0qb70)",w="var(--_12k0qb71)",d=p({defaultClassName:"_12k0qb7b",variantClassNames:{size:{xs:"_12k0qb7c",sm:"_12k0qb7d",md:"_12k0qb7e",lg:"_12k0qb7f"}},defaultVariants:{},compoundVariants:[]}),x=p({defaultClassName:"_12k0qb7h",variantClassNames:{size:{xs:"_12k0qb7i",sm:"_12k0qb7j",md:"_12k0qb7k",lg:"_12k0qb7l"}},defaultVariants:{},compoundVariants:[]});function y(r){var t=r.match(/^var\((.*)\)$/);return t?t[1]:r}function C(r,t){var e=r;for(var a of t){if(!(a in e))throw new Error("Path ".concat(t.join(" -> ")," does not exist in object"));e=e[a]}return e}function g(r,t){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],a={};for(var n in r){var o=r[n],s=[...e,n];typeof o=="string"||typeof o=="number"||o==null?a[n]=t(o,s):typeof o=="object"&&!Array.isArray(o)?a[n]=g(o,t,s):console.warn('Skipping invalid key "'.concat(s.join("."),'". Should be a string, number, null or object. Received: "').concat(Array.isArray(o)?"Array":typeof o,'"'))}return a}function S(r,t){var e={};if(typeof t=="object"){var a=r;g(t,(l,i)=>{if(l!=null){var f=C(a,i);e[y(f)]=String(l)}})}else{var n=r;for(var o in n){var s=n[o];s!=null&&(e[y(o)]=s)}}return Object.defineProperty(e,"toString",{value:function(){return Object.keys(this).map(i=>"".concat(i,":").concat(this[i])).join(";")},writable:!1}),e}var u=require("react/jsx-runtime"),M=(r,t)=>{let{buttonProps:e}=(0,k.useButton)(r),{variant:a="solid",size:n="md",color:o="gray",leftIcon:s,rightIcon:l,isLoading:i,children:f,style:m}=r,b=c.vars.colors.$scale[o][500],R=a==="solid"?c.vars.colors.$scale[o][600]:c.vars.colors.$scale[o][50],A=a==="solid"?c.vars.colors.$scale[o][700]:c.vars.colors.$scale[o][100];return(0,u.jsxs)("button",{...e,ref:t,className:(0,B.clsx)([P({size:n,variant:a})]),style:{...S({[h]:b,[w]:R,[q]:A}),...m},children:[i&&(0,u.jsx)("div",{className:x({size:n})}),s&&(0,u.jsx)("span",{className:d({size:n}),children:s}),(0,u.jsx)("span",{children:f}),l&&(0,u.jsx)("span",{className:d({size:n}),children:l})]})},_=(0,N.forwardRef)(M);
//# sourceMappingURL=index.cjs.map
