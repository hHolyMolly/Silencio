let isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows()}};isMobile.any()?document.body.classList.add("_touch"):document.body.classList.add("_pc");function myBurger(){function a(){e.classList.remove("_active"),d.classList.remove("_active")}function b(){const a=window.innerWidth-document.querySelector(".wrapper").offsetWidth+"px";h&&h.forEach(b=>{b.style.paddingRight=a}),i.style.paddingRight=a,i.classList.add("_lock-scroll"),f=!1,setTimeout(()=>{f=!0},g)}function c(){setTimeout(()=>{h&&h.forEach(a=>{a.style.paddingRight="0px"}),i.style.paddingRight="0px",i.classList.remove("_lock-scroll")},g),f=!1,setTimeout(()=>{f=!0},g)}const d=document.getElementById("menu-open"),e=document.getElementById("menu-content");let f=!0;const g=500,h=document.querySelectorAll("._lock-padding"),i=document.body;d&&e&&(d.addEventListener("click",function g(){d.classList.contains("_active")?f&&(a(),c()):f&&(e.classList.add("_active"),d.classList.add("_active"),b())}),document.addEventListener("click",function(b){const c=b.target;c.closest("[data-popup-open]")&&f&&a()}),document.addEventListener("keydown",function(b){"Escape"===b.code&&f&&(a(),c())}))}myBurger();function myPopups(){const a=document.querySelectorAll("[data-popup-open]"),b=document.querySelectorAll(".lock-padding"),c=document.body;let d=!0;const e=document.getElementById("modal-wrapper"),f=e.dataset.popupSpeed?+e.dataset.popupSpeed:500;if(a){function g(a){if(a&&d){const b=document.querySelector(".popup._active");b?h(b,!1):i(),a.classList.add("_active"),a.addEventListener("click",function(a){a.target.closest(".popup__body")||h(a.target.closest(".popup"))})}}function h(a,b=!0){d&&(a.classList.remove("_active"),b&&j())}function i(){const a=window.innerWidth-document.querySelector(".wrapper").offsetWidth+"px";b&&b.forEach(b=>{b.style.paddingRight=a}),c.style.paddingRight=a,c.classList.add("_lock-scroll"),d=!1,setTimeout(()=>{d=!0},f)}function j(){setTimeout(()=>{b&&b.forEach(a=>{a.style.paddingRight="0px"}),c.style.paddingRight="0px",c.classList.remove("_lock-scroll")},f),d=!1,setTimeout(()=>{d=!0},f)}a.forEach(a=>{a.addEventListener("click",function(a){const b=this.getAttribute("data-popup"),c=document.getElementById(b);g(c)})});const k=document.querySelectorAll("[data-popup-close]");k.forEach(a=>{a.addEventListener("click",function(b){h(a.closest(".popup"))})}),document.addEventListener("keydown",function(a){if("Escape"===a.code){const a=document.querySelector(".popup._active");h(a)}}),function(){Element.prototype.closest||(Element.prototype.closest=function(a){for(var b=this;b;){if(b.matches(a))return b;b=b.parentElement}return null})}(),function(){Element.prototype.matches||(Element.prototype.mathes=Element.prototype.matchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector)}()}}myPopups();