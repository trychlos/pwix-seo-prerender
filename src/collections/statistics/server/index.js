/*
 * pwix:ssr/src/collections/statistics/server/index.js
 */

import '../statistics.js';

import './methods.js';
import './publish.js';

if( SSR._conf.verbosity & SSR.C.Verbose.COLLECTIONS ){
    console.debug( 'pwix:ssr/src/collections/statistics/server declaring Statistics collection' );
}
