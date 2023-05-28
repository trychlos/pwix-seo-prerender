/*
 * pwix:ssr/src/server/js/server.js
 */

SSR._server = {
    // called from webapp middleware
    afterRender( err, req, res ){
        // bot after render: nothing at the moment
        if( SSR._server.isBot ){
            console.debug( 'afterRender isBot' );
        }
        // prerender ater render: cache the result
        if( SSR._server.isPrerender ){
            //console.debug( req._canonicalUrl, 'caching' );
            //SSR._redis.set( req.headers.referer, JSON.stringify( res ));
            SSR._redis.set( req._canonicalUrl, res.body );
        }
    },

    // called from webapp middleware
    beforeRender( req, done ){
        if( SSR._server.isBot ){
            req._canonicalUrl = SSR._server.canonUrl( req );
            // new statistic record si written after having got the result of the cache research
            // search for a previously cached document
            req._hasPrerendered = false;
            //SSR._redis.del( req.headers.referer );
            SSR._redis.get( req._canonicalUrl )
                .then(( doc ) => {
                    //console.debug( 'doc', doc );
                    SSR._collections.Statistics.add( ORIGID_BOT, req, doc );
                    if( doc ){
                        //console.debug( req._canonicalUrl, 'found a cached document' );
                        req._hasPrerendered = true;
                        return done( null, doc );
                    } else {
                        //console.debug( req._canonicalUrl, 'no previous cache' );
                        done();
                    }
                });
        }
        if( SSR._server.isPrerender ){
            console.debug( 'beforeRender isPrerender' );
        }
    },

    // build a full canonical url as 'http://xps13.trychlos.lan:3000/'
    canonUrl( req ){
        return req.headers['x-forwarded-proto']+'://'+req.headers.host+req.url;
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
