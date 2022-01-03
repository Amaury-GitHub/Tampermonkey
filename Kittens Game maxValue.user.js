// ==UserScript==
// @name         Kittens Game maxValue
// @namespace    https://github.com/Amaury-GitHub/kittensgame
// @version      1.0
// @description  猫国建设者,已解锁的资源自动锁定最大值
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
//antimatter
//    if (game.resPool.resourceMap.antimatter.unlocked === true) {
//       game.resPool.resourceMap.antimatter.value = game.resPool.resourceMap.antimatter.maxValue
//    }
//catnip
    if (game.resPool.resourceMap.catnip.unlocked === true) {
       game.resPool.resourceMap.catnip.value = game.resPool.resourceMap.catnip.maxValue
    }
//coal
//    if (game.resPool.resourceMap.coal.unlocked === true) {
//       game.resPool.resourceMap.coal.value = game.resPool.resourceMap.coal.maxValue
//    }
//culture
//    if (game.resPool.resourceMap.culture.unlocked === true) {
//       game.resPool.resourceMap.culture.value = game.resPool.resourceMap.culture.maxValue
//    }
//faith
//    if (game.resPool.resourceMap.faith.unlocked === true) {
//       game.resPool.resourceMap.faith.value = game.resPool.resourceMap.faith.maxValue
//    }
//gold
//    if (game.resPool.resourceMap.gold.unlocked === true) {
//      game.resPool.resourceMap.gold.value = game.resPool.resourceMap.gold.maxValue
//    }
//iron
//    if (game.resPool.resourceMap.iron.unlocked === true) {
//       game.resPool.resourceMap.iron.value = game.resPool.resourceMap.iron.maxValue
//    }
//manpower
//    if (game.resPool.resourceMap.manpower.unlocked === true) {
//       game.resPool.resourceMap.manpower.value = game.resPool.resourceMap.manpower.maxValue
//    }
//minerals
//    if (game.resPool.resourceMap.minerals.unlocked === true) {
//       game.resPool.resourceMap.minerals.value = game.resPool.resourceMap.minerals.maxValue
//    }
//oil
//    if (game.resPool.resourceMap.oil.unlocked === true) {
//       game.resPool.resourceMap.oil.value = game.resPool.resourceMap.oil.maxValue
//    }
//science
//    if (game.resPool.resourceMap.science.unlocked === true) {
//       game.resPool.resourceMap.science.value = game.resPool.resourceMap.science.maxValue
//    }
//sorrow
//    if (game.resPool.resourceMap.sorrow.unlocked === true) {
//       game.resPool.resourceMap.sorrow.value = game.resPool.resourceMap.sorrow.maxValue
//    }
//titanium
//    if (game.resPool.resourceMap.titanium.unlocked === true) {
//       game.resPool.resourceMap.titanium.value = game.resPool.resourceMap.titanium.maxValue
//    }
//unobtainium
//    if (game.resPool.resourceMap.unobtainium.unlocked === true) {
//       game.resPool.resourceMap.unobtainium.value = game.resPool.resourceMap.unobtainium.maxValue
//    }
//uranium
//    if (game.resPool.resourceMap.uranium.unlocked === true) {
//       game.resPool.resourceMap.uranium.value = game.resPool.resourceMap.uranium.maxValue
//    }
//wood
    if (game.resPool.resourceMap.wood.unlocked === true) {
       game.resPool.resourceMap.wood.value = game.resPool.resourceMap.wood.maxValue
    }
//END
}

setInterval(maxValue,2000);

})()
