(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a9757ba8"],{"0576":function(t,e,i){},"13b3":function(t,e,i){},"1add":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-row",{directives:[{name:"resize",rawName:"v-resize",value:t.onResize,expression:"onResize"}],staticClass:"justify-center align-center",attrs:{dense:""}},[i("v-col",{attrs:{cols:"12",md:"12"}},[i("v-carousel",{attrs:{cycle:"","max-height":"720","hide-delimiter-background":"","show-arrows-on-hover":""}},t._l(t.slides,(function(e,n){return i("v-carousel-item",{key:n,staticClass:"text-center",attrs:{src:e.src}},[i("v-sheet",{attrs:{color:"transparent",height:"100%"}},[i("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center",color:"orange"}},[i("div",{class:t.text_size,attrs:{color:"orange"}},[t._v(t._s(e.caption)+" "+t._s(t.windowSize.x))])])],1)],1)})),1)],1),i("v-col",{attrs:{cols:"12",md:"12"}},[i("v-card",{staticClass:"align-center",attrs:{"max-width":"1300"}},[i("v-img",{staticClass:"white--text align-center",attrs:{"height-md":"400px",src:"http://192.168.1.6:9001/image/1.jpg",contain:""}},[i("v-card-title")],1),i("v-card-subtitle",{staticClass:"pb-0"}),i("v-card-text",{staticClass:"text--primary"},[i("div",[t._v("is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")])])],1)],1),i("v-col",{attrs:{cols:"12",md:"4",sm:"12",xs:"12"}},[i("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[i("v-img",{staticClass:"white--text align-end",attrs:{height:"240px",src:"http://192.168.1.6:9001/image/registration.jpg"}},[i("v-card-title",[t._v("College registrations ongoing!")])],1),i("v-card-text",{staticClass:"text--primary"},[i("div",[t._v("Accepting freshmen, transferees, ALS passers and foreign students.")])])],1)],1),i("v-col",{attrs:{cols:"12",md:"4",sm:"12",xs:"12"}},[i("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[i("v-img",{staticClass:"white--text align-end",attrs:{height:"240px",src:"http://192.168.1.6:9001/image/ama_senior_high.jpg"}},[i("v-card-title",[t._v("AMA Senior High")])],1),i("v-card-text",{staticClass:"text--primary"},[i("div",[t._v("Enjot 3 days classes per week through blended learning.")])])],1)],1),i("v-col",{attrs:{cols:"12",md:"4",sm:"12",xs:"12"}},[i("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[i("v-img",{staticClass:"white--text align-end",attrs:{height:"240px",src:"http://192.168.1.6:9001/image/foundation.jpg"}},[i("v-card-title",[t._v("AMA Foundation Launches its donation drive")])],1),i("v-card-text",{staticClass:"text--primary"},[i("div",[t._v("The men of women of AMA Education System (AMAES) headed by its Chairman, Amb. Amable R. Aguiluz and...")])])],1)],1)],1)],1)},s=[],r=i("4360"),a={data:function(){return{windowSize:{x:0,y:0},isLogged:null==r["a"].state.user,imagesNewsEvents:[],colors:["indigo","warning","pink darken-2","red lighten-1","deep-purple accent-4"],slides:[{src:"http://192.168.1.6:9001/image/richard.jpg",caption:"Alden Richards backs 'educational continuity' as AMA's newest Ambassador "},{src:"http://192.168.1.6:9001/image/start_of_school.jpg",caption:"Alden Richards backs 'educational continuity' as AMA's newest Ambassador "},{src:"http://192.168.1.6:9001/image/donates_face_masks.jpg",caption:"COVID 19: AMA Foundation Inc. donates face masks to NRCPO frontliners"}],text_size:"display-2"}},mounted:function(){this.init()},methods:{init:function(){var t=this;axios.get(window.basePath+"/api/news_and_events").then((function(e){t.imagesNewsEvents=e.data.images})).catch((function(t){console.log(t.response.data)})),this.onResize()},onResize:function(){this.windowSize={x:window.innerWidth,y:window.innerHeight},this.windowSize.x>=1120?this.text_size="display-2":this.windowSize.x>=890?this.text_size="display-1":this.text_size="title"}},computed:{user:{get:function(){return r["a"].state.user},set:function(t){return r["a"].state.user=t}}}},o=a,c=(i("28d8"),i("2877")),u=i("6544"),h=i.n(u),l=i("b0af"),d=i("99d9"),v=(i("a9e3"),i("5530")),f=(i("63b7"),i("f665")),m=i("afdd"),p=i("9d26"),g=i("37c6"),w=i("604c"),x=w["a"].extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return w["a"].options.computed.classes.call(this)}},methods:{genData:w["a"].options.methods.genData}}),y=i("80d2"),b=i("d9bd"),C=f["a"].extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return Object(v["a"])({},f["a"].options.computed.classes.call(this),{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(b["a"])("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:f["a"].options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,i=[],n=0;n<e;n++){var s=this.$createElement(m["a"],{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",n+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[n],n)}},[this.$createElement(p["a"],{props:{size:18}},this.delimiterIcon)]);i.push(s)}return this.$createElement(x,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},i)},genProgress:function(){return this.$createElement(g["a"],{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=f["a"].options.render.call(this,t);return e.data.style="height: ".concat(Object(y["f"])(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}}),T=i("1e6c"),_=i("adda"),I=i("58df"),A=i("1c87"),$=Object(I["a"])(T["a"],A["a"]),B=$.extend({name:"v-carousel-item",inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(_["a"],{staticClass:"v-carousel__item",props:Object(v["a"])({},this.$attrs,{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(y["p"])(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,i=t.data;return i.staticClass="v-window-item",i.directives.push({name:"show",value:this.isActive}),this.$createElement(e,i,this.genDefaultSlot())}}}),j=i("62ad"),E=i("a523"),k=i("0fd9"),S=i("8dd9"),V=i("269a"),O=i.n(V),R=i("dc22"),D=Object(c["a"])(o,n,s,!1,null,null,null);e["default"]=D.exports;h()(D,{VCard:l["a"],VCardSubtitle:d["b"],VCardText:d["c"],VCardTitle:d["d"],VCarousel:C,VCarouselItem:B,VCol:j["a"],VContainer:E["a"],VImg:_["a"],VRow:k["a"],VSheet:S["a"]}),O()(D,{Resize:R["a"]})},"1e6c":function(t,e,i){"use strict";var n=i("9d65"),s=i("4e82"),r=i("c3f0"),a=i("80d2"),o=i("58df"),c=Object(o["a"])(n["a"],Object(s["a"])("windowGroup","v-window-item","v-window"));e["a"]=c.extend().extend().extend({name:"v-window-item",directives:{Touch:r["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(a["f"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(a["f"])(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}})},"269a":function(t,e){t.exports=function(t,e){var i="function"===typeof t.exports?t.exports.extendOptions:t.options;for(var n in"function"===typeof t.exports&&(i.directives=t.exports.options.directives),i.directives=i.directives||{},e)i.directives[n]=i.directives[n]||e[n]}},"28d8":function(t,e,i){"use strict";var n=i("0576"),s=i.n(n);s.a},"63b7":function(t,e,i){},afdd:function(t,e,i){"use strict";var n=i("8336");e["a"]=n["a"]},c3f0:function(t,e,i){"use strict";i("4160"),i("159b");var n=i("80d2"),s=function(t){var e=t.touchstartX,i=t.touchendX,n=t.touchstartY,s=t.touchendY,r=.5,a=16;t.offsetX=i-e,t.offsetY=s-n,Math.abs(t.offsetY)<r*Math.abs(t.offsetX)&&(t.left&&i<e-a&&t.left(t),t.right&&i>e+a&&t.right(t)),Math.abs(t.offsetX)<r*Math.abs(t.offsetY)&&(t.up&&s<n-a&&t.up(t),t.down&&s>n+a&&t.down(t))};function r(t,e){var i=t.changedTouches[0];e.touchstartX=i.clientX,e.touchstartY=i.clientY,e.start&&e.start(Object.assign(t,e))}function a(t,e){var i=t.changedTouches[0];e.touchendX=i.clientX,e.touchendY=i.clientY,e.end&&e.end(Object.assign(t,e)),s(e)}function o(t,e){var i=t.changedTouches[0];e.touchmoveX=i.clientX,e.touchmoveY=i.clientY,e.move&&e.move(Object.assign(t,e))}function c(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return r(t,e)},touchend:function(t){return a(t,e)},touchmove:function(t){return o(t,e)}}}function u(t,e,i){var s=e.value,r=s.parent?t.parentElement:t,a=s.options||{passive:!0};if(r){var o=c(e.value);r._touchHandlers=Object(r._touchHandlers),r._touchHandlers[i.context._uid]=o,Object(n["w"])(o).forEach((function(t){r.addEventListener(t,o[t],a)}))}}function h(t,e,i){var s=e.value.parent?t.parentElement:t;if(s&&s._touchHandlers){var r=s._touchHandlers[i.context._uid];Object(n["w"])(r).forEach((function(t){s.removeEventListener(t,r[t])})),delete s._touchHandlers[i.context._uid]}}var l={inserted:u,unbind:h};e["a"]=l},f665:function(t,e,i){"use strict";i("99af"),i("7db0"),i("c740");var n=i("5530"),s=(i("13b3"),i("c3f0")),r=i("afdd"),a=i("9d26"),o=i("604c");e["a"]=o["a"].extend({name:"v-window",provide:function(){return{windowGroup:this}},directives:{Touch:s["a"]},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:{type:Boolean,default:void 0},showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive:function(){return this.transitionCount>0},classes:function(){return Object(n["a"])({},o["a"].options.computed.classes.call(this),{"v-window--show-arrows-on-hover":this.showArrowsOnHover})},computedTransition:function(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",e=this.$vuetify.rtl&&"x"===t?!this.internalReverse:this.internalReverse,i=e?"-reverse":"";return"v-window-".concat(t).concat(i,"-transition")},hasActiveItems:function(){return Boolean(this.items.find((function(t){return!t.disabled})))},hasNext:function(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev:function(){return this.continuous||this.internalIndex>0},internalIndex:function(){var t=this;return this.items.findIndex((function(e,i){return t.internalValue===t.getValue(e,i)}))},internalReverse:function(){return this.reverse?!this.isReverse:this.isReverse}},watch:{internalIndex:"updateReverse"},mounted:function(){var t=this;window.requestAnimationFrame((function(){return t.isBooted=!0}))},methods:{genContainer:function(){var t=[this.$slots.default];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon:function(t,e,i){var n=this;return this.$createElement("div",{staticClass:"v-window__".concat(t)},[this.$createElement(r["a"],{props:{icon:!0},attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.".concat(t))},on:{click:function(){n.changedByDelimiters=!0,i()}}},[this.$createElement(a["a"],{props:{large:!0}},e)])])},genControlIcons:function(){var t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"===typeof e){var i=this.genIcon("prev",e,this.prev);i&&t.push(i)}var n=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&n&&"string"===typeof n){var s=this.genIcon("next",n,this.next);s&&t.push(s)}return t},getNextIndex:function(t){var e=(t+1)%this.items.length,i=this.items[e];return i.disabled?this.getNextIndex(e):e},getPrevIndex:function(t){var e=(t+this.items.length-1)%this.items.length,i=this.items[e];return i.disabled?this.getPrevIndex(e):e},next:function(){if(this.isReverse=this.$vuetify.rtl,this.hasActiveItems&&this.hasNext){var t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},prev:function(){if(this.isReverse=!this.$vuetify.rtl,this.hasActiveItems&&this.hasPrev){var t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},updateReverse:function(t,e){this.changedByDelimiters?this.changedByDelimiters=!1:this.isReverse=t<e}},render:function(t){var e=this,i={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){var n=this.touch||{left:function(){e.$vuetify.rtl?e.prev():e.next()},right:function(){e.$vuetify.rtl?e.next():e.prev()},end:function(t){t.stopPropagation()},start:function(t){t.stopPropagation()}};i.directives.push({name:"touch",value:n})}return t("div",i,[this.genContainer()])}})}}]);
//# sourceMappingURL=chunk-a9757ba8.2ebee308.js.map