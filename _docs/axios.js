/**
 * GET JSON data
 *
 * Axios automatically transforms JSON data once the request is resolved, so we do not have to do much here.
 */
axios
  .get("examples/example.json")
  .then(response => {
    console.log(response.data)
  })
  .catch(error => {
    console.log(error)
  })

/**
 * POST JSON data
 */
const options = {
  url: 'http://localhost/test.htm',
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=UTF-8'
  },
  data: {
    a: 10,
    b: 20
  }
};

axios(options)
  .then(response => {
    console.log(response.status);
  });

/**
 * Response timeout
 *
 * The simplicity of setting timeout in Axios is one of the reasons some developers prefer it to fetch(). In Axios, you can use the optional timeout property in the config object to set the number of milliseconds before the request is aborted. For example:
 */
axios({
  method: 'post',
  url: '/login',
  timeout: 4000,    // 4 seconds timeout
  data: {
    firstName: 'David',
    lastName: 'Pollock'
  }
})
.then(response => {/* handle the response */})
.catch(error => console.error('timeout exceeded'))

/**
 * Error Handling
 *
 * Handling errors with Axios is pretty straightforward because bad responses (like 404 or 500) will reject the promise.
 */
axios
  .get("examples/example.json")
  .then(response => {
    console.log("response", response)
  })
  .catch(error => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data)
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request)
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message)
    }
    console.log(error.config)
  })

/**
 * Intercepting Requests and Responses
 *
 * One of the key features of Axios is its ability to intercept HTTP requests. Interceptors can be really helpful when we want to examine or change HTTP requests from our application to the server, such as retrieving a token from local storage and including it in all requests.
 */
axios.interceptors.request.use(
  config => {
    // Do something before request is sent
    return config
  },
  error => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
axios.interceptors.response.use(
  response => {
    // Do something with response data
    return response
  },
  error => {
    // Do something with response error
    return Promise.reject(error)
  }
)

// sent a GET request
axios.get("examples/example.json").then(response => {
  console.log(response.data)
})

/**
 * Download progress
 *
 * Implementing a progress indicator in Axios is simpler, especially if you use the Axios Progress Bar module. First, you need to include the following style and script:
 *
    ```html
    <link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/rikmms/progress-bar-4-axios/0a3acf92/dist/nprogress.css" />
    <script src="https://cdn.rawgit.com/rikmms/progress-bar-4-axios/0a3acf92/dist/index.js"></script>
    <img id="img">
    ```
 *
 * Then you can implement the progress bar like this:
 *
 * This code uses the FileReader API to asynchronously read the downloaded image. The readAsDataURL method returns the image’s data as a Base64-encoded string, which is then inserted into the src attribute of the img tag to display the image.
 */
loadProgressBar();

const url = 'https://fetch-progress.anthum.com/30kbps/images/sunrise-baseline.jpg';

axios.get(url, {responseType: 'blob'})
  .then(response => {
    const reader = new window.FileReader();
    reader.readAsDataURL(response.data); 
    reader.onload = () => {
      document.getElementById('img').setAttribute('src', reader.result);
    }
  })
  .catch(error => {
    console.log(error)
  });

/**
 * Simultaneous requests
 *
 * To make multiple simultaneous requests, Axios provides the axios.all() method. Simply pass an array of requests to this method, then use axios.spread() to assign the properties of the response array to separate variables:
 */
axios.all([
  axios.get('https://api.github.com/users/iliakan'), 
  axios.get('https://api.github.com/users/taylorotwell')
])
.then(axios.spread((obj1, obj2) => {
  // Both requests are now complete
  console.log(obj1.data.login + ' has ' + obj1.data.public_repos + ' public repos on GitHub');
  console.log(obj2.data.login + ' has ' + obj2.data.public_repos + ' public repos on GitHub');
}));