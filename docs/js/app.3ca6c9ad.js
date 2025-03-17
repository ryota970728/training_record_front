(function(){"use strict";var t={9448:function(t,e,r){var i=r(5471),s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-link",{attrs:{to:"/"}},[t._v("記録")]),t._v("| "),e("router-link",{attrs:{to:"confirm"}},[t._v("記録一覧")]),e("router-view")],1)},n=[],a={name:"App"},o=a,c=r(1656),u=(0,c.A)(o,s,n,!1,null,null,null),d=u.exports,l=r(4335),h=r(173),p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"record-home"},[e("h1",[t._v("記録")]),e("div",{staticClass:"date"},[e("label",[t._v("日付：")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.createDate,expression:"createDate"}],attrs:{type:"date"},domProps:{value:t.createDate},on:{input:function(e){e.target.composing||(t.createDate=e.target.value)}}})]),t._l(t.recordLists,(function(r,i){return e("div",{key:i},[e("record-detail",{ref:"child",refInFor:!0,attrs:{createDate:t.createDate,partList:t.partList,menuList:t.menuList},on:{"update-array":t.handleArrayUpdate}})],1)})),t.recordLists.length>1?e("div",[e("button",{on:{click:t.deleteRecord}},[t._v("レコード削除")])]):t._e(),e("div",[e("button",{on:{click:t.addRecord}},[t._v("レコード追加")])]),e("div",[e("button",{on:{click:t.submitRecord}},[t._v("送信")])])],2)},m=[],f=(r(4114),r(8111),r(7588),r(1701),function(){var t=this,e=t._self._c;return e("div",[e("div",t._l(t.partList,(function(r){return e("label",{key:r.part_id},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedPart,expression:"selectedPart"}],attrs:{type:"radio"},domProps:{value:r.part_id,checked:t._q(t.selectedPart,r.part_id)},on:{change:function(e){t.selectedPart=r.part_id}}}),t._v(" "+t._s(r.part_name)+" ")])})),0),e("div",[e("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedMenu,expression:"selectedMenu"}],on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedMenu=e.target.multiple?r:r[0]}}},[e("option",{attrs:{disabled:"",value:""}},[t._v("選択してください")]),t._l(t.filteredMenuList,(function(r){return e("option",{key:r.menu_id,domProps:{value:r.menu_name}},[t._v(" "+t._s(r.menu_name)+" ")])}))],2)]),e("div",[e("label",[t._v("セット数：")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.setCount,expression:"setCount"}],staticClass:"set-count",attrs:{type:"number"},domProps:{value:t.setCount},on:{input:[function(e){e.target.composing||(t.setCount=e.target.value)},t.updateSets]}})]),t._l(t.setCountList,(function(r,i){return e("div",{key:i},[e("weight-sets",{ref:"child",refInFor:!0,on:{"update-weight":function(e){return t.updateWeight(e,i)},"update-reps":function(e){return t.updateReps(e,i)}}})],1)})),e("div",[e("label",[t._v("備考欄：")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.note,expression:"note"}],domProps:{value:t.note},on:{input:function(e){e.target.composing||(t.note=e.target.value)}}})])],2)}),v=[],_=(r(2489),function(){var t=this,e=t._self._c;return e("div",[e("div",[e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.weight,expression:"weight"}],staticClass:"weightBox",attrs:{type:"number"},domProps:{value:t.weight},on:{input:[function(e){e.target.composing||(t.weight=e.target.value)},t.updateWeight]}}),t._v("kg")]),e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.reps,expression:"reps"}],staticClass:"repsBox",attrs:{type:"number"},domProps:{value:t.reps},on:{input:[function(e){e.target.composing||(t.reps=e.target.value)},t.updateReps]}}),t._v("回")])])])}),g=[],y={name:"WeightSets",data(){return{weight:"",reps:""}},methods:{updateWeight(){this.$emit("update-weight",this.weight)},updateReps(){this.$emit("update-reps",this.reps)},validateInput(t){"sets"===t?this.sets=this.sets.replace(/[^0-9]/g,""):"weight"===t?this.weight=this.weight.replace(/[^0-9.]/g,""):"reps"===t&&(this.reps=this.reps.replace(/[^0-9]/g,""))},clearWeightSetslData(){this.weight="",this.reps=""}}},C=y,L=(0,c.A)(C,_,g,!1,null,"d3465458",null),w=L.exports,R={name:"RecordDetail",components:{WeightSets:w},props:{createDate:String,partList:Array,menuList:Array},data(){return{selectedPart:1,selectedMenu:"",setCount:3,setCountList:[],note:"",weightList:[],repsList:[]}},mounted(){this.updateSets()},watch:{selectedPart(){this.selectedMenu=""}},computed:{filteredMenuList(){return this.menuList.filter((t=>t.part_id===this.selectedPart))}},methods:{updateSets(){const t=Number(this.setCount);if(t>this.setCountList.length)for(let e=this.setCountList.length;e<t;e++)this.setCountList.push(e);else this.setCountList=this.setCountList.slice(0,t)},updateWeight(t,e){this.weightList[e]=t},updateReps(t,e){this.repsList[e]=t},setRecordDetailData(){if(!this.selectedMenu)return alert("種目を選択してください"),!0;if(!this.setCount||"0"===this.setCount)return alert("セット数を入力してください"),!0;for(let e=0;e<this.setCountList.length;e++)if(!this.weightList[e]||!this.repsList[e])return alert("重量と回数を入力してください"),!0;const t={partId:this.selectedPart,menuName:this.selectedMenu,setCount:this.setCount,weight:this.weightList,reps:this.repsList,createDate:this.createDate,note:this.note};this.$emit("update-array",t)},clearRecordDetailData(){this.selectedPart=1,this.selectedMenu="",this.setCount=3,this.note="",this.setCountList=[],this.weightList=[],this.repsList=[],this.updateSets(),this.$refs.child.forEach((t=>{t&&t.clearWeightSetslData&&t.clearWeightSetslData()}))}}},D=R,O=(0,c.A)(D,f,v,!1,null,"a2e7cdcc",null),b=O.exports;const A={GET_PART:"http://127.0.0.1:54321/functions/v1/training_record/fetchPart",GET_MENU:"http://127.0.0.1:54321/functions/v1/training_record/fetchMenu",POST_RECORD:"http://127.0.0.1:54321/functions/v1/training_record/insertRecord",GET_RECORDS:"http://127.0.0.1:54321/functions/v1/training_record/fetchRecords",AUTHORIZATION:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0"};var k={name:"RecordHome",components:{RecordDetail:b},data(){return{createDate:(new Date).toISOString().split("T")[0],recordLists:[1],formDataList:[],inputCheck:!1,partList:[],menuList:[]}},mounted(){this.fetchPart(),this.fetchMenu()},methods:{addRecord(){this.recordLists.push(this.recordLists.length+1)},deleteRecord(){this.recordLists.pop()},fetchPart(){0===this.partList.length&&this.$axios.get(A.GET_PART,{headers:{Authorization:A.AUTHORIZATION}}).then((t=>{this.partList=t.data})).catch((t=>{console.log(t)}))},fetchMenu(){0===this.menuList.length&&this.$axios.get(A.GET_MENU,{headers:{Authorization:A.AUTHORIZATION}}).then((t=>{this.menuList=t.data})).catch((t=>{console.log(t)}))},async submitRecord(){if(this.$refs.child.forEach((t=>{t&&t.setRecordDetailData&&(this.inputCheck=t.setRecordDetailData(),this.inputCheck)})),!this.inputCheck){for(const e of this.formDataList){let r=new FormData;r.append("record",JSON.stringify(e));try{const t=await this.$axios.post(A.POST_RECORD,r,{headers:{Authorization:A.AUTHORIZATION,"Content-Type":"application/json"}});console.log("success!",t.data)}catch(t){console.log(t),alert("送信失敗!")}}alert("送信成功!"),this.$refs.child.forEach((t=>{t&&t.clearRecordDetailData&&t.clearRecordDetailData()})),this.formDataList=[],this.inputCheck=!1}},handleArrayUpdate(t){this.formDataList.push(t)}}},T=k,P=(0,c.A)(T,p,m,!1,null,"048e3f6a",null),x=P.exports,I=function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("記録一覧")]),t._l(t.sortedFilteredRecords,(function(r,i){return e("div",{key:i,staticClass:"record"},[e("div",{staticClass:"create-date"},[t._v(t._s(r.create_date)+" ("+t._s(t.getDayOffWeek(r.create_date))+")")]),t._l(r.records,(function(r){return e("div",{key:r.record_id,staticClass:"container"},[e("div",{staticClass:"part-name"},[t._v(t._s(r.part_name))]),e("div",{staticClass:"menu-name"},[t._v(t._s(r.menu_name))]),e("div",{staticClass:"set-detail"},t._l(r.set_detail,(function(r,i){return e("div",{key:i},[e("div",[t._v(t._s(r.weight)+" x "+t._s(r.reps))])])})),0)])}))],2)}))],2)},S=[],M=(r(8237),{name:"RecordConfirm",data(){return{recordList:[]}},mounted(){this.fetchRecords()},computed:{filteredRecords(){const t=this.recordList.reduce(((t,e)=>{const r=e.create_date;return t[r]||(t[r]=[]),t[r].push({record_id:e.record_id,menu_name:e.menu_master.menu_name,part_name:e.part_master.part_name,set_count:e.set_count,set_detail:e.set_detail}),t}),{});return Object.keys(t).map((e=>({create_date:e,records:t[e]})))},sortedFilteredRecords(){return this.filteredRecords.slice().sort(((t,e)=>new Date(e.create_date)-new Date(t.create_date)))}},methods:{fetchRecords(){this.$axios.get(A.GET_RECORDS,{headers:{Authorization:A.AUTHORIZATION}}).then((t=>{this.recordList=t.data})).catch((t=>{console.log(t)}))},getDayOffWeek(t){const e=new Date(t),r=["日","月","火","水","木","金","土"],i=e.getDay();return r[i]}}}),N=M,E=(0,c.A)(N,I,S,!1,null,"716eb387",null),W=E.exports;i.Ay.use(h.Ay);const j=[{path:"/",name:"RecordHome",component:x},{path:"/confirm",name:"RecordConfirm",component:W}],$=new h.Ay({mode:"history",routes:j});var U=$;i.Ay.config.productionTip=!1,i.Ay.prototype.$axios=l.A,new i.Ay({router:U,render:t=>t(d)}).$mount("#app")}},e={};function r(i){var s=e[i];if(void 0!==s)return s.exports;var n=e[i]={exports:{}};return t[i].call(n.exports,n,n.exports,r),n.exports}r.m=t,function(){var t=[];r.O=function(e,i,s,n){if(!i){var a=1/0;for(d=0;d<t.length;d++){i=t[d][0],s=t[d][1],n=t[d][2];for(var o=!0,c=0;c<i.length;c++)(!1&n||a>=n)&&Object.keys(r.O).every((function(t){return r.O[t](i[c])}))?i.splice(c--,1):(o=!1,n<a&&(a=n));if(o){t.splice(d--,1);var u=s();void 0!==u&&(e=u)}}return e}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[i,s,n]}}(),function(){r.d=function(t,e){for(var i in e)r.o(e,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};r.O.j=function(e){return 0===t[e]};var e=function(e,i){var s,n,a=i[0],o=i[1],c=i[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(s in o)r.o(o,s)&&(r.m[s]=o[s]);if(c)var d=c(r)}for(e&&e(i);u<a.length;u++)n=a[u],r.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return r.O(d)},i=self["webpackChunkmuscle_training_front"]=self["webpackChunkmuscle_training_front"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=r.O(void 0,[504],(function(){return r(9448)}));i=r.O(i)})();
//# sourceMappingURL=app.3ca6c9ad.js.map