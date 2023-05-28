/*
 * pwix:ssr/src/collections/statistics/server/index.js
 */

import '../statistics.js';

import './methods.js';
import './publish.js';

if( SSR._conf.verbosity & SSR_VERBOSE_COLLECTIONS ){
    console.debug( 'pwix:ssr/src/collections/statistics/server declaring Statistics collection' );
}
