(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(t,e,s){},16:function(t,e,s){"use strict";s.r(e);var n=s(5),r=s.n(n),i=s(4),o=s(6),c=s(7),a=s(9),l=s(8),u=s(1),b=s.n(u),h=s(3),d=s.n(h),j=(s(14),s(0)),p=function(t){var e=t.goods;return Object(j.jsx)("ul",{children:e.map((function(t){return Object(j.jsx)("li",{children:t},t)}))})},y=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],f=function(t){Object(a.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(o.a)(this,s);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={visibility:!1,sortBy:"",isReversed:!1},t.showPage=function(){t.setState({visibility:!0})},t.reverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.sortByAlph=function(){t.setState({sortBy:"alph"})},t.sortByLeng=function(){t.setState({sortBy:"leng"})},t.reset=function(){t.setState({sortBy:"",isReversed:!1})},t.listOfGoods=function(e){var s=t.state,n=s.isReversed,r=s.sortBy,o=Object(i.a)(e);switch(r){case"alph":o.sort((function(t,e){return t.localeCompare(e)}));break;case"leng":o.sort((function(t,e){return t.length-e.length}));break;default:o=Object(i.a)(e)}return n&&o.reverse(),o},t}return Object(c.a)(s,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("button",{type:"button",onClick:this.showPage,className:d()("start",this.state.visibility&&"hidden"),children:"Start"}),Object(j.jsxs)("section",{className:d()(!this.state.visibility&&"hidden"),children:[Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("button",{type:"button",onClick:this.reverse,children:"Reverse"}),Object(j.jsx)("button",{type:"button",onClick:this.sortByAlph,children:"Sort alphabetically"}),Object(j.jsx)("button",{type:"button",onClick:this.sortByLeng,children:"Sort by length"}),Object(j.jsx)("button",{className:"reset",type:"button",onClick:this.reset,children:"Reset"})]}),Object(j.jsx)(p,{goods:this.listOfGoods(y)})]})]})}}]),s}(b.a.Component);r.a.render(Object(j.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e6bc7561.chunk.js.map