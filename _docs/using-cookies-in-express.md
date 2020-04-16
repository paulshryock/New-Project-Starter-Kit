<!-- From https://www.taniarascia.com/full-stack-cookies-localstorage-react-express/#using-http-cookies-in-express -->

## Set a cookie

```js
// Set a cookie
response.cookie('nameOfCookie', 'cookieValue', {
  maxAge: 60 * 60 * 1000, // 1 hour
  httpOnly: true,
  secure: true,
  sameSite: true,
})
```

## Get a cookie

```js
// Get a cookie
response.cookies.nameOfCookie
```

## Clear a cookie

```js
// Clear a cookie
response.clearCookie('nameOfCookie')
```

## Local values in Express middleware

Express runs on middlewares. In the case that you want to update a cookie in one middleware and use it in the next, you can store it as an Express local. This might come in handy if you have to refresh a JWT access token in a preAuth route, use that authentication in the handler, and send cookies in the response at the end.

```js
// Create a local
const refreshMiddleware = (request, response, next) => {
  const accessToken = getNewAccessToken(refreshToken)
  // Set local
  response.locals.accessToken = accessToken
  next()
}

// Use a local
const handler = (request, response) => {
  const updatedAccessToken = response.locals.accessToken
}

router.post('/app/user', refreshMiddleware, handler)
```