/*
 * pwix:ssr/src/collections/running/running.js
 *
 * See server/sofns.js for server-only functions.
 * See server/methods.js for server functions remotely callable from the client
 *  (aka Meteor RPC).
 * 
 * The collection contains documents which provide a status regarding the currently running request.
 * It is needed so that the client can subscribe to the publication, and so be reactive.
 */

import { check } from 'meteor/check';
import SimpleSchema from 'simpl-schema';

SSR._collections.Running = {

    // name radical
    name: 'running',

    // collection schema
    schema: new SimpleSchema({
        // either ORIGID_BOT|ORIGID_PRERENDER - no default
        name: {
            type: String
        },
        // whether current rendering is asked by the named service
        value: {
            type: Boolean,
            defaultValue: false
        },
        // last update timestamp
        updatedAt: {
            type: String,
            optional: true
        },
        // Mongo identifier
        // mandatory (auto by Meteor+Mongo)
        _id: {
            type: String,
            optional: true
        },
        xxxxxx: {   // unused key to be sure we always have something to unset
            type: String,
            optional: true
        }
    }),

    // @locus Server
    // Deny all client-side updates
    // cf. https://guide.meteor.com/security.html#allow-deny
    deny(){
        if( Meteor.isServer ){
            SSR._collections.Running.server.deny({
                insert(){ return true; },
                update(){ return true; },
                remove(){ return true; },
            });
        }
    },

    // @locus Server
    // Set bot/prerender detection
    // Need to bindEnvironment() because ultimately run from webapp inside of a HTTP middleware
    set( name, value ){
        if( Meteor.isServer && SSR._collections.Running.server ){
            check( name, String );
            const bool = ( value ? true : false );
            const o = {
                name: name,
                value: bool,
                updatedAt: new Date()
            };
            //console.debug( 'running.set', o );
            const fn = Meteor.bindEnvironment( function(){
                const res = SSR._collections.Running.server.upsert({ name: name }, { $set: o });
                //console.debug( res );
                return res;
            });
            fn();
        }
    },

    // client and server below will host the respective Mongo collections
    client: null,
    server: null
};
