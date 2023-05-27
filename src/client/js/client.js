/*
 * pwix:ssr/src/client/js/client.js
 */

import { ReactiveVar } from 'meteor/reactive-var';

SSR._client = {
    collectionsReady: new ReactiveVar( false )
};
