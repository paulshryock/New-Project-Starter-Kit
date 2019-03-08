# npm Scripts

- `[start](#start)`
- [clean](#clean)
- [`webpack`](#webpack)
- [`webpack:watch`](#webpackwatch)
- [`eleventy`](#eleventy)
- [`eleventy:watch`](#eleventywatch)
- [`eleventy:serve`](#eleventyserve)
- [`build`](#build)
- [`watch`](#watch)
- [`serve`](#serve)

## `start`

Runs `build`. Use in production.

```shell
$ npm start
```

## `clean`

Runs during `build`, before executing webpack and eleventy. Removes the following folders, if they exist:

- `src/js`
- `src/css`
- `dist`

```shell
$ npm run clean
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

## `build`

Runs `clean`, `webpack`, and `eleventy`. Used in production by `start`.

```shell
$ npm run build
```

## `watch`

Runs `clean` and `webpack`, then executes eleventy, watching for file updates without serving. Use in development.

```shell
$ npm run watch
```

## `serve`

Runs `clean` and `webpack`, then executes eleventy, watching for file updates. Serves to `localhost:8081`. Use in development.

```shell
$ npm run serve
```