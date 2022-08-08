"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[90426],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),s=c(n),d=a,k=s["".concat(p,".").concat(d)]||s[d]||m[d]||l;return n?r.createElement(k,o(o({ref:e},u),{},{components:n})):r.createElement(k,o({ref:e},u))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},28779:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return m}});var r=n(83117),a=n(80102),l=(n(67294),n(3905)),o=["components"],i={title:"jms (Sink)"},p=void 0,c={unversionedId:"cep/reference/functions/sink/jms",id:"cep/reference/functions/sink/jms",title:"jms (Sink)",description:"JMS Sink allows users to subscribe to a JMS broker and publish JMS messages.",source:"@site/docs/cep/reference/functions/sink/jms.md",sourceDirName:"cep/reference/functions/sink",slug:"/cep/reference/functions/sink/jms",permalink:"/docs/cep/reference/functions/sink/jms",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/cep/reference/functions/sink/jms.md",tags:[],version:"current",frontMatter:{title:"jms (Sink)"},sidebar:"tutorialSidebar",previous:{title:"inMemory (Sink)",permalink:"/docs/cep/reference/functions/sink/inMemory"},next:{title:"kafka (Sink)",permalink:"/docs/cep/reference/functions/sink/kafka"}},u={},m=[{value:"Query Parameters",id:"query-parameters",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2}],s={toc:m};function d(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"JMS Sink allows users to subscribe to a JMS broker and publish JMS messages."),(0,l.kt)("p",null,"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'CREATE SINK <NAME> WITH (type="jms", map.type="<STRING>", connection.factory.jndi.name="<STRING>", factory.initial="<STRING>", provider.url="<STRING>", connection.factory.type="<STRING>", connection.username="<STRING>", connection.password="<STRING>", connection.factory.nature="<STRING>")\n')),(0,l.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Possible Data Types"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"),(0,l.kt)("th",{parentName:"tr",align:null},"Dynamic"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"destination"),(0,l.kt)("td",{parentName:"tr",align:null},"Queue/Topic name which JMS Source should subscribe to"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"STRING"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connection.factory.jndi.name"),(0,l.kt)("td",{parentName:"tr",align:null},"JMS Connection Factory JNDI name. This value will be used for the JNDI lookup to find the JMS Connection Factory."),(0,l.kt)("td",{parentName:"tr",align:null},"QueueConnectionFactory"),(0,l.kt)("td",{parentName:"tr",align:null},"STRING"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"factory.initial"),(0,l.kt)("td",{parentName:"tr",align:null},"Naming factory initial value"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"STRING"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"provider.url"),(0,l.kt)("td",{parentName:"tr",align:null},'Java naming provider URL. Property for specifying configuration information for the service provider to use. The value of the property should contain a URL string (e.g. "ldap://somehost:389")'),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"STRING"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connection.factory.type"),(0,l.kt)("td",{parentName:"tr",align:null},"Type of the connection connection factory. This can be either queue or topic."),(0,l.kt)("td",{parentName:"tr",align:null},"queue"),(0,l.kt)("td",{parentName:"tr",align:null},"STRING"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connection.username"),(0,l.kt)("td",{parentName:"tr",align:null},"username for the broker."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"STRING"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connection.password"),(0,l.kt)("td",{parentName:"tr",align:null},"Password for the broker"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"STRING"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connection.factory.nature"),(0,l.kt)("td",{parentName:"tr",align:null},"Connection factory nature for the broker(cached/pooled)."),(0,l.kt)("td",{parentName:"tr",align:null},"default"),(0,l.kt)("td",{parentName:"tr",align:null},"STRING"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("h2",{id:"example-1"},"Example 1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"CREATE SINK inputStream WITH (type='jms', map.type='xml', factory.initial='org.apache.activemq.jndi.ActiveMQInitialContextFactory', provider.url='vm://localhost', destination='DAS_JMS_OUTPUT_TEST', connection.factory.type='topic', connection.factory.jndi.name='TopicConnectionFactory') (name string, age int, country string);\n")),(0,l.kt)("p",null,"This example shows how to publish to an ActiveMQ topic."),(0,l.kt)("h2",{id:"example-2"},"Example 2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"CREATE SINK inputStream WITH (type='jms', map.type='xml', factory.initial='org.apache.activemq.jndi.ActiveMQInitialContextFactory', provider.url='vm://localhost',destination='DAS_JMS_OUTPUT_TEST') (name string, age int, country string);\n")),(0,l.kt)("p",null,"This example shows how to publish to an ActiveMQ queue. Note that we are not providing properties like connection factory type"))}d.isMDXComponent=!0}}]);