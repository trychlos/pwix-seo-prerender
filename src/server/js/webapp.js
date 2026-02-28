/*
 * pwix:seo-prerender/src/server/js/webapp.js
 *
 * The only valuable component of this package: it only calls prerender which takes care of all the work.
 */

import prerender from 'prerender-node';

import { Logger } from 'meteor/pwix:logger';
import { WebApp } from 'meteor/webapp';

const logger = Logger.get();

// we rely on PRERENDER_SERVICE_URL environment variable, required by prerender-node package
if( process.env.PRERENDER_SERVICE_URL ){
    logger.debug( 'found PRERENDER_SERVICE_URL=\''+process.env.PRERENDER_SERVICE_URL+'\'' );
    const adds = [
        'OpenGraphXYZBot'
    ];
    logger.debug( 'adding crawlers', adds );
    prerender.crawlerUserAgents = prerender.crawlerUserAgents.concat( adds );
    //console.debug( 'prerender.crawlerUserAgents', prerender.crawlerUserAgents );
    WebApp.connectHandlers.use(( req, res, next ) => {
        if( process.env.PWIX_SEO_PRERENDER_LOG ){
            logger.debug( 'requesting \''+req.url+'\' by user-agent \''+req.headers['user-agent']+'\'' );
        }
        prerender( req, res, next );
    });
} else {
    logger.log( 'pwix:seo-prerender PRERENDER_SERVICE_URL variable is not set, ignoring' );
}
