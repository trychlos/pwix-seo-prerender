# pwix:seo-prerender - TODO

## Summary

1. [Todo](#todo)
2. [Done](#done)

---
## Todo

|   Id | Date       | Description and comment(s) |
| ---: | :---       | :---                       |
|   18 |  |  |

---
## Done

|   Id | Date       | Description and comment(s) |
| ---: | :---       | :---                       |
|    1 | 2023- 5-28 | Have a configuration option to cache via redis or mongo or not at all |
|      |            | for redis, this would be only useful if we could require the 'redis' npm package on demand |
|      | 2024- 5-24 | should use redis if present, without forcing that |
|      |            | see for example https://github.com/meteor/meteor/blob/release/METEOR%403.0-rc.2/packages/webapp/package.js |
|      | 2024- 5-25 | unfortunately not: the above example is for a Meteor package, not a NPM one |
|      |            | done via Npm.require() |
|      | 2026- 2-11 | moved to renderer application |
|    2 | 2023- 5-28 | Have a configuration option to provide a redis connection url |
|      | 2026- 2-11 | moved to renderer application |
|    3 | 2023- 5-28 | Provide an API to manage and clear statistics |
|      | 2026- 2-11 | moved to renderer application |
|    4 | 2023- 5-28 | Provide a UI component to manage and clear statistics |
|      | 2026- 2-11 | moved to renderer application |
|    5 | 2023- 5-28 | Provide an API to clear/reinit redis cache |
|      | 2026- 2-11 | moved to renderer application |
|    6 | 2023- 5-28 | Provide a UI component to clear/reinit redis cache |
|      | 2026- 2-11 | moved to renderer application |
|    7 | 2023- 9-10 | Add to README a comparison with meteor-ssr, ad why we do not use it |
|      | 2024- 5-25 | done |
|    8 | 2023- 9-12 | back meteor to 2.9.0 |
|      | 2024- 1-11 | done |
|    9 | 2024- 5-24 | Remove VERBOSE constants from exports as in other packages |
|      | 2024- 5-25 | done |
|   10 | 2024- 5-24 | review all server code to replace sync calls with async/await |
|      | 2024- 5-25 | done |
|   11 | 2024- 6- 3 | May get an undefined result |
|      | 2024- 6- 3 | fixed |
|   12 | 2026- 2-10 | enabled configuration parm is useless: when the package is present, it is enough to have the PRERENDER_SERVICE_URL environment variable to consider it to be run |
|      | 2026- 2-11 | moved to renderer application |
|   13 | 2026- 2-10 | review isBot() definition and usage |
|      | 2026- 2-11 | moved to renderer application |
|   14 | 2026- 2-10 | review isPrerender() definition and usage |
|      | 2026- 2-11 | moved to renderer application |
|   15 | 2026- 2-10 | review the local usage of redis: is the cache msut be managed by the application or by the prerender service ? |
|      | 2026- 2-11 | moved to renderer application |
|   16 | 2026- 2-10 | re-challenge the 'running' collection |
|      | 2026- 2-11 | moved to renderer application |
|   17 | 2026- 2-10 | replace the statically included prerender-node with a standard extern (i.e. node_modules/) npm usage |
|      | 2026- 2-11 | moved to renderer application |

---
P. Wieser
- Last updated on 2026, Feb. 11th
