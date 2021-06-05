(this["webpackJsonpstudy-buddy"]=this["webpackJsonpstudy-buddy"]||[]).push([[0],{141:function(e,t,n){},142:function(e,t,n){},143:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(0),i=n.n(s),c=n(24),r=n.n(c),l=n(2),o=n.n(l),b=n(7),j=n(11),d=n(30),u=n(12),h=n(17),x=function(){var e=Object(d.b)(),t=e.isUserSignedIn,n=e.signOut,s=Object(u.f)(),i=function(){t()&&(n(),s.push("/"))};return Object(a.jsx)("nav",{className:"navbar navbar-light bg-light",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("span",{className:"navbar-brand mb-0 h1",children:Object(a.jsx)(h.b,{to:"/",children:"StudyBuddy"})}),function(){if(t())return Object(a.jsx)("button",{onClick:i,className:"btn btn-outline-primary",children:"Sign Out"})}()]})})},O=n(51),m=n(59),p=n(85),v=function(){var e=Object(a.jsx)(O.a,{icon:m.a,className:"text-danger"}),t=Object(a.jsx)(O.a,{icon:p.a,className:"text-secondary",style:{fontSize:"20px"}});return Object(a.jsx)("footer",{className:"bg-dark py-5 text-white",style:{marginTop:"auto"},children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-8 text-secondary",children:["Made with ",e," by ",Object(a.jsx)("a",{href:"https://www.jonahlouis.ca/",target:"_blank",rel:"noreferrer",children:"Jonah Louis"})]}),Object(a.jsx)("div",{className:"col-4 text-right",children:Object(a.jsx)("a",{href:"https://github.com/jonahlouis4/StudyBuddy",target:"_blank",rel:"noreferrer",children:t})})]})})})},f=n(8),g={visible:{transition:{staggerChildren:.1}}},y={hidden:{opacity:0},visible:{opacity:1}},N=function(){return Object(a.jsxs)(f.b.div,{className:"main--wrapper bg--container--1",variants:g,initial:"hidden",animate:"visible",exit:"exit",children:[Object(a.jsx)(x,{}),Object(a.jsxs)("div",{className:"container home--container-1 pt-5",children:[Object(a.jsx)(f.b.h2,{className:"text-primary text-center",variants:y,children:"Time to study!"}),Object(a.jsx)(f.b.h4,{className:"text-center",variants:y,children:"Select one of the following options"}),Object(a.jsx)(f.b.div,{className:"pt-5",variants:y,children:Object(a.jsxs)("div",{className:"d-grid text-center",children:[Object(a.jsx)(f.b.div,{variants:y,children:Object(a.jsx)(h.b,{to:"/questions",className:"home--links",children:Object(a.jsx)(f.b.button,{className:"btn btn-lg btn-primary col-12 col-md-8 col-lg-6",type:"button",whileHover:{scale:1.1},children:"Add Questions"})})}),Object(a.jsx)(f.b.div,{variants:y,className:"mt-5",children:Object(a.jsx)(h.b,{to:"/quiz",className:"home--links",children:Object(a.jsx)(f.b.button,{className:"btn btn-lg btn-primary col-12 col-md-8 col-lg-6",type:"button",whileHover:{scale:1.1},children:"Start Quiz"})})})]})})]}),Object(a.jsx)(v,{})]})},w=n(150),C=n(63),k=n(86),S=function(){var e=Object(d.b)(),t=e.signIn,n=e.signUp,i=Object(s.useState)(""),c=Object(j.a)(i,2),r=c[0],l=c[1],u=Object(s.useState)(""),h=Object(j.a)(u,2),O=h[0],m=h[1],p=Object(s.useState)(!1),f=Object(j.a)(p,2),g=f[0],y=f[1],N=Object(s.useState)(!0),S=Object(j.a)(N,2),q=S[0],Q=S[1],I=function(){var e=Object(b.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(r,O);case 2:e.sent.success&&(l(""),m(""));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(b.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(r,O);case 2:if(!e.sent.success){e.next=8;break}return e.next=6,t(r,O);case 6:l(""),m("");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=Object(a.jsxs)(C.a,{id:"popover-basic",children:[Object(a.jsx)(C.a.Title,{as:"h3",children:"Sign in with the following:"}),Object(a.jsxs)(C.a.Content,{style:{fontWeight:600},children:["Username: ",Object(a.jsx)("span",{style:{fontWeight:400},children:"studybuddytest"}),Object(a.jsx)("br",{}),"Password: ",Object(a.jsx)("span",{style:{fontWeight:400},children:"studybuddytest"})]})]});return Object(a.jsxs)("div",{className:"bg--container--1 main--wrapper",children:[Object(a.jsx)(x,{logged:!1}),Object(a.jsxs)("div",{className:"login--wrapper container mb-5",children:[Object(a.jsxs)("div",{className:"text-center",children:[Object(a.jsx)("h1",{className:"mt-5",children:"Welcome to StudyBuddy"}),Object(a.jsx)("h4",{className:"text-primary",children:"A simple flashcard web application designed for studying."})]}),Object(a.jsxs)("div",{className:"mt-5 py-5 px-4 px-sm-5 shadow-lg bg-white",children:[Object(a.jsxs)(w.a,{noValidate:!0,validated:g,onSubmit:function(e){var t=e.currentTarget;(e.preventDefault(),!1===t.checkValidity())?e.stopPropagation():!0===q?I():(T(),setTimeout((function(){window.location.reload()}),1e3));y(!0)},children:[Object(a.jsx)("div",{className:"mb-5",children:!0===q?Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("h1",{children:"Sign In"})}):Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("h1",{children:"Create an Account"})})}),Object(a.jsxs)(w.a.Group,{controlId:"username",children:[Object(a.jsx)(w.a.Label,{children:"Username"}),Object(a.jsx)(w.a.Control,{required:!0,type:"text",placeholder:"Enter your username",onChange:function(e){return l(e.target.value)}})]}),Object(a.jsxs)(w.a.Group,{controlId:"password",children:[Object(a.jsx)(w.a.Label,{children:"Password"}),Object(a.jsx)(w.a.Control,{required:!0,type:"password",placeholder:"Enter your password",onChange:function(e){return m(e.target.value)}})]}),!0===q?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Sign In"}),Object(a.jsx)("a",{role:"button",className:"ml-sm-1 btn btn-link",onClick:function(){return Q(!1)},children:"Or create an account"})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{className:"btn btn-danger",type:"submit",children:"Sign Up"}),Object(a.jsx)("a",{role:"button",className:"ml-sm-1 btn btn-link",onClick:function(){return Q(!0)},children:"Or return to sign in"})]})]}),Object(a.jsx)("div",{className:"text-center",children:Object(a.jsx)(k.a,{trigger:"click",placement:"bottom",overlay:V,children:Object(a.jsx)("button",{variant:"success",className:"btn btn-link mt-3",children:"Try it out without signin up"})})})]})]}),Object(a.jsx)(v,{})]})},q=n(18),Q=n(15),I=n(46),T=function(e){var t=e.frame.map((function(t){return Object(a.jsx)("div",{className:"myQuestions",children:Object(a.jsxs)("div",{className:"row border-bottom border-secondary py-4",children:[Object(a.jsxs)("div",{className:"col-10 ",children:["Q: ",t.question,Object(a.jsx)("br",{}),"A: ",t.answer]}),Object(a.jsx)("div",{className:"col-2",children:Object(a.jsx)("button",{className:"bg-white",children:Object(a.jsx)(O.a,{icon:m.b,size:"sm",onClick:function(){e.delQA(t._key)},className:"text-danger"})})})]})},t._key)}));return Object(a.jsxs)(I.a,Object(Q.a)(Object(Q.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,scrollable:"true",children:[Object(a.jsx)(I.a.Header,{children:Object(a.jsx)(I.a.Title,{id:"contained-modal-title-vcenter",children:"My Questions"})}),Object(a.jsx)(I.a.Body,{className:"modal-body",children:Object(a.jsx)(a.Fragment,{children:0===e.frame.length?"No questions exists.":t})}),Object(a.jsx)(I.a.Footer,{children:Object(a.jsx)("button",{onClick:e.onHide,className:"btn btn-primary",children:"Close"})})]}))},V={visible:{transition:{staggerChildren:.1}}},A={hidden:{opacity:0},visible:{opacity:1}},z=function(e){var t=e.addQA,n=e.delQA,c=e.frame,r=Object(s.useState)({question:"",answer:""}),l=Object(j.a)(r,2),o=(l[0],l[1]),b=i.a.useState(!1),d=Object(j.a)(b,2),u=d[0],O=d[1],m=Object(s.useState)(!1),p=Object(j.a)(m,2),g=p[0],y=p[1],N=function(e){o((function(t){return Object(Q.a)(Object(Q.a)({},t),{},Object(q.a)({},e.target.id,e.target.value))}))};return Object(a.jsxs)(f.b.div,{className:"main--wrapper bg--container--1",variants:V,initial:"hidden",animate:"visible",exit:"exit",children:[Object(a.jsx)(x,{}),Object(a.jsx)(T,{show:u,onHide:function(){return O(!1)},frame:c,delQA:n}),Object(a.jsxs)("div",{className:"container questions--container-1",children:[Object(a.jsx)(f.b.div,{variants:A,children:Object(a.jsxs)("div",{className:"row mt-3",children:[Object(a.jsx)("div",{className:"col-6 text-left",children:Object(a.jsxs)("ol",{className:"breadcrumb pl-0",children:[Object(a.jsx)("li",{className:"breadcrumb-item",children:Object(a.jsx)(h.b,{to:"/",children:"Home"})}),Object(a.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"Questions"})]})}),Object(a.jsx)("div",{className:"col-6 text-right",children:Object(a.jsx)(f.b.button,{onClick:function(){return O(!0)},className:"btn btn-primary",children:"View questions"})})]})}),Object(a.jsx)(f.b.div,{variants:A,children:Object(a.jsxs)(w.a,{className:"mt-5",noValidate:!0,validated:g,onSubmit:function(e){var n=e.currentTarget;e.preventDefault(),!1===n.checkValidity()?e.stopPropagation():(t(document.getElementById("question").value,document.getElementById("answer").value),o({question:"",answer:""}),setTimeout((function(){window.location.reload()}),1e3)),y(!0)},children:[Object(a.jsxs)(w.a.Group,{controlId:"question",xxl:"12",children:[Object(a.jsx)(w.a.Label,{children:"Enter a question"}),Object(a.jsx)(w.a.Control,{required:!0,type:"text",placeholder:"Type your question",onChange:N}),Object(a.jsx)(w.a.Control.Feedback,{type:"invalid",children:"Please enter a question."})]}),Object(a.jsxs)(w.a.Group,{controlId:"answer",xxl:"12",children:[Object(a.jsx)(w.a.Label,{children:"Enter the answer"}),Object(a.jsx)(w.a.Control,{required:!0,type:"text",placeholder:"Type your answer",onChange:N}),Object(a.jsx)(w.a.Control.Feedback,{type:"invalid",children:"Please enter an answer."})]}),Object(a.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Add"})]})})]}),Object(a.jsx)(v,{})]})},E=function(e){var t=e.getResult,n=e.currQuestion,i=e.addAnswer,c=e.containerVariantsChild,r=e.fadeIn,l=e.buttonVariants,o=e.frame,b=Object(s.useState)({answer:""}),d=Object(j.a)(b,2),u=d[0],h=d[1];return Object(a.jsxs)(f.b.div,{variants:c,initial:"hidden",animate:"visible",exit:"exit",children:[Object(a.jsxs)("div",{className:"quiz--container-1",children:[Object(a.jsxs)(f.b.h6,{variants:r,style:{fontWeight:400},className:"text-primary",children:[n+1,"/",o.length]}),Object(a.jsx)(f.b.h6,{variants:r,className:"my-0 py-0",style:{fontWeight:500},children:o[n].question})]}),Object(a.jsx)(f.b.div,{className:"quizenter--container-2 pt-5",variants:r,children:Object(a.jsx)(w.a,{onSubmit:function(e){e.preventDefault(),e.target.reset(),i(u),t(1)},children:Object(a.jsxs)(w.a.Group,{children:[Object(a.jsx)(w.a.Label,{children:"Enter the answer"}),Object(a.jsx)(w.a.Control,{as:"textarea",rows:3,onChange:function(e){h((function(t){return Object(Q.a)(Object(Q.a)({},t),{},Object(q.a)({},e.target.id,e.target.value))}))},id:"answer",style:{resize:"none"}}),Object(a.jsx)(f.b.div,{className:"pt-3",variants:r,children:Object(a.jsx)(f.b.input,{variants:l,animate:u.answer?"active":"inactive",type:"submit",value:"Submit",className:"btn btn-primary"})})]})})})]})},F=function(e){e.QAcopy;var t=e.answer,n=e.getResult,s=e.currQuestion,i=e.setQuestionIndex,c=e.containerVariantsChild,r=e.fadeIn,l=e.buttonVariants,o=e.frame;return Object(a.jsxs)(f.b.div,{className:"",variants:c,initial:"hidden",animate:"visible",exit:"exit",children:[Object(a.jsxs)("div",{className:"quiz--container-1",children:[Object(a.jsxs)(f.b.h6,{variants:r,style:{fontWeight:400},className:"text-primary",children:[s+1,"/",o.length]}),Object(a.jsx)(f.b.h6,{variants:r,style:{fontWeight:500},className:"mt-0 pt-0",children:o[s].question})]}),Object(a.jsxs)("div",{className:"mt-5 quizresult--container-1",children:[Object(a.jsx)(f.b.h6,{variants:r,style:{fontWeight:600},children:"The answer"}),Object(a.jsx)(f.b.h6,{variants:r,style:{fontWeight:400},children:o[s].answer}),Object(a.jsx)(f.b.h6,{variants:r,className:"mt-5",style:{fontWeight:600},children:"Your answer"}),Object(a.jsx)(f.b.h6,{variants:r,style:{fontWeight:400},children:t.answer}),Object(a.jsx)(f.b.div,{variants:r,children:Object(a.jsx)(f.b.button,{variants:l,className:"btn btn-primary mt-3",onClick:function(){i(s+1),s>=o.length-1?n(2):n(0)},children:"next"})})]})]})},W=function(e){var t=e.addAnswer,n=e.setQuestionIndex,i=e.getResult,c=e.containerVariantsChild,r=e.fadeIn,l=Object(s.useState)({answer:""}),o=Object(j.a)(l,1)[0],b=Object(u.f)();return Object(a.jsxs)(f.b.div,{className:"quizcomplete--wrapper",variants:c,initial:"hidden",animate:"visible",exit:"exit",children:[Object(a.jsxs)("div",{className:"mt-5 text-center",children:[Object(a.jsx)(f.b.h2,{variants:r,className:"text-primary",children:"Quiz Complete!"}),Object(a.jsx)(f.b.h4,{variants:r,children:"Select one of the following options"})]}),Object(a.jsx)(f.b.div,{className:"btn-group justify-content-center mt-4",variants:r,style:{width:"100%"},children:Object(a.jsxs)("div",{className:"btn-group",children:[Object(a.jsx)("button",{onClick:function(){t(o),n(0),i(0)},className:"btn btn-lg btn-primary",children:"Restart"}),Object(a.jsx)("button",{onClick:function(){b.push("/")},className:"btn btn-lg btn-danger",children:"Leave"})]})})]})},U=function(e){var t=e.containerVariantsChild,n=e.fadeIn,s=e.buttonVariants;return Object(a.jsxs)(f.b.div,{variants:t,initial:"hidden",animate:"visible",exit:"exit",className:"error--wrapper mt-5 text-center",children:[Object(a.jsx)(f.b.h2,{className:"text-primary",variants:n,children:"Ooops! You forgot to add questions."}),Object(a.jsx)(f.b.h4,{variants:n,children:"Please make sure to add at least one question before starting a quiz."}),Object(a.jsx)(f.b.div,{variants:n,children:Object(a.jsx)(f.b.button,{className:"btn btn-lg btn-primary mt-4",variants:s,children:Object(a.jsx)(h.b,{to:"/questions",className:"error--btn--link",children:"Add Questions"})})})]})},B={visible:{transition:{staggerChildren:.1}}},L={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}},exit:{opacity:0}},P={hidden:{opacity:0},visible:{opacity:1}},R={active:{opacity:1,x:0},inactive:{opacity:0,x:-10}},H=function(e){var t=e.frame,n=Object(s.useState)(0),i=Object(j.a)(n,2),c=i[0],r=i[1],l=Object(s.useState)({answer:""}),o=Object(j.a)(l,2),b=o[0],d=o[1],u=Object(s.useState)(-1),O=Object(j.a)(u,2),m=O[0],p=O[1],g=function(e){d(e)},y=function(e){r(e)},N=function(e){p(e)};function w(e){return-1===e.result?Object(a.jsx)(U,{containerVariantsChild:L,fadeIn:P,buttonVariants:R}):0===e.result?Object(a.jsx)(E,{getResult:N,currQuestion:c,addAnswer:g,containerVariantsChild:L,fadeIn:P,buttonVariants:R,frame:t}):1===e.result?Object(a.jsx)(F,{getResult:N,currQuestion:c,answer:b,setQuestionIndex:y,containerVariantsChild:L,buttonVariants:R,fadeIn:P,frame:t}):2===e.result?Object(a.jsx)(W,{containerVariantsChild:L,fadeIn:P,addAnswer:g,setQuestionIndex:y,getResult:N,frame:t}):void 0}return Object(s.useEffect)((function(){0===t.length?p(-1):0===c&&""===b.answer&&p(0)}),[t.length,c,b.answer]),Object(a.jsxs)("div",{className:"main--wrapper bg--container--1",children:[Object(a.jsx)(x,{}),Object(a.jsxs)(f.b.div,{className:"container",variants:B,initial:"hidden",animate:"visible",exit:"exit",children:[Object(a.jsxs)("ol",{className:"breadcrumb pl-0 mt-3",children:[Object(a.jsx)("li",{className:"breadcrumb-item",children:Object(a.jsx)(h.b,{to:"/",children:"Home"})}),Object(a.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"Quiz"})]}),Object(a.jsx)(w,{result:m})]}),Object(a.jsx)(v,{})]})};var D=function(){var e=Object(u.g)(),t=Object(s.useState)([]),n=Object(j.a)(t,2),i=n[0],c=n[1],r=Object(d.b)(),l=r.db,h=(0,r.useReturn)((function(){return l("QUIZ CONTENT").return()}),[]).frame,x=Object(d.b)().isUserSignedIn,O=function(){var e=Object(b.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l("QUIZ CONTENT").return().all();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){O()}),[]);var m=function(){var e=Object(b.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l("QUIZ CONTENT").insert({question:t,answer:n}).one();case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),p=function(){var e=Object(b.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l("QUIZ CONTENT",!1).delete().where({_key:t}).one();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)(f.a,{exitBeforeEnter:!0,children:Object(a.jsxs)(u.c,{location:e,children:[Object(a.jsx)(u.a,{exact:!0,path:"/",component:function(){return x()?Object(a.jsx)(N,{}):Object(a.jsx)(S,{})}}),Object(a.jsx)(u.a,{path:"/questions",component:function(){return x()?Object(a.jsx)(H,{mainQA:i,frame:h}):Object(a.jsx)(S,{})}}),Object(a.jsx)(u.a,{path:"/quiz",component:function(){return x()?Object(a.jsx)(z,{addQA:m,delQA:p,mainQA:i,frame:h}):Object(a.jsx)(S,{})}})]},e.key)})},G=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,158)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),i(e),c(e)}))},_={integration:"project-StudyBuddy-W8F7UqYj6Vusfg6Nseq8QDyh2lr8LIRQ",version:"2020-11-20"};n(140),n(141),n(142);r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(d.a,{ebconfig:_,children:Object(a.jsx)(h.a,{basename:"/sb/",children:Object(a.jsx)(D,{})})})}),document.getElementById("root")),G()}},[[143,1,2]]]);
//# sourceMappingURL=main.afb7a11a.chunk.js.map