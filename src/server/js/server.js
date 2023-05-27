/*
 * pwix:ssr/src/server/js/server.js
 */

SSR._server = {
    setBot( bool ){
        SSR._collections.Status.set( STATUS_BOT, bool );
    },
    setPrerender( bool ){
        SSR._collections.Status.set( STATUS_PRERENDER, bool );
    }
};
