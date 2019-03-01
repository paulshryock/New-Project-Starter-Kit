# RGX Innovation

RGX Innovation is a website with content about Realogy's RGX 2019 conference.

## Quick Start

Fork or clone this repo, install dev dependencies, and start:

```shell
$ git clone https://github.com/paulshryock/RGX-Innovation
$ cd RGX-Innovation
$ npm install
$ npm start
```

## npm Scripts

- [`start`](#start)
- [`clean`](#clean)
- [`webpack`](#webpack)
- [`webpack:watch`](#webpack:watch)
- [`eleventy`](#eleventy)
- [`eleventy:watch`](#eleventy:watch)
- [`eleventy:serve`](#eleventy:serve)
- [`build`](#build)
- [`watch`](#watch)
- [`serve`](#serve)

### `start`

Runs `build`. Use in production.

```shell
$ npm start
```

### `clean`

Runs during `build`, before executing webpack and eleventy. Removes the following folders, if they exist:

- `src/js`
- `src/css`
- `dist`

```shell
$ npm run clean
```

### `webpack`

Runs `npx webpack`.

```shell
$ npm run webpack
```

### `webpack:watch`

Runs `npx webpack --watch`.

```shell
$ npm run webpack:watch
```

### `eleventy`

Runs `npx eleventy`.

```shell
$ npm run eleventy
```

### `eleventy:watch`

Runs `npx eleventy --watch`.

```shell
$ npm run eleventy:watch
```

### `eleventy:serve`

Runs `npx eleventy --serve`.

```shell
$ npm run eleventy:serve
```

### `build`

Runs `clean`, `webpack`, and `eleventy`. Used in production by `start`.

```shell
$ npm run build
```

### `watch`

Runs `clean`, then executes webpack and eleventy, watching for file updates without serving. Use in development.

```shell
$ npm run watch
```

### `serve`

Runs `clean`, then executes webpack and eleventy, watching for file updates. Serves to `localhost:8081`. Use in development.

```shell
$ npm run serve
```

## Contributing

If you'd like to contribute, please read the [Code of Conduct](https://github.com/paulshryock/Eustace/blob/master/CODE_OF_CONDUCT.md), then fork the repository and use a feature branch. Pull requests are welcome.

### Your First Contribution

Working on your first Pull Request? You can learn how from this *free* series, [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github).

## Links

- Repository: [https://github.com/paulshryock/RGX-Innovation](https://github.com/paulshryock/RGX-Innovation)
- Pull Requests: [https://github.com/paulshryock/RGX-Innovation/pulls](https://github.com/paulshryock/RGX-Innovation/pulls)
- Issues: [https://github.com/paulshryock/RGX-Innovation/issues](https://github.com/paulshryock/RGX-Innovation/issues)
  - In case of sensitive bugs like security vulnerabilities, please contact [paul.shryock@realogy.com](mailto:paul.shryock@realogy.com) directly instead of using issue tracker. We value your effort to improve the security and privacy of this project!
- Releases:
	- v0
		- [v0.7.0 - Eleventy](https://github.com/paulshryock/RGX-Innovation/releases/tag/v0.7.0)
		- [v0.6.0 - Babel](https://github.com/paulshryock/RGX-Innovation/releases/tag/v0.6.0)
		- [v0.5.0 - PostCSS](https://github.com/paulshryock/RGX-Innovation/releases/tag/v0.5.0)
		- [v0.4.0 - Configure webpack](https://github.com/paulshryock/RGX-Innovation/releases/tag/v0.4.0)
		- [v0.3.0 - webpack](https://github.com/paulshryock/RGX-Innovation/releases/tag/v0.3.0)
		- [v0.2.0 - npm](https://github.com/paulshryock/RGX-Innovation/releases/tag/v0.2.0)
		- [v0.1.0 - Setup](https://github.com/paulshryock/RGX-Innovation/releases/tag/v0.1.0)