(this.webpackJsonpreact_movie_app=this.webpackJsonpreact_movie_app||[]).push([[0],{28:function(n,e,t){},29:function(n,e,t){"use strict";t.r(e);var a,i,r,c,o,s,d,u,p,h,l,b,x=t(0),f=t.n(x),m=t(19),j=t.n(m),g=t(2),O=t(3),w=t(1),v=Object(O.a)(a||(a=Object(g.a)(["\n    width: 100%;\n    max-wodth: 1300px;\n    margin: 0 auto;\n"]))),k=function(n){var e=n.children;return Object(w.a)("div",{css:v,className:"container",children:e})},y=Object(O.a)(i||(i=Object(g.a)(["\nfont-size: 22px;\ncolor: #cb6ad2;\nfont-weight: 900;\nuser-select: none;\n"]))),M=function(){return Object(w.a)("h2",{css:y,children:"Movie App React"})},P=t(9),S=t.n(P),C=t(15),N=t(6),L=t(5),_=Object(x.createContext)(),z=function(n){var e=n.children,t=Object(x.useState)(!0),a=Object(N.a)(t,2),i=a[0],r=a[1],c=Object(x.useState)("Popular"),o=Object(N.a)(c,2),s=o[0],d=o[1],u=Object(x.useState)([]),p=Object(N.a)(u,2),h=p[0],l=p[1],b=Object(x.useState)(""),f=Object(N.a)(b,2),m=f[0],j=f[1],g=Object(x.useState)(1),O=Object(N.a)(g,2),w=O[0],v=O[1],k=Object(x.useState)([]),y=Object(N.a)(k,2),M=y[0],P=y[1],z=Object(x.useState)(!1),A=Object(N.a)(z,2),T=A[0],E=A[1],H=Object(x.useState)(!0),U=Object(N.a)(H,2),X=U[0],F=U[1],I="03daf76efb29b23c9461aa3c7fd06448",J=function(){var n=Object(C.a)(S.a.mark((function n(){var e,t;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/movie/popular?api_key=".concat(I,"&language=en-US&page=3"));case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,l(t);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),R=function(){var n=Object(C.a)(S.a.mark((function n(){var e,t;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/movie/popular?api_key=".concat(I,"&language=en-US&page=").concat(w));case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,""===m.trim()&&P(t);case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),q=function(){var n=Object(C.a)(S.a.mark((function n(e){var t,a;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault()," "!==m.trim()){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(I,"&language=en-US&query=").concat(m,"&page=").concat(w));case 5:return t=n.sent,n.next=8,t.json();case 8:a=n.sent,P(a),F(!1);case 11:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(x.useEffect)((function(){J()}),[]),Object(x.useEffect)((function(){""===m.trim()&&F(!0),R()}),[m,w]),Object(x.useEffect)((function(){var n=setTimeout((function(){E(!1)}),1500);return function(){return clearTimeout(n)}}),[M,w]),Object(L.jsx)(_.Provider,{value:{hiddenMenu:i,setHiddenMenu:r,activeLink:s,setActiveLink:d,popularMovies:h,search:m,setSearch:j,currentPage:w,setCurrentPage:v,movies:M,setMovies:P,getPopularMovies:J,getMovies:R,handleSearch:q,isLoading:T,setIsLoading:E,showPagination:X,setShowPagination:F,newPage:function(n){"next"===n?(v((function(n){return n+1})),E(!0)):"previous"===n&&1!==w&&v((function(n){return n-1}))}},children:e})},A=Object(O.a)(r||(r=Object(g.a)(["\nborder: none;\noutline: none;\nbackground: transparent;\nfont-size: 22px;\nmargin-right: 24px;\nfont-weight: 700;\ncursor: pointer;\nuser-select: none;\n@media (max-width: 860px) {\n  font-size: 40px;\n}\n"]))),T=function(n){var e=n.btnText,t=Object(x.useContext)(_),a=t.setHiddenMenu,i=t.activeLink,r=t.setActiveLink;return Object(w.a)("button",{onClick:function(){r(e),a(!0)},css:A,style:{color:i===e?"#f9a5ff":"#fff"},children:e})},E=Object(O.a)(c||(c=Object(g.a)(["\npadding-left: 80px;\n@media (max-width: 860px) {\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 1;\n  min-height: 100vh;\n  background: rgba(0, 0, 0, 0.8);\n  padding-left: 0;\n  padding: 20px 50px;\n  width: 100%;\n  max-width: 340px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  transition: all 800ms ease-in-out;\n  &.hidden {\n    left: -600px;\n    opacity: 0;\n  }\n}\n"]))),H=function(){var n=Object(x.useContext)(_).hiddenMenu;return Object(w.b)("div",{css:E,className:(n?"hidden":"")+" heroNavMenu",children:[Object(w.a)(T,{btnText:"Popular"}),Object(w.a)(T,{btnText:"All Movies"})]})},U=Object(O.a)(o||(o=Object(g.a)(["\nheight: 40px;\nmin-height: 40px;\ninput {\n  border: none;\n  outline: none;\n  border-radius: 50px;\n  border: 1px solid #2c2f39;\n  background: transparent;\n  padding: 10px 16px;\n  width: 260px;\n  color: #f9a5ff;\n  &::placeholder {\n    color: #f9a5ff;\n    letter-spacing: 1px;\n  }\n}\n@media (max-width: 860px) {\n  input {\n    width: 220px;\n  }\n}\n"]))),X=function(){var n=Object(x.useContext)(_),e=n.search,t=n.setSearch,a=n.handleSearch,i=n.activeLink;return Object(w.a)("form",{css:U,onSubmit:a,children:"Popular"!==i&&Object(w.a)("input",{value:e,onChange:function(n){return t(n.target.value)},type:"text",placeholder:"Search for movies..."})})},F=Object(O.a)(s||(s=Object(g.a)(["\nwidth: 100%;\n  min-height: 80px;\n  padding: 20px 0;\n  background: #212229;\n  .container {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    .wrapper {\n      display: flex;\n      align-items: center;\n    }\n    #burgerMenu {\n      color: #f9a5ff;\n      cursor: pointer;\n      display: none;\n    }\n  }\n  @media (max-width: 860px) {\n    .container {\n      #burgerMenu {\n        display: hidden;\n      }\n    }\n  }\n  @media (max-width: 1365px) {\n    .container {\n      max-width: 90%;\n    }\n  }\n"]))),I=function(){var n=Object(x.useContext)(_),e=n.hiddenMenu,t=n.setHiddenMenu;return Object(w.a)("nav",{css:F,children:Object(w.b)(k,{children:[Object(w.b)("div",{className:"wrapper",children:[Object(w.a)(M,{}),Object(w.a)(H,{})]}),Object(w.a)(X,{}),Object(w.a)("i",{onClick:function(){return t(!e)},id:"burgerMenu",className:e?"fas fa-bars":"fas fa-times"})]})})},J=Object(O.a)(d||(d=Object(g.a)(["\nwidth: 70%;\n.container {\n  &:nth-child(1) {\n    height: 81vh;\n    overflow-y: scroll;\n    display: flex;\n    justify-content: space-around;\n    flex-wrap: wrap;\n    margin-left: 21%;\n    &::-webkit-scrollbar {\n      width: 0;\n    }\n    .error {\n      font-size: 38px;\n      color: red;\n      height: 32px;\n    }\n  }\n  img {\n    width: 100%;\n    max-width: 240px;\n    height: 360px;\n    margin: 10px 0;\n  }\n}\n@media (max-width: 600px) {\n  .container {\n    img {\n      max-width: 100%;\n      height: 500px;\n    }\n  }\n}\n@media (min-width: 601px) and (max-width: 854px) {\n  .container {\n    img {\n      max-width: 48%;\n    }\n  }\n}\n@media (min-width: 855px) and (max-width: 1144px) {\n  .container {\n    img {\n      max-width: 31%;\n    }\n  }\n}\n@media (min-width: 1145px) and (max-width: 1365px) {\n  .container {\n    img {\n      max-width: 23.4%;\n    }\n  }\n}\n"]))),R=function(){var n=Object(x.useContext)(_).popularMovies;return Object(w.a)("div",{css:J,className:"popularMovies",children:Object(w.a)(k,{children:n.results&&n.results.map((function(n,e){return Object(w.a)("img",{src:"https://image.tmdb.org/t/p/w400/".concat(n.poster_path),alt:"Poster"},e)}))})})},q=Object(O.a)(u||(u=Object(g.a)(['\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 70px;\n    height: 10px;\n    background: #3489db;\n    border-radius: 5px;\n    animation: spinner 1.8s ease-in-out infinite;\n    &:before, &:after{\n        position: absolute;\n        display: block;\n        content: "";\n        animation: spinner 1.8s ease-in-out infinite;\n        height: 10px;\n        border-radius: 5px;\n        margin-top: 15px;\n    }\n    &:before{\n        top: -20xp;\n        left: 50px;\n        width: 60px;\n        background: #ef4836;\n    }\n    &:after{\n        bottom: -30px;\n        width: 105px;\n        background: #f5ab35;\n    }\n    @keyframes spinner {\n        0%{\n            transform: translateX(40px);\n        }\n        50% {\n            transform: translateX(-60px);\n        }\n        100% {\n            transform: translateX(40px);\n        }\n    }\n']))),B=function(){return Object(w.a)("div",{css:q,className:"loader"})},D=Object(O.a)(p||(p=Object(g.a)(["\nwidth: 70%;\n.container {\n  &:nth-child(1) {\n    height: 68vh;\n    overflow-y: scroll;\n    display: flex;\n    justify-content: space-around;\n    flex-wrap: wrap;\n    margin-left: 21%;\n    &::-webkit-scrollbar {\n      width: 0;\n    }\n    .error {\n      font-size: 38px;\n      color: red;\n      height: 32px;\n    }\n  }\n  img {\n    width: 100%;\n    max-width: 240px;\n    height: 360px;\n    margin: 10px 0;\n  }\n}\n@media (max-width: 600px) {\n  .container {\n    img {\n      max-width: 100%;\n      height: 500px;\n    }\n  }\n}\n@media (min-width: 601px) and (max-width: 854px) {\n  .container {\n    img {\n      max-width: 48%;\n    }\n  }\n}\n@media (min-width: 855px) and (max-width: 1144px) {\n  .container {\n    img {\n      max-width: 31%;\n    }\n  }\n}\n@media (min-width: 1145px) and (max-width: 1365px) {\n  .container {\n    img {\n      max-width: 23.4%;\n    }\n  }\n}\n"]))),G=function(){var n=Object(x.useContext)(_),e=n.movies,t=n.isLoading;return Object(w.a)("div",{css:D,className:"movies",children:Object(w.b)(k,{children:[e.results&&0===e.results.length&&Object(w.a)("h1",{className:"error",children:"Result not found"}),t?Object(w.a)(B,{}):e.results&&e.results.map((function(n,e){return Object(w.a)("img",{src:"https://image.tmdb.org/t/p/w400/".concat(n.poster_path),alt:"Poster"},e)}))]})})},K=Object(O.a)(h||(h=Object(g.a)(["\nwidth: 100%;\n.container {\n  &:nth-child(1) {\n    height: 80px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    button {\n      border: none;\n      outline: none;\n      background: #32de57;\n      color: #fff;\n      font-size: 20px;\n      font-weight: 600;\n      border-radius: 4px;\n      width: 160px;\n      padding: 10px 0;\n      cursor: pointer;\n      user-select: none;\n      margin: 0 10px;\n      transition: background 500ms ease-in-out;\n      &:hover {\n        background: #259a3e;\n      }\n    }\n  }\n}\n"]))),Q=function(){var n=Object(x.useContext)(_),e=n.currentPage,t=n.showPagination,a=n.newPage;return Object(w.a)("div",{css:K,className:"moviesPagination",children:t&&Object(w.a)(k,{children:Object(w.b)(f.a.Fragment,{children:[Object(w.a)("button",{style:{cursor:1!==e?"pointer":"not-allowed",background:1!==e?"#32de57":"#3033847"},onClick:function(){return a("previous")},children:"Prev Page"}),Object(w.a)("button",{onClick:function(){return a("next")},children:"Next Page"})]})})})},V=Object(O.a)(l||(l=Object(g.a)(["\n    width: 100%;\n    min-height: calc(100vh - 80px);\n    display: flex;\n    > .container {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-evenly;\n    }\n@media (max-width: 1365px) {\n    > .container {\n        max-width: 90%;\n    }\n}\n"]))),W=function(){var n=Object(x.useContext)(_).activeLink;return Object(w.b)("div",{css:V,className:"output",children:["Popular"===n&&Object(w.a)(k,{children:Object(w.a)(R,{})}),"All Movies"===n&&Object(w.a)(k,{children:Object(w.b)(f.a.Fragment,{children:[Object(w.a)(G,{}),Object(w.a)(Q,{})]})})]})},Y=Object(O.a)(b||(b=Object(g.a)(["\n  width: 100%;\n  min-height: 100vh;\n  background: #1b1c22;\n"]))),Z=function(){return Object(w.b)("section",{css:Y,className:"hero",children:[Object(w.a)(I,{}),Object(w.a)(W,{})]})},$=(t(28),function(){return Object(L.jsx)(z,{children:Object(L.jsx)(Z,{})})});j.a.render(Object(L.jsx)(f.a.StrictMode,{children:Object(L.jsx)($,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.f1a9cc82.chunk.js.map