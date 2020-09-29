(this["webpackJsonpemployee-directory-app"]=this["webpackJsonpemployee-directory-app"]||[]).push([[0],{49:function(e,t,a){e.exports=a(77)},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(34),c=a.n(l),o=a(104),i=a(20),s=a(12),u=a(35),m=a(36),p=a(45),h=a(44),d=a(95),b=a(96),f=a(97),g=a(105),E=a(93),v=a(10),y=a(41),j=a.n(y),O=Object(E.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(s.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(s.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(v.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(v.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(s.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function k(e){var t=O();return r.a.createElement("div",{className:t.root},r.a.createElement(d.a,{position:"static"},r.a.createElement(b.a,null,r.a.createElement(f.a,{className:t.title,variant:"h6",noWrap:!0},"Employee Directory"),r.a.createElement("div",{className:t.search},r.a.createElement("div",{className:t.searchIcon},r.a.createElement(j.a,null)),r.a.createElement(g.a,{value:e.search,placeholder:" search...",name:"search",onChange:e.handleInputChange,variant:"outlined",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"}})))))}var w=a(98),N=a(99);var C=function(e){return r.a.createElement(w.a,null,r.a.createElement(N.a,{component:"th",scope:"row"},r.a.createElement("img",{src:e.thumbnail,alt:"thumbnail"})),r.a.createElement(N.a,{align:"center"},e.fullName),r.a.createElement(N.a,{align:"center"},e.phone),r.a.createElement(N.a,{align:"center"},e.email),r.a.createElement(N.a,{align:"center"},e.date))},I=a(42),x=a.n(I),L=function(){return x.a.get("https://randomuser.me/api/?results=20&nat=au")},R=a(100),B=a(101),S=a(79),T=a(102),D=a(103),z=a(4),G=a(43),J=Object(G.a)({palette:{primary:{light:"#757ce8",main:"#3f50b5",dark:"#002884",contrastText:"#fff"},secondary:{light:"#ff7961",main:"#f44336",dark:"#ba000d",contrastText:"#000"}}}),P=Object(z.a)((function(){return{head:{backgroundColor:J.palette.primary.light,color:J.palette.primary.contrastText},body:{fontSize:14}}}))(N.a),W=Object(z.a)((function(){return{root:{background:J.palette.secondary.light,color:J.palette.secondary.contrastText,fontSize:14}}}))(R.a),A=Object(E.a)({table:{minWidth:700}}),F=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleInputChange=function(e){var t=e.target.value,a=e.target.name;n.setState(Object(s.a)({},a,t),(function(){return console.log(n.state)}))},n.state={users:[],search:"",searchBy:"fullName"},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;L().then((function(t){var a=t.data.results.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{thumbnail:e.picture.thumbnail,fullName:e.name.first+" "+e.name.last,phone:e.phone,email:e.email,date:e.dob.date})}));e.setState({users:a},(function(){return console.log(e.state)}))})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(B.a,{component:S.a},r.a.createElement(k,{search:this.state.search,handleInputChange:this.handleInputChange}),r.a.createElement(T.a,{className:t.table,"aria-label":"simple table"},r.a.createElement(D.a,null,r.a.createElement(w.a,null,r.a.createElement(P,null),r.a.createElement(P,{align:"center"},r.a.createElement("p",null,"Full Name")),r.a.createElement(P,{align:"center"},r.a.createElement("p",null,"Phone")),r.a.createElement(P,{align:"center"},r.a.createElement("p",null,"Email")),r.a.createElement(P,{align:"center"},r.a.createElement("p",null,"DOB")))),r.a.createElement(W,null,this.state.users.filter((function(t){return t.fullName.toLowerCase().includes(e.state.search.toLowerCase().trim())})).map((function(e,t){return r.a.createElement(C,{key:t,thumbnail:e.picture.thumbnail,fullName:e.fullName,phone:e.phone,email:e.email,date:e.dob.date})})))))}}]),a}(n.Component),M=Object(z.a)(A)(F);var q=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o.a,{className:"sm"},r.a.createElement(M,null)))};c.a.render(r.a.createElement(q,null),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.7c5ea53d.chunk.js.map