/*
 * pwix:ssr/src/client/js/startup.js
 */

Meteor.startup( function(){
    // define the cient-side collections
    if( SSR._conf.verbosity & SSR.C.Verbose.COLLECTIONS ){
        console.log( 'pwix:ssr defining collections...' );
    }
    //console.debug( SSR._conf );
    Object.keys( SSR._collections ).every(( c ) => {
        const name = SSR._conf.collectionsPrefix + SSR._collections[c].name;
        if( SSR._conf.verbosity & SSR.C.Verbose.COLLECTIONS ){
            console.log( '   '+c+' -> '+name );
        }
        SSR._collections[c].client = new Mongo.Collection( name );
        SSR._collections[c].client.attachSchema( SSR._collections[c].schema );
        return true;
    });
    // advertise the collections are ready
    SSR._client.collectionsReady.set( true );
});