# Environment Variables

Configure your Node environment, server port, and platform in a `.env` file in your project's root directory.

```bash
NODE_ENV='development'
PORT=8081
PLATFORM='site'
```

## `NODE_ENV`

Set `NODE_ENV` to `'development'` to enable development features. Set to `'production'` in your production environment.

## `PORT`

Set `PORT` if you would like to serve to any port other than `8080`. This is useful in development when you might be serving multiple projects at once.

## `PLATFORM`

Explicitly set `PLATFORM` to `'app'`, `'email'`, or `'site'` to serve from one of those subdirectories inside `/build`. By default, `/build/site` is served.