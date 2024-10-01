/*
 * pwix:ssr/src/collections/running/server/publish.js
 */

// returns all known running status
Meteor.publish( 'ssr.all', function(){
    return SSR._collections.Running.s.find();
});

// returns the named running status
Meteor.publish( 'ssr.one', function( name ){
    return SSR._collections.Running.s.find({ name: name });
});
