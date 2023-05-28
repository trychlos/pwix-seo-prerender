/*
 * pwix:ssr/src/server/js/server.js
 */

SSR._server = {
    // called from webapp middleware
    beforeRender( req, done ){
        if( SSR._server.isBot ){
            SSR._collections.Statistics.add( ORIGID_BOT, req );
        }
        //if( SSR._server.isPrerender ){
        //    SSR._collections.Statistics.add( ORIGID_PRERENDER, req );
        //}
        done();
    },

    // called from webapp middleware
    setBot( bool ){
        SSR._server.isBot = bool;
        SSR._collections.Running.set( ORIGID_BOT, bool );
    },

    // called from webapp middleware
    setPrerender( bool ){
        SSR._server.isPrerender = bool;
        SSR._collections.Running.set( ORIGID_PRERENDER, bool );
    }
};
