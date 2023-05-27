/*
 * pwix:ssr/src/server/js/webapp.js
 */

import { WebApp } from 'meteor/webapp';

const prerender = require( '../lib' );

WebApp.connectHandlers.use(( req, res, next ) => {

    // test if we are prerendering...
    SSR._server.setPrerender( req.headers && req.headers['x-prerender'] );

    // we rely on PRERENDER_SERVICE_URL environment variable, required by prerender-node package
    if( process.env.PRERENDER_SERVICE_URL ){
        prerender( req, res, next );
    } else {
        console.error( '"PRERENDER_SERVICE_URL" environment variable is not set, but should. Aborting.' )
        next();
    }
});
