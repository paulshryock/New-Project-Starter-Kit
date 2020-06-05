---
description: Set the following environment variables in a local .env file, Postman
  environment, or server environment (i.e., Netlify or Heroku). Never check any
  of the environment variables into a repository.
---

# Environment Variables

## Set build environment

This is used by the Gulp build pipeline to optimize assets for each environment. Set this to `development` in a local development environment, and `production` in a production environment where the client is built (such as Netlify).

* `BUILD_ENV`

_TODO: Maybe switch to a tool-agnostic variable name like `BUILD_ENV` instead._

_TODO: Maybe add a `BUILD_CONTEXT` (or something similar) environment variable to determine if `server` (Heroku) or `client` (Netlify)._

## JSON Web Token

Set this key in order to generate secure JWT for authentication. Use a secure string, and keep it secure and private.

* `JWT_PRIVATE_KEY`

## Establish database connection during API server startup

* `MONGODB_URI`

## Access database content via API at build time

While building the client website, Eleventy will need these credentials to ping the server-side API, login, and grab data.

* `NPSK_APP_URL`: _\(TODO: Change to `API_URL`\)_.
* `NPSK_USER_EMAIL`: _\(TODO: Change to `API_USER_EMAIL`\)_.
* `NPSK_USER_PASSWORD`: _\(TODO: Change to `API_USER_PASSWORD`\)_.

### Test API with Postman, request specific collection items

* `NPSK_USER_ID`: _\(TODO: Change to `API_USER_ID`\)_.
* `NPSK_ARTICLE_ID`: _\(TODO: Change to `API_ARTICLE_ID`\)_.
* `NPSK_PROJECT_ID`: _\(TODO: Change to `API_PROJECT_ID`\)_.
* `NPSK_TESTIMONIAL_ID`: _\(TODO: Change to `API_TESTIMONIAL_ID`\)_.

