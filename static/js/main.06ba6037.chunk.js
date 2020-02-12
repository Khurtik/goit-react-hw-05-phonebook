(this.webpackJsonpreact_js_20=this.webpackJsonpreact_js_20||[]).push([[0],{13:function(t,e,n){t.exports={enter:"slide_enter__2MA8_",enterActive:"slide_enterActive__3TQf4",exit:"slide_exit__1EeME",exitActive:"slide_exitActive__2daqX"}},15:function(t,e,n){t.exports={alert:"Notification_alert__316mx",enter:"Notification_enter__9zWSt",enterActive:"Notification_enterActive__2N4Hd",exit:"Notification_exit__15BVq",exitActive:"Notification_exitActive__21PC3"}},19:function(t,e,n){t.exports={itemBox:"ContactItem_itemBox__1r47b",itemBtn:"ContactItem_itemBtn__rYt-Y"}},2:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__10lSj",inputName:"ContactForm_inputName__77swX",inputNumber:"ContactForm_inputNumber__yKXgh",label:"ContactForm_label__3I6u5",formBtn:"ContactForm_formBtn__3laBM"}},20:function(t,e,n){t.exports={contacts:"ContactList_contacts__5eBFN",contactItem:"ContactList_contactItem__84VrF"}},21:function(t,e,n){t.exports={filterTitle:"Filter_filterTitle__GPsut",filterInput:"Filter_filterInput__3cuzi"}},22:function(t,e,n){t.exports={containerApp:"App_containerApp__32MAX",titleApp:"App_titleApp__Vh73N"}},28:function(t,e,n){t.exports=n(45)},43:function(t,e,n){},44:function(t,e,n){},45:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(7),o=n.n(r),i=n(25),l=n(8),s=n(10),m=n(11),u=n(17),_=n(12),p=n(16),f=n(46),h=n(24),b=n.n(h),d=n(9),E=n(2),v=n.n(E),N=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(_.a)(e)).call.apply(t,[this].concat(c)))).state={name:"",number:""},n.handleChange=function(t){var e=t.target.name;n.setState(Object(d.a)({},e,t.target.value))},n.handleSubmit=function(t){t.preventDefault();var e=n.state,a=e.name,c=e.number;""!==a&&""!==c&&(n.props.onAddContact(Object(l.a)({},n.state)),n.setState({name:"",number:""}))},n}return Object(p.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{className:v.a.contactForm,onSubmit:this.handleSubmit},c.a.createElement("p",null,c.a.createElement("label",{htmlFor:"true"},c.a.createElement("span",{className:v.a.label},"Name"),c.a.createElement("input",{className:v.a.inputName,name:"name",type:"text",onChange:this.handleChange,value:e}))),c.a.createElement("p",null,c.a.createElement("label",{htmlFor:"true"},c.a.createElement("span",{className:v.a.label},"Number"),c.a.createElement("input",{className:v.a.inputNumber,name:"number",type:"tel",onChange:this.handleChange,value:n}))),c.a.createElement("button",{type:"submit",className:v.a.formBtn},"Add contact")))}}]),e}(a.Component),g=n(47),x=n(19),C=n.n(x),A=function(t){var e=t.name,n=t.number,a=t.onDelete;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:C.a.itemBox},c.a.createElement("span",null,e,": ",n),c.a.createElement("button",{type:"button",onClick:a,className:C.a.itemBtn},c.a.createElement("span",null,"\xd7"))))},F=n(13),y=n.n(F),O=n(20),j=n.n(O),S=function(t){var e=t.contacts,n=t.onDelete;return c.a.createElement(g.a,{component:"ul",className:j.a.contacts},e.length>0&&e.map((function(t){return c.a.createElement(f.a,{key:t.id,timeout:250,unmountOnExit:!0,classNames:y.a},c.a.createElement("li",{className:j.a.contactItem},c.a.createElement(A,{name:t.name,number:t.number,onDelete:function(){return n(t.id)}})))})))},B=n(21),I=n.n(B),w=function(t){var e=t.value,n=t.onChangeFilter;return c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:I.a.filterTitle},"Find contacts by name"),c.a.createElement("input",{className:I.a.filterInput,type:"text",value:e,onChange:n}))},k=n(15),D=n.n(k),M=function(t){var e=t.text;return c.a.createElement("div",{className:D.a.alert},e)},T=n(22),J=n.n(T),L=(n(43),function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(_.a)(e)).call.apply(t,[this].concat(c)))).state={contacts:[],filter:"",text:"",showingAlert:!1},n.deleteContact=function(t){n.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},n.changeFilter=function(t){n.setState({filter:t.target.value})},n.addContact=function(t){if(n.state.contacts.find((function(e){return e.name===t.name})))n.setState({text:"Contact already exists!",showingAlert:!0});else{var e=Object(l.a)({},t,{id:b.a.generate()});n.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[e])}}))}},n}return Object(p.a)(e,t),Object(m.a)(e,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;e.contacts!==n&&localStorage.setItem("contacts",JSON.stringify(n))}},{key:"render",value:function(){var t=this,e=this.state,n=e.contacts,a=e.filter,r=e.text,o=e.showingAlert,i=function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))}(n,a);return c.a.createElement("div",{className:J.a.containerApp},c.a.createElement(f.a,{in:o,timeout:250,classNames:D.a,onEntered:function(){return setTimeout((function(){t.setState({showingAlert:!1})}),5e3)},unmountOnExit:!0},c.a.createElement(M,{text:r})),c.a.createElement(f.a,{in:!0,timeout:500,classNames:"title",appear:!0},c.a.createElement("h1",{className:J.a.titleApp},"Phonebook")),c.a.createElement(N,{onAddContact:this.addContact}),c.a.createElement("h2",null,"Contacts"),c.a.createElement(f.a,{in:n.length>=2,timeout:250,unmountOnExit:!0,classNames:y.a},c.a.createElement(w,{value:a,onChangeFilter:this.changeFilter})),c.a.createElement(S,{contacts:i,onDelete:this.deleteContact}))}}]),e}(a.Component));n(44);o.a.render(c.a.createElement(L,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.06ba6037.chunk.js.map