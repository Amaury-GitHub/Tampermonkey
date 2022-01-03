// ==UserScript==
// @name         Kittens Game Catnip maxValue
// @namespace    https://github.com/Amaury-GitHub/kittensgame
// @version      1.0
// @description  猫国建设者,每秒自动锁定猫薄荷最大值
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
    game.resPool.resourceMap.catnip.value = game.resPool.resourceMap.catnip.maxValue
}

setInterval(maxValue,1000);

})()
