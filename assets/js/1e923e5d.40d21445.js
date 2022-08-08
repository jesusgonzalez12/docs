"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[77391],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(r),d=a,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||l;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},74260:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return m}});var n=r(83117),a=r(80102),l=(r(67294),r(3905)),o=["components"],i={title:"csv (Sink Mapper)"},p=void 0,s={unversionedId:"cep/reference/functions/sinkmapper/csv",id:"cep/reference/functions/sinkmapper/csv",title:"csv (Sink Mapper)",description:"This output mapper extension allows you to convert Stream App events processed by the gdn SP to CSV message before publishing them. You can either use custom placeholder to map a custom CSV message or use pre-defined CSV format where event conversion takes place without extra configurations.",source:"@site/docs/cep/reference/functions/sinkmapper/csv.md",sourceDirName:"cep/reference/functions/sinkmapper",slug:"/cep/reference/functions/sinkmapper/csv",permalink:"/docs/cep/reference/functions/sinkmapper/csv",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/cep/reference/functions/sinkmapper/csv.md",tags:[],version:"current",frontMatter:{title:"csv (Sink Mapper)"},sidebar:"tutorialSidebar",previous:{title:"binary (Sink Mapper)",permalink:"/docs/cep/reference/functions/sinkmapper/binary"},next:{title:"json (Sink Mapper)",permalink:"/docs/cep/reference/functions/sinkmapper/json"}},u={},m=[{value:"Query Parameters",id:"query-parameters",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2}],c={toc:m};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This output mapper extension allows you to convert Stream App events processed by the gdn SP to CSV message before publishing them. You can either use custom placeholder to map a custom CSV message or use pre-defined CSV format where event conversion takes place without extra configurations."),(0,l.kt)("p",null,"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'CREATE SINK <NAME> WITH (map.type="csv", map.delimiter="<STRING>", map.header="<BOOL>", map.event.grouping.enabled="<BOOL>")\n')),(0,l.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Possible Data Types"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"),(0,l.kt)("th",{parentName:"tr",align:null},"Dynamic"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"delimiter"),(0,l.kt)("td",{parentName:"tr",align:null},"This parameter used to separate the output CSV data, when converting a Stream App event to CSV format,"),(0,l.kt)("td",{parentName:"tr",align:null},","),(0,l.kt)("td",{parentName:"tr",align:null},"STRING"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"header"),(0,l.kt)("td",{parentName:"tr",align:null},"This parameter specifies whether the CSV messages will be generated with header or not. If this parameter is set to true, message will be generated with header"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"BOOL"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"event.grouping.enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"If this parameter is set to ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", events are grouped via a line.separator when multiple events are received. It is required to specify a value for the System.lineSeparator() when the value for this parameter is ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"BOOL"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("h2",{id:"example-1"},"Example 1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"CREATE SINK BarStream WITH (type='inMemory', topic='{{symbol}}', map.type='csv') (symbol string, price float, volume long);\n")),(0,l.kt)("p",null,"Above configuration will perform a default CSV output mapping, which will generate output as follows: ",(0,l.kt)("inlineCode",{parentName:"p"},"symbol-price-volumegdn-55.6-100")),(0,l.kt)("p",null,'If header is true and delimiter is "-", then the output will be as follows: ',(0,l.kt)("inlineCode",{parentName:"p"},"symbol-price-volume")),(0,l.kt)("h2",{id:"example-2"},"Example 2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"CREATE SINK BarStream WITH (type='inMemory', topic='{{symbol}}', map.type='csv', map.header='true', map.delimiter='-', map.payload=\"symbol='0',price='2',volume='1'\") (symbol string, price float,volume long);\n")),(0,l.kt)("p",null,"Above configuration will perform a custom CSV mapping. Here, user can add custom place order in the @payload. The place order indicates that where the attribute name's value will be appear in the output message, The output will be produced output as follows: gdn,100,55.6 "),(0,l.kt)("p",null,'If header is true and delimiter is "-", then the output will be as follows: ',(0,l.kt)("inlineCode",{parentName:"p"},"price-volume-symbol 55.6-100-gdn")," "),(0,l.kt)("p",null,"If event grouping is enabled, then the output is as follows: ",(0,l.kt)("inlineCode",{parentName:"p"},"price-volume-symbol 55.6-100-gdnSystem.lineSeparator() 55.6-100-IBMSystem.lineSeparator() 55.6-100-IFSSystem.lineSeparator()")))}d.isMDXComponent=!0}}]);