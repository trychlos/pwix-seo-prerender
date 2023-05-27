Package.describe({
    name: 'pwix:ssr',
    version: '0.1.0',
    // Brief, one-line summary of the package.
    summary: ' A Meteor package which manages static rendering and its storage, through a renderer server, for SEO puposes.',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse( function( api ){
    configure( api );
    api.export([
        'SSR',
        'SSR_VERBOSE_NONE',
        'SSR_VERBOSE_CONFIGURE',
        'SSR_VERBOSE_COLLECTIONS'
    ]);
    api.mainModule( 'src/client/js/index.js', 'client' );
    api.mainModule( 'src/server/js/index.js', 'server' );
});

Package.onTest( function( api ){
    configure( api );
    api.use( 'tinytest' );
    api.use( 'pwix:ssr' );
    api.mainModule( 'test/js/index.js' );
});

function configure( api ){
    api.versionsFrom( '2.12' );
    api.use( 'aldeed:collection2@3.5.0', 'server' );
    api.use( 'check' );
    api.use( 'ecmascript' );
    api.use( 'mongo' );
    api.use( 'reactive-var' );
    api.use( 'tmeasday:check-npm-versions@1.0.2', 'server' );
}

// NPM dependencies are checked in /src/server/js/check_npms.js
// See also https://guide.meteor.com/writing-atmosphere-packages.html#npm-dependencies
