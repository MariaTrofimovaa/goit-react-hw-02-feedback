(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{10:function(e,t,a){e.exports={button:"FeedbackOptions_button__2q9SC"}},11:function(e,t,a){e.exports={message:"Notification_message__1k1KR"}},21:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(6),c=a.n(s),i=a(7),o=a(8),r=a(9),l=a(13),u=a(12),d=a(25),b=a(10),j=a.n(b),p=a(0),h=function(e){var t=e.options,a=e.onLeaveFeedback;return Object(p.jsx)(p.Fragment,{children:t.map((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object(d.a)();return Object(p.jsx)("button",{type:"button",className:j.a.button,name:e,onClick:a,children:e.toUpperCase()},t.toString())}))})},v=a(11),g=a.n(v),O=function(e){var t=e.message;return Object(p.jsx)("p",{className:g.a.message,children:t})},m=a(2),f=a.n(m),x=a(3),k=a.n(x),_=function(e){var t=e.good,a=e.neutral,n=e.bad,s=e.total,c=e.positivePercentage;return s?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("p",{className:k.a.statDescription,children:["Good: ",t]}),Object(p.jsxs)("p",{className:k.a.statDescription,children:["Neutral: ",a]}),Object(p.jsxs)("p",{className:k.a.statDescription,children:["Bad: ",n]}),Object(p.jsxs)("p",{className:k.a.statDescription,children:["Total: ",s]}),Object(p.jsxs)("p",{className:k.a.statDescription,children:["Positive feedback: ",c,"%"]})]}):Object(p.jsx)(O,{message:"No feedback given..."})};_.prototypes={good:f.a.node.isRequired,neutral:f.a.node.isRequired,bad:f.a.node.isRequired,total:f.a.number.isRequired,positivePercentage:f.a.number.isRequired};var F=_,N=a(5),y=a.n(N),P=function(e){var t=e.title,a=e.children;return Object(p.jsxs)("div",{className:y.a.sectionContainer,children:[Object(p.jsx)("h2",{className:y.a.title,title:t,children:t}),a]})};P.prototypes={title:f.a.string};var C=P,D=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={good:0,neutral:0,bad:0},e.leaveFeedback=function(t){var a=t.target.name;e.setState((function(e){return Object(i.a)({},a,e[a]+1)}))},e}return Object(r.a)(a,[{key:"countTotalFeedback",value:function(){var e=this.state;return e.good+e.neutral+e.bad}},{key:"countPositiveFeedbackPercentage",value:function(){return Math.floor(this.state.good/this.countTotalFeedback()*100)}},{key:"render",value:function(){var e=Object.keys(this.state),t=this.state,a=t.good,n=t.neutral,s=t.bad;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(C,{title:"Please leave your feedback",children:Object(p.jsx)(h,{options:e,onLeaveFeedback:this.leaveFeedback})}),Object(p.jsx)(C,{title:"Statistics",children:Object(p.jsx)(F,{good:a,neutral:n,bad:s,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})})]})}}]),a}(n.Component);a(21),a(22);c.a.render(Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(D,{})}),document.getElementById("root"))},3:function(e,t,a){e.exports={statDescription:"Statistics_statDescription__3Y2YZ"}},5:function(e,t,a){e.exports={sectionContainer:"Section_sectionContainer__1y5vc",title:"Section_title__ozxNz"}}},[[23,1,2]]]);
//# sourceMappingURL=main.b28426eb.chunk.js.map