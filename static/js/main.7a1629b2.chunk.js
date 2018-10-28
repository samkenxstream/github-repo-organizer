(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{271:function(e,t,n){e.exports=n(594)},431:function(e,t){},433:function(e,t){},503:function(e,t){},594:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(20),o=n.n(i),c=n(36),s=n(66),u=n(67),l=n(69),m=n(68),p=n(70),f=n(41),g=n(10),d=n(264),E=n.n(d),h=n(84),b=n.n(h),O=n(48),w=n.n(O),v=n(83),j=n.n(v),k=n(33),S=n.n(k),x=n(265),y=n.n(x),T=n(263),C=n.n(T),I=n(121),_=n(266),L=n.n(_),R=n(82),A=n.n(R),N=n(49),D=n.n(N),P=n(51),F=n.n(P),z=n(597),G=n(596),U=n(599),B=n(598),W=n(252),H=n.n(W),q=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(w.a,{variant:"display1"},"Log in!"),a.a.createElement(w.a,{paragraph:!0},"Please log in with GitHub to start organizing your repositories."))}}]),t}(r.Component),K=n(39),M=n.n(K),V=n(72),J=n.n(V),X=n(27),Q=n(11),Y=function(e){return a.a.createElement(Q.b,Object.assign({formatterComponent:function(e){return e.value.toLocaleDateString()}},e))},Z=function(e){return a.a.createElement(Q.b,Object.assign({formatterComponent:function(e){var t=e.value,n=t.href,r=t.title;return a.a.createElement("a",{href:n},r)}},e))},$=function(e){return a.a.createElement(Q.b,Object.assign({formatterComponent:function(e){var t=e.value;return t?a.a.createElement(a.a.Fragment,null,t.map(function(e){return a.a.createElement(J.a,{style:{margin:"3px"},key:e,label:e})})):null}},e))},ee=function(e){return a.a.createElement(Q.b,Object.assign({formatterComponent:function(e){var t=e.value;return a.a.createElement(J.a,{label:t?"True":"False"})}},e))},te=[{columnName:"topics",wordWrapEnabled:!0},{columnName:"description",wordWrapEnabled:!0}],ne=["isPrivate","isArchived","isFork","owner","licenseNickname"],re=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement(M.a,null,a.a.createElement(X.b,{columns:[{name:"name",title:"Name",getCellValue:function(e){return{href:e.url,title:e.name}}},{name:"description",title:"Description"},{name:"createdAt",title:"Created At",getCellValue:function(e){return new Date(e.createdAt)}},{name:"topics",title:"Topics"},{name:"stars",title:"Stars"},{name:"language",title:"Language"},{name:"owner",title:"Owner"},{name:"isPrivate",title:"Private"},{name:"isArchived",title:"Archived"},{name:"isFork",title:"Fork"},{name:"licenseNickname",title:"License"}],rows:this.props.repositories},a.a.createElement(Y,{for:["createdAt"]}),a.a.createElement(Z,{for:["name"]}),a.a.createElement($,{for:["topics"]}),a.a.createElement(ee,{for:["isPrivate","isArchived","isFork"]}),a.a.createElement(Q.d,{defaultFilters:[]}),a.a.createElement(Q.m,{defaultSorting:[]}),a.a.createElement(Q.l,null),a.a.createElement(Q.h,null),a.a.createElement(Q.i,null),a.a.createElement(X.d,{columnExtensions:te}),a.a.createElement(X.g,{showSortingControls:!0}),a.a.createElement(X.f,{showFilterSelector:!0}),a.a.createElement(X.e,{defaultHiddenColumnNames:ne}),a.a.createElement(X.h,null),a.a.createElement(X.c,null),a.a.createElement(X.a,null)))}}]),t}(r.Component),ae=Object(g.withStyles)(function(e){return{}})(re),ie=n(123),oe=n(65),ce=function(e){var t=e.repositories.flatMap(function(e){return e.topics}).reduce(function(e,t){return Object(c.a)({},e,Object(oe.a)({},t,e[t]?e[t]+1:1))},{}),n=Object.entries(t).map(function(e){var t=Object(ie.a)(e,2);return{topicName:t[0],topicCount:t[1]}});return console.log(n),a.a.createElement(M.a,null,a.a.createElement(X.b,{columns:[{name:"topicName",title:"Topic Name"},{name:"topicCount",title:"Topic Count"}],rows:n},a.a.createElement(Q.m,{defaultSorting:[{columnName:"topicCount",direction:"desc"}]}),a.a.createElement(Q.i,null),a.a.createElement(X.d,null),a.a.createElement(X.g,{showSortingControls:!0})))},se=function(e){var t=e.repositories.map(function(e){return e.licenseNickname}).reduce(function(e,t){return Object(c.a)({},e,Object(oe.a)({},t,e[t]?e[t]+1:1))},{}),n=Object.entries(t).map(function(e){var t=Object(ie.a)(e,2);return{license:t[0],licenseCount:t[1]}});return console.log(n),a.a.createElement(M.a,null,a.a.createElement(X.b,{columns:[{name:"license",title:"License"},{name:"licenseCount",title:"License Count"}],rows:n},a.a.createElement(Q.m,{defaultSorting:[{columnName:"licenseCount",direction:"desc"}]}),a.a.createElement(Q.i,null),a.a.createElement(X.d,null),a.a.createElement(X.g,{showSortingControls:!0})))},ue=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={drawerOpen:!1},n.ifLoggedOut=n.ifLoggedOut.bind(Object(f.a)(Object(f.a)(n))),n.ifLoggedIn=n.ifLoggedIn.bind(Object(f.a)(Object(f.a)(n))),n.ifRepositories=n.ifRepositories.bind(Object(f.a)(Object(f.a)(n))),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"toggleDrawer",value:function(e){this.setState(function(t){return Object(c.a)({},t,{drawerOpen:e||!t.drawerOpen})})}},{key:"ifRepositories",value:function(e){return this.props.repositories?e:null}},{key:"ifLoggedOut",value:function(e){return this.props.loggedIn?null:e}},{key:"ifLoggedIn",value:function(e){return this.props.loggedIn?e:null}},{key:"render",value:function(){var e=this,t=this.props.classes;return a.a.createElement(a.a.Fragment,null,a.a.createElement(C.a,null),a.a.createElement(z.a,null,a.a.createElement("div",{className:"App"},a.a.createElement(E.a,null,a.a.createElement(b.a,null,this.ifLoggedIn(a.a.createElement(S.a,{className:t.menuButton,color:"inherit","aria-label":"Menu",onClick:function(){return e.toggleDrawer()}},a.a.createElement(y.a,null))),a.a.createElement(w.a,{variant:"title",color:"inherit",className:t.grow},"GitHub Repo Organizer"),this.ifLoggedOut(a.a.createElement(j.a,{onClick:this.props.startLogIn,color:"inherit"},"Login")))),a.a.createElement(L.a,{open:this.state.drawerOpen,onClose:function(){return e.toggleDrawer(!1)}},a.a.createElement("div",{onClick:function(){return e.toggleDrawer(!1)},onKeyDown:function(){return e.toggleDrawer(!1)}},a.a.createElement(A.a,null,a.a.createElement(D.a,{button:!0},a.a.createElement(G.a,{to:"/"},a.a.createElement(F.a,{primary:"Repositories"}))),a.a.createElement(D.a,{button:!0},a.a.createElement(G.a,{to:"/topics"},a.a.createElement(F.a,{primary:"Topics"}))),a.a.createElement(D.a,{button:!0},a.a.createElement(G.a,{to:"/licenses"},a.a.createElement(F.a,{primary:"Licenses"})))))),a.a.createElement("main",{className:t.content},a.a.createElement("div",{className:t.appBarSpacer}),this.ifLoggedOut(a.a.createElement(q,null)),this.ifRepositories(a.a.createElement(U.a,null,a.a.createElement(B.a,{exact:!0,path:"/github-repo-organizer/",component:function(t){var n=H.a.parse(t.location.search);return a.a.createElement(ae,{queryParams:n,repositories:e.props.repositories})}}),a.a.createElement(B.a,{exact:!0,path:"/github-repo-organizer/topics",component:function(){return a.a.createElement(ce,{repositories:e.props.repositories})}}),a.a.createElement(B.a,{exact:!0,path:"/github-repo-organizer/licenses",component:function(){return a.a.createElement(se,{repositories:e.props.repositories})}})))))))}}]),t}(r.Component),le=Object(I.b)(function(e){return{loggedIn:e.loggedIn,repositories:e.repositories}},function(e){return{startLogIn:function(){return e({type:"START_LOG_IN"})},loadRepositories:function(){return e({type:"START_LOAD_REPOSITORIES"})},loadUser:function(){return e({type:"START_LOAD_USER"})}}})(Object(g.withStyles)(function(e){return{root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,padding:3*e.spacing.unit,height:"100vh",overflow:"auto"}}})(ue)),me=n(71),pe=n(270),fe=n(21),ge=n.n(fe),de=n(25),Ee=n(120),he=n.n(Ee),be=n(268),Oe=n(269),we=n.n(Oe),ve=ge.a.mark(Re),je=ge.a.mark(Ae),ke=ge.a.mark(Ne),Se=ge.a.mark(De),xe=ge.a.mark(Pe),ye=ge.a.mark(Fe),Te=ge.a.mark(ze),Ce=ge.a.mark(Ge),Ie=ge.a.mark(Ue),_e=new we.a,Le="https://github-auth-backend-hugh.glitch.me/start_auth";function Re(){var e;return ge.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=he.a.parse(window.location.search.substring(1))).access_token){t.next=6;break}return t.next=4,Object(de.c)({type:"SET_ACCESS_TOKEN",access_token:e.access_token});case 4:return t.next=6,ze();case 6:case"end":return t.stop()}},ve,this)}function Ae(){return ge.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(de.e)("INIT",Re);case 2:case"end":return e.stop()}},je,this)}function Ne(){var e,t;return ge.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e={redirect_uri:window.location.origin+window.location.pathname,scope:["repo"]},t="".concat(Le,"?").concat(he.a.stringify(e)),n.next=4,window.location=t;case 4:case"end":return n.stop()}},ke,this)}function De(){return ge.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(de.e)("START_LOG_IN",Ne);case 2:case"end":return e.stop()}},Se,this)}function Pe(e){var t,n,r,a;return ge.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Object(de.d)(function(e){return e.accessToken});case 2:return t=i.sent,n=new be.GitHub({token:t}),i.next=6,Object(de.b)(function(){return n.query("\n    query {\n      viewer {\n        repositories (first:100".concat(e?', after:"'+e+'"':"",") {\n          pageInfo {\n            endCursor\n          }\n          totalCount,\n          nodes {\n            id,\n            name,\n            description,\n            createdAt,\n            repositoryTopics(first:100) {\n              nodes {\n                topic {\n                  id\n                  name\n                }\n              }\n            }\n            stargazers {totalCount},\n            primaryLanguage {\n              name\n            }\n            isPrivate\n            isArchived\n            owner {\n              login\n            }\n            nameWithOwner\n            url\n            isFork\n            licenseInfo {\n              name\n              nickname\n            }\n          }\n        }\n      }\n    }"))});case 6:return r=i.sent,a=r.viewer.repositories.nodes.map(function(e){return{id:e.id,name:e.name,nameWithOnwer:e.nameWithOwner,description:e.description,createdAt:e.createdAt,topics:e.repositoryTopics.nodes.map(function(e){return e.topic.name}),stars:e.stargazers.totalCount,language:(t=e.primaryLanguage,t&&t.name),isPrivate:e.isPrivate,isArchived:e.isArchived,url:e.url,owner:e.owner.login,isFork:e.isFork,licenseNickname:e.licenseInfo&&(e.licenseInfo.nickname||e.licenseInfo.name)};var t}),i.next=10,Object(de.c)({type:"SET_REPOSITORIES",repositories:a});case 10:return i.next=12,Object(de.d)(function(e){return e.repositories.length});case 12:if(!(i.sent<r.viewer.repositories.totalCount)){i.next=16;break}return i.next=16,Pe(r.viewer.repositories.pageInfo.endCursor);case 16:case"end":return i.stop()}},xe,this)}function Fe(){return ge.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(de.e)("START_LOAD_REPOSITORIES",Pe);case 2:case"end":return e.stop()}},ye,this)}function ze(){var e,t,n,r;return ge.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(de.d)(function(e){return e.accessToken});case 2:return e=a.sent,_e.authenticate({type:"oauth",token:e}),t={owner:"hughrawlinson",repo:"github-repo-organizer"},a.next=7,Object(de.b)(function(){return _e.users.get()});case 7:if(n=a.sent,"hughrawlinson"===(r=n.data).login){a.next=19;break}return a.prev=10,a.next=13,Object(de.b)(function(){return _e.activity.checkStarringRepo(t)});case 13:a.next=19;break;case 15:return a.prev=15,a.t0=a.catch(10),a.next=19,Object(de.b)(function(){return _e.activity.starRepo(t)});case 19:return a.next=21,Object(de.c)({type:"SET_USER",user:r});case 21:return a.next=23,Pe();case 23:case"end":return a.stop()}},Te,this,[[10,15]])}function Ge(){return ge.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(de.e)("START_LOAD_USER",ze);case 2:case"end":return e.stop()}},Ce,this)}function Ue(){return ge.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(de.a)([Ae(),De(),Fe(),Ge()]);case 2:case"end":return e.stop()}},Ie,this)}var Be=n(168),We={loggedIn:!1},He=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ACCESS_TOKEN":return Object(c.a)({},e,{accessToken:t.access_token,loggedIn:!0});case"SET_REPOSITORIES":return Object(c.a)({},e,{repositories:Object(Be.a)(e.repositories||[]).concat(Object(Be.a)(t.repositories))});case"SET_USER":return Object(c.a)({},e,{user:t.user});default:return e}},qe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||me.c,Ke=Object(pe.a)(),Me=Object(me.d)(He,qe(Object(me.a)(Ke)));Ke.run(Ue),Me.dispatch({type:"INIT"}),o.a.render(a.a.createElement(I.a,{store:Me},a.a.createElement(le,null)),document.getElementById("root"))}},[[271,2,1]]]);
//# sourceMappingURL=main.7a1629b2.chunk.js.map