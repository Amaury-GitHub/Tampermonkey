// ==UserScript==
// @name         AutoClick Jump now
// @namespace    https://github.com/Amaury-GitHub/Tampermonkey
// @version      0.1
// @description  自动点击Jump now
// @author       Amaury
// @match        *://t.techlife.app/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var button = document.getElementById('url');
    button.click();

})();
