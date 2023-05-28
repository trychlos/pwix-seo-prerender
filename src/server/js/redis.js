/*
 * pwix:ssr/src/server/js/redis.js
 */

import { createClient } from 'redis';

SSR._redis = createClient();

SSR._redis.on( 'error', err => console.error( 'Redis Client Error', err ));

//await client.connect();
SSR._redis.connect();
