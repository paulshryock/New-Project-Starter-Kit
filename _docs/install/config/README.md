# Config

Use config files located in the `/config` directory for non-private configuration. This code will be checked into a repo, and should not be used for passwords, auth tokens, and other secrets.

## Default config settings

```json
// `/config/default.json`

{
  "eleventy": {
    "environment": "development",
    "platform": "site"
  },
  "server": {
    "port": 8080
  }
}
```

## Development config settings

```json
// `/config/development.json`

{
  "eleventy": {
    "environment": "development"
  },
  "server": {
    "port": 8081
  }
}
```

## Production config settings

```json
// `/config/production.json`

{
  "eleventy": {
    "environment": "production"
  }
}
```

## Environment variable config settings

For secrets, use environment variables in `.env`, which you can access in your configuration like this:

```json
// `/config/custom-environment-variables.json

{
  "node": {
    "environment": "NODE_ENV"
  }
}
```