(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10086dcf"],{"0418":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"header-top-row"},[s("router-link",{staticClass:"logo",attrs:{to:"/"}},[s("svg",{staticClass:"logo-svg",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"64",height:"56",viewBox:"0 0 64 56"}},[s("path",{attrs:{d:"M52.873,55.128 L58.125,45.939 L63.377,55.128 L52.873,55.128 ZM46.303,45.172 L56.811,45.172 L51.557,54.359 L46.303,45.172 ZM51.557,34.451 L56.811,43.641 L46.303,43.641 L51.557,34.451 ZM39.738,33.686 L50.243,33.686 L44.990,42.874 L39.738,33.686 ZM44.990,22.967 L50.243,32.154 L39.738,32.154 L44.990,22.967 ZM33.168,22.202 L43.676,22.202 L38.422,31.390 L33.168,22.202 ZM38.422,11.480 L43.676,20.671 L33.168,20.671 L38.422,11.480 ZM26.600,10.713 L37.108,10.713 L31.854,19.905 L26.600,10.713 ZM31.854,-0.006 L37.108,9.184 L26.600,9.184 L31.854,-0.006 ZM20.032,20.671 L25.286,11.480 L30.540,20.671 L20.032,20.671 ZM13.465,32.154 L18.718,22.967 L23.971,32.154 L13.465,32.154 ZM6.897,43.641 L12.151,34.451 L17.404,43.641 L6.897,43.641 ZM0.331,55.128 L5.582,45.939 L10.836,55.128 L0.331,55.128 ZM17.404,45.172 L12.151,54.359 L6.897,45.172 L17.404,45.172 ZM23.971,33.686 L18.718,42.874 L13.465,33.686 L23.971,33.686 ZM30.540,22.202 L25.286,31.390 L20.032,22.202 L30.540,22.202 ZM37.108,55.128 L26.600,55.128 L31.854,45.939 L37.108,55.128 ZM43.676,45.172 L38.422,54.359 L33.168,45.172 L43.676,45.172 ZM50.243,55.128 L39.738,55.128 L44.990,45.939 L50.243,55.128 Z"}})]),s("span",{staticClass:"logo-txt"},[t._v("GeekJob")])]),s("div",{staticClass:"header-top-cnt"},[s("input",{staticClass:"mobile-input-btn",attrs:{id:"mobile-btn",type:"checkbox"}}),t._m(0),s("ul",{staticClass:"main-header-list"},[t._m(1),t._m(2),s("li",{staticClass:"main-header-list-item"},["unknown"===t.userLogin?s("Account"):t._e()],1)]),"unknown"!==t.userLogin?s("div",{staticClass:"header-buttons-cnt"},[s("label",{staticClass:"form-search-label dropdown",attrs:{for:"searchbox"},on:{click:t.toggleClick}},[s("svg",{staticClass:"header-search-svg",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"32",height:"32",viewBox:"0 0 40 40"}},[s("path",{attrs:{d:"M16,29A13,13,0,1,1,29,16,13,13,0,0,1,16,29ZM16,5A11,11,0,1,0,27,16,11,11,0,0,0,16,5Z"}}),s("path",{attrs:{d:"M16,17a5,5,0,1,1,5-5A5,5,0,0,1,16,17Zm0-8a3,3,0,1,0,3,3A3,3,0,0,0,16,9Z"}}),s("path",{attrs:{d:"M25.55,24a1,1,0,0,1-.74-.32A11.35,11.35,0,0,0,16.46,20h-.92a11.27,11.27,0,0,0-7.85,3.16,1,1,0,0,1-1.38-1.44A13.24,13.24,0,0,1,15.54,18h.92a13.39,13.39,0,0,1,9.82,4.32A1,1,0,0,1,25.55,24Z"}})]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"dropdown__menu"},[s("router-link",{attrs:{to:"/profile"}},[t._v(" Профиль")]),s("router-link",{attrs:{to:"/settings"}},[t._v(" Настройки")]),s("router-link",{attrs:{to:"/profile"}},[t._v(" Избранное")]),s("hr"),s("a",{on:{click:t.logout}},[t._v("Выход")])],1)])]):t._e()])],1)},o=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("label",{staticClass:"mobile-label-btn",attrs:{for:"mobile-btn"}},[s("div",{staticClass:"mobile-menu__icon"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",{staticClass:"main-header-list-item"},[s("a",{staticClass:"list-item-link",attrs:{href:"#"}},[t._v("Соискателям")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",{staticClass:"main-header-list-item"},[s("a",{staticClass:"list-item-link",attrs:{href:"#"}},[t._v("Работодателям")])])}],n=s("5530"),i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"account"},[s("button",{staticClass:"account-button",on:{click:function(a){t.showAccount=!t.showAccount}}},[t._v(" Войти ")]),s("form",{ref:"formLogin"}),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showAccount,expression:"showAccount"}],staticClass:"dropAccount"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.user,expression:"user"}],staticClass:"dropAccount-name"},[t._v(" Welcome, You signed as:"),s("span",[t._v(" "+t._s(t.user))])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.message,expression:"message"}],staticClass:"dropAccount-message"},[t._v(" "+t._s(t.message)+" ")]),s("label",{staticClass:"dropAccount-label",attrs:{for:"login"}},[t._v("Введите логин")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.login,expression:"login"}],attrs:{name:"login",type:"text"},domProps:{value:t.login},on:{input:function(a){a.target.composing||(t.login=a.target.value)}}}),s("label",{staticClass:"dropAccount-label",attrs:{for:"password"}},[t._v("Введите пароль")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{name:"password",type:"password"},domProps:{value:t.password},on:{input:function(a){a.target.composing||(t.password=a.target.value)}}}),s("div",{staticClass:"dropAccount-buttons"},[s("button",{staticClass:"account-button dropAccount-button",attrs:{name:"login"},on:{click:function(a){return a.preventDefault(),t.loginRequest(a)}}},[t._v(" Войти ")]),s("button",{staticClass:"account-button dropAccount-button",attrs:{name:"register"},on:{click:function(a){return a.preventDefault(),t.loginRequest(a)}}},[t._v(" Регистрация ")])])])])},c=[],r=s("1da1"),l=(s("b0c0"),s("96cf"),{data:function(){return{showAccount:!1,login:"",password:"",user:"",message:""}},mounted:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.message="",t.user="",a.prev=2,a.next=5,t.$store.dispatch("getUser");case 5:s=a.sent,s.result?t.user=s.result.login:t.message=s.message,a.next=13;break;case 9:a.prev=9,a.t0=a["catch"](2),t.message="Произошла ошибка при входе в систему",console.log(a.t0);case 13:case"end":return a.stop()}}),a,null,[[2,9]])})))()},methods:{loginRequest:function(t){var a=this;return Object(r["a"])(regeneratorRuntime.mark((function s(){var e,o;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(a.message="",s.prev=1,!a.login||!a.password){s.next=11;break}return e={login:a.login,password:a.password,action:t.target.name},s.next=6,a.$store.dispatch("login",e);case 6:o=s.sent,o.user&&(a.user=o.user.login,a.$refs.formLogin.submit()),o.message&&(a.message=o.message),s.next=12;break;case 11:a.message="Пожалуйста, введите логин и пароль";case 12:s.next=18;break;case 14:s.prev=14,s.t0=s["catch"](1),a.message="Произошла ошибка при входе в систему",console.log(s.t0);case 18:case"end":return s.stop()}}),s,null,[[1,14]])})))()}}}),u=l,m=s("2877"),p=Object(m["a"])(u,i,c,!1,null,null,null),v=p.exports,L=s("2f62"),g={name:"Header",components:{Account:v},data:function(){return{isOpen:!1}},mounted:function(){},methods:{toggleClick:function(){this.isOpen=!this.isOpen},logout:function(){this.$router.push("/"),location.reload(),window.localStorage.removeItem("tokenAuth"),this.$store.commit("setUserLogin","unknown"),this.$store.commit("setUser",null)}},computed:Object(n["a"])({},Object(L["b"])({userLogin:"userLogin_getter"}))},b=g,h=(s("abbf"),Object(m["a"])(b,e,o,!1,null,"72086199",null));a["a"]=h.exports},5298:function(t,a,s){},"67a8":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("header",[s("Header")],1),s("main",[s("div",{staticClass:"about-company-page-cnt"},[s("div",{staticClass:"about-company-page"},[s("section",{staticClass:"about-company-page-section"},[t._m(0),s("div",{staticClass:"about-company-presskit"},[s("div",{staticClass:"about-company-presskit-wrapper"},[s("h2",{staticClass:"about-company-page-h2"},[t._v("Пресс-центр")]),s("ul",{staticClass:"about-company-presskit-list"},[t._m(1),s("li",[s("svg",{staticClass:"about-company-logo-svg",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"64",height:"56",viewBox:"0 0 64 56"}},[s("path",{attrs:{d:"M52.873,55.128 L58.125,45.939 L63.377,55.128 L52.873,55.128 ZM46.303,45.172 L56.811,45.172 L51.557,54.359 L46.303,45.172 ZM51.557,34.451 L56.811,43.641 L46.303,43.641 L51.557,34.451 ZM39.738,33.686 L50.243,33.686 L44.990,42.874 L39.738,33.686 ZM44.990,22.967 L50.243,32.154 L39.738,32.154 L44.990,22.967 ZM33.168,22.202 L43.676,22.202 L38.422,31.390 L33.168,22.202 ZM38.422,11.480 L43.676,20.671 L33.168,20.671 L38.422,11.480 ZM26.600,10.713 L37.108,10.713 L31.854,19.905 L26.600,10.713 ZM31.854,-0.006 L37.108,9.184 L26.600,9.184 L31.854,-0.006 ZM20.032,20.671 L25.286,11.480 L30.540,20.671 L20.032,20.671 ZM13.465,32.154 L18.718,22.967 L23.971,32.154 L13.465,32.154 ZM6.897,43.641 L12.151,34.451 L17.404,43.641 L6.897,43.641 ZM0.331,55.128 L5.582,45.939 L10.836,55.128 L0.331,55.128 ZM17.404,45.172 L12.151,54.359 L6.897,45.172 L17.404,45.172 ZM23.971,33.686 L18.718,42.874 L13.465,33.686 L23.971,33.686 ZM30.540,22.202 L25.286,31.390 L20.032,22.202 L30.540,22.202 ZM37.108,55.128 L26.600,55.128 L31.854,45.939 L37.108,55.128 ZM43.676,45.172 L38.422,54.359 L33.168,45.172 L43.676,45.172 ZM50.243,55.128 L39.738,55.128 L44.990,45.939 L50.243,55.128 Z"}})]),s("span",{staticClass:"about-company-page-text"},[t._v(" Использование логотипов на электронных и печатных носителях, а также на сайтах в сети Интернет третьими лицами допускается только с письменного разрешения компании. ")])])])])])]),t._m(2)])])]),s("Footer")],1)},o=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"about-company-page-info"},[s("h2",{staticClass:"about-company-page-h2"},[t._v("О компании")]),s("p",{staticClass:"about-company-page-text"},[t._v(" GeekJob — крупный сайт по поиску работы и сотрудников. Мы предоставляем возможности, чтобы работодатели могли быстро найти подходящего сотрудника, а соискатели — хорошую работу. Наш поиск использует современные технологии, а сайт обрабатывает множество запросов в секунду. Каждый месяц на сайте появляются тысячи вакансий. Ежедневно мы помогаем сотням тысяч человек изменить свою жизнь к лучшему. ")]),s("div",{staticClass:"about-company-page-stats"},[s("h3",{staticClass:"about-company-page-h3"},[t._v("GeekJob - это")]),s("ul",{staticClass:"about-company-page-list"},[s("li",{staticClass:"about-company-page-list-item"},[s("h3",{staticClass:"about-company-item-title"},[t._v(" 1 "),s("span",{staticClass:"about-company-item-measure"},[t._v("млрд.")])]),s("span",{staticClass:"about-company-item-subtitle"},[t._v("откликов на вакансии")])]),s("li",{staticClass:"about-company-page-list-item"},[s("h3",{staticClass:"about-company-item-title"},[t._v(" 1085 "),s("span",{staticClass:"about-company-item-measure"},[t._v("тыс.")])]),s("span",{staticClass:"about-company-item-subtitle"},[t._v("вакансий")])]),s("li",{staticClass:"about-company-page-list-item"},[s("h3",{staticClass:"about-company-item-title"},[t._v(" 48 "),s("span",{staticClass:"about-company-item-measure"},[t._v("млн.")])]),s("span",{staticClass:"about-company-item-subtitle"},[t._v("резюме в базе")])]),s("li",{staticClass:"about-company-page-list-item"},[s("h3",{staticClass:"about-company-item-title"},[t._v(" 1540 "),s("span",{staticClass:"about-company-item-measure"},[t._v("тыс.")])]),s("span",{staticClass:"about-company-item-subtitle"},[t._v("проверенных компаний")])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",{staticClass:"about-company-presskit-item"},[s("h3",{staticClass:"about-company-page-h3"},[t._v("Элла Остпенко")]),s("span",{staticClass:"about-company-page-text"},[t._v("Руководитель пресс-службы")]),s("span",{staticClass:"about-company-page-text"},[t._v("+7 (495) 325-56-89")]),s("a",{staticClass:"about-company-page-link",attrs:{href:"mailto:pr@msk.hh.ru"}},[t._v("pr@msk.hh.ru")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"about-company-page-section"},[s("div",{staticClass:"about-company-contacts"},[s("h3",{staticClass:"about-company-page-h3"},[t._v("Контакты")]),s("ul",{staticClass:"about-company-contacts-list"},[s("li",{staticClass:"about-company-contacts-item"},[s("span",{staticClass:"about-company-page-text"},[t._v("Единый телефон")]),s("span",{staticClass:"about-company-page-phone"},[t._v("+7 800 300-20-20")]),s("span",{staticClass:"about-company-page-text"},[s("i",[t._v("звонок из регионов России бесплатный")])])])])])])}],n=s("0418"),i=s("fd2d"),c={name:"AboutCompany",components:{Header:n["a"],Footer:i["a"]}},r=c,l=s("2877"),u=Object(l["a"])(r,e,o,!1,null,null,null);a["default"]=u.exports},abbf:function(t,a,s){"use strict";s("5298")},b0c0:function(t,a,s){var e=s("83ab"),o=s("5e77").EXISTS,n=s("e330"),i=s("9bf2").f,c=Function.prototype,r=n(c.toString),l=/^\s*function ([^ (]*)/,u=n(l.exec),m="name";e&&!o&&i(c,m,{configurable:!0,get:function(){try{return u(l,r(this))[1]}catch(t){return""}}})},fd2d:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("footer",[s("section",{staticClass:"footer-lower"},[s("div",{staticClass:"footer-lower-block"},[t._m(0),s("a",{attrs:{href:"#"}},[t._v("Политика конфеденциальности")]),s("router-link",{attrs:{to:"/about"}},[t._v("О компании")]),s("a",{attrs:{href:"#"}},[t._v("Вопросы и ответы")]),s("a",{attrs:{href:"#"}},[t._v("Поддержка")])],1),s("div",[s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{staticClass:"social-icon",attrs:{icon:["fab","instagram"]}})],1),s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{staticClass:"social-icon",attrs:{icon:["fab","facebook"]}})],1),s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{staticClass:"social-icon",attrs:{icon:["fab","vk"]}})],1),s("a",{attrs:{href:"#"}},[s("font-awesome-icon",{staticClass:"social-icon",attrs:{icon:["fab","odnoklassniki"]}})],1)])])])},o=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[t._v(" Copyright © 2021 "),s("a",{staticClass:"footer-lower-allocated",attrs:{href:"#"}},[t._v("GeekJob")])])}],n={name:"Footer"},i=n,c=s("2877"),r=Object(c["a"])(i,e,o,!1,null,null,null);a["a"]=r.exports}}]);