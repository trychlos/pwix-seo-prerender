/*
 * pwix:ssr/src/collections/status/server/publish.js
 */

// returns all known status
Meteor.publish( 'ssr.all', function(){
    return SSR._collections.Status.server.find();
});

// returns the named status
Meteor.publish( 'ssr.one', function( name ){
    return SSR._collections.Status.server.find({ name: name });
});
