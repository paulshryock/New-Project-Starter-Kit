# npm Scripts

- [`start`](#start)
- [`clean`](#clean)
- [`clean:dist`](#cleandist)
- [`clean:js`](#cleanjs)
- [`clean:css`](#cleancss)
- [`clean:fonts`](#cleanfonts)
- [`clean:img`](#cleanimg)
- [`webpack`](#webpack)
- [`webpack:watch`](#webpackwatch)
- [`eleventy`](#eleventy)
- [`eleventy:watch`](#eleventywatch)
- [`eleventy:serve`](#eleventyserve)
- [`prebuild`](#prebuild)
- [`build`](#build)
- [`prewatch`](#prewatch)
- [`watch`](#watch)
- [`preserve`](#preserve)
- [`serve`](#serve)
- [`now-build`](#nowbuild)

## `start`

Runs `build`. Use in production.

```shell
$ npm start
```

## `clean`

Runs during `build`, before executing webpack and eleventy. Removes the following folders, if they exist:

- `dist`
- `src/js`
- `src/css`
- `src/fonts`
- `src/img`

It does this by running these commands in order:

- `clean:dist`
- `clean:js`
- `clean:css`
- `clean:fonts`
- `clean:img`

```shell
$ npm run clean
```

## `clean:dist`

Runs during `clean`. Removes the `dist` folder, if it exists.

```shell
$ npm run clean:dist
```

## `clean:js`

Runs during `clean`. Removes the `src/js` folder, if it exists.

```shell
$ npm run clean:js
```

## `clean:css`

Runs during `clean`. Removes the `src/css` folder, if it exists.

```shell
$ npm run clean:css
```

## `clean:fonts`

Runs during `clean`. Removes the `src/fonts` folder, if it exists.

```shell
$ npm run clean:fonts
```

## `clean:img`

Runs during `clean`. Removes the `src/img` folder, if it exists.

```shell
$ npm run clean:img
```

## `webpack`

Runs `npx webpack`.

```shell
$ npm run webpack
```

## `webpack:watch`

Runs `npx webpack --watch`.

```shell
$ npm run webpack:watch
```

## `eleventy`

Runs `npx eleventy`.

```shell
$ npm run eleventy
```

## `eleventy:watch`

Runs `npx eleventy --watch`.

```shell
$ npm run eleventy:watch
```

## `eleventy:serve`

Runs `npx eleventy --serve`.

```shell
$ npm run eleventy:serve
```

## `prebuild`

Runs `clean` and `webpack` before `build`.

## `build`

Runs `eleventy`. Used in production by `start`.

```shell
$ npm run build
```

## `prewatch`

Runs `clean` and `webpack` before `watch`.

## `watch`

Runs `eleventy`, watching for file updates without serving. Use in development.

```shell
$ npm run watch
```

## `preserve`

Runs `clean` and `webpack` before `serve`.

## `serve`

Runs `eleventy`, watching for file updates. Serves to `localhost:8081`. Use in development.

```shell
$ npm run serve
```