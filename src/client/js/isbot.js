/*
 * pwix:ssr/src/client/js/isbot.js
 *
 * SSR.isBot() is a reactive datasource which evaluates to true when we are handling a request from a bot crawler.
 */

import { Tracker } from 'meteor/tracker';

SSR._client.isBot = {
    handle: Meteor.subscribe( 'ssr.one', ORIGID_BOT ),
    value: false,
    dep: new Tracker.Dependency()
};

Tracker.autorun(() => {
    if( SSR._client.isBot.handle.ready() && SSR._client.collectionsReady.get()){
        const res = SSR._collections.Running.client.find({ name: ORIGID_BOT }).fetch()[0];
        //console.debug( '(client) getting bot res', JSON.stringify( res ));
        if(( res.value === true || res.value === false ) && res.value !== SSR._client.isBot.value ){
            SSR._client.isBot.value = res.value;
            SSR._client.isBot.dep.changed();
        }
    }
});

SSR.isBot = function(){
    SSR._client.isBot.dep.depend();
    return SSR._client.isBot.value;
}
