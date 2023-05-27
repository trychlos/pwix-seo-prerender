/*
 * pwix:ssr/src/client/js/isprerendering.js
 *
 * SSR.isPrerendering() is a reactive datasource which evaluates to true when current rendering is asked by the prerender service.
 */

import { Tracker } from 'meteor/tracker';

SSR._client.isPrerender = {
    value: null,
    dep: new Tracker.Dependency()
};

Tracker.autorun(() => {
    Meteor.call( 'ssr.isPrerender', ( err, res ) => {
        if( err ){
            console.error( err );
        } else {
            if(( res === true || res === false ) && res !== SSR._client.isPrerender.value ){
                console.debug( '(client) setting isPrerender to', res );
                SSR._client.isPrerender.value = res;
                SSR._client.isPrerender.dep.changed();
            }
        }
    });
});

SSR.isPrerender = function(){
    SSR._client.isPrerender.dep.depend();
    console.debug( '(client) returning isPrerender', SSR._client.isPrerender.value );
    return SSR._client.isPrerender.value;
}
