/*
 * pwix:ssr/src/server/js/startup.js
 */

import { Mongo } from 'meteor/mongo';

Meteor.startup( function(){
    // define the collections
    if( SSR._conf.verbosity & SSR_VERBOSE_COLLECTIONS ){
        console.log( 'pwix:ssr defining collection...' );
    }
    //console.debug( SSR._conf );
    Object.keys( SSR._collections ).every(( c ) => {
        const name = SSR._conf.collectionsPrefix + SSR._collections[c].name;
        if( SSR._conf.verbosity & SSR_VERBOSE_COLLECTIONS ){
            console.log( '   '+c+' -> '+name );
        }
        SSR._collections[c].server = new Mongo.Collection( name );
        SSR._collections[c].server.attachSchema( SSR._collections[c].schema );
        SSR._collections[c].deny();
        return true;
    });
});
