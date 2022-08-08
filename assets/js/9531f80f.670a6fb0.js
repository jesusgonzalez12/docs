"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[61292],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,N=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(N,i(i({ref:t},u),{},{components:n})):a.createElement(N,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71014:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],s={sidebar_position:12,title:"REPLACE"},l=void 0,c={unversionedId:"c8ql/operations/replace",id:"c8ql/operations/replace",title:"REPLACE",description:"The REPLACE keyword can be used to completely replace documents in a collection. On a single server, the replace operation is executed transactionally in an all-or-nothing fashion.",source:"@site/docs/c8ql/operations/replace.md",sourceDirName:"c8ql/operations",slug:"/c8ql/operations/replace",permalink:"/docs/c8ql/operations/replace",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/c8ql/operations/replace.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,title:"REPLACE"},sidebar:"tutorialSidebar",previous:{title:"UPDATE",permalink:"/docs/c8ql/operations/update"},next:{title:"INSERT",permalink:"/docs/c8ql/operations/insert"}},u={},p=[{value:"Setting query options",id:"setting-query-options",level:2},{value:"Returning the modified documents",id:"returning-the-modified-documents",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"REPLACE")," keyword can be used to completely replace documents in a collection. On a single server, the replace operation is executed transactionally in an all-or-nothing fashion."),(0,o.kt)("p",null,"A query may execute intermediate transaction commits in case the running transaction (C8QL query) hits the specified size thresholds. In this case, the query's operations carried out so far will be committed and not rolled back in case of a later abort/rollback. "),(0,o.kt)("p",null,"For sharded collections, the entire query and/or replace operation may not be transactional, especially if it involves different shards and/or DB-Servers."),(0,o.kt)("p",null,"Each ",(0,o.kt)("inlineCode",{parentName:"p"},"REPLACE")," operation is restricted to a single collection, and the ",(0,o.kt)("a",{parentName:"p",href:"/docs/c8ql/operations/replace"},"collection name")," must not be dynamic. Only a single ",(0,o.kt)("inlineCode",{parentName:"p"},"REPLACE")," statement per collection is allowed per C8QL query, and it cannot be followed by read or write operations that access the same collection, by traversal operations, or C8QL functions that can read documents. The system attributes ",(0,o.kt)("em",{parentName:"p"},"_id"),", ",(0,o.kt)("em",{parentName:"p"},"_key")," and ",(0,o.kt)("em",{parentName:"p"},"_rev")," cannot be replaced, ",(0,o.kt)("em",{parentName:"p"},"_from")," and ",(0,o.kt)("em",{parentName:"p"},"_to")," can."),(0,o.kt)("p",null,"The two syntaxes for a replace operation are:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"REPLACE document IN collection options\nREPLACE keyExpression WITH document IN collection options\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"collection")," must contain the name of the collection in which the documents should be replaced. ",(0,o.kt)("em",{parentName:"p"},"document")," is the replacement document. When using the first syntax, ",(0,o.kt)("em",{parentName:"p"},"document")," must also contain the ",(0,o.kt)("em",{parentName:"p"},"_key")," attribute to identify the document to be replaced. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"FOR u IN users\n  REPLACE { _key: u._key, name: CONCAT(u.firstName, u.lastName), status: u.status } IN users\n")),(0,o.kt)("p",null,"The following query is invalid because it does not contain a ",(0,o.kt)("em",{parentName:"p"},"_key")," attribute and thus it is not possible to determine the documents to be replaced:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"FOR u IN users\n  REPLACE { name: CONCAT(u.firstName, u.lastName, status: u.status) } IN users\n")),(0,o.kt)("p",null,"When using the second syntax, ",(0,o.kt)("em",{parentName:"p"},"keyExpression")," provides the document identification. This can either be a string (which must then contain the document key) or a document, which must contain a ",(0,o.kt)("em",{parentName:"p"},"_key")," attribute."),(0,o.kt)("p",null,"The following queries are equivalent:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"FOR u IN users\n  REPLACE { _key: u._key, name: CONCAT(u.firstName, u.lastName) } IN users\n\nFOR u IN users\n  REPLACE u._key WITH { name: CONCAT(u.firstName, u.lastName) } IN users\n\nFOR u IN users\n  REPLACE { _key: u._key } WITH { name: CONCAT(u.firstName, u.lastName) } IN users\n\nFOR u IN users\n  REPLACE u WITH { name: CONCAT(u.firstName, u.lastName) } IN users\n")),(0,o.kt)("p",null,"A replace will fully replace an existing document, but it will not modify the values of internal attributes (such as ",(0,o.kt)("em",{parentName:"p"},"_id"),", ",(0,o.kt)("em",{parentName:"p"},"_key"),", ",(0,o.kt)("em",{parentName:"p"},"_from")," and ",(0,o.kt)("em",{parentName:"p"},"_to"),"). Replacing a document will modify a document's revision number with a server-generated value."),(0,o.kt)("p",null,"A replace operation may update arbitrary documents which do not need to be identical to the ones produced by a preceding ",(0,o.kt)("inlineCode",{parentName:"p"},"FOR")," statement:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"FOR i IN 1..1000\n  REPLACE CONCAT('test', i) WITH { foobar: true } IN users\n\nFOR u IN users\n  FILTER u.active == false\n  REPLACE u WITH { status: 'inactive', name: u.name } IN backup\n")),(0,o.kt)("h2",{id:"setting-query-options"},"Setting query options"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"options")," can be used to suppress query errors that may occur when trying to replace non-existing documents or when violating unique key constraints:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"FOR i IN 1..1000\n  REPLACE { _key: CONCAT('test', i) } WITH { foobar: true } IN users OPTIONS { ignoreErrors: true }\n")),(0,o.kt)("p",null,"To make sure data are durable when a replace query returns, there is the ",(0,o.kt)("em",{parentName:"p"},"waitForSync"),"\nquery option:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"FOR i IN 1..1000\n  REPLACE { _key: CONCAT('test', i) } WITH { foobar: true } IN users OPTIONS { waitForSync: true }\n")),(0,o.kt)("p",null,"In order to not accidentially overwrite documents that have been updated since you last fetched them, you can use the option ",(0,o.kt)("em",{parentName:"p"},"ignoreRevs")," to either let GDN compare the ",(0,o.kt)("inlineCode",{parentName:"p"},"_rev")," value and only succeed if they still match, or let GDN ignore them (default):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"FOR i IN 1..1000\n  REPLACE { _key: CONCAT('test', i), _rev: \"1287623\" } WITH { foobar: true } IN users OPTIONS { ignoreRevs: false }\n")),(0,o.kt)("p",null,"Different write operations on the same collection do not block each other, as long as there are no ",(0,o.kt)("em",{parentName:"p"},"write-write conficts")," on the same documents. From an application development perspective it can be desired to have exclusive write access on collections, to simplify the development. Note that writes do not block reads in GDN. Exclusive access can also speed up modification queries, because we avoid conflict checks."),(0,o.kt)("p",null,"Use the ",(0,o.kt)("em",{parentName:"p"},"exclusive")," option to achieve this effect on a per query basis:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"FOR doc IN collection\n  REPLACE doc._key \n  WITH { replaced: true } IN collection \n  OPTIONS { exclusive: true }\n")),(0,o.kt)("h2",{id:"returning-the-modified-documents"},"Returning the modified documents"),(0,o.kt)("p",null,"The modified documents can also be returned by the query. In this case, the ",(0,o.kt)("inlineCode",{parentName:"p"},"REPLACE")," statement must be followed by a ",(0,o.kt)("inlineCode",{parentName:"p"},"RETURN")," statement (intermediate ",(0,o.kt)("inlineCode",{parentName:"p"},"LET")," statements are allowed, too). The ",(0,o.kt)("inlineCode",{parentName:"p"},"OLD")," pseudo-value can be used to refer to document revisions before the replace, and ",(0,o.kt)("inlineCode",{parentName:"p"},"NEW")," refers to document revisions after the replace."),(0,o.kt)("p",null,"Both ",(0,o.kt)("inlineCode",{parentName:"p"},"OLD")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"NEW")," will contain all document attributes, even those not specified in the replace expression."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"REPLACE document IN collection options RETURN OLD\nREPLACE document IN collection options RETURN NEW\nREPLACE keyExpression WITH document IN collection options RETURN OLD\nREPLACE keyExpression WITH document IN collection options RETURN NEW\n")),(0,o.kt)("p",null,"Following is an example using a variable named ",(0,o.kt)("inlineCode",{parentName:"p"},"previous")," to return the original documents before modification. For each replaced document, the document key will be returned:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'FOR u IN users\n  REPLACE u WITH { value: "test" } \n  IN users\n  LET previous = OLD \n  RETURN previous._key\n')),(0,o.kt)("p",null,"The following query uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"NEW")," pseudo-value to return the replaced documents (without some of their system attributes):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"FOR u IN users\n  REPLACE u WITH { value: \"test\" } IN users\n  LET replaced = NEW \n  RETURN UNSET(replaced, '_key', '_id', '_rev')\n")))}d.isMDXComponent=!0}}]);