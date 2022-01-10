// ==UserScript==
// @name         Kittens Game maxValue
// @namespace    https://github.com/Amaury-GitHub/kittensgame
// @version      1.0
// @description  猫国建设者,锁定猫薄荷的最大值
// @author       Amaury
// @include     *bloodrizer.ru/games/kittens/*
// @include     file:///*kitten-game*
// @include     *kittensgame.com/web/*
// @include     *kittensgame.com/beta/*
// @include     *kittensgame.com/alpha/*
// @match        https://likexia.gitee.io/cat-zh/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    //伐木工_木材
    setInterval(function() {
        game.resPool.resourceMap.wood.value = game.resPool.resourceMap.wood.maxValue
    }, 1000)
    
    //农民_猫薄荷
    setInterval(function() {
        game.resPool.resourceMap.catnip.value = game.resPool.resourceMap.catnip.maxValue
    }, 1000)

})();
