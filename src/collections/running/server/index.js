/*
 * pwix:ssr/src/collections/running/server/index.js
 */

import '../running.js';

import './methods.js';
import './publish.js';

if( SSR._conf.verbosity & SSR.C.Verbose.COLLECTIONS ){
    console.debug( 'pwix:ssr/src/collections/running/server declaring Running collection' );
}
