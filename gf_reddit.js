// ==UserScript==
// @name         GameFaqs Upvoting and Tags
// @namespace    http://larrystanfield.com/greasemonkey
// @version      0.1
// @description  Le Reddit? In MY GameFAQS?
// @author       Larry Stanfield - https://www.linkedin.com/in/larrystanfieldwebdev
// @match        http://*.gamefaqs.com/boards/*
// @require      https://cdnjs.cloudflare.com/ajax/libs/mootools/1.6.0/mootools-core.min.js
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    
    var postNumArr = $$('div.msg_body.newbeta').get('data-msgnum');
    var url = window.location;
    console.log(postNumArr[1]);
})();