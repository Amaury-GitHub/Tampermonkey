// ==UserScript==
// @name         Siemens YunXueTang AutoSkip
// @namespace    https://github.com/Amaury-GitHub/Tampermonkey
// @version      1.0
// @description  西门子云学堂自动点击继续学习
// @author       Amaury
// @match        *://siemens.yunxuetang.cn/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var isVisible = function(element) {
      return element.offsetWidth > 0 || element.offsetHeight > 0;
    }

    setInterval(function() {
      const buttons = document.getElementsByClassName('yxt-button yxt-button--primary');
      for (let i = 0; i < buttons.length; i++) {
          const buttonText = buttons[i].textContent;
          if (buttonText === "继续学习" && isVisible(buttons[i])) {
              buttons[i].click();
              console.log("Button " + i + " with text '" + buttonText + "' was clicked!");
          }
      }
    }, 10000)

})();
