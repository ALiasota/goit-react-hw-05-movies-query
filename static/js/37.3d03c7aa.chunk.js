"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[37],{7037:function(r,t,e){e.r(t),e.d(t,{default:function(){return o}});var n=e(885),a=e(2791),u=e(501),c=e(1668),s=e(184);function o(){var r=(0,a.useState)(""),t=(0,n.Z)(r,2),e=t[0],o=t[1],i=(0,a.useState)([]),p=(0,n.Z)(i,2),l=p[0],f=p[1],h=(0,u.lr)(),v=(0,n.Z)(h,2),d=v[0],m=v[1];(0,a.useEffect)((function(){var r=d.get("query");r&&(0,c.qF)(r).then((function(r){var t=r.results;return f(t)}))}));return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("form",{style:{margin:20},className:"search-form",onSubmit:function(r){r.preventDefault();var t=e.trim();""!==t?(m({query:t}),(0,c.qF)(t).then((function(r){var t=r.results;return f(t)}))):alert("Empty")},children:[(0,s.jsx)("input",{type:"text",name:"find",size:"20",autoComplete:"off",onChange:function(r){o(r.currentTarget.value)}}),(0,s.jsx)("button",{style:{margin:10,cursor:"pointer"},type:"submit",children:"Search"})]}),l&&(0,s.jsx)("ul",{children:l.map((function(r){var t=r.id,e=r.original_title;return(0,s.jsx)("li",{children:(0,s.jsx)(u.rU,{to:"".concat(t),children:e})},t)}))})]})}},1668:function(r,t,e){e.d(t,{Cm:function(){return y},jf:function(){return d},pv:function(){return i},qF:function(){return l},sO:function(){return h}});var n=e(5861),a=e(7757),u=e.n(a),c=e(4569),s=e.n(c);s().defaults.baseURL="https://api.themoviedb.org/3/";var o="067f291d21ed1c6d30bd9ade17d843cc";function i(){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(u().mark((function r(){var t,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t={api_key:o},r.prev=1,r.next=4,s()("trending/movie/day",{params:t});case 4:return e=r.sent,r.abrupt("return",e.data);case 8:r.prev=8,r.t0=r.catch(1),console.error(r.t0);case 11:case"end":return r.stop()}}),r,null,[[1,8]])})))).apply(this,arguments)}function l(){return f.apply(this,arguments)}function f(){return f=(0,n.Z)(u().mark((function r(){var t,e,n,a=arguments;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",e={api_key:o,query:t},r.prev=2,r.next=5,s()("search/movie",{params:e});case 5:return n=r.sent,r.abrupt("return",n.data);case 9:r.prev=9,r.t0=r.catch(2),console.error(r.t0);case 12:case"end":return r.stop()}}),r,null,[[2,9]])}))),f.apply(this,arguments)}function h(){return v.apply(this,arguments)}function v(){return v=(0,n.Z)(u().mark((function r(){var t,e,n,a=arguments;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",e={api_key:o},r.prev=2,r.next=5,s()("movie/".concat(t),{params:e});case 5:return n=r.sent,r.abrupt("return",n.data);case 9:r.prev=9,r.t0=r.catch(2),console.error(r.t0);case 12:case"end":return r.stop()}}),r,null,[[2,9]])}))),v.apply(this,arguments)}function d(){return m.apply(this,arguments)}function m(){return m=(0,n.Z)(u().mark((function r(){var t,e,n,a=arguments;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",e={api_key:o},r.prev=2,r.next=5,s()("movie/".concat(t,"/credits"),{params:e});case 5:return n=r.sent,r.abrupt("return",n.data);case 9:r.prev=9,r.t0=r.catch(2),console.error(r.t0);case 12:case"end":return r.stop()}}),r,null,[[2,9]])}))),m.apply(this,arguments)}function y(){return x.apply(this,arguments)}function x(){return x=(0,n.Z)(u().mark((function r(){var t,e,n,a=arguments;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",e={api_key:o},r.prev=2,r.next=5,s()("movie/".concat(t,"/reviews"),{params:e});case 5:return n=r.sent,r.abrupt("return",n.data);case 9:r.prev=9,r.t0=r.catch(2),console.error(r.t0);case 12:case"end":return r.stop()}}),r,null,[[2,9]])}))),x.apply(this,arguments)}}}]);
//# sourceMappingURL=37.3d03c7aa.chunk.js.map