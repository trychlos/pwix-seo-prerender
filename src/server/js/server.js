/*
 * pwix:ssr/src/server/js/server.js
 */

SSR._server = {
    setBot( bool ){
        SSR._collections.Status.set( ORIGID_BOT, bool );
    },
    setPrerender( bool ){
        SSR._collections.Status.set( ORIGID_PRERENDER, bool );
    }
};
