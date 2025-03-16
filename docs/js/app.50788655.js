(function(){"use strict";var e={8879:function(e,t,i){var n=i(5471),r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("record-home")],1)},s=[],a=function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v("記録")]),t("div",[t("p",[e._v("日付")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.createDate,expression:"createDate"}],attrs:{type:"date"},domProps:{value:e.createDate},on:{input:function(t){t.target.composing||(e.createDate=t.target.value)}}})]),e._l(e.recordLists,(function(i,n){return t("div",{key:n},[t("record-detail",{ref:"child",refInFor:!0,attrs:{createDate:e.createDate},on:{"update-array":e.handleArrayUpdate}})],1)})),e.recordLists.length>1?t("div",[t("button",{on:{click:e.deleteRecord}},[e._v("レコード削除")])]):e._e(),t("div",[t("button",{on:{click:e.addRecord}},[e._v("レコード追加")])]),t("div",[t("button",{on:{click:e.submitRecord}},[e._v("送信")])])],2)},o=[],u=(i(4114),i(8111),i(7588),i(1701),function(){var e=this,t=e._self._c;return t("div",[t("div",e._l(e.parts,(function(i){return t("label",{key:i.id},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedPart,expression:"selectedPart"}],attrs:{type:"radio"},domProps:{value:i.id,checked:e._q(e.selectedPart,i.id)},on:{change:function(t){e.selectedPart=i.id}}}),e._v(" "+e._s(i.name)+" ")])})),0),t("div",[t("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedMenu,expression:"selectedMenu"}],on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedMenu=t.target.multiple?i:i[0]}}},[t("option",{attrs:{disabled:"",value:""}},[e._v("選択してください")]),e._l(e.filteredMenuList,(function(i){return t("option",{key:i.menu_id,domProps:{value:i.menu_name}},[e._v(" "+e._s(i.menu_name)+" ")])}))],2)]),t("div",[t("label",[e._v("セット数：")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.setCount,expression:"setCount"}],attrs:{type:"number"},domProps:{value:e.setCount},on:{input:[function(t){t.target.composing||(e.setCount=t.target.value)},e.updateSets]}})]),e._l(e.setCountList,(function(i,n){return t("div",{key:n},[t("weight-sets",{ref:"child",refInFor:!0,on:{"update-weight":function(t){return e.updateWeight(t,n)},"update-reps":function(t){return e.updateReps(t,n)}}})],1)})),t("div",[t("label",[e._v("備考欄：")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.note,expression:"note"}],domProps:{value:e.note},on:{input:function(t){t.target.composing||(e.note=t.target.value)}}})])],2)}),c=[],l=(i(2489),function(){var e=this,t=e._self._c;return t("div",[t("div",[t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.weight,expression:"weight"}],staticClass:"weightBox",attrs:{type:"number"},domProps:{value:e.weight},on:{input:[function(t){t.target.composing||(e.weight=t.target.value)},e.updateWeight]}}),e._v("kg")]),t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.reps,expression:"reps"}],staticClass:"repsBox",attrs:{type:"number"},domProps:{value:e.reps},on:{input:[function(t){t.target.composing||(e.reps=t.target.value)},e.updateReps]}}),e._v("回")])])])}),d=[],h={name:"WeightSets",data(){return{weight:"",reps:""}},methods:{updateWeight(){this.$emit("update-weight",this.weight)},updateReps(){this.$emit("update-reps",this.reps)},validateInput(e){"sets"===e?this.sets=this.sets.replace(/[^0-9]/g,""):"weight"===e?this.weight=this.weight.replace(/[^0-9.]/g,""):"reps"===e&&(this.reps=this.reps.replace(/[^0-9]/g,""))},clearWeightSetslData(){this.weight="",this.reps=""}}},p=h,m=i(1656),f=(0,m.A)(p,l,d,!1,null,"eb82eaa8",null),v=f.exports;const g={GET_MENU:"https://cnhgmlmnsmfvawxmcoai.supabase.co/functions/v1/training_record/fetchPart",POST_RECORD:"https://cnhgmlmnsmfvawxmcoai.supabase.co/functions/v1/training_record/insertRecord",LOCAL_GET_MENU:"http://127.0.0.1:54321/functions/v1/training_record/fetchPart",LOCAL_POST_RECORD:"http://127.0.0.1:54321/functions/v1/training_record/insertRecord",AUTHORIZATION:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0"};var _={name:"RecordDetail",components:{WeightSets:v},props:{createDate:String},data(){return{parts:[{id:1,name:"胸"},{id:2,name:"肩"},{id:3,name:"背中"},{id:4,name:"腕"}],selectedPart:1,menuList:[],selectedMenu:"",setCount:3,setCountList:[],note:"",weightList:[],repsList:[]}},mounted(){this.getMenu(),this.updateSets()},watch:{selectedPart(){this.selectedMenu=""}},computed:{filteredMenuList(){return this.menuList.filter((e=>e.part_id===this.selectedPart))}},methods:{getMenu(){this.$axios.get(g.GET_MENU,{headers:{Authorization:g.AUTHORIZATION}}).then((e=>{this.menuList=e.data})).catch((e=>{console.log(e)}))},updateSets(){const e=Number(this.setCount);if(e>this.setCountList.length)for(let t=this.setCountList.length;t<e;t++)this.setCountList.push(t);else this.setCountList=this.setCountList.slice(0,e)},updateWeight(e,t){this.weightList[t]=e},updateReps(e,t){this.repsList[t]=e},setRecordDetailData(){if(!this.selectedMenu)return alert("種目を選択してください"),!0;if(!this.setCount||"0"===this.setCount)return alert("セット数を入力してください"),!0;for(let t=0;t<this.setCountList.length;t++)if(!this.weightList[t]||!this.repsList[t])return alert("重量と回数を入力してください"),!0;const e={partId:this.selectedPart,menuName:this.selectedMenu,setCount:this.setCount,weight:this.weightList,reps:this.repsList,createDate:this.createDate,note:this.note};this.$emit("update-array",e)},clearRecordDetailData(){this.selectedPart=1,this.selectedMenu="",this.setCount=3,this.note="",this.setCountList=[],this.weightList=[],this.repsList=[],this.updateSets(),this.$refs.child.forEach((e=>{e&&e.clearWeightSetslData&&e.clearWeightSetslData()}))}}},w=_,b=(0,m.A)(w,u,c,!1,null,"7f2ad2e6",null),y=b.exports,C={name:"RecordHome",components:{RecordDetail:y},data(){return{createDate:(new Date).toISOString().split("T")[0],recordLists:[1],formDataList:[],inputCheck:!1}},methods:{addRecord(){this.recordLists.push(this.recordLists.length+1)},deleteRecord(){this.recordLists.pop()},async submitRecord(){if(this.$refs.child.forEach((e=>{e&&e.setRecordDetailData&&(this.inputCheck=e.setRecordDetailData(),this.inputCheck)})),!this.inputCheck){for(const t of this.formDataList){let i=new FormData;i.append("record",JSON.stringify(t));try{const e=await this.$axios.post(g.POST_RECORD,i,{headers:{Authorization:g.AUTHORIZATION,"Content-Type":"application/json"}});console.log("success!",e.data)}catch(e){console.log(e)}}this.$refs.child.forEach((e=>{e&&e.clearRecordDetailData&&e.clearRecordDetailData()})),this.formDataList=[],this.inputCheck=!1}},handleArrayUpdate(e){this.formDataList.push(e)}}},L=C,D=(0,m.A)(L,a,o,!1,null,"af73cb2a",null),O=D.exports,R={name:"App",components:{RecordHome:O}},P=R,x=(0,m.A)(P,r,s,!1,null,null,null),A=x.exports,S=i(4335);n.Ay.config.productionTip=!1,n.Ay.prototype.$axios=S.A,new n.Ay({render:e=>e(A)}).$mount("#app")}},t={};function i(n){var r=t[n];if(void 0!==r)return r.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,i),s.exports}i.m=e,function(){var e=[];i.O=function(t,n,r,s){if(!n){var a=1/0;for(l=0;l<e.length;l++){n=e[l][0],r=e[l][1],s=e[l][2];for(var o=!0,u=0;u<n.length;u++)(!1&s||a>=s)&&Object.keys(i.O).every((function(e){return i.O[e](n[u])}))?n.splice(u--,1):(o=!1,s<a&&(a=s));if(o){e.splice(l--,1);var c=r();void 0!==c&&(t=c)}}return t}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[n,r,s]}}(),function(){i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};i.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,s,a=n[0],o=n[1],u=n[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(r in o)i.o(o,r)&&(i.m[r]=o[r]);if(u)var l=u(i)}for(t&&t(n);c<a.length;c++)s=a[c],i.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return i.O(l)},n=self["webpackChunkmuscle_training_front"]=self["webpackChunkmuscle_training_front"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=i.O(void 0,[504],(function(){return i(8879)}));n=i.O(n)})();
//# sourceMappingURL=app.50788655.js.map