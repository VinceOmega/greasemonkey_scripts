// ==UserScript==
// @name         GameFaqs Upvoting and Tags
// @namespace    http://larrystanfield.com/greasemonkey
// @version      0.1
// @description  Le Reddit? In MY GameFAQS?
// @author       Larry Stanfield - https://www.linkedin.com/in/larrystanfieldwebdev
// @match        http://*.gamefaqs.com/boards/*
// @require      https://cdnjs.cloudflare.com/ajax/libs/mootools/1.6.0/mootools-core.min.js
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    
    var postNumArr     = $$('div.msg_body.newbeta').get('data-msgnum');
    var postIDArr      = $$('div.msg_body.newbeta').get('name');
    var postUserArr    = $$('.post_author b').get('text');
    var alphaNum       = new RegExp(/([A-Za-z0-9\_]+)/i);
    var url            = window.location.pathname;
    var slugs          = url.split('/');
    
    //console.log(postNumArr[0]);
    //console.log(postIDArr[0]);
    //console.log(postUserArr[0]);
    
    console.log('List of Post #s');
    for(var a in postNumArr){
      if(!isNaN(postNumArr[a])){
        console.log(postNumArr[a]);
     }
    }
    
    console.log('List of IDs');
    for(var b in postIDArr){
     if(!isNaN(postIDArr[b])){
       console.log(postIDArr[b]);
     }
    }
    
    console.log('List of Username');
     console.log(alphaNum.test(postUserArr[0]));
     
    
    for(var c in postUserArr){
     if(alphaNum.test(postUserArr[c]) && typeof(postUserArr[c]) !=  'function'){
        console.log(postUserArr[c]);
     }
    }
    
    
    console.log('Url Slugs');
    console.log(slugs[2]);
    console.log(slugs[3]);
    
})();