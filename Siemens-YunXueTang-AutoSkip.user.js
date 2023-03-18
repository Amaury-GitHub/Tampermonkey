// ==UserScript==
// @name         Siemens YunXueTang AutoSkip
// @namespace    https://github.com/Amaury-GitHub/Tampermonkey
// @version      1.0
// @description  西门子云学堂自动点击继续学习
// @author       Amaury
// @include     *siemens.yunxuetang.cn/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setInterval(function() {
      const buttonEle = document.getElementsByClassName('yxt-button yxt-button--primary')[2];
      if (buttonEle) buttonEle.click();
    }, 5000)

})();
