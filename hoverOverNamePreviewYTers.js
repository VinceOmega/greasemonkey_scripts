// ==UserScript==
// @name         Hover over name preview for youtubers
// @namespace    projects.larrystanfield.com
// @version      1.0
// @description  Trying to emulate an old feature on youtube
// @author       Larry Stanfield
// @match        *.youtube.com/watch?v=*
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/he/1.2.0/he.min.js
// @run-at       document-end
// @grant        unsafeWindow
// ==/UserScript==
try{

    function decodeEntities(encodedString) {
        var textArea = document.createElement('textarea');
        textArea.innerHTML = encodedString;
        return textArea.value;
    }

    ( function(){
        //'use strict';

        $( window ).ready( function(){
            console.log( 'domready' );
            window.setInterval( function(){

                console.log( 'fired' );
                $( '.ytd-comment-renderer' ).each( function( el ){
                    if( $( this ).prop( 'id' ) === 'author-text' ){
                        //console.log( $( this ).prop( 'href' ) );
                        if( !$( this ).parent().find( '#preview-box' ).length ){
                            $( this ).parent().append( '<div id="preview-box" class="ytr-preview-box" style="position: relative;left: 10%; background: black; width: 50%; height: 60px; display: none; color: white; font-size: 14px; font-weight: 700; float: right; margin-top: -160px; top: 100px; opacity: .7;"></div>' );
                            console.log( $( this ).parent().find( '#preview-box' ).length );
                            var self = $( this );
                            console.log( self.prop( 'href' ) );
                            $.get( self.prop( 'href' ), function( data ){
                                //console.log( $( he.decode( data ) )  );
                                var body = '<div id="body-mock">' + data.replace(/^[\s\S]*<body.*?>|<\/body>[\s\S]*$/ig, '') + '</div>';
                                //console.log( $( he.decode( body ) ).find( 'script' ) );
                                //console.log(  $( he.decode( data ) ).children( '#channel-header' ) );
                                var scriptArray = $( body ).find( 'script' ).toArray();
                                //console.log( scriptArray );
                                for(var idx in scriptArray ){
                                    //console.log( scriptArray[ idx ] );
                                    if( $( scriptArray[ idx ] ).text().includes( 'avatar' ) ){

                                        eval( $( scriptArray[ idx ] ).text() );
                                        console.log( window.ytInitialData );
                                        //console.log( window.ytInitialData.microformat );
                                        var json = window.ytInitialData.microformat.microformatDataRenderer;
                                        var thumbnails = json.thumbnail.thumbnails;
                                        var subInfo = window.ytInitialData.header.c4TabbedHeaderRenderer.subscribeButton.subscribeButtonRenderer.shortSubscriberCountText;
                                        var banner = ( window.ytInitialData.header.c4TabbedHeaderRenderer.hasOwnProperty( 'banner' ) ) ? window.ytInitialData.header.c4TabbedHeaderRenderer.banner.thumbnails : [ { url: '' } ] ;
                                        var html = `
                                            <div style="display: block; background-image: url( ${ banner[ 0 ].url } ); width: 100%; object-fit: contain; height: 100%; background-size: cover; background-repeat: no-repeat;" ></div>
                                            <div style="dipslay: block; background: black; width: 100%; height: 100%;" >
                                            <span style="display: inline-block; width: 30%; height: 100%; position: relative;"><a href='${ json[ 'urlCanonical' ] }' style="background-image: url( ${ thumbnails[ 0 ].url } ); width: 100%; height: inherit; display: inline-block; position: relative; object-fit: contain; background-size: contain; background-repeat: no-repeat;"></a></span>
                                            <span style="display: inline-block; width: 30%; height: 100%; position: relative;">${ json[ 'title' ] }</span>
                                            <span style="display: inline-block; width: 30%; height: 100%; position: relative;"> Subscribers: ${ subInfo[ 'simpleText' ] }</span>
                                            </div>
`;
                                        self.parent().children( '#preview-box' ).append( html );
                                    }
                                }

                                // $( self ).parent().find( '#preview-box' )[ 0 ].append( data );
                                //console.log( $( document ).html( data ).get( '#channel-header' ) );

                            });

                            $( this ).hover(
                                function(){
                                    console.log( 'hover over' );
                                    if( $( this ).parent().find( '#preview-box' ).length ){
                                        $( this ).parent().children( '#preview-box' ).css( 'display', 'inline' );
                                    }
                                },
                                function(){
                                    console.log( 'hover under' );
                                    if( $( this ).parent().find( '#preview-box' ).length ){
                                        $( this ).parent().children( '#preview-box' ).css( 'display', 'none' );
                                    }
                                });

                        }

                    }


                });

            },5000);
        });

    })();
} catch( e ){
    console.log( e );
}