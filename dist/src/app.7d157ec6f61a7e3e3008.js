(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/MKj":function(e,t,n){e.exports=n("q7+m")("./node_modules/react-redux/es/index.js")},"17x9":function(e,t,n){e.exports=n("q7+m")("./node_modules/prop-types/index.js")},"1j5w":function(e,t,n){e.exports=n("q7+m")("./node_modules/rc-menu/es/index.js")},"3ljw":function(e,t,n){e.exports=n("q7+m")("./node_modules/@ant-design/icons-react/es/index.js")},"55Ip":function(e,t,n){e.exports=n("q7+m")("./node_modules/react-router-dom/esm/react-router-dom.js")},"8tx+":function(e,t,n){e.exports=n("q7+m")("./node_modules/rc-notification/es/index.js")},ANjH:function(e,t,n){e.exports=n("q7+m")("./node_modules/redux/es/redux.js")},"BGR+":function(e,t,n){e.exports=n("q7+m")("./node_modules/omit.js/es/index.js")},ERIh:function(e,t,n){"use strict";(function(e){var o=n("/MKj"),r=n("ANjH"),c=n("55Ip"),a=n("l8V/"),s=n("SU1m"),i=n("m8Tn"),u=n("GeRC"),l=n("Q2AE"),p=(n("pzAQ"),n("zSLb"),Object(r.createStore)(l.a,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));t.a=function(){return e.createElement(o.Provider,{store:p},e.createElement(c.BrowserRouter,null,e.createElement(c.Switch,null,e.createElement(c.Route,{path:"/home",component:i.a}),e.createElement(c.Route,{path:"/test",component:function(){return e.createElement("div",null,"test")}}),e.createElement(c.Route,{path:"/",component:function(){return e.createElement("div",null,e.createElement(s.a,null))}}),e.createElement(a.a,{path:"/user",component:u.a}))))}}).call(this,n("q1tI"))},GeRC:function(e,t,n){"use strict";(function(e){t.a=function(){return e.createElement("div",null,"Add Users")}}).call(this,n("q1tI"))},J9Du:function(e,t,n){e.exports=n("q7+m")("./node_modules/css-animation/es/index.js")},OLES:function(e,t,n){e.exports=n("q7+m")("./node_modules/rc-tooltip/es/index.js")},Optq:function(e,t,n){e.exports=n("q7+m")("./node_modules/@ant-design/icons/lib/dist.js")},Q2AE:function(e,t,n){"use strict";n("pNMO"),n("TeQF"),n("QWBl"),n("HRxU"),n("eoL8"),n("5DmW"),n("27RR"),n("tkto"),n("FZtP");var o=n("lSNA"),r=n.n(o),c=n("ANjH"),a={init:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=t.type,o=t.payload;switch(n){case"INIT":return o;default:return e}}};function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}t.a=Object(c.combineReducers)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},a))},SU1m:function(e,t,n){"use strict";n("MaXC");var o=n("4IMT"),r=n.n(o),c=n("lwsE"),a=n.n(c),s=n("W8MJ"),i=n.n(s),u=n("a1gu"),l=n.n(u),p=n("Nsbk"),m=n.n(p),d=n("PJYZ"),f=n.n(d),h=n("7W2i"),j=n.n(h),E=n("lSNA"),y=n.n(E),b=n("q1tI"),x=n.n(b),v=n("/MKj"),O=n("o0o1"),g=n.n(O),w=(n("ls82"),n("yXPU")),_=n.n(w),I=(n("pNMO"),n("ma9I"),n("TeQF"),n("QWBl"),n("HRxU"),n("eoL8"),n("5DmW"),n("27RR"),n("tkto"),n("07d7"),n("5s+n"),n("FZtP"),n("pjuD"),n("rR1Q")),q=n.n(I);function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(n,!0).forEach((function(t){y()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k="https://www.fastmock.site/mock/66601674b5477a0fba029a95778cb994/api",P={credentials:"include",headers:{Accept:"application/json"}},D={301:"永久移动",302:"临时移动",304:"未修改",400:"发出的请求有错误，服务器没有进行新建或修改数据的操作。",401:"用户没有权限（令牌、用户名、密码错误）。",403:"用户得到授权，但是访问是被禁止的。",404:"发出的请求针对的是不存在的记录，服务器没有进行操作。",405:"客户端请求中的方法被禁止",406:"请求的格式不可得。",410:"请求的资源被永久删除，且不会再得到的。",413:"由于请求的实体过大，服务器无法处理，因此拒绝请求",414:"请求的URI过长（URI通常为网址），服务器无法处理",422:"当创建一个对象时，发生一个验证错误。",500:"服务器发生错误，请检查服务器。",502:"网关错误。",503:"服务不可用，服务器暂时过载或维护。",504:"网关超时。"},N=function(e){if(e.status>=200&&e.status<300)return e;var t=D[e.status]||e.statusText;q.a.error({message:"请求错误 ".concat(e.status,": ").concat(e.url),description:t})};function C(){return(C=_()(g.a.mark((function e(t,n){var o,r,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=k+t,"post"!==(r=S({},P,{},n)).method.toLocaleLowerCase()&&"put"!==r.method.toLocaleLowerCase()&&"delete"!==r.method.toLocaleLowerCase()||r.body instanceof FormData||(r.headers["Content-Type"]="application/json; charset=utf-8",r.body=JSON.stringify(r.body)),e.prev=3,e.next=6,fetch(o,r);case 6:return c=e.sent,e.abrupt("return",N(c).json());case 10:throw e.prev=10,e.t0=e.catch(3),q.a.error({message:"请求错误 : ".concat(o),description:e.t0.message}),e.t0;case 14:case"end":return e.stop()}}),e,null,[[3,10]])})))).apply(this,arguments)}var L=function(){return function(e,t){return C.apply(this,arguments)}("/init",{method:"get"})},A=(n("pzAQ"),function(e){function t(e){var n;return a()(this,t),n=l()(this,m()(t).call(this,e)),y()(f()(n),"handleSubmit",(function(e){var t=n.props,o=t.history,r=t.init;e.preventDefault(),r({},(function(e){if(!e.success)return!1;o.push({pathname:"/user"})}))})),n.state={myState:1},n}return j()(t,e),i()(t,[{key:"render",value:function(){return x.a.createElement(r.a,{onClick:this.handleSubmit},x.a.createElement("div",{className:"test"},"test api"))}}]),t}(x.a.Component));t.a=Object(v.connect)((function(e){return{a:e.a,init:e.init}}),(function(e){return{init:function(t,n){!function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};return function(){var e=_()(g.a.mark((function e(n){var o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:o=e.sent,n({type:"INIT",payload:o.data}),t(o);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(t,n)(e)}}}))(A)},TSYQ:function(e,t,n){e.exports=n("q7+m")("./node_modules/classnames/index.js")},VCL8:function(e,t,n){e.exports=n("q7+m")("./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js")},dAOQ:function(e,t,n){"use strict";(function(e){t.a=function(){return e.createElement("div",null,"这是idea页面")}}).call(this,n("q1tI"))},eDIo:function(e,t,n){e.exports=n("q7+m")("./node_modules/rc-dropdown/es/index.js")},foW8:function(e,t,n){e.exports=n("q7+m")("./node_modules/@ant-design/create-react-context/lib/index.js")},"h+hn":function(e,t,n){"use strict";(function(e){t.a=function(){return e.createElement("div",null,"这是article页面")}}).call(this,n("q1tI"))},i8i4:function(e,t,n){e.exports=n("q7+m")("./node_modules/react-dom/index.js")},"l8V/":function(e,t,n){"use strict";(function(e){var o=n("pVnL"),r=n.n(o),c=n("QILm"),a=n.n(c),s=n("55Ip"),i=n("/MKj");t.a=Object(i.connect)((function(e){return{logged:e.logged}}))((function(t){t.logged;var n=t.component,o=a()(t,["logged","component"]);return e.createElement(s.Route,r()({},o,{render:function(t){return e.createElement(n,t)}}))}))}).call(this,n("q1tI"))},m8Tn:function(e,t,n){"use strict";(function(e){n("ma9I"),n("rB9j"),n("Rm1S"),n("JT+3");var o=n("Y/VR"),r=n.n(o),c=(n("FGdI"),n("Pbn2")),a=n.n(c),s=n("lwsE"),i=n.n(s),u=n("W8MJ"),l=n.n(u),p=n("a1gu"),m=n.n(p),d=n("Nsbk"),f=n.n(d),h=n("PJYZ"),j=n.n(h),E=n("7W2i"),y=n.n(E),b=n("lSNA"),x=n.n(b),v=(n("PFYH"),n("Jv8k")),O=n.n(v),g=(n("ppZR"),n("d2CI")),w=n.n(g),_=n("55Ip"),I=n("SU1m"),q=n("dAOQ"),R=n("h+hn"),S=n("/MKj"),k=w.a.Header,P=w.a.Content,D=(w.a.Footer,w.a.Sider),N=O.a.SubMenu,C=function(t){function n(){var e,t;i()(this,n);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return t=m()(this,(e=f()(n)).call.apply(e,[this].concat(r))),x()(j()(t),"state",{collapsed:!1}),x()(j()(t),"onCollapse",(function(e){t.setState({collapsed:e})})),x()(j()(t),"go",(function(e){e.item;var n=e.key,o=(e.keyPath,e.selectedKeys,e.domEvent,t.props),r=o.history,c=o.match;r.push("".concat(c.path,"/").concat(n))})),t}return y()(n,t),l()(n,[{key:"render",value:function(){var t=this.props.match;return e.createElement(w.a,{style:{minHeight:"100vh"}},e.createElement(D,{collapsible:!0,collapsed:this.state.collapsed,onCollapse:this.onCollapse},e.createElement("div",{className:"logo"}),e.createElement(O.a,{theme:"dark",defaultSelectedKeys:["/"],mode:"inline",onClick:this.go},e.createElement(O.a.Item,{key:"article"},e.createElement(a.a,{type:"pie-chart"}),e.createElement("span",null,"Option 1")),e.createElement(N,{key:"/fat",title:e.createElement("span",null,e.createElement(a.a,{type:"team"}),e.createElement("span",null,"Option sub"))},e.createElement(O.a.Item,{key:"idea"},"idea")))),e.createElement(w.a,null,e.createElement(k,{style:{background:"#fff",padding:0}}),e.createElement(P,{style:{margin:"0 16px"}},e.createElement(r.a,{style:{margin:"16px 0"}}),e.createElement(_.Switch,null,e.createElement(_.Route,{path:"".concat(t.path),exact:!0,component:I.a}),e.createElement(_.Route,{path:"".concat(t.path,"/article"),component:R.a}),e.createElement(_.Route,{path:"".concat(t.path,"/idea"),component:q.a}),e.createElement(_.Redirect,{to:"".concat(t.url)})))))}}]),n}(e.Component);t.a=Object(S.connect)(null,null)(C)}).call(this,n("q1tI"))},pzAQ:function(e,t,n){},q1tI:function(e,t,n){e.exports=n("q7+m")("./node_modules/react/index.js")},"q7+m":function(e,t){e.exports=react_antd_4394ba99466f7ca16d76},tjUo:function(e,t,n){"use strict";n.r(t);var o,r=n("q1tI"),c=n.n(r),a=n("i8i4"),s=n.n(a),i=n("ERIh"),u=document.getElementById("app");o=i.a,s.a.render(c.a.createElement(o,null),u)},"wd/R":function(e,t,n){e.exports=n("q7+m")("./node_modules/moment/moment.js")},xEkU:function(e,t,n){e.exports=n("q7+m")("./node_modules/raf/index.js")},yLpj:function(e,t,n){e.exports=n("q7+m")("./node_modules/webpack/buildin/global.js")},zSLb:function(e,t,n){}},[["tjUo",1,2]]]);