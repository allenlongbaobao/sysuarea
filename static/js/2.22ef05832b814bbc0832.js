webpackJsonp([2],{"3yR9":function(t,n){},"4JAI":function(t,n){},Bx50:function(t,n){},Bx9E:function(t,n){},O4Vx:function(t,n){},SXIc:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("dhIU"),a=e.n(i).a.SERVER_IP,r={data:function(){return{articles:[]}},props:{id:String},created:function(){var t=this;console.log(this.id),this.$http.post(a+"/api/getAllArticleByUid",{id:this.id}).then(function(n){console.log(n),t.articles=n.body.data})},methods:{goArticle:function(t){console.log(t.target.parentElement.dataset.aid);var n=t.target.parentElement.dataset.aid;this.$router.push({name:"Article",path:"/article/"+n,params:{id:n}})}}},c={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"tab"},t._l(t.articles,function(n){return e("div",{staticClass:"item",attrs:{"data-aid":n._id},on:{click:t.goArticle}},[e("span",{staticClass:"title"},[t._v(t._s(n.title))]),t._v(" "),e("div",{staticClass:"item-info"},[e("span",[t._v(t._s(n.owner.nickName))]),t._v(" "),e("span",[t._v(t._s(n.createdAt))])])])}))},staticRenderFns:[]};var s=e("VU/8")(r,c,!1,function(t){e("3yR9")},"data-v-d1e5d0b0",null).exports,l={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n\tthis is my activity tab\n")])},staticRenderFns:[]};var o=e("VU/8")({data:function(){return{}}},l,!1,function(t){e("Bx9E")},null,null).exports,u={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n\tthis is collection tab\n")])},staticRenderFns:[]};var d=e("VU/8")({data:function(){return{}}},u,!1,function(t){e("Bx50")},null,null).exports,f={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n\tthis is follower tab\n")])},staticRenderFns:[]};var v=e("VU/8")({data:function(){return{}}},f,!1,function(t){e("4JAI")},null,null).exports,h={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n\tthis is following tab\n")])},staticRenderFns:[]};var _=e("VU/8")({data:function(){return{}}},h,!1,function(t){e("nLc7")},null,null).exports,m={data:function(){return{id:"",currectTab:"myArticle",tabList:{myArticle:"我的文章",myActivity:"我的活动",collection:"收藏",follower:"关注我的",following:"我关注的"},componentList:{myArticle:s,myActivity:o,follower:v}}},components:{"tab-myArticle":s,"tab-myActivity":o,"tab-collection":d,"tab-follower":v,"tab-following":_},methods:{},created:function(){this.id=this.$route.params.id},computed:{currectTabComponent:function(){return"tab-"+this.currectTab}}},p={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"body"},[e("div",{staticClass:"left"},[e("div",{staticClass:"left-header"},[e("ul",t._l(t.tabList,function(n,i){return e("li",{on:{click:function(n){t.currectTab=i}}},[e("span",{class:[{active:t.currectTab===i}]},[t._v(t._s(n))])])}))]),t._v(" "),e("div",{staticClass:"left-body"},[e(t.currectTabComponent,{tag:"component",attrs:{id:t.id}})],1)]),t._v(" "),e("div",{staticClass:"right"})])},staticRenderFns:[]};var b=e("VU/8")(m,p,!1,function(t){e("O4Vx")},"data-v-90142fce",null);n.default=b.exports},nLc7:function(t,n){}});
//# sourceMappingURL=2.22ef05832b814bbc0832.js.map