/*
 * pwix:seo-prerender/src/server/js/before_render.js
 */

import { Logger } from 'meteor/pwix:logger';

const logger = Logger.get();

Prerender.s = Prerender.s || {};

Prerender.s.beforeRender = function(){

};
