"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9897],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62993:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var r=n(83117),a=n(80102),l=(n(67294),n(3905)),o=["components"],i={title:"lengthBatch (Window)"},c=void 0,u={unversionedId:"cep/reference/functions/core/lengthBatch",id:"cep/reference/functions/core/lengthBatch",title:"lengthBatch (Window)",description:"A batch (tumbling) length window that holds and process a number of events as specified in the window.length.",source:"@site/docs/cep/reference/functions/core/lengthBatch.md",sourceDirName:"cep/reference/functions/core",slug:"/cep/reference/functions/core/lengthBatch",permalink:"/docs/cep/reference/functions/core/lengthBatch",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/cep/reference/functions/core/lengthBatch.md",tags:[],version:"current",frontMatter:{title:"lengthBatch (Window)"},sidebar:"tutorialSidebar",previous:{title:"length (Window)",permalink:"/docs/cep/reference/functions/core/length"},next:{title:"log (Stream Processor)",permalink:"/docs/cep/reference/functions/core/log"}},p={},s=[{value:"Query Parameters",id:"query-parameters",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2}],m={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A batch (tumbling) length window that holds and process a number of events as specified in the window.length."),(0,l.kt)("p",null,"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"lengthBatch(<INT> window.length)\nlengthBatch(<INT> window.length, <BOOL> stream.current.event)\n")),(0,l.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Possible Data Types"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"),(0,l.kt)("th",{parentName:"tr",align:null},"Dynamic"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"window.length"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of events the window should tumble."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"INT"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stream.current.event"),(0,l.kt)("td",{parentName:"tr",align:null},"Let the window stream the current events out as and when they arrive to the window while expiring them in batches."),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"BOOL"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("h2",{id:"example-1"},"Example 1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"CREATE STREAM InputEventStream (symbol string, price float, volume int);\n\n@info(name = 'query1')\ninsert into OutputStream\nselect symbol, sum(price) as price\nfrom InputEventStream#lengthBatch(10);\n")),(0,l.kt)("p",null,"This collect and process 10 events as a batch and output them."),(0,l.kt)("h2",{id:"example-2"},"Example 2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"CREATE STREAM InputEventStream (symbol string, price float, volume int);\n\n@info(name = 'query1')\ninsert into OutputStream\nselect symbol, sum(price) as sumPrice\nfrom InputEventStream#lengthBatch(10, true);\n")),(0,l.kt)("p",null,"This window sends the arriving events directly to the output letting the ",(0,l.kt)("inlineCode",{parentName:"p"},"sumPrice")," to increase gradually, after every 10 events it clears the window as a batch and resets the ",(0,l.kt)("inlineCode",{parentName:"p"},"sumPrice")," to zero."),(0,l.kt)("h2",{id:"example-3"},"Example 3"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"CREATE STREAM InputEventStream (symbol string, price float, volume int);\nCREATE WINDOW StockEventWindow (symbol string, price float, volume int) lengthBatch(10) output all events;\n\n@info(name = 'query0')\ninsert into StockEventWindow\nfrom InputEventStream;\n\n@info(name = 'query1')\ninsert all events into OutputStream \nselect symbol, sum(price) as price\nfrom StockEventWindow;\n")),(0,l.kt)("p",null,"This uses a defined window to process 10 events as a batch and output all events."))}d.isMDXComponent=!0}}]);