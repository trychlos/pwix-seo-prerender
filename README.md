# ssr

## What is it ?

A Meteor package which adds to your application the ways to manage server-side rendering.

Its good behavior relies on the availability somewhere of an external prerendering service, which can be either [prerender.io](https://prerender.io) or your own local prerender service. The prerender service must be addressed by the `PRERENDER_SERVICE_URL` environment variable (the environment of your running application on the server side).

It is based on `prerender-node` package (cf. [References](#References) below).

On the server-side, thanks to `prerender-node`, the `pwix:ssr` package provides a middleware which redirects all requests incoming from a bot crawler to the addressed prerender service.

On the client-side, the `pwix:ssr` package provides a `SSR.isBot()` and `SSR.isPrerender()` reactive datasources (see [Methods](#Methods) below).

## How does it work ?

`pwix:ssr` looks at the headers of each incoming HTTP request in order to detect a bot crawler activity. When it does so, the request is forwarded to the prerendering service which handle it, and returns the built page (without any script).

The client-side datasources are here so that your application may decide to build a special page or have a special look when prerendering.

For example, you may want to not display a cookie banner in such a case.

## Configuration

The package's behavior can be configured through a call to the `SSR.configure()` method, with just a single javascript object argument, which itself should only contains the options you want override.

Known configuration options are:

- `collectionsPrefix`

    The prefix to be used when naming the collections used by the package.

    Defaults to `ssr_`.

- `verbosity`

    Define the expected verbosity level.

    The accepted value can be `SSR_VERBOSE_NONE` or any or-ed combination of following:

    - `SSR_VERBOSE_CONFIGURE`

        Trace `SSR.configure()` calls and their result.

    - `SSR_VERBOSE_COLLECTIONS`

        Trace collections definitions.

        May be useful to check that the collections are rightly prefixed.

Please note that `SSR.configure()` method should be called in the same terms both in client and server sides.

Remind too that Meteor packages are instanciated at application level. They are so only configurable once, or, in other words, only one instance has to be or can be configured. Addtionnal calls to `SSR.configure()` will just override the previous one. You have been warned: **only the application should configure a package**.

## Provides

### `SSR`

The global object exported by the package.

### Methods

- `SSR.isBot()`

A reactive datasource which evaluates to `true` when the current incoming request is originated from a bot crawler.

This method is only available on the client.

- `SSR.isPrerender()`

A reactive datasource which evaluates to `true` when the current rendering is asked by the prerender service.

This method is only available on the client.

## References

[Github](https://github.com/prerender/prerender-node)

[npmjs](https://www.npmjs.com/package/prerender-node)

## NPM peer dependencies

Starting with v 0.1.0, and in accordance with advices from [the Meteor Guide](https://guide.meteor.com/writing-atmosphere-packages.html#npm-dependencies), we no more hardcode NPM dependencies in the `Npm.depends` clause of the `package.js`. 

Instead we check npm versions of installed packages at runtime, on server startup, in development environment.

Dependencies as of v 0.1.0:
```
    'merge': '^2.1.1',
    'simpl-schema': '^3.4.1'
```

Each of these dependencies should be installed at application level:
```
    meteor npm install <package> --save
```

## Translations

New and updated translations are willingly accepted, and more than welcome. Just be kind enough to submit a PR on the [Github repository](https://github.com/trychlos/pwix-ssr/pulls).

## Cookies and comparable technologies

The package doesn't use any cookie.

---
P. Wieser
- Last updated on 2023, May 11th
