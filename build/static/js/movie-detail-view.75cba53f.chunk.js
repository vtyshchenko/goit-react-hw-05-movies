(this["webpackJsonpgoit-react-hw-05-movies-vtyshchenko"]=this["webpackJsonpgoit-react-hw-05-movies-vtyshchenko"]||[]).push([[3],{33:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},34:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(33);function c(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},35:function(e,t,n){e.exports={link:"views_link__1JgOK",activeLink:"views_activeLink__1m2DT views_link__1JgOK",isBold:"views_isBold__2Ydo4",goBack:"views_goBack__1AGvj",title:"views_title__3UpWu",movieInfo:"views_movieInfo__1Sf4L",moviePoster:"views_moviePoster__Znnxk",movieData:"views_movieData__1dm-O",movieTitile:"views_movieTitile__23JPB",movieText:"views_movieText__yfDGx",addInfo:"views_addInfo__KIk7R",castList:"views_castList__C9f6w",castInfo:"views_castInfo__1NXji",castsData:"views_castsData__LVGft",castsText:"views_castsText__P4rvL",reviewList:"views_reviewList__1mPPM",itemPoster:"views_itemPoster__ZWRgs",reviewAvatar:"views_reviewAvatar__JWOB7",reviewInfo:"views_reviewInfo__15omb",find:"views_find__2Qz-s"}},36:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(34);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,c=!1,i=void 0;try{for(var o,a=e[Symbol.iterator]();!(r=(o=a.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(u){c=!0,i=u}finally{try{r||null==a.return||a.return()}finally{if(c)throw i}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},37:function(e,t,n){"use strict";function r(){var e=localStorage.getItem("language");return e||(function(e){localStorage.setItem("language",String(e))}("en-US"),"en-US")}n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return a})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return l}));var c="https://api.themoviedb.org/3",i="7cb7f2a84f35ebc2678afebafcd2cb5f";function o(e){var t=r();return fetch("".concat(c,"/trending/movie/day?api_key=").concat(i,"&page=").concat(e,"&language=").concat(t)).then((function(e){return e.json()}))}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=r();return t||(t=1),fetch("".concat(c,"/search/movie?api_key=").concat(i,"&query=").concat(e,"&language=").concat(n,"&page=").concat(t,"&include_adult=false")).then((function(e){return e.json()}))}function u(e){var t=r();return fetch("".concat(c,"/movie/").concat(e,"?api_key=").concat(i,"&language=").concat(t)).then((function(e){return e.json()}))}function s(e){var t=r();return fetch("".concat(c,"/movie/").concat(e,"/credits?api_key=").concat(i,"&language=").concat(t)).then((function(e){return e.json()}))}function l(e,t){var n=r();return t||(t=1),fetch("".concat(c,"/movie/").concat(e,"/reviews?api_key=").concat(i,"&page=").concat(t,"&language=").concat(n)).then((function(e){return e.json()}))}},41:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var c=n(2),i=r(n(0)),o=n(3);n(6),n(8);var a=r(n(4));function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){e.prototype=Object.create(t.prototype),l(e.prototype.constructor=e,t)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],0<=t.indexOf(n)||(c[n]=e[n]);return c}var v=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))||this).history=o.createBrowserHistory(t.props),t}return s(t,e),t.prototype.render=function(){return i.createElement(c.Router,{history:this.history,children:this.props.children})},t}(i.Component),d=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))||this).history=o.createHashHistory(t.props),t}return s(t,e),t.prototype.render=function(){return i.createElement(c.Router,{history:this.history,children:this.props.children})},t}(i.Component),h=function(e,t){return"function"==typeof e?e(t):e},m=function(e,t){return"string"==typeof e?o.createLocation(e,null,null,t):e},p=function(e){return e},j=i.forwardRef;void 0===j&&(j=p);var b=j((function(e,t){var n=e.innerRef,r=e.navigate,c=e.onClick,o=f(e,["innerRef","navigate","onClick"]),a=o.target,s=u({},o,{onClick:function(t){try{c&&c(t)}catch(e){throw t.preventDefault(),e}t.defaultPrevented||0!==t.button||a&&"_self"!==a||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(t)||(t.preventDefault(),r())}});return s.ref=p!==j&&t||n,i.createElement("a",s)})),y=j((function(e,t){var n=e.component,r=void 0===n?b:n,s=e.replace,l=e.to,v=e.innerRef,d=f(e,["component","replace","to","innerRef"]);return i.createElement(c.__RouterContext.Consumer,null,(function(e){e||a(!1);var n=e.history,c=m(h(l,e.location),e.location),f=c?n.createHref(c):"",b=u({},d,{href:f,navigate:function(){var t=h(l,e.location),r=o.createPath(e.location)===o.createPath(m(t));(s||r?n.replace:n.push)(t)}});return p!==j?b.ref=t||v:b.innerRef=v,i.createElement(r,b)}))})),_=function(e){return e},O=i.forwardRef;void 0===O&&(O=_);var g=O((function(e,t){var n=e["aria-current"],r=void 0===n?"page":n,o=e.activeClassName,s=void 0===o?"active":o,l=e.activeStyle,v=e.className,d=e.exact,p=e.isActive,j=e.location,b=e.sensitive,g=e.strict,w=e.style,x=e.to,P=e.innerRef,R=f(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return i.createElement(c.__RouterContext.Consumer,null,(function(e){e||a(!1);var n=j||e.location,o=m(h(x,n),n),f=o.pathname,k=f&&f.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),N=k?c.matchPath(n.pathname,{path:k,exact:d,sensitive:b,strict:g}):null,S=!!(p?p(N,n):N),I="function"==typeof v?v(S):v,L="function"==typeof w?w(S):w;S&&(I=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(I,s),L=u({},L,l));var A=u({"aria-current":S&&r||null,className:I,style:L,to:o},R);return _!==O?A.ref=t||P:A.innerRef=P,i.createElement(y,A)}))}));Object.defineProperty(t,"MemoryRouter",{enumerable:!0,get:function(){return c.MemoryRouter}}),Object.defineProperty(t,"Prompt",{enumerable:!0,get:function(){return c.Prompt}}),Object.defineProperty(t,"Redirect",{enumerable:!0,get:function(){return c.Redirect}}),Object.defineProperty(t,"Route",{enumerable:!0,get:function(){return c.Route}}),Object.defineProperty(t,"Router",{enumerable:!0,get:function(){return c.Router}}),Object.defineProperty(t,"StaticRouter",{enumerable:!0,get:function(){return c.StaticRouter}}),Object.defineProperty(t,"Switch",{enumerable:!0,get:function(){return c.Switch}}),Object.defineProperty(t,"generatePath",{enumerable:!0,get:function(){return c.generatePath}}),Object.defineProperty(t,"matchPath",{enumerable:!0,get:function(){return c.matchPath}}),Object.defineProperty(t,"useHistory",{enumerable:!0,get:function(){return c.useHistory}}),Object.defineProperty(t,"useLocation",{enumerable:!0,get:function(){return c.useLocation}}),Object.defineProperty(t,"useParams",{enumerable:!0,get:function(){return c.useParams}}),Object.defineProperty(t,"useRouteMatch",{enumerable:!0,get:function(){return c.useRouteMatch}}),Object.defineProperty(t,"withRouter",{enumerable:!0,get:function(){return c.withRouter}}),t.BrowserRouter=v,t.HashRouter=d,t.Link=y,t.NavLink=g},47:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var r=n(36),c=n(0),i=n(2),o=n(5),a=n(41),u=n(37),s=n(35),l=n.n(s),f=n(1),v=Object(c.lazy)((function(){return n.e(0).then(n.bind(null,43))})),d=Object(c.lazy)((function(){return n.e(8).then(n.bind(null,44))}));function h(){var e,t,n,s,h,m,p,j,b,y,_=Object(c.useState)(null),O=Object(r.a)(_,2),g=O[0],w=O[1],x=Object(c.useState)(null),P=Object(r.a)(x,2),R=P[0],k=P[1],N=Object(c.useState)(null),S=Object(r.a)(N,2),I=S[0],L=S[1],A=Object(a.useParams)(),C=Object(i.useLocation)(),T=Object(i.useRouteMatch)(),D=T.url,B=T.path;Object(c.useEffect)((function(){Object(u.a)(A.movieId).then(w),Object(u.b)(A.movieId).then(k),Object(u.c)(A.movieId).then(L)}),[]);var E=g&&g.length>0?g.genres.map((function(e){return e.name})).join(", "):"unknown",M=g&&g.length>0?g.production_companies.map((function(e){return e.name})).join(", "):"unknown",H="".concat(null!==(e=null===C||void 0===C||null===(t=C.state)||void 0===t||null===(n=t.from)||void 0===n?void 0:n.pathname)&&void 0!==e?e:"/").concat(null!==(s=null===C||void 0===C||null===(h=C.state)||void 0===h||null===(m=h.from)||void 0===m?void 0:m.search)&&void 0!==s?s:"");return g?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(o.b,{className:l.a.goBack,to:H,children:"\u2190 go back"}),Object(f.jsxs)("div",{className:l.a.movieInfo,children:[Object(f.jsx)("img",{className:l.a.moviePoster,src:"https://image.tmdb.org/t/p/w500".concat(g.poster_path),alt:g.original_title,"min-width":"300px",height:"400px"}),Object(f.jsxs)("div",{className:l.a.movieData,children:[Object(f.jsx)("h1",{className:l.a.title,children:g.original_title}),Object(f.jsx)("h2",{children:"Overview"}),Object(f.jsx)("p",{className:l.a.movieText,children:g.overview}),Object(f.jsx)("h2",{children:"Genres"}),Object(f.jsx)("p",{className:l.a.movieText,children:E}),Object(f.jsx)("h2",{children:"Popularity"}),Object(f.jsx)("p",{className:l.a.movieText,children:g.popularity}),Object(f.jsx)("h2",{children:"Vote (average / count)"}),Object(f.jsxs)("p",{className:l.a.movieText,children:[g.vote_average," / ",g.vote_count]}),Object(f.jsx)("h2",{children:"Release date"}),Object(f.jsx)("p",{className:l.a.movieText,children:g.release_date}),Object(f.jsx)("h2",{children:"Production companies"}),Object(f.jsx)("p",{className:l.a.movieText,children:M})]})]}),Object(f.jsxs)("div",{className:l.a.addInfo,children:[Object(f.jsx)("h2",{children:"Additional information"}),Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)(o.c,{to:{pathname:"".concat(D,"/cast"),state:{from:null!==(p=null===C||void 0===C||null===(j=C.state)||void 0===j?void 0:j.from)&&void 0!==p?p:"/"}},className:l.a.link,activeClassName:l.a.activeLink,children:"Cast"})}),Object(f.jsx)("li",{children:Object(f.jsx)(o.c,{to:{pathname:"".concat(D,"/review"),state:{from:null!==(b=null===C||void 0===C||null===(y=C.state)||void 0===y?void 0:y.from)&&void 0!==b?b:"/"}},className:l.a.link,activeClassName:l.a.activeLink,children:"Reviews"})})]})]}),Object(f.jsxs)(c.Suspense,{fallback:Object(f.jsx)("h1",{children:"LOADING..."}),children:[Object(f.jsx)(i.Route,{path:"".concat(B,"/cast"),children:R&&R.cast&&Object(f.jsx)(v,{casts:R.cast})}),Object(f.jsx)(i.Route,{path:"".concat(B,"/review"),children:I&&Object(f.jsx)(d,{review:I.results})})]})]}):Object(f.jsxs)("p",{children:["No films found on id ",A.movieId]})}},8:function(e,t,n){"use strict";n.r(t);t.default=function(e,t){}}}]);
//# sourceMappingURL=movie-detail-view.75cba53f.chunk.js.map