(this["webpackJsonpblockchain-explorer"]=this["webpackJsonpblockchain-explorer"]||[]).push([[13],{215:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"e",(function(){return s})),n.d(t,"c",(function(){return a})),n.d(t,"f",(function(){return c})),n.d(t,"g",(function(){return r})),n.d(t,"d",(function(){return l})),n.d(t,"a",(function(){return o}));var i="/assets/issuingBoxes",s="/assets/issuingBoxes/total",a="assets/id:/issuingBoxes",c="/transactions/unconfirmed",r="/transactions/unconfirmed/:id",l="oracle/frontendData",o="addresses/balances"},221:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var i=n(3),s=n(77),a=n(39),c=n.n(a),r={transformResponse:function(e){return e},dispatch:function(e){return e}},l=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r,a=n.dispatch,l=n.transformResponse;return a(Object(s.startStructFetch)(e)),c.a.request(Object(i.a)({},t)).then((function(e){return e.data})).then(l).then((function(t){if(!t)return a(Object(s.stopStructFetch)(e,t)),Promise.resolve(t);var n=t.errors||t.error;return n?(a(Object(s.stopStructFetch)(e,new Error(n))),Promise.reject(new Error(n))):(a(Object(s.stopStructFetch)(e,t)),Promise.resolve(t))})).catch((function(t){return a(Object(s.stopStructFetch)(e,t)),Promise.reject(t)}))}},231:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var i=n(11),s=n(12),a=n(14),c=n(13),r=n(0),l=n.n(r),o=n(28),b=n(33),p=(n(232),n(15)),u=n(2),m=function(e){Object(a.a)(n,e);var t=Object(c.a)(n);function n(e){return Object(i.a)(this,n),t.call(this,e)}return Object(s.a)(n,[{key:"render",value:function(){var e=Math.ceil(this.props.total/this.props.limit);return e?Object(u.jsxs)("div",{className:"bi-paginate-simple",children:[0===this.props.forcePage?Object(u.jsx)("button",{className:"bi-paginate-simple__btn bi-paginate-simple__btn--prev bi-btn bi-btn--flat",disabled:!0,children:Object(u.jsx)(p.m,{className:"bi-paginate-simple__btn-icon"})}):Object(u.jsx)(b.Link,{className:"bi-paginate-simple__btn bi-paginate-simple__btn--prev bi-btn bi-btn--flat",to:this.props.getPageUrl(0),children:Object(u.jsx)(p.m,{className:"bi-paginate-simple__btn-icon"})}),0===this.props.forcePage?Object(u.jsx)("button",{className:"bi-paginate-simple__btn bi-paginate-simple__btn--prev bi-btn bi-btn--flat",disabled:!0,children:Object(u.jsx)(p.c,{className:"bi-paginate-simple__btn-icon"})}):Object(u.jsx)(b.Link,{className:"bi-paginate-simple__btn bi-paginate-simple__btn--prev bi-btn--flat",to:this.props.getPageUrl(this.props.forcePage-1),children:Object(u.jsx)(p.c,{className:"bi-paginate-simple__btn-icon"})}),Object(u.jsx)("span",{className:"bi-paginate-simple__status",children:Object(u.jsx)(o.a,{id:"components.paginate-simple.page-of",values:{current:this.props.forcePage+1,total:e}})}),Object(u.jsx)("span",{className:"bi-paginate-simple__status bi-paginate-simple__status--mobile",children:Object(u.jsx)(o.a,{id:"components.paginate-simple.page",values:{current:this.props.forcePage+1}})}),this.props.forcePage===e-1?Object(u.jsx)("button",{className:"bi-paginate-simple__btn bi-paginate-simple__btn--next bi-btn bi-btn--flat",disabled:!0,children:Object(u.jsx)(p.c,{className:"bi-paginate-simple__btn-icon"})}):Object(u.jsx)(b.Link,{className:"bi-paginate-simple__btn bi-paginate-simple__btn--next bi-btn--flat",to:this.props.getPageUrl(this.props.forcePage+1),children:Object(u.jsx)(p.c,{className:"bi-paginate-simple__btn-icon"})}),this.props.forcePage===e-1?Object(u.jsx)("button",{className:"bi-paginate-simple__btn bi-paginate-simple__btn--next bi-btn bi-btn--flat",disabled:!0,children:Object(u.jsx)(p.m,{className:"bi-paginate-simple__btn-icon"})}):Object(u.jsx)(b.Link,{className:"bi-paginate-simple__btn bi-paginate-simple__btn--next bi-btn--flat",to:this.props.getPageUrl(e-1),children:Object(u.jsx)(p.m,{className:"bi-paginate-simple__btn-icon"})})]}):null}}]),n}(l.a.Component)},232:function(e,t,n){},249:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var i=n(11),s=n(12),a=n(14),c=n(13),r=n(36),l=n.n(r),o=n(0),b=n.n(o),p=n(33),u=(n(250),n(2)),m=function(e){Object(a.a)(n,e);var t=Object(c.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{className:"bi-limit-selector",children:[Object(u.jsx)("span",{className:"bi-limit-selector__label",children:this.props.label}),this.props.items.map((function(t,n){var i=l()({"bi-btn":!0,"bi-btn--flat":!0,"bi-limit-selector__item":!0,"bi-limit-selector__item--selected":t===e.props.selected});return Object(u.jsx)(p.Link,{className:i,to:e.props.getLimitLink(t),children:t},n)}))]})}}]),n}(b.a.PureComponent)},250:function(e,t,n){},643:function(e,t,n){},644:function(e,t,n){},667:function(e,t,n){"use strict";n.r(t);var i=n(3),s=n(11),a=n(12),c=n(17),r=n(14),l=n(13),o=n(54),b=n.n(o),p=n(0),u=n.n(p),m=n(78),d=n.n(m),h=n(28),f=n(29),j=n(24),_=n(249),g=n(231),O=n(20),x=n(221),k=n(215),v=function(){function e(){Object(s.a)(this,e)}return Object(a.a)(e,null,[{key:"apiUrl",get:function(){return"".concat(O.a.apiUrl)}},{key:"getAllIssuedTokens",value:function(e,t){var n=t.limit,i=t.offset;return Object(x.a)(k.b,{method:"get",url:"https://api.ergoplatform.com/api/v1/tokens",params:{limit:n,offset:i}},{dispatch:e})}},{key:"getTotalIssuedTokens",value:function(e,t){var n=t.limit;return Object(x.a)(k.e,{method:"get",url:"https://api.ergoplatform.com/api/v1/tokens",params:{limit:n}},{dispatch:e})}},{key:"getIssuedTokensById",value:function(t,n){return Object(x.a)(k.c,{method:"get",url:"".concat(e.apiUrl,"/tokens/").concat(n,"/issuingBox")},{dispatch:t})}}]),e}(),y=n(101),N={getTokens:function(e){return function(t){return v.getAllIssuedTokens(t,e).then((function(n){t({payload:{offset:e.offset||0},type:y.a})}))}}},w=n(77),T=function(e){return Object(w.getStruct)(k.b)(e)},P=n(45),L=n.n(P),S=n(81),W=n(6),E=n.n(W),C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function U(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function M(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var R=function(e){function t(){var e;U(this,t);for(var n=arguments.length,i=Array(n),s=0;s<n;s++)i[s]=arguments[s];var a=M(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i)));return a.state={},a.styles={ellipsis:{position:"fixed",visibility:"hidden",top:0,left:0}},a.elements={},a.onResize=a.onResize.bind(a),a.onTruncate=a.onTruncate.bind(a),a.calcTargetWidth=a.calcTargetWidth.bind(a),a.measureWidth=a.measureWidth.bind(a),a.getLines=a.getLines.bind(a),a.renderLine=a.renderLine.bind(a),a}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),F(t,[{key:"componentDidMount",value:function(){var e=this.elements.text,t=this.calcTargetWidth,n=this.onResize,i=document.createElement("canvas");this.canvasContext=i.getContext("2d"),t((function(){e&&e.parentNode.removeChild(e)})),window.addEventListener("resize",n)}},{key:"componentDidUpdate",value:function(e){this.props.children!==e.children&&this.forceUpdate(),this.props.width!==e.width&&this.calcTargetWidth()}},{key:"componentWillUnmount",value:function(){var e=this.elements.ellipsis,t=this.onResize,n=this.timeout;e.parentNode.removeChild(e),window.removeEventListener("resize",t),window.cancelAnimationFrame(n)}},{key:"innerText",value:function(e){var t=document.createElement("div"),n="innerText"in window.HTMLElement.prototype?"innerText":"textContent";t.innerHTML=e.innerHTML.replace(/\r\n|\r|\n/g," ");var i=t[n],s=document.createElement("div");return s.innerHTML="foo<br/>bar","foo\nbar"!==s[n].replace(/\r\n|\r/g,"\n")&&(t.innerHTML=t.innerHTML.replace(/<br.*?[\/]?>/gi,"\n"),i=t[n]),i}},{key:"onResize",value:function(){this.calcTargetWidth()}},{key:"onTruncate",value:function(e){var t=this.props.onTruncate;"function"===typeof t&&(this.timeout=window.requestAnimationFrame((function(){t(e)})))}},{key:"calcTargetWidth",value:function(e){var t=this.elements.target,n=this.calcTargetWidth,i=this.canvasContext,s=this.props.width;if(t){var a=s||Math.floor(t.parentNode.getBoundingClientRect().width);if(!a)return window.requestAnimationFrame((function(){return n(e)}));var c=window.getComputedStyle(t),r=[c["font-weight"],c["font-style"],c["font-size"],c["font-family"]].join(" ");i.font=r,this.setState({targetWidth:a},e)}}},{key:"measureWidth",value:function(e){return this.canvasContext.measureText(e).width}},{key:"ellipsisWidth",value:function(e){return e.offsetWidth}},{key:"trimRight",value:function(e){return e.replace(/\s+$/,"")}},{key:"getLines",value:function(){for(var e=this.elements,t=this.props,n=t.lines,i=t.ellipsis,s=t.trimWhitespace,a=this.state.targetWidth,c=this.innerText,r=this.measureWidth,l=this.onTruncate,o=this.trimRight,b=[],p=c(e.text).split("\n").map((function(e){return e.split(" ")})),m=!0,d=this.ellipsisWidth(this.elements.ellipsis),h=1;h<=n;h++){var f=p[0];if(0!==f.length){var j=f.join(" ");if(r(j)<=a&&1===p.length){m=!1,b.push(j);break}if(h===n){for(var _=f.join(" "),g=0,O=_.length-1;g<=O;){var x=Math.floor((g+O)/2);r(_.slice(0,x+1))+d<=a?g=x+1:O=x-1}var k=_.slice(0,g);if(s)for(k=o(k);!k.length&&b.length;){k=o(b.pop())}j=u.a.createElement("span",null,k,i)}else{for(var v=0,y=f.length-1;v<=y;){var N=Math.floor((v+y)/2);r(f.slice(0,N+1).join(" "))<=a?v=N+1:y=N-1}if(0===v){h=n-1;continue}j=f.slice(0,v).join(" "),p[0].splice(0,v)}b.push(j)}else b.push(),p.shift(),h--}return l(m),b}},{key:"renderLine",value:function(e,t,n){if(t===n.length-1)return u.a.createElement("span",{key:t},e);var i=u.a.createElement("br",{key:t+"br"});return e?[u.a.createElement("span",{key:t},e),i]:i}},{key:"render",value:function(){var e=this,t=this.elements.target,n=this.props,i=n.children,s=n.ellipsis,a=n.lines,c=function(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}(n,["children","ellipsis","lines"]),r=this.state.targetWidth,l=this.getLines,o=this.renderLine,b=this.onTruncate,p=void 0;return"undefined"!==typeof window&&!(!t||!r)&&(a>0?p=l().map(o):(p=i,b(!1))),delete c.onTruncate,delete c.trimWhitespace,u.a.createElement("span",C({},c,{ref:function(t){e.elements.target=t}}),u.a.createElement("span",null,p),u.a.createElement("span",{ref:function(t){e.elements.text=t}},i),u.a.createElement("span",{ref:function(t){e.elements.ellipsis=t},style:this.styles.ellipsis},s))}}]),t}(p.Component);R.propTypes={children:E.a.node,ellipsis:E.a.node,lines:E.a.oneOfType([E.a.oneOf([!1]),E.a.number]),trimWhitespace:E.a.bool,width:E.a.number,onTruncate:E.a.func},R.defaultProps={children:"",ellipsis:"\u2026",lines:1,trimWhitespace:!1,width:0};var A=R,z=n(2),I=function(e){var t=e.children,n=e.lines,i=Object(p.useState)(!1),s=Object(S.a)(i,2),a=s[0],c=s[1],r=Object(p.useState)(!1),l=Object(S.a)(r,2),o=l[0],b=l[1],u=Object(z.jsxs)(z.Fragment,{children:[!a&&"...",Object(z.jsx)("br",{}),Object(z.jsx)("a",{href:"#!",onClick:function(e){e.preventDefault(),c(!a)},children:Object(z.jsx)(h.a,{id:a?"common.token.showLess":"common.token.showMore"})})]});return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(A,{lines:!a&&n,ellipsis:u,onTruncate:b,children:t}),!o&&a&&u]})},B=(n(643),function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(z.jsx)("div",{className:"bi-blocks-table",children:this.props.tokens?this.renderTable():null})}},{key:"renderTable",value:function(){return Object(z.jsxs)("table",{className:"bi-blocks-table__body bi-table",children:[Object(z.jsx)("thead",{className:"bi-blocks-table-header",children:Object(z.jsxs)("tr",{className:"bi-blocks-table-header bi-blocks-table__row bi-table__row",children:[Object(z.jsx)("th",{className:"bi-blocks-table__cell bi-table__cell",colSpan:1,children:Object(z.jsx)(h.a,{id:"common.token.id"})}),Object(z.jsx)("th",{className:"bi-blocks-table__cell bi-table__cell",colSpan:2,children:Object(z.jsx)(h.a,{id:"common.token.name"})}),Object(z.jsx)("th",{className:"bi-blocks-table__cell bi-table__cell",colSpan:1,children:Object(z.jsx)(h.a,{id:"common.token.amount"})}),Object(z.jsx)("th",{className:"bi-blocks-table__cell bi-table__cell",colSpan:1,children:Object(z.jsx)(h.a,{id:"common.token.decimals"})}),Object(z.jsx)("th",{className:"bi-blocks-table__cell bi-table__cell",colSpan:3,children:Object(z.jsx)(h.a,{id:"common.token.description"})})]})}),Object(z.jsx)("tbody",{children:this.props.tokens.map((function(e){return Object(z.jsxs)("tr",{className:"bi-blocks-table__row bi-table__row",children:[Object(z.jsxs)("td",{className:"bi-blocks-table__cell bi-table__cell bi-tokens-table__cell",colSpan:1,children:[Object(z.jsx)("div",{className:"bi-blocks-table__cell-name bi-tokens-table__cell-name",children:Object(z.jsx)(h.a,{id:"common.token.id"})}),Object(z.jsx)("input",{className:"bi-tokens-table__input",type:"text",value:e.id,readOnly:!0})]}),Object(z.jsxs)("td",{className:"bi-blocks-table__cell bi-table__cell  bi-tokens-table__cell",colSpan:2,children:[Object(z.jsx)("div",{className:"bi-blocks-table__cell-name bi-tokens-table__cell-name",children:Object(z.jsx)(h.a,{id:"common.token.name"})}),e.name]}),Object(z.jsxs)("td",{className:"bi-blocks-table__cell bi-table__cell  bi-tokens-table__cell",colSpan:1,children:[Object(z.jsx)("div",{className:"bi-blocks-table__cell-name bi-tokens-table__cell-name",children:Object(z.jsx)(h.a,{id:"common.token.amount"})}),Object(z.jsx)("input",{className:"bi-tokens-table__input",type:"text",value:L()({integerSeparator:" "})(e.emissionAmount),readOnly:!0})]}),Object(z.jsxs)("td",{className:"bi-blocks-table__cell bi-table__cell  bi-tokens-table__cell",colSpan:1,children:[Object(z.jsx)("div",{className:"bi-blocks-table__cell-name bi-tokens-table__cell-name",children:Object(z.jsx)(h.a,{id:"common.token.decimals"})}),e.decimals]}),Object(z.jsxs)("td",{className:"bi-blocks-table__cell bi-table__cell  bi-tokens-table__cell",colSpan:3,children:[Object(z.jsx)("div",{className:"bi-blocks-table__cell-name bi-tokens-table__cell-name",children:Object(z.jsx)(h.a,{id:"common.token.description"})}),Object(z.jsx)("div",{children:Object(z.jsx)(I,{lines:2,children:e.description})})]})]},e.id)}))})]})}}]),n}(u.a.Component)),D=(n(644),function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(e){var i;return Object(s.a)(this,n),(i=t.call(this,e)).params=void 0,i.getPageUrl=i.getPageUrl.bind(Object(c.a)(i)),i.getLimitLink=i.getLimitLink.bind(Object(c.a)(i)),i.params=i.getParams(),i}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.reloadTokens(this.params)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=this.getParams();JSON.stringify(t)!==JSON.stringify(this.params)&&(this.params=t,this.reloadTokens(this.params))}},{key:"render",value:function(){return Object(z.jsxs)("div",{className:"bi-data g-flex-column g-flex-column__item-fixed",children:[Object(z.jsx)(h.a,{id:"common.pages.issued-tokens.title",children:function(e){return Object(z.jsx)(d.a,{children:Object(z.jsx)("title",{children:e})})}}),Object(z.jsx)("div",{className:"bi-data__header g-flex-column__item-fixed g-flex",children:Object(z.jsx)("div",{className:"bi-data__title g-flex__item",children:Object(z.jsx)(h.a,{id:"components.issued-tokens.title"})})}),this.props.tokens.isFetching&&Object(z.jsx)("p",{className:"base-text",children:"Fetching Data..."}),this.props.tokens.data&&0===this.props.tokens.data.total&&Object(z.jsx)("div",{className:"bi-data__body g-flex-column__item-fixed",children:Object(z.jsx)(h.a,{id:"components.data.wrong-query"})}),!this.props.tokens.isFetching&&null!==this.props.tokens.data&&this.props.tokens.data.items.length>0&&Object(z.jsx)("div",{className:"bi-data__body g-flex-column__item-fixed",children:Object(z.jsx)(B,{tokens:this.props.tokens.data.items,isFetching:this.props.tokens.isFetching})}),null!==this.props.tokens.data&&this.props.tokens.data.items.length>0&&Object(z.jsxs)("div",{className:"bi-data__footer g-flex-column__item-fixed g-flex",children:[Object(z.jsx)("div",{className:"g-flex__item-fixed",children:Object(z.jsx)(_.a,{items:[30,60,120],selected:this.params.limit,label:Object(z.jsx)(h.a,{id:"components.data.show"}),getLimitLink:this.getLimitLink})}),Object(z.jsx)("div",{className:"g-flex__item-fixed",children:Object(z.jsx)(g.a,{total:this.props.tokens.data.total,limit:this.params.limit,getPageUrl:this.getPageUrl,forcePage:Math.floor(this.props.offset/this.params.limit)})})]})]})}},{key:"getPageUrl",value:function(e){var t=b.a.parse(this.props.history.location.search);return t.offset=e*this.params.limit,"/issued-tokens?".concat(b.a.stringify(t))}},{key:"getLimitLink",value:function(e){var t=b.a.parse(this.props.history.location.search);return t.limit=e,"/issued-tokens?".concat(b.a.stringify(t))}},{key:"reloadTokens",value:function(e){e=Object(i.a)(Object(i.a)(Object(i.a)({},this.params),e),{},{limit:e.limit||30,offset:e.offset||0}),Object.keys(e).forEach((function(t){null===e[t]&&delete e[t]})),this.props.getTokens(e),0===e.offset&&delete e.offset,30===e.limit&&delete e.limit,this.props.history.push("/issued-tokens?".concat(b.a.stringify(e)))}},{key:"getParams",value:function(){var e=b.a.parse(this.props.history.location.search),t=e.offset,n=e.limit;return t=parseInt(t,10),{limit:n=parseInt(n,10)||30,offset:t||0}}}]),n}(u.a.PureComponent)),H=Object(f.b)((function(e){return{tokens:T(e),offset:e.tokens.offset}}),(function(e){return Object(j.bindActionCreators)(Object(i.a)({},N),e)}))(D);t.default=H}}]);
//# sourceMappingURL=13.ab03d73f.chunk.js.map