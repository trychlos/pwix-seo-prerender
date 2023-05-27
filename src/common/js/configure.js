/*
 * pwix:ssr/src/common/js/configure.js
 */

import { check } from 'meteor/check';
import merge from 'merge';

const NonEmptyString = Match.Where((x) => {
    check(x, String);
    return x.length > 0;
});

SSR.configure = function( o ){
    SSR._conf = merge.recursive( true, SSR._defaults, o );

    // make sure we have a collections prefix
    check( SSR._conf.collectionsPrefix, NonEmptyString );

    // be verbose if asked for
    if( SSR._conf.verbosity & SSR_VERBOSE_CONFIGURE ){
        console.debug( 'pwix:ssr configure() with', o, 'building', SSR._conf );
    }
}
