import*as V from"react";import{clsx as R}from"clsx";function u(r){var e=r.match(/^var\((.*)\)$/);return e?e[1]:r}function v(r,e){var t=r;for(var o of e){if(!(o in t))throw new Error("Path ".concat(e.join(" -> ")," does not exist in object"));t=t[o]}return t}function p(r,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],o={};for(var n in r){var a=r[n],i=[...t,n];typeof a=="string"||typeof a=="number"||a==null?o[n]=e(a,i):typeof a=="object"&&!Array.isArray(a)?o[n]=p(a,e,i):console.warn('Skipping invalid key "'.concat(i.join("."),'". Should be a string, number, null or object. Received: "').concat(Array.isArray(a)?"Array":typeof a,'"'))}return o}function g(r,e){var t={};if(typeof e=="object"){var o=r;p(e,(l,s)=>{if(l!=null){var c=v(o,s);t[u(c)]=String(l)}})}else{var n=r;for(var a in n){var i=n[a];i!=null&&(t[u(a)]=i)}}return Object.defineProperty(t,"toString",{value:function(){return Object.keys(this).map(s=>"".concat(s,":").concat(this[s])).join(";")},writable:!1}),t}function x(r,e){if(typeof r!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var o=t.call(r,e||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function h(r){var e=x(r,"string");return typeof e=="symbol"?e:String(e)}function C(r,e,t){return e=h(e),e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function b(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);e&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})),t.push.apply(t,o)}return t}function d(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?b(Object(t),!0).forEach(function(o){C(r,o,t[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach(function(o){Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(t,o))})}return r}function y(r,e){var t={};for(var o in r)t[o]=e(r[o],o);return t}var E=(r,e,t)=>{for(var o of Object.keys(r)){var n;if(r[o]!==((n=e[o])!==null&&n!==void 0?n:t[o]))return!1}return!0},m=r=>{var e=t=>{var o=r.defaultClassName,n=d(d({},r.defaultVariants),t);for(var a in n){var i,l=(i=n[a])!==null&&i!==void 0?i:r.defaultVariants[a];if(l!=null){var s=l;typeof s=="boolean"&&(s=s===!0?"true":"false");var c=r.variantClassNames[a][s];c&&(o+=" "+c)}}for(var[f,w]of r.compoundVariants)E(f,n,r.defaultVariants)&&(o+=" "+w);return o};return e.variants=()=>Object.keys(r.variantClassNames),e.classNames={get base(){return r.defaultClassName.split(" ")[0]},get variants(){return y(r.variantClassNames,t=>y(t,o=>o.split(" ")[0]))}},e};var j="var(--_1o1pgcn2)",O="var(--_1o1pgcn0)",S="var(--_1o1pgcn1)",P=m({defaultClassName:"_1o1pgcn3",variantClassNames:{size:{lg:"_1o1pgcn4",md:"_1o1pgcn5",sm:"_1o1pgcn6",xs:"_1o1pgcn7"},variant:{outline:"_1o1pgcn8",filled:"_1o1pgcn9"}},defaultVariants:{},compoundVariants:[]});import{vars as N}from"@design-system/themes";import{useSelect as A}from"@design-system/react-hooks-select";import{jsx as F}from"react/jsx-runtime";var B=(r,e)=>{let{color:t="gray",size:o="md",variant:n="outline",errorBorderColor:a="#E53E3E",focusBorderColor:i="#3182CE",className:l,style:s,...c}=r,{selectProps:f}=A(c);return F("select",{...f,ref:e,className:R([P({size:o,variant:n}),l]),style:{...g({[j]:N.colors.$scale[t][900],[O]:a,[S]:i}),...s}})},D=V.forwardRef(B);export{D as Select};
//# sourceMappingURL=index.js.map
