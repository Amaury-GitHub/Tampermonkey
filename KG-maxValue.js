// ==UserScript==
// @name         Kittens Game maxValue
// @namespace    https://github.com/Amaury-GitHub/kittensgame
// @version      1.0
// @description  猫国建设者资源最大化
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

    //猫薄荷
    setInterval(function() {
        if (game.resPool.resourceMap.catnip.value < game.resPool.resourceMap.catnip.maxValue){
            game.resPool.resourceMap.catnip.value = game.resPool.resourceMap.catnip.maxValue
        }
    }, 2000)
    //木材
    setInterval(function() {
        if (game.resPool.resourceMap.wood.value < game.resPool.resourceMap.wood.maxValue){
            game.resPool.resourceMap.wood.value = game.resPool.resourceMap.wood.maxValue
        }
    }, 2000)
    //矿物
    setInterval(function() {
        if (game.resPool.resourceMap.minerals.value < game.resPool.resourceMap.minerals.maxValue){
            game.resPool.resourceMap.minerals.value = game.resPool.resourceMap.minerals.maxValue
        }
    }, 2000)
    //煤
    setInterval(function() {
        if (game.resPool.resourceMap.coal.value < game.resPool.resourceMap.coal.maxValue){
            game.resPool.resourceMap.coal.value = game.resPool.resourceMap.coal.maxValue
        }
    }, 2000)
    //铁
    setInterval(function() {
        if (game.resPool.resourceMap.iron.value < game.resPool.resourceMap.iron.maxValue){
            game.resPool.resourceMap.iron.value = game.resPool.resourceMap.iron.maxValue
        }
    }, 2000)
    //钛
    setInterval(function() {
        if (game.resPool.resourceMap.titanium.value < game.resPool.resourceMap.titanium.maxValue){
            game.resPool.resourceMap.titanium.value = game.resPool.resourceMap.titanium.maxValue
        }
    }, 2000)
    //黄金
    setInterval(function() {
        if (game.resPool.resourceMap.gold.value < game.resPool.resourceMap.gold.maxValue){
            game.resPool.resourceMap.gold.value = game.resPool.resourceMap.gold.maxValue
        }
    }, 2000)
    //石油
    setInterval(function() {
        if (game.resPool.resourceMap.oil.value < game.resPool.resourceMap.oil.maxValue){
            game.resPool.resourceMap.oil.value = game.resPool.resourceMap.oil.maxValue
        }
    }, 2000)
    //铀
    setInterval(function() {
        if (game.resPool.resourceMap.uranium.value < game.resPool.resourceMap.uranium.maxValue){
            game.resPool.resourceMap.uranium.value = game.resPool.resourceMap.uranium.maxValue
        }
    }, 2000)
    //难得素
    setInterval(function() {
        if (game.resPool.resourceMap.unobtainium.value < game.resPool.resourceMap.unobtainium.maxValue){
            game.resPool.resourceMap.unobtainium.value = game.resPool.resourceMap.unobtainium.maxValue
        }
    }, 2000)
    //反物质
    setInterval(function() {
        if (game.resPool.resourceMap.antimatter.value < game.resPool.resourceMap.antimatter.maxValue){
            game.resPool.resourceMap.antimatter.value = game.resPool.resourceMap.antimatter.maxValue
        }
    }, 2000)
    //喵力
    setInterval(function() {
        if (game.resPool.resourceMap.manpower.value < game.resPool.resourceMap.manpower.maxValue){
            game.resPool.resourceMap.manpower.value = game.resPool.resourceMap.manpower.maxValue
        }
    }, 2000)
    //科学
    setInterval(function() {
        if (game.resPool.resourceMap.science.value < game.resPool.resourceMap.science.maxValue){
            game.resPool.resourceMap.science.value = game.resPool.resourceMap.science.maxValue
        }
    }, 2000)
    //文化
    setInterval(function() {
        if (game.resPool.resourceMap.culture.value < game.resPool.resourceMap.culture.maxValue){
            game.resPool.resourceMap.culture.value = game.resPool.resourceMap.culture.maxValue
        }
    }, 2000)
    //信仰
    setInterval(function() {
        if (game.resPool.resourceMap.faith.value < game.resPool.resourceMap.faith.maxValue){
            game.resPool.resourceMap.faith.value = game.resPool.resourceMap.faith.maxValue
        }
    }, 2000)
    //时间通量
    setInterval(function() {
        if (game.resPool.resourceMap.temporalFlux.value < game.resPool.resourceMap.temporalFlux.maxValue){
            game.resPool.resourceMap.temporalFlux.value = game.resPool.resourceMap.temporalFlux.maxValue
        }
    }, 2000)
    //修复冷冻仓
    setInterval(function() {
        if (game.time.getVSU("usedCryochambers").val > 0){
            game.resPool.resourceMap.temporalFlux.value += 3000
            game.resPool.resourceMap.timeCrystal.value += 100
            game.resPool.resourceMap.void.value += 500
        }
    }, 2000)
    //悲伤
    setInterval(function() {
        if (game.resPool.resourceMap.sorrow.value < 16){
            game.resPool.resourceMap.sorrow.value = 16
        }
    }, 2000)
    //写初值
    setTimeout(function() {
        game.resPool.resourceMap.wood.value = 1e300
        game.resPool.resourceMap.science.value = 1e300
        game.resPool.resourceMap.culture.value = 1e300
        game.resPool.resourceMap.starchart.value = 1e300
        game.resPool.resourceMap.faith.value = 1e300
    }, 10000)
  
})();
