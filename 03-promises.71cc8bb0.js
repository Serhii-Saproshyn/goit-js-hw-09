!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var u=r("6JpON"),a={form:document.querySelector(".form"),delay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]'),formBtn:document.querySelector('[type="submit"]')};function i(e,t){var n=Math.random()>.3;return new Promise((function(o,r){setTimeout((function(){n&&o("✅ Fulfilled promise ".concat(e," in ").concat(t,"ms")),r("❌ Rejected promise ".concat(e," in ").concat(t,"ms"))}),t)}))}function l(t){e(u).Notify.success(t)}function c(t){e(u).Notify.failure(t)}a.form.addEventListener("submit",(function(e){e.preventDefault(),a.formBtn.disabled=!0;for(var t=Number(a.delay.value),n=1;n<=Number(a.amount.value);n+=1)i(n,t).then(l).catch(c),t+=Number(a.step.value);a.delay.value="",a.step.value="",a.amount.value="",setTimeout((function(){a.formBtn.disabled=!1}),t+500)}))}();
//# sourceMappingURL=03-promises.71cc8bb0.js.map