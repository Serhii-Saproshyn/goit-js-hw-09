!function(){var t=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]");t.addEventListener("click",(function(){t.disabled=!0,e=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),n.addEventListener("click",(function(){t.disabled=!1,clearInterval(e)}));var e=null}();
//# sourceMappingURL=01-color-switcher.84d61cf6.js.map