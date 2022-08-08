"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3498],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(a),h=r,c=d["".concat(s,".").concat(h)]||d[h]||m[h]||i;return a?n.createElement(c,l(l({ref:t},u),{},{components:a})):n.createElement(c,l({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},29475:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),l=["components"],o={title:"prometheus (Sink)"},s=void 0,p={unversionedId:"cep/reference/functions/sink/prometheus",id:"cep/reference/functions/sink/prometheus",title:"prometheus (Sink)",description:"This sink publishes events processed by Stream App into Prometheus metrics and exposes them to the Prometheus server at the specified URL. The created metrics can be published to Prometheus via server or pushGateway, depending on your preference.  The metric types that are supported by the Prometheus sink are counter, gauge, histogram, and summary. The values and labels of the Prometheus metrics can be updated through the events.",source:"@site/docs/cep/reference/functions/sink/prometheus.md",sourceDirName:"cep/reference/functions/sink",slug:"/cep/reference/functions/sink/prometheus",permalink:"/docs/cep/reference/functions/sink/prometheus",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/cep/reference/functions/sink/prometheus.md",tags:[],version:"current",frontMatter:{title:"prometheus (Sink)"},sidebar:"tutorialSidebar",previous:{title:"nats (Sink)",permalink:"/docs/cep/reference/functions/sink/nats"},next:{title:"rabbitmq (Sink)",permalink:"/docs/cep/reference/functions/sink/rabbitmq"}},u={},m=[{value:"Query Parameters",id:"query-parameters",level:2},{value:"System Parameters",id:"system-parameters",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2}],d={toc:m};function h(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This sink publishes events processed by Stream App into Prometheus metrics and exposes them to the Prometheus server at the specified URL. The created metrics can be published to Prometheus via ",(0,i.kt)("inlineCode",{parentName:"p"},"server")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"pushGateway"),", depending on your preference.  The metric types that are supported by the Prometheus sink are ",(0,i.kt)("inlineCode",{parentName:"p"},"counter"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"gauge"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"histogram"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"summary"),". The values and labels of the Prometheus metrics can be updated through the events."),(0,i.kt)("p",null,"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'CREATE SINK <NAME> WITH (type="prometheus", map.type="<STRING>", job="<STRING>", publish.mode="<STRING>", push.url="<STRING>", server.url="<STRING>", metric.type="<STRING>", metric.help="<STRING>", metric.name="<STRING>", buckets="<STRING>", quantiles="<STRING>", quantile.error="<DOUBLE>", value.attribute="<STRING>", push.operation="<STRING>", grouping.key="<STRING>")\n')),(0,i.kt)("h2",{id:"query-parameters"},"Query Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Possible Data Types"),(0,i.kt)("th",{parentName:"tr",align:null},"Optional"),(0,i.kt)("th",{parentName:"tr",align:null},"Dynamic"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"job"),(0,i.kt)("td",{parentName:"tr",align:null},"This parameter specifies the job name of the metric. This must be the same job name that is defined in the Prometheus configuration file."),(0,i.kt)("td",{parentName:"tr",align:null},"stream processor Job"),(0,i.kt)("td",{parentName:"tr",align:null},"STRING"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"publish.mode"),(0,i.kt)("td",{parentName:"tr",align:null},"The mode in which the metrics need to be exposed to the Prometheus server.The possible publishing modes are ",(0,i.kt)("inlineCode",{parentName:"td"},"server")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"pushgateway"),".The server mode exposes the metrics through an HTTP server at the specified URL, and the ",(0,i.kt)("inlineCode",{parentName:"td"},"pushGateway")," mode pushes the metrics to the pushGateway that needs to be running at the specified URL."),(0,i.kt)("td",{parentName:"tr",align:null},"server"),(0,i.kt)("td",{parentName:"tr",align:null},"STRING"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"push.url"),(0,i.kt)("td",{parentName:"tr",align:null},"This parameter specifies the target URL of the Prometheus pushGateway. This is the URL at which the pushGateway must be listening. This URL needs to be defined in the Prometheus configuration file as a target before it can be used here."),(0,i.kt)("td",{parentName:"tr",align:null},"http://localhost:9091"),(0,i.kt)("td",{parentName:"tr",align:null},"STRING"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"server.url"),(0,i.kt)("td",{parentName:"tr",align:null},"This parameter specifies the URL where the HTTP server is initiated to expose metrics in the ",(0,i.kt)("inlineCode",{parentName:"td"},"server")," publish mode. This URL needs to be defined in the Prometheus configuration file as a target before it can be used here."),(0,i.kt)("td",{parentName:"tr",align:null},"http://localhost:9080"),(0,i.kt)("td",{parentName:"tr",align:null},"STRING"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"metric.type"),(0,i.kt)("td",{parentName:"tr",align:null},"The type of Prometheus metric that needs to be created at the sink.  The supported metric types are ",(0,i.kt)("inlineCode",{parentName:"td"},"counter"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"gauge"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"histogram")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"summary"),"."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"STRING"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"metric.help"),(0,i.kt)("td",{parentName:"tr",align:null},"A brief description of the metric and its purpose."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"STRING"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"metric.name"),(0,i.kt)("td",{parentName:"tr",align:null},"This parameter allows you to assign a preferred name for the metric. The metric name must match the regex format, i.e., ","[a-zA-Z:][a-zA-Z0-9:]","*."),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"STRING"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"buckets"),(0,i.kt)("td",{parentName:"tr",align:null},"The bucket values preferred by the user for histogram metrics. The bucket values must be in the ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),' format with each bucket value separated by a comma as shown in the example below. "2,4,6,8"'),(0,i.kt)("td",{parentName:"tr",align:null},"null"),(0,i.kt)("td",{parentName:"tr",align:null},"STRING"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"quantiles"),(0,i.kt)("td",{parentName:"tr",align:null},"This parameter allows you to specify quantile values for summary metrics as preferred. The quantile values must be in the ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),' format with each quantile value separated by a comma as shown in the example below. "0.5,0.75,0.95"'),(0,i.kt)("td",{parentName:"tr",align:null},"null"),(0,i.kt)("td",{parentName:"tr",align:null},"STRING"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"quantile.error"),(0,i.kt)("td",{parentName:"tr",align:null},"The error tolerance value for calculating quantiles in summary metrics. This must be a positive value, but less than 1."),(0,i.kt)("td",{parentName:"tr",align:null},"0.001"),(0,i.kt)("td",{parentName:"tr",align:null},"DOUBLE"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"value.attribute"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the attribute in the stream definition that specifies the metric value. The defined ",(0,i.kt)("inlineCode",{parentName:"td"},"value")," attribute must be included in the stream definition. The system increases the metric value for the counter and gauge metric types by the value of the ",(0,i.kt)("inlineCode",{parentName:"td"},"value")," attribute. The system observes the value of the ",(0,i.kt)("inlineCode",{parentName:"td"},"value")," attribute for the calculations of ",(0,i.kt)("inlineCode",{parentName:"td"},"summary")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"histogram")," metric types."),(0,i.kt)("td",{parentName:"tr",align:null},"value"),(0,i.kt)("td",{parentName:"tr",align:null},"STRING"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"push.operation"),(0,i.kt)("td",{parentName:"tr",align:null},"This parameter defines the mode for pushing metrics to the pushGateway. The available push operations are ",(0,i.kt)("inlineCode",{parentName:"td"},"push")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"pushadd"),". The operations differ according to the existing metrics in pushGateway where ",(0,i.kt)("inlineCode",{parentName:"td"},"push")," operation replaces the existing metrics, and ",(0,i.kt)("inlineCode",{parentName:"td"},"pushadd")," operation only updates the newly created metrics."),(0,i.kt)("td",{parentName:"tr",align:null},"pushadd"),(0,i.kt)("td",{parentName:"tr",align:null},"STRING"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"grouping.key"),(0,i.kt)("td",{parentName:"tr",align:null},'This parameter specifies the grouping key of created metrics in key-value pairs. The grouping key is used only in pushGateway mode in order to distinguish the metrics from already existing metrics. The expected format of the grouping key is as follows:  "',(0,i.kt)("inlineCode",{parentName:"td"},"key1:value1"),",",(0,i.kt)("inlineCode",{parentName:"td"},"key2:value2"),'"'),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"STRING"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"No")))),(0,i.kt)("h2",{id:"system-parameters"},"System Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Possible Parameters"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"jobName"),(0,i.kt)("td",{parentName:"tr",align:null},"This property specifies the default job name for the metric. This job name must be the same as the job name defined in the Prometheus configuration file."),(0,i.kt)("td",{parentName:"tr",align:null},"stream processor Job"),(0,i.kt)("td",{parentName:"tr",align:null},"Any string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"publishMode"),(0,i.kt)("td",{parentName:"tr",align:null},"The default publish mode for the Prometheus sink for exposing metrics to the Prometheus server. The mode can be either ",(0,i.kt)("inlineCode",{parentName:"td"},"server")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"pushgateway"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"server"),(0,i.kt)("td",{parentName:"tr",align:null},"server or pushgateway")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"serverURL"),(0,i.kt)("td",{parentName:"tr",align:null},"This property configures the URL where the HTTP server is initiated to expose metrics. This URL needs to be defined in the Prometheus configuration file as a target to be identified by Prometheus before it can be used here. By default, the HTTP server is initiated at ",(0,i.kt)("inlineCode",{parentName:"td"},"http://localhost:9080"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"http://localhost:9080"),(0,i.kt)("td",{parentName:"tr",align:null},"Any valid URL")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"pushURL"),(0,i.kt)("td",{parentName:"tr",align:null},"This property configures the target URL of the Prometheus pushGateway (where the pushGateway needs to listen). This URL needs to be defined in the Prometheus configuration file as a target to be identified by Prometheus before it can be used here."),(0,i.kt)("td",{parentName:"tr",align:null},"http://localhost:9091"),(0,i.kt)("td",{parentName:"tr",align:null},"Any valid URL")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"groupingKey"),(0,i.kt)("td",{parentName:"tr",align:null},'This property configures the grouping key of created metrics in key-value pairs. Grouping key is used only in pushGateway mode in order to distinguish these metrics from already existing metrics under the same job. The expected format of the grouping key is as follows: "',(0,i.kt)("inlineCode",{parentName:"td"},"key1:value1"),",",(0,i.kt)("inlineCode",{parentName:"td"},"key2:value2"),'" .'),(0,i.kt)("td",{parentName:"tr",align:null},"null"),(0,i.kt)("td",{parentName:"tr",align:null},"Any key value pairs in the supported format")))),(0,i.kt)("h2",{id:"example-1"},"Example 1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"CREATE SINK FooCountStream WITH (type='prometheus',job='fooOrderCount', server.url ='http://localhost:9080', publish.mode='server', metric.type='counter', metric.help= 'Number of foo orders', map.type='keyvalue') (Name String, quantity int, value int);\n")),(0,i.kt)("p",null,"In the above example, the Prometheus-sink creates a counter metric with the stream name and defined attributes as labels. The metric is exposed through an HTTP server at the target URL."),(0,i.kt)("h2",{id:"example-2"},"Example 2"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"CREATE SINK InventoryLevelStream WITH (type='prometheus',job='inventoryLevel', push.url='http://localhost:9080', publish.mode='pushGateway', metric.type='gauge', metric.help= 'Current level of inventory', map.type='keyvalue') (Name String, value int);\n")),(0,i.kt)("p",null,"In the above example, the Prometheus-sink creates a gauge metric with the stream name and defined attributes as labels.The metric is pushed to the Prometheus pushGateway at the target URL."))}h.isMDXComponent=!0}}]);