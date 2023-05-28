/*
 * pwix:ssr/src/collections/running/server/index.js
 */

import '../running.js';

import './methods.js';
import './publish.js';

if( SSR._conf.verbosity & SSR_VERBOSE_COLLECTIONS ){
    console.debug( 'pwix:ssr/src/collections/running/server declaring Running collection' );
}
