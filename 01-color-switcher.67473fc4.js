!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),a=document.body;console.log(t.dataset.start),console.log(e.dataset.stop),t.addEventListener("click",(function(){o=setInterval((function(){a.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(){clearInterval(o),t.disabled=!1,e.disabled=!0}));var o=null}();
//# sourceMappingURL=01-color-switcher.67473fc4.js.map