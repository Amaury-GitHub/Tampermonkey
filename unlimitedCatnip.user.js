// ==UserScript==
// @name         Kittens Game unlimited catnip
// @namespace    https://github.com/Amaury-GitHub/Tampermonkey
// @version      1.0
// @description  猫国建设者无限猫薄荷
// @author       Amaury
// @include     *kittensgame.com/web/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    //无限猫薄荷, 2s补充一次
    setInterval(function() {
        if (game.resPool.resourceMap.catnip.value < game.resPool.resourceMap.catnip.maxValue){
            game.resPool.resourceMap.catnip.value = game.resPool.resourceMap.catnip.maxValue
        }
    }, 2000)

})();
