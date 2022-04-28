// ==UserScript==
// @name         Kittens Game Assistant
// @namespace    https://github.com/Amaury-GitHub/kittensgame
// @version      1.0
// @description  整合Kitten Scientists,NummonCalc,KGP
// @author       Amaury
// @include     *bloodrizer.ru/games/kittens/*
// @include     file:///*kitten-game*
// @include     *kittensgame.com/web/*
// @include     *kittensgame.com/beta/*
// @include     *kittensgame.com/alpha/*
// @grant        none
// ==/UserScript==

(function() {
    var setup = function() {
        if (typeof gamePage === "undefined") {
            setTimeout(function(){
                setup();
            }, 2000);
        } else {
            document.body.appendChild(document.createElement('script')).src = 'https://cdn.jsdelivr.net/gh/cameroncondry/cbc-kitten-scientists@master/kitten-scientists.user.js';
            document.body.appendChild(document.createElement('script')).src = 'https://cdn.jsdelivr.net/gh/Bioniclegenius/NummonCalc@master/NummonCalc.js';
            document.body.appendChild(document.createElement('script')).src = 'https://cdn.jsdelivr.net/gh/Amaury-GitHub/kittensgame@main/KGP-new.js';
            document.body.appendChild(document.createElement('script')).src = 'https://cdn.jsdelivr.net/gh/Amaury-GitHub/kittensgame@main/KG-maxValue.js';
        }
    };
    setup();
})();
