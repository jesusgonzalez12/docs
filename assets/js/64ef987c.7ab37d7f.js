"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1148],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,y=d["".concat(i,".").concat(m)]||d[m]||c[m]||l;return t?a.createElement(y,s(s({ref:n},p),{},{components:t})):a.createElement(y,s({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,s=new Array(l);s[0]=d;var r={};for(var i in n)hasOwnProperty.call(n,i)&&(r[i]=n[i]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var u=2;u<l;u++)s[u]=t[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:function(e,n,t){t.d(n,{Z:function(){return s}});var a=t(67294),o=t(34334),l="tabItem_Ymn6";function s(e){var n=e.children,t=e.hidden,s=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(l,s),hidden:t},n)}},65488:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(83117),o=t(67294),l=t(34334),s=t(72389),r=t(67392),i=t(7094),u=t(12466),p="tabList__CuJ",c="tabItem_LNqP";function d(e){var n,t,s=e.lazy,d=e.block,m=e.defaultValue,y=e.values,v=e.groupId,k=e.className,E=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),_=null!=y?y:E.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),f=(0,r.l)(_,(function(e,n){return e.value===n.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===m?m:null!=(n=null!=m?m:null==(t=E.find((function(e){return e.props.default})))?void 0:t.props.value)?n:E[0].props.value;if(null!==h&&!_.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+_.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,i.U)(),T=g.tabGroupChoices,b=g.setTabGroupChoices,C=(0,o.useState)(h),N=C[0],L=C[1],x=[],O=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var I=T[v];null!=I&&I!==N&&_.some((function(e){return e.value===I}))&&L(I)}var A=function(e){var n=e.currentTarget,t=x.indexOf(n),a=_[t].value;a!==N&&(O(n),L(a),null!=v&&b(v,String(a)))},D=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a,o=x.indexOf(e.currentTarget)+1;t=null!=(a=x[o])?a:x[0];break;case"ArrowLeft":var l,s=x.indexOf(e.currentTarget)-1;t=null!=(l=x[s])?l:x[x.length-1]}null==(n=t)||n.focus()};return o.createElement("div",{className:(0,l.Z)("tabs-container",p)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},k)},_.map((function(e){var n=e.value,t=e.label,s=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:function(e){return x.push(e)},onKeyDown:D,onFocus:A,onClick:A},s,{className:(0,l.Z)("tabs__item",c,null==s?void 0:s.className,{"tabs__item--active":N===n})}),null!=t?t:n)}))),s?(0,o.cloneElement)(E.filter((function(e){return e.props.value===N}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},E.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==N})}))))}function m(e){var n=(0,s.Z)();return o.createElement(d,(0,a.Z)({key:String(n)},e))}},58105:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var a=t(83117),o=t(80102),l=(t(67294),t(3905)),s=t(65488),r=t(85162),i=["components"],u={title:"Using Rest APIs",sidebar_position:50},p=void 0,c={unversionedId:"collections/keyvalue/using-rest-api",id:"collections/keyvalue/using-rest-api",title:"Using Rest APIs",description:"For the following examples, assume these credentials:",source:"@site/docs/collections/keyvalue/using-rest-api.md",sourceDirName:"collections/keyvalue",slug:"/collections/keyvalue/using-rest-api",permalink:"/docs/collections/keyvalue/using-rest-api",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/collections/keyvalue/using-rest-api.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{title:"Using Rest APIs",sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Add Key-Value-Pairs",permalink:"/docs/collections/keyvalue/add-key-value-pairs"},next:{title:"Bulk Update with RestQL",permalink:"/docs/collections/keyvalue/bulk-update-restql"}},d={},m=[{value:"API Browser",id:"api-browser",level:2},{value:"Connect to GDN",id:"connect-to-gdn",level:2},{value:"Create Collection",id:"create-collection",level:2},{value:"Insert KV Pairs",id:"insert-kv-pairs",level:2},{value:"Get Value",id:"get-value",level:2},{value:"Get Count",id:"get-count",level:2},{value:"Update Value",id:"update-value",level:2},{value:"Delete Value",id:"delete-value",level:2},{value:"Get Collections",id:"get-collections",level:2},{value:"Delete Collections",id:"delete-collections",level:2},{value:"Complete example",id:"complete-example",level:2}],y={toc:m};function v(e){var n=e.components,u=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},y,u,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"For the following examples, assume these credentials:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Tenant name: ",(0,l.kt)("a",{parentName:"li",href:"mailto:nemo@nautilus.com"},"nemo@nautilus.com")),(0,l.kt)("li",{parentName:"ul"},"Password: xxxxxx")),(0,l.kt)("h2",{id:"api-browser"},"API Browser"),(0,l.kt)("p",null,"Your best friend when working with REST APIs is the REST API browser available in the ",(0,l.kt)("a",{parentName:"p",href:"https://gdn.paas.macrometa.io"},"GDN")," GUI. From there, you can execute various rest apis and see exactly what the inputs and outputs are."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"GDN API Browser",src:t(25369).Z,width:"2474",height:"1896"})),(0,l.kt)("h2",{id:"connect-to-gdn"},"Connect to GDN"),(0,l.kt)(s.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'import requests\nimport json\n\n# Constants\n\nFEDERATION = "api-gdn.paas.macrometa.io"\nFED_URL = "https://{}".format(FEDERATION)\nEMAIL = "nemo@nautilus.com"\nPASSWORD = "xxxxxx"\nFABRIC = "_system"\nAUTH_TOKEN = "bearer "\n\n# Create HTTPS session\n\nurl = "{}/_open/auth".format(FED_URL)\npayload = {\n    \'email\':EMAIL,\n    \'password\':PASSWORD\n    }\nheaders = {\n    \'content-type\': \'application/json\'\n    }\n\nresponse = requests.post(url, data = json.dumps(payload), headers = headers)\n\nif response.status_code == 200:\n    resp_body = json.loads(response.text)\n    AUTH_TOKEN += resp_body["jwt"]\n    TENANT = resp_body["tenant"]\nelse:\n    raise Exception("Error while getting auth token. Code:{}, Reason:{}".format(response.status_code,response.reason))\n\n\nsession = requests.session()\nsession.headers.update({"content-type": \'application/json\'})\nsession.headers.update({"authorization": AUTH_TOKEN})\n'))),(0,l.kt)(r.Z,{value:"js",label:"Javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'class APIRequest {\n_headers = {\nAccept: "application/json",\n"Content-Type": "application/json",\n};\n\nconstructor(url) {\nthis._url = url;\n}\n\nlogin(email, password) {\nconst endpoint = "/_open/auth";\n\nconst self = this;\n\nreturn new Promise(function (resolve, reject) {\nself\n.req(endpoint, {\nbody: { email, password },\nmethod: "POST",\n})\n.then(({ jwt, ...data }) => {\nself._headers.authorization = bearer ${jwt};\nresolve(data);\n})\n.catch(reject);\n});\n}\n\n_handleResponse(response, resolve, reject) {\nif (response.ok) {\nresolve(response.json());\n} else {\nreject(response);\n}\n}\n\nreq(endpoint, { body, ...options } = {}) {\nconst self = this;\nreturn new Promise(function (resolve, reject) {\nfetch(self._url + endpoint, {\nheaders: self._headers,\nbody: body ? JSON.stringify(body) : undefined,\n...options,\n}).then((response) => self._handleResponse(response, resolve, reject));\n});\n}\n}\nconst EMAIL = "nemo@nautilus.com";\nconst PASSWORD = "xxxxxx";\nconst FEDERATION_URL = "https://api-gdn.paas.macrometa.io";\n\nconst COLLECTION_NAME = "students";\n\nconst run = async function () {\ntry {\nconst connection = new APIRequest(FEDERATION_URL);\n\n/* -------------------- Log in (nemo@nautilus.com/xxxxxxx) -------------------- */\n\nawait connection.login(EMAIL, PASSWORD);\n\nconsole.log("Login Successfully using", EMAIL);\n')))),(0,l.kt)("h2",{id:"create-collection"},"Create Collection"),(0,l.kt)("p",null,"Create a KV collection."),(0,l.kt)(s.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'  # Create a collection\n\n  COLLECTION_NAME = "students"\n  url = FED_URL + "/_api/kv/" + COLLECTION_NAME\n\n  resp = session.post(url, data = json.dumps(payload))\n  resp = resp.json()\n  if \'error\' in resp and resp[\'error\']:\n      print("ERROR: " + resp[\'errorMessage\'])\n  else:\n      print("\\nCollection Created: ", resp["name"])\n'))),(0,l.kt)(r.Z,{value:"js",label:"Javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'/* -------------------------- Create collection ------------------------- */\n  \n  const collection = await connection.req(\n  `/_fabric/_system/_api/kv/${COLLECTION_NAME}`,\n  {\n  method: "POST",\n  }\n  );\n  \n  console.log("COLLECTION CREATED SUCCESSFULLY", collection);\n')))),(0,l.kt)("h2",{id:"insert-kv-pairs"},"Insert KV Pairs"),(0,l.kt)("p",null,"Insert Key Value pairs into collection."),(0,l.kt)(s.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'  # Insert KV pairs into a collection\n  data = [\n    {\n      "_key": "John",\n      "value": "Science",\n      "expireAt": 0\n    },\n    {\n      "_key": "Alice",\n      "value": "Maths",\n      "expireAt": 0\n    },\n    {\n      "_key": "Alex",\n      "value": "Physics",\n      "expireAt": 0\n    },\n    {\n      "_key": "Monika",\n      "value": "Chemistry",\n      "expireAt": 0\n    }\n  ]\n\n  url = FED_URL + "/_api/kv/" + COLLECTION_NAME +"/value"\n  print(url)\n  resp = session.put(url, data = json.dumps(data))\n  print("\\nMultiple Documents Inserted: ", resp.text)\n'))),(0,l.kt)(r.Z,{value:"js",label:"Javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'/* ---------------------------- Insert key-value pairs ---------------------------- */\n  \n  const document = await connection.req(\n  `/_fabric/_system/_api/kv/${COLLECTION_NAME}/value`,\n  {\n  body: [\n  {\n  "_key": "John",\n  "value": "Science",\n  "expireAt": 0\n  },\n  {\n  "_key": "Alice",\n  "value": "Maths",\n  "expireAt": 0\n  },\n  {\n  "_key": "Alex",\n  "value": "Physics",\n  "expireAt": 0\n  },\n  {\n  "_key": "Monika",\n  "value": "Chemistry",\n  "expireAt": 0\n  }\n  ]\n  ,\n  method: "PUT",\n  }\n  );\n  \n  console.log("KV PAIRS INSERTED SUCCESSFULLY", document);\n')))),(0,l.kt)("h2",{id:"get-value"},"Get Value"),(0,l.kt)("p",null,"Get value for a given key."),(0,l.kt)(s.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'  # Get value for a key\n\n  KEY = "Monika"\n  url = FED_URL + "/_api/kv/" + COLLECTION_NAME + "/value/" + KEY\n  resp = session.get(url)\n  print("\\nDocument with specified Key is: ",resp.text)\n'))),(0,l.kt)(r.Z,{value:"js",label:"Javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'/* ----------------------------- Get value for a Key ----------------------------- */\n  let key = "Monika";\n  const readVal = await connection.req(\n  `/_fabric/_system/_api/kv/${COLLECTION_NAME}/value/${key}`\n  );\n  \n  console.log("VALUE FOR SPECIFIED KEY IS", readVal);\n')))),(0,l.kt)("h2",{id:"get-count"},"Get Count"),(0,l.kt)("p",null,"Get size of the kv collection."),(0,l.kt)(s.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'  # Get collection count\n\n  url = FED_URL + "/_api/kv/" + COLLECTION_NAME + "/count"\n  resp = session.get(url)\n  print("\\nNumber of kv pairs in your collection: ",resp.text)\n'))),(0,l.kt)(r.Z,{value:"js",label:"Javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'  /* ---------------------------- Get collection count ---------------------------- */\n  \n  const collCount = await connection.req(\n  `/_fabric/_system/_api/kv/${COLLECTION_NAME}/count`,\n  {\n  method: "GET",\n  }\n  );\n  \n  console.log("COLLECTION COUNT", collCount);\n')))),(0,l.kt)("h2",{id:"update-value"},"Update Value"),(0,l.kt)("p",null,"Update value for a given key in the collection."),(0,l.kt)(s.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'  # Update value for a key\n  data =  {\n      "_key": "Monika",\n      "value": "Biology",\n      "expireAt": 0\n    }\n  url = FED_URL + "/_api/kv/" + COLLECTION_NAME +"/value"\n  resp = session.put(url, data = json.dumps(data))\n  print("\\nDocument Updated: ", resp.text)\n'))),(0,l.kt)(r.Z,{value:"js",label:"Javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'  /* ----------------------------- Update value for a key ----------------------------- */\n  \n  const updateValue = await connection.req(\n  `/_fabric/_system/_api/kv/${COLLECTION_NAME}/value`,\n  {\n  body: [\n  {\n  "_key": "John",\n  "value": "Biology",\n  "expireAt": 0\n  }\n  ]\n  ,\n  method: "PUT",\n  }\n  );\n  \n  console.log("KV PAIR UPDATED SUCCESSFULLY", updateValue);\n')))),(0,l.kt)("h2",{id:"delete-value"},"Delete Value"),(0,l.kt)("p",null,"Delete value for a given key."),(0,l.kt)(s.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'  # Delete value for a Key\n  url = FED_URL + "/_api/kv/" + COLLECTION_NAME +"/value/" + KEY\n  resp = session.delete(url)\n  print("\\nDocument with specified Key Deleted: ", resp.text)\n\n  # Delete value for multiple Keys\n  data = ["Alex", "Alice", "John"]\n  url = FED_URL + "/_api/kv/" + COLLECTION_NAME +"/values"\n  resp = session.delete(url, data = json.dumps(data))\n  print("\\nDocument with specified Key Deleted: ", resp.text)\n'))),(0,l.kt)(r.Z,{value:"js",label:"Javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'  /* --------------------------- Delete value for a key ---------------------------- */\n  \n  const deletedValue = await connection.req(\n  `/_fabric/_system/_api/kv/${COLLECTION_NAME}/value/${key}`,\n  { method: "DELETE" }\n  );\n')))),(0,l.kt)("h2",{id:"get-collections"},"Get Collections"),(0,l.kt)("p",null,"Get collections."),(0,l.kt)(s.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'  # Get collections\n  url = FED_URL + "/_api/kv"\n  resp = session.get(url)\n  print("\\nCollections : ",resp.text)\n'))),(0,l.kt)(r.Z,{value:"js",label:"Javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"")))),(0,l.kt)("h2",{id:"delete-collections"},"Delete Collections"),(0,l.kt)("p",null,"Delete collection."),(0,l.kt)(s.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'  # Delete collection\n\n  url = FED_URL + "/_api/kv/" + COLLECTION_NAME \n  resp = session.delete(url)\n  print("\\nCollection Deleted: ", resp.text)\n'))),(0,l.kt)(r.Z,{value:"js",label:"Javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'  /* --------------------------- Delete collection ---------------------------- */\n  const deletedCollection = await connection.req(\n  `/_fabric/_system/_api/kv/${COLLECTION_NAME}`,\n  { method: "DELETE" }\n  );\n  \n  console.log("COLLECTION DELETED SUCCESSFULLY", deletedCollection);\n  } catch (e) {\n  console.error(e);\n  }\n  };\n')))),(0,l.kt)("h2",{id:"complete-example"},"Complete example"),(0,l.kt)(s.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'  import requests\n  import json\n\n  # Constants\n\n  FEDERATION = "api-gdn.paas.macrometa.io"\n  FED_URL = "https://{}".format(FEDERATION)\n  EMAIL = "nemo@nautilus.com"\n  PASSWORD = "xxxxxx"\n  FABRIC = "_system"\n  AUTH_TOKEN = "bearer "\n  COLLECTION_NAME = "students"\n\n  # Create HTTPS session\n\n  url = "{}/_open/auth".format(FED_URL)\n  payload = {\n      \'email\':EMAIL,\n      \'password\':PASSWORD\n      }\n  headers = {\n      \'content-type\': \'application/json\'\n      }\n\n  response = requests.post(url, data = json.dumps(payload), headers = headers)\n\n  if response.status_code == 200:\n      resp_body = json.loads(response.text)\n      AUTH_TOKEN += resp_body["jwt"]\n      TENANT = resp_body["tenant"]\n  else:\n      raise Exception("Error while getting auth token. Code:{}, Reason:{}".format(response.status_code,response.reason))\n\n\n  session = requests.session()\n  session.headers.update({"content-type": \'application/json\'})\n  session.headers.update({"authorization": AUTH_TOKEN})\n\n  # Get list of all regions\n\n  url = FED_URL + "/_api/datacenter/all"\n  dcl_resp = session.get(url)\n  dcl_list = json.loads(dcl_resp.text)\n  regions = []\n  for dcl in dcl_list:\n      dcl_url = dcl[\'tags\'][\'url\']\n      regions.append(dcl_url)\n  print("\\nList of Regions: ",regions)\n\n  # Create a collection\n\n  url = FED_URL + "/_api/kv/" + COLLECTION_NAME\n\n  resp = session.post(url, data = json.dumps(payload))\n  resp = json.loads(resp.text)\n  if "error" in resp.keys():\n      print("ERROR: " + resp[\'errorMessage\'])\n  else:\n      print("\\nCollection Created: ", resp.text)\n\n  # Insert KV pairs in a Collection\n  data = [\n    {\n      "_key": "John",\n      "value": "Science",\n      "expireAt": 0\n    },\n    {\n      "_key": "Alice",\n      "value": "Maths",\n      "expireAt": 0\n    },\n    {\n      "_key": "Alex",\n      "value": "Physics",\n      "expireAt": 0\n    },\n    {\n      "_key": "Monika",\n      "value": "Chemistry",\n      "expireAt": 0\n    }\n  ]\n\n  url = FED_URL + "/_api/kv/" + COLLECTION_NAME +"/value"\n  print(url)\n  resp = session.put(url, data = json.dumps(data))\n  print("\\nMultiple Documents Inserted: ", resp.text)\n\n  # Get value for a given key\n\n  KEY = "Monika"\n  url = FED_URL + "/_api/kv/" + COLLECTION_NAME + "/value/" + KEY\n  resp = session.get(url)\n  print("\\nDocument with specified Key is: ",resp.text)\n\n  # Get collection count\n\n  url = FED_URL + "/_api/kv/" + COLLECTION_NAME + "/count"\n  resp = session.get(url)\n  print("\\nNumber of kv pairs in your collection: ",resp.text)\n\n  # Update value for a key\n  data =  {\n      "_key": "Monika",\n      "value": "Biology",\n      "expireAt": 0\n    }\n  url = FED_URL + "/_api/kv/" + COLLECTION_NAME +"/value"\n  resp = session.put(url, data = json.dumps(data))\n  print("\\nDocument Updated: ", resp.text)\n\n  # Delete value for a key\n  url = FED_URL + "/_api/kv/" + COLLECTION_NAME +"/value/" + KEY\n  resp = session.delete(url)\n  print("\\nDocument with specified Key Deleted: ", resp.text)\n\n  # Delete value for multiple keys\n  data = ["Alex", "Alice", "John"]\n  url = FED_URL + "/_api/kv/" + COLLECTION_NAME +"/values"\n  resp = session.delete(url, data = json.dumps(data))\n  print("\\nDocument with specified Key Deleted: ", resp.text)\n\n  # Get collections\n  url = FED_URL + "/_api/kv"\n  resp = session.get(url)\n  print("\\nCollections : ",resp.text)\n\n\n  # Delete collection\n\n  url = FED_URL + "/_api/kv/" + COLLECTION_NAME \n  resp = session.delete(url)\n  print("\\nCollection Deleted: ", resp.text)\n'))),(0,l.kt)(r.Z,{value:"js",label:"Javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'class APIRequest {\n  _headers = {\n  Accept: "application/json",\n  "Content-Type": "application/json",\n  };\n  \n  constructor(url) {\n  this._url = url;\n  }\n  \n  login(email, password) {\n  const endpoint = "/_open/auth";\n  \n  const self = this;\n  \n  return new Promise(function (resolve, reject) {\n  self\n  .req(endpoint, {\n  body: { email, password },\n  method: "POST",\n  })\n  .then(({ jwt, ...data }) => {\n  self._headers.authorization = bearer ${jwt};\n  resolve(data);\n  })\n  .catch(reject);\n  });\n  }\n  \n  _handleResponse(response, resolve, reject) {\n  if (response.ok) {\n  resolve(response.json());\n  } else {\n  reject(response);\n  }\n  }\n  \n  req(endpoint, { body, ...options } = {}) {\n  const self = this;\n  return new Promise(function (resolve, reject) {\n  fetch(self._url + endpoint, {\n  headers: self._headers,\n  body: body ? JSON.stringify(body) : undefined,\n  ...options,\n  }).then((response) => self._handleResponse(response, resolve, reject));\n  });\n  }\n  }\n  const EMAIL = "nemo@nautilus.com";\n  const PASSWORD = "xxxxxx";\n  const FEDERATION_URL = "https://api-gdn.paas.macrometa.io";\n  \n  const COLLECTION_NAME = "students";\n  \n  const run = async function () {\n  try {\n  const connection = new APIRequest(FEDERATION_URL);\n  \n  /* -------------------- Log in (nemo@nautilus.com/xxxxxxx) -------------------- */\n  \n  await connection.login(EMAIL, PASSWORD);\n  \n  console.log("Login Successfully using", EMAIL);\n  \n  /* -------------------------- Create collection ------------------------- */\n  \n  const collection = await connection.req(\n  `/_fabric/_system/_api/kv/${COLLECTION_NAME}`,\n  {\n  method: "POST",\n  }\n  );\n  \n  console.log("COLLECTION CREATED SUCCESSFULLY", collection);\n  \n  /* ---------------------------- Insert key-value pairs ---------------------------- */\n  \n  const document = await connection.req(\n  `/_fabric/_system/_api/kv/${COLLECTION_NAME}/value`,\n  {\n  body: [\n  {\n  "_key": "John",\n  "value": "Science",\n  "expireAt": 0\n  },\n  {\n  "_key": "Alice",\n  "value": "Maths",\n  "expireAt": 0\n  },\n  {\n  "_key": "Alex",\n  "value": "Physics",\n  "expireAt": 0\n  },\n  {\n  "_key": "Monika",\n  "value": "Chemistry",\n  "expireAt": 0\n  }\n  ]\n  ,\n  method: "PUT",\n  }\n  );\n  \n  console.log("KV PAIRS INSERTED SUCCESSFULLY", document);\n  \n  /* ----------------------------- Get value for a Key ----------------------------- */\n  let key = "Monika";\n  const readVal = await connection.req(\n  `/_fabric/_system/_api/kv/${COLLECTION_NAME}/value/${key}`\n  );\n  \n  console.log("VALUE FOR SPECIFIED KEY IS", readVal);\n  \n  /* ---------------------------- Get collection count ---------------------------- */\n  \n  const collCount = await connection.req(\n  `/_fabric/_system/_api/kv/${COLLECTION_NAME}/count`,\n  {\n  method: "GET",\n  }\n  );\n  \n  console.log("COLLECTION COUNT", collCount);\n  \n  /* ----------------------------- Update value for a key ----------------------------- */\n  \n  const updateValue = await connection.req(\n  `/_fabric/_system/_api/kv/${COLLECTION_NAME}/value`,\n  {\n  body: [\n  {\n  "_key": "John",\n  "value": "Biology",\n  "expireAt": 0\n  }\n  ]\n  ,\n  method: "PUT",\n  }\n  );\n  \n  console.log("KV PAIR UPDATED SUCCESSFULLY", updateValue);\n  /* --------------------------- Delete value for a key ---------------------------- */\n  \n  const deletedValue = await connection.req(\n  `/_fabric/_system/_api/kv/${COLLECTION_NAME}/value/${key}`,\n  { method: "DELETE" }\n  );\n\n  \n  /* --------------------------- Delete collection ---------------------------- */\n  const deletedCollection = await connection.req(\n  `/_fabric/_system/_api/kv/${COLLECTION_NAME}`,\n  { method: "DELETE" }\n  );\n  \n  console.log("COLLECTION DELETED SUCCESSFULLY", deletedCollection);\n  } catch (e) {\n  console.error(e);\n  }\n  };\n  \n  run();\n')))))}v.isMDXComponent=!0},25369:function(e,n,t){n.Z=t.p+"assets/images/gdn-api-browser-0c8c99ab1aea5bc3346f0788df0606c5.png"}}]);