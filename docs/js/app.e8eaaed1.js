(function(){"use strict";var t={9205:function(t,e,s){var i=s(5471),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"header"},[e("record-header")],1),e("main",{staticClass:"content"},[e("keep-alive",[e("router-view")],1)],1),e("div",{staticClass:"footer"},[e("record-footer")],1)])},a=[],n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"header"},[e("div",{staticClass:"title"},[t._v(" "+t._s(t.pageTitle)+" ")])])},o=[],c={name:"RecordHeader",data(){return{pageTitle:""}},mounted(){this.updatePageTitle(),this.$router.afterEach((()=>{this.updatePageTitle()}))},methods:{updatePageTitle(){this.pageTitle=this.$route.meta.title||""}}},d=c,l=s(1656),u=(0,l.A)(d,n,o,!1,null,"e368e476",null),h=u.exports,p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"record-footer-container"},[e("div",{staticClass:"record-item"},[e("router-link",{attrs:{to:"/record"}},[e("div",{staticClass:"link-img record-img"}),e("div",{staticClass:"title-text"},[t._v("記録")])])],1),e("div",{staticClass:"confirm-item"},[e("router-link",{attrs:{to:"/confirm"}},[e("div",{staticClass:"link-img confirm-img"}),e("div",{staticClass:"title-text"},[t._v("記録一覧")])])],1)])},m=[],f={name:"RecordFooter",data(){return{}}},v=f,g=(0,l.A)(v,p,m,!1,null,"51ff2bfe",null),_=g.exports,C={name:"App",components:{RecordHeader:h,RecordFooter:_}},L=C,y=(0,l.A)(L,r,a,!1,null,null,null),R=y.exports,w=s(4335),b=s(173),D=function(){var t=this,e=t._self._c;return e("div",{staticClass:"record-home"},[e("div",{staticClass:"date"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.createDate,expression:"createDate"}],attrs:{type:"date"},domProps:{value:t.createDate},on:{input:function(e){e.target.composing||(t.createDate=e.target.value)}}})]),t._l(t.recordLists,(function(s,i){return e("div",{key:i},[e("record-detail",{ref:"child",refInFor:!0,attrs:{createDate:t.createDate,partList:t.partList,menuList:t.menuList},on:{"update-array":t.handleArrayUpdate}})],1)})),t.recordLists.length>1?e("div",[e("button",{staticClass:"delete-record-button",on:{click:t.deleteRecord}})]):t._e(),e("div",[e("button",{staticClass:"add-record-button",on:{click:t.addRecord}})]),e("div",[e("button",{staticClass:"submit-record-button",attrs:{disabled:t.isLoading},on:{click:t.submitRecord}},[t._v("送信")])])],2)},O=[],A=(s(4114),s(8111),s(7588),s(1701),function(){var t=this,e=t._self._c;return e("div",{staticClass:"record-detail"},[e("div",{staticClass:"radio-container"},t._l(t.partList,(function(s){return e("label",{key:s.part_id,staticClass:"radio-part"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedPart,expression:"selectedPart"}],attrs:{type:"radio"},domProps:{value:s.part_id,checked:t._q(t.selectedPart,s.part_id)},on:{change:function(e){t.selectedPart=s.part_id}}}),t._v(" "+t._s(s.part_name)+" ")])})),0),e("div",{staticClass:"select-container"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedMenu,expression:"selectedMenu"}],staticClass:"select-menu",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedMenu=e.target.multiple?s:s[0]}}},[e("option",{attrs:{disabled:"",value:""}},[t._v("選択してください")]),t._l(t.filteredMenuList,(function(s){return e("option",{key:s.menu_id,domProps:{value:s.menu_name}},[t._v(" "+t._s(s.menu_name)+" ")])}))],2)]),e("div",{staticClass:"set-count-container"},[e("label",[t._v("セット数：")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.setCount,expression:"setCount"}],staticClass:"set-count",attrs:{type:"number"},domProps:{value:t.setCount},on:{input:[function(e){e.target.composing||(t.setCount=e.target.value)},t.updateSets]}})]),t._l(t.setCountList,(function(s,i){return e("div",{key:i,staticClass:"weight-sets-container"},[e("weight-sets",{ref:"child",refInFor:!0,on:{"update-weight":function(e){return t.updateWeight(e,i)},"update-reps":function(e){return t.updateReps(e,i)}}})],1)})),e("div",{staticClass:"note-container"},[e("label",[t._v("備考欄：")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.note,expression:"note"}],domProps:{value:t.note},on:{input:function(e){e.target.composing||(t.note=e.target.value)}}})])],2)}),k=[],T=(s(2489),function(){var t=this,e=t._self._c;return e("div",[e("div",[e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.weight,expression:"weight"}],staticClass:"weightBox",attrs:{type:"number"},domProps:{value:t.weight},on:{input:[function(e){e.target.composing||(t.weight=e.target.value)},t.updateWeight]}}),t._v("kg")]),e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.reps,expression:"reps"}],staticClass:"repsBox",attrs:{type:"number"},domProps:{value:t.reps},on:{input:[function(e){e.target.composing||(t.reps=e.target.value)},t.updateReps]}}),t._v("回")])])])}),x=[],S={name:"WeightSets",data(){return{weight:"",reps:""}},methods:{updateWeight(){this.$emit("update-weight",this.weight)},updateReps(){this.$emit("update-reps",this.reps)},validateInput(t){"sets"===t?this.sets=this.sets.replace(/[^0-9]/g,""):"weight"===t?this.weight=this.weight.replace(/[^0-9.]/g,""):"reps"===t&&(this.reps=this.reps.replace(/[^0-9]/g,""))},clearWeightSetslData(){this.weight="",this.reps=""}}},I=S,P=(0,l.A)(I,T,x,!1,null,"d3465458",null),N=P.exports,M={name:"RecordDetail",components:{WeightSets:N},props:{createDate:String,partList:Array,menuList:Array},data(){return{selectedPart:1,selectedMenu:"",setCount:3,setCountList:[],note:"",weightList:[],repsList:[]}},mounted(){this.updateSets()},watch:{selectedPart(){this.selectedMenu=""}},computed:{filteredMenuList(){return this.menuList.filter((t=>t.part_id===this.selectedPart))}},methods:{updateSets(){const t=Number(this.setCount);if(t>this.setCountList.length)for(let e=this.setCountList.length;e<t;e++)this.setCountList.push(e);else this.setCountList=this.setCountList.slice(0,t)},updateWeight(t,e){this.weightList[e]=t},updateReps(t,e){this.repsList[e]=t},setRecordDetailData(){if(!this.selectedMenu)return alert("種目を選択してください"),!0;if(!this.setCount||"0"===this.setCount)return alert("セット数を入力してください"),!0;for(let e=0;e<this.setCountList.length;e++)if(!this.weightList[e]||!this.repsList[e])return alert("重量と回数を入力してください"),!0;const t={partId:this.selectedPart,menuName:this.selectedMenu,setCount:this.setCount,weight:this.weightList,reps:this.repsList,createDate:this.createDate,note:this.note};this.$emit("update-array",t)},clearRecordDetailData(){this.selectedPart=1,this.selectedMenu="",this.setCount=3,this.note="",this.setCountList=[],this.weightList=[],this.repsList=[],this.updateSets(),this.$refs.child.forEach((t=>{t&&t.clearWeightSetslData&&t.clearWeightSetslData()}))}}},E=M,W=(0,l.A)(E,A,k,!1,null,"1df7a982",null),$=W.exports;const j={GET_PART:"https://cnhgmlmnsmfvawxmcoai.supabase.co/functions/v1/training_record/fetchPart",GET_MENU:"https://cnhgmlmnsmfvawxmcoai.supabase.co/functions/v1/training_record/fetchMenu",POST_RECORD:"https://cnhgmlmnsmfvawxmcoai.supabase.co/functions/v1/training_record/insertRecord",GET_RECORDS:"https://cnhgmlmnsmfvawxmcoai.supabase.co/functions/v1/training_record/fetchRecords",AUTHORIZATION:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0"};var J={name:"RecordHome",components:{RecordDetail:$},data(){return{createDate:(new Date).toISOString().split("T")[0],recordLists:[1],formDataList:[],inputCheck:!1,partList:[],menuList:[],isLoading:!1}},mounted(){this.fetchPart(),this.fetchMenu()},methods:{addRecord(){this.recordLists.push(this.recordLists.length+1)},deleteRecord(){this.recordLists.length>1&&confirm("最新の記録を削除しますか？")&&this.recordLists.pop()},fetchPart(){null!==sessionStorage.getItem("partList")?this.partList=JSON.parse(sessionStorage.getItem("partList")):this.$axios.get(j.GET_PART,{headers:{Authorization:j.AUTHORIZATION}}).then((t=>{this.partList=t.data,sessionStorage.setItem("partList",JSON.stringify(this.partList))})).catch((t=>{console.log(t)}))},fetchMenu(){null!==sessionStorage.getItem("menuList")?this.menuList=JSON.parse(sessionStorage.getItem("menuList")):this.$axios.get(j.GET_MENU,{headers:{Authorization:j.AUTHORIZATION}}).then((t=>{this.menuList=t.data,sessionStorage.setItem("menuList",JSON.stringify(this.menuList))})).catch((t=>{console.log(t)}))},async submitRecord(){if(this.inputCheck=!1,this.isLoading=!0,this.$refs.child.forEach((t=>{this.inputCheck||t&&t.setRecordDetailData&&(this.inputCheck=t.setRecordDetailData(),this.inputCheck)})),this.inputCheck)this.isLoading=!1;else if(confirm("送信しますか？")){for(const e of this.formDataList){let s=new FormData;s.append("record",JSON.stringify(e));try{const t=await this.$axios.post(j.POST_RECORD,s,{headers:{Authorization:j.AUTHORIZATION,"Content-Type":"application/json"}});console.log("success!",t.data)}catch(t){return console.log(t),void alert("送信失敗!")}finally{this.isLoading=!1}}alert("送信成功!"),this.clearRecordData()}else this.isLoading=!1},handleArrayUpdate(t){this.formDataList.push(t)},clearRecordData(){this.$refs.child.forEach((t=>{t&&t.clearRecordDetailData&&t.clearRecordDetailData()})),this.formDataList=[],this.inputCheck=!1}}},F=J,H=(0,l.A)(F,D,O,!1,null,"142dac51",null),U=H.exports,Z=function(){var t=this,e=t._self._c;return e("div",t._l(t.sortedFilteredRecords,(function(s,i){return e("div",{key:i,staticClass:"record"},[e("div",{staticClass:"create-date"},[t._v(t._s(s.create_date)+" ("+t._s(t.getDayOffWeek(s.create_date))+")")]),t._l(s.records,(function(s){return e("div",{key:s.record_id,staticClass:"container"},[e("div",{staticClass:"part-name"},[t._v(t._s(s.part_name))]),e("div",{staticClass:"menu-name"},[t._v(t._s(s.menu_name))]),e("div",{staticClass:"set-detail"},t._l(s.set_detail,(function(s,i){return e("div",{key:i},[e("div",[t._v(t._s(s.weight)+" x "+t._s(s.reps))])])})),0),t.checkNote(s.note)?e("div",{staticClass:"note"},[t._v(t._s(s.note))]):t._e()])}))],2)})),0)},z=[],G=(s(8237),{name:"RecordConfirm",data(){return{recordList:[]}},mounted(){this.fetchRecords()},computed:{filteredRecords(){const t=this.recordList.reduce(((t,e)=>{const s=e.create_date;return t[s]||(t[s]=[]),t[s].push({record_id:e.record_id,menu_name:e.menu_master.menu_name,part_name:e.part_master.part_name,set_count:e.set_count,set_detail:e.set_detail,note:e.note}),t}),{});return Object.keys(t).map((e=>({create_date:e,records:t[e]})))},sortedFilteredRecords(){return this.filteredRecords.slice().sort(((t,e)=>new Date(e.create_date)-new Date(t.create_date)))}},methods:{fetchRecords(){this.$axios.get(j.GET_RECORDS,{headers:{Authorization:j.AUTHORIZATION}}).then((t=>{this.recordList=t.data})).catch((t=>{console.log(t)}))},getDayOffWeek(t){const e=new Date(t),s=["日","月","火","水","木","金","土"],i=e.getDay();return s[i]},checkNote(t){return""!==t}}}),B=G,X=(0,l.A)(B,Z,z,!1,null,"cf0e5ac6",null),Y=X.exports;i.Ay.use(b.Ay);const q=[{path:"/",redirect:"/record"},{path:"/record",name:"RecordHome",component:U,meta:{title:"記録"}},{path:"/confirm",name:"RecordConfirm",component:Y,meta:{title:"記録一覧"}}],Q=new b.Ay({mode:"hash",base:"",routes:q});var V=Q;i.Ay.config.productionTip=!1,i.Ay.prototype.$axios=w.A,new i.Ay({router:V,render:t=>t(R)}).$mount("#app")}},e={};function s(i){var r=e[i];if(void 0!==r)return r.exports;var a=e[i]={exports:{}};return t[i].call(a.exports,a,a.exports,s),a.exports}s.m=t,function(){var t=[];s.O=function(e,i,r,a){if(!i){var n=1/0;for(l=0;l<t.length;l++){i=t[l][0],r=t[l][1],a=t[l][2];for(var o=!0,c=0;c<i.length;c++)(!1&a||n>=a)&&Object.keys(s.O).every((function(t){return s.O[t](i[c])}))?i.splice(c--,1):(o=!1,a<n&&(n=a));if(o){t.splice(l--,1);var d=r();void 0!==d&&(e=d)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[i,r,a]}}(),function(){s.d=function(t,e){for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};s.O.j=function(e){return 0===t[e]};var e=function(e,i){var r,a,n=i[0],o=i[1],c=i[2],d=0;if(n.some((function(e){return 0!==t[e]}))){for(r in o)s.o(o,r)&&(s.m[r]=o[r]);if(c)var l=c(s)}for(e&&e(i);d<n.length;d++)a=n[d],s.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return s.O(l)},i=self["webpackChunkmuscle_training_front"]=self["webpackChunkmuscle_training_front"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=s.O(void 0,[504],(function(){return s(9205)}));i=s.O(i)})();
//# sourceMappingURL=app.e8eaaed1.js.map