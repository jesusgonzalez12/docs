"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[42527],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return p}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=m(r),p=a,k=d["".concat(s,".").concat(p)]||d[p]||u[p]||l;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var m=2;m<l;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},72310:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return u}});var n=r(83117),a=r(80102),l=(r(67294),r(3905)),i=["components"],o={title:"akslack (Stream Processor)"},s=void 0,m={unversionedId:"cep/reference/functions/reorder/akslack",id:"cep/reference/functions/reorder/akslack",title:"akslack (Stream Processor)",description:"Stream processor performs reordering of out-of-order events optimized for a givenparameter using \\AQ-K-Slack algorithm\\. This is best for reordering events on attributes those are used for aggregations.data .",source:"@site/docs/cep/reference/functions/reorder/akslack.md",sourceDirName:"cep/reference/functions/reorder",slug:"/cep/reference/functions/reorder/akslack",permalink:"/docs/cep/reference/functions/reorder/akslack",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/cep/reference/functions/reorder/akslack.md",tags:[],version:"current",frontMatter:{title:"akslack (Stream Processor)"},sidebar:"tutorialSidebar",previous:{title:"matches (Function)",permalink:"/docs/cep/reference/functions/regex/matches"},next:{title:"kslack (Stream Processor)",permalink:"/docs/cep/reference/functions/reorder/kslack"}},c={},u=[{value:"Query Parameters",id:"query-parameters",level:2},{value:"Example 1",id:"example-1",level:2}],d={toc:u};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Stream processor performs reordering of out-of-order events optimized for a givenparameter using ","[","AQ-K-Slack algorithm","]","(",(0,l.kt)("a",{parentName:"p",href:"http://dl.acm.org/citation.cfm?doid=2675743.2771828"},"http://dl.acm.org/citation.cfm?doid=2675743.2771828"),"). This is best for reordering events on attributes those are used for aggregations.data ."),(0,l.kt)("p",null,"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"reorder:akslack(<LONG> timestamp, <INT|FLOAT|LONG|DOUBLE> correlation.field)\nreorder:akslack(<LONG> timestamp, <INT|FLOAT|LONG|DOUBLE> correlation.field, <LONG> batch.size)\nreorder:akslack(<LONG> timestamp, <INT|FLOAT|LONG|DOUBLE> correlation.field, <LONG> batch.size, <LONG> timeout)\nreorder:akslack(<LONG> timestamp, <INT|FLOAT|LONG|DOUBLE> correlation.field, <LONG> batch.size, <LONG> timeout, <LONG> max.k)\nreorder:akslack(<LONG> timestamp, <INT|FLOAT|LONG|DOUBLE> correlation.field, <LONG> batch.size, <LONG> timeout, <LONG> max.k, <BOOL> discard.late.arrival)\nreorder:akslack(<LONG> timestamp, <INT|FLOAT|LONG|DOUBLE> correlation.field, <LONG> batch.size, <LONG> timeout, <LONG> max.k, <BOOL> discard.late.arrival, <DOUBLE> error.threshold, <DOUBLE> confidence.level)\n")),(0,l.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Possible Data Types"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"),(0,l.kt)("th",{parentName:"tr",align:null},"Dynamic"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,l.kt)("td",{parentName:"tr",align:null},"The event timestamp on which the events should be ordered."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"LONG"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"correlation.field"),(0,l.kt)("td",{parentName:"tr",align:null},"By monitoring the changes in this field Alpha K-Slack dynamically optimises its behavior. This field is used to calculate the runtime window coverage threshold, which represents the upper limit set for unsuccessfully handled late arrivals."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"INT FLOAT LONG DOUBLE"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batch.size"),(0,l.kt)("td",{parentName:"tr",align:null},"The parameter ",(0,l.kt)("inlineCode",{parentName:"td"},"batch.size")," denotes the number of events that should be considered in the calculation of an alpha value. This should be greater than or equal to 15."),(0,l.kt)("td",{parentName:"tr",align:null},"`","10,000","`"),(0,l.kt)("td",{parentName:"tr",align:null},"LONG"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"A timeout value in milliseconds, where the buffered events who are older than the given timeout period get flushed every second."),(0,l.kt)("td",{parentName:"tr",align:null},"`","-1","`"," (timeout is infinite)"),(0,l.kt)("td",{parentName:"tr",align:null},"LONG"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max.k"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum K-Slack window threshold (",(0,l.kt)("inlineCode",{parentName:"td"},"K")," parameter)."),(0,l.kt)("td",{parentName:"tr",align:null},"`","9,223,372,036,854,775,807","`"," (The maximum Long value)"),(0,l.kt)("td",{parentName:"tr",align:null},"LONG"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"discard.late.arrival"),(0,l.kt)("td",{parentName:"tr",align:null},"If set to ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," the processor would discarded the out-of-order events arriving later than the K-Slack window, and in otherwise it allows the late arrivals to proceed."),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"BOOL"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"error.threshold"),(0,l.kt)("td",{parentName:"tr",align:null},"The error threshold to be applied in Alpha K-Slack algorithm."),(0,l.kt)("td",{parentName:"tr",align:null},"`","0.03","`"," (3%)"),(0,l.kt)("td",{parentName:"tr",align:null},"DOUBLE"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"confidence.level"),(0,l.kt)("td",{parentName:"tr",align:null},"The confidence level to be applied in Alpha K-Slack algorithm."),(0,l.kt)("td",{parentName:"tr",align:null},"`","0.95","`"," (95%)"),(0,l.kt)("td",{parentName:"tr",align:null},"DOUBLE"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("h2",{id:"example-1"},"Example 1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"CREATE STREAM StockStream (eventTime long, symbol string, volume long);\n\n@info(name = 'query1')\ninsert into OutputStream\nselect eventTime, symbol, sum(volume) as total\nfrom StockStream#reorder:akslack(eventTime, volume, 20) WINDOW SLIDING_TIME(5 min);\n")),(0,l.kt)("p",null,"The query reorders events based on the ",(0,l.kt)("inlineCode",{parentName:"p"},"eventTime")," attribute value and optimises for aggregating ",(0,l.kt)("inlineCode",{parentName:"p"},"volume")," attribute considering last 20 events."))}p.isMDXComponent=!0}}]);