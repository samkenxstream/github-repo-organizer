(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{271:function(e,t,n){e.exports=n(594)},431:function(e,t){},433:function(e,t){},503:function(e,t){},594:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(20),i=n.n(o),c=n(30),s=n(66),u=n(67),l=n(70),m=n(68),p=n(71),g=n(41),f=n(11),d=n(264),E=n.n(d),b=n(85),h=n.n(b),O=n(51),w=n.n(O),v=n(84),j=n.n(v),k=n(35),S=n.n(k),x=n(265),C=n.n(x),y=n(263),T=n.n(y),I=n(122),_=n(266),L=n.n(_),R=n(83),A=n.n(R),N=n(47),D=n.n(N),P=n(48),z=n.n(P),F=n(597),G=n(596),U=n(599),B=n(598),W=n(252),H=n.n(W),q=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(w.a,{variant:"display1"},"Log in!"),a.a.createElement(w.a,{paragraph:!0},"Please log in with GitHub to start organizing your repositories."))}}]),t}(r.Component),K=n(34),M=n.n(K),V=n(73),J=n.n(V),X=n(21),Q=n(10),Y=function(e){return a.a.createElement(Q.b,Object.assign({formatterComponent:function(e){return e.value.toLocaleDateString()}},e))},Z=function(e){return a.a.createElement(Q.b,Object.assign({formatterComponent:function(e){var t=e.value,n=t.href,r=t.title;return a.a.createElement("a",{href:n},r)}},e))},$=function(e){return a.a.createElement(Q.b,Object.assign({formatterComponent:function(e){var t=e.value;return t?a.a.createElement(a.a.Fragment,null,t.map(function(e){return a.a.createElement(J.a,{style:{margin:"3px"},key:e,label:e})})):null}},e))},ee=function(e){return a.a.createElement(Q.b,Object.assign({formatterComponent:function(e){var t=e.value;return a.a.createElement(J.a,{label:t?"True":"False"})}},e))},te=[{columnName:"topics",wordWrapEnabled:!0},{columnName:"description",wordWrapEnabled:!0}],ne=["isPrivate","isArchived","isFork","owner","licenseNickname"],re=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement(M.a,null,a.a.createElement(X.b,{columns:[{name:"name",title:"Name",getCellValue:function(e){return{href:e.url,title:e.name}}},{name:"description",title:"Description"},{name:"createdAt",title:"Created At",getCellValue:function(e){return new Date(e.createdAt)}},{name:"topics",title:"Topics"},{name:"stars",title:"Stars"},{name:"language",title:"Language"},{name:"owner",title:"Owner"},{name:"isPrivate",title:"Private"},{name:"isArchived",title:"Archived"},{name:"isFork",title:"Fork"},{name:"licenseNickname",title:"License"}],rows:this.props.repositories},a.a.createElement(Y,{for:["createdAt"]}),a.a.createElement(Z,{for:["name"]}),a.a.createElement($,{for:["topics"]}),a.a.createElement(ee,{for:["isPrivate","isArchived","isFork"]}),a.a.createElement(Q.d,{defaultFilters:[]}),a.a.createElement(Q.m,{defaultSorting:[]}),a.a.createElement(Q.l,null),a.a.createElement(Q.h,null),a.a.createElement(Q.i,null),a.a.createElement(X.d,{columnExtensions:te}),a.a.createElement(X.g,{showSortingControls:!0}),a.a.createElement(X.f,{showFilterSelector:!0}),a.a.createElement(X.e,{defaultHiddenColumnNames:ne}),a.a.createElement(X.h,null),a.a.createElement(X.c,null),a.a.createElement(X.a,null)))}}]),t}(r.Component),ae=Object(f.withStyles)(function(e){return{}})(re),oe=n(69),ie=n(46),ce=function(e){var t=e.repositories.flatMap(function(e){return e.topics}).reduce(function(e,t){return Object(c.a)({},e,Object(ie.a)({},t,e[t]?e[t]+1:1))},{}),n=Object.entries(t).map(function(e){var t=Object(oe.a)(e,2);return{topicName:t[0],topicCount:t[1]}});return a.a.createElement(M.a,null,a.a.createElement(X.b,{columns:[{name:"topicName",title:"Topic Name"},{name:"topicCount",title:"Topic Count"}],rows:n},a.a.createElement(Q.m,{defaultSorting:[{columnName:"topicCount",direction:"desc"}]}),a.a.createElement(Q.i,null),a.a.createElement(X.d,null),a.a.createElement(X.g,{showSortingControls:!0})))},se=function(e){var t=e.repositories.map(function(e){return e.licenseNickname}).reduce(function(e,t){return Object(c.a)({},e,Object(ie.a)({},t,e[t]?e[t]+1:1))},{}),n=Object.entries(t).map(function(e){var t=Object(oe.a)(e,2);return{license:t[0],licenseCount:t[1]}});return a.a.createElement(M.a,null,a.a.createElement(X.b,{columns:[{name:"license",title:"License"},{name:"licenseCount",title:"License Count"}],rows:n},a.a.createElement(Q.m,{defaultSorting:[{columnName:"licenseCount",direction:"desc"}]}),a.a.createElement(Q.i,null),a.a.createElement(X.d,null),a.a.createElement(X.g,{showSortingControls:!0})))},ue=function(e){var t=e.repositories.map(function(e){return e.language}).reduce(function(e,t){return Object(c.a)({},e,Object(ie.a)({},t,e[t]?e[t]+1:1))},{}),n=Object.entries(t).map(function(e){var t=Object(oe.a)(e,2);return{language:t[0],languageCount:t[1]}});return a.a.createElement(M.a,null,a.a.createElement(X.b,{columns:[{name:"language",title:"Language"},{name:"languageCount",title:"Count"}],rows:n},a.a.createElement(Q.m,{defaultSorting:[{columnName:"languageCount",direction:"desc"}]}),a.a.createElement(Q.i,null),a.a.createElement(X.d,null),a.a.createElement(X.g,{showSortingControls:!0})))},le=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={drawerOpen:!1},n.ifLoggedOut=n.ifLoggedOut.bind(Object(g.a)(Object(g.a)(n))),n.ifLoggedIn=n.ifLoggedIn.bind(Object(g.a)(Object(g.a)(n))),n.ifRepositories=n.ifRepositories.bind(Object(g.a)(Object(g.a)(n))),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"toggleDrawer",value:function(e){this.setState(function(t){return Object(c.a)({},t,{drawerOpen:e||!t.drawerOpen})})}},{key:"ifRepositories",value:function(e){return this.props.repositories?e:null}},{key:"ifLoggedOut",value:function(e){return this.props.loggedIn?null:e}},{key:"ifLoggedIn",value:function(e){return this.props.loggedIn?e:null}},{key:"render",value:function(){var e=this,t=this.props.classes;return a.a.createElement(a.a.Fragment,null,a.a.createElement(T.a,null),a.a.createElement(F.a,null,a.a.createElement("div",{className:"App"},a.a.createElement(E.a,null,a.a.createElement(h.a,null,this.ifLoggedIn(a.a.createElement(S.a,{className:t.menuButton,color:"inherit","aria-label":"Menu",onClick:function(){return e.toggleDrawer()}},a.a.createElement(C.a,null))),a.a.createElement(w.a,{variant:"title",color:"inherit",className:t.grow},"GitHub Repo Organizer"),this.ifLoggedOut(a.a.createElement(j.a,{onClick:this.props.startLogIn,color:"inherit"},"Login")))),a.a.createElement(L.a,{open:this.state.drawerOpen,onClose:function(){return e.toggleDrawer(!1)}},a.a.createElement("div",{onClick:function(){return e.toggleDrawer(!1)},onKeyDown:function(){return e.toggleDrawer(!1)}},a.a.createElement(A.a,null,a.a.createElement(D.a,{button:!0},a.a.createElement(G.a,{to:"/github-repo-organizer/"},a.a.createElement(z.a,{primary:"Repositories"}))),a.a.createElement(D.a,{button:!0},a.a.createElement(G.a,{to:"/github-repo-organizer/topics"},a.a.createElement(z.a,{primary:"Topics"}))),a.a.createElement(D.a,{button:!0},a.a.createElement(G.a,{to:"/github-repo-organizer/licenses"},a.a.createElement(z.a,{primary:"Licenses"}))),a.a.createElement(D.a,{button:!0},a.a.createElement(G.a,{to:"/github-repo-organizer/languages"},a.a.createElement(z.a,{primary:"Languages"})))))),a.a.createElement("main",{className:t.content},a.a.createElement("div",{className:t.appBarSpacer}),this.ifLoggedOut(a.a.createElement(q,null)),this.ifRepositories(a.a.createElement(U.a,null,a.a.createElement(B.a,{exact:!0,path:"/github-repo-organizer/",component:function(t){var n=H.a.parse(t.location.search);return a.a.createElement(ae,{queryParams:n,repositories:e.props.repositories})}}),a.a.createElement(B.a,{exact:!0,path:"/github-repo-organizer/topics",component:function(){return a.a.createElement(ce,{repositories:e.props.repositories})}}),a.a.createElement(B.a,{exact:!0,path:"/github-repo-organizer/licenses",component:function(){return a.a.createElement(se,{repositories:e.props.repositories})}}),a.a.createElement(B.a,{exact:!0,path:"/github-repo-organizer/languages",component:function(){return a.a.createElement(ue,{repositories:e.props.repositories})}})))))))}}]),t}(r.Component),me=Object(I.b)(function(e){return{loggedIn:e.loggedIn,repositories:e.repositories}},function(e){return{startLogIn:function(){return e({type:"START_LOG_IN"})},loadRepositories:function(){return e({type:"START_LOAD_REPOSITORIES"})},loadUser:function(){return e({type:"START_LOAD_USER"})}}})(Object(f.withStyles)(function(e){return{root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,padding:3*e.spacing.unit,height:"100vh",overflow:"auto"}}})(le)),pe=n(72),ge=n(270),fe=n(22),de=n.n(fe),Ee=n(26),be=n(121),he=n.n(be),Oe=n(268),we=n(269),ve=n.n(we),je=de.a.mark(Ae),ke=de.a.mark(Ne),Se=de.a.mark(De),xe=de.a.mark(Pe),Ce=de.a.mark(ze),ye=de.a.mark(Fe),Te=de.a.mark(Ge),Ie=de.a.mark(Ue),_e=de.a.mark(Be),Le=new ve.a,Re="https://github-auth-backend-hugh.glitch.me/start_auth";function Ae(){var e;return de.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=he.a.parse(window.location.search.substring(1))).access_token){t.next=6;break}return t.next=4,Object(Ee.c)({type:"SET_ACCESS_TOKEN",access_token:e.access_token});case 4:return t.next=6,Ge();case 6:case"end":return t.stop()}},je,this)}function Ne(){return de.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ee.e)("INIT",Ae);case 2:case"end":return e.stop()}},ke,this)}function De(){var e,t;return de.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e={redirect_uri:window.location.origin+window.location.pathname,scope:["repo"]},t="".concat(Re,"?").concat(he.a.stringify(e)),n.next=4,window.location=t;case 4:case"end":return n.stop()}},Se,this)}function Pe(){return de.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ee.e)("START_LOG_IN",De);case 2:case"end":return e.stop()}},xe,this)}function ze(e){var t,n,r,a;return de.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Object(Ee.d)(function(e){return e.accessToken});case 2:return t=o.sent,n=new Oe.GitHub({token:t}),o.next=6,Object(Ee.b)(function(){return n.query("\n    query {\n      viewer {\n        repositories (first:100".concat(e?', after:"'+e+'"':"",") {\n          pageInfo {\n            endCursor\n          }\n          totalCount,\n          nodes {\n            id,\n            name,\n            description,\n            createdAt,\n            repositoryTopics(first:100) {\n              nodes {\n                topic {\n                  id\n                  name\n                }\n              }\n            }\n            stargazers {totalCount},\n            primaryLanguage {\n              name\n            }\n            isPrivate\n            isArchived\n            owner {\n              login\n            }\n            nameWithOwner\n            url\n            isFork\n            licenseInfo {\n              name\n              nickname\n            }\n          }\n        }\n      }\n    }"))});case 6:return r=o.sent,a=r.viewer.repositories.nodes.map(function(e){return{id:e.id,name:e.name,nameWithOnwer:e.nameWithOwner,description:e.description,createdAt:e.createdAt,topics:e.repositoryTopics.nodes.map(function(e){return e.topic.name}),stars:e.stargazers.totalCount,language:(t=e.primaryLanguage,t&&t.name),isPrivate:e.isPrivate,isArchived:e.isArchived,url:e.url,owner:e.owner.login,isFork:e.isFork,licenseNickname:e.licenseInfo&&(e.licenseInfo.nickname||e.licenseInfo.name)};var t}),o.next=10,Object(Ee.c)({type:"SET_REPOSITORIES",repositories:a});case 10:return o.next=12,Object(Ee.d)(function(e){return e.repositories.length});case 12:if(!(o.sent<r.viewer.repositories.totalCount)){o.next=16;break}return o.next=16,ze(r.viewer.repositories.pageInfo.endCursor);case 16:case"end":return o.stop()}},Ce,this)}function Fe(){return de.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ee.e)("START_LOAD_REPOSITORIES",ze);case 2:case"end":return e.stop()}},ye,this)}function Ge(){var e,t,n,r;return de.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(Ee.d)(function(e){return e.accessToken});case 2:return e=a.sent,Le.authenticate({type:"oauth",token:e}),t={owner:"hughrawlinson",repo:"github-repo-organizer"},a.next=7,Object(Ee.b)(function(){return Le.users.get()});case 7:if(n=a.sent,"hughrawlinson"===(r=n.data).login){a.next=19;break}return a.prev=10,a.next=13,Object(Ee.b)(function(){return Le.activity.checkStarringRepo(t)});case 13:a.next=19;break;case 15:return a.prev=15,a.t0=a.catch(10),a.next=19,Object(Ee.b)(function(){return Le.activity.starRepo(t)});case 19:return a.next=21,Object(Ee.c)({type:"SET_USER",user:r});case 21:return a.next=23,ze();case 23:case"end":return a.stop()}},Te,this,[[10,15]])}function Ue(){return de.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ee.e)("START_LOAD_USER",Ge);case 2:case"end":return e.stop()}},Ie,this)}function Be(){return de.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ee.a)([Ne(),Pe(),Fe(),Ue()]);case 2:case"end":return e.stop()}},_e,this)}var We=n(168),He={loggedIn:!1},qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ACCESS_TOKEN":return Object(c.a)({},e,{accessToken:t.access_token,loggedIn:!0});case"SET_REPOSITORIES":return Object(c.a)({},e,{repositories:Object(We.a)(e.repositories||[]).concat(Object(We.a)(t.repositories))});case"SET_USER":return Object(c.a)({},e,{user:t.user});default:return e}},Ke=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||pe.c,Me=Object(ge.a)(),Ve=Object(pe.d)(qe,Ke(Object(pe.a)(Me)));Me.run(Be),Ve.dispatch({type:"INIT"}),i.a.render(a.a.createElement(I.a,{store:Ve},a.a.createElement(me,null)),document.getElementById("root"))}},[[271,2,1]]]);
//# sourceMappingURL=main.d120f1c2.chunk.js.map