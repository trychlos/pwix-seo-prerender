/*
 * pwix:ssr/src/server/js/redis.js
 */

let createClient = null;

try {
    createClient = Npm.require( 'redis' ).createClient;
}
catch( e ){
    console.error( '[pwix:ssrr/src/server/js/redis.js] redis cannot be imported - do you have installed it ? (meteor npm install redis)' );
    console.error( '[pwix:ssrr/src/server/js/redis.js] will not use redis as a pre-rendering cache' );
}

if( createClient ){
    SSR._redis = createClient();

    SSR._redis.on( 'error', err => console.error( 'Redis Client Error', err ));

    //await client.connect();
    SSR._redis.connect();
}
