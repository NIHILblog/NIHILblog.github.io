(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"2Xj4":function(e,t,n){"use strict";t.a={7:"32pt",6:"22pt",5:"18pt",4:"16pt",3:"14pt",2:"12pt",1.5:"11pt",1:"10pt"}},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),u=n("FYa8"),c=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var u=o.key.slice(o.key.indexOf("$")+1);e.has(u)?a=!1:e.add(u)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,s=d.length;c<s;c++){var l=d[c];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var f=o.props[l],p=r[l]||new Set;"name"===l&&i||!p.has(f)?(p.add(f),r[l]=p):a=!1}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),o=n("/GRZ"),a=n("i2R6"),i=(n("qXWd"),n("48fX")),u=n("tCBg"),c=n("T0f4");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("zoAU"),o=n("7KCV");t.__esModule=!0,t.default=void 0;var a=o(n("q1tI")),i=n("elyg"),u=n("nOHt"),c=n("vNVm"),s={};function l(e,t,n,r){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,u.useRouter)(),o=n&&n.pathname||"/",f=a.default.useMemo((function(){var t=(0,i.resolveHref)(o,e.href,!0),n=r(t,2),a=n[0],u=n[1];return{href:a,as:e.as?(0,i.resolveHref)(o,e.as):u||a}}),[o,e.href,e.as]),d=f.href,p=f.as,h=e.children,m=e.replace,v=e.shallow,g=e.scroll,y=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var b=a.Children.only(h),M=b&&"object"===typeof b&&b.ref,x=(0,c.useIntersection)({rootMargin:"200px"}),w=r(x,2),k=w[0],_=w[1],C=a.default.useCallback((function(e){k(e),M&&("function"===typeof M?M(e):"object"===typeof M&&(M.current=e))}),[M,k]);(0,a.useEffect)((function(){var e=_&&t&&(0,i.isLocalURL)(d),r="undefined"!==typeof y?y:n&&n.locale,o=s[d+"%"+p+(r?"%"+r:"")];e&&!o&&l(n,d,p,{locale:r})}),[p,d,_,y,t,n]);var I={ref:C,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,u,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:u}))}(e,n,d,p,m,v,g,y)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),l(n,d,p,{priority:!0}))}};if(e.passHref||"a"===b.type&&!("href"in b.props)){var S="undefined"!==typeof y?y:n&&n.locale,A=n&&n.isLocaleDomain&&(0,i.getDomainLocale)(p,S,n&&n.locales,n&&n.domainLocales);I.href=A||(0,i.addBasePath)((0,i.addLocale)(p,S,n&&n.defaultLocale))}return a.default.cloneElement(b,I)};t.default=f},g4pe:function(e,t,n){e.exports=n("8Kt/")},ig33:function(e,t,n){"use strict";var r=n("kiQV"),o={title:"\ub2c8\ud790 \ube14\ub85c\uadf8",description:"\ube14\ub85c\uadf8\ub97c \uc6b4\uc601\ud560 \ud544\uc694\ub97c \ub290\uaf08\uc73c\ub098 \ub124\uc774\ubc84\ub098 \ud2f0\uc2a4\ud1a0\ub9ac\uc5d0 \uc9c8\ub824\uc11c \uc9c1\uc811 Next.js\ub85c \uac1c\ubc1c\ud55c \ube14\ub85c\uadf8\uc774\uace0, HTML, CSS, JavaScript \uae30\uc220\uc744 \uc774\uc6a9\ud55c \uc6f9 \uac1c\ubc1c \uc704\uc8fc\uc758 \ud504\ub85c\uadf8\ub798\ubc0d\uacfc \uc77c\ubcf8\uc5b4 \ud559\uc2b5\uc790\ub8cc, \uadf8\ub9ac\uace0 \uac8c\uc784 \uad00\ub828\ub41c \ucee8\ud150\uce20\ub97c \ub2e4\ub8e8\ub294 \ube14\ub85c\uadf8\uc785\ub2c8\ub2e4.",author:"NIHILncunia",generator:"Visual Studio Code",keywords:"\ube14\ub85c\uadf8, \ucf54\ub529, \ud504\ub85c\uadf8\ub798\ubc0d, \uc6f9 \ud504\ub85c\uadf8\ub798\ubc0d, Blog, Coding, Programing, Web programing, \uc77c\ubcf8\uc5b4, \uc77c\ubcf8\uc5b4 \uacf5\ubd80, \uac8c\uc784, \uac8c\uc784 \uc815\ubcf4, Japanese, Japanese learning, Game, Game play",siteURL:"https://nihilblog.github.io",siteImage:"/images/blog-image.png",siteType:"website",version:r.version,year:(new Date).getFullYear(),postPerPage:5};t.a=o},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},kiQV:function(e){e.exports=JSON.parse('{"name":"nihilblog","version":"2.5.0","description":"\ub2c8\ud790 \ube14\ub85c\uadf8 Next.js \uc5d0\ub514\uc158","main":"src/pages/index.jsx","repository":{"type":"git","url":"git+https://github.com/nihilblog/nihilblog.git"},"bugs":{"url":"https://github.com/nihilblog/nihilblog/issues"},"homepage":"https://github.com/nihilblog/nihilblog#readme","scripts":{"serve":"rm -rf node_modules/.cache && rm -rf build/ && next dev","start":"next start","build":"rm -rf node_modules/.cache && rm -rf build/ && next build","export":"rm -rf node_modules/.cache && rm -rf build/ && next build && next export -o nihilblog.github.io/ && touch nihilblog.github.io/.nojekyll"},"keywords":[],"author":"NIHILncunia","license":"MIT","dependencies":{"@emotion/react":"^11.1.5","@emotion/styled":"^11.3.0","@next/mdx":"^10.1.3","gray-matter":"^4.0.3","next":"^10.1.3","next-mdx-remote":"^2.1.4","prettier":"^2.2.1","prop-types":"^15.7.2","react":"^17.0.2","react-dom":"^17.0.2","remark-unwrap-images":"^2.0.0","uuid":"^8.3.2"},"devDependencies":{"@babel/core":"^7.13.16","@emotion/babel-plugin":"^11.3.0","@emotion/babel-preset-css-prop":"^11.2.0","@mdx-js/loader":"^1.6.22","eslint":"^7.25.0","eslint-plugin-import":"^2.22.1","eslint-plugin-react":"^7.23.2","eslint-plugin-react-hooks":"^4.2.0"}}')},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},mPvQ:function(e,t,n){var r=n("5fIB"),o=n("rlHP"),a=n("KckH"),i=n("kG2m");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},vNVm:function(e,t,n){"use strict";var r=n("zoAU");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,c=(0,o.useRef)(),s=(0,o.useState)(!1),l=r(s,2),f=l[0],d=l[1],p=(0,o.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),n||f||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=u.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return u.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){if(!i&&!f){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=n("q1tI"),a=n("0G5g"),i="undefined"!==typeof IntersectionObserver;var u=new Map}}]);