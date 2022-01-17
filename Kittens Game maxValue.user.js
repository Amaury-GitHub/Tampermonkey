// ==UserScript==
// @name         Kittens Game maxValue
// @namespace    https://github.com/Amaury-GitHub/kittensgame
// @version      1.0
// @description  猫国建设者,解放小猫
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

    //伐木工-木材
    setInterval(function() {
        game.resPool.resourceMap.wood.value = game.resPool.resourceMap.wood.maxValue
    }, 10000)
    //农民-猫薄荷
    setInterval(function() {
        game.resPool.resourceMap.catnip.value = game.resPool.resourceMap.catnip.maxValue
    }, 10000)
    //学者-科学
    setInterval(function() {
        game.resPool.resourceMap.science.value = game.resPool.resourceMap.science.maxValue
    }, 10000)
    //猎人-喵力
    setInterval(function() {
        game.resPool.resourceMap.manpower.value = game.resPool.resourceMap.manpower.maxValue
    }, 10000)
    //矿工-矿物
    setInterval(function() {
        game.resPool.resourceMap.minerals.value = game.resPool.resourceMap.minerals.maxValue
    }, 10000)
    //牧师-信仰
    setInterval(function() {
        game.resPool.resourceMap.faith.value = game.resPool.resourceMap.faith.maxValue
    }, 10000)
    //地质学家-煤
    setInterval(function() {
        game.resPool.resourceMap.coal.value = game.resPool.resourceMap.coal.maxValue
    }, 10000)
    //地质学家-黄金
    setInterval(function() {
        game.resPool.resourceMap.gold.value = game.resPool.resourceMap.gold.maxValue
    }, 10000)

})();
