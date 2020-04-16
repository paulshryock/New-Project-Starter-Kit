# Environment Variables

Set the following environment variables in a local `.env` file, Postman environment, or server environment.

## JSON Web Token

- `NPSK_JWT_PRIVATE_KEY`

## Database

During server startup, Express will need these credentials to access the database.

- `NPSK_DB_PROTOCOL`
- `NPSK_DB_USERNAME`
- `NPSK_DB_PASSWORD`
- `NPSK_DB_HOST`
- `NPSK_DB_PORT`
- `NPSK_DB_DATABASE`

## API

While building the client website, Eleventy will need these credentials to ping the API and grab data for content collections.

- `NPSK_APP_URL`
- `NPSK_USER_EMAIL`
- `NPSK_USER_PASSWORD`

### For API testing in Postman

- `NPSK_USER_ID`
- `NPSK_ARTICLE_ID`
- `NPSK_PROJECT_ID`
- `NPSK_TESTIMONIAL_ID`