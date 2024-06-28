import{T as V,r as h,B as ce,I as fe,d,F as L,o as p,c as R,G as b,H as _e,g as a,e,f as l,i as he,J as Q,K as j,t as g,j as m,C as O,n as G,y as H,l as P,A as ge,q as ve,D as ye}from"./index-FvKVKK2v.js";function J(r){return V({url:"/system/dept/list",method:"get",params:r})}function be(r){return V({url:"/system/dept/list/exclude/"+r,method:"get"})}function Ve(r){return V({url:"/system/dept/"+r,method:"get"})}function ke(r){return V({url:"/system/dept",method:"post",data:r})}function we(r){return V({url:"/system/dept",method:"put",data:r})}function Ie(r){return V({url:"/system/dept/"+r,method:"delete"})}const Ne={class:"app-container"},Ce={class:"dialog-footer"},xe=ge({name:"Dept"}),Ue=Object.assign(xe,{setup(r){const{proxy:s}=ve(),{sys_normal_disable:C}=s.useDict("sys_normal_disable"),B=h([]),_=h(!1),x=h(!0),I=h(!0),D=h(""),U=h([]),S=h(!0),T=h(!0),z=ce({form:{},queryParams:{deptName:void 0,status:void 0},rules:{parentId:[{required:!0,message:"上级部门不能为空",trigger:"blur"}],deptName:[{required:!0,message:"部门名称不能为空",trigger:"blur"}],orderNum:[{required:!0,message:"显示排序不能为空",trigger:"blur"}],email:[{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],phone:[{pattern:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,message:"请输入正确的手机号码",trigger:"blur"}]}}),{queryParams:v,form:o,rules:M}=fe(z);function y(){x.value=!0,J(v.value).then(u=>{B.value=s.handleTree(u.data,"deptId"),x.value=!1})}function W(){_.value=!1,$()}function $(){o.value={deptId:void 0,parentId:void 0,deptName:void 0,orderNum:0,leader:void 0,phone:void 0,email:void 0,status:"0"},s.resetForm("deptRef")}function q(){y()}function X(){s.resetForm("queryRef"),q()}function E(u){$(),J().then(n=>{U.value=s.handleTree(n.data,"deptId")}),u!=null&&(o.value.parentId=u.deptId),_.value=!0,D.value="添加部门"}function Y(){T.value=!1,S.value=!S.value,ye(()=>{T.value=!0})}function Z(u){$(),be(u.deptId).then(n=>{U.value=s.handleTree(n.data,"deptId")}),Ve(u.deptId).then(n=>{o.value=n.data,_.value=!0,D.value="修改部门"})}function ee(){s.$refs.deptRef.validate(u=>{u&&(o.value.deptId!=null?we(o.value).then(n=>{s.$modal.msgSuccess("修改成功"),_.value=!1,y()}):ke(o.value).then(n=>{s.$modal.msgSuccess("新增成功"),_.value=!1,y()}))})}function le(u){s.$modal.confirm('是否确认删除名称为"'+u.deptName+'"的数据项?').then(function(){return Ie(u.deptId)}).then(()=>{y(),s.$modal.msgSuccess("删除成功")}).catch(()=>{})}return y(),(u,n)=>{const k=d("el-input"),i=d("el-form-item"),te=d("el-option"),ae=d("el-select"),c=d("el-button"),F=d("el-form"),f=d("el-col"),ne=d("right-toolbar"),A=d("el-row"),w=d("el-table-column"),oe=d("dict-tag"),de=d("el-table"),ue=d("el-tree-select"),re=d("el-input-number"),se=d("el-radio"),pe=d("el-radio-group"),ie=d("el-dialog"),N=L("hasPermi"),me=L("loading");return p(),R("div",Ne,[b(e(F,{model:a(v),ref:"queryRef",inline:!0},{default:l(()=>[e(i,{label:"部门名称",prop:"deptName"},{default:l(()=>[e(k,{modelValue:a(v).deptName,"onUpdate:modelValue":n[0]||(n[0]=t=>a(v).deptName=t),placeholder:"请输入部门名称",clearable:"",style:{width:"200px"},onKeyup:he(q,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(i,{label:"状态",prop:"status"},{default:l(()=>[e(ae,{modelValue:a(v).status,"onUpdate:modelValue":n[1]||(n[1]=t=>a(v).status=t),placeholder:"部门状态",clearable:"",style:{width:"200px"}},{default:l(()=>[(p(!0),R(Q,null,j(a(C),t=>(p(),g(te,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(i,null,{default:l(()=>[e(c,{type:"primary",icon:"Search",onClick:q},{default:l(()=>[m("搜索")]),_:1}),e(c,{icon:"Refresh",onClick:X},{default:l(()=>[m("重置")]),_:1})]),_:1})]),_:1},8,["model"]),[[_e,a(I)]]),e(A,{gutter:10,class:"mb8"},{default:l(()=>[e(f,{span:1.5},{default:l(()=>[b((p(),g(c,{type:"primary",plain:"",icon:"Plus",onClick:E},{default:l(()=>[m("新增")]),_:1})),[[N,["system:dept:add"]]])]),_:1}),e(f,{span:1.5},{default:l(()=>[e(c,{type:"info",plain:"",icon:"Sort",onClick:Y},{default:l(()=>[m("展开/折叠")]),_:1})]),_:1}),e(ne,{showSearch:a(I),"onUpdate:showSearch":n[2]||(n[2]=t=>O(I)?I.value=t:null),onQueryTable:y},null,8,["showSearch"])]),_:1}),a(T)?b((p(),g(de,{key:0,data:a(B),"row-key":"deptId","default-expand-all":a(S),"tree-props":{children:"children",hasChildren:"hasChildren"}},{default:l(()=>[e(w,{prop:"deptName",label:"部门名称",width:"260"}),e(w,{prop:"orderNum",label:"排序",width:"200"}),e(w,{prop:"status",label:"状态",width:"100"},{default:l(t=>[e(oe,{options:a(C),value:t.row.status},null,8,["options","value"])]),_:1}),e(w,{label:"创建时间",align:"center",prop:"createTime",width:"200"},{default:l(t=>[G("span",null,H(u.parseTime(t.row.createTime)),1)]),_:1}),e(w,{label:"操作",align:"center","class-name":"small-padding fixed-width"},{default:l(t=>[b((p(),g(c,{link:"",type:"primary",icon:"Edit",onClick:K=>Z(t.row)},{default:l(()=>[m("修改")]),_:2},1032,["onClick"])),[[N,["system:dept:edit"]]]),b((p(),g(c,{link:"",type:"primary",icon:"Plus",onClick:K=>E(t.row)},{default:l(()=>[m("新增")]),_:2},1032,["onClick"])),[[N,["system:dept:add"]]]),t.row.parentId!=0?b((p(),g(c,{key:0,link:"",type:"primary",icon:"Delete",onClick:K=>le(t.row)},{default:l(()=>[m("删除")]),_:2},1032,["onClick"])),[[N,["system:dept:remove"]]]):P("",!0)]),_:1})]),_:1},8,["data","default-expand-all"])),[[me,a(x)]]):P("",!0),e(ie,{title:a(D),modelValue:a(_),"onUpdate:modelValue":n[10]||(n[10]=t=>O(_)?_.value=t:null),width:"600px","append-to-body":""},{footer:l(()=>[G("div",Ce,[e(c,{type:"primary",onClick:ee},{default:l(()=>[m("确 定")]),_:1}),e(c,{onClick:W},{default:l(()=>[m("取 消")]),_:1})])]),default:l(()=>[e(F,{ref:"deptRef",model:a(o),rules:a(M),"label-width":"80px"},{default:l(()=>[e(A,null,{default:l(()=>[a(o).parentId!==0?(p(),g(f,{key:0,span:24},{default:l(()=>[e(i,{label:"上级部门",prop:"parentId"},{default:l(()=>[e(ue,{modelValue:a(o).parentId,"onUpdate:modelValue":n[3]||(n[3]=t=>a(o).parentId=t),data:a(U),props:{value:"deptId",label:"deptName",children:"children"},"value-key":"deptId",placeholder:"选择上级部门","check-strictly":""},null,8,["modelValue","data"])]),_:1})]),_:1})):P("",!0),e(f,{span:12},{default:l(()=>[e(i,{label:"部门名称",prop:"deptName"},{default:l(()=>[e(k,{modelValue:a(o).deptName,"onUpdate:modelValue":n[4]||(n[4]=t=>a(o).deptName=t),placeholder:"请输入部门名称"},null,8,["modelValue"])]),_:1})]),_:1}),e(f,{span:12},{default:l(()=>[e(i,{label:"显示排序",prop:"orderNum"},{default:l(()=>[e(re,{modelValue:a(o).orderNum,"onUpdate:modelValue":n[5]||(n[5]=t=>a(o).orderNum=t),"controls-position":"right",min:0},null,8,["modelValue"])]),_:1})]),_:1}),e(f,{span:12},{default:l(()=>[e(i,{label:"负责人",prop:"leader"},{default:l(()=>[e(k,{modelValue:a(o).leader,"onUpdate:modelValue":n[6]||(n[6]=t=>a(o).leader=t),placeholder:"请输入负责人",maxlength:"20"},null,8,["modelValue"])]),_:1})]),_:1}),e(f,{span:12},{default:l(()=>[e(i,{label:"联系电话",prop:"phone"},{default:l(()=>[e(k,{modelValue:a(o).phone,"onUpdate:modelValue":n[7]||(n[7]=t=>a(o).phone=t),placeholder:"请输入联系电话",maxlength:"11"},null,8,["modelValue"])]),_:1})]),_:1}),e(f,{span:12},{default:l(()=>[e(i,{label:"邮箱",prop:"email"},{default:l(()=>[e(k,{modelValue:a(o).email,"onUpdate:modelValue":n[8]||(n[8]=t=>a(o).email=t),placeholder:"请输入邮箱",maxlength:"50"},null,8,["modelValue"])]),_:1})]),_:1}),e(f,{span:12},{default:l(()=>[e(i,{label:"部门状态"},{default:l(()=>[e(pe,{modelValue:a(o).status,"onUpdate:modelValue":n[9]||(n[9]=t=>a(o).status=t)},{default:l(()=>[(p(!0),R(Q,null,j(a(C),t=>(p(),g(se,{key:t.value,label:t.value},{default:l(()=>[m(H(t.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title","modelValue"])])}}});export{Ue as default};
