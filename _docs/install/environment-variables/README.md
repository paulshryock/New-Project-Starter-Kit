# Environment Variables

Configure your Node environment in a `.env` file in your project's root directory.

```bash
NODE_ENV='development'
```

Set `NODE_ENV` to `'development'` to install devDependencies. As long as the build process makes use of devDependencies, all environments (including production) require this to be set to `'development'`.

## Secrets

Since `.env` is not checked into a repo, it may also be used for passwords, auth tokens, and other secrets.

## Production

Hosting environments like Netlify and Zeit Now have their own methods for configuring environment variables, rather than using a `.env` file.