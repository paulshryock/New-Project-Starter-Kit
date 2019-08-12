# Environment Variables

Configure your Eleventy and Node environments, platform, and server port in a `.env` file in your project's root directory.

```bash
ELEVENTY_ENV='development'
NODE_ENV='development'
PLATFORM='site'
PORT=8081
```

## `ELEVENTY_ENV`

Set `ELEVENTY_ENV` to `'development'` to enable development features. Set to `'production'` in your production environment.

## `NODE_ENV`

Set `NODE_ENV` to `'development'` to install devDependencies. Production environment also requires `'development'` to allow build process.

**TODO:** Commit and serve `/build` from GitHub, to allow this to be `'production'` in production environment. That would require a build hook before all git commits.

## `PLATFORM`

Explicitly set `PLATFORM` to `'app'`, `'email'`, or `'site'` to serve from one of those subdirectories inside `/build`. By default, `/build/site` is served.

## `PORT`

Set `PORT` if you would like to serve to any port other than `8080`. This is useful in development when you might be serving multiple projects at once.