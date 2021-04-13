(()=>{"use strict";var e={22:(e,a,t)=>{const c=require("react");var s=t.n(c);const n=require("react-router-dom"),r=require("@babel/runtime/helpers/classCallCheck");var m=t.n(r);const l=require("@babel/runtime/helpers/createClass");var N=t.n(l);const i=require("@babel/runtime/helpers/inherits");var M=t.n(i);const u=require("@babel/runtime/helpers/possibleConstructorReturn");var g=t.n(u);const o=require("@babel/runtime/helpers/getPrototypeOf");var E=t.n(o);const D=function(){return s().createElement("div",{className:"wrapMain_header"},s().createElement("div",{className:"wrap_header"},s().createElement("p",{className:"wrap_rosee"},s().createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAAAbCAYAAAAJUhN7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAODSURBVHgB7VrtddMwFL3l8B8zQcUENROgDQgTxEzQbhAzAWECuxOkncDpBLQTJJ0gYYIgYQnkl/ckO05+4XvOO7H1cfV09SQ/uwX+T+SYcBHMjR2MbYxVxmbGMkwYDS+st52xEpO4o7HAJOpFEAprj4JJ1DPBC7sypjDhbLBZgY1UjQkTJvTEFbnXaLfSjbEXY0tXrozdos0J98Z+GKtl2j88nx3Xqyt75/reG1sjDfvQKYx9ctevjiNzPE/GHoxtB/AotPO6cRzPbi4pDo7L4lfA9cj5Y0Vr0KYnYQ5Yuvo5U2dNM4Pnjssn6eFTWbkyX6cgIw/GrEidCsY4IP62Ffq+CvxRgS/WFkjjNuAqiT87iWtGBgrFnTHl3pZk8JwMonGMAt1ckxNGEX8k8ZrIOBZh+sUtpkZ3Pt8hoyJcFAXhuosN5COmcU7VTH0R9Fc4XiAOirSh0Z10lHDtkF5ELvo9GqR34wLyvD0ydANrBzIvKl642gpd8WgkVExfCdLx41FH/KCwu0cz5XSh80j/2CIoHOsivYCsEAkK7ligAxXOsoQDDWTQidNVLsEvdMFwKRxPljvKJBSML4j4EpvXMtY2Ja4EbjJDxKXbMYd8zldIv2VVpM/PSFuNeGQ2pO4hwlWQtpu3GI+h30b3AsfaXdv06Bv4J3jhrHRtOCimTAttb5gynzJy/Q7oz6XOIe7QjyD7Hhyl++UE9vV2x3zBcY6qGG4l8Ng89StTJuF9hOuFcp1D3EuhRCucFVgx9T6n/gh+wTysuDXOg8MQrjcYjy2GQTFlz0Lb2tgHxI+AuwSXFVfjNGzJfY4BO/Uc4q4xHqEgGseClWhFvmf63pL7J6bNHKfhkdxbYe9wAk7NFizoU3UTaUvzXJpZaMSf8DTlsXYd1Gfo/7oeQjFtNMOzQzpjmdM2Y8TVjAMcMmacXODSEQ4qHvdA5FI5KepmkEVboX/ebf1YgLz4cJOuMAw0oq6ZNhrpBdTBBKTzrYYc+R50N4XCWMEq98t9jAmRgc/NKVcTcHUWsQAf/kPTrDLoz30IqZDeGeFLhD0eFNNmg/QWtb5zUcfZEnEoyAJHd4cGf0b5lRmKPJhU5fhn7tqO06Df+Ve78Tf49/8Fs4C7Qb+/iRWQhenjS4hS4PLz6hxxV7gcMnRTl62z/TCavzwWCm1msT2Bx/uSjfAl5FLueitx/QZHvPFUj2FnzwAAAABJRU5ErkJggg==",className:"header_logo"})),s().createElement("p",null),s().createElement(n.NavLink,{to:"#",className:"nav_header",id:"advantages",activeClassName:"active_header"},"Преимущества"),s().createElement(n.NavLink,{to:"#",className:"nav_header",id:"inside",activeClassName:"active_header"},"Что внутри"),s().createElement(n.NavLink,{to:"#",className:"nav_header",id:"delivery",activeClassName:"active_header"},"Доставка"),s().createElement(n.NavLink,{to:"#",className:"nav_header",id:"header_buy",activeClassName:"active_header"},"Купить"),s().createElement(n.NavLink,{to:"#",className:"nav_header",id:"header_login",activeClassName:"active_header"},"Войти")))},d=require("jquery");var A=t.n(d);const j=function(e){M()(r,e);var a,t,c=(a=r,t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,c=E()(a);if(t){var s=E()(this).constructor;e=Reflect.construct(c,arguments,s)}else e=c.apply(this,arguments);return g()(this,e)});function r(){var e;return m()(this,r),(e=c.call(this)).animation=s().createRef(),e.every=s().createRef(),e}return N()(r,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){var e=A()(window),a=e.height()/2,t={container:document.getElementById("lottie-1"),renderer:"svg",loop:!1,autoplay:!1,path:"https://gist.githubusercontent.com/PovetevKirill/c78f8ac9b74bc468307dd7d046ba1df7/raw/a975f3c9d288aeaaf5c72d29a49675b4aaad6542/rosee_site_animation_whitebg.json"},c=bodymovin.loadAnimation(t);A()(window).scroll((function(){var t,s,n,r;t=a,s=c,n=e.scrollTop(),r=s.totalFrames/100*(n/(t/100)),s.goToAndStop(r,!0)})),c.addEventListener("enterFrame",(function(e,a){e.currentTime>c.totalFrames-1&&a.pause()}))}),100),window.addEventListener("scroll",(function(){console.log(e.animation.current.getBoundingClientRect().top),e.animation.current.getBoundingClientRect().top>300&&(e.animation.current.classList.remove("animationMove2"),e.animation.current.classList.add("move1")),window.innerHeight-e.animation.current.getBoundingClientRect().top<200&&(e.animation.current.classList.remove("animationMove2"),e.animation.current.classList.remove("move1")),e.animation.current.getBoundingClientRect().top<"-500"&&e.animation.current.classList.add("move1"),e.every.current.getBoundingClientRect().top<"-650"&&(e.animation.current.classList.remove("move1"),e.animation.current.classList.add("animationMove2"))}))}},{key:"render",value:function(){return s().createElement("div",{className:"wrap_cosmeticMasks"},s().createElement("div",{className:"cosmeticMasks"},s().createElement("p",{className:"masks_title",ref:this.every},"Еженедельная доставка ",s().createElement("br",null)," косметических масок,",s().createElement("br",null)," отобранных вручную"),s().createElement("p",{className:"masks_subtitle"},"Каждую неделю отправляем маски ",s().createElement("br",null)," для ухода за кожей лица. Маски подбираем ",s().createElement("br",null)," вручную, упаковываем в плотную бумагу. ",s().createElement("br",null),"Отправка по всей России."),s().createElement(n.NavLink,{to:"#",id:"masks_order"},"Заказать"),s().createElement(n.NavLink,{to:"#",id:"masks_buy"},"Купить в подарок"),s().createElement("div",{id:"lottie-1",ref:this.animation})))}}]),r}(s().Component),z=function(){return s().createElement("div",{className:"wrap_everyWeek"},s().createElement("div",{className:"everyWeek"},s().createElement("div",{className:"empty_square"}),s().createElement("div",{className:"first_square"},s().createElement("p",{className:"every_p"},"Еженедельная доставка косметических масок, отобранных вручную"),s().createElement("p",{className:"every_p2"},"Каждую неделю отправляем маски для ухода за кожей лица. Маски подбираем вручную, упаковываем в приятную упаковку из плотной бумаги. Отправка по всей России."),s().createElement(n.NavLink,{to:"/order",className:"order_bottom"},"Заказать"),s().createElement(n.NavLink,{to:"/buy",className:"buy_present"},"Купить в подарок")),s().createElement("div",{className:"empty_square2"})))},p=t.p+"bb9e986edadcd7b3c7e524be4e838396.png",I="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNSAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04LjU3ODMzIDEyLjEzNDRMMC43MDg0NzQgNC4yNjQ1M0w0LjY1OTA0IDAuMzEzOTY1TDEyLjUyODkgOC4xODM4MkwyMC4zOTg3IDAuMzE0MDIxTDI0LjM0OTMgNC4yNjQ1OUwxNi40Nzk1IDEyLjEzNDRMMjQuMzQ5NSAyMC4wMDQ0TDIwLjM5ODkgMjMuOTU1TDEyLjUyODkgMTYuMDg1TDQuNjU4ODIgMjMuOTU1TDAuNzA4MjUyIDIwLjAwNDVMOC41NzgzMyAxMi4xMzQ0WiIgZmlsbD0iI0NEMTkwMCIvPgo8L3N2Zz4K",y=t.p+"8d5b0ad168198c4ce2516e6bce1e90b6.png",T=t.p+"64f4305dc6557beb21335d78d20eaf71.png",k="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjciIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyNyAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjAyMiAyMS40NzQ2TDI2LjI0ODQgNS4xNzg1MkwyMi4xNTIxIDAuNzk0NDM0TDExLjAyMjEgMTIuNzA2M0w0LjA5NjQ0IDUuMjk0MTRMMC4wMDAxMjIwNyA5LjY3ODIyTDExLjAyMiAyMS40NzQ2WiIgZmlsbD0iIzUwOTc2QSIvPgo8L3N2Zz4K",v=t.p+"76be37f0ad2565849518aa3dcf81a9b5.svg",O=t.p+"6b684db027934d2d1d799dcc148b05b6.svg",L=t.p+"85ad0102f76badb403fd53628c68878a.svg",f=t.p+"5d6e27cc6dfcd03a84c65545ff8fff77.svg",x=t.p+"fc45fbb3bc4dd7ed7b26933b9d46683b.svg",w=t.p+"dbf4881f8aa4b6d1272fbab69eff4dab.svg",b=t.p+"ab228a0ceab656bde8adda94b0250186.svg",Y=t.p+"ede50769774328834179c1843df835fc.svg",_=t.p+"8b50eafd9020ead02ce7c419f305b552.svg",Q=t.p+"e20a41a8c9dbc011d980c7f1daea9c69.svg",C=t.p+"8932131a42d3fa12fce02ed40ce302fb.svg",h=t.p+"a24bb1568e2c36b5c25adc216a1df4e7.svg",U=t.p+"7b83ed862d8849cae20632101572d5c4.svg",S=t.p+"64affab173a2e3404d462091f272d6c2.svg",R=t.p+"fb918e3d06583e62a951bfe73e998f8c.svg",B=t.p+"10265b5dfac08d33adf2682120f9bbff.svg",P=function(){return s().createElement("div",{className:"wrap_advantages"},s().createElement("div",{className:"advantages"},s().createElement("div",{className:"advantages_shop"},s().createElement("img",{src:p,className:"shop"}),s().createElement("h4",{className:"shop_title"},"Покупать в магазинах косметики"),s().createElement("p",{className:"shop_minus1"},s().createElement("img",{src:I,className:"minus"})),s().createElement("p",{className:"shop_minus2"},s().createElement("img",{src:I,className:"minus"})),s().createElement("p",{className:"shop_minus3"},s().createElement("img",{src:I,className:"minus"})),s().createElement("p",{className:"shop_minus4"},s().createElement("img",{src:I,className:"minus"})),s().createElement("p",{className:"shop_minus5"},s().createElement("img",{src:I,className:"minus"})),s().createElement("p",{className:"shop_minus6"},s().createElement("img",{src:I,className:"minus"})),s().createElement("p",{className:"minus_text",id:"text1"},"Надо искать"),s().createElement("p",{className:"minus_text",id:"text2"},"Надо выбирать"),s().createElement("p",{className:"minus_text",id:"text3"},"Небольшой выбор"),s().createElement("p",{className:"minus_text",id:"text4"},"Нужно ехать до магазина"),s().createElement("p",{className:"minus_text",id:"text5"},"Нерегулярный уход за кожей"),s().createElement("p",{className:"minus_text",id:"text6"},"Одни и те же маски")),s().createElement("div",{className:"our_advantages"},s().createElement("div",{className:"advantages_masks"},s().createElement("p",null,s().createElement("img",{src:y,className:"mask1"})),s().createElement("p",null,s().createElement("img",{src:T,className:"mask2"})),s().createElement("img",{src:v,className:"mask_img"}),s().createElement("img",{src:O,className:"mask_img"}),s().createElement("img",{src:L,className:"mask_img"}),s().createElement("img",{src:f,className:"mask_img"}),s().createElement("img",{src:x,className:"mask_img",id:"mask5"}),s().createElement("img",{src:w,className:"mask_img"}),s().createElement("img",{src:b,className:"mask_img"}),s().createElement("img",{src:Y,className:"mask_img"}),s().createElement("img",{src:_,className:"mask_img",id:"mask9"}),s().createElement("img",{src:Q,className:"mask_img"}),s().createElement("img",{src:C,className:"mask_img"}),s().createElement("img",{src:h,className:"mask_img"}),s().createElement("img",{src:U,className:"mask_img",id:"mask13"}),s().createElement("img",{src:S,className:"mask_img"}),s().createElement("img",{src:R,className:"mask_img"}),s().createElement("img",{src:B,className:"mask_img"})),s().createElement("h4",{className:"advantages_title"},"Маски по подписке"),s().createElement("p",{className:"mask_plus1"},s().createElement("img",{src:k,className:"plus"})),s().createElement("p",{className:"mask_plus2"},s().createElement("img",{src:k,className:"plus"})),s().createElement("p",{className:"mask_plus3"},s().createElement("img",{src:k,className:"plus"})),s().createElement("p",{className:"mask_plus4"},s().createElement("img",{src:k,className:"plus"})),s().createElement("p",{className:"mask_plus5"},s().createElement("img",{src:k,className:"plus"})),s().createElement("p",{className:"mask_plus6"},s().createElement("img",{src:k,className:"plus"})),s().createElement("p",{className:"mask_plus7"},s().createElement("img",{src:k,className:"plus"})),s().createElement("p",{className:"mask_plus8"},s().createElement("img",{src:k,className:"plus"})),s().createElement("p",{className:"mask_plus9"},s().createElement("img",{src:k,className:"plus"})),s().createElement("p",{className:"minus_text",id:"text7"},"Регулярный уход за кожей лица"),s().createElement("p",{className:"minus_text",id:"text8"},"Выгоднее, чем маски в магазине"),s().createElement("p",{className:"minus_text",id:"text9"},"Пробуете маски разных брендов"),s().createElement("p",{className:"minus_text",id:"text10"},"Большой набор видов масок"),s().createElement("p",{className:"minus_text",id:"text11"},"Не нужно никуда ехать"),s().createElement("p",{className:"minus_text",id:"text12"},"Отправляем по почте каждую неделю"),s().createElement("p",{className:"minus_text",id:"text13"},"Шестнадцать масок в месяц"),s().createElement("p",{className:"minus_text",id:"text14"},"Доставка в почтовый ящик"),s().createElement("p",{className:"minus_text",id:"text15"},"Есть промокод на скидку: mask1"),s().createElement(n.NavLink,{to:"#",className:"advantages_btn",activeClassName:"active_header"},"Заказать с промокодом"))))},Z=t.p+"47467472b4131df315f1faecd13b6b46.png",F=t.p+"0b4b99c17f3ec78d82dc97e5e8c4dc5a.png",H=t.p+"c79c2c5e7742ac7fab369c824a6bf7f4.png",X=t.p+"577b805e66dabbac5ad90b05537be277.png",q=t.p+"8114d5ddb7c729987b2cf7a78ad80d49.png",J=t.p+"cea188398b23d94ed3786797641a4a64.png",V=function(){return s().createElement("div",{className:"wrap_inside"},s().createElement("div",{className:"MasksInside"},s().createElement("p",null),s().createElement("h3",{className:"inside_title"},"Что внутри"),s().createElement("h4",{className:"inside_subtitle"},"Такой конверт мы отправляем каждую ",s().createElement("br",null)," неделю. Заказ приходит в почтовый ящик."),s().createElement("p",{className:"inside_text1"},"Внутри конверта четыре случайных маски ",s().createElement("br",null)," для ухода за кожей лица. Перед отправкой маски ",s().createElement("br",null)," проверяются на соответствие вашему типу кожи."),s().createElement("p",{className:"wrap_mask1"},s().createElement("img",{src:Z,className:"inside_mask1"})),s().createElement("p",{className:"wrap_mask2"},s().createElement("img",{src:F,className:"inside_mask2"})),s().createElement("p",{className:"wrap_arrow1"},s().createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTU3IiBoZWlnaHQ9IjMxMiIgdmlld0JveD0iMCAwIDE1NyAzMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik03OC4zMTggMS4zMDA2NkM3OC44NTcxIDEuMTgwNyA3OS4zOTE0IDEuNTIwNDkgNzkuNTExNCAyLjA1OTU3TDgxLjQ2NjMgMTAuODQ0N0M4MS41ODYzIDExLjM4MzggODEuMjQ2NSAxMS45MTggODAuNzA3NCAxMi4wMzhDODAuMTY4MyAxMi4xNTggNzkuNjM0IDExLjgxODIgNzkuNTE0MSAxMS4yNzkxTDc3Ljc3NjMgMy40NzAxNEw2OS45NjczIDUuMjA3ODVDNjkuNDI4MiA1LjMyNzgxIDY4Ljg5NCA0Ljk4ODA1IDY4Ljc3NCA0LjQ0ODk0QzY4LjY1NCAzLjkwOTg3IDY4Ljk5MzggMy4zNzU1OSA2OS41MzI5IDMuMjU1NjJMNzguMzE4IDEuMzAwNjZaTTk3LjUyOTYgMzA1Ljc3MkM5Ni42NzQgMzA2LjI5IDk2LjY3MzcgMzA2LjI4OSA5Ni42NzMzIDMwNi4yODhDOTYuNjcyOSAzMDYuMjg4IDk2LjY3MjIgMzA2LjI4NyA5Ni42NzE0IDMwNi4yODVDOTYuNjY5OCAzMDYuMjgzIDk2LjY2NzQgMzA2LjI3OSA5Ni42NjQyIDMwNi4yNzNDOTYuNjU3OSAzMDYuMjYzIDk2LjY0ODUgMzA2LjI0NyA5Ni42MzYyIDMwNi4yMjdDOTYuNjExNCAzMDYuMTg2IDk2LjU3NDggMzA2LjEyNSA5Ni41MjY0IDMwNi4wNDRDOTYuNDI5OCAzMDUuODgyIDk2LjI4NjcgMzA1LjY0MiA5Ni4wOTk5IDMwNS4zMjdDOTUuNzI2MyAzMDQuNjk1IDk1LjE3OCAzMDMuNzYxIDk0LjQ3NzUgMzAyLjU0N0M5My4wNzY1IDMwMC4xMTkgOTEuMDY2NyAyOTYuNTczIDg4LjYyODMgMjkyLjA5NUM4My43NTE4IDI4My4xMzkgNzcuMTU5OSAyNzAuNDUyIDcwLjI5NTcgMjU1LjUyMkM1Ni41NzYgMjI1LjY4MiA0MS43MzI4IDE4Ni44MDggMzcuMzY5OSAxNTAuODQ1TDM5LjM1NTQgMTUwLjYwNEM0My42ODA3IDE4Ni4yNTggNTguNDIxMSAyMjQuOTA4IDcyLjExMjggMjU0LjY4N0M3OC45NTQzIDI2OS41NjcgODUuNTI1IDI4Mi4yMTMgOTAuMzg0OCAyOTEuMTM5QzkyLjgxNDYgMjk1LjYwMSA5NC44MTYyIDI5OS4xMzMgOTYuMjA5NyAzMDEuNTQ3Qzk2LjkwNjUgMzAyLjc1NSA5Ny40NTEyIDMwMy42ODMgOTcuODIxMyAzMDQuMzA4Qzk4LjAwNjMgMzA0LjYyMSA5OC4xNDc3IDMwNC44NTggOTguMjQyNiAzMDUuMDE3Qzk4LjI5MDEgMzA1LjA5NiA5OC4zMjU5IDMwNS4xNTYgOTguMzQ5OCAzMDUuMTk2Qzk4LjM2MTcgMzA1LjIxNSA5OC4zNzA3IDMwNS4yMyA5OC4zNzY2IDMwNS4yNEM5OC4zNzk2IDMwNS4yNDUgOTguMzgxOCAzMDUuMjQ5IDk4LjM4MzIgMzA1LjI1MUM5OC4zODM5IDMwNS4yNTIgOTguMzg0NCAzMDUuMjUzIDk4LjM4NDggMzA1LjI1NEM5OC4zODUxIDMwNS4yNTQgOTguMzg1MiAzMDUuMjU0IDk3LjUyOTYgMzA1Ljc3MlpNMzcuMzY5OSAxNTAuODQ1QzMyLjk5NjUgMTE0Ljc5NSA0My4xMDcgNzcuNDk5MSA1NC4yNjA4IDQ5LjI3NjhDNTkuODQyMyAzNS4xNTQxIDY1LjY5NTcgMjMuMjc3MiA3MC4xNTQ0IDE0LjkyOTVDNzIuMzg0IDEwLjc1NTIgNzQuMjY1NiA3LjQ2MjE0IDc1LjU5MDkgNS4yMTA3Qzc2LjI1MzcgNC4wODQ5MiA3Ni43Nzc0IDMuMjE5NSA3Ny4xMzYxIDIuNjM0NDNDNzcuMzE1NSAyLjM0MTg3IDc3LjQ1MzYgMi4xMTk0MyA3Ny41NDcyIDEuOTY5NTRDNzcuNTk0MSAxLjg5NDYgNzcuNjI5NyAxLjgzNzggNzcuNjUzOSAxLjc5OTQ4Qzc3LjY2NiAxLjc4MDMyIDc3LjY3NTIgMS43NjU3NSA3Ny42ODE1IDEuNzU1ODZDNzcuNjg0NiAxLjc1MDkxIDc3LjY4NyAxLjc0NzExIDc3LjY4ODcgMS43NDQ1MkM3Ny42ODk1IDEuNzQzMTkgNzcuNjkwMiAxLjc0MjEyIDc3LjY5MDYgMS43NDE0NEM3Ny42OTExIDEuNzQwNjcgNzcuNjkxNCAxLjc0MDE4IDc4LjUzNTIgMi4yNzY3OUM3OS4zNzkgMi44MTM0IDc5LjM3OSAyLjgxMzUxIDc5LjM3ODggMi44MTM4OUM3OS4zNzg0IDIuODE0MzkgNzkuMzc4IDIuODE1MDcgNzkuMzc3NCAyLjgxNjFDNzkuMzc2IDIuODE4MTYgNzkuMzc0IDIuODIxMzkgNzkuMzcxMiAyLjgyNTc3Qzc5LjM2NTcgMi44MzQ1NiA3OS4zNTcyIDIuODQ3OTkgNzkuMzQ1OCAyLjg2NjAxQzc5LjMyMzEgMi45MDIwOCA3OS4yODg4IDIuOTU2NiA3OS4yNDM0IDMuMDI5MjNDNzkuMTUyNyAzLjE3NDQ1IDc5LjAxNzUgMy4zOTIxNSA3OC44NDExIDMuNjc5ODRDNzguNDg4NCA0LjI1NTE2IDc3Ljk3MDggNS4xMTAzMyA3Ny4zMTQ1IDYuMjI1M0M3Ni4wMDE3IDguNDU1MjkgNzQuMTMzOSAxMS43MjQyIDcxLjkxODUgMTUuODcxOEM2Ny40ODc0IDI0LjE2NzkgNjEuNjY4NSAzNS45NzQ4IDU2LjEyMDkgNTAuMDExOUM0NS4wMTYzIDc4LjEwOTQgMzUuMDQwNiAxMTUuMDM4IDM5LjM1NTQgMTUwLjYwNEwzNy4zNjk5IDE1MC44NDVaIiBmaWxsPSIjNTU1NTU1Ii8+Cjwvc3ZnPgo=",className:"inside_arrow1"})),s().createElement("p",{className:"inside_text2"},"Это курьерский пакет — ",s().createElement("br",null),"защита посылки от влаги и пыли.",s().createElement("br",null),"На нём будет написан адрес доставки."),s().createElement("p",{className:"wrap_arrow2"},s().createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iMTEzIiB2aWV3Qm94PSIwIDAgODAgMTEzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNzYuOTQzNyAxMDEuNjc1Qzc3LjQ2NzMgMTAxLjQ5OSA3Ny43NDk1IDEwMC45MzMgNzcuNTc0IDEwMC40MDlMNzQuNzEzNSA5MS44NzU3Qzc0LjUzNzkgOTEuMzUyIDczLjk3MTEgOTEuMDY5OCA3My40NDc1IDkxLjI0NTNDNzIuOTIzOCA5MS40MjA5IDcyLjY0MTYgOTEuOTg3NyA3Mi44MTcyIDkyLjUxMTNMNzUuMzU5OSAxMDAuMDk2TDY3Ljc3NDcgMTAyLjYzOUM2Ny4yNTEgMTAyLjgxNSA2Ni45Njg4IDEwMy4zODEgNjcuMTQ0NCAxMDMuOTA1QzY3LjMxOTkgMTA0LjQyOSA2Ny44ODY3IDEwNC43MTEgNjguNDEwNCAxMDQuNTM1TDc2Ljk0MzcgMTAxLjY3NVpNMTkuNzY4MSAyLjUwNzU3QzE4Ljc3MDkgMi40MzIyNSAxOC43NzA5IDIuNDMyNTggMTguNzcwOCAyLjQzMzA2QzE4Ljc3MDggMi40MzM0MiAxOC43NzA4IDIuNDM0MDUgMTguNzcwNyAyLjQzNDc2QzE4Ljc3MDYgMi40MzYxOSAxOC43NzA1IDIuNDM4MjEgMTguNzcwMyAyLjQ0MDgxQzE4Ljc2OTkgMi40NDYwMiAxOC43NjkzIDIuNDUzNTcgMTguNzY4NiAyLjQ2MzQ0QzE4Ljc2NzIgMi40ODMxOCAxOC43NjUxIDIuNTEyMTggMTguNzYyNSAyLjU1MDI0QzE4Ljc1NzIgMi42MjYzNiAxOC43NDk2IDIuNzM4NjggMTguNzQwNCAyLjg4NTUxQzE4LjcyMTkgMy4xNzkxNiAxOC42OTY2IDMuNjEwODUgMTguNjY5MyA0LjE2Njg1QzE4LjYxNDYgNS4yNzg3OCAxOC41NTE1IDYuODg4MzEgMTguNTE3NSA4Ljg4NTYxQzE4LjQ0OTUgMTIuODc5MSAxOC40OTc1IDE4LjQyODUgMTguOTYyMyAyNC42NTM1QzE5Ljg4ODcgMzcuMDYyMSAyMi40ODA2IDUyLjMxOTggMjkuMjM4MyA2My4yNDk0TDMwLjkzOTQgNjIuMTk3NkMyNC40NDY2IDUxLjY5NjYgMjEuODc4MSAzNi44NDYzIDIwLjk1NjcgMjQuNTA0NkMyMC40OTc2IDE4LjM1NDUgMjAuNDQ5OSAxMi44NjgxIDIwLjUxNzIgOC45MTk2NkMyMC41NTA4IDYuOTQ1OTggMjAuNjEzMSA1LjM1Nzk4IDIwLjY2NjkgNC4yNjUxMkMyMC42OTM3IDMuNzE4NzIgMjAuNzE4NSAzLjI5NjIgMjAuNzM2NCAzLjAxMTI0QzIwLjc0NTQgMi44Njg3NyAyMC43NTI3IDIuNzYwNjkgMjAuNzU3NyAyLjY4ODczQzIwLjc2MDIgMi42NTI3NCAyMC43NjIxIDIuNjI1NzkgMjAuNzYzNCAyLjYwODA4QzIwLjc2NCAyLjU5OTIyIDIwLjc2NDUgMi41OTI2OCAyMC43NjQ4IDIuNTg4NDdDMjAuNzY1IDIuNTg2MzcgMjAuNzY1MSAyLjU4NDg1IDIwLjc2NTEgMi41ODM5MkMyMC43NjUyIDIuNTgzNDUgMjAuNzY1MiAyLjU4MzIgMjAuNzY1MiAyLjU4Mjk2QzIwLjc2NTIgMi41ODI4NSAyMC43NjUyIDIuNTgyODkgMTkuNzY4MSAyLjUwNzU3Wk0yOS4yMzgzIDYzLjI0OTRDMzUuOTc3MiA3NC4xNDg0IDQ3Ljc1NTQgODMuNzQ1NSA1Ny43NjE5IDkwLjU4NzFDNjIuNzc5IDk0LjAxNzMgNjcuMzc4NCA5Ni43NzMzIDcwLjcyNDIgOTguNjcyMkM3Mi4zOTc1IDk5LjYyMTggNzMuNzU4MyAxMDAuMzU4IDc0LjcwMjIgMTAwLjg1N0M3NS4xNzQyIDEwMS4xMDYgNzUuNTQyIDEwMS4yOTcgNzUuNzkyNyAxMDEuNDI1Qzc1LjkxOCAxMDEuNDkgNzYuMDE0IDEwMS41MzggNzYuMDc5MSAxMDEuNTcxQzc2LjExMTcgMTAxLjU4OCA3Ni4xMzY1IDEwMS42IDc2LjE1MzQgMTAxLjYwOUM3Ni4xNjE5IDEwMS42MTMgNzYuMTY4NCAxMDEuNjE2IDc2LjE3MjggMTAxLjYxOEM3Ni4xNzUgMTAxLjYxOSA3Ni4xNzY4IDEwMS42MiA3Ni4xNzggMTAxLjYyMUM3Ni4xNzg2IDEwMS42MjEgNzYuMTc5MSAxMDEuNjIxIDc2LjE3OTQgMTAxLjYyMkM3Ni4xNzk5IDEwMS42MjIgNzYuMTgwMSAxMDEuNjIyIDc2LjYyNTggMTAwLjcyN0M3Ny4wNzE1IDk5LjgzMTYgNzcuMDcxNiA5OS44MzE2IDc3LjA3MTUgOTkuODMxNkM3Ny4wNzEzIDk5LjgzMTUgNzcuMDcxIDk5LjgzMTQgNzcuMDcwNiA5OS44MzEyQzc3LjA2OTggOTkuODMwOCA3Ny4wNjg1IDk5LjgzMDEgNzcuMDY2NyA5OS44MjkyQzc3LjA2MzEgOTkuODI3NCA3Ny4wNTc1IDk5LjgyNDYgNzcuMDQ5OSA5OS44MjA4Qzc3LjAzNDcgOTkuODEzMiA3Ny4wMTE2IDk5LjgwMTUgNzYuOTgwNyA5OS43ODZDNzYuOTE5MSA5OS43NTQ4IDc2LjgyNjYgOTkuNzA3OSA3Ni43MDQ5IDk5LjY0NTVDNzYuNDYxNSA5OS41MjA4IDc2LjEwMTIgOTkuMzM0MyA3NS42MzcyIDk5LjA4ODhDNzQuNzA5IDk4LjU5OCA3My4zNjU3IDk3Ljg3MTcgNzEuNzExNCA5Ni45MzI4QzY4LjQwMTkgOTUuMDU0NSA2My44NTE2IDkyLjMyNzkgNTguODkwNyA4OC45MzYxQzQ4Ljk0MTUgODIuMTMzNyAzNy40NTExIDcyLjcyOTEgMzAuOTM5NCA2Mi4xOTc2TDI5LjIzODMgNjMuMjQ5NFoiIGZpbGw9IiM1NTU1NTUiLz4KPC9zdmc+Cg==",className:"inside_arrow2"})),s().createElement("p",{className:"wrap_mask3"},s().createElement("img",{src:H,className:"inside_mask3 com_ins"})),s().createElement("p",{className:"wrap_mask4"},s().createElement("img",{src:X,className:"inside_mask4 com_ins"})),s().createElement("p",{className:"wrap_mask5"},s().createElement("img",{src:q,className:"inside_mask5 com_ins"})),s().createElement("p",{className:"wrap_mask6"},s().createElement("img",{src:J,className:"inside_mask6 com_ins"})),s().createElement("p",{className:"inside_text3"},"Маски в конверте случайные")))},W=t.p+"35053a024e4cd23d72c6dcfad1978d06.png",G=t.p+"db38887f8039cad7544a70c415a3a8ca.png",K=t.p+"386bb309c5864253f32d9a260da011ea.png",$=t.p+"14d10053fe9d9e0d462a5e6255b211c1.png",ee=t.p+"6510371c148f5dbaea7db0f8d73dc2a7.png",ae=t.p+"3d798edfc7942bafc28731c1ccfe217f.png",te=t.p+"48e2afd17cc312367aa47a7e6d19bbfc.png",ce=t.p+"a2b769fcd3369f27b3825059fd3824c8.png",se=t.p+"07114a004d34d7a349bd382880886a7c.png",ne=t.p+"4fa61d1d96ca313dd23dcb0a564bfc68.png",re=t.p+"30c7bf51de178bf76a4258c5b1b9099c.png",me=t.p+"ab4797ff864b6297209d1d29631b8aa6.png",le=t.p+"8dc193537c5fbd64cbe5fc81576f61b3.png",Ne=t.p+"aa8aded520f8d6cae57deeabf5173749.png",ie=t.p+"53611e6eb6af67ed4a1aa5e43f06bb32.png",Me=t.p+"8c9d7c36865ab5119e6041c8a9f79e02.png",ue=function(){return s().createElement("div",{className:"wrapMain_Envelope"},s().createElement("div",{className:"envelope"},s().createElement("h3",{className:"envelope_title"},"Какие маски в конверте"),s().createElement("p",{className:"envelope_subtitle"},"В одном конверте — четыре случайные маски.",s().createElement("br",null)," Мы подбираем их так, чтобы они подходили ",s().createElement("br",null)," под ваш тип кожи лица. Не работаем с контрабандой,",s().createElement("br",null)," привозим маски только через поставщиков-партнёров."),s().createElement("div",{className:"wrapEN_mask1"},s().createElement("img",{src:W,className:"envelope_mask1"})),s().createElement("div",{className:"wrapEN_mask2"},s().createElement("img",{src:G,className:"envelope_mask2"})),s().createElement("div",{className:"wrapEN_mask3"},s().createElement("img",{src:K,className:"envelope_mask3"})),s().createElement("div",{className:"wrapEN_mask4_6"},s().createElement("div",{className:"wrapEN_mask4"},s().createElement("img",{src:$,className:"envelope_mask4"})),s().createElement("div",{className:"wrapEN_mask5"},s().createElement("img",{src:ee,className:"envelope_mask5"})),s().createElement("div",{className:"wrapEN_mask6"},s().createElement("img",{src:ae,className:"envelope_mask6"}))),s().createElement("div",{className:"wrapEN_mask7"},s().createElement("img",{src:te,className:"envelope_mask7"})),s().createElement("div",{className:"wrapEN_mask8"},s().createElement("img",{src:ce,className:"envelope_mask8"})),s().createElement("div",{className:"wrapEN_mask9_12"},s().createElement("div",{className:"wrapEN_mask9"},s().createElement("img",{src:se,className:"envelope_mask9"})),s().createElement("div",{className:"wrapEN_mask10"},s().createElement("img",{src:ne,className:"envelope_mask10"})),s().createElement("div",{className:"wrapEN_mask11"},s().createElement("img",{src:re,className:"envelope_mask11"})),s().createElement("div",{className:"wrapEN_mask12"},s().createElement("img",{src:me,className:"envelope_mask12"}))),s().createElement("div",{className:"wrapEN_mask13"},s().createElement("img",{src:le,className:"envelope_mask13"})),s().createElement("div",{className:"wrapEN_mask14"},s().createElement("img",{src:Ne,className:"envelope_mask14"})),s().createElement("div",{className:"wrapEN_mask15_16"},s().createElement("div",{className:"wrapEN_mask15"},s().createElement("img",{src:ie,className:"envelope_mask15"})),s().createElement("div",{className:"wrapEN_mask16"},s().createElement("img",{src:Me,className:"envelope_mask16"})))))},ge=function(){return s().createElement("div",{className:"DeliverySection"},s().createElement("div",{className:"DeliveryGrid"},s().createElement("h2",{className:"DeliveryFree"},"Доставка бесплатно"),s().createElement("h3",{className:"DeliveryInMailBox"},"Доставляем в почтовый ящик"),s().createElement("p",{className:"DeliveryText1"},"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."),s().createElement("h3",{className:"forRF"},"По всей РФ"),s().createElement("p",{className:"DeliveryText2"},"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."),s().createElement("h3",{className:"Free"},"Бесплатно"),s().createElement("p",{className:"DeliveryText3"},"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.")))},oe=t.p+"649ab1e635022a50eb79a58d4b423be2.svg",Ee=t.p+"eed89e9e017fe7c2ea4793c2f83f1438.png";const De=function(e){M()(n,e);var a,t,c=(a=n,t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,c=E()(a);if(t){var s=E()(this).constructor;e=Reflect.construct(c,arguments,s)}else e=c.apply(this,arguments);return g()(this,e)});function n(){return m()(this,n),c.call(this)}return N()(n,[{key:"render",value:function(){return s().createElement("div",{className:"wrap_Buy"},s().createElement("div",{className:"buyBlock"},s().createElement("div",{className:"wrap_skinImages"},s().createElement("img",{src:oe,id:"tree"}),s().createElement("img",{src:Ee,id:"face"})),s().createElement("p",{className:"qty"},s().createElement("p",{className:"sixtheen"},"16 масок в месяц"),s().createElement("b",{className:"forMyself"},"для себя "),"или ",s().createElement("b",{className:"presents"}," в подарок ")),s().createElement("div",{className:"chooseSecond"},s().createElement("p",{className:"typeOfSkin"},"Выберите тип кожи"),s().createElement("p",{className:"combi"},"Комбинированная"),s().createElement("p",{className:"fatty"},"Жирная"),s().createElement("p",{className:"dry"},"Сухая")),s().createElement("div",{className:"payment1"},s().createElement("p",{className:"payment2"},"Оплата"),s().createElement("p",{className:"once"},"Раз в месяц"),s().createElement("p",{className:"sixMonth"},"Каждые полгода"),s().createElement("p",{className:"everyYear"},"Ежегодно")),s().createElement("div",{className:"wrap_pay"},s().createElement("p",{className:"makePayment"},"Оформить"),s().createElement("p",{className:"newPrice"},s().createElement("b",{className:"priceNew"},"1990.-")," ",s().createElement("p",{className:"month1"},"в месяц")),s().createElement("div",{className:"oldPrice"},"3990"))))}}]),n}(s().Component),de=t.p+"16a58c235a01ad5ba481f364feff3609.png",Ae=t.p+"e1dd43a1d9cfd6d90a0e5f6680221d25.png",je=t.p+"263a4d7fc90e02b4c8cc7afa11295769.png",ze=t.p+"497c569963885ec0def9ff1752365d71.png",pe=t.p+"aef3edf56444623776337638e314ea55.png",Ie=t.p+"17f6a36c508053bd09856980de44576b.png",ye=function(){return s().createElement("div",{className:"wrap_Promotions"},s().createElement("div",{className:"promotions"},s().createElement("h2",{className:"promotions_title"},"Акции"),s().createElement("div",{className:"wrap_promotions1"},s().createElement("img",{src:de,className:"masks_promotions"})),s().createElement("div",{className:"wrap_promotions2"},s().createElement("img",{src:Ae,className:"masks_promotions"})),s().createElement("div",{className:"wrap_promotions3"},s().createElement("img",{src:je,className:"masks_promotions"})),s().createElement("div",{className:"wrap_promotions4"},s().createElement("img",{src:ze,className:"masks_promotions"})),s().createElement("div",{className:"wrap_promotions5"},s().createElement("img",{src:pe,className:"masks_promotions"})),s().createElement("div",{className:"wrap_promotions6"},s().createElement("img",{src:Ie,className:"masks_promotions"}))))},Te=function(){return s().createElement("div",{className:"wrap_Footer"},s().createElement("div",{className:"footer"},s().createElement("div",{className:"wrap_footer_rosee"},s().createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAAAbCAYAAAAJUhN7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATtSURBVHgB7VmLURtJEB2Jf0HVKQOvIzgRAUsE6CI4XQT4IhBEgByBRQQ+ImAdAVwEWkcgXAUFiM/6PZihepueXQnJ5Spbr2pKO7+enjczPd0j535D3N3dpdfX14lbYL4Asb3xeFz4dIrUXRA9ByhimYYk1y0wGxSxo9vb24OiKFpugdkgiF2QOk94Yn8KqcvuF8bl5WX74eHh29ra2vtGo3HhFlhggQnQCB/09ZaWllIcnz9hm1KkExynA9bR6Ua+h88UKUebwcrKyqElkHYN9q3bbDb3kE2QMl/VRuLRPF5dXR24GlCf5eXlfcjrcEwmysbYba/DOdIXtPmvSg773N/fP8lBe8q48PPg7zn0PKmTEUAe8LMXdKIsr8+TLJigw42NjVx26Hl/T/p/BS8AUV/ohMmn1uBBFr4/60mi/Cz4l1b/AJDxNy8hqUcASUfZoEqPANTvBzlI/YguTJ+qLjvWYT5Hmpugj+SPfLlYpRQglBsaBPcNQirJh8yObMM+uo3XJxBS8FKyJhwIjpGrNsUwMo6c72cXgVqIU0NWKmWVCEZB2yDvEwX5Ve4b9d2YokyWkl6WbDfSoefNzc0H6wRFZI0sclHWlTIo05Lhw9+603ik9OlEZI1kO+rXZAVs4LnRPoVd/YsuDGwJd2ku6jJpN2Gre6pvbing3SHpErV0X2/DZH7fiv0pCxP46AxomTghmdXu8fHxRMksLQLHxRilMtxDpn3mHSXzIPhD00WAxsfBN6SRBpnvQfIuOm3je1cqgJ+u6p67OLS/2ZH2Dt96obkAw9JR84Ae/fX19VJ77lr3fJG+jLe1tWVtHucvtxfgctuReYyrd3zm4shlBtztNN0UAMmZVhQKtd1s4PFOQwY7Y+BeLwCJOPAXYRLKuPg6OMDNv6e65i4CtNV1LYzzTuRLZGOnf3MRoC5XRck8IrRpybWIS8I3yYKNPMSiHRl96S4OQTJdwX+tqMu49Vvj+MvXO1eN0tyg0x8VsnZUfi7kJm46vCIEJJUIwVHv4+KgT9uLyOj6B+/dkl8Z0QfmLI/IYfmuLICp+Rppy93ZwOLlFbKOZcE8yM3dDwADGJA3wE6li2SdDu5iejPbNe8GLZozNwdg5xYgP5u4vZsRhq2pQ2KUmReOv0i3sfP+cfYi0gUsXTog+4tq06oKNGqQq3w6zcvazOS66ht0ImCBXsjlcde+LUge0FOhB6P70lWTecPb4I7bd2/DiS7Qi1mFmcn1Ni9TxUlFl9LK09fUdlMTFsaBqeiCPP2mUbrhLW8D8jpWNCjhQ/euLPP+vdO6xaLGAEa2Jd+8Lrytgg7/GK1Y7YwIrdABgp9kNKryuo6qokEd5Ymw9EiP598Nela06MeyotMRx9AmQrxBDCU5iRX+uing3yImedipDG1Fm1HsX1k+CtXpKR93jHTmQ9+z8WRh9lmFrFOfhmaIPH5+oCnq4v46KIJfTdq/V7ysvCVj/PzOERQdRnZTZb1o168gpfbtIcATfDqBrJE0LQ3uMLg05urDHn6Fz5m6KcDJ4gI5YPiHbAYZ/7M8vO/yUmLYWuU+ecKoF+1kG32y4AV4OSz7WCfHy0r9W0Oqqp7elmlXDV85JqsLWbwPtM3NrXk13A8EV/zq6irh9+bmZv7W/7FINkh4sm+Y3MWkZMR0easMLYtysPkuYvP6DpNlg4fNlizEAAAAAElFTkSuQmCC",className:"footer_logo"})),s().createElement("p",null),s().createElement(n.NavLink,{to:"#",className:"nav_footer",id:"footer_advantages",activeClassName:"active_footer"},"Преимущества"),s().createElement(n.NavLink,{to:"#",className:"nav_footer",id:"footer_inside",activeClassName:"active_footer"},"Что внутри"),s().createElement(n.NavLink,{to:"#",className:"nav_footer",id:"footer_delivery",activeClassName:"active_footer"},"Доставка"),s().createElement(n.NavLink,{to:"#",className:"nav_footer",id:"footer_buy",activeClassName:"active_footer"},"Купить"),s().createElement(n.NavLink,{to:"#",className:"nav_footer",id:"footer_login",activeClassName:"active_footer"},"Войти")))};const ke=[{path:"/",exact:!0,component:function(e){M()(n,e);var a,t,c=(a=n,t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,c=E()(a);if(t){var s=E()(this).constructor;e=Reflect.construct(c,arguments,s)}else e=c.apply(this,arguments);return g()(this,e)});function n(){return m()(this,n),c.apply(this,arguments)}return N()(n,[{key:"render",value:function(){return s().createElement("div",null,s().createElement(D,null),s().createElement(j,null),s().createElement(z,null),s().createElement(P,null),s().createElement(V,null),s().createElement(ue,null),s().createElement(ge,null),s().createElement(De,null),s().createElement(ye,null),s().createElement(Te,null))}}]),n}(s().Component)}];const ve=function(e){M()(r,e);var a,t,c=(a=r,t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,c=E()(a);if(t){var s=E()(this).constructor;e=Reflect.construct(c,arguments,s)}else e=c.apply(this,arguments);return g()(this,e)});function r(){return m()(this,r),c.apply(this,arguments)}return N()(r,[{key:"render",value:function(){return s().createElement("div",{className:"main_wrap"},s().createElement(n.Switch,null,ke.map((function(e,a){return s().createElement(n.Route,{key:1,path:e.path,exact:e.exact,component:e.component})}))))}}]),r}(s().Component),Oe=require("express");var Le=t.n(Oe);const fe=require("react-dom/server"),xe=require("cookie-parser");var we=t.n(xe);const be=require("body-parser");var Ye=t.n(be);const _e=require("serialize-javascript");var Qe=t.n(_e);const Ce=require("express-validator");var he=t.n(Ce),Ue=Le()();process.env.PORT,Ue.use((function(e,a,t){a.setHeader("Cache-Control","no-cache, no-store, must-revalidate"),a.setHeader("Pragma","no-cache"),a.setHeader("Expires","0"),a.setHeader("Access-Control-Allow-Origin","*"),a.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization"),t()})),Ue.use(Le().static("public")),Ue.use(Ye().json()),Ue.use(Ye().urlencoded({extended:!1})),Ue.use(Le().urlencoded({extended:!1})),Ue.use(he()()),Ue.use(we()()),Ue.get("*",(function(e,a,t){var c=ke.find((function(a){return(0,n.matchPath)(e.url,a)}))||{};(c.fetchInitialData?c.fetchInitialData(e.path):Promise.resolve()).then((function(t){var c={data:t},r=(0,fe.renderToString)(s().createElement(n.StaticRouter,{location:e.url,context:c},s().createElement(ve,{data:t}))),m='<!DOCTYPE html>\n            <html>\n                <head>\n                  <title>collab</title>\n                  <link rel="stylesheet" type="text/css" href="../main.css">\n                    <meta name="viewport" content="width=device-width, initial-scale=1">\n                      <script src=\'/bundle.js\' defer><\/script>\n                        <script>window.__INITIAL_DATA__= '.concat(Qe()(t),'<\/script>\n                            <title>COLLAB</title>\n                          </head>\n                        <body>\n                       <div id="app">\n                     ').concat(r,"\n                   </div>\n                  <script src='https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.5.0/lottie.js'><\/script>\n                </body>\n            </html>");return a.send(m)})).catch(t)})),Ue.use((function(e,a,t){var c=new Error("Noooo");c.status=404,t(c)})),Ue.listen(8888,(function(){console.log("connected!")}))},346:e=>{e.exports=require("babel-regenerator-runtime")}},a={};function t(c){var s=a[c];if(void 0!==s)return s.exports;var n=a[c]={exports:{}};return e[c](n,n.exports,t),n.exports}t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a}),a},t.d=(e,a)=>{for(var c in a)t.o(a,c)&&!t.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t.p="/",t(346),t(22)})();