# ssr - TODO

## Summary

1. [Todo](#todo)
2. [Done](#done)

---
## Todo

|   Id | Date       | Description and comment(s) |
| ---: | :---       | :---                       |
|    1 | 2023- 5-28 | Have a configuration option to cache via redis or mongo or not at all |
|      |            | for redis, this would be only useful if we could require the 'redis' npm package on demand |
|      | 2024- 5-24 | should use redis if present, without forcing that |
|      |            | see for example https://github.com/meteor/meteor/blob/release/METEOR%403.0-rc.2/packages/webapp/package.js |
|    2 | 2023- 5-28 | Have a configuration option to provide a redis connection url |
|    3 | 2023- 5-28 | Provide an API to manage and clear statistics |
|    4 | 2023- 5-28 | Provide a UI component to manage and clear statistics |
|    5 | 2023- 5-28 | Provide an API to clear/reinit redis cache |
|    6 | 2023- 5-28 | Provide a UI component to clear/reinit redis cache |
|   11 |  |  |

---
## Done

|   Id | Date       | Description and comment(s) |
| ---: | :---       | :---                       |
|    7 | 2023- 9-10 | Add to README a comparison with meteor-ssr, ad why we do not use it |
|      | 2024- 5-25 | done |
|    8 | 2023- 9-12 | back meteor to 2.9.0 |
|      | 2024- 1-11 | done |
|    9 | 2024- 5-24 | Remove VERBOSE constants from exports as in other packages |
|      | 2024- 5-25 | done |
|   10 | 2024- 5-24 | review all server code to replace sync calls with async/await |
|      | 2024- 5-25 | done |

---
P. Wieser
- Last updated on 2023, May 28th
