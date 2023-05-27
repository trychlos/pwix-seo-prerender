/*
 * pwix:ssr/src/common/js/defaults.js
 */

import merge from 'merge';

SSR._defaults = {
    collectionsPrefix: 'ssr_',
    verbosity: SSR_VERBOSE_NONE
};

SSR._conf = merge.recursive( true, SSR._defaults );
