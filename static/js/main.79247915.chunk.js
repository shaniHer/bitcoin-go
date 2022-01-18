(this["webpackJsonpmister-bitcoin"]=this["webpackJsonpmister-bitcoin"]||[]).push([[0],{180:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(31),o=n.n(r),s=(n(84),n(12)),i=n(7),u=n(3),l=n.n(u),d=n(4),j=n(8),b=n(0),m=function(e){var t=e.title,n=e.moves,c=e.rate;Object(a.useEffect)((function(){console.log("movesList",n)}));return Object(b.jsxs)("div",{className:"moves-list",children:[Object(b.jsx)("div",{className:"title",children:t}),Object(b.jsx)("ul",{children:n.map((function(e){return Object(b.jsxs)("li",{className:"move-details",children:[Object(b.jsx)("div",{children:e.to}),Object(b.jsxs)("div",{className:"move-amount",children:[Object(b.jsxs)("span",{className:"amount-btc",children:["\u20bf"," ",e.amount," "]}),"|",Object(b.jsxs)("span",{className:"amount-usd",children:[" ",(t=c*e.amount,t.toLocaleString("en-US",{style:"currency",currency:"USD"}))]})]}),Object(b.jsx)("div",{className:"move-status",children:"Status: approved"}),Object(b.jsx)("div",{className:"move-time",children:e.at})]},e.at);var t}))})]})},f=n(77),p=n.n(f),h=n(78),v={loadFromStorage:function(e){var t=localStorage.getItem(e);return JSON.parse(t)},saveToStorage:function(e,t){localStorage.setItem(e,JSON.stringify(t))}};var O="rate",x="confirmed-transactions",g="market-price",y=n.n(h).a.create({withCredentials:!1}),C={getRate:function(){return S.apply(this,arguments)},getMarketPrice:function(){return w.apply(this,arguments)},getConfirmedTransactions:function(){return N.apply(this,arguments)}};function S(){return(S=Object(d.a)(l.a.mark((function e(){var t,n,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=v.loadFromStorage(O))){e.next=3;break}return e.abrupt("return",t);case 3:return e.prev=3,console.log("getting from ajax"),e.next=7,y.get("https://blockchain.info/ticker");case 7:return n=e.sent,a=n.data,c=a.USD.last,v.saveToStorage(O,c),console.log(c),e.abrupt("return",c);case 15:e.prev=15,e.t0=e.catch(3),console.log("Had issues getting rate",e.t0);case 18:case"end":return e.stop()}}),e,null,[[3,15]])})))).apply(this,arguments)}function N(){return(N=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=v.loadFromStorage(x))){e.next=3;break}return e.abrupt("return",t);case 3:return e.prev=3,console.log("getting from ajax"),e.next=7,y.get("https://api.blockchain.info/charts/n-transactions?timespan=1months&format=json&cors=true");case 7:return n=e.sent,v.saveToStorage(x,n.data),e.abrupt("return",n.data);case 12:e.prev=12,e.t0=e.catch(3),console.log("Had issues getting rate",e.t0);case 15:case"end":return e.stop()}}),e,null,[[3,12]])})))).apply(this,arguments)}function w(){return(w=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=v.loadFromStorage(g))){e.next=3;break}return e.abrupt("return",t);case 3:return e.prev=3,console.log("getting from ajax"),e.next=7,y.get("https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true");case 7:return n=e.sent,v.saveToStorage(g,n.data),e.abrupt("return",n.data);case 12:e.prev=12,e.t0=e.catch(3),console.log("Had issues getting rate",e.t0);case 15:case"end":return e.stop()}}),e,null,[[3,12]])})))).apply(this,arguments)}function k(){return function(){var e=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.getRate();case 3:n=e.sent,console.log(n),t({type:"SET_RATE",rate:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Had issues setting rate",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}var _=n(20),T="user",E={getUser:function(){return{name:"Ochoa Hyde",coins:100,moves:[]}},addMove:function(e,t){return I.apply(this,arguments)},signUp:function(e){var t={name:e,coins:100,moves:[{toId:"5a56640298500fead8cb1ee5",to:"Grace James",at:"03/10/2021, 11:23:23",amount:"2"},{toId:"5a56640298500fead8cb1ee5",to:"Grace James",at:"03/10/2021, 11:23:22",amount:2},{toId:"5a566402abce24c6bfe4699d",to:"Dominique Soto",at:"03/10/2021, 11:23:10",amount:1},{toId:"5a56640243427b8f8445231e",to:"Tanner Gates",at:"03/10/2021, 11:22:59",amount:5},{toId:"5a566402a6499c1d4da9220a",to:"Shana Pope",at:"03/10/2021, 11:22:50",amount:1},{toId:"5a56640269f443a5d64b32ca",to:"Ochoa Hyde",at:"03/10/2021, 11:22:42",amount:2},{toId:"5a566402f90ae30e97f990db",to:"Faulkner Flores",at:"03/10/2021, 11:22:34",amount:1}]};return v.saveToStorage(T,t),t}};function I(){return(I=Object(d.a)(l.a.mark((function e(t,n){var a,c,r,o,s,i,u,d;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n._id,c=n.name,r={toId:a,to:c,at:(new Date).toLocaleString("en-GB",{timeZone:"UTC"}),amount:t},e.prev=2,e.next=5,v.loadFromStorage(T);case 5:return o=e.sent,s=o.name,i=o.coins,u=o.moves,d={name:s,coins:i-t,moves:[r].concat(Object(_.a)(u))},v.saveToStorage(T,d),e.abrupt("return",d);case 14:e.prev=14,e.t0=e.catch(2),console.log("had problems loading loggedInUser",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})))).apply(this,arguments)}function L(e,t){return function(){var n=Object(d.a)(l.a.mark((function n(a){var c;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,E.addMove(e,t);case 3:c=n.sent,console.log("user:",c,"amount:",e),a({type:"TRANSFER_COINS",user:c}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log("Had issues",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}function U(e){return function(){var t=Object(d.a)(l.a.mark((function t(n){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.signUp(e);case 3:a=t.sent,console.log("user actions",a),n({type:"SET_LOGGEDIN_USER",loggedInUser:a}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("Had issues signing up",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}n(179);var F=function(){var e=Object(j.d)((function(e){return e.bitcoinModule})).rate,t=Object(j.d)((function(e){return e.userModule})).loggedInUser,n=Object(j.c)();Object(a.useEffect)((function(){n(k()),c()}),[]);var c=function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,n(U("David"));case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.log("Had issues signing-up",e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(){return e.apply(this,arguments)}}(),r=function(e){return e.toLocaleString("en-US",{style:"currency",currency:"USD"})};return Object(b.jsx)("div",{className:"homepage",children:t&&Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"greet-user",children:["Welcome back ",t.name,","]}),e&&Object(b.jsxs)("div",{className:"status",children:[Object(b.jsxs)("div",{className:"balance",children:[Object(b.jsx)("div",{className:"balance-title",children:"CURRENT BALANCE"}),Object(b.jsxs)("div",{children:["BIT: ",Object(b.jsxs)("span",{children:["\u20bf"," ",t.coins]})]}),Object(b.jsxs)("div",{children:["USD: ",Object(b.jsx)("span",{children:r(t.coins*e)})," "]})]}),Object(b.jsxs)("div",{className:"rate",children:[Object(b.jsx)("div",{className:"balance-title",children:"CURRENT BTC USD"}),Object(b.jsxs)("div",{children:[" ",r(e)]})]})]}),Object(b.jsx)(m,{title:"Last 3 moves",moves:function(){var e=t.moves;return p()(e).slice(0,3)}(),rate:e})]})})},M=n.p+"static/media/avatar.e46db3f8.png",R=function(e){var t=e.contact,n=(e.deleteContact,t.name),a=t.phone;return Object(b.jsx)("div",{children:Object(b.jsxs)(s.b,{to:"/contact/"+t._id,className:"contact-card",children:[Object(b.jsx)("img",{src:M,className:"avatar"}),Object(b.jsxs)("div",{className:"contact-details-preview ",children:[Object(b.jsx)("div",{children:n}),Object(b.jsx)("div",{children:a})]})]})})},D=function(e){var t=e.contacts,n=e.deleteContact;return Object(b.jsx)("div",{children:t.map((function(e){return Object(b.jsx)(R,{contact:e,deleteContact:n},e._id)}))})},z=n(19),B=n(5),H=n(11),A=function(e){var t=e.onFilter,n=Object(a.useState)(""),c=Object(H.a)(n,2),r=c[0],o=c[1];Object(a.useEffect)((function(){t(r)}),[r]);return Object(b.jsx)("div",{children:Object(b.jsx)("label",{htmlFor:"term",children:Object(b.jsx)("input",{type:"text",name:"term",onChange:function(e){var t=e.target,n=t.name,a="number"===t.type?+t.value:t.value;o((function(e){return Object(B.a)(Object(B.a)({},e),{},Object(z.a)({},n,a))}))},placeholder:"Search"})})})},P={getContacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return new Promise((function(t,n){var a=G;e&&e.term&&(a=q(e.term)),t(J(a))}))},getContactById:function(e){return new Promise((function(t,n){var a=G.find((function(t){return t._id===e}));a?t(a):n("Contact id ".concat(e," not found!"))}))},deleteContact:function(e){return new Promise((function(t,n){var a=G.findIndex((function(t){return t._id===e}));-1!==a&&G.splice(a,1),t(G)}))},saveContact:function(e){return e._id?function(e){return new Promise((function(t,n){var a=G.findIndex((function(t){return e._id===t._id}));-1!==a&&(G[a]=e),t(e)}))}(e):function(e){return new Promise((function(t,n){e._id=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<e;a++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}(),G.push(e),t(e)}))}(e)},getEmptyContact:function(){return{name:"",email:"",phone:""}}},G=[{_id:"5a56640269f443a5d64b32ca",name:"Ochoa Hyde",email:"ochoahyde@renovize.com",phone:"+1 (968) 593-3824"},{_id:"5a5664025f6ae9aa24a99fde",name:"Hallie Mclean",email:"halliemclean@renovize.com",phone:"+1 (948) 464-2888"},{_id:"5a56640252d6acddd183d319",name:"Parsons Norris",email:"parsonsnorris@renovize.com",phone:"+1 (958) 502-3495"},{_id:"5a566402ed1cf349f0b47b4d",name:"Rachel Lowe",email:"rachellowe@renovize.com",phone:"+1 (911) 475-2312"},{_id:"5a566402abce24c6bfe4699d",name:"Dominique Soto",email:"dominiquesoto@renovize.com",phone:"+1 (807) 551-3258"},{_id:"5a566402a6499c1d4da9220a",name:"Shana Pope",email:"shanapope@renovize.com",phone:"+1 (970) 527-3082"},{_id:"5a566402f90ae30e97f990db",name:"Faulkner Flores",email:"faulknerflores@renovize.com",phone:"+1 (952) 501-2678"},{_id:"5a5664027bae84ef280ffbdf",name:"Holder Bean",email:"holderbean@renovize.com",phone:"+1 (989) 503-2663"},{_id:"5a566402e3b846c5f6aec652",name:"Rosanne Shelton",email:"rosanneshelton@renovize.com",phone:"+1 (968) 454-3851"},{_id:"5a56640272c7dcdf59c3d411",name:"Pamela Nolan",email:"pamelanolan@renovize.com",phone:"+1 (986) 545-2166"},{_id:"5a5664029a8dd82a6178b15f",name:"Roy Cantu",email:"roycantu@renovize.com",phone:"+1 (929) 571-2295"},{_id:"5a5664028c096d08eeb13a8a",name:"Ollie Christian",email:"olliechristian@renovize.com",phone:"+1 (977) 419-3550"},{_id:"5a5664026c53582bb9ebe9d1",name:"Nguyen Walls",email:"nguyenwalls@renovize.com",phone:"+1 (963) 471-3181"},{_id:"5a56640298ab77236845b82b",name:"Glenna Santana",email:"glennasantana@renovize.com",phone:"+1 (860) 467-2376"},{_id:"5a56640208fba3e8ecb97305",name:"Malone Clark",email:"maloneclark@renovize.com",phone:"+1 (818) 565-2557"},{_id:"5a566402abb3146207bc4ec5",name:"Floyd Rutledge",email:"floydrutledge@renovize.com",phone:"+1 (807) 597-3629"},{_id:"5a56640298500fead8cb1ee5",name:"Grace James",email:"gracejames@renovize.com",phone:"+1 (959) 525-2529"},{_id:"5a56640243427b8f8445231e",name:"Tanner Gates",email:"tannergates@renovize.com",phone:"+1 (978) 591-2291"},{_id:"5a5664025c3abdad6f5e098c",name:"Lilly Conner",email:"lillyconner@renovize.com",phone:"+1 (842) 587-3812"}];function J(e){return e.sort((function(e,t){return e.name.toLocaleLowerCase()<t.name.toLocaleLowerCase()?-1:e.name.toLocaleLowerCase()>t.name.toLocaleLowerCase()?1:0}))}function q(e){return e=e.toLocaleLowerCase(),G.filter((function(t){return t.name.toLocaleLowerCase().includes(e)||t.phone.toLocaleLowerCase().includes(e)||t.email.toLocaleLowerCase().includes(e)}))}function V(){return function(){var e=Object(d.a)(l.a.mark((function e(t,n){var a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().contactModule.filterBy,e.prev=1,e.next=4,P.getContacts(a);case 4:c=e.sent,t({type:"SET_CONTACTS",contacts:c}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("Had issues loading contacts",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}()}function W(e){return function(){var t=Object(d.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,P.deleteContact(e);case 3:n({type:"REMOVE_CONTACT",contactId:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log("Had issues deleting contact",t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()}var Y=function(e){var t=e.history,n=Object(j.c)(),c=Object(j.d)((function(e){return e.contactModule})).contacts;Object(a.useEffect)((function(){n(V())}),[]);var r=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(W(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"contact-page",children:[Object(b.jsx)("button",{onClick:function(){t.push("/contact/edit")},className:"add-contact-btn",children:"+"}),Object(b.jsx)(A,{onFilter:function(e){n(function(e){return function(t){t({type:"SET_FILTER_BY",filterBy:e})}}(e)),n(V())}}),c&&Object(b.jsx)(D,{contacts:c,deleteContact:r})]})},Z=n(52),K=function(e){var t=e.chartData,n=e.color,a=t.name,c=t.description,r=t.values.map((function(e){return e.y.toFixed()}));return Object(b.jsxs)("div",{className:"chart",children:[Object(b.jsx)("div",{children:a}),Object(b.jsx)(Z.Sparklines,{data:r,children:Object(b.jsx)(Z.SparklinesLine,{color:n})}),Object(b.jsx)("div",{className:"chart-desc",children:c})]})},Q=function(){var e=Object(a.useState)(null),t=Object(H.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),o=Object(H.a)(r,2),s=o[0],i=o[1];Object(a.useEffect)((function(){u()}),[]);var u=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.getMarketPrice();case 2:return t=e.sent,e.next=5,C.getConfirmedTransactions();case 5:n=e.sent,c(t),i(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{children:[n&&Object(b.jsx)(K,{chartData:n,color:"blue"}),s&&Object(b.jsx)(K,{chartData:s,color:"green"})]})},X=function(e){var t=e.history,n=Object(a.useState)(null),c=Object(H.a)(n,2),r=c[0],o=c[1],s=Object(j.c)(),i=function(){var e=Object(d.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,s(U(r));case 4:t.push("/"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log("Had issues signing-up",e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"signup",children:[Object(b.jsx)("div",{children:"Sign-up"}),Object(b.jsx)("div",{children:"Enter username"}),Object(b.jsx)("form",{onSubmit:i,children:Object(b.jsxs)("label",{htmlFor:"username",children:[Object(b.jsx)("input",{type:"text",id:"username",onChange:function(e){return o(e.target.value)}}),Object(b.jsx)("button",{children:"Sign-Up"})]})})]})},$=function(e){var t=e.onTransferCoins,n=(e.contact,Object(a.useState)("")),c=Object(H.a)(n,2),r=c[0],o=c[1],s=function(){var e=Object(d.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),t(r),o("");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"transfer-fund",children:Object(b.jsxs)("form",{onSubmit:s,children:[Object(b.jsx)("label",{htmlFor:"amount",children:Object(b.jsx)("input",{type:"text",onChange:function(e){return o(+e.target.value)},value:r})}),Object(b.jsx)("button",{children:"Transfer"})]})})},ee=function(e){var t=e.match;e.history;Object(a.useEffect)((function(){var e,a=t.params.id;n((e=a,function(){var t=Object(d.a)(l.a.mark((function t(n){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,P.getContactById(e);case 3:a=t.sent,n({type:"SET_CONTACT",contact:a}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("Had issues loading contact",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}())),n(k())}),[t.params.id]);var n=Object(j.c)(),c=Object(j.d)((function(e){return e.contactModule})).currContact,r=Object(j.d)((function(e){return e.userModule})).loggedInUser,o=Object(j.d)((function(e){return e.bitcoinModule})).rate,i=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(L(t,c));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"details-page",children:[Object(b.jsxs)("div",{className:"sub-nav",children:[Object(b.jsx)(s.b,{to:"/contact/",children:"Back"}),Object(b.jsx)("div",{children:c&&Object(b.jsx)(s.b,{to:"/contact/edit/"+c._id,children:"Edit"})})]}),c&&Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"contact-details",children:[Object(b.jsx)("img",{src:M,className:"avatar"}),Object(b.jsx)("p",{children:c.name}),Object(b.jsx)("p",{children:c.phone}),Object(b.jsx)("p",{children:c.email}),Object(b.jsx)($,{contact:c,onTransferCoins:i})]}),r&&o&&Object(b.jsx)(m,{title:"Moves History",moves:r.moves.filter((function(e){return e.toId===c._id})),rate:o})]})]})},te=function(e){var t=e.match,n=e.history,c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=Object(a.useState)(e),c=Object(H.a)(n,2),r=c[0],o=c[1];return Object(a.useEffect)((function(){t(r)}),[r]),[r,function(e){var t=e.target,n=t.name,a="number"===t.type?+t.value:t.value;o((function(e){return Object(B.a)(Object(B.a)({},e),{},Object(z.a)({},n,a))}))},o]}(null),r=Object(H.a)(c,3),o=r[0],i=r[1],u=r[2];Object(a.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(n=t.params.id)){e.next=8;break}return e.next=5,P.getContactById(n);case 5:e.t0=e.sent,e.next=9;break;case 8:e.t0=P.getEmptyContact();case 9:a=e.t0,u(a),e.next=16;break;case 13:e.prev=13,e.t1=e.catch(0),console.log("Had issues loading contact",e.t1);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var j=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,P.saveContact(o);case 3:n.push("/contact");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();if(!o)return Object(b.jsx)("div",{children:"Loading..."});var m=o.name,f=o.phone,p=o.email;return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"sub-nav",children:Object(b.jsx)(s.b,{to:"/contact/",children:"Back"})}),Object(b.jsxs)("div",{className:"contact-edit",children:[Object(b.jsx)("img",{src:M,className:"avatar"}),Object(b.jsxs)("form",{children:[Object(b.jsx)("label",{htmlFor:"name",children:Object(b.jsx)("input",{type:"text",name:"name",value:m,onChange:i,placeholder:"Name"})}),Object(b.jsx)("label",{htmlFor:"phone",children:Object(b.jsx)("input",{type:"text",name:"phone",value:f,onChange:i,placeholder:"Phone"})}),Object(b.jsx)("label",{htmlFor:"email",children:Object(b.jsx)("input",{type:"email",name:"email",value:p,onChange:i,placeholder:"Email"})}),Object(b.jsx)("button",{onClick:j,children:"Save"})]})]})]})},ne=n.p+"static/media/contacts.d2127828.svg",ae=n.p+"static/media/statistics.f6208542.svg",ce=function(){return Object(b.jsxs)("div",{className:"app-header main-layout",children:[Object(b.jsx)("div",{children:Object(b.jsxs)(s.c,{className:"logo",exact:!0,to:"/",children:[Object(b.jsx)("span",{className:"bitcoin-icon",children:"\u20bf"}),"itcoinGO"]})}),Object(b.jsxs)("ul",{className:"main-nav",children:[Object(b.jsx)("li",{children:Object(b.jsx)(s.c,{activeClassName:"active-nav",exact:!0,to:"/statistic",children:Object(b.jsx)("img",{src:ae,className:"icon"})})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.c,{activeClassName:"active-nav",exact:!0,to:"/contact",children:Object(b.jsx)("img",{src:ne,className:"icon"})})})]})]})};var re=Object(j.b)((function(e){return{loggedInUser:e.userModule.loggedInUser}}))((function(e){return e.loggedInUser,Object(b.jsx)(s.a,{children:Object(b.jsxs)("main",{className:"main-layout",children:[Object(b.jsx)(ce,{}),Object(b.jsxs)(i.c,{children:[Object(b.jsx)(i.a,{path:"/contact/edit/:id?",component:te}),Object(b.jsx)(i.a,{path:"/contact/:id",component:ee}),Object(b.jsx)(i.a,{exact:!0,path:"/contact",component:Y}),Object(b.jsx)(i.a,{path:"/statistic",component:Q}),Object(b.jsx)(i.a,{exact:!0,path:"/signup",component:X}),Object(b.jsx)(i.a,{path:"/",component:F})]})]})})})),oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,181)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))},se=n(34),ie=n(79),ue={contacts:null,currContact:null,filterBy:null};var le={loggedInUser:null};var de={rate:null};var je=Object(se.b)({contactModule:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CONTACTS":return Object(B.a)(Object(B.a)({},e),{},{contacts:t.contacts});case"SET_CONTACT":return Object(B.a)(Object(B.a)({},e),{},{currContact:t.contact});case"SET_FILTER_BY":return Object(B.a)(Object(B.a)({},e),{},{filterBy:t.filterBy});case"ADD_CONTACT":return Object(B.a)(Object(B.a)({},e),{},{contacts:[].concat(Object(_.a)(e.contacts),[t.contact])});case"REMOVE_CONTACT":return Object(B.a)(Object(B.a)({},e),{},{contacts:e.contacts.filter((function(e){return e._id!==t.contactId}))});case"UPDATE_CONTACT":var n=e.currContact._id===t.contact._id?t.contact:e.currContact;return Object(B.a)(Object(B.a)({},e),{},{contacts:e.contacts&&e.contacts.map((function(e){return e._id===t.contact._id?t.contact:e})),currContact:n});default:return e}},userModule:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TRANSFER_COINS":return Object(B.a)(Object(B.a)({},e),{},{loggedInUser:Object(B.a)(Object(B.a)({},e.loggedInUser),{},{coins:t.user.coins,moves:Object(_.a)(t.user.moves)})});case"SET_LOGGEDIN_USER":return Object(B.a)(Object(B.a)({},e),{},{loggedInUser:t.loggedInUser});default:return e}},bitcoinModule:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_RATE":return Object(B.a)(Object(B.a)({},e),{},{rate:t.rate});default:return e}}}),be=Object(se.c)(je,Object(se.a)(ie.a));o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(j.a,{store:be,children:Object(b.jsx)(re,{})})}),document.getElementById("root")),oe()},84:function(e,t,n){}},[[180,1,2]]]);
//# sourceMappingURL=main.79247915.chunk.js.map