// ==UserScript==
// @name         Audible - Remove the scrollbar from cloud reader
// @namespace    http://larrystanfield.com/projects/greasemonkey
// @version      1.0
// @description  Removes the scrollbar that shows up on the
// @author       Larry Stanfield
// @match        www.audible.com/cloud-player?ref_=*
// @grant        unsafeWindow
// ==/UserScript==

(function() {
    'use strict';
    document.body.style.overflow = 'hidden';
})();