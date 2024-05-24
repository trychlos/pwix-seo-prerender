/*
 * pwix:ssr/src/server/js/index.js
 */

import '../../common/js/index.js';
import './server.js';

import './check_npms.js';
import './collections.js';
// temporarily disable redis (see todo #1)
//import './redis.js';
import './startup.js';
import './webapp.js';
