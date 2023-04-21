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

    setInterval(function() {
      const buttons = document.getElementsByTagName('button');
      for (let i = 0; i < buttons.length; i++) {
          if (buttons[i].textContent.trim() === "继续学习" && buttons[i].offsetWidth > 0) {
              buttons[i].click();
          }
      }
    }, 10000)

})();
