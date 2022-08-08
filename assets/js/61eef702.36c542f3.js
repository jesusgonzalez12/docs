"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[60295],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),f=o,d=s["".concat(l,".").concat(f)]||s[f]||m[f]||i;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},44150:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return m}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],c={title:"cmTom (Function)"},l=void 0,u={unversionedId:"cep/reference/functions/unitconversion/cmTom",id:"cep/reference/functions/unitconversion/cmTom",title:"cmTom (Function)",description:"This converts the input given in centimeters into meters.",source:"@site/docs/cep/reference/functions/unitconversion/cmTom.md",sourceDirName:"cep/reference/functions/unitconversion",slug:"/cep/reference/functions/unitconversion/cmTom",permalink:"/docs/cep/reference/functions/unitconversion/cmTom",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/cep/reference/functions/unitconversion/cmTom.md",tags:[],version:"current",frontMatter:{title:"cmTom (Function)"},sidebar:"tutorialSidebar",previous:{title:"cmTokm (Function)",permalink:"/docs/cep/reference/functions/unitconversion/cmTokm"},next:{title:"cmTomi (Function)",permalink:"/docs/cep/reference/functions/unitconversion/cmTomi"}},p={},m=[{value:"Query Parameters",id:"query-parameters",level:2},{value:"Example 1",id:"example-1",level:2}],s={toc:m};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This converts the input given in centimeters into meters."),(0,i.kt)("p",null,"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<DOUBLE> unitconversion:cmTom(<INT|LONG|FLOAT|DOUBLE> p1)\n")),(0,i.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Possible Data Types"),(0,i.kt)("th",{parentName:"tr",align:null},"Optional"),(0,i.kt)("th",{parentName:"tr",align:null},"Dynamic"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"p1"),(0,i.kt)("td",{parentName:"tr",align:null},"The value that needs to be converted from centimeters into meters."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"INT LONG FLOAT DOUBLE"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,i.kt)("h2",{id:"example-1"},"Example 1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"unitconversion:cmTom(100)\n")),(0,i.kt)("p",null,"The centimeters value ",(0,i.kt)("inlineCode",{parentName:"p"},"100")," is converted into meters as ",(0,i.kt)("inlineCode",{parentName:"p"},"1.0"),"."))}f.isMDXComponent=!0}}]);