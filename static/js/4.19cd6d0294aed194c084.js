webpackJsonp([4],{Xj8I:function(e,t){},"s6+2":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("dhIU"),i=s.n(n).a.SERVER_IP,a={data:function(){return{openAddMore:!1,isSignIn:!1,userInfoPanel:!1,menus:{title1:{name:"主页",link:"/"},title2:{name:"攻略",link:"#"},title3:{name:"活动",link:"#"}}}},methods:{openPanel:function(){this.openAddMore=!0},closePanel:function(){this.openAddMore=!1},switchUserInfoPanel:function(){this.userInfoPanel=!1===this.userInfoPanel},goSign:function(e){this.$router.push({name:"Admin",params:{type:e}})},goUserPage:function(){this.$router.push({path:"/user"})},goHomePage:function(){this.$router.push({path:"/home"})},addArticle:function(){this.$router.push({name:"AddArticle"}),console.log("addArticle")},addTopic:function(){this.$router.push({name:"AddTopic"}),console.log("addTopic")},addActivity:function(){this.$router.push({name:"AddActivity"}),console.log("addActivity")},signIn:function(){var e=this;this.$http.post(i+"/api/signIn",{},{withCredentials:!0,progress:function(e){}}).then(function(t){1===t.body.code&&(e.isSignIn=!0)})},signOut:function(){var e=this;this.$http.post(i+"/api/signOut",{},{withCredentials:!0}).then(function(t){1===t.body.code&&(e.isSignIn=!1,e.$router.push({name:"Admin",params:{type:"signIn"}}))})}},created:function(){this.$route.params.signIn?this.isSignIn=!0:this.signIn()},mounted:function(){var e=this;document.addEventListener("click",function(t){var s=document.getElementById("userInfoPanel");e.userInfoPanel=s.contains(t.target)})}},o={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"wrap"},[s("div",{staticClass:"header",attrs:{id:"header"}},[s("span",{staticClass:"logo"},[e._v("中大地带")]),e._v(" "),s("ul",{staticClass:"header-side",attrs:{id:"header-side"}},[s("li",[s("ul",{staticClass:"header-side-menu"},e._l(e.menus,function(t){return s("li",[s("span",{on:{click:e.goHomePage}},[e._v(e._s(t.name))])])}))]),e._v(" "),e._m(0),e._v(" "),s("li",{staticClass:"header-side-btn-wrap"},[s("div",{staticClass:"header-side-btn",attrs:{id:"addMoreList"}},[s("button",{staticClass:"add-article",on:{click:e.addArticle}},[e._v("发文")]),s("div",{staticClass:"add-more",on:{mouseover:e.openPanel,mouseleave:e.closePanel}},[s("i",{staticClass:"add-more-dropdown typcn typcn-arrow-sorted-down"})]),e._v(" "),s("ul",{directives:[{name:"show",rawName:"v-show",value:e.openAddMore,expression:"openAddMore"}],staticClass:"add-more-list",on:{mouseover:e.openPanel,mouseleave:e.closePanel}},[s("li",{on:{click:e.addTopic}},[s("a",{attrs:{href:"#"}},[e._v("建话题")])]),e._v(" "),s("li",{on:{click:e.addActivity}},[s("a",{attrs:{href:"#"}},[e._v("办活动")])])])])]),e._v(" "),e._m(1),e._v(" "),s("li",{directives:[{name:"show",rawName:"v-show",value:e.isSignIn,expression:"isSignIn"}],staticClass:"header-side-avator"},[s("div",{staticClass:"panel-parent",attrs:{id:"userInfoPanel"}},[s("div",{staticClass:"header-side-avator-wrap",on:{click:e.switchUserInfoPanel}}),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.userInfoPanel,expression:"userInfoPanel"}],staticClass:"panel user-info",on:{click:e.switchUserInfoPanel}},[s("div",{on:{click:e.goUserPage}},[s("span",{staticClass:"typcn typcn-home-outline"}),e._v("个人主页")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),s("div",{on:{click:e.signOut}},[s("span",{staticClass:"typcn typcn-arrow-back-outline"}),e._v("注销")])])])]),e._v(" "),s("li",{directives:[{name:"show",rawName:"v-show",value:!e.isSignIn,expression:"!isSignIn"}],staticClass:"header-side-sign"},[s("a",{on:{click:function(t){e.goSign("signIn")}}},[e._v("登录")]),e._v(" "),s("a",{on:{click:function(t){e.goSign("signUp")}}},[e._v("注册")])])])]),e._v(" "),s("router-view")],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"header-side-search"},[t("div",{staticClass:"header-side-search-wrap"},[t("input",{attrs:{type:"search",name:"search",placeholder:"搜索"}}),this._v(" "),t("span",{staticClass:"typcn typcn-zoom icon"})])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"header-side-alert"},[t("span",{staticClass:"typcn typcn-world"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("span",{staticClass:"typcn typcn-cog-outline"}),this._v("设置")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("span",{staticClass:"typcn typcn-th-large-outline"}),this._v("关于")])}]};var r=s("VU/8")(a,o,!1,function(e){s("Xj8I")},"data-v-4cd16457",null);t.default=r.exports}});
//# sourceMappingURL=4.19cd6d0294aed194c084.js.map