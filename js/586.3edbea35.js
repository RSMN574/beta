"use strict";(self["webpackChunkandroid_king_blogv2"]=self["webpackChunkandroid_king_blogv2"]||[]).push([[586],{6586:(s,t,l)=>{l.r(t),l.d(t,{default:()=>k});var e=l(3396),o=l(7139),i={class:"bg-[#f9f6fd] h-full overflow-y-scroll"},r={class:"my-12 text-center w-full mt-20 bg-[#f5f8fc] self-center mx-auto shadow-lg border border-slate-300 rounded-xl sm:w-3/5"},n={class:"mx-auto"},a={class:"mx-auto text-2xl"},c=(0,e._)("br",null,null,-1),d={class:"overflow-x-clip text-left p-8",id:"block"};function u(s,t,l,u,f,b){var p=(0,e.up)("Navigator"),g=(0,e.up)("SanityBlocks");return(0,e.wg)(),(0,e.iD)("div",i,[(0,e.Wm)(p,{class:""}),(0,e._)("div",r,[(0,e._)("div",n,[(0,e._)("h1",a,(0,o.zw)(f.post.title),1)]),c,(0,e._)("div",d,[(0,e.Wm)(g,{blocks:f.blocks,serializers:f.serializers},null,8,["blocks","serializers"])])])])}var f=l(712),b=l(5710),p=l(2356);const g={components:{Navigator:f.Z,SanityBlocks:b.w},data:function(){return{id:this.$route.params.id,post:{},blocks:[],serializers:{types:{image:function(s){return(0,e.Wm)("img",{src:"https://cdn.sanity.io/images/42dlbyyj/production/"+s.asset._ref.substring(6,s.asset._ref.length-4)+".png"},null)}}}}},mounted:function(){var s=this,t='*[_type == "post" && _id == $id][0] { ..., author-> }',l={id:this.id};p.Z.fetch(t,l).then((function(t){s.post=t,s.blocks=t.body,console.log(s.blocks)}))},methods:{}};var m=l(89);const h=(0,m.Z)(g,[["render",u]]),k=h}}]);
//# sourceMappingURL=586.3edbea35.js.map