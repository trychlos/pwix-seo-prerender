/*
 * pwix:ssr/src/common/js/configure.js
 */

SSR.configure = function( o ){
    SSR._conf = merge.recursive( true, SSR._defaults, o );

    // be verbose if asked for
    if( SSR._conf.verbosity & SSR_VERBOSE_CONFIGURE ){
        console.debug( 'pwix:ssr configure() with', o, 'building', SSR._conf );
    }
}
