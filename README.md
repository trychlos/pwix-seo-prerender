# ssr

## What is it ?

A Meteor package which adds to your application the ways to manage server-side rendering.

Its good behavior relies on a prerender service, which can be either [prerender.io](https://prerender.io) or your own local prerender service. The prerender service must be addressed by the `PRERENDER_SERVICE_URL` environment variable (the environment of your running application on the server side).

It is based on `prerender-node` package (cf. [References](#References) below).

On the server-side, the `prerender-node` package provides a middleware which redirects all requests incoming from a bot crawler to the addressed prerender service.

On the client-side, the `pwix:ssr` package provides a `SSR.isBot()` reactive datasource which is true when the current rendering is asked by a bot crawler.

## Configuration

The package's behavior can be configured through a call to the `SSR.configure()` method, with just a single javascript object argument, which itself should only contains the options you want override.

Known configuration options are:

- `verbosity`

    Define the expected verbosity level.

    The accepted value can be any or-ed combination of following:

    - `SSR_VERBOSE_NONE`

        Do not display any trace log to the console

    - `SSR_VERBOSE_CONFIGURE`

        Trace `SSR.configure()` calls and their result

Please note that `SSR.configure()` method should be called in the same terms both in client and server sides.

Also note, as an explicit reminder, that, because the Meteor packages are instanciated at application level, they should be configured at most once, and only once at most. Each addtionnal call to `SSR.configure()` will just override the previous one. You have been warned: **only the application should configure a package**.

## Provides

### `SSR`

The global object exported by the package.

### Methods

- `SSR.isBot()`

A reactive datasource which evaluates to `true` when the current incoming request is originated from a bot crawler.

This method is available both on the client and on the server.

- `SSR.isPrerender()`

A reactive datasource which evaluates to `true` when the current rendering is asked by the prerender service.

This method is available both on the client and on the server.

## References

[Github](https://github.com/prerender/prerender-node)

[npmjs](https://www.npmjs.com/package/prerender-node)

## NPM peer dependencies

Starting with v 1.0.0, and in accordance with advices from [the Meteor Guide](https://guide.meteor.com/writing-atmosphere-packages.html#npm-dependencies), we no more hardcode NPM dependencies in the `Npm.depends` clause of the `package.js`. 

Instead we check npm versions of installed packages at runtime, on server startup, in development environment.

Dependencies as of v 1.0.0:
```
```

Each of these dependencies should be installed at application level:
```
    meteor npm install <package> --save
```

## Translations

New and updated translations are willingly accepted, and more than welcome. Just be kind enough to submit a PR on the [Github repository](https://github.com/trychlos/pwix-ssr/pulls).

## Cookies and comparable technologies

As a server-side only package, this one doesn't use any cookie.

---
P. Wieser
- Last updated on 2023, May 11th
