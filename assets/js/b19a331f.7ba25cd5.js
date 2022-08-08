"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[33769],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),u=i,h=c["".concat(d,".").concat(u)]||c[u]||p[u]||r;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},16164:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var a=n(83117),i=n(80102),r=(n(67294),n(3905)),o=["components"],l={sidebar_position:70,title:"TTL Indexes"},d="TTL (time-to-live) Indexes",s={unversionedId:"collections/indexing/ttl-indexes",id:"collections/indexing/ttl-indexes",title:"TTL Indexes",description:"The TTL index type provided by GDN can be used to automatically removing expired documents from a collection.",source:"@site/docs/collections/indexing/ttl-indexes.md",sourceDirName:"collections/indexing",slug:"/collections/indexing/ttl-indexes",permalink:"/docs/collections/indexing/ttl-indexes",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/collections/indexing/ttl-indexes.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{sidebar_position:70,title:"TTL Indexes"},sidebar:"tutorialSidebar",previous:{title:"Persistent Indexes",permalink:"/docs/collections/indexing/persistent-indexes"},next:{title:"Create Index in Background",permalink:"/docs/collections/indexing/create-index-in-background"}},m={},p=[{value:"Removing documents at a fixed period after creation / update",id:"removing-documents-at-a-fixed-period-after-creation--update",level:2},{value:"Removing documents at certain points in time",id:"removing-documents-at-certain-points-in-time",level:2},{value:"Format of date/time values",id:"format-of-datetime-values",level:2},{value:"Preventing documents from being removed",id:"preventing-documents-from-being-removed",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Accessing TTL Indexes",id:"accessing-ttl-indexes",level:2},{value:"Create TTL Index in GDN Console",id:"create-ttl-index-in-gdn-console",level:2}],c={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ttl-time-to-live-indexes"},"TTL (time-to-live) Indexes"),(0,r.kt)("p",null,"The TTL index type provided by GDN can be used to automatically removing expired documents from a collection."),(0,r.kt)("p",null,"The TTL index is set up by setting an ",(0,r.kt)("inlineCode",{parentName:"p"},"expireAfter")," value and by selecting a single document attribute which contains a reference point in time. For each document, that reference point in time can then be specified as a numeric timestamp (Unix timestamp) or a date string in format ",(0,r.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DDTHH:MM:SS")," with an optional timezone offset."),(0,r.kt)("p",null,"All date strings without a timezone offset will be interpreted as UTC dates."),(0,r.kt)("p",null,"Documents will count as expired when wall clock time is beyond the per-document reference point in time value plus the index' ",(0,r.kt)("inlineCode",{parentName:"p"},"expireAfter")," value added to it. "),(0,r.kt)("h2",{id:"removing-documents-at-a-fixed-period-after-creation--update"},"Removing documents at a fixed period after creation / update"),(0,r.kt)("p",null,"One use case supported by TTL indexes is to remove documents at a fixed duration after they have been created or last updated. This requires setting up the index with an attribute that contains the documents' creation or last-updated time."),(0,r.kt)("p",null,'Let\'s assume the index attribute is set to "creationDate", and the ',(0,r.kt)("inlineCode",{parentName:"p"},"expireAfter")," attribute of the index was set to 600 seconds (10 minutes)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cURL"},'curl -X \'POST\' \'https://api-gdn.eng.macrometa.io/_fabric/_system/_api/index/ttl?collection=collectionName\' \\\n -H \'Authorization: bearer <token>\'                                                                       \\\n -d \'{ "fields": [ "type" : "ttl", ."fields": ["creationDate"],  "expireAfter": 600}\'\n')),(0,r.kt)("p",null,"Let's further assume the following document now gets inserted into the collection:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    { "creationDate" : 1550165973 }\n')),(0,r.kt)("p",null,"This document will be indexed with a reference point in time value of ",(0,r.kt)("inlineCode",{parentName:"p"},"1550165973"),", which translates to the human-readable date/time ",(0,r.kt)("inlineCode",{parentName:"p"},"2019-02-14T17:39:33.000Z"),". The document will expire 600 seconds afterwards, which is at timestamp ",(0,r.kt)("inlineCode",{parentName:"p"},"1550166573")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"2019-02-14T17:49:33.000Z")," in the human-readable version). From that point on, the document is a candidate for being removed."),(0,r.kt)("p",null,"The numeric date time values for the index attribute need to be specified ",(0,r.kt)("strong",{parentName:"p"},"in seconds")," since January 1st 1970 (Unix timestamp). To calculate the current timestamp using JavaScript in this format, use: ",(0,r.kt)("inlineCode",{parentName:"p"},"Date.now() / 1000"),". To calculate it from an arbitrary ",(0,r.kt)("inlineCode",{parentName:"p"},"Date")," instance, use: ",(0,r.kt)("inlineCode",{parentName:"p"},"Date.getTime() / 1000"),". In C8QL, you also have to divide the timestamp, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"DATE_NOW() / 1000"),"."),(0,r.kt)("p",null,"Alternatively, the reference points in time can be specified as a date string in format ",(0,r.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DDTHH:MM:SS")," with an optional timezone offset. All date strings without a timezone offset will be interpreted as UTC dates."),(0,r.kt)("p",null,"The above example document using a date string attribute value would be"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    { "creationDate" : "2019-02-14T17:39:33.000Z" }\n')),(0,r.kt)("p",null,"Now any data-modification access to the document could update the value in the document's ",(0,r.kt)("inlineCode",{parentName:"p"},"creationDate")," attribute to the current date/time, which would prolong the existence of the document and keep it from being expired and removed. "),(0,r.kt)("p",null,"GDN will not automatically set a document's reference point in time on initial insertion or on every subsequent modification of the document. Instead, it is the responsibility of client applications to set and update the reference points in time of documents whenever the use case requires it."),(0,r.kt)("h2",{id:"removing-documents-at-certain-points-in-time"},"Removing documents at certain points in time"),(0,r.kt)("p",null,"Another use case is to specify a per-document expiration/removal point in time, and setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"expireAfter")," attribute to a low value (e.g. 0 seconds)."),(0,r.kt)("p",null,'Let\'s assume the index attribute is set to "expireDate", and the ',(0,r.kt)("inlineCode",{parentName:"p"},"expireAfter")," attribute of the index was set to 0 seconds (immediately when wall clock time reaches the value specified in ",(0,r.kt)("inlineCode",{parentName:"p"},"expireDate"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cURL"},'curl -X \'POST\' \'https://api-gdn.eng.macrometa.io/_fabric/_system/_api/index/ttl?collection=collectionName\' \\ \n -H \'Authorization: bearer <token>\'                                                                       \\\n -d \'{ "fields": [ "type" : "ttl", ."fields": ["expireDate"],  "expireAfter": 0}\'\n')),(0,r.kt)("p",null,"When storing the following document in the collection, it will expire at the point in time specified in the document itself:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    { "expireDate" : "2019-03-28T01:06:00Z" }\n')),(0,r.kt)("p",null,"As ",(0,r.kt)("inlineCode",{parentName:"p"},"expireAfter")," was set to 0, the document will count as expired when wall clock time has reached the timeout."),(0,r.kt)("p",null,"It should be intuitive to see that the ",(0,r.kt)("inlineCode",{parentName:"p"},"expireDate")," can be different per document. This allows mixing of documents with different expiration periods by calculating their expiration dates differently in the client application."),(0,r.kt)("h2",{id:"format-of-datetime-values"},"Format of date/time values"),(0,r.kt)("p",null,"The expiration date time values can be specified either as a numeric timestamp, containing the number of milliseconds since January 1st 1970 (rounded down to the nearest second), or as a date/time string in ISO 8601 format ",(0,r.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DDTHH:MM:SS")," with an optional timezone offset. The timezone offset can be specified as either ",(0,r.kt)("inlineCode",{parentName:"p"},"Z")," (Zulu/UTC time) or as a deviation from UTC time in hours and minutes (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"+HH:MM")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"-HH:MM"),")."),(0,r.kt)("p",null,"Valid example date string values are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Date/time string"),(0,r.kt)("th",{parentName:"tr",align:null},"Local Date"),(0,r.kt)("th",{parentName:"tr",align:null},"Local Time"),(0,r.kt)("th",{parentName:"tr",align:null},"Timezone Offset"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"2019-05-27"')),(0,r.kt)("td",{parentName:"tr",align:null},"May 27th 2019"),(0,r.kt)("td",{parentName:"tr",align:null},"00:00:00"),(0,r.kt)("td",{parentName:"tr",align:null},"+00:00 (UTC time)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"2019-05-27T21:20:00"')),(0,r.kt)("td",{parentName:"tr",align:null},"May 27th 2019"),(0,r.kt)("td",{parentName:"tr",align:null},"21:20:00"),(0,r.kt)("td",{parentName:"tr",align:null},"+00:00 (UTC time)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"2019-05-27T21:20:00Z"')),(0,r.kt)("td",{parentName:"tr",align:null},"May 27th 2019"),(0,r.kt)("td",{parentName:"tr",align:null},"21:20:00"),(0,r.kt)("td",{parentName:"tr",align:null},"+00:00 (UTC time)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"2019-05-27T21:20:00.123Z"')),(0,r.kt)("td",{parentName:"tr",align:null},"May 27th 2019"),(0,r.kt)("td",{parentName:"tr",align:null},"21:20:00.123"),(0,r.kt)("td",{parentName:"tr",align:null},"+00:00 (UTC time)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"2019-05-27T21:20:00.123+01:30"')),(0,r.kt)("td",{parentName:"tr",align:null},"May 27th 2019"),(0,r.kt)("td",{parentName:"tr",align:null},"21:20:00.123"),(0,r.kt)("td",{parentName:"tr",align:null},"+01:30 offset from UTC time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"2019-05-27T21:20:00.123-02:00"')),(0,r.kt)("td",{parentName:"tr",align:null},"May 27th 2019"),(0,r.kt)("td",{parentName:"tr",align:null},"21:20:00.123"),(0,r.kt)("td",{parentName:"tr",align:null},"-02:00 offset from UTC time")))),(0,r.kt)("p",null,"Using an invalid date string value in a document's TTL index attribute will prevent the document from being inserted into the TTL index, so it will neither be expired nor removed automatically. No error is raised however."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Date string values can be programmatically validated using the AQL function ",(0,r.kt)("inlineCode",{parentName:"p"},"IS_DATESTRING"),".")),(0,r.kt)("h2",{id:"preventing-documents-from-being-removed"},"Preventing documents from being removed"),(0,r.kt)("p",null,"In case the index attribute does not contain a numeric value nor a proper date string, the document will not be stored in the TTL index and thus will not become a candidate for expiration and removal. Providing either a non-numeric value or even no value for the index attribute is a supported way to keep documents from being expired and removed."),(0,r.kt)("h2",{id:"limitations"},"Limitations"),(0,r.kt)("p",null,"TTL indexes are designed exactly for the purpose of removing expired documents from collections. It is ",(0,r.kt)("strong",{parentName:"p"},"not recommended")," to rely on TTL indexes for user-land C8QL queries. This is because TTL indexes may store a transformed, always numerical version of the index attribute value internally even if it was originally passed in as a date string. As a result, you may see different values for the attribute, depending on whether it gets taken from the index or the document. TTL indexes will likely not be usable for filtering and sort operations in user-land C8QL queries."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"There can at most be one TTL index per collection.")),(0,r.kt)("p",null,"The actual removal of expired documents will not necessarily happen immediately when they have reached their expiration time. "),(0,r.kt)("p",null,"Expired documents will eventually be removed by a background thread that is periodically going through all TTL indexes and removing the expired documents."),(0,r.kt)("p",null,"There is no guarantee when exactly the removal of expired documents will be carried out, so queries may still find and return documents that have already expired. These will eventually be removed when the background thread kicks in and has spare capacity to remove the expired documents. It is guaranteed however that only documents which are past their expiration time will actually be removed."),(0,r.kt)("p",null,"The frequency for invoking the background removal thread can be configured using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--ttl.frequency")," startup option. The frequency is specified in milliseconds."),(0,r.kt)("p",null,'In order to avoid "random" load spikes by the background thread suddenly kicking in and removing a lot of documents at once, the number of to-be-removed documents per thread invocation can be capped.'),(0,r.kt)("p",null,"The total maximum number of documents to be removed per thread invocation is controlled by the startup option ",(0,r.kt)("inlineCode",{parentName:"p"},"--ttl.max-total-removes"),". The maximum number of documents in a single collection at once can be controlled by the startup option ",(0,r.kt)("inlineCode",{parentName:"p"},"--ttl.max-collection-removes"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"There are limited number of background threads for performing the removal of expired documents of all collections in all databases. If the number of databases and collections with TTL indexes is high and there are many documents to remove from these, the background thread may at least temporarily lag behind with its removal operations. It should eventually catch up in case the number of to-be-removed documents per invocation is not higher than the background thread's configured threshold values.")),(0,r.kt)("h2",{id:"accessing-ttl-indexes"},"Accessing TTL Indexes"),(0,r.kt)("p",null,"Ensures that a TTL index exists:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cURL"},'curl -X \'POST\' \'https://api-gdn.eng.macrometa.io/_fabric/_system/_api/index/ttl?collection=collectionName\' \\\n -H \'Authorization: bearer <token>\'                                                                       \\\n -d \'{ "fields": [ "type" : "ttl", ."fields": ["field"],  "expireAfter": 600}\'\n')),(0,r.kt)("p",null,"Creates a TTL index on all documents using ",(0,r.kt)("em",{parentName:"p"},"field")," as attribute path. Exactly one attribute path has to be given. The index will be sparse in all cases."),(0,r.kt)("p",null,"In case that the index was successfully created, an object with the index details, including the index-identifier, is returned."),(0,r.kt)("h2",{id:"create-ttl-index-in-gdn-console"},"Create TTL Index in GDN Console"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://auth.paas.macrometa.io/"},"Log in to your Macrometa account"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"COLLECTIONS"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the collection that you want to create an index for.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Indexes"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In ",(0,r.kt)("strong",{parentName:"p"},"Type"),", select ",(0,r.kt)("strong",{parentName:"p"},"TTL Index"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the following information:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Fields -")," Choose between one or two attribute paths, latitude and/or longitude, from the collection."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Name -")," The name of the index. If left blank, then Macrometa autogenerates the name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Documents expire after (s) -")," A number of seconds to be added to the timestamp attribute value of each document."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Create in Background -")," If true, will create an index in the background rather than lock the collection while the index is created. This allows for basic CRUD operations to occur while the index is created. For more information, refer to ",(0,r.kt)("a",{parentName:"li",href:"/docs/collections/indexing/create-index-in-background"},"Create Index in Background"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Create"),"."))))}u.isMDXComponent=!0}}]);