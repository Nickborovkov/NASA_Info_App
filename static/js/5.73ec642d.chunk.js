(this.webpackJsonpEarth_Data=this.webpackJsonpEarth_Data||[]).push([[5],{250:function(e,t,n){e.exports={form:"formsStylesMedia_form__1C2i4"}},251:function(e,t,n){e.exports={modalImage:"commonStyles_modalImage__2f9nz",video:"commonStyles_video__NSDi7"}},252:function(e,t,n){"use strict";t.a=n.p+"static/media/imagePlaceholder.d121e487.jpg"},253:function(e,t,n){"use strict";n(1);var r=n(254),o=n.n(r),a=n(4),i=n.n(a),c=n(2);t.a=function(e){var t=e.active,n=e.setActive,r=e.children;return Object(c.jsx)("div",{className:i()(o.a.modalBody,t&&o.a.activeBody),onClick:function(){n(!1)},children:Object(c.jsx)("div",{className:o.a.modalContent,onClick:function(e){e.stopPropagation()},children:r})})}},254:function(e,t,n){e.exports={modalBody:"modalWindow_modalBody__37t9c"}},255:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.forceVisible=t.forceCheck=t.lazyload=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),a=d(o),i=d(n(36)),c=n(256),s=d(n(257)),l=d(n(258)),u=d(n(259));function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function m(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var h=0,v=0,b=0,j=0,g="data-lazyload-listened",y=[],_=[],O=!1;try{var w=Object.defineProperty({},"passive",{get:function(){O=!0}});window.addEventListener("test",null,w)}catch(k){}var E=!!O&&{capture:!1,passive:!0},x=function(e){var t=e.ref;if(t instanceof HTMLElement){var n=(0,s.default)(t);(e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?function(e,t){var n=e.ref,r=void 0,o=void 0,a=void 0,i=void 0;try{var c=t.getBoundingClientRect();r=c.top,o=c.left,a=c.height,i=c.width}catch(k){r=h,o=v,a=j,i=b}var s=window.innerHeight||document.documentElement.clientHeight,l=window.innerWidth||document.documentElement.clientWidth,u=Math.max(r,0),d=Math.max(o,0),f=Math.min(s,r+a)-u,p=Math.min(l,o+i)-d,m=void 0,g=void 0,y=void 0,_=void 0;try{var O=n.getBoundingClientRect();m=O.top,g=O.left,y=O.height,_=O.width}catch(k){m=h,g=v,y=j,_=b}var w=m-u,E=g-d,x=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return w-x[0]<=f&&w+y+x[1]>=0&&E-x[0]<=p&&E+_+x[1]>=0}(e,n):function(e){var t=e.ref;if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,r=void 0;try{var o=t.getBoundingClientRect();n=o.top,r=o.height}catch(k){n=h,r=j}var a=window.innerHeight||document.documentElement.clientHeight,i=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-i[0]<=a&&n+r+i[1]>=0}(e))?e.visible||(e.props.once&&_.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},N=function(){_.forEach((function(e){var t=y.indexOf(e);-1!==t&&y.splice(t,1)})),_=[]},I=function(){for(var e=0;e<y.length;++e){var t=y[e];x(t)}N()},C=void 0,D=null,P=function(e){function t(e){f(this,t);var n=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n.setRef=n.setRef.bind(n),n}return m(t,e),r(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"===typeof t&&(e=e.document.querySelector(t));var n=void 0!==this.props.debounce&&"throttle"===C||"debounce"===C&&void 0===this.props.debounce;if(n&&((0,c.off)(e,"scroll",D,E),(0,c.off)(window,"resize",D,E),D=null),D||(void 0!==this.props.debounce?(D=(0,l.default)(I,"number"===typeof this.props.debounce?this.props.debounce:300),C="debounce"):void 0!==this.props.throttle?(D=(0,u.default)(I,"number"===typeof this.props.throttle?this.props.throttle:300),C="throttle"):D=I),this.props.overflow){var r=(0,s.default)(this.ref);if(r&&"function"===typeof r.getAttribute){var o=+r.getAttribute(g)+1;1===o&&r.addEventListener("scroll",D,E),r.setAttribute(g,o)}}else if(0===y.length||n){var a=this.props,i=a.scroll,d=a.resize;i&&(0,c.on)(e,"scroll",D,E),d&&(0,c.on)(window,"resize",D,E)}y.push(this),x(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,s.default)(this.ref);if(e&&"function"===typeof e.getAttribute){var t=+e.getAttribute(g)-1;0===t?(e.removeEventListener("scroll",D,E),e.removeAttribute(g)):e.setAttribute(g,t)}}var n=y.indexOf(this);-1!==n&&y.splice(n,1),0===y.length&&"undefined"!==typeof window&&((0,c.off)(window,"resize",D,E),(0,c.off)(window,"scroll",D,E))}},{key:"setRef",value:function(e){e&&(this.ref=e)}},{key:"render",value:function(){var e=this.props,t=e.height,n=e.children,r=e.placeholder,o=e.className,i=e.classNamePrefix,c=e.style;return a.default.createElement("div",{className:i+"-wrapper "+o,ref:this.setRef,style:c},this.visible?n:r||a.default.createElement("div",{style:{height:t},className:i+"-placeholder"}))}}]),t}(o.Component);P.propTypes={className:i.default.string,classNamePrefix:i.default.string,once:i.default.bool,height:i.default.oneOfType([i.default.number,i.default.string]),offset:i.default.oneOfType([i.default.number,i.default.arrayOf(i.default.number)]),overflow:i.default.bool,resize:i.default.bool,scroll:i.default.bool,children:i.default.node,throttle:i.default.oneOfType([i.default.number,i.default.bool]),debounce:i.default.oneOfType([i.default.number,i.default.bool]),placeholder:i.default.node,scrollContainer:i.default.oneOfType([i.default.string,i.default.object]),unmountIfInvisible:i.default.bool,style:i.default.object},P.defaultProps={className:"",classNamePrefix:"lazyload",once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var A=function(e){return e.displayName||e.name||"Component"};t.lazyload=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function o(){f(this,o);var e=p(this,(o.__proto__||Object.getPrototypeOf(o)).call(this));return e.displayName="LazyLoad"+A(t),e}return m(o,n),r(o,[{key:"render",value:function(){return a.default.createElement(P,e,a.default.createElement(t,this.props))}}]),o}(o.Component)}},t.default=P,t.forceCheck=I,t.forceVisible=function(){for(var e=0;e<y.length;++e){var t=y[e];t.visible=!0,t.forceUpdate()}N()}},256:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,n,r){r=r||!1,e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on"+t,(function(t){n.call(e,t||window.event)}))},t.off=function(e,t,n,r){r=r||!1,e.removeEventListener?e.removeEventListener(t,n,r):e.detachEvent&&e.detachEvent("on"+t,n)}},257:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,r=e;r;){if(!r.parentNode)return e.ownerDocument||document.documentElement;var o=window.getComputedStyle(r),a=o.position,i=o.overflow,c=o["overflow-x"],s=o["overflow-y"];if("static"===a&&t)r=r.parentNode;else{if(n.test(i)&&n.test(c)&&n.test(s))return r;r=r.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},258:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var r=void 0,o=void 0,a=void 0,i=void 0,c=void 0,s=function s(){var l=+new Date-i;l<t&&l>=0?r=setTimeout(s,t-l):(r=null,n||(c=e.apply(a,o),r||(a=null,o=null)))};return function(){a=this,o=arguments,i=+new Date;var l=n&&!r;return r||(r=setTimeout(s,t)),l&&(c=e.apply(a,o),a=null,o=null),c}}},259:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var r,o;return t||(t=250),function(){var a=n||this,i=+new Date,c=arguments;r&&i<r+t?(clearTimeout(o),o=setTimeout((function(){r=i,e.apply(a,c)}),t)):(r=i,e.apply(a,c))}}},269:function(e,t,n){e.exports={earthImage:"earthEpic_earthImage__2qE22",title:"earthEpic_title__2gYBL",imageHolder:"earthEpic_imageHolder__2gJCY",image:"earthEpic_image__jwtX6",imageDate:"earthEpic_imageDate__263bY",params:"earthEpic_params__11k7H",imagesArray:"earthEpic_imagesArray__2TGuz",imagesItem:"earthEpic_imagesItem__AzvZJ"}},270:function(e,t,n){e.exports={imagesItem:"earthEpicMedia_imagesItem__1Aj5J",title:"earthEpicMedia_title__317_n"}},277:function(e,t,n){"use strict";n.r(t);var r=n(31),o=n(1),a=n(269),i=n.n(a),c=n(270),s=n.n(c),l=n(251),u=n.n(l),d=n(4),f=n.n(d),p=n(27),m=n(82),h=n(78),v=n(60),b=n.n(v),j=n(250),g=n.n(j),y=n(61),_=n(77),O=n(76),w=n(32),E=n(10),x=n(2),N=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.errors.error})),n=y.b().shape({selectedDate:y.c().required("Date required")});return Object(x.jsx)("div",{children:Object(x.jsx)(_.a,{initialValues:{selectedDate:""},validateOnBlur:!0,onSubmit:function(t){e(Object(m.c)(t.selectedDate)),e(Object(E.b)(null))},validationSchema:n,children:function(e){var n=e.values,r=e.touched,o=e.errors,a=e.handleSubmit,i=e.handleBlur,c=e.handleChange,s=e.isValid,l=e.dirty;return Object(x.jsxs)("form",{className:f()(b.a.form,g.a.form),children:[Object(x.jsx)("h3",{className:b.a.title,children:"Set exact date"}),Object(x.jsx)("div",{className:b.a.inputsHolder,children:Object(O.b)(b.a.formSubtitle,"Date",r.selectedDate,o.selectedDate,b.a.input,"date","selectedDate","2015-06-13",w.a,c,i,n.selectedDate)}),Object(O.a)(b.a.formButton,s,l,a,"Show"),t&&Object(x.jsx)("h3",{className:b.a.errorCase,children:"Not available, please change date"})]})}})})},I=n(7),C=function(e,t){var n=e.split("-"),r={year:n[0],month:n[1],date:n[2]};return"https://api.nasa.gov/EPIC/archive/natural/".concat(r.year,"/").concat(r.month,"/").concat(r.date,"/png/").concat(t,".png?api_key=").concat("ZWGiTATMzPHjpsUJSj289aerwaSsLpikIiYBhaek")},D=n(252),P=n(255),A=n.n(P),k=n(253);t.default=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.earthImage.earthImage})),n=Object(p.c)((function(e){return e.earthImage.date})),a=Object(p.c)((function(e){return e.library.searchStart})),c=Object(p.c)((function(e){return e.errors.error})),l=Object(o.useState)(!1),d=Object(r.a)(l,2),v=d[0],b=d[1],j=Object(o.useState)(""),g=Object(r.a)(j,2),y=g[0],_=g[1];return Object(o.useEffect)((function(){e(Object(m.b)(n))}),[e,n]),Object(o.useEffect)((function(){e(Object(E.b)(null))}),[e]),a?Object(x.jsx)(I.a,{to:"/nasaLibrary"}):Object(x.jsxs)("div",{className:i.a.earthImage,children:[Object(x.jsx)("h2",{className:f()(i.a.title,s.a.title),children:"Earth Polychromatic Imaging Camera Photos"}),Object(x.jsx)(N,{}),!t&&!c&&Object(x.jsx)(h.a,{}),t&&!c&&Object(x.jsxs)("div",{className:i.a.imagesArray,children:[t.map((function(e){return Object(x.jsx)("div",{className:f()(i.a.imagesItem,s.a.imagesItem),children:Object(x.jsx)(A.a,{height:300,children:Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{children:[Object(x.jsxs)("h3",{className:i.a.imageDate,children:["Date: ",e.date]}),Object(x.jsxs)("p",{className:i.a.params,children:["Latitude: ",e.centroid_coordinates.lat]}),Object(x.jsxs)("p",{className:i.a.params,children:["Longitude: ",e.centroid_coordinates.lon]})]}),Object(x.jsx)("div",{className:i.a.imageHolder,children:Object(x.jsx)("img",{className:i.a.image,src:C(n,e.image),alt:"earthImage",onClick:function(e){b(!0),_(e.currentTarget.src)},onError:function(e){e.target.src=D.a}})})]})})},e.identifier)})),v&&Object(x.jsx)(k.a,{active:v,setActive:b,children:Object(x.jsx)("img",{className:f()(u.a.modalImage),src:y,alt:"modal"})})]})]})}}}]);
//# sourceMappingURL=5.73ec642d.chunk.js.map