// ==UserScript==
// @name         Reader Custom
// @namespace    https://github.com/Amaury-GitHub/Tampermonkey
// @version      0.1
// @description  屏蔽左右键，自动重设尺寸
// @author       Amaury
// @match        https://nas.amaury.eu.org:3333/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var initialWidth = 600;
    var initialHeight = 800;

    document.onselectstart = function () { return false; }
    document.oncontextmenu = function () { return false; }
    window.resizeTo(initialWidth, initialHeight);
    window.addEventListener('resize', function(event) {
        window.resizeTo(initialWidth, initialHeight);
    });

})();
