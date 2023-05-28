/*
 * pwix:ssr/src/client/js/isprerender.js
 *
 * SSR.isPrerendering() is a reactive datasource which evaluates to true when current rendering is asked by the prerender service.
 */

import { Tracker } from 'meteor/tracker';

SSR._client.isPrerender = {
    handle: Meteor.subscribe( 'ssr.one', ORIGID_PRERENDER ),
    value: false,
    dep: new Tracker.Dependency()
};

Tracker.autorun(() => {
    if( SSR._collections.Running.client ){
        SSR._client.isPrerender.client.set( true );
    }
});

Tracker.autorun(() => {
    if( SSR._client.isPrerender.handle.ready() && SSR._client.collectionsReady.get()){
        const res = SSR._collections.Running.client.find({ name: ORIGID_PRERENDER }).fetch()[0];
            //console.debug( '(client) getting prerender res', JSON.stringify( res ));
            if(( res.value === true || res.value === false ) && res.value !== SSR._client.isPrerender.value ){
            SSR._client.isPrerender.value = res.value;
            SSR._client.isPrerender.dep.changed();
        }
    }
});

SSR.isPrerender = function(){
    SSR._client.isPrerender.dep.depend();
    //console.debug( '(client) returning isPrerender', SSR._client.isPrerender.value );
    return SSR._client.isPrerender.value;
}
