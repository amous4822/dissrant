(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{183:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(82),l=a.n(s),o=(a(92),a(23)),c=(a(93),a(8)),u=a(9),i=a(11),m=a(10),p=a(12),d=a(27),h=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Home"},r.a.createElement("div",{className:"lander"},r.a.createElement("h1",null,"DissRant"),r.a.createElement("p",null,"A place to rant in groups")))}}]),t}(n.Component),f=a(3),b=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).addEmail=function(e){e.preventDefault();var t=e.target.elements.exampleInputEmail1.value,n=e.target.elements.exampleInputPassword1.value;console.log(t,n),f.auth().signInWithEmailAndPassword(t,n).then(function(){a.props.userHasAuthenticated(!0)}).catch(function(e){alert(e.message)})},a.renderRedirect=function(){if(a.props.isAuthenticated)return r.a.createElement(d.a,{to:{pathname:"/messaging"}})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card"},this.renderRedirect(),r.a.createElement("form",{onSubmit:this.addEmail},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},r.a.createElement("strong",null,"Email")),r.a.createElement("input",{type:"email",className:"form-control",id:"exampleInputEmail1",placeholder:"Enter email"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputPassword1"},r.a.createElement("strong",null,"Password")),r.a.createElement("input",{type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password"})),r.a.createElement("button",{type:"submit",className:"subbtn btn btn-outline-dark btn-block "},"Login")))}}]),t}(r.a.Component),E=a(34),g=a.n(E),v=a(63),O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).registerMail=function(){var e=Object(v.a)(g.a.mark(function e(t){var n,r,s,l,o;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n=t.target.elements.InputEmail1.value,r=t.target.elements.InputPassword1.value,s=t.target.elements.groupCode.value,l=t.target.elements.userName.value,a.setState({groupCode:s}),(o=f.database().ref().child("rooms/"+s+"/members")).once("value").then(function(e){if(null!=e.val()){var t=[];e.forEach(function(e){t.push(e.val())}),t.includes(l)?alert("Another user with the same username is already present in the group"):a.createUser(n,r,l,o,s)}else a.createUser(n,r,l,o,s)});case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.createUser=function(){var e=Object(v.a)(g.a.mark(function e(t,n,r,s,l){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.auth().createUserWithEmailAndPassword(t,n).catch(function(e){alert(e.message),f.auth().signOut()});case 2:if(null==f.auth().currentUser){e.next=8;break}return e.next=5,f.auth().currentUser.updateProfile({displayName:r+"~"+l});case 5:s.push().set(r),a.setState({redirect:!0});case 8:case"end":return e.stop()}},e)}));return function(t,a,n,r,s){return e.apply(this,arguments)}}(),a.renderRedirect=function(){if(a.state.redirect)return r.a.createElement(d.a,{to:{pathname:"/messaging",state:{groupCode:a.state.groupCode}}})},a.state={redirect:!1,groupCode:""},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.renderRedirect(),r.a.createElement("div",{className:"card shadow-lg"},r.a.createElement("form",{onSubmit:this.registerMail},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"InputEmail1"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",id:"InputEmail1",placeholder:"Enter email"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"userName"},"User Name"),r.a.createElement("input",{type:"text",className:"form-control",id:"userName",placeholder:"User Name"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"groupCode"},"Group Code"),r.a.createElement("input",{type:"text",className:"form-control",id:"groupCode",placeholder:"Group Code"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"InputPassword1"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"InputPassword1",placeholder:"Password"})),r.a.createElement("button",{className:"btn btn-primary"},"Register"))))}}]),t}(n.Component),j=a(85),w=function(e){var t=e.component,a=e.props,n=Object(j.a)(e,["component","props"]);return r.a.createElement(d.b,Object.assign({},n,{render:function(e){return r.a.createElement(t,Object.assign({},e,a))}}))},N=a(86),y=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.props.allPosts.map(function(e,t){return r.a.createElement("div",{key:t,className:"card post"},e)}))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).setGroupCode=function(e){e.displayName&&(a.setState({groupCode:e.displayName.split("~")[1],username:e.displayName.split("~")[0]}),f.database().ref().child("rooms/"+a.state.groupCode+"/posts").on("value",function(e){var t=[];e.forEach(function(e){t.push(e.val())}),a.setState({posts:t})}),a.unsubscribe())},a.handlePostInput=function(e){e.preventDefault();var t=f.database().ref().child("rooms/"+a.state.groupCode+"/posts"),n=a.state.username+": "+e.target.elements.newPost.value;t.push().set(n);var r=[].concat(Object(N.a)(a.state.posts),[n]);a.setState({posts:r}),e.target.elements.newPost.value=""},a.state={groupCode:"",username:"",posts:[]},a.unsubscribe=f.auth().onAuthStateChanged(function(e){return a.setGroupCode(e)}),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y,{allPosts:this.state.posts}),r.a.createElement("div",{className:"card shadow-lg"},r.a.createElement("form",{onSubmit:this.handlePostInput},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"sr-only"},"Post Body"),r.a.createElement("textarea",{type:"text",name:"newPost"})),r.a.createElement("button",{className:"subbtn mb-2 btn btn-primary",type:"submit"},"Post"))))}}]),t}(r.a.Component),P=function(e){var t=e.authProps;return r.a.createElement(d.d,null,r.a.createElement(w,{path:"/",exact:!0,component:h}),r.a.createElement(w,{props:t,path:"/login",exact:!0,component:b}),r.a.createElement(w,{props:t,path:"/register",exact:!0,component:O}),r.a.createElement(w,{path:"/messaging",exact:!0,component:C}),r.a.createElement(d.b,null))},x=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).userHasAuthenticated=function(e){a.setState({isAuthenticated:e})},a.handleLogout=function(){f.auth().signOut()},a.state={isAuthenticated:""},f.auth().onAuthStateChanged(function(e){e?(console.log("user:",e),a.userHasAuthenticated(!0)):(console.log("not logged in"),a.userHasAuthenticated(!1))}),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e={isAuthenticated:this.state.isAuthenticated,userHasAuthenticated:this.userHasAuthenticated};return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg color-white"},r.a.createElement(o.b,{className:"navbar-brand",to:"/"},"DissRant"),r.a.createElement("ul",{className:"navbar-nav ml-auto"},this.state.isAuthenticated?r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{onClick:this.handleLogout},r.a.createElement("a",{href:"/"},"Logout")),r.a.createElement("li",null,r.a.createElement("a",{href:"/messaging"},"Posts"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement("a",{href:"/login"},"Login")),r.a.createElement("li",null,r.a.createElement("a",{href:"/register"},"Signup"))))),r.a.createElement(P,{authProps:e}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));f.initializeApp({apiKey:"AIzaSyDA1TNXkaL3XXjiuCf7fOxamYqR4XVfg7o",authDomain:"dissrant-fc0c9.firebaseapp.com",databaseURL:"https://dissrant-fc0c9.firebaseio.com",projectId:"dissrant-fc0c9",storageBucket:"",messagingSenderId:"1004262125748"}),l.a.render(r.a.createElement(o.a,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},87:function(e,t,a){e.exports=a(183)},93:function(e,t,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.a90b6850.chunk.js.map