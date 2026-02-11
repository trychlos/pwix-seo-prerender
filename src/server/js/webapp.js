/*
 * pwix:seo-prerender/src/server/js/webapp.js
 *
 * The only valuable component of this package: it only calls prerender which takes care of all the work.
 */

import prerender from 'prerender-node';

import { WebApp } from 'meteor/webapp';

// we rely on PRERENDER_SERVICE_URL environment variable, required by prerender-node package
if( process.env.PRERENDER_SERVICE_URL ){
    console.log( 'pwix:seo-prerender found PRERENDER_SERVICE_URL=\''+process.env.PRERENDER_SERVICE_URL+'\'' );
    WebApp.connectHandlers.use(( req, res, next ) => {
        return prerender( req, res, next );
    });
} else {
    console.log( 'pwix:seo-prerender PRERENDER_SERVICE_URL variable is not set, ignoring' );
}
