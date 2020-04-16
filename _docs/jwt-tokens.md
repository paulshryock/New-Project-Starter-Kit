# JWT Tokens

> A good pattern is to refresh the token before it expires.
> 
> Set the token expiration to one week and refresh the token every time the user open the web application and every one hour. If a user doesn't open the application for more than a week, they will have to login again and this is acceptable web application UX.
> 
> To refresh the token your API needs a new endpoint that receives a valid, not expired JWT and returns the same signed JWT with the new expiration field. Then the web application will store the token somewhere.
> - [source][stack-overflow]

> 1. Expiration only happens for web apps, not for native mobile apps, because native apps never expire.
> 2. Revoking only happens when (1) uses click the logout button on the website or native Apps;(2) users reset their passwords; (3) users revoke their tokens explicitly in the administration panel.
> Set the expiration date in the exp claim and reject the token on the server side if the date in the exp claim is before the current date.
> For browsers, use HttpOnly and Secure cookies. cookie. The HttpOnly flag protects the cookies from being accessed by JavaScript and prevents XSS attack. The Secure flag will only allow cookies to be sent to servers over HTTPS connection.
> [source](gist)

> 1. Set a reasonable expiration time on tokens
> 2. Delete the stored token from client side upon log out
> 3. Have DB of no longer active tokens that still have some time to live
> 4. Query provided token against The Blacklist on every authorized request
> - [source][medium]

[stack-overflow]: https://stackoverflow.com/a/26834685
[gist]: https://gist.github.com/soulmachine/b368ce7292ddd7f91c15accccc02b8df
[medium]: https://medium.com/devgorilla/how-to-log-out-when-using-jwt-a8c7823e8a6