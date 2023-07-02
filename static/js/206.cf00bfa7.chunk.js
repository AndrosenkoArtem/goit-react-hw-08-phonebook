"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[206],{9206:function(n,e,r){r.r(e),r.d(e,{default:function(){return T}});var t,i,o,a,s,d,l,x=r(1413),p=r(9439),c=r(5705),f=r(6727),u=r(168),h=r(6444),b=h.ZP.label(t||(t=(0,u.Z)(["\n  display: block;\n  margin-bottom: 20px;\n  div {\n    margin-right: 5px;\n    font-weight: 600;\n  }\n  input {\n    margin: 5px 0px;\n    border-radius: 8px;\n    border: 1px solid black;\n    font-weight: 500;\n  }\n  span {\n    display: flex;\n    justify-content: center;\n    color: red;\n    font-weight: 500;\n    text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff, 1px 1px #fff,\n      -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;\n  }\n"]))),m=h.ZP.button(i||(i=(0,u.Z)(["\n  width: auto;\n  height: auto;\n  padding: 7px 9px;\n  background-color: rgb(255, 255, 255);\n  font-size: 16px;\n  font-weight: 700;\n  border-radius: 5px;\n  border: 1px solid rgb(172, 172, 172);\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 6px -2px;\n  outline: none;\n  transition: all 0.25s ease 0s;\n  cursor: pointer;\n  &:hover {\n    transform: scale(1.1);\n  }\n"]))),g=r(5036),j=r(184),w=f.Ry().shape({name:f.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Invalid name").required("Obligatory field"),number:f.Z_().matches(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,"Invalid phone number format").required("Obligatory field")}),Z=function(){var n=(0,g.F3)(),e=(0,p.Z)(n,1)[0];return(0,j.jsx)(c.J9,{initialValues:{name:"",number:""},onSubmit:function(n,r){e((0,x.Z)({},n)),r.resetForm()},validationSchema:w,children:(0,j.jsxs)(c.l0,{children:[(0,j.jsxs)(b,{children:[(0,j.jsx)("div",{children:"Name"}),(0,j.jsx)(c.gN,{type:"text",name:"name"}),(0,j.jsx)(c.Bc,{name:"name",component:"span"})]}),(0,j.jsxs)(b,{children:[(0,j.jsx)("div",{children:"Number"}),(0,j.jsx)(c.gN,{type:"tel",name:"number"}),(0,j.jsx)(c.Bc,{name:"number",component:"span"})]}),(0,j.jsx)(m,{type:"submit",children:"Add contact"})]})})},v=h.ZP.ul(o||(o=(0,u.Z)(["\n  list-style: none;\n  display: inline-grid;\n"]))),y=h.ZP.button(a||(a=(0,u.Z)(["\n  width: auto;\n  height: auto;\n  padding: 7px 9px;\n  background-color: #fff;\n  font-size: 16px;\n  font-weight: 700;\n  border-radius: 5px;\n  border: 1px solid #acacac;\n  box-shadow: 0 2px 6px -2px rgba(0, 0, 0, 0.2);\n  outline: none;\n  transition: 0.25s ease;\n  cursor: pointer;\n  &:hover {\n    background-color: #ff0000;\n    color: white;\n  }\n"]))),k=h.ZP.li(s||(s=(0,u.Z)(["\n  display: inline-flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n\n  padding: 7px 9px;\n  background-color: #fff;\n  font-size: 16px;\n  font-weight: 700;\n  border-radius: 5px;\n  border: 1px solid #acacac;\n  box-shadow: 0 2px 6px -2px rgba(0, 0, 0, 0.2);\n  outline: none;\n  &:not(:last-child) {\n    margin-bottom: 10px;\n  }\n  div {\n    margin-right: 15px;\n  }\n"]))),P=r(5048),_=function(n){return n.filter},z=r(5114),F=(0,h.F4)(d||(d=(0,u.Z)(["\n0% {\n  transform: rotate(0deg);\n}\n\n100% {\n  transform: rotate(1turn);\n}\n"]))),C=(0,h.ZP)(z.F1K)(l||(l=(0,u.Z)(["\n  display: flex;\n  margin: auto;\n  margin-top: 20px;\n  animation: "," 0.85s linear infinite;\n"])),F);C.defaultProps={size:40};var N,A,q=function(){var n=(0,g.wY)(),e=n.data,r=n.error,t=n.isFetching,i=(0,g.zr)(),o=(0,p.Z)(i,1)[0],a=(0,P.v9)(_);return(0,j.jsxs)(j.Fragment,{children:[t&&(0,j.jsx)(C,{}),r&&(0,j.jsx)("p",{children:r.data}),e&&(0,j.jsx)(v,{children:function(n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))}(a).map((function(n){var e=n.id,r=n.name,t=n.number;return(0,j.jsxs)(k,{children:[(0,j.jsxs)("div",{children:[r,": ",t]}),(0,j.jsx)(y,{onClick:function(){return o(e)},type:"button",children:"Delete"})]},e)}))})]})},I=h.ZP.h2(N||(N=(0,u.Z)(["\n  margin-bottom: 10px;\n  font-size: 20px;\n  font-weight: 500;\n"]))),B=h.ZP.input(A||(A=(0,u.Z)(["\n  border-radius: 8px;\n  border: 2px solid black;\n  font-weight: 500;\n  display: block;\n  margin-inline: auto;\n"]))),L=r(1273),O=function(){var n=(0,P.I0)(),e=(0,P.v9)(_);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(I,{children:"Find by Name"}),(0,j.jsx)(B,{onChange:function(e){return n((0,L.T)(e.currentTarget.value))},value:e.filter,type:"text",name:"filter"})]})},S=r(4270);function T(){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(S.q,{children:(0,j.jsx)("title",{children:"Contacts"})}),(0,j.jsxs)("section",{children:[(0,j.jsx)("h1",{children:"Phonebook"}),(0,j.jsx)(Z,{}),(0,j.jsx)("h2",{children:"Contacts"}),(0,j.jsx)(O,{}),(0,j.jsx)(q,{})]})]})}}}]);
//# sourceMappingURL=206.cf00bfa7.chunk.js.map