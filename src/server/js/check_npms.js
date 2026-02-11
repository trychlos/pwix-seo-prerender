/*
 * pwix:seo-prerender/src/server/js/check_npms.js
 */

import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

if( false ){
    // whitelist packages which are included via a subfolder or badly recognized
    require( 'prerender-node/package.json' );
}

checkNpmVersions({
    'lodash': '^4.17.0',
    'prerender-node': '^3.8.3'
},
    'pwix:seo-prerender'
);
