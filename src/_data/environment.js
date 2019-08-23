const environment = {
  auth_user: [
    {
      name: process.env.AUTH_USER_NAME,
      password: process.env.AUTH_USER_PASSWORD
    }
  ],
  eleventy_env: process.env.ELEVENTY_ENV,
  node_env: process.env.NODE_ENV,
  platform: process.env.PLATFORM,
  port: process.env.PORT
}

module.exports = environment
