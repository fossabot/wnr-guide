(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{195:function(t,e,n){},196:function(t,e,n){},201:function(t,e,n){"use strict";var i=n(195);n.n(i).a},202:function(t,e,n){"use strict";var i=n(196);n.n(i).a},224:function(t,e,n){"use strict";n.r(e);var i=n(215),o=n.n(i),s=n(12),a=n(74),r=new o.a,c={components:{Button:a.a},computed:{data:function(){return this.$page.frontmatter},title:function(){return this.$page.frontmatter.title||this.$title||"Hello, World."},description:function(){return this.$page.description||this.$description||"📦 🎨 A api-friendly theme for VuePress."},action:function(){return{text:this.data.actionText,link:-1==this.data.actionLink.indexOf("http")?Object(s.d)(this.data.actionLink,this.$localePath):this.data.actionLink}},footer:function(){return r.render(this.data.footer||"Open Source on [GitHub](https://github.com/sqrthree/vuepress-theme-api), Made by [@sqrthree](https://github.com/sqrthree), Power by [vuepress](https://github.com/vuejs/vuepress).")}}},u=(n(201),n(202),n(1)),h=Object(u.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home__container container"},[n("div",{staticClass:"home__header"},[n("h1",{staticClass:"home__title"},[t._v(t._s(t.title))]),t._v(" "),n("p",{staticClass:"home__description"},[t._v(t._s(t.description))]),t._v(" "),n("Button",{attrs:{to:t.action.link}},[t._v(t._s(t.action.text))])],1),t._v(" "),n("div",{staticClass:"home__body row"},[n("div",{staticClass:"home__content col-md-10"},[n("Content",{attrs:{custom:""}})],1)]),t._v(" "),n("footer",{staticClass:"home__footer",domProps:{innerHTML:t._s(t.footer)}})])}),[],!1,null,null,null);e.default=h.exports}}]);