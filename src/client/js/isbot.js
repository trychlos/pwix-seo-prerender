/*
 * pwix:ssr/src/client/js/isbot.js
 *
 * SSR.isBot() is a reactive datasource which evaluates to true when we are handling a request from a bot crawler.
 */

import { Tracker } from 'meteor/tracker';

SSR._client.isBot = {
    value: null,
    dep: new Tracker.Dependency()
};

Tracker.autorun(() => {
    Meteor.call( 'ssr.isBot', ( err, res ) => {
        if( err ){
            console.error( err );
        } else {
            if(( res === true || res === false ) && res !== SSR._client.isBot.value ){
                SSR._client.isBot.value = res;
                SSR._client.isBot.dep.changed();
            }
        }
    });
});

SSR.isBot = function(){
    SSR._client.isBot.dep.depend();
    return SSR._client.isBot.value;
}
