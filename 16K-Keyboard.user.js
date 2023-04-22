// ==UserScript==
// @name         16K Keyboard
// @namespace    https://github.com/Amaury-GitHub/Tampermonkey
// @version      0.1
// @description  使用键盘快捷键浏览
// @author       Amaury
// @match        *://16k.club/*
// @grant        none
// ==/UserScript==

(function() {
	document.onkeydown = function(event) {
		if (event.keyCode == 37) {
			// ←
			document.getElementsByClassName('btn btn-outline-secondary')[0].click()
		}
		if (event.keyCode == 70) {
			// F
			document.getElementsByClassName('btn btn-outline-secondary')[1].click()
		}
		if (event.keyCode == 39) {
			// →
			document.getElementsByClassName('btn btn-outline-secondary')[2].click()
		}
	}
    document.addEventListener('mousedown', function(event) {
        if (event.button === 0) {
            // 鼠标左键
            document.getElementsByClassName('btn btn-outline-secondary')[2].click()
        }
    });
})();
