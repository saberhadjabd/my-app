(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(n,t,e){"use strict";e.r(t);var o,r,i,a,c,l,s,b,d,p,u,h,j,g,x,f,O,v,m,w,y,k,F,L,C,z,S,D,P,A,B,E,R,G,W,I,U,K,M,H,J,N=e(3),T=e(10),Y=e.n(T),q=e(5),Q=e(4),V=e(1),X=e(2),Z=X.c.div(o||(o=Object(V.a)(["\n  z-index: 10;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.7);\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  transition: all 400ms ease-in-out;\n\n  ","\n"])),(function(n){return n.disabled&&Object(X.b)(r||(r=Object(V.a)(["\n      visibility: 0;\n      opacity: 0;\n      z-index: -1;\n    "])))})),$=X.c.div(i||(i=Object(V.a)(["\n  top: calc(50% - 75px);\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  margin: 0 auto;\n  width: 300px;\n  height: 150px;\n  text-align: center;\n"]))),_=X.c.h1(a||(a=Object(V.a)(["\n  text-transform: uppercase;\n  color: var(--color-white);\n  font-size: var(--color-large);\n"]))),nn=X.c.button(c||(c=Object(V.a)(["\n  text-transform: uppercase;\n  border: dashed 2px var(--color-yellow);\n  border-radius: 25px;\n  background-color: transparent;\n  color: var(--color-yellow);\n  padding: 15px 40px;\n  font-size: var(--color-default);\n  font-weight: var(--color-bold);\n  outline: none;\n  cursor: pointer;\n\n  &:hover {\n    opacity: 0.6;\n  }\n\n  ","\n"])),(function(n){return n.pause&&Object(X.b)(l||(l=Object(V.a)(["\n      position: absolute;\n      right: 16px;\n      top: 16px;\n    "])))})),tn=X.c.div(s||(s=Object(V.a)(["\n  z-index: 3;\n  position: absolute;\n  bottom: 40px;\n  width: calc(100% - 50px);\n  height: 70px;\n  margin: 0 auto;\n  text-align: center;\n  left: 0;\n  right: 0;\n"]))),en=X.c.div(b||(b=Object(V.a)(["\n  float: left;\n  background-color: var(--color-darkgrey);\n  width: 65px;\n  height: 70px;\n  margin: 0 3px;\n  border-radius: 5px;\n  text-align: center;\n  line-height: 70px;\n  text-transform: uppercase;\n  font-size: var(--font-size-large);\n  color: var(--color-white);\n\n  ",";\n\n  &:first-child {\n    margin-left: 0;\n  }\n\n  &:last-child {\n    margin-right: 0;\n  }\n"])),(function(n){return n.disabled&&Object(X.b)(d||(d=Object(V.a)(["\n      background-color: var(--color-lightgrey);\n    "])))})),on=e(0),rn=function(n){var t=n.spaces,e=n.correctLetters,o=n.wordFromAPI;return Object(on.jsxs)(tn,{children:[t.map((function(n,t){return Object(on.jsx)(en,{disabled:!0},"space-".concat(t))})),o.map((function(n,t){return Object(on.jsx)(en,{children:e.find((function(t){return t===n}))?n:""},t)}))]})},an=X.c.div(p||(p=Object(V.a)(["\n  position: absolute;\n  top: 40px;\n  right: 0;\n  width: 500px;\n"]))),cn=X.c.h1(u||(u=Object(V.a)(["\n  text-transform: uppercase;\n  color: var(--color-darkgrey);\n"]))),ln=X.c.div(h||(h=Object(V.a)(["\n  width: 100%;\n  height: 70px;\n"]))),sn=X.c.div(j||(j=Object(V.a)(["\n  text-align: center;\n  color: var(--color-blue);\n  float: left;\n  font-size: var(--font-size-large);\n  height: 70px;\n  margin: 10px;\n  text-transform: uppercase;\n\n  &:first-child {\n    margin-left: 0;\n  }\n\n  &:last-child {\n    margin-right: 0;\n  }\n"]))),bn=function(n){var t=n.failedLetters;return Object(on.jsxs)(an,{children:[Object(on.jsx)(cn,{children:"Failed Charcter:"}),Object(on.jsx)(ln,{children:t.map((function(n){return Object(on.jsx)(sn,{children:n},n)}))})]})},dn=function(n){var t=n.buttonAction,e=n.disabled,o=n.title,r=n.buttonLabel;return Object(on.jsx)(Z,{disabled:e,children:Object(on.jsxs)($,{children:[Object(on.jsxs)(_,{children:[" ",o]}),Object(on.jsx)(nn,{onClick:t,children:r})]})})},pn=e(14),un=X.c.div(g||(g=Object(V.a)(["\n  position: relative;\n  margin: 70px 0 0 77.5px;\n  width: 100px;\n"]))),hn=X.c.div(x||(x=Object(V.a)(["\n  width: 100%;\n  height: 15px;\n  position: absolute;\n  background-color: var(--color-hair);\n  border-radius: 50% 0% 100% 0%;\n"]))),jn=X.c.div(f||(f=Object(V.a)(["\n  width: 15px;\n  height: 20px;\n  background-color: var(--color-eye);\n  border-radius: 50%;\n  margin-top: 35px;\n  position: absolute;\n  border: solid 5px var(--color-white);\n  left: 15px;\n\n  ",";\n"])),(function(n){return n.right&&Object(X.b)(O||(O=Object(V.a)(["\n      left: auto;\n      right: 15px;\n    "])))})),gn=X.c.div(v||(v=Object(V.a)(["\n  width: 15px;\n  height: 20px;\n  background-color: var(--color-ear);\n  top: 40px;\n  position: absolute;\n  border-radius: 40% 40%;\n  left: -15px;\n\n  ",";\n"])),(function(n){return n.right&&Object(X.b)(m||(m=Object(V.a)(["\n      left: auto;\n      right: -15px;\n    "])))})),xn=X.c.div(w||(w=Object(V.a)(["\n  top: 50px;\n  width: 15px;\n  height: 20px;\n  background-color: var(--color-nose);\n  left: 0;\n  right: 0;\n  position: absolute;\n  margin: 0 auto;\n  border-radius: 100% 100% 50% 50%;\n"]))),fn=X.c.div(y||(y=Object(V.a)(["\n  width: 40px;\n  border: solid 5px var(--color-white);\n  left: 0;\n  right: 0;\n  position: absolute;\n  margin: 0 auto;\n  top: 75px;\n  border-radius: 0 0 50% 50%;\n\n  ",";\n"])),(function(n){return n.sad&&Object(X.b)(k||(k=Object(V.a)(["\n      border-radius: 50% 50% 0 0;\n      height: 20px;\n      border-width: 10px 0 0 0;\n    "])))})),On=X.c.div(F||(F=Object(V.a)(["\n  position: absolute;\n  z-index: 2;\n  margin: 0 auto;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: 80px;\n  height: 106px;\n  background-color: var(--color-humanbody);\n  border-radius: 30% 30% 50% 50%;\n"]))),vn=X.c.div(L||(L=Object(V.a)(["\n  position: absolute;\n  margin: 0 auto;\n  top: 100px;\n  left: 0;\n  right: 0;\n  width: 20px;\n  height: 40px;\n  background-color: var(--color-humanbody);\n"]))),mn=X.c.div(C||(C=Object(V.a)(["\n  position: absolute;\n  margin: 0 auto;\n  top: 112.5px;\n  left: 0;\n  right: 0;\n  width: 60px;\n  height: 95px;\n  border-radius: 5px;\n  background-color: var(--color-bodybg);\n"]))),wn=X.c.div(z||(z=Object(V.a)(["\n  display: inline-block;\n  width: 30px;\n  height: 70px;\n  background-color: var(--color-shirtLeft);\n  border-radius: 5px 0 0 0;\n  ","\n"])),(function(n){return n.right&&Object(X.b)(S||(S=Object(V.a)(["\n      background-color: var(--color-shirtRight);\n      border-radius: 0 5px 0 0;\n    "])))})),yn=X.c.div(D||(D=Object(V.a)(["\n  position: relative;\n  transform: rotate(45deg);\n  margin-left: -27px;\n  margin-top: -5px;\n  width: 22px;\n  height: 80px;\n  background-color: var(--color-shirtLeft);\n  border-radius: 5px;\n  ","\n"])),(function(n){return n.right&&Object(X.b)(P||(P=Object(V.a)(["\n      transform: rotate(-45deg);\n      margin-left: 35px;\n      background-color: var(--color-shirtRight);\n    "])))})),kn=X.c.div(A||(A=Object(V.a)(["\n  position: absolute;\n  bottom: -14px;\n  border-radius: 0 0 50% 50%;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  width: 15px;\n  height: 15px;\n  background-color: var(--color-humanbody);\n"]))),Fn=X.c.div(B||(B=Object(V.a)(["\n  background-color: var(--color-bodybg);\n\n  height: 70px;\n  width: 25px;\n  margin-top: 10px;\n  margin-left: -10px;\n  transform: rotate(15deg);\n  ","\n"])),(function(n){return n.right&&Object(X.b)(E||(E=Object(V.a)(["\n      transform: rotate(-15deg);\n      margin-left: 15px;\n    "])))})),Ln=X.c.div(R||(R=Object(V.a)(["\n  position: absolute;\n  bottom: -14px;\n  border-radius: 0 0 50% 50%;\n  left: -15px;\n  right: 0;\n  margin: 0 auto;\n  width: 40px;\n  height: 15px;\n  background-color: var(--color-humanbody);\n  ","\n"])),(function(n){return n.right&&Object(X.b)(G||(G=Object(V.a)(["\n      left: 0;\n    "])))})),Cn=function(n){var t=n.visible,e=n.component,o=Object(pn.a)(n,["visible","component"]);return t?Object(on.jsx)(e,Object(q.a)({},o)):null},zn=function(n){var t=n.failedLetterCount;return Object(on.jsxs)(un,{children:[Object(on.jsxs)(Cn,{visible:t>=1,component:On,children:[Object(on.jsx)(hn,{}),Object(on.jsx)(jn,{}),Object(on.jsx)(jn,{right:!0}),Object(on.jsx)(gn,{}),Object(on.jsx)(gn,{right:!0}),Object(on.jsx)(xn,{}),Object(on.jsx)(fn,{sad:t>=11})]}),Object(on.jsx)(Cn,{visible:t>=2,component:vn}),Object(on.jsxs)(Cn,{visible:t>=3,component:mn,children:[Object(on.jsxs)(Cn,{visible:t>=3,component:wn,children:[Object(on.jsx)(Cn,{visible:t>=4,component:yn,children:Object(on.jsx)(Cn,{visible:t>=6,component:kn})}),Object(on.jsx)(Cn,{visible:t>=8,component:Fn,children:Object(on.jsx)(Cn,{visible:t>=10,component:Ln})})]}),Object(on.jsxs)(Cn,{visible:t>=3,component:wn,right:!0,children:[Object(on.jsx)(Cn,{visible:t>=5,component:yn,right:!0,children:Object(on.jsx)(Cn,{visible:t>=7,component:kn})}),Object(on.jsx)(Cn,{visible:t>=9,component:Fn,right:!0,children:Object(on.jsx)(Cn,{visible:t>=11,component:Ln,right:!0})})]})]})]})},Sn=X.c.main(W||(W=Object(V.a)(["\n  position: relative;\n  overflow: hidden;\n  height: 500px;\n  width: 900px;\n  background-color: var(--color-appbg);\n  border-radius: 5px;\n"]))),Dn=X.c.p(I||(I=Object(V.a)(["\n  position: absolute;\n  top: 16px;\n  left: 16px;\n  margin: 0;\n"]))),Pn=X.c.div(U||(U=Object(V.a)(["\n  position: relative;\n  width: 150px;\n  height: 15px;\n  background-color: var(--color-darkgrey);\n  top: 50px;\n  border-radius: 0 5px 5px 0;\n"]))),An=X.c.div(K||(K=Object(V.a)(["\n  position: absolute;\n  left: 120px;\n  width: 15px;\n  height: 40px;\n  background-color: var(--color-darkgrey);\n  border-radius: 5px;\n"]))),Bn=X.c.div(M||(M=Object(V.a)(["\n  position: absolute;\n  width: 0;\n  height: 0;\n  right: 0;\n  bottom: 0;\n  border-style: solid;\n  border-width: 0 0 250px 250px;\n  border-color: transparent transparent var(--color-blue) transparent;\n"]))),En=X.c.input(H||(H=Object(V.a)(["\n  position: absolute;\n  opacity: 0;\n"]))),Rn=function(){var n=Object(N.useState)([]),t=Object(Q.a)(n,2),e=t[0],o=t[1],r=Object(N.useState)(!1),i=Object(Q.a)(r,2),a=i[0],c=i[1],l=Object(N.useState)(!1),s=Object(Q.a)(l,2),b=s[0],d=s[1],p=Object(N.useState)({disabled:!1,title:"Hangman Game",buttonLabel:"Start"}),u=Object(Q.a)(p,2),h=u[0],j=u[1],g=Object(N.useState)([]),x=Object(Q.a)(g,2),f=x[0],O=x[1],v=Object(N.useState)([]),m=Object(Q.a)(v,2),w=m[0],y=m[1],k=Object(N.useState)(""),F=Object(Q.a)(k,2),L=F[0],C=F[1],z=Object(N.useRef)(null),S=function(n){var t=n.toUpperCase().split("");t.map((function(n){return"-"===n&&t.splice(t.indexOf("-"),1)," "===n&&t.splice(t.indexOf(" "),1),n})),o(t),C(n)},D=function(){var n={hasDictionaryDef:!0,minCorpusCount:0,maxCorpusCount:-1,maxDictionaryCount:-1,minLength:3,maxLength:12,api_key:"a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5"},t=new URL("http://api.wordnik.com/v4/words.json/randomWord");Object.keys(n).forEach((function(e){return t.searchParams.append(e,n[e])})),fetch(t,{method:"GET"}).then((function(n){var t=n.status;if(t>=400&&t<=500)throw Error("API error, creating random word localy!");return n.json()})).then((function(n){return S(n.word),n.status})).catch((function(n){console.log(n);var t=["Apple","Orange","Pear","Lemon","Kiwi","Watermelon","Strawberry","Banana"],e=t[Math.floor(Math.random()*t.length)];S(e)}))},P=function(n){var t=A(e);n.length===t.length&&(j({disabled:!1,title:"\u2605 Well done You Won! \u2605",buttonLabel:"Restart Game"}),d(!0))},A=function(n){for(var t={},e=[],o=0,r=n.length;o<r;++o)t.hasOwnProperty(n[o])||(e.push(n[o]),t[n[o]]=1);return e};return Object(on.jsxs)(Sn,{children:[Object(on.jsx)(Dn,{children:"Press Keys to Play."}),Object(on.jsxs)(Pn,{children:[Object(on.jsx)(An,{}),Object(on.jsx)(En,Object(q.a)(Object(q.a)({ref:z},!b&&!a&&{onKeyDown:function(n){var t=n.key;if(n.preventDefault(),e.length>0&&"qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM".indexOf(t)>-1&&(t=t.toUpperCase(),!f.find((function(n){return n===t}))&&!w.find((function(n){return n===t})))){for(var o=0,r=0;r<e.length;r++)if(t===e[r]){o++;var i=w.concat([t]);return y(i),void P(i)}0===o&&(10===f.length&&(j({disabled:!1,title:"Game Over { word: ".concat(L," }"),buttonLabel:"Restart Game"}),d(!0)),O(f.concat([t])))}}}),{},{onFocus:function(){return c(!1)},onBlur:function(){b||(c(!0),j({title:"Game is Paused",disabled:!1,buttonLabel:"continue"}))}}))]}),Object(on.jsx)(zn,{failedLetterCount:f.length}),Object(on.jsx)(bn,{failedLetters:f}),Object(on.jsx)(rn,{wordFromAPI:e,correctLetters:w,spaces:function(){var n=[];if(e.length>0)for(var t=e.length,o=0;o<12-t;o++)n.push(" ");return n}()}),Object(on.jsx)(Bn,{}),Object(on.jsx)(dn,{title:h.title,disabled:h.disabled,buttonLabel:h.buttonLabel,buttonAction:a?function(){j({disabled:!0}),z.current.focus()}:function(){j({disabled:!0}),O([]),y([]),o([]),C(""),D(),d(!1),z.current.focus()}}),!a&&Object(on.jsx)(nn,{pause:!0,children:" Pause "})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Gn=Object(X.a)(J||(J=Object(V.a)(['\n    :root {\n        --color-bodybg: #3C3F64;\n        --color-blue: #585DFE;\n        --color-darkgrey: #53555D;\n        --color-lightgrey: #E6E6E7;\n        --color-humanbody: #FFCD82;\n        --color-shirtLeft: #71CC54;\n        --color-shirtRight: #12A56B;\n        --color-appbg: #F5F5F5;\n        --color-white: #FFFFFF;\n        --color-yellow: #FFB800;\n        --color-eye: #010000;\n        --color-ear: #FFCD72;\n        --color-hair: #000;\n        --color-nose: #12A56B;\n        --font-size-default: 14px;\n        --font-size-large: 36px;\n    }\n\n    html{\n        height: 100%;\n        width: 100%;\n    }\n    \n    body {\n        font-weight: bold;\n        font-size: var(--font-size-default);\n        background-color: var(--color-bodybg);\n        margin: 0;\n        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        height: 100%;\n        width: 100%;\n    }\n\n    #root {\n       display: flex;\n       justify-content: center;\n       align-items: center;\n       height: 100%;\n       width: 100%;\n    }\n'])));Y.a.render(Object(on.jsxs)(on.Fragment,{children:[Object(on.jsx)(Gn,{})," ",Object(on.jsx)(Rn,{})]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.511a00f1.chunk.js.map