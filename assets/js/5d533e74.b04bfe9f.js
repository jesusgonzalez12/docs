"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[70525],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(67294),a=n(34334),o="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(83117),a=n(67294),o=n(34334),l=n(72389),i=n(67392),c=n(7094),s=n(12466),u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n,l=e.lazy,d=e.block,m=e.defaultValue,f=e.values,h=e.groupId,b=e.className,y=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.l)(v,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:y[0].props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,c.U)(),w=T.tabGroupChoices,N=T.setTabGroupChoices,O=(0,a.useState)(k),j=O[0],x=O[1],C=[],E=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var D=w[h];null!=D&&D!==j&&v.some((function(e){return e.value===D}))&&x(D)}var P=function(e){var t=e.currentTarget,n=C.indexOf(t),r=v[n].value;r!==j&&(E(t),x(r),null!=h&&N(h,String(r)))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=C.indexOf(e.currentTarget)+1;n=null!=(r=C[a])?r:C[0];break;case"ArrowLeft":var o,l=C.indexOf(e.currentTarget)-1;n=null!=(o=C[l])?o:C[C.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},b)},v.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return C.push(e)},onKeyDown:I,onFocus:P,onClick:P},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":j===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(y.filter((function(e){return e.props.value===j}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function m(e){var t=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},10327:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),l=n(65488),i=n(85162),c=["components"],s={title:"Return Collection Data in Batches"},u=void 0,p={unversionedId:"collections/return-data-in-batches",id:"collections/return-data-in-batches",title:"Return Collection Data in Batches",description:"The Macrometa GDN is a multi-tenant architecture for Free and Metered tier users. There are default limits for both tiers detailed in Tenant Quotas and Limits. This page describes some options to retrieve data from a collection in batches despite the default limit of 1,000 documents per query.",source:"@site/docs/collections/return-data-in-batches.md",sourceDirName:"collections",slug:"/collections/return-data-in-batches",permalink:"/docs/collections/return-data-in-batches",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/collections/return-data-in-batches.md",tags:[],version:"current",frontMatter:{title:"Return Collection Data in Batches"},sidebar:"tutorialSidebar",previous:{title:"Troubleshoot Indexes",permalink:"/docs/collections/indexing/troubleshoot-indexes"},next:{title:"Search",permalink:"/docs/search/search"}},d={},m=[{value:"SDK download",id:"sdk-download",level:2},{value:"Solutions",id:"solutions",level:2}],f={toc:m};function h(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Macrometa GDN is a multi-tenant architecture for Free and Metered tier users. There are default limits for both tiers detailed in ",(0,o.kt)("a",{parentName:"p",href:"/docs/references/quotas"},"Tenant Quotas and Limits"),". This page describes some options to retrieve data from a collection in batches despite the default limit of 1,000 documents per query."),(0,o.kt)("h2",{id:"sdk-download"},"SDK download"),(0,o.kt)(l.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"pyC8 requires Python 3.5+. Python 3.6 or higher is recommended\n\nTo install pyC8, simply run\n\n    $ pip3 install pyC8\n\nor, if you prefer to use conda:\n\n    conda install -c conda-forge pyC8\n\nor pipenv:\n\n    pipenv install --pre pyC8\n\nOnce the installation process is finished, you can begin developing applications in Python.\n"))),(0,o.kt)(i.Z,{value:"js",label:"Javascript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"With Yarn or NPM\n\n    yarn add jsc8\n    (or)\n    npm install jsc8\n\nIf you want to use the SDK outside of the current directory, you can also install it globally using the `--global` flag:\n\n    npm install --global jsc8\n\nFrom source,\n\n    git clone https://github.com/macrometacorp/jsc8.git\n    cd jsC8\n    npm install\n    npm run dist\n")))),(0,o.kt)("h2",{id:"solutions"},"Solutions"),(0,o.kt)("p",null,"The pattern in both of the solutions is similar: Create a connection to the GDN using the C8 SDK of your choice. You will need to have an API key, JWT, or Email/Password to complete authentication."),(0,o.kt)("p",null,"Next, create a cursor to receive the results from your request. You will get the collection document count to determine the necessary number of loops to retrieve all documents. After each loop the offset will increment by the batch size and return the next set of values. Now with a single script, you can retrieve data greater than your per-query limit."),(0,o.kt)(l.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'from c8 import C8Client\nimport math\n\nkey = "[api-key]"\nclient = C8Client(protocol=\'https\', host=\'gdn.paas.macrometa.io\', port=443, apikey=key)\ncollection_name = "[collection-name]]"\nfabric = client._fabric\ndocument_count = fabric.collection(collection_name).count()\niterations = int(math.ceil(document_count / 100)) \n\ndata = [] \n\nfor i in range(iterations): \n    offset = i * 100 \n    query = f"FOR doc IN {collection_name} LIMIT {offset}, 100 RETURN doc"\n    cursor = fabric.c8ql.execute(query, count=True) \n    data.append(cursor.batch()) \n\nflat_data = [item for sublist in data for item in sublist]\n'))),(0,o.kt)(i.Z,{value:"js",label:"Javascript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import jsc8 from "jsc8";\nconst url = "https://gdn.paas.macrometa.io"\nconst fabricName = "_system"\nconst coll = "[collection-name]"\nconst batchSize = 1000;\nconst apiKey = "[apiKey]"\n\nconst client = new jsc8({\n    url,\n    apiKey,\n    fabricName\n});\n\nlet data = [];\n(async function () {\n    try {\n        const { count } = await client.collection(coll).count();\n        const num = Math.ceil(count / batchSize);\n        for (let i = 0; i < num; i++) {\n            let offset = i * batchSize;\n            let cursor = await client.exportDataByCollectionName(coll, {\n                offset: offset,\n                limit: batchSize,\n            });\n            console.log(\n                `Data pulled from source fabric, collection ${coll}, ${i + 1\n                } of ${num}, server code: ${cursor.code}`\n             );\n            data.push.apply(data, cursor.result);\n        }\n        console.log(data);\n    } catch (e) {\n        console.log(e);\n    }\n})();\n')))))}h.isMDXComponent=!0}}]);