const config = require('config')
const url = config.get('api.url')
const debug = require('debug')('build:eleventy')
const axios = require('axios')

class Api {

  async login () {
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
        return response.headers['set-cookie'][0]
          .replace('x-auth-token=', '')
          .replace(/; .*/, '')
      })
      .catch(error => {
        debug('Token was not received!')
        this.handleError(error)
      })
  }

  async addCollection (collection) {
    // TODO: Cache collection
    // https://github.com/11ty/eleventy-cache-assets
    
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
          this.handleError(error)
        })
    }
  }

  handleError (error) {
    if (error.response) {
      debug('Server response error: ', error.response.data)
    } else if (error.request) {
      debug('No server response received: ', error.request)
    } else {
      debug('Client request error: ', error.message)
    }
    if (error.config) debug(error.config)
  }

}

module.exports = Api
