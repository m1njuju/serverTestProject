"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[607],{607:function(e,t,r){r.r(t),r.d(t,{default:function(){return s}});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v(e._s(e.memo.title))]),r("p",[e._v("작성자: "+e._s(e.memo.writer))]),e._v(" "),r("br"),r("p",[e._v(e._s(e.memo.memo))]),e._v(" "),r("br"),r("button",{on:{click:function(t){return e.$router.go(-1)}}},[e._v("back")])])},o=[],u={data(){return{memo:{}}},created(){this.$http.get(`/api/memo/${this.$route.params.id}`).then((e=>{this.memo=e.data}))}},a=u,m=r(1),i=(0,m.Z)(a,n,o,!1,null,"7ba1302e",null),s=i.exports}}]);
//# sourceMappingURL=607-legacy.f387948e.js.map