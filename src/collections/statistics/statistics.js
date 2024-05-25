/*
 * pwix:ssr/src/collections/statistics/statistics.js
 *
 * See server/sofns.js for server-only functions.
 * See server/methods.js for server functions remotely callable from the client
 *  (aka Meteor RPC).
 * 
 * This collection aims to build statistics about bot crawlers usage.
 */

import { check } from 'meteor/check';
import SimpleSchema from 'meteor/aldeed:simple-schema';

import 'meteor/aldeed:collection2/dynamic';

Collection2.load();

SSR._collections.Statistics = {

    // name radical
    name: 'statistics',

    // collection schema
    schema: new SimpleSchema({
        // the userAgent of the bot
        userAgent: {
            type: String
        },
        // normally ORIGID_BOT
        origId: {
            type: String
        },
        // the visited url
        canonical: {
            type: String
        },
        // whether we have found a cached document, and its size
        pageCached: {
            type: Boolean
        },
        pageSize: {
            type: Number,
            optional: true
        },
        createdAt: {
            type: String,
            optional: true
        },
        // creation timestamp
        createdAt: {
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
            SSR._collections.Statistics.server.deny({
                insert(){ return true; },
                update(){ return true; },
                remove(){ return true; },
            });
        }
    },

    // @locus Server
    // Add bot/prerender statistic
    // Need to bindEnvironment() because ultimately run from webapp inside of a HTTP middleware
    add( orig, req, doc ){
        if( Meteor.isServer && SSR._collections.Statistics.server ){
            check( orig, String );
            let o = {
                userAgent: req.headers['user-agent'],
                origId: orig,
                canonical: req._canonicalUrl,
                createdAt: new Date(),
                pageCached: false
            };
            if( doc ){
                o.pageCached = true;
                o.pageSize = doc.length;
            }
            //console.debug( 'running.set', o );
            const fn = Meteor.bindEnvironment( function(){
                SSR._collections.Statistics.server.insertAsync( o, ( err, res ) => {
                    //console.debug( o ); // includes the _id after the insertion
                });
            });
            fn();
        }
    },

    // client and server below will host the respective Mongo collections
    client: null,
    server: null
};
