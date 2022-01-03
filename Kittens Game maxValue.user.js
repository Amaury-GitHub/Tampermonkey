// ==UserScript==
// @name         Kittens Game maxValue
// @namespace    https://github.com/Amaury-GitHub/kittensgame
// @version      1.0
// @description  猫国建设者,解放小猫,自动锁定小猫职业对应的资源的最大值
// @author       Amaury
// @include     *bloodrizer.ru/games/kittens/*
// @include     file:///*kitten-game*
// @include     *kittensgame.com/web/*
// @include     *kittensgame.com/beta/*
// @include     *kittensgame.com/alpha/*
// @match        https://likexia.gitee.io/cat-zh/
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

function maxValue ()
{
    //伐木工_木材
    if (game.resPool.resourceMap.wood.unlocked === true) {
       game.resPool.resourceMap.wood.value = game.resPool.resourceMap.wood.maxValue
    }
    //农民_猫薄荷
    if (game.resPool.resourceMap.catnip.unlocked === true) {
       game.resPool.resourceMap.catnip.value = game.resPool.resourceMap.catnip.maxValue
    }
    //学者_科学
    if (game.resPool.resourceMap.science.unlocked === true) {
       game.resPool.resourceMap.science.value = game.resPool.resourceMap.science.maxValue
    }
    //猎人_喵力
    if (game.resPool.resourceMap.manpower.unlocked === true) {
       game.resPool.resourceMap.manpower.value = game.resPool.resourceMap.manpower.maxValue
    }
    //矿工_矿物
    if (game.resPool.resourceMap.minerals.unlocked === true) {
       game.resPool.resourceMap.minerals.value = game.resPool.resourceMap.minerals.maxValue
    }
    //牧师_信仰
    if (game.resPool.resourceMap.faith.unlocked === true) {
       game.resPool.resourceMap.faith.value = game.resPool.resourceMap.faith.maxValue
    }
    //地质学家_煤
    if (game.resPool.resourceMap.coal.unlocked === true) {
       game.resPool.resourceMap.coal.value = game.resPool.resourceMap.coal.maxValue
    }
    //地质学家_黄金
    if (game.resPool.resourceMap.gold.unlocked === true) {
      game.resPool.resourceMap.gold.value = game.resPool.resourceMap.gold.maxValue
    }
}

setInterval(maxValue,2000);

})()
