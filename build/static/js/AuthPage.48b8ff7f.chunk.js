(this["webpackJsonpkids-land"]=this["webpackJsonpkids-land"]||[]).push([[1],{190:function(e,a,t){e.exports={authContainer:"Auth_authContainer__25nIo",authHeader:"Auth_authHeader__2irLr",authText:"Auth_authText__3B7PE",authTextInput:"Auth_authTextInput__1U1OU",btn:"Auth_btn__OquSl",divbtn:"Auth_divbtn__1b7AR",form:"Auth_form__aM7bx",label:"Auth_label__3wGlv",input:"Auth_input__3XIsD",divFlex:"Auth_divFlex__1mKlY",contactButt:"Auth_contactButt__Poy98",mobimg:"Auth_mobimg__2Uskw",plogo:"Auth_plogo__BCKtc",logoimg:"Auth_logoimg__1uUNP",formContainer:"Auth_formContainer__3DUpf"}},191:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAMCAYAAACwXJejAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAAPtJREFUGJVd0L8rxWEcxfHXvb4MfuSbwSSFkkH+BvGUciMMIkp3t9/BQDazH2VRdzKYlM2TZFBKKSWZlNHAd0PUNXiUnOUM53x6nz6lRqOhiKEFa5jGQR7idhHDKHZxW/ajVkxiFstFDE3YxArey5CHWOAazajhBpd5iNfoKyVcFb2YRwWPGMAERkqvp+M1zCTsHd6wl4d4X8RwgukMY1jEAjIs4amIYSNlQxle0nV7QqyiMyHPcFjGJ+qYw0cqdqMrD3Efxxma8IUq+jGY9jWSt2dp7EAe4hWu/FERQxsqZWxhuIhh51+hBw+o//4pxxGecY4OTOEiD3H9GxlyUYeqw1mMAAAAAElFTkSuQmCC"},192:function(e,a,t){e.exports=t.p+"static/media/mobileImg.c9687c5b.jpg"},193:function(e,a,t){e.exports=t.p+"static/media/tabletimg.c55be807.jpg"},194:function(e,a,t){e.exports=t.p+"static/media/mainimg.fcd703bf.jpg"},198:function(e,a,t){"use strict";t.r(a);var n=t(4),r=t.n(n),i=t(12),l=t(24),c=t(0),m=t.n(c),u=t(20),s=t(195),o=t(190),p=t.n(o),d=t(35);a.default=function(){var e=Object(c.useState)(""),a=Object(l.a)(e,2),n=a[0],o=a[1],A=Object(c.useState)(""),h=Object(l.a)(A,2),b=h[0],g=h[1],E=!0,_=Object(u.b)(),f=Object(s.a)({initialValues:{email:"",password:""},validate:function(){var e={};return n?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(n)||(e.email="Invalid email address"):e.email="Required email",b?b.length<6&&(e.password="Must be 6 characters or more"):e.password="Required password",E=0!==Object.keys(e).length,e}}),v=function(e){e.preventDefault(),!1===E?x({email:n,password:b},e.target.value):(o(""),g(""))},x=function(){var e=Object(i.a)(r.a.mark((function e(a,t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"REGISTR_USER"===t?_(Object(d.d)(a)):"LOGIN_USER"===t&&_(Object(d.a)(a)),e.next=3,o("");case 3:return e.next=5,g("");case 5:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),j=function(){var e=Object(i.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"email"===a.target.name?o(a.target.value):g(a.target.value);case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return m.a.createElement("div",{className:p.a.authContainer},m.a.createElement("div",{className:p.a.formContainer},m.a.createElement("h2",{className:p.a.authHeader},"\u0412\u0438\u043a\u043e\u043d\u0443\u0439 \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f, \u043e\u0442\u0440\u0438\u043c\u0430\u0439 \u043a\u043b\u0430\u0441\u043d\u0456 \u043f\u0440\u0438\u0437\u0438!"),m.a.createElement("form",{className:p.a.form},m.a.createElement("h2",{className:p.a.authText},"\u0412\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0443\u0432\u0430\u0442\u0438\u0441\u044f \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e e-mail \u0442\u0430 \u043f\u0430\u0440\u043e\u043b\u044e, \u043f\u043e\u043f\u0435\u0440\u0435\u0434\u043d\u044c\u043e \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0432\u0448\u0438\u0441\u044c"),m.a.createElement("h2",{className:p.a.authTextInput},"Email"),m.a.createElement("input",{className:p.a.input,type:"email",name:"email",pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",required:!0,placeholder:f.errors.email?f.errors.email:"Enter Email",onChange:j,value:n}),m.a.createElement("h2",{className:p.a.authTextInput},"\u041f\u0430\u0440\u043e\u043b\u044c"),m.a.createElement("input",{className:p.a.input,type:"password",name:"password",required:!0,placeholder:f.errors.password?f.errors.password:"Enter password",onChange:j,value:b}),m.a.createElement("div",{className:p.a.divFlex},m.a.createElement("div",{className:p.a.divbtn},m.a.createElement("button",{className:p.a.btn,type:"button",value:"LOGIN_USER",onClick:function(e){f.handleSubmit(),v(e)}},"\u0423\u0432\u0456\u0439\u0442\u0438")),m.a.createElement("div",{className:p.a.divbtn},m.a.createElement("button",{className:p.a.btn,type:"button",value:"REGISTR_USER",onClick:function(e){f.handleSubmit(),v(e)}},"\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044f")))),function(){if(document.body.clientWidth>767)return m.a.createElement("div",{className:p.a.plogo},m.a.createElement("p",null,"KidsLike"),m.a.createElement("img",{className:p.a.logoimg,src:t(191),alt:"logo"}),m.a.createElement("p",null,"| \u0420\u043e\u0431\u0438\u043c\u043e \u0436\u0438\u0442\u0442\u044f \u0431\u0430\u0442\u044c\u043a\u0456\u0432 \u0456 \u0434\u0456\u0442\u0435\u0439 \u0456\u0437\u0456 : | 2019"))}()),function(){var e=document.body.clientWidth;return e<768?m.a.createElement("img",{className:p.a.mobimg,src:t(192),alt:"mobileimg"}):e<1200?m.a.createElement("img",{className:p.a.mobimg,src:t(193),alt:"tabletimg"}):m.a.createElement("img",{className:p.a.mobimg,src:t(194),alt:"maintimg"})}())}}}]);
//# sourceMappingURL=AuthPage.48b8ff7f.chunk.js.map