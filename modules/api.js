require('dotenv').config()
const config = require('config')
const debug = require('debug')('npsk:api')
const axios = require('axios')
const url = config.get('app.url')

function handleError(error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    debug('Server response error: ', error.response.data)
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    debug('No server response received: ', error.request)
  } else {
    // Something happened in setting up the request that triggered an Error
    debug('Client request error: ', error.message)
  }
  if (error.config) debug(error.config)
}

module.exports.login = function () {
  axios({
    method: 'post',
    url: url + '/api/auth',
    data: {
      email: config.get('user.email'),
      password: config.get('user.password')
    }
  })
    .then(response => {
      debug('Token was received!')
      return response.headers['set-cookie'][0].replace('x-auth-token=', '').replace(/; .*/, '')
    })
    .catch(error => {
      debug('Token was not received!')
      handleError(error)
    })
}

module.exports.addCollection = async function (collection) {
  if (collection.location === 'api') {
    return await axios({
      method: 'get',
      url: url + '/api/' + collection.plural
    })
      .then(response => {
        return response.data
      })
      .catch(error => {
        debug(collection.plural + ' collection not found!')
        handleError(error)
      })
  }
}
