/*
 * pwix:ssr/src/server/js/webapp.js
 */

import { WebApp } from 'meteor/webapp';

const prerender = require( '../lib' );

prerender.set( 'beforeRender', SSR._server.beforeRender );
prerender.set( 'afterRender', SSR._server.afterRender );
let warned = false;

Meteor.startup(() => {
    console.debug( 'SSR._conf.enabled', SSR._conf.enabled );
    if( SSR._conf.enabled ){
        WebApp.connectHandlers.use(( req, res, next ) => {
    
            // test if we are prerendering...
            SSR._server.setPrerender( req.headers && req.headers['x-prerender'] );
        
            // we rely on PRERENDER_SERVICE_URL environment variable, required by prerender-node package
            if( process.env.PRERENDER_SERVICE_URL ){
                prerender( req, res, next );
            } else {
                if( !warned ){
                    console.warn( '"PRERENDER_SERVICE_URL" environment variable is not set, but should. Ignoring.' )
                    warned = true;
                }
                next();
            }
        });
    }
});
