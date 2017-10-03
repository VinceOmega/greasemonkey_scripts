// ==UserScript==
// @name         GameFaqs Upvoting and Tags
// @namespace    http://larrystanfield.com/greasemonkey
// @version      0.1
// @description  Le Reddit? In MY GameFAQS?
// @author       Larry Stanfield - https://www.linkedin.com/in/larrystanfieldwebdev
// @match        https://*.gamefaqs.com/boards/*
// @require      https://cdnjs.cloudflare.com/ajax/libs/mootools/1.6.0/mootools-core.min.js
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    
    var postNumArr     = $$('div.msg_body.newbeta').get('data-msgnum');
    var postIDArr      = $$('div.msg_body.newbeta').get('name');
    var postUserArr    = $$('.user_submenu').get('data-username');
    var url            = window.location.pathname;
    var slugs          = url.split('/');
    
    console.log(postNumArr[0]);
    console.log(postIDArr[0]);
    console.log(postUserArr[0]);
    console.log(slugs[2]);
    console.log(slugs[3]);

    var server = new Request({
       url: 'https://gamefaqspostrankings.larrystanfield.com',
       method: 'get',
       headers: {'Access-Control-Allow-Origin': '*'},
       onSuccess: function(event, xhr){
        console.log(xhr);
        console.log(event);
       }
    });
    server.send();
    
})();