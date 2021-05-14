(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{41:function(e,t,s){},43:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){},47:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s(12),r=s.n(n),c=s(13),l=s(14),i=s(15),o=s(18),d=s(17),h=s(16),u=s.n(h),j={search:function(){return u.a.get("https://randomuser.me/api/?inc=name,email,picture,cell&nat=us&results=100")}},m=(s(41),s(0));var b=function(e){return Object(m.jsx)("form",{children:Object(m.jsxs)("div",{className:"form-group custom-form",children:[Object(m.jsx)("label",{htmlFor:"search",children:"Search:"}),Object(m.jsx)("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Filter employees by first and last name",id:"search"}),Object(m.jsx)("button",{onClick:e.handleGetNew,className:"btn btn-primary mt-3",children:"Get New Set of Employees"})]})})};s(43);var p=function(e){var t=e.results,s=(t=t.filter((function(t){return!0===t.name.first.toLowerCase().includes(e.search.toLowerCase())||!0===t.name.last.toLowerCase().includes(e.search.toLowerCase())}))).map((function(e){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{style:{textAlign:"center"},children:Object(m.jsx)("img",{alt:e.name.last,className:"img-fluid",src:e.picture.medium})}),Object(m.jsx)("td",{children:e.name.first}),Object(m.jsx)("td",{children:e.name.last}),Object(m.jsx)("td",{children:e.email}),Object(m.jsx)("td",{children:e.cell})]},e.cell)}));return Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{children:Object(m.jsx)("i",{children:"Click on the up and down arrows to sort by column"})}),Object(m.jsxs)("table",{className:"table table-bordered table-hover",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{style:{textAlign:"center"},scope:"col",children:"Image"}),Object(m.jsxs)("th",{scope:"col",children:["First Name",Object(m.jsx)("span",{className:"custom-btn custom-btn-down","data-name":"first","data-sort":"asc",onClick:e.sortByName,children:"\ud83d\udd3d"}),Object(m.jsx)("span",{className:"custom-btn","data-name":"first","data-sort":"desc",onClick:e.sortByName,children:"\ud83d\udd3c"})]}),Object(m.jsxs)("th",{scope:"col",children:["Last Name",Object(m.jsx)("span",{className:"custom-btn custom-btn-down","data-name":"last","data-sort":"asc",onClick:e.sortByName,children:"\ud83d\udd3d"}),Object(m.jsx)("span",{className:"custom-btn","data-name":"last","data-sort":"desc",onClick:e.sortByName,children:"\ud83d\udd3c"})]}),Object(m.jsx)("th",{scope:"col",children:"Email"}),Object(m.jsx)("th",{scope:"col",children:"Cell Phone"})]})}),Object(m.jsx)("tbody",{children:s})]})]})};s(44);var f=function(e){return Object(m.jsx)("div",{className:"container custom-container",children:e.children})},x=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(l.a)(this,s);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={search:"",results:[]},e.searchEmployees=function(){j.search().then((function(t){return e.setState({results:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(t){var s=t.target.name,a=t.target.value;e.setState(Object(c.a)({},s,a))},e.handleGetNew=function(t){t.preventDefault(),e.searchEmployees()},e.sortByName=function(t){var s,a,n=e.state.results;t.preventDefault();var r=t.target.getAttribute("data-name"),c=t.target.getAttribute("data-sort");n.sort((function(e,t){if("first"===r?(s=e.name.first.toUpperCase(),a=t.name.first.toUpperCase()):"last"===r&&(s=e.name.last.toUpperCase(),a=t.name.last.toUpperCase()),"asc"===c){if(s<a)return-1;if(s>a)return 1}else if("desc"===c){if(s<a)return 1;if(s>a)return-1}return 0})),e.setState({results:n})},e}return Object(i.a)(s,[{key:"componentDidMount",value:function(){this.searchEmployees()}},{key:"render",value:function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(f,{children:[Object(m.jsx)(b,{search:this.state.search,handleGetNew:this.handleGetNew,handleInputChange:this.handleInputChange}),Object(m.jsx)(p,{search:this.state.search,results:this.state.results,sortByName:this.sortByName})]})})}}]),s}(a.Component);s(45);var O=function(e){return Object(m.jsx)("div",{className:"jumbotron custom-jumbo",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{className:"display-4",children:e.title}),Object(m.jsx)("p",{className:"lead",children:e.subtext})]})})};var y=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(O,{title:"Employee Directory",subtext:"Enter search criteria to find and filter employees."}),Object(m.jsx)(x,{})]})};s(46);r.a.render(Object(m.jsx)(y,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.d9bda735.chunk.js.map