(window.webpackJsonp=window.webpackJsonp||[]).push([[3,4,5],{197:function(t,e,n){},198:function(t,e,n){},199:function(t,e,n){},203:function(t,e,n){"use strict";var s=n(197);n.n(s).a},204:function(t,e,n){"use strict";var s=n(198);n.n(s).a},205:function(t,e,n){},206:function(t,e,n){"use strict";var s=n(116)(!0);n(112)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=s(e,n),this._i+=t.length,{value:t,done:!1})}))},207:function(t,e,n){"use strict";var s=n(113),i=n(13),a=n(44),o=n(208),r=n(209),l=n(14),c=n(210),u=n(211);i(i.S+i.F*!n(212)((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,i,A,d=a(t),h="function"==typeof this?this:Array,p=arguments.length,v=p>1?arguments[1]:void 0,f=void 0!==v,m=0,g=u(d);if(f&&(v=s(v,p>2?arguments[2]:void 0,2)),null==g||h==Array&&r(g))for(n=new h(e=l(d.length));e>m;m++)c(n,m,f?v(d[m],m):d[m]);else for(A=g.call(d),n=new h;!(i=A.next()).done;m++)c(n,m,f?o(A,v,[i.value,m],!0):i.value);return n.length=m,n}})},208:function(t,e,n){var s=n(4);t.exports=function(t,e,n,i){try{return i?e(s(n)[0],n[1]):e(n)}catch(e){var a=t.return;throw void 0!==a&&s(a.call(t)),e}}},209:function(t,e,n){var s=n(43),i=n(3)("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(s.Array===t||a[i]===t)}},210:function(t,e,n){"use strict";var s=n(20),i=n(72);t.exports=function(t,e,n){e in t?s.f(t,e,i(0,n)):t[e]=n}},211:function(t,e,n){var s=n(117),i=n(3)("iterator"),a=n(43);t.exports=n(27).getIteratorMethod=function(t){if(null!=t)return t[i]||t["@@iterator"]||a[s(t)]}},212:function(t,e,n){var s=n(3)("iterator"),i=!1;try{var a=[7][s]();a.return=function(){i=!0},Array.from(a,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var a=[7],o=a[s]();o.next=function(){return{done:n=!0}},a[s]=function(){return o},t(a)}catch(t){}return n}},213:function(t,e,n){"use strict";var s=n(199);n.n(s).a},214:function(t,e,n){},215:function(t,e,n){},216:function(t,e,n){},228:function(t,e,n){"use strict";n.r(e);var s=n(219),i=n.n(s),a=(n(12),n(74)),o=new i.a,r={mounted:function(){},components:{Button:a.a},computed:{data:function(){return this.$page.frontmatter},title:function(){return this.$page.frontmatter.title||this.$title||"Hello, World."},description:function(){return this.$page.description||this.$description||"📦 🎨 A api-friendly theme for VuePress."},footer:function(){return o.render(this.data.footer||"Open Source on [GitHub](https://github.com/sqrthree/vuepress-theme-api), Made by [@sqrthree](https://github.com/sqrthree), Power by [vuepress](https://github.com/vuejs/vuepress).")}}},l=(n(203),n(204),n(1)),c=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home__container container"},[n("div",{staticClass:"home__header"},[n("h1",{staticClass:"home__title"},[t._v(t._s(t.title))]),t._v(" "),n("p",{staticClass:"home__description"},[t._v(t._s(t.description))])]),t._v(" "),n("div",{staticClass:"home__body row"},[n("div",{staticClass:"home__content"},[n("Content",{attrs:{custom:""}})],1)]),t._v(" "),n("footer",{staticClass:"home__footer",domProps:{innerHTML:t._s(t.footer)}})])}),[],!1,null,null,null);e.default=c.exports},229:function(t,e,n){"use strict";n.r(e);n(206),n(207),n(42),n(115);var s=n(12),i={data:function(){return{blocks:[]}},computed:{isEnchanceMode:function(){return!!this.$page.frontmatter.enhance},isBlockLayout:function(){return this.isEnchanceMode||!!this.blocks.length},pageClasses:function(){return{page__container:!0,"page--block-layout":this.isBlockLayout}},lastUpdated:function(){if(this.$page.lastUpdated)return new Date(this.$page.lastUpdated).toLocaleString(this.$lang)},lastUpdatedText:function(){return"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,i=t.docsDir,a=void 0===i?"":i,o=t.docsBranch,r=void 0===o?"master":o,l=t.docsRepo,c=void 0===l?e:l,u=this.$page.path;if("/"===u.substr(-1)?u+="README.md":u+=".md",c&&n)return(Object(s.a)(c)?c:"https://github.com/".concat(c)).replace(/\/$/,"")+"/edit/".concat(r)+(a?"/"+a.replace(/\/$/,""):"")+u}},editLinkText:function(){return this.$site.themeConfig.editLinkText||"Edit this page"}},watch:{$route:function(t,e){t.path!==e.path&&(this.blocks.length=0,this.isEnchanceMode&&this.$nextTick(this.resolveLayout))}},methods:{resolveLayout:function(){var t=this.$el.children[0],e="";Array.from(t.children).forEach((function(t){!function(t){var e=t.tagName.toLowerCase();return"h1"===e||"h2"===e}(t)?e+=t.outerHTML:(e&&(e+='\n                </div>\n                <div class="content-block__examples">\n                </div>\n              </div>\n            </div>\n            '),e+='\n            <div class="content-block">\n              <div class="content-block__heading">\n                '.concat(t.outerHTML,'\n              </div>\n              <div class="content-block__body">\n                <div class="content-block__cont">\n          '))})),e+='\n                </div>\n                <div class="content-block__examples">\n                </div>\n              </div>\n            </div>\n      ',t.innerHTML=e},addBlock:function(t){this.blocks.push(t)}},mounted:function(){this.isEnchanceMode&&this.$nextTick(this.resolveLayout)},created:function(){this.$on("addBlock",this.addBlock)}},a=(n(213),n(1)),o=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.pageClasses},[n("Content",{attrs:{custom:""}}),t._v(" "),n("div",{staticClass:"content__footer-container"},[n("div",{staticClass:"content__footer"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("svg",{attrs:{viewBox:"0 0 33 32",version:"1.1",xmlns:"http://www.w3.org/2000/svg",height:"16",width:"16"}},[n("g",{attrs:{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[n("g",{attrs:{id:"github",fill:"#000"}},[n("path",{attrs:{d:"M16.3,0 C7.3,0 -3.55271368e-15,7.3 -3.55271368e-15,16.3 C-3.55271368e-15,23.5 4.7,29.6 11.1,31.8 C11.9,31.9 12.2,31.4 12.2,31 L12.2,28.2 C7.7,29.2 6.7,26 6.7,26 C6,24.2 5,23.7 5,23.7 C3.5,22.7 5.1,22.7 5.1,22.7 C6.7,22.8 7.6,24.4 7.6,24.4 C9.1,26.9 11.4,26.2 12.3,25.8 C12.4,24.7 12.9,24 13.3,23.6 C9.7,23.2 5.9,21.8 5.9,15.5 C5.9,13.7 6.5,12.3 7.6,11.1 C7.4,10.7 6.9,9 7.8,6.8 C7.8,6.8 9.2,6.4 12.3,8.5 C13.6,8.1 15,8 16.4,8 C17.8,8 19.2,8.2 20.5,8.5 C23.6,6.4 25,6.8 25,6.8 C25.9,9 25.3,10.7 25.2,11.1 C26.2,12.2 26.9,13.7 26.9,15.5 C26.9,21.8 23.1,23.1 19.5,23.5 C20.1,24 20.6,25 20.6,26.5 L20.6,31 C20.6,31.4 20.9,31.9 21.7,31.8 C28.2,29.6 32.8,23.5 32.8,16.3 C32.6,7.3 25.3,0 16.3,0 L16.3,0 Z",id:"Shape"}})])])])]):t._e(),t._v(" "),t.lastUpdated?n("time",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])])],1)}),[],!1,null,null,null);e.default=o.exports},285:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAABgCAQAAABspPI2AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAA6mAAAOpgAYTJ3nYAAAAHdElNRQfkAg4ENwU8eisAAAABc0lEQVR42u3csUoDQRSF4bMbIZAQiIVZEJtUYmchiM8lWPgAFoLv4qPYiVUaETaNgZBAiiQWFtk5kC0izkDm/7qZheXuKZYZ5jISAByuCEaVxupqm7qoqN+/0kT1buIkeHyne420SV1lRKWmetHrvkCGutRZ6hojO9WwOSyDh1utU9cX3Tr8RZSHvudYEYghEEMghkAMgRgCMWEgRYYBleH2JVypLvTlC5UjV6jWIpxoGutavcwCWepNk9RlAAAAAAAAAACADITnMhe6Ujd1SZGt9K7P3TA8ubvVg6rMmu5qPe8PZKBxdk13PQ2aQ5ruaLprRyCGQAyBGAIxBGIIxHjTXSd1QdF12pru5ppomd3Sfd6cYHNnmzsAAAAAAAAAAIB/wmUIdhlCeHJ3o0dVmQVS62l/IH2da5S6xsg66jeH3nSX07nurw1Nd60IxBCIIRBDIIZADIEYmu5am+5m+tB3VouzUlPNmhNcY27XmAPAX/wAGqNAdI7Q/bQAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMTItMjhUMDk6MzI6MDArMDA6MDB4bJPkAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTAxLTA4VDIwOjM1OjAxKzAwOjAwOWzY+AAAACB0RVh0c29mdHdhcmUAaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcme8zx2dAAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn/7svAAAAGHRFWHRUaHVtYjo6SW1hZ2U6OkhlaWdodAAxMDR4/G8pAAAAF3RFWHRUaHVtYjo6SW1hZ2U6OldpZHRoADE0OIbXtlsAAAAZdEVYdFRodW1iOjpNaW1ldHlwZQBpbWFnZS9wbmc/slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTU0Njk3OTcwMUZ3nCcAAAAQdEVYdFRodW1iOjpTaXplADUyMkKv6CLIAAAAWnRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vZGF0YS93d3dyb290L3d3dy5lYXN5aWNvbi5uZXQvY2RuLWltZy5lYXN5aWNvbi5jbi9maWxlcy8xMjIvMTIyMzA3Ny5wbmeHSs+NAAAAAElFTkSuQmCC"},286:function(t,e){t.exports="data:image/png;base64,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"},287:function(t,e,n){"use strict";var s=n(205);n.n(s).a},288:function(t,e,n){"use strict";var s=n(214);n.n(s).a},289:function(t,e,n){"use strict";var s=n(215);n.n(s).a},290:function(t,e,n){"use strict";var s=n(216);n.n(s).a},293:function(t,e,n){"use strict";n.r(e);n(73),n(42),n(114);var s=n(0),i=n(41),a=n.n(i),o=n(40),r=n(12),l={name:"Sidebar",components:{NavLink:n(105).a},props:{items:{type:Object,required:!0}},computed:{sidebarGroupOrder:function(){var t=o.a.get(this.$site,"sidebarGroupOrder",this.$localePath),e=o.a.get(this.$site,"selectText",this.$localePath)||"languages";if(t){var n=t.slice();return n.unshift(e,"home"),n}return Object.keys(this.items)},sidebars:function(){var t=this;return this.sidebarGroupOrder.map((function(e){return t.items[e]}))}},methods:{title:r.e}},c=(n(287),n(1)),u=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar"},t._l(t.sidebars,(function(e,s){return e?n("div",{staticClass:"group"},[n("div",{staticClass:"group__title"},[t._v(t._s(t.sidebarGroupOrder[s]))]),t._v(" "),n("div",{staticClass:"group__body"},[e.to?n("div",{class:["group__category","category",{"category--selected":t.$route.fullPath===e.to,"category--active":t.$route.fullPath===e.to}]},[n("div",{staticClass:"category__label"},[n("NavLink",{attrs:{to:e.to}},[t._v(t._s(t.title(e.title||t.sidebarGroupOrder[s])))])],1)]):t._e(),t._v(" "),t._l(e.headers,(function(s){return e.headers&&e.headers.length?n("div",{class:["group__category","category",{"category--selected":t.$route.fullPath===e.to+"#"+s.slug,"category--active":t.$route.fullPath===e.to+"#"+s.slug}]},[n("div",{staticClass:"category__label"},[n("NavLink",{attrs:{to:e.to+"#"+s.slug}},[t._v(t._s(t.title(s.title)))])],1)]):t._e()})),t._v(" "),t._l(e.children,(function(s){return e.children&&e.children.length?n("div",{class:["group__category","category",{"category--selected":!s.isLangNav&&t.$route.path===s.to,"category--active":!s.isLangNav&&t.$route.fullPath===s.to}],attrs:{name:""+s.to}},[n("div",{staticClass:"category__label"},[n("NavLink",{attrs:{to:s.to}},[t._v(t._s(t.title(s.title)))])],1),t._v(" "),t._l(s.headers,(function(e){return s.headers&&s.headers.length?n("div",{class:["category__headers",{"category--active":t.$route.fullPath===s.to+"#"+e.slug}]},[n("div",{staticClass:"category__header-item"},[n("NavLink",{attrs:{to:s.to+"#"+e.slug}},[t._v(t._s(t.title(e.title)))])],1)]):t._e()}))],2):t._e()}))],2)]):t._e()})),0)}),[],!1,null,null,null).exports,A=n(228),d=n(229),h={components:{Home:A.default,Sidebar:u,Page:d.default},data:function(){return{isSidebarOpen:!0,shouldMenuOpen:!1,shouldContentSeen:!0}},methods:{openMenu:function(){this.shouldMenuOpen?this.shouldMenuOpen=!1:this.shouldMenuOpen=!0,this.shouldContentSeen?this.shouldContentSeen=!1:this.shouldContentSeen=!0,this.isSidebarOpen?this.isSidebarOpen=!1:this.isSidebarOpen=!0}},computed:{sidebarItems:function(){return Object(r.d)(this.$page,this.$site,this.$localePath)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&Object.keys(this.sidebarItems).length},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"sidebar-open":this.shouldShowSidebar&&this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){a.a.configure({showSpinner:!1}),this.$router.beforeEach((function(t,e,n){t.path===e.path||s.a.component(t.name)||a.a.start(),n()})),this.$router.afterEach((function(){a.a.done()}))},watch:{$route:function(){this.isSidebarOpen=!1,this.shouldMenuOpen=!1,this.shouldContentSeen=!0}},created:function(){this.$ssrContext&&(this.$ssrContext.title=this.$title,this.$ssrContext.lang=this.$lang,this.$ssrContext.description=this.$page.description||this.$description)}},p=(n(288),n(289),n(290),Object(c.a)(h,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"theme__container",class:t.pageClasses},[s("div",{staticClass:"menu__container"},[s("a",{directives:[{name:"show",rawName:"v-show",value:t.shouldShowSidebar,expression:"shouldShowSidebar"}],on:{click:function(e){return t.openMenu()}}},[s("img",{directives:[{name:"show",rawName:"v-show",value:t.shouldContentSeen,expression:"shouldContentSeen"}],attrs:{src:n(285)}}),t._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:t.shouldMenuOpen,expression:"shouldMenuOpen"}],attrs:{src:n(286)}})])]),t._v(" "),t.shouldShowSidebar?s("div",{staticClass:"row"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.shouldMenuOpen,expression:"shouldMenuOpen"}],staticClass:"col-md-3 col-lg-2 sidebar__container"},[s("Sidebar",{attrs:{items:t.sidebarItems}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2)],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.shouldContentSeen,expression:"shouldContentSeen"}],staticClass:"col-md-9 col-lg-10 content__container"},[t.$page.frontmatter.layout?s("div",{staticClass:"custom__layout"},[s(t.$page.frontmatter.layout,{tag:"component"})],1):t.$page.frontmatter.home?s("Home"):s("Page")],1)]):s("div",[t.$page.frontmatter.layout?s("div",{staticClass:"custom__layout"},[s(t.$page.frontmatter.layout,{tag:"component"})],1):t.$page.frontmatter.home?s("Home"):s("Page")],1)])}),[],!1,null,null,null));e.default=p.exports}}]);