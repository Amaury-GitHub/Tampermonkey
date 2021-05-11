// ==UserScript==
// @name         kittensgame_set_maxValue 
// @namespace    https://github.com/Amaury-GitHub/kittensgame
// @version      1.1
// @description  所有资源锁定最大值,执行时间为9分钟
// @author       Amaury
// @match        http://kittensgame.com/web/
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

function set_maxValue ()
{
//alicorn
    if (game.resPool.resourceMap.alicorn.maxValue !== 0 && game.resPool.resourceMap.alicorn.unlocked === true) {
       game.resPool.resourceMap.alicorn.value = game.resPool.resourceMap.alicorn.maxValue
    }
//alloy
    if (game.resPool.resourceMap.alloy.maxValue !== 0 && game.resPool.resourceMap.alloy.unlocked === true) {
       game.resPool.resourceMap.alloy.value = game.resPool.resourceMap.alloy.maxValue
    }
//antimatter
    if (game.resPool.resourceMap.antimatter.maxValue !== 0 && game.resPool.resourceMap.antimatter.unlocked === true) {
       game.resPool.resourceMap.antimatter.value = game.resPool.resourceMap.antimatter.maxValue
    }
//beam
    if (game.resPool.resourceMap.beam.maxValue !== 0 && game.resPool.resourceMap.beam.unlocked === true) {
       game.resPool.resourceMap.beam.value = game.resPool.resourceMap.beam.maxValue
    }
//blackcoin
    if (game.resPool.resourceMap.blackcoin.maxValue !== 0 && game.resPool.resourceMap.blackcoin.unlocked === true) {
       game.resPool.resourceMap.blackcoin.value = game.resPool.resourceMap.blackcoin.maxValue
    }
//bloodstone
    if (game.resPool.resourceMap.bloodstone.maxValue !== 0 && game.resPool.resourceMap.bloodstone.unlocked === true) {
       game.resPool.resourceMap.bloodstone.value = game.resPool.resourceMap.bloodstone.maxValue
    }
//blueprint
    if (game.resPool.resourceMap.blueprint.maxValue !== 0 && game.resPool.resourceMap.blueprint.unlocked === true) {
       game.resPool.resourceMap.blueprint.value = game.resPool.resourceMap.blueprint.maxValue
    }
//burnedParagon
    if (game.resPool.resourceMap.burnedParagon.maxValue !== 0 && game.resPool.resourceMap.burnedParagon.unlocked === true) {
       game.resPool.resourceMap.burnedParagon.value = game.resPool.resourceMap.burnedParagon.maxValue
    }
//catnip
    if (game.resPool.resourceMap.catnip.maxValue !== 0 && game.resPool.resourceMap.catnip.unlocked === true) {
       game.resPool.resourceMap.catnip.value = game.resPool.resourceMap.catnip.maxValue
    }
//coal
    if (game.resPool.resourceMap.coal.maxValue !== 0 && game.resPool.resourceMap.coal.unlocked === true) {
       game.resPool.resourceMap.coal.value = game.resPool.resourceMap.coal.maxValue
    }
//compedium
    if (game.resPool.resourceMap.compedium.maxValue !== 0 && game.resPool.resourceMap.compedium.unlocked === true) {
       game.resPool.resourceMap.compedium.value = game.resPool.resourceMap.compedium.maxValue
    }
//concrate
    if (game.resPool.resourceMap.concrate.maxValue !== 0 && game.resPool.resourceMap.concrate.unlocked === true) {
       game.resPool.resourceMap.concrate.value = game.resPool.resourceMap.concrate.maxValue
    }
//culture
    if (game.resPool.resourceMap.culture.maxValue !== 0 && game.resPool.resourceMap.culture.unlocked === true) {
       game.resPool.resourceMap.culture.value = game.resPool.resourceMap.culture.maxValue
    }
//elderBox
    if (game.resPool.resourceMap.elderBox.maxValue !== 0 && game.resPool.resourceMap.elderBox.unlocked === true) {
       game.resPool.resourceMap.elderBox.value = game.resPool.resourceMap.elderBox.maxValue
    }
//eludium
    if (game.resPool.resourceMap.eludium.maxValue !== 0 && game.resPool.resourceMap.eludium.unlocked === true) {
       game.resPool.resourceMap.eludium.value = game.resPool.resourceMap.eludium.maxValue
    }
//faith
    if (game.resPool.resourceMap.faith.maxValue !== 0 && game.resPool.resourceMap.faith.unlocked === true) {
       game.resPool.resourceMap.faith.value = game.resPool.resourceMap.faith.maxValue
    }
//furs
    if (game.resPool.resourceMap.furs.maxValue !== 0 && game.resPool.resourceMap.furs.unlocked === true) {
       game.resPool.resourceMap.furs.value = game.resPool.resourceMap.furs.maxValue
    }
//gear
    if (game.resPool.resourceMap.gear.maxValue !== 0 && game.resPool.resourceMap.gear.unlocked === true) {
       game.resPool.resourceMap.gear.value = game.resPool.resourceMap.gear.maxValue
    }
//gflops
    if (game.resPool.resourceMap.gflops.maxValue !== 0 && game.resPool.resourceMap.gflops.unlocked === true) {
       game.resPool.resourceMap.gflops.value = game.resPool.resourceMap.gflops.maxValue
    }
//gold
    if (game.resPool.resourceMap.gold.maxValue !== 0 && game.resPool.resourceMap.gold.unlocked === true) {
       game.resPool.resourceMap.gold.value = game.resPool.resourceMap.gold.maxValue
    }
//hashrates
    if (game.resPool.resourceMap.hashrates.maxValue !== 0 && game.resPool.resourceMap.hashrates.unlocked === true) {
       game.resPool.resourceMap.hashrates.value = game.resPool.resourceMap.hashrates.maxValue
    }
//iron
    if (game.resPool.resourceMap.iron.maxValue !== 0 && game.resPool.resourceMap.iron.unlocked === true) {
       game.resPool.resourceMap.iron.value = game.resPool.resourceMap.iron.maxValue
    }
//ivory
    if (game.resPool.resourceMap.ivory.maxValue !== 0 && game.resPool.resourceMap.ivory.unlocked === true) {
       game.resPool.resourceMap.ivory.value = game.resPool.resourceMap.ivory.maxValue
    }
//karma
    if (game.resPool.resourceMap.karma.maxValue !== 0 && game.resPool.resourceMap.karma.unlocked === true) {
       game.resPool.resourceMap.karma.value = game.resPool.resourceMap.karma.maxValue
    }
//kerosene
    if (game.resPool.resourceMap.kerosene.maxValue !== 0 && game.resPool.resourceMap.kerosene.unlocked === true) {
       game.resPool.resourceMap.kerosene.value = game.resPool.resourceMap.kerosene.maxValue
    }
//kittens
    if (game.resPool.resourceMap.kittens.maxValue !== 0 && game.resPool.resourceMap.kittens.unlocked === true) {
       game.resPool.resourceMap.kittens.value = game.resPool.resourceMap.kittens.maxValue
    }
//manpower
    if (game.resPool.resourceMap.manpower.maxValue !== 0 && game.resPool.resourceMap.manpower.unlocked === true) {
       game.resPool.resourceMap.manpower.value = game.resPool.resourceMap.manpower.maxValue
    }
//manuscript
    if (game.resPool.resourceMap.manuscript.maxValue !== 0 && game.resPool.resourceMap.manuscript.unlocked === true) {
       game.resPool.resourceMap.manuscript.value = game.resPool.resourceMap.manuscript.maxValue
    }
//megalith
    if (game.resPool.resourceMap.megalith.maxValue !== 0 && game.resPool.resourceMap.megalith.unlocked === true) {
       game.resPool.resourceMap.megalith.value = game.resPool.resourceMap.megalith.maxValue
    }
//minerals
    if (game.resPool.resourceMap.minerals.maxValue !== 0 && game.resPool.resourceMap.minerals.unlocked === true) {
       game.resPool.resourceMap.minerals.value = game.resPool.resourceMap.minerals.maxValue
    }
//necrocorn
    if (game.resPool.resourceMap.necrocorn.maxValue !== 0 && game.resPool.resourceMap.necrocorn.unlocked === true) {
       game.resPool.resourceMap.necrocorn.value = game.resPool.resourceMap.necrocorn.maxValue
    }
//oil
    if (game.resPool.resourceMap.oil.maxValue !== 0 && game.resPool.resourceMap.oil.unlocked === true) {
       game.resPool.resourceMap.oil.value = game.resPool.resourceMap.oil.maxValue
    }
//paragon
    if (game.resPool.resourceMap.paragon.maxValue !== 0 && game.resPool.resourceMap.paragon.unlocked === true) {
       game.resPool.resourceMap.paragon.value = game.resPool.resourceMap.paragon.maxValue
    }
//parchment
    if (game.resPool.resourceMap.parchment.maxValue !== 0 && game.resPool.resourceMap.parchment.unlocked === true) {
       game.resPool.resourceMap.parchment.value = game.resPool.resourceMap.parchment.maxValue
    }
//plate
    if (game.resPool.resourceMap.plate.maxValue !== 0 && game.resPool.resourceMap.plate.unlocked === true) {
       game.resPool.resourceMap.plate.value = game.resPool.resourceMap.plate.maxValue
    }
//relic
    if (game.resPool.resourceMap.relic.maxValue !== 0 && game.resPool.resourceMap.relic.unlocked === true) {
       game.resPool.resourceMap.relic.value = game.resPool.resourceMap.relic.maxValue
    }
//scaffold
    if (game.resPool.resourceMap.scaffold.maxValue !== 0 && game.resPool.resourceMap.scaffold.unlocked === true) {
       game.resPool.resourceMap.scaffold.value = game.resPool.resourceMap.scaffold.maxValue
    }
//science
    if (game.resPool.resourceMap.science.maxValue !== 0 && game.resPool.resourceMap.science.unlocked === true) {
       game.resPool.resourceMap.science.value = game.resPool.resourceMap.science.maxValue
    }
//ship
    if (game.resPool.resourceMap.ship.maxValue !== 0 && game.resPool.resourceMap.ship.unlocked === true) {
       game.resPool.resourceMap.ship.value = game.resPool.resourceMap.ship.maxValue
    }
//slab
    if (game.resPool.resourceMap.slab.maxValue !== 0 && game.resPool.resourceMap.slab.unlocked === true) {
       game.resPool.resourceMap.slab.value = game.resPool.resourceMap.slab.maxValue
    }
//sorrow
    if (game.resPool.resourceMap.sorrow.maxValue !== 0 && game.resPool.resourceMap.sorrow.unlocked === true) {
       game.resPool.resourceMap.sorrow.value = game.resPool.resourceMap.sorrow.maxValue
    }
//spice
    if (game.resPool.resourceMap.spice.maxValue !== 0 && game.resPool.resourceMap.spice.unlocked === true) {
       game.resPool.resourceMap.spice.value = game.resPool.resourceMap.spice.maxValue
    }
//starchart
    if (game.resPool.resourceMap.starchart.maxValue !== 0 && game.resPool.resourceMap.starchart.unlocked === true) {
       game.resPool.resourceMap.starchart.value = game.resPool.resourceMap.starchart.maxValue
    }
//steel
    if (game.resPool.resourceMap.steel.maxValue !== 0 && game.resPool.resourceMap.steel.unlocked === true) {
       game.resPool.resourceMap.steel.value = game.resPool.resourceMap.steel.maxValue
    }
//tanker
    if (game.resPool.resourceMap.tanker.maxValue !== 0 && game.resPool.resourceMap.tanker.unlocked === true) {
       game.resPool.resourceMap.tanker.value = game.resPool.resourceMap.tanker.maxValue
    }
//tears
    if (game.resPool.resourceMap.tears.maxValue !== 0 && game.resPool.resourceMap.tears.unlocked === true) {
       game.resPool.resourceMap.tears.value = game.resPool.resourceMap.tears.maxValue
    }
//temporalFlux
    if (game.resPool.resourceMap.temporalFlux.maxValue !== 0 && game.resPool.resourceMap.temporalFlux.unlocked === true) {
       game.resPool.resourceMap.temporalFlux.value = game.resPool.resourceMap.temporalFlux.maxValue
    }
//thorium
    if (game.resPool.resourceMap.thorium.maxValue !== 0 && game.resPool.resourceMap.thorium.unlocked === true) {
       game.resPool.resourceMap.thorium.value = game.resPool.resourceMap.thorium.maxValue
    }
//timeCrystal
    if (game.resPool.resourceMap.timeCrystal.maxValue !== 0 && game.resPool.resourceMap.timeCrystal.unlocked === true) {
       game.resPool.resourceMap.timeCrystal.value = game.resPool.resourceMap.timeCrystal.maxValue
    }
//titanium
    if (game.resPool.resourceMap.titanium.maxValue !== 0 && game.resPool.resourceMap.titanium.unlocked === true) {
       game.resPool.resourceMap.titanium.value = game.resPool.resourceMap.titanium.maxValue
    }
//unicorns
    if (game.resPool.resourceMap.unicorns.maxValue !== 0 && game.resPool.resourceMap.unicorns.unlocked === true) {
       game.resPool.resourceMap.unicorns.value = game.resPool.resourceMap.unicorns.maxValue
    }
//unobtainium
    if (game.resPool.resourceMap.unobtainium.maxValue !== 0 && game.resPool.resourceMap.unobtainium.unlocked === true) {
       game.resPool.resourceMap.unobtainium.value = game.resPool.resourceMap.unobtainium.maxValue
    }
//uranium
    if (game.resPool.resourceMap.uranium.maxValue !== 0 && game.resPool.resourceMap.uranium.unlocked === true) {
       game.resPool.resourceMap.uranium.value = game.resPool.resourceMap.uranium.maxValue
    }
//void
    if (game.resPool.resourceMap.void.maxValue !== 0 && game.resPool.resourceMap.void.unlocked === true) {
       game.resPool.resourceMap.void.value = game.resPool.resourceMap.void.maxValue
    }
//wood
    if (game.resPool.resourceMap.wood.maxValue !== 0 && game.resPool.resourceMap.wood.unlocked === true) {
       game.resPool.resourceMap.wood.value = game.resPool.resourceMap.wood.maxValue
    }
//wrappingPaper
    if (game.resPool.resourceMap.wrappingPaper.maxValue !== 0 && game.resPool.resourceMap.wrappingPaper.unlocked === true) {
       game.resPool.resourceMap.wrappingPaper.value = game.resPool.resourceMap.wrappingPaper.maxValue
    }
//zebras
    if (game.resPool.resourceMap.zebras.maxValue !== 0 && game.resPool.resourceMap.zebras.unlocked === true) {
       game.resPool.resourceMap.zebras.value = game.resPool.resourceMap.zebras.maxValue
    }
//END
}

setInterval(set_maxValue,540000);

})()
