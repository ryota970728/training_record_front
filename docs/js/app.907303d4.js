(function(){"use strict";var t={831:function(t,e,s){var a={};s.r(a),s.d(a,{fetchMenu:function(){return Ct},fetchPart:function(){return gt},fetchRecords:function(){return wt},postRecordData:function(){return yt}});var r=s(5471),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"header"},[e("record-header")],1),e("main",{staticClass:"main"},[e("keep-alive",[e("router-view")],1)],1),e("div",{staticClass:"footer"},[e("record-footer")],1)])},n=[],o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"header"},[e("div",{staticClass:"title"},[t._v(" "+t._s(t.pageTitle)+" ")])])},c=[],l={name:"RecordHeader",data(){return{pageTitle:""}},mounted(){this.updatePageTitle(),this.$router.afterEach((()=>{this.updatePageTitle()}))},methods:{updatePageTitle(){this.pageTitle=this.$route.meta.title||""}}},d=l,u=s(1656),h=(0,u.A)(d,o,c,!1,null,"e368e476",null),p=h.exports,m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"record-footer-container"},[e("div",{staticClass:"fotter-item record-item"},[e("router-link",{attrs:{to:"/record"}},[e("div",{staticClass:"link-img record-img"}),e("div",{staticClass:"title-text"},[t._v("記録")])])],1),e("div",{staticClass:"fotter-item confirm-item"},[e("router-link",{attrs:{to:"/confirm"}},[e("div",{staticClass:"link-img confirm-img"}),e("div",{staticClass:"title-text"},[t._v("記録一覧")])])],1),e("div",{staticClass:"fotter-item search-item"},[e("router-link",{attrs:{to:"/search"}},[e("div",{staticClass:"link-img search-img"}),e("div",{staticClass:"title-text"},[t._v("検索")])])],1)])},v=[],f={name:"RecordFooter",data(){return{}}},_=f,g=(0,u.A)(_,m,v,!1,null,"103e681c",null),C=g.exports,w={name:"App",components:{RecordHeader:p,RecordFooter:C}},y=w,L=(0,u.A)(y,i,n,!1,null,null,null),R=L.exports,D=s(4335),b=s(173),k=function(){var t=this,e=t._self._c;return e("div",{staticClass:"record-home"},[e("div",{staticClass:"date"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.createDate,expression:"createDate"}],staticClass:"input-date",attrs:{type:"date"},domProps:{value:t.createDate},on:{input:function(e){e.target.composing||(t.createDate=e.target.value)}}})]),t._l(t.recordLists,(function(s,a){return e("div",{key:a},[e("record-detail",{ref:"child",refInFor:!0,attrs:{createDate:t.createDate,partList:t.partList,menuList:t.menuList},on:{"update-array":t.handleArrayUpdate}})],1)})),t.recordLists.length>1?e("div",[e("button",{staticClass:"delete-button",on:{click:t.deleteRecord}})]):t._e(),e("div",[e("button",{staticClass:"add-button",on:{click:t.addRecord}})]),e("div",[e("button",{staticClass:"submit-button",on:{click:t.sendConfirm}},[t._v("送信")])]),e("record-modal",{directives:[{name:"show",rawName:"v-show",value:t.isShowModal,expression:"isShowModal"}],on:{cancel:t.stopModal,ok:t.okModal}}),t.isLoading?e("progress-circular"):t._e()],2)},S=[],O=(s(4114),s(8111),s(7588),s(1701),function(){var t=this,e=t._self._c;return e("div",{staticClass:"record-detail"},[e("div",{staticClass:"part-container"},t._l(t.partList,(function(s){return e("label",{key:s.part_id,staticClass:"radio-part"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedPart,expression:"selectedPart"}],attrs:{type:"radio"},domProps:{value:s.part_id,checked:t._q(t.selectedPart,s.part_id)},on:{change:function(e){t.selectedPart=s.part_id}}}),t._v(" "+t._s(s.part_name)+" ")])})),0),e("div",{staticClass:"menu-container"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedMenu,expression:"selectedMenu"}],staticClass:"select-menu",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedMenu=e.target.multiple?s:s[0]}}},[e("option",{attrs:{disabled:"",value:""}},[t._v("選択してください")]),t._l(t.filteredMenuList,(function(s){return e("option",{key:s.menu_id,domProps:{value:s.menu_name}},[t._v(" "+t._s(s.menu_name)+" ")])}))],2)]),e("div",{staticClass:"set-count-container"},[e("label",[t._v("セット数：")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.setCount,expression:"setCount"}],staticClass:"set-count",attrs:{type:"number"},domProps:{value:t.setCount},on:{input:[function(e){e.target.composing||(t.setCount=e.target.value)},t.updateSets]}})]),t._l(t.setCountList,(function(s,a){return e("div",{key:a,staticClass:"weight-sets-container"},[e("weight-sets",{ref:"child",refInFor:!0,on:{"update-weight":function(e){return t.updateWeight(e,a)},"update-reps":function(e){return t.updateReps(e,a)}}})],1)})),e("div",{staticClass:"note-container"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.note,expression:"note"}],staticClass:"textarea-note",domProps:{value:t.note},on:{input:function(e){e.target.composing||(t.note=e.target.value)}}})])],2)}),A=[],P=(s(2489),function(){var t=this,e=t._self._c;return e("div",{staticClass:"weight-sets"},[e("div",{staticClass:"weigh-box-wrapper"},[e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.weight,expression:"weight"}],staticClass:"weight-box",attrs:{type:"number"},domProps:{value:t.weight},on:{input:[function(e){e.target.composing||(t.weight=e.target.value)},t.updateWeight]}}),t._v("kg")])]),e("div",{staticClass:"reps-box-wrapper"},[e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.reps,expression:"reps"}],staticClass:"reps-box",attrs:{type:"number"},domProps:{value:t.reps},on:{input:[function(e){e.target.composing||(t.reps=e.target.value)},t.updateReps]}}),t._v("回")])])])}),x=[],M={name:"WeightSets",data(){return{weight:"",reps:""}},methods:{updateWeight(){this.$emit("update-weight",this.weight)},updateReps(){this.$emit("update-reps",this.reps)},validateInput(t){"sets"===t?this.sets=this.sets.replace(/[^0-9]/g,""):"weight"===t?this.weight=this.weight.replace(/[^0-9.]/g,""):"reps"===t&&(this.reps=this.reps.replace(/[^0-9]/g,""))},clearWeightSetslData(){this.weight="",this.reps=""}}},N=M,T=(0,u.A)(N,P,x,!1,null,"2638498e",null),I=T.exports,E={name:"RecordDetail",components:{WeightSets:I},props:{createDate:String,partList:Array,menuList:Array},data(){return{selectedPart:1,selectedMenu:"",setCount:3,setCountList:[],note:"",weightList:[],repsList:[]}},mounted(){this.updateSets()},watch:{selectedPart(){this.selectedMenu=""}},computed:{filteredMenuList(){return this.menuList.filter((t=>t.part_id===this.selectedPart))}},methods:{updateSets(){const t=Number(this.setCount);if(t>this.setCountList.length)for(let e=this.setCountList.length;e<t;e++)this.setCountList.push(e);else this.setCountList=this.setCountList.slice(0,t)},updateWeight(t,e){this.weightList[e]=t},updateReps(t,e){this.repsList[e]=t},checkRecordDetailData(){if(!this.selectedMenu)return alert("種目を選択してください"),!0;if(!this.setCount||"0"===this.setCount)return alert("セット数を入力してください"),!0;for(let e=0;e<this.setCountList.length;e++)if(!this.weightList[e]||!this.repsList[e])return alert("重量と回数を入力してください"),!0;const t={partId:this.selectedPart,menuName:this.selectedMenu,setCount:this.setCount,weight:this.weightList,reps:this.repsList,createDate:this.createDate,note:this.note};this.$emit("update-array",t)},clearRecordDetailData(){this.selectedPart=1,this.selectedMenu="",this.setCount=3,this.note="",this.setCountList=[],this.weightList=[],this.repsList=[],this.updateSets(),this.$refs.child.forEach((t=>{t&&t.clearWeightSetslData&&t.clearWeightSetslData()}))}}},$=E,J=(0,u.A)($,O,A,!1,null,"8684dd06",null),F=J.exports,W=function(){var t=this,e=t._self._c;return e("div",{staticClass:"overlay"},[e("div",{staticClass:"modal-content"},[e("p",[t._v("送信しますか？")]),e("div",{staticClass:"btn-group"},[e("button",{staticClass:"btn",on:{click:t.clickOK}},[t._v("OK")]),e("button",{staticClass:"btn",on:{click:t.clickCancel}},[t._v("キャンセル")])])])])},j=[],H={name:"RecordModal",methods:{clickCancel(){this.$emit("cancel")},clickOK(){this.$emit("ok")}}},U=H,Z=(0,u.A)(U,W,j,!1,null,"077a8bfc",null),z=Z.exports,G=function(){var t=this;t._self._c;return t._m(0)},X=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"overlay"},[e("div",{staticClass:"loader"})])}],K={name:"ProgressCircular"},q=K,B=(0,u.A)(q,G,X,!1,null,null,null),Y=B.exports,Q={name:"RecordHome",components:{RecordDetail:F,RecordModal:z,ProgressCircular:Y},data(){return{createDate:(new Date).toISOString().split("T")[0],recordLists:[1],formDataList:[],partList:[],menuList:[],isLoading:!1,isShowModal:!1}},mounted(){this.fetchData()},methods:{addRecord(){this.recordLists.push(this.recordLists.length+1)},deleteRecord(){this.recordLists.length>1&&confirm("最新の記録を削除しますか？")&&this.recordLists.pop()},handleArrayUpdate(t){this.formDataList.push(t)},inputCheck(){let t=!1;return this.$refs.child.forEach((e=>{t||e&&e.checkRecordDetailData&&(t=e.checkRecordDetailData())})),t},clearRecordData(){this.$refs.child.forEach((t=>{t&&t.clearRecordDetailData&&t.clearRecordDetailData()})),this.formDataList=[]},sendConfirm(){this.inputCheck()||(this.isShowModal=!0)},stopModal(){this.isShowModal=!1},async okModal(){this.isLoading=!0,this.isShowModal=!1;const t=await this.$apiService.postRecordData(this.formDataList);this.isLoading=!1,t?(this.clearRecordData(),this.recordList=await this.$apiService.fetchRecords()):alert("送信に失敗しました。")},async fetchData(){this.partList=await this.$apiService.fetchPart(),this.menuList=await this.$apiService.fetchMenu(),this.recordList=await this.$apiService.fetchRecords()}}},V=Q,tt=(0,u.A)(V,k,S,!1,null,"ff56fe1e",null),et=tt.exports,st=function(){var t=this,e=t._self._c;return e("div",t._l(t.sortedFilteredRecords,(function(s,a){return e("div",{key:a,staticClass:"record"},[e("div",{staticClass:"create-date"},[t._v(t._s(s.create_date)+" ("+t._s(t.getDayOffWeek(s.create_date))+")")]),t._l(s.records,(function(s){return e("div",{key:s.record_id,staticClass:"container"},[e("div",{staticClass:"part-name",style:{background:s.part_color,color:"#FFFFFF"}},[t._v(t._s(s.part_name))]),e("div",{staticClass:"menu-name"},[t._v(t._s(s.menu_name))]),e("div",{staticClass:"set-detail"},t._l(s.set_detail,(function(s,a){return e("div",{key:a},[e("div",[t._v(t._s(s.weight)+" x "+t._s(s.reps))])])})),0),t.checkNote(s.note)?e("div",{staticClass:"note"},[t._v(t._s(s.note))]):t._e()])}))],2)})),0)},at=[],rt=(s(8237),{name:"RecordConfirm",data(){return{recordList:[]}},mounted(){this.recordList=JSON.parse(sessionStorage.getItem("recordList"))},computed:{filteredRecords(){const t=this.recordList.reduce(((t,e)=>{const s=e.create_date;return t[s]||(t[s]=[]),t[s].push({record_id:e.record_id,menu_name:e.menu_master.menu_name,part_name:e.part_master.part_name,part_color:e.part_master.part_color,set_count:e.set_count,set_detail:e.set_detail,note:e.note}),t}),{});return Object.keys(t).map((e=>({create_date:e,records:t[e]})))},sortedFilteredRecords(){return this.filteredRecords.slice().sort(((t,e)=>new Date(e.create_date)-new Date(t.create_date)))}},methods:{getDayOffWeek(t){const e=new Date(t),s=["日","月","火","水","木","金","土"],a=e.getDay();return s[a]},checkNote(t){return""!==t}}}),it=rt,nt=(0,u.A)(it,st,at,!1,null,"895aac12",null),ot=nt.exports,ct=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"radio-container"},t._l(t.partList,(function(s){return e("label",{key:s.part_id,staticClass:"radio-part"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedPart,expression:"selectedPart"}],attrs:{type:"radio"},domProps:{value:s.part_id,checked:t._q(t.selectedPart,s.part_id)},on:{change:function(e){t.selectedPart=s.part_id}}}),t._v(" "+t._s(s.part_name)+" ")])})),0),e("div",{staticClass:"select-container"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedMenu,expression:"selectedMenu"}],staticClass:"select-menu",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedMenu=e.target.multiple?s:s[0]}}},[e("option",{attrs:{disabled:"",value:""}},[t._v("選択してください")]),t._l(t.filteredMenuList,(function(s){return e("option",{key:s.menu_id,domProps:{value:s.menu_name}},[t._v(" "+t._s(s.menu_name)+" ")])}))],2)]),e("div",[e("button",{staticClass:"search-button",on:{click:t.searchRecordData}},[t._v("検索")])]),e("div",{staticClass:"search-wrapper"},[e("div",[t._v(t._s(t.searchPartName))]),t._l(t.filterRecordList,(function(s){return e("div",{key:s.record_id,staticClass:"search-container"},[t._v(" "+t._s(s.create_date)+" ("+t._s(t.getDayOffWeek(s.create_date))+") "),e("div",{staticClass:"set-detail"},t._l(s.set_detail,(function(s,a){return e("div",{key:a},[t._v(" "+t._s(s.weight)+" x "+t._s(s.reps)+" ")])})),0)])}))],2)])},lt=[],dt={name:"RecordSearch",data(){return{partList:[],menuList:[],selectedPart:1,selectedMenu:"",recordList:[],searchPartName:"",filterRecordList:[]}},mounted(){this.partList=JSON.parse(sessionStorage.getItem("partList")),this.menuList=JSON.parse(sessionStorage.getItem("menuList")),this.recordList=JSON.parse(sessionStorage.getItem("recordList"))},computed:{filteredMenuList(){return this.menuList.filter((t=>t.part_id===this.selectedPart))}},methods:{searchRecordData(){this.selectedMenu?(this.searchPartName=this.selectedMenu,this.filterRecordList=this.recordList.filter((t=>this.selectedMenu==t.menu_master.menu_name)).sort(((t,e)=>new Date(e.create_date)-new Date(t.create_date)))):alert("種目を選択してください")},getDayOffWeek(t){const e=new Date(t),s=["日","月","火","水","木","金","土"],a=e.getDay();return s[a]}}},ut=dt,ht=(0,u.A)(ut,ct,lt,!1,null,"32043746",null),pt=ht.exports;r.Ay.use(b.Ay);const mt=[{path:"/",redirect:"/record"},{path:"/record",name:"RecordHome",component:et,meta:{title:"記録"}},{path:"/confirm",name:"RecordConfirm",component:ot,meta:{title:"記録一覧"}},{path:"/search",name:"RecordSearch",component:pt,meta:{title:"記録検索"}}],vt=new b.Ay({mode:"hash",base:"",routes:mt});var ft=vt;const _t={GET_PART:"https://cnhgmlmnsmfvawxmcoai.supabase.co/functions/v1/training_record/fetchPart",GET_MENU:"https://cnhgmlmnsmfvawxmcoai.supabase.co/functions/v1/training_record/fetchMenu",POST_RECORD:"https://cnhgmlmnsmfvawxmcoai.supabase.co/functions/v1/training_record/insertRecord",GET_RECORDS:"https://cnhgmlmnsmfvawxmcoai.supabase.co/functions/v1/training_record/fetchRecords",AUTHORIZATION:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0"},gt=async()=>{const t=sessionStorage.getItem("partList");if(null!==t)return JSON.parse(t);try{const t=await D.A.get(_t.GET_PART,{headers:{Authorization:_t.AUTHORIZATION}});return sessionStorage.setItem("partList",JSON.stringify(t.data)),t.data}catch(e){console.log(e)}},Ct=async()=>{const t=sessionStorage.getItem("menuList");if(null!==t)return JSON.parse(t);try{const t=await D.A.get(_t.GET_MENU,{headers:{Authorization:_t.AUTHORIZATION}});return sessionStorage.setItem("menuList",JSON.stringify(t.data)),t.data}catch(e){console.log(e)}},wt=async()=>{try{const t=await D.A.get(_t.GET_RECORDS,{headers:{Authorization:_t.AUTHORIZATION}});return sessionStorage.setItem("recordList",JSON.stringify(t.data)),t.data}catch(t){console.log(t)}},yt=async t=>{for(const s of t){let t=new FormData;t.append("record",JSON.stringify(s));try{const e=await D.A.post(_t.POST_RECORD,t,{headers:{Authorization:_t.AUTHORIZATION,"Content-Type":"application/json"}});console.log("success:",e.data)}catch(e){return console.log("error:",e),!1}}return!0};r.Ay.config.productionTip=!1,r.Ay.prototype.$axios=D.A,r.Ay.prototype.$apiService=a,new r.Ay({router:ft,render:t=>t(R)}).$mount("#app")}},e={};function s(a){var r=e[a];if(void 0!==r)return r.exports;var i=e[a]={exports:{}};return t[a].call(i.exports,i,i.exports,s),i.exports}s.m=t,function(){var t=[];s.O=function(e,a,r,i){if(!a){var n=1/0;for(d=0;d<t.length;d++){a=t[d][0],r=t[d][1],i=t[d][2];for(var o=!0,c=0;c<a.length;c++)(!1&i||n>=i)&&Object.keys(s.O).every((function(t){return s.O[t](a[c])}))?a.splice(c--,1):(o=!1,i<n&&(n=i));if(o){t.splice(d--,1);var l=r();void 0!==l&&(e=l)}}return e}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[a,r,i]}}(),function(){s.d=function(t,e){for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};s.O.j=function(e){return 0===t[e]};var e=function(e,a){var r,i,n=a[0],o=a[1],c=a[2],l=0;if(n.some((function(e){return 0!==t[e]}))){for(r in o)s.o(o,r)&&(s.m[r]=o[r]);if(c)var d=c(s)}for(e&&e(a);l<n.length;l++)i=n[l],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(d)},a=self["webpackChunkmuscle_training_front"]=self["webpackChunkmuscle_training_front"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=s.O(void 0,[504],(function(){return s(831)}));a=s.O(a)})();
//# sourceMappingURL=app.907303d4.js.map