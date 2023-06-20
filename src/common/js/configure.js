/*
 * pwix:ssr/src/common/js/configure.js
 */

import { check } from 'meteor/check';
import _ from 'lodash';

const NonEmptyString = Match.Where((x) => {
    check(x, String);
    return x.length > 0;
});

SSR._defaults = {
    collectionsPrefix: 'ssr_',
    verbosity: SSR_VERBOSE_NONE
};

/**
 * @summary Get/set the package configuration
 *  Should be called *in same terms* both in the client and the server
 * @param {Object} o configuration options
 * @returns {Object} the package configuration
 */
SSR.configure = function( o ){
    if( o && _.isObject( o )){
        _.merge( SSR._conf, SSR._defaults, o );

        // make sure we have a collections prefix
        check( SSR._conf.collectionsPrefix, NonEmptyString );

        // be verbose if asked for
        if( SSR._conf.verbosity & SSR_VERBOSE_CONFIGURE ){
            console.debug( 'pwix:ssr configure() with', o, 'building', SSR._conf );
        }
    }
    // also acts as a getter
    return SSR._conf;
};

_.merge( SSR._conf, SSR._defaults );
