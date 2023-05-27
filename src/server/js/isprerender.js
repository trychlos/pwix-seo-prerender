/*
 * pwix:ssr/src/server/js/isprerender.js
 *
 * SSR.isPrerender() is a reactive datasource which evaluates to true when we are handling a request from a bot crawler.
 * As a getter, it is available both on the client and on the server.
 * The setter is only available on the server.
 */

import { Tracker } from 'meteor/tracker';

SSR._server.isPrerender = {
    value: null,
    dep: new Tracker.Dependency()
};

SSR.isPrerender = function( bool ){
    if( arguments.length ){
        if(( bool === true || bool === false ) && bool !== SSR._server.isPrerender.value ){
            console.debug( '(server) setting isPrerender to', bool );
            SSR._server.isPrerender.value = bool;
            SSR._server.isPrerender.dep.changed();
        }
    } else {
        console.debug( '(server) returning isPrerender', SSR._server.isPrerender.value );
        SSR._server.isPrerender.dep.depend();
        return SSR._server.isPrerender.value;
    }
}

SSR.isPrerender( false );
