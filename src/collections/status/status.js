/*
 * pwix:ssr/src/collections/status/status.js
 *
 * See server/sofns.js for server-only functions.
 * See server/methods.js for server functions remotely callable from the client
 *  (aka Meteor RPC).
 * 
 * The collection contains a single status document whose id is a predefined constant.
 * It is needed so that the client can subscribe to the publication, and so be reactive.
 */

import { check } from 'meteor/check';
import SimpleSchema from 'simpl-schema';

SSR._collections.Status = {

    // name radical
    name: 'status',

    // collection schema
    schema: new SimpleSchema({
        // either STATUS_BOT|STATUS_PRERENDER - no default
        name: {
            type: String
        },
        // whether current rendering is asked by the prerender service
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
            SSR._collections.Status.server.deny({
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
        if( Meteor.isServer && SSR._collections.Status.server ){
            check( name, String );
            const o = {
                name: name,
                value: ( value ? true : false ),
                updatedAt: new Date()
            };
            const fn = Meteor.bindEnvironment( function( o ){
                SSR._collections.Status.server.upsert({ name: name }, { $set: o }, ( err, res ) => {
                    if( err ){
                        console.error( err );
                    } else {
                        if( SSR._conf.verbosity & SSR_VERBOSE_COLLECTIONS ){
                            console.debug( 'pwix:ssr status.set() returns with', res );
                        }
                    }
                });
            });
            fn( o );
        }
    },

    // client and server below will host the respective Mongo collections
    client: null,
    server: null
};
