/*
 * pwix:ssr/src/server/js/isbot.js
 *
 * SSR.isBot() is a reactive datasource which evaluates to true when we are handling a request from a bot crawler.
 * As a getter, it is available both on the client and on the server.
 * The setter is only available on the server.
 */

import { Tracker } from 'meteor/tracker';

SSR._server.isBot = {
    value: null,
    dep: new Tracker.Dependency()
};

SSR.isBot = function( bool ){
    if( arguments.length ){
        if(( bool === true || bool === false ) && bool !== SSR._server.isBot.value ){
            console.debug( 'setting isBot to', bool );
            SSR._server.isBot.value = bool;
            SSR._server.isBot.dep.changed();
        }
    } else {
        SSR._server.isBot.dep.depend();
        return SSR._server.isBot.value;
    }
}

SSR.isBot( false );
