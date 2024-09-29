// ==UserScript==
// @name         Kittens Game maxValue
// @namespace    https://github.com/Amaury-GitHub/Tampermonkey
// @version      1.0
// @description  猫国建设者无限资源
// @author       Amaury
// @match        https://kittensgame.com/web/
// @match        https://kittensgame.com/beta/
// @match        https://kittensgame.com/alpha/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    //木材
    setInterval(function() {
        if (game.resPool.resourceMap.wood.value < game.resPool.resourceMap.wood.maxValue){
            game.resPool.resourceMap.wood.value = game.resPool.resourceMap.wood.maxValue
        }
    }, 2000)
    //猫薄荷
    setInterval(function() {
        if (game.resPool.resourceMap.catnip.value < game.resPool.resourceMap.catnip.maxValue){
            game.resPool.resourceMap.catnip.value = game.resPool.resourceMap.catnip.maxValue
        }
    }, 2000)
    //科学
    setInterval(function() {
        if (game.resPool.resourceMap.science.value < game.resPool.resourceMap.science.maxValue){
            game.resPool.resourceMap.science.value = game.resPool.resourceMap.science.maxValue
        }
    }, 2000)
    //喵力
    setInterval(function() {
        if (game.resPool.resourceMap.manpower.value < game.resPool.resourceMap.manpower.maxValue){
            game.resPool.resourceMap.manpower.value = game.resPool.resourceMap.manpower.maxValue
        }
    }, 2000)
    //矿物
    setInterval(function() {
        if (game.resPool.resourceMap.minerals.value < game.resPool.resourceMap.minerals.maxValue){
            game.resPool.resourceMap.minerals.value = game.resPool.resourceMap.minerals.maxValue
        }
    }, 2000)
    //信仰
    setInterval(function() {
        if (game.resPool.resourceMap.faith.value < game.resPool.resourceMap.faith.maxValue){
            game.resPool.resourceMap.faith.value = game.resPool.resourceMap.faith.maxValue
        }
    }, 2000)
    //煤
    setInterval(function() {
        if (game.resPool.resourceMap.coal.value < game.resPool.resourceMap.coal.maxValue){
            game.resPool.resourceMap.coal.value = game.resPool.resourceMap.coal.maxValue
        }
    }, 2000)

})();
