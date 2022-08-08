"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[11554],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=m(n),d=r,k=c["".concat(l,".").concat(d)]||c[d]||s[d]||i;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},84529:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return s}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],p={sidebar_position:7,title:"Patterns and Trends"},l=void 0,m={unversionedId:"cep/reference/patterns-n-trends",id:"cep/reference/patterns-n-trends",title:"Patterns and Trends",description:"Simple Pattern",source:"@site/docs/cep/reference/patterns-n-trends.md",sourceDirName:"cep/reference",slug:"/cep/reference/patterns-n-trends",permalink:"/docs/cep/reference/patterns-n-trends",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/cep/reference/patterns-n-trends.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Patterns and Trends"},sidebar:"tutorialSidebar",previous:{title:"Data Summarizations (Aggregations)",permalink:"/docs/cep/reference/data-summarization"},next:{title:"Data Pipelines",permalink:"/docs/cep/reference/data-pipelining"}},u={},s=[{value:"Simple Pattern",id:"simple-pattern",level:2},{value:"Input",id:"input",level:3},{value:"Output",id:"output",level:3},{value:"Counting Pattern",id:"counting-pattern",level:2},{value:"Input",id:"input-1",level:3},{value:"Output",id:"output-1",level:3},{value:"Logical Pattern",id:"logical-pattern",level:2},{value:"Input",id:"input-2",level:3},{value:"Output",id:"output-2",level:3},{value:"Non Occurrence Pattern",id:"non-occurrence-pattern",level:2},{value:"Input",id:"input-3",level:3},{value:"Output",id:"output-3",level:3},{value:"Simple Sequence",id:"simple-sequence",level:2},{value:"Input",id:"input-4",level:3},{value:"Output",id:"output-4",level:3},{value:"Sequence with Count",id:"sequence-with-count",level:2},{value:"Input",id:"input-5",level:3},{value:"Output",id:"output-5",level:3},{value:"Logical Sequence",id:"logical-sequence",level:2},{value:"Input",id:"input-6",level:3},{value:"Output",id:"output-6",level:3}],c={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"simple-pattern"},"Simple Pattern"),(0,i.kt)("p",null,"The pattern is a state machine implementation that detects event occurrences from events arrived via one or more event streams over time."),(0,i.kt)("p",null,"This example shows a simple pattern that detects high-temperature event occurrence of a continuous event stream."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"-- Defines `TemperatureStream` having information of room temperature such as `roomNo` and `temp`.\nCREATE STREAM TemperatureStream(roomNo int, temp double);\n\n-- Defines `HighTempAlertStream` which contains the alerts for high temperature.\nCREATE SINK HighTempAlertStream WITH (type = 'log') (roomNo int, initialTemp double, finalTemp double);\n\n\n@info(name='temperature-increase-identifier')\n-- Identify if the temperature of a room increases by 5 degrees within 10 min.\ninsert into HighTempAlertStream\nselect e1.roomNo, e1.temp as initialTemp, e2.temp as finalTemp\nfrom every( e1 = TemperatureStream ) ->\n    e2 = TemperatureStream[ e1.roomNo == roomNo\n        and (e1.temp + 5) <= temp ]\n    within 10 min;\n")),(0,i.kt)("p",null,"This application sends an alert if the temperature of a room increases by 5 degrees within 10 min."),(0,i.kt)("h3",{id:"input"},"Input"),(0,i.kt)("p",null,"Below events are sent to ",(0,i.kt)("inlineCode",{parentName:"p"},"TemperatureStream")," within 10 minutes,"),(0,i.kt)("p",null,"[",(0,i.kt)("inlineCode",{parentName:"p"},"2"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"35"),"]"),(0,i.kt)("p",null,"[",(0,i.kt)("inlineCode",{parentName:"p"},"2"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"37"),"]"),(0,i.kt)("p",null,"[",(0,i.kt)("inlineCode",{parentName:"p"},"2"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"40"),"]"),(0,i.kt)("h3",{id:"output"},"Output"),(0,i.kt)("p",null,"After processing the above input events, the event arriving at ",(0,i.kt)("inlineCode",{parentName:"p"},"HighTempAlertStream")," will be as follows:"),(0,i.kt)("p",null,"[",(0,i.kt)("inlineCode",{parentName:"p"},"2"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"35.0"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"40.0"),"]"),(0,i.kt)("h2",{id:"counting-pattern"},"Counting Pattern"),(0,i.kt)("p",null,"Counting patterns allow to match multiple events that may have been received for the same matching condition. The number of events matched per condition can be limited via condition postfixes."),(0,i.kt)("p",null,"Refer the ",(0,i.kt)("a",{parentName:"p",href:"/docs/cep/reference/query-guide"},"stream query guide")," for more information."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"-- Defines `TemperatureStream` having information on room temperature such as `sensorID`, `roomNo` and `temp`.\nCREATE STREAM TemperatureStream (sensorID long, roomNo int, temp double);\n\n\n-- Defines `RegulatorStream` which contains the events from regulator with attributes `deviceID`, `roomNo`, `tempSet`, and `isOn`.\nCREATE STREAM RegulatorStream (deviceID long, roomNo int, tempSet double, isOn bool);\n\n-- Defines `TemperatureDiffStream` which contains the events related to temperature difference.\nCREATE SINK TemperatureDiffStream WITH (type = 'log') (roomNo int, tempDiff double);\n\n-- Calculates the temperature difference between two regulator events. Here, when at least one TemperatureStream event needs to arrive between two RegulatorStream events.\n-- Finds the temperature difference between the first and last temperature event.\ninsert into TemperatureDiffStream\nselect e1.roomNo, e2[0].temp - e2[last].temp as tempDiff\nfrom every( e1 = RegulatorStream)\n    -> e2 = TemperatureStream[e1.roomNo == roomNo] < 1: >\n    -> e3 = RegulatorStream[e1.roomNo == roomNo];\n")),(0,i.kt)("p",null,"This application calculates the temperature difference between two regulator events. Here, when at least one TemperatureStream event occurs between two RegulatorStream events the pattern is valid and logs can be seen."),(0,i.kt)("h3",{id:"input-1"},"Input"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"First, below event is sent to ",(0,i.kt)("inlineCode",{parentName:"p"},"RegulatorStream"),","),(0,i.kt)("p",{parentName:"li"},"  ","[",(0,i.kt)("inlineCode",{parentName:"p"},"21"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"2"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"25"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Below events are sent to ",(0,i.kt)("inlineCode",{parentName:"p"},"TemperatureStream"),","),(0,i.kt)("p",{parentName:"li"},"  ","[",(0,i.kt)("inlineCode",{parentName:"p"},"21"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"2"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"29"),"]"),(0,i.kt)("p",{parentName:"li"},"  ","[",(0,i.kt)("inlineCode",{parentName:"p"},"21"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"2"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"26"),"]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Finally, below event is sent again to ",(0,i.kt)("inlineCode",{parentName:"p"},"RegulatorStream"),","),(0,i.kt)("p",{parentName:"li"},"  ","[",(0,i.kt)("inlineCode",{parentName:"p"},"21"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"2"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"30"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"]"))),(0,i.kt)("h3",{id:"output-1"},"Output"),(0,i.kt)("p",null,"After processing the above input events, the event arriving at ",(0,i.kt)("inlineCode",{parentName:"p"},"TemperatureDiffStream")," will be as follows:"),(0,i.kt)("p",null,"[",(0,i.kt)("inlineCode",{parentName:"p"},"2"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"3.0"),"]"),(0,i.kt)("h2",{id:"logical-pattern"},"Logical Pattern"),(0,i.kt)("p",null,"Logical patterns match events that arrive in temporal order and correlate them with logical relationships such as ",(0,i.kt)("inlineCode",{parentName:"p"},"and"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"or")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"not"),"."),(0,i.kt)("p",null,"Refer the ",(0,i.kt)("a",{parentName:"p",href:"/docs/cep/reference/query-guide"},"stream query guide")," for more information."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"-- Defines `RegulatorStateChangeStream` having information of regulator state change such as `deviceID`, `roomNo`, `tempSet` and `action`.\nCREATE STREAM RegulatorStateChangeStream(deviceID long, roomNo int, tempSet double, action string);\n\n-- Defines `RoomKeyStream` which contains the events related to room key usage.\nCREATE STREAM RoomKeyStream(deviceID long, roomNo int, action string);\n\n-- Defines `RegulatorActionStream` which contains the events related to regulator state changes.\nCREATE SINK RegulatorActionStream WITH (type='log') (roomNo int, action string);\n\n\n-- Sends a stop action on RegulatorActionStream stream, if a removed action is triggered in the RoomKeyStream stream before the regulator state changing to off which is notified RegulatorStateChangeStream stream\ninsert into RegulatorActionStream\nselect e1.roomNo,\n-- Checks whether pattern triggered due to removal of room key.\n    ifThenElse( e2 is null, 'none', 'stop' ) as action\nfrom every e1=RegulatorStateChangeStream[ action == 'on' ]\n     -> e2=RoomKeyStream\n            [ e1.roomNo == roomNo and action == 'removed' ]\n        or e3=RegulatorStateChangeStream\n            [ e1.roomNo == roomNo and action == 'off']\nhaving action != 'none'            ;\n")),(0,i.kt)("p",null,"This application sends a ",(0,i.kt)("inlineCode",{parentName:"p"},"stop")," action on the regulator if a ",(0,i.kt)("inlineCode",{parentName:"p"},"removed")," action is triggered in the RoomKeyStream stream."),(0,i.kt)("h3",{id:"input-2"},"Input"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"First, below event is sent to ",(0,i.kt)("inlineCode",{parentName:"p"},"RegulatorStateChangeStream"),","),(0,i.kt)("p",{parentName:"li"},"  ","[",(0,i.kt)("inlineCode",{parentName:"p"},"10"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"5"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"30"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"on"),"]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Then, send below events are sent to ",(0,i.kt)("inlineCode",{parentName:"p"},"RoomKeyStream"),","),(0,i.kt)("p",{parentName:"li"},"  ","[",(0,i.kt)("inlineCode",{parentName:"p"},"10"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"5"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"removed"),"]"))),(0,i.kt)("h3",{id:"output-2"},"Output"),(0,i.kt)("p",null,"After processing the above input events, the event arriving at ",(0,i.kt)("inlineCode",{parentName:"p"},"RegulatorActionStream")," will be as follows:"),(0,i.kt)("p",null,"[",(0,i.kt)("inlineCode",{parentName:"p"},"5"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"stop"),"]"),(0,i.kt)("h2",{id:"non-occurrence-pattern"},"Non Occurrence Pattern"),(0,i.kt)("p",null,"Non occurrence patterns identifies the absence of events when detecting a pattern."),(0,i.kt)("p",null,"Stream Processor detects non-occurrence of events using the not keyword, and its effective non-occurrence checking period is bounded either by fulfillment of a condition associated by and or via an expiry time using ",(0,i.kt)("inlineCode",{parentName:"p"},"<time period>"),"."),(0,i.kt)("p",null,"Refer the ",(0,i.kt)("a",{parentName:"p",href:"/docs/cep/reference/query-guide"},"stream query guide")," for more information."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"-- Defines `RegulatorStateChangeStream` having information of regulator state change such as `deviceID`, `roomNo`, `tempSet` and `action`.\nCREATE STREAM RegulatorStateChangeStream(deviceID long, roomNo int, tempSet double, action string);\n\n-- Defines `TemperatureStream` having information of room temperature such as `roomNo` and `temp`.\nCREATE STREAM TemperatureStream (roomNo int, temp double);\n\n-- Defines `RoomTemperatureAlertStream` which contains the temperature alerts.\nCREATE SINK RoomTemperatureAlertStream WITH (type='log') (roomNo int);\n\n\n-- Alerts if no temperature event having a temperature less than what is set in regulator arrives within 5 minutes after switching on the regulator.\ninsert into RoomTemperatureAlertStream\nselect e1.roomNo as roomNo\nfrom e1=RegulatorStateChangeStream[action == 'on']\n     -> not TemperatureStream[e1.roomNo == roomNo and\n        temp <= e1.tempSet] for 30 sec;\n")),(0,i.kt)("p",null,"This application sends a notification alert if the room temperature is not reduced to the expected level after the regulator is started."),(0,i.kt)("h3",{id:"input-3"},"Input"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"First, below event is sent to ",(0,i.kt)("inlineCode",{parentName:"p"},"RegulatorStateChangeStream"),","),(0,i.kt)("p",{parentName:"li"},"  ","[",(0,i.kt)("inlineCode",{parentName:"p"},"10"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"5"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"30"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"on"),"]"))),(0,i.kt)("h3",{id:"output-3"},"Output"),(0,i.kt)("p",null,"After processing the above input event, there will be an alert event arriving at ",(0,i.kt)("inlineCode",{parentName:"p"},"RoomTemperatureAlertStream")," after the 30 seconds (from the first event):"),(0,i.kt)("p",null,"[",(0,i.kt)("inlineCode",{parentName:"p"},"5"),"]"),(0,i.kt)("h2",{id:"simple-sequence"},"Simple Sequence"),(0,i.kt)("p",null,"Sequence is a state machine implementation that detects consecutive event occurrences from events arrived via one or more event streams over time. Here all matching events need to arrive consecutively, and there should not be any non-matching events in between the matching sequence of events."),(0,i.kt)("p",null,"Refer the ",(0,i.kt)("a",{parentName:"p",href:"/docs/cep/reference/query-guide"},"stream query guide")," for more information."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"-- Defines `StockRateStream` having information on stock rate such as `symbol`, `price` and `volume`.\nCREATE STREAM StockRateStream (symbol string, price float, volume int);\n\n-- Defines `PeakStockRateStream` which contains the peak stock rate.\nCREATE SINK PeakStockRateStream WITH (type='log') (symbol string, rateAtPeak float);\n\n\n-- Partition the `StockRateStream` events by `symbol`\npartition with (symbol of StockRateStream)\nbegin\n\n-- Identifies the peak stock price (top rate of the stock price trend)\n    insert into PeakStockRateStream\n    select e1.symbol, e2.price as rateAtPeak\n    from every e1=StockRateStream,\n        e2=StockRateStream[e1.price < price],\n        e3=StockRateStream[e2.price > price]\n        within 10 min;\nend;\n")),(0,i.kt)("p",null,"This application can be used to detect trends from a stock trades stream; in the above example, peak stock rate identified."),(0,i.kt)("h3",{id:"input-4"},"Input"),(0,i.kt)("p",null,"Below events are sent to ",(0,i.kt)("inlineCode",{parentName:"p"},"StockRateStream")," within 10 minutes,"),(0,i.kt)("p",null,"[",(0,i.kt)("inlineCode",{parentName:"p"},"mint-leaves"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"35"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"20"),"]"),(0,i.kt)("p",null,"[",(0,i.kt)("inlineCode",{parentName:"p"},"mint-leaves"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"40"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"15"),"]"),(0,i.kt)("p",null,"[",(0,i.kt)("inlineCode",{parentName:"p"},"mint-leaves"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"38"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"20"),"]"),(0,i.kt)("h3",{id:"output-4"},"Output"),(0,i.kt)("p",null,"After processing the above input events, the event arriving at ",(0,i.kt)("inlineCode",{parentName:"p"},"PeakStockRateStream")," will be as follows:"),(0,i.kt)("p",null,"[",(0,i.kt)("inlineCode",{parentName:"p"},"mint-leaves"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"40"),"]"),(0,i.kt)("h2",{id:"sequence-with-count"},"Sequence with Count"),(0,i.kt)("p",null,"Sequence query does expect the matching events to occur immediately after each other, and it can successfully correlate the events who do not have other events in between. Here, sequence can count event occurrences."),(0,i.kt)("p",null,"Refer the ",(0,i.kt)("a",{parentName:"p",href:"/docs/cep/reference/query-guide"},"stream query guide")," for more information."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"-- Defines `TemperatureStream` having information on room temperatures such as `roomNo` and `temp`.\nCREATE STREAM TemperatureStream(roomNo int, temp double);\n\n-- Defines `PeakTemperatureStream` which contains events related to peak temperature trends.\nCREATE SINK PeakTemperatureStream WITH (type='log') (roomNo int, initialTemp double, peakTemp double, firstDropTemp double);\n\n-- Partition the `TemperatureStream` events by `roomNo`\npartition with (roomNo of TemperatureStream)\nbegin\n\n    @info(name = 'temperature-trend-analyzer')\n    insert into PeakTemperatureStream \n-- Projects the lowest, highest and the first drop in the temperature trend\n    select e1.roomNo, e1.temp as initialTemp,\n        e2[last].temp as peakTemp, e3.temp as firstDropTemp\n\n-- Identifies the trend of the temperature in a room\n    from every e1=TemperatureStream,\n         e2=TemperatureStream[ifThenElse(e2[last].temp is null,\n                e1.temp <= temp, e2[last].temp <= temp)]+,\n         e3=TemperatureStream[e2[last].temp > temp];\n\nend;\n")),(0,i.kt)("p",null,"This application identifies temperature peaks by monitoring continuous increases in temp attribute and alerts upon the first drop."),(0,i.kt)("h3",{id:"input-5"},"Input"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Below events are sent to ",(0,i.kt)("inlineCode",{parentName:"p"},"TemperatureStream"),","),(0,i.kt)("p",{parentName:"li"},"  ","[",(0,i.kt)("inlineCode",{parentName:"p"},"20"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"29"),"][`10`, `28`]","\n","[",(0,i.kt)("inlineCode",{parentName:"p"},"20"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"30"),"][`20`, `32`]","\n","[",(0,i.kt)("inlineCode",{parentName:"p"},"20"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"35"),"][`20`, `33`]"))),(0,i.kt)("h3",{id:"output-5"},"Output"),(0,i.kt)("p",null,"After processing the above input events, the event arriving at ",(0,i.kt)("inlineCode",{parentName:"p"},"PeakTemperatureStream")," will be as follows:"),(0,i.kt)("p",null,"[",(0,i.kt)("inlineCode",{parentName:"p"},"20"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"29.0"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"35.0"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"33.0"),"]"),(0,i.kt)("h2",{id:"logical-sequence"},"Logical Sequence"),(0,i.kt)("p",null,"The sequence can repetitively match event ",(0,i.kt)("inlineCode",{parentName:"p"},"sequences")," and use logical event ordering (using ",(0,i.kt)("inlineCode",{parentName:"p"},"and"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"or"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"not"),")."),(0,i.kt)("p",null,"Refer the ",(0,i.kt)("a",{parentName:"p",href:"/docs/cep/reference/query-guide"},"stream query guide")," for more information."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"-- Defines `TempSensorStream` having information of temperature sensor device.\nCREATE STREAM TempSensorStream(deviceID long, isActive bool);\n\n\n-- Defines `HumidSensorStream` having information of humidity sensor device.\nCREATE STREAM HumidSensorStream(deviceID long, isActive bool);\n\n\n-- Defines `RegulatorStream` which contains the events from regulator with attributes `deviceID` and `isOn`.\nCREATE STREAM RegulatorStream(deviceID long, isOn bool);\n\n\nCREATE SINK StateNotificationStream WITH (type='log') (deviceID long, tempSensorActive bool, humidSensorActive bool);\n\n\n-- Identifies a regulator activation event immediately followed by both temperature sensor and humidity sensor activation events in either order.\ninsert into StateNotificationStream\nselect e1.deviceID, e2.isActive as tempSensorActive,\n    e3.isActive as humidSensorActive\nfrom every e1=RegulatorStream[isOn == true],\n    e2=TempSensorStream and e3=HumidSensorStream;\n")),(0,i.kt)("p",null,"This application can be used identify a regulator activation event immediately followed by both temperature sensor and humidity sensor activation events in either order."),(0,i.kt)("h3",{id:"input-6"},"Input"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"First, below event is sent to ",(0,i.kt)("inlineCode",{parentName:"p"},"RegulatorStream"),","),(0,i.kt)("p",{parentName:"li"},"  ","[",(0,i.kt)("inlineCode",{parentName:"p"},"2134"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Then, below event is sent to ",(0,i.kt)("inlineCode",{parentName:"p"},"HumidSensorStream"),","),(0,i.kt)("p",{parentName:"li"},"  ","[",(0,i.kt)("inlineCode",{parentName:"p"},"124"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Then, below event is sent to ",(0,i.kt)("inlineCode",{parentName:"p"},"TempSensorStream"),","),(0,i.kt)("p",{parentName:"li"},"  ","[",(0,i.kt)("inlineCode",{parentName:"p"},"242"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"]"))),(0,i.kt)("h3",{id:"output-6"},"Output"),(0,i.kt)("p",null,"After processing the above input events, the event arriving at ",(0,i.kt)("inlineCode",{parentName:"p"},"StateNotificationStream")," will be as follows:"),(0,i.kt)("p",null,"[",(0,i.kt)("inlineCode",{parentName:"p"},"2134"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"]"))}d.isMDXComponent=!0}}]);