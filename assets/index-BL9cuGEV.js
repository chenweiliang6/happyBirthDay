import{T as C,r as m,B as _e,I as ye,d as a,F as J,o as d,c as N,G as b,H as O,g as n,e,f as l,i as M,J as D,K as $,t as f,j as c,C as W,n as X,y as Y,A as ge,q as ve}from"./index-FvKVKK2v.js";function be(r){return C({url:"/system/notice/list",method:"get",params:r})}function he(r){return C({url:"/system/notice/"+r,method:"get"})}function we(r){return C({url:"/system/notice",method:"post",data:r})}function Ve(r){return C({url:"/system/notice",method:"put",data:r})}function Te(r){return C({url:"/system/notice/"+r,method:"delete"})}const Ce={class:"app-container"},ke={class:"dialog-footer"},Se=ge({name:"Notice"}),Ue=Object.assign(Se,{setup(r){const{proxy:_}=ve(),{sys_notice_status:K,sys_notice_type:U}=_.useDict("sys_notice_status","sys_notice_type"),P=m([]),y=m(!1),x=m(!0),k=m(!0),B=m([]),F=m(!0),z=m(!0),I=m(0),R=m(""),Z=_e({form:{},queryParams:{pageNum:1,pageSize:10,noticeTitle:void 0,createBy:void 0,status:void 0},rules:{noticeTitle:[{required:!0,message:"公告标题不能为空",trigger:"blur"}],noticeType:[{required:!0,message:"公告类型不能为空",trigger:"change"}]}}),{queryParams:s,form:i,rules:ee}=ye(Z);function h(){x.value=!0,be(s.value).then(u=>{P.value=u.rows,I.value=u.total,x.value=!1})}function te(){y.value=!1,q()}function q(){i.value={noticeId:void 0,noticeTitle:void 0,noticeType:void 0,noticeContent:void 0,status:"0"},_.resetForm("noticeRef")}function S(){s.value.pageNum=1,h()}function le(){_.resetForm("queryRef"),S()}function ne(u){B.value=u.map(o=>o.noticeId),F.value=u.length!=1,z.value=!u.length}function oe(){q(),y.value=!0,R.value="添加公告"}function E(u){q();const o=u.noticeId||B.value;he(o).then(V=>{i.value=V.data,y.value=!0,R.value="修改公告"})}function ae(){_.$refs.noticeRef.validate(u=>{u&&(i.value.noticeId!=null?Ve(i.value).then(o=>{_.$modal.msgSuccess("修改成功"),y.value=!1,h()}):we(i.value).then(o=>{_.$modal.msgSuccess("新增成功"),y.value=!1,h()}))})}function L(u){const o=u.noticeId||B.value;_.$modal.confirm('是否确认删除公告编号为"'+o+'"的数据项？').then(function(){return Te(o)}).then(()=>{h(),_.$modal.msgSuccess("删除成功")}).catch(()=>{})}return h(),(u,o)=>{const V=a("el-input"),g=a("el-form-item"),Q=a("el-option"),j=a("el-select"),p=a("el-button"),A=a("el-form"),w=a("el-col"),ie=a("right-toolbar"),G=a("el-row"),v=a("el-table-column"),H=a("dict-tag"),ue=a("el-table"),se=a("pagination"),de=a("el-radio"),re=a("el-radio-group"),ce=a("editor"),pe=a("el-dialog"),T=J("hasPermi"),me=J("loading");return d(),N("div",Ce,[b(e(A,{model:n(s),ref:"queryRef",inline:!0},{default:l(()=>[e(g,{label:"公告标题",prop:"noticeTitle"},{default:l(()=>[e(V,{modelValue:n(s).noticeTitle,"onUpdate:modelValue":o[0]||(o[0]=t=>n(s).noticeTitle=t),placeholder:"请输入公告标题",clearable:"",style:{width:"200px"},onKeyup:M(S,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(g,{label:"操作人员",prop:"createBy"},{default:l(()=>[e(V,{modelValue:n(s).createBy,"onUpdate:modelValue":o[1]||(o[1]=t=>n(s).createBy=t),placeholder:"请输入操作人员",clearable:"",style:{width:"200px"},onKeyup:M(S,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(g,{label:"类型",prop:"noticeType"},{default:l(()=>[e(j,{modelValue:n(s).noticeType,"onUpdate:modelValue":o[2]||(o[2]=t=>n(s).noticeType=t),placeholder:"公告类型",clearable:"",style:{width:"200px"}},{default:l(()=>[(d(!0),N(D,null,$(n(U),t=>(d(),f(Q,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(g,null,{default:l(()=>[e(p,{type:"primary",icon:"Search",onClick:S},{default:l(()=>[c("搜索")]),_:1}),e(p,{icon:"Refresh",onClick:le},{default:l(()=>[c("重置")]),_:1})]),_:1})]),_:1},8,["model"]),[[O,n(k)]]),e(G,{gutter:10,class:"mb8"},{default:l(()=>[e(w,{span:1.5},{default:l(()=>[b((d(),f(p,{type:"primary",plain:"",icon:"Plus",onClick:oe},{default:l(()=>[c("新增")]),_:1})),[[T,["system:notice:add"]]])]),_:1}),e(w,{span:1.5},{default:l(()=>[b((d(),f(p,{type:"success",plain:"",icon:"Edit",disabled:n(F),onClick:E},{default:l(()=>[c("修改")]),_:1},8,["disabled"])),[[T,["system:notice:edit"]]])]),_:1}),e(w,{span:1.5},{default:l(()=>[b((d(),f(p,{type:"danger",plain:"",icon:"Delete",disabled:n(z),onClick:L},{default:l(()=>[c("删除")]),_:1},8,["disabled"])),[[T,["system:notice:remove"]]])]),_:1}),e(ie,{showSearch:n(k),"onUpdate:showSearch":o[3]||(o[3]=t=>W(k)?k.value=t:null),onQueryTable:h},null,8,["showSearch"])]),_:1}),b((d(),f(ue,{data:n(P),onSelectionChange:ne},{default:l(()=>[e(v,{type:"selection",width:"55",align:"center"}),e(v,{label:"序号",align:"center",prop:"noticeId",width:"100"}),e(v,{label:"公告标题",align:"center",prop:"noticeTitle","show-overflow-tooltip":!0}),e(v,{label:"公告类型",align:"center",prop:"noticeType",width:"100"},{default:l(t=>[e(H,{options:n(U),value:t.row.noticeType},null,8,["options","value"])]),_:1}),e(v,{label:"状态",align:"center",prop:"status",width:"100"},{default:l(t=>[e(H,{options:n(K),value:t.row.status},null,8,["options","value"])]),_:1}),e(v,{label:"创建者",align:"center",prop:"createBy",width:"100"}),e(v,{label:"创建时间",align:"center",prop:"createTime",width:"100"},{default:l(t=>[X("span",null,Y(u.parseTime(t.row.createTime,"{y}-{m}-{d}")),1)]),_:1}),e(v,{label:"操作",align:"center","class-name":"small-padding fixed-width"},{default:l(t=>[b((d(),f(p,{link:"",type:"primary",icon:"Edit",onClick:fe=>E(t.row)},{default:l(()=>[c("修改")]),_:2},1032,["onClick"])),[[T,["system:notice:edit"]]]),b((d(),f(p,{link:"",type:"primary",icon:"Delete",onClick:fe=>L(t.row)},{default:l(()=>[c("删除")]),_:2},1032,["onClick"])),[[T,["system:notice:remove"]]])]),_:1})]),_:1},8,["data"])),[[me,n(x)]]),b(e(se,{total:n(I),page:n(s).pageNum,"onUpdate:page":o[4]||(o[4]=t=>n(s).pageNum=t),limit:n(s).pageSize,"onUpdate:limit":o[5]||(o[5]=t=>n(s).pageSize=t),onPagination:h},null,8,["total","page","limit"]),[[O,n(I)>0]]),e(pe,{title:n(R),modelValue:n(y),"onUpdate:modelValue":o[10]||(o[10]=t=>W(y)?y.value=t:null),width:"780px","append-to-body":""},{footer:l(()=>[X("div",ke,[e(p,{type:"primary",onClick:ae},{default:l(()=>[c("确 定")]),_:1}),e(p,{onClick:te},{default:l(()=>[c("取 消")]),_:1})])]),default:l(()=>[e(A,{ref:"noticeRef",model:n(i),rules:n(ee),"label-width":"80px"},{default:l(()=>[e(G,null,{default:l(()=>[e(w,{span:12},{default:l(()=>[e(g,{label:"公告标题",prop:"noticeTitle"},{default:l(()=>[e(V,{modelValue:n(i).noticeTitle,"onUpdate:modelValue":o[6]||(o[6]=t=>n(i).noticeTitle=t),placeholder:"请输入公告标题"},null,8,["modelValue"])]),_:1})]),_:1}),e(w,{span:12},{default:l(()=>[e(g,{label:"公告类型",prop:"noticeType"},{default:l(()=>[e(j,{modelValue:n(i).noticeType,"onUpdate:modelValue":o[7]||(o[7]=t=>n(i).noticeType=t),placeholder:"请选择"},{default:l(()=>[(d(!0),N(D,null,$(n(U),t=>(d(),f(Q,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(w,{span:24},{default:l(()=>[e(g,{label:"状态"},{default:l(()=>[e(re,{modelValue:n(i).status,"onUpdate:modelValue":o[8]||(o[8]=t=>n(i).status=t)},{default:l(()=>[(d(!0),N(D,null,$(n(K),t=>(d(),f(de,{key:t.value,label:t.value},{default:l(()=>[c(Y(t.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(w,{span:24},{default:l(()=>[e(g,{label:"内容"},{default:l(()=>[e(ce,{modelValue:n(i).noticeContent,"onUpdate:modelValue":o[9]||(o[9]=t=>n(i).noticeContent=t),"min-height":192},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title","modelValue"])])}}});export{Ue as default};
