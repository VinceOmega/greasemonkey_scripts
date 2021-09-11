// ==UserScript==
// @name         Change yt logo color.
// @namespace    http://larrystanfield.com
// @version      1.1
// @description  Change youtube icon color
// @author       Larry Stanfield
// @match        https://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?domain=youtube.com
// @grant        unsafeWindow
// @run-at       document-end
// ==/UserScript==


/* This is an edited script, the original author is unknown*/
/* Source : https://www.reddit.com/r/GreaseMonkey/comments/pl7dv3/black_theme_youtube_logo/ */
/*Edited by request of u/Charkel_ of le reddit*/

function changeLogoColor(toColor) {
    addStyle(`:root { --yt-spec-brand-icon-active: ${toColor} !important; }`); // Add global style to override SVG-styles
    const els = document.getElementsByClassName('style-scope yt-icon'); // Get SVG-tags under yt-icon.
    for (let el of els) {
        if
            (el.getAttribute('fill') && el.getAttribute('fill').toUpperCase() === '#FF0000') { // Change color if attribute is present and equal "#FF0000"
            el.setAttribute('fill', toColor);
        }
    }
}


function changePlayButtonInLogoColor(toColor) {
    addStyle(`:root { --yt-spec-brand-icon-active: ${toColor} !important; }`); // Add global style to override SVG-styles
    const els = document.getElementsByClassName('style-scope yt-icon'); // Get SVG-tags under yt-icon.
    for (let el of els) {
        if
            (el.getAttribute('fill') && el.getAttribute('fill').toUpperCase() === 'WHITE') { // Change color if attribute is present and equal "#FF0000"
            el.setAttribute('fill', toColor);
        }
    }
}


function addStyle(css) {
    const head = document.getElementsByTagName('head')[0];
    const style = document.createElement('style');
    style.innerHTML = css;
    head.appendChild(style);
}
document.addEventListener('yt-rendererstamper-finished', function () {
    //change color here
    let colorBox = '#7c7c7c';
    let colorPlayButton = 'red';

    changeLogoColor(colorBox);
    changePlayButtonInLogoColor(colorPlayButton);
});
