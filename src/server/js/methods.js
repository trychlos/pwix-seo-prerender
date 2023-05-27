/*
 * pwix:ssr/src/server/js/method.js
 */

Meteor.methods({
    'ssr.isBot'(){
        return SSR.isBot();
    }
});
