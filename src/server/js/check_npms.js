/*
 * pwix:ssr/src/server/js/check_npms.js
 */

import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

if( false ){
    // whitelist packages which are included via a subfolder or badly recognized
    // require( 'body-parser/package.json' );
}

checkNpmVersions({
    'lodash': '^4.17.0',
    'redis': '^4.6.6',
    'simpl-schema': '^3.4.1'
},
    'pwix:ssr'
);
