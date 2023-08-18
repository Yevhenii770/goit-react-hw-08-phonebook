"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[305],{305:function(n,e,t){t.r(e),t.d(e,{default:function(){return B}});var r,a,i,o,d,l,s,c,u,x,p,m=t(2791),h=t(9434),f=t(5036),b=function(n){return n.data.loading},g=function(n){return n.data.items},v=t(168),w=t(225),Z=w.Z.ul(r||(r=(0,v.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  gap: 15px;\n\n  @media screen and (min-width: 0px) and (max-width: 412px) {\n    justify-content: center;\n  }\n"]))),j=w.Z.li(a||(a=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n\n\n  width: calc((100% - 35px) / 2);\n  \n  border-radius: 4px;\n  padding: 5px;\n  \n  \n  @media screen and (min-width: 0px) and (max-width: 412px) {\n    width: 90%;\n  }\n  background-color: #2196f3;\n  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;\n}\n"]))),y=w.Z.button(i||(i=(0,v.Z)(["\n  display: block;\n  min-width: 75px;\n  height: 40px;\n  border: 0 solid transparent;\n  border-radius: 4px;\n  color: #ffff;\n  background-color: #ff0000;\n  opacity: 1;\n  transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n\n  &:hover {\n    background-color: #ff0808cc;\n  }\n"]))),k=w.Z.h1(o||(o=(0,v.Z)(["\n  text-align: center;\n"]))),C=w.Z.h2(d||(d=(0,v.Z)(["\n  text-align: center;\n  margin-bottom: 15px;\n"]))),A=w.Z.p(l||(l=(0,v.Z)(["\ncolor:white;\n&:first-letter {\n  text-transform: uppercase;\n}\n}"]))),z=w.Z.p(s||(s=(0,v.Z)(["\ncolor:white;\n}"]))),_=t(184),F=function(){var n=(0,h.I0)(),e=(0,h.v9)(g),t=(0,h.v9)((function(n){return n.filter.filterValue})).toLowerCase().trim(),r=e.filter((function(n){var e;return null===(e=n.name)||void 0===e?void 0:e.toLowerCase().includes(t)}));return(0,_.jsx)(Z,{children:r.map((function(e){var t=e.id,r=e.number,a=e.name;return(0,_.jsxs)(j,{children:[(0,_.jsxs)("div",{children:[(0,_.jsx)(A,{children:a}),(0,_.jsx)(z,{children:r})]}),(0,_.jsx)(y,{onClick:function(){return n((0,f._f)(t))},type:"button",children:"Delete"})]},t)}))})},I=function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,e="",t=crypto.getRandomValues(new Uint8Array(n));n--;){var r=63&t[n];e+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return e},L=w.Z.form(c||(c=(0,v.Z)(["\n    width: 320px;\n    margin: 0 auto 15px;\n    padding: 15px;\n    border: 1px solid #d4d4d4;\n    border-radius: 4px;\n\n    @media screen and (min-width: 0px) and (max-width: 412px) {\n    width: calc(100% / 1.1);\n    margin-bottom: 40px;\n  }\n}"]))),P=(w.Z.h1(u||(u=(0,v.Z)(["\n    text-align: center;\n    margin-left: auto;\n    margin-right: auto;\n    margin: 10px 0;\n    font-size: 1.5rem;\n    color: #2196f3;\n}"]))),w.Z.label(x||(x=(0,v.Z)(["\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 15px;\n}"])))),q=(w.Z.div(p||(p=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),t(608)),D=t(6563),S=t(5260);var T,V=function(){var n=I(),e=I(),t=(0,h.v9)(g),r=(0,h.I0)();return(0,_.jsxs)(L,{onSubmit:function(n){n.preventDefault();var e={name:n.currentTarget.elements.name.value,number:n.currentTarget.elements.number.value};t.some((function(n){var t;return null===(t=n.name)||void 0===t?void 0:t.toLowerCase().includes(e.name.toLowerCase())}))?(0,q.V)(e.name):(r((0,f.el)(e)),(0,q.P)(e.name)),n.target.reset()},children:[(0,_.jsx)(P,{htmlFor:n,children:(0,_.jsx)(D.Z,{id:"outlined-basic",label:"Name",variant:"outlined",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})}),(0,_.jsx)(P,{htmlFor:e,children:(0,_.jsx)(D.Z,{id:"outlined-basic",label:"Phone",variant:"outlined",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})}),(0,_.jsx)(S.r,{type:"submit",title:"Add contacts"})]})},N=w.Z.label(T||(T=(0,v.Z)(["\n  width: 350px;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 8px;\n  margin: 0 auto 15px;\n\n  @media screen and (min-width: 0px) and (max-width: 412px) {\n    width: 100%;\n  }\n"]))),R=t(9652),U=function(){var n=(0,h.v9)((function(n){return n.filter.filter})),e=(0,h.I0)();return(0,_.jsx)("div",{children:(0,_.jsx)(N,{children:(0,_.jsx)(D.Z,{id:"outlined-basic",label:"Find contacts by name",variant:"outlined",type:"text",value:n,onChange:function(n){e((0,R.DQ)(n.currentTarget.value))}})})})};function B(){var n=(0,h.I0)(),e=(0,h.v9)(b);return(0,m.useEffect)((function(){n((0,f.yF)())}),[n]),(0,_.jsx)("main",{children:(0,_.jsx)("section",{children:(0,_.jsxs)("div",{children:[(0,_.jsx)(k,{children:"Phonebook"}),(0,_.jsx)(V,{}),(0,_.jsx)("div",{children:e&&"Request in progress..."}),(0,_.jsx)(U,{}),(0,_.jsxs)("div",{children:[(0,_.jsx)(C,{children:"Contacts"}),(0,_.jsx)(F,{})]})]})})})}}}]);
//# sourceMappingURL=305.82d31325.chunk.js.map