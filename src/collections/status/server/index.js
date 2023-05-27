/*
 * pwix:ssr/src/collections/status/server/index.js
 */

import '../status.js';

import './methods.js';
import './publish.js';

if( SSR._conf.verbosity & SSR_VERBOSE_COLLECTIONS ){
    console.debug( 'pwix:ssr/src/collections/status/server declaring Status collection' );
}
