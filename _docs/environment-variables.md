# Environment Variables

Set the following environment variables in a local `.env` file, Postman environment, or server environment _(i.e., Netlify or Heroku)_.

_TODO: Remove the `NPSK_` namespace from all environment variables, if it makes sense._

**Never check any of the environment variables into a repository.**

## Set Eleventy environment

Set this to `development` during development, and `production` in production. This is used by the whole build pipeline (not just Eleventy) to optimize assets for each environment.

- `ELEVENTY_ENV`

_TODO: Switch to a tool-agnostic variable name like `BUILD_ENV` instead._

_TODO: Add a `BUILD_CONTEXT` (or something similar) environment variable to determine if `server` (Heroku) or `client` (Netlify)._

## JSON Web Token

Set this key in order to generate secure JWT for authentication. Use a secure string, and keep it secure and private. **Never check the key into a repository.**

- `NPSK_JWT_PRIVATE_KEY`

## Establish database connection during API server startup

_TODO: Combine these into a single environment variable called `DB_STRING` (or something similar)._

- `NPSK_DB_PROTOCOL`
- `NPSK_DB_USERNAME`
- `NPSK_DB_PASSWORD`
- `NPSK_DB_HOST`
- `NPSK_DB_PORT`
- `NPSK_DB_DATABASE`

## Access database content via API at build time

While building the client website, Eleventy will need these credentials to ping the server-side API, login, and grab data.

- `NPSK_APP_URL`: _(TODO: Change to `API_URL`)_.
- `NPSK_USER_EMAIL`: _(TODO: Change to `API_USER_EMAIL`)_.
- `NPSK_USER_PASSWORD`: _(TODO: Change to `API_USER_PASSWORD`)_.

### Test API with Postman, request specific collection items

- `NPSK_USER_ID`: _(TODO: Change to `API_USER_ID`)_.
- `NPSK_ARTICLE_ID`: _(TODO: Change to `API_ARTICLE_ID`)_.
- `NPSK_PROJECT_ID`: _(TODO: Change to `API_PROJECT_ID`)_.
- `NPSK_TESTIMONIAL_ID`: _(TODO: Change to `API_TESTIMONIAL_ID`)_.