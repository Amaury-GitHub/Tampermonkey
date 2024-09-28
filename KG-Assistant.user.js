// ==UserScript==
// @name         Kittens Game Assistant
// @namespace    https://github.com/Amaury-GitHub/Tampermonkey
// @version      1.0
// @description  整合Kitten Scientists
// @author       Amaury
// @match        *kittensgame.com/web/*
// @grant        none
// ==/UserScript==

(function() {
    var setup = function() {
        if (typeof gamePage === "undefined") {
            setTimeout(function(){
                setup();
            }, 2000);
        } else {
            document.body.appendChild(document.createElement('script')).src = 'https://kitten-science.com/stable.js';
            document.body.appendChild(document.createElement('script')).src = 'https://testingcf.jsdelivr.net/gh/Amaury-GitHub/Tampermonkey@main/KG-UnlimitedCatnip.user.js';
        }
    };
    setup();
})();
