# pwix:seo-prerender

## What is it ?

A Meteor server-only package which adds to your application a prerendering feature, suitable for SEO purposes.

Its good behavior relies on the availability somewhere of an external prerendering service, which can be either [prerender.io](https://prerender.io), [prerender.com](https://prerender.com), or your own local prerender service. The prerender service must be addressed by the `PRERENDER_SERVICE_URL` (server-side) environment variable, and must be able to address your site (be cautious when testing from a local application being developed).

It is based on [prerender-node](https://www.npmjs.com/package/prerender-node) package.

On server-side, `prerender-node` acts as a man-in-the-middle and redirects all requests from an identified bot to the prerendering service.

## What isn't ?

This is NOT a server-side rendering in the same sense that for example when using ReactJS Server Components. Here we are _just_ caching rendered pages in order to be able to serve the for SEO usage. In particular, there is no user data provided, nor any sort of javascript hydration.

This is not either something like Meteor `server-render` package. This later implements some generic support for _"server-side rendering in Meteor applications, by providing a mechanism for injecting fragments of HTML into the <head> and/or <body> of the application’s initial HTML response."_

Though documentation examples are rather React-oriented, it appears clear to me that the developer has to implement in the application the code needed to render the pages. Even if the templating system (React, Blaze or any one) provides some APIs, there is still a rather amount of work to do to actually render the whole things.

## Installation

This Meteor package is installable with the usual command:

```sh
    meteor add pwix:seo-prerender
    meteor npm install lodash prerender-node --save
```

## Usage

Your web application MUST define the `PRERENDER_SERVICE_URL` to address the prerender service. if this is not done, then - obviously - the service will not be called.

Your web application MAY define the `PWIX_SEO_PRERENDER_LOG`: when done, whatever its value as long as it is not empty, each incoming request will be logged with the origin user agent.

## NPM peer dependencies

Starting with v 0.1.0, and in accordance with advices from [the Meteor Guide](https://guide.meteor.com/writing-atmosphere-packages.html#peer-npm-dependencies), we no more hardcode NPM dependencies in the `Npm.depends` clause of the `package.js`.

Instead we check npm versions of installed packages at runtime, on server startup, in development environment.

Dependencies as of v 1.0.0:

```js
    'lodash': '^4.17.0',
    'prerender-node': '^3.8.3'
```

Each of these dependencies should be installed at application level:

```sh
    meteor npm install <package> --save
```

## Translations

None at the moment.

## Cookies and comparable technologies

The package doesn't use any cookie.

## Issues & help

In case of support or error, please report your issue request to our [Issues tracker](https://github.com/trychlos/pwix-ssr/issues).

---
P. Wieser
- Last updated on 2026, Feb. 11th
