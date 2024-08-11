"use strict";(self.webpackChunkejabu_resume=self.webpackChunkejabu_resume||[]).push([[948],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),c=r,g=m["".concat(s,".").concat(c)]||m[c]||d[c]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3269:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);const r=({children:e,icon:t,iconWidth:n,svgIcon:r,link:i})=>a.createElement("a",{href:i||"#",className:"home-page-option-button"},a.createElement("div",{className:"home-page-option-icon"},r||a.createElement("img",{className:"home-svg",src:t,style:{width:n||"28px"}})),a.createElement("div",{style:{fontWeight:"500"}},e))},676:(e,t,n)=>{n.r(t),n.d(t,{TechnologyUsed:()=>v,assets:()=>b,contentTitle:()=>k,default:()=>O,frontMatter:()=>h,metadata:()=>y,toc:()=>f});var a=n(3905),r=n(3269),i=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&m(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&m(e,n,t[n]);return e},c=(e,t)=>o(e,l(t)),g=(e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n};const h={title:"Automated Truck Scheduling",sidebar_label:"Automated Truck Scheduling",slug:"/resume/automated-truck-scheduling",displayed_sidebar:"resume",sidebar_position:1,hide_title:!1},k=void 0,y={unversionedId:"resume/project/automated-truck-scheduling",id:"resume/project/automated-truck-scheduling",title:"Automated Truck Scheduling",description:"The previous application was completed by 5-member team within 3 months. I reimplemented the algorithm using Python, and complete within 2 months.",source:"@site/docs/resume/project/automated-truck-scheduling.md",sourceDirName:"resume/project",slug:"/resume/automated-truck-scheduling",permalink:"/resume/automated-truck-scheduling",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Automated Truck Scheduling",sidebar_label:"Automated Truck Scheduling",slug:"/resume/automated-truck-scheduling",displayed_sidebar:"resume",sidebar_position:1,hide_title:!1},sidebar:"resume",previous:{title:"Resume",permalink:"/resume"},next:{title:"Data Pipeline Optimization",permalink:"/resume/data-pipeline-optimization"}},b={},f=[{value:"Overview",id:"overview",level:2},{value:"Constraints",id:"constraints",level:2},{value:"Further optimization",id:"further-optimization",level:2},{value:"Sample output",id:"sample-output",level:2},{value:"Daily summary",id:"daily-summary",level:3},{value:"Truck optimization",id:"truck-optimization",level:3},{value:"Technology used",id:"technology-used",level:2}],v=({children:e,color:t})=>(0,a.kt)("div",{className:"home-page-section"},(0,a.kt)("div",{className:"home-page-section-left"},(0,a.kt)("div",{style:{fontWeight:"600",fontSize:"18px",marginBottom:"24px"}},"Backend"),(0,a.kt)("div",{style:{marginBottom:"12px"}},"As a small module from larger systems, this Python apps triggered via HTTP Request, and read input / write output to ",(0,a.kt)("b",null,"PostgreSQL"))),(0,a.kt)("div",null,(0,a.kt)("div",{className:"home-page-button-container"},(0,a.kt)(r.Z,{icon:"/images/logo-python.svg",link:"/",mdxType:"LogoButton"},"Python"),(0,a.kt)(r.Z,{icon:"/images/logo-python.svg",link:"/",mdxType:"LogoButton"},"Python - Pandas")),(0,a.kt)("div",{className:"home-page-button-container"},(0,a.kt)(r.Z,{icon:"/images/logo-python.svg",link:"/",mdxType:"LogoButton"},"Python - XLSXWriter"),(0,a.kt)(r.Z,{icon:"/images/logo-psql.svg",link:"/",mdxType:"LogoButton"},"PostgreSQL")))),N={toc:f,TechnologyUsed:v},w="wrapper";function O(e){var t=e,{components:r}=t,i=g(t,["components"]);return(0,a.kt)(w,c(d(d({},N),i),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("admonition",d({},{title:"Key Highlights",type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"The previous application was completed by 5-member team within 3 months. I reimplemented the algorithm using Python, and complete within 2 months."),(0,a.kt)("p",{parentName:"admonition"},"While having ",(0,a.kt)("inlineCode",{parentName:"p"},"700%")," more accuracy than previous SAAS-based application, the application also reduce processing time from ",(0,a.kt)("inlineCode",{parentName:"p"},"10 minutes")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"12 seconds"),"."),(0,a.kt)("p",{parentName:"admonition"},"I also sucessfully delivered as sole Software Engineer.")),(0,a.kt)("h2",d({},{id:"overview"}),"Overview"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6236).Z,width:"1280",height:"720"})),(0,a.kt)("p",null,"Every day, PT Pertamina is required to distribute Gasoline to smaller gas stations."),(0,a.kt)("p",null,"Each day, every partner requests the ",(0,a.kt)("strong",{parentName:"p"},"product")," and ",(0,a.kt)("strong",{parentName:"p"},"quantity"),", so it can be fulfilled in the next day."),(0,a.kt)("p",null,"It became tedious task as manual assignment was required to have next-day preparation."),(0,a.kt)("p",null,"This application automate the process to manage truck assignment by considering several constraints below :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"#"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Domain"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Constraints"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"1."),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Sales request"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Sales quantity")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"2."),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Delivery"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Shift and Schedule")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"3."),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Delivery"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Prioritization related to stock level")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"4."),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Delivery"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Distance between station")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"5."),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Truck list"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Truck Availability")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"6."),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Truck list"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Truck size variety")))),(0,a.kt)("h2",d({},{id:"constraints"}),"Constraints"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4858).Z,width:"600",height:"424"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5125).Z,width:"600",height:"424"})),(0,a.kt)("h2",d({},{id:"further-optimization"}),"Further optimization"),(0,a.kt)("p",null,"to reduce round trip, we should minimize under utilization and\narrange truck to have multiple drop points."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6279).Z,width:"1084",height:"424"})),(0,a.kt)("h2",d({},{id:"sample-output"}),"Sample output"),(0,a.kt)("h3",d({},{id:"daily-summary"}),"Daily summary"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4828).Z,width:"1108",height:"206"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2740).Z,width:"1149",height:"155"})),(0,a.kt)("h3",d({},{id:"truck-optimization"}),"Truck optimization"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2607).Z,width:"1077",height:"466"})),(0,a.kt)("h2",d({},{id:"technology-used"}),"Technology used"),(0,a.kt)(v,{mdxType:"TechnologyUsed"}))}O.isMDXComponent=!0},4858:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2024-08-11-15-15-11-13bba57ddb43b65fe0448029aea683dd.png"},5125:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2024-08-11-15-15-25-a3bde2f79d3d544a68fbecd513349623.png"},4828:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2024-08-11-15-19-32-a1be7e61ea73bda2bd722c95fea0bee3.png"},2740:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2024-08-11-15-19-51-eaf8863d2635e2674f3272812409396e.png"},2607:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2024-08-11-15-19-58-e7fe23f22c0e2ed3014d9c2972086315.png"},6279:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2024-08-11-15-28-29-9a0eb91775342e46a29df0c59c9fa801.png"},6236:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/palembang-d4a33573fe9e1a8c10b65bf1417ff4dd.png"}}]);