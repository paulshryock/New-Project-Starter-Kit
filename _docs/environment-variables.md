---
description: Set the following environment variables in a local .env file, Postman
  environment, or server environment (i.e., Netlify or Heroku). Never check any
  of the environment variables into a repository.
---

# Environment Variables

## Node environment (optional)

This determins whether or not to delete devDependencies after building the site. You shouldn't need to use this anywhere, unless you're using production servers other than Netlify and Heroku if it makes sense.

Netlify automatically sets this to `development`, and Heroku automatically sets it to `production`. If you decide to set it for local development, you probably want to use `development`. But again, nothing in the client site or API is referencing this variable.

* `NODE_ENV`

## Build environment

This is used by the Gulp build pipeline to optimize assets for each environment.

Set this to `development` in a local development environment, and `production` in a production client site environment (such as Netlify). You don't need to set this on the production API server (such as Heroku).

* `BUILD_ENV`

## URLs

Set the site and API URL's. On the production API server (such as Heroku), `API_URL` can match `SITE_URL` as long as the Netlify redirects are correctly configured. The GitHub Secret needs `/api` appended to `API_URL` in order to correctly ping Heroku and prevent Dyno sleeping.

* `SITE_URL`
* `API_URL`

## JSON Web Token

Set this private key in order to generate secure a JWT for API authentication. Use a secure string, and keep it secure and private. Set this for local development, and on the production API server (such as Heroku).

* `JWT_PRIVATE_KEY`

## Establish database connection during API server startup

Set this locally and on the production API server (such as Heroku). This allows you to switch between the local development database and production server database, while you're developing the API locally.

**<span style="red">Setting this to the production database while developing locally will update the production database for real when you use the local development API.</span>**

**For example, if you need to create a new `User` in the production database, you could unprotect the `/api/users` route for `POST` requests (in the local API codebase) in order to create a new user in the production database. Just remember to undo that change before committing and merging your code.**

* `MONGODB_URI`

## Access database content via API at build time

While building the client website, Eleventy will need these credentials to ping the server-side API, login, and grab data.

* `API_URL`
* `USER_EMAIL`
* `USER_PASSWORD`
