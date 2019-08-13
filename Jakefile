// task(name, [prerequisites{array}], [action{function}], [opts{object}]);

desc('This is the default task.')
task('default', function (params) {
  console.log('This is the default task.')
})

desc('This task has prerequisites.')
task('hasPrereqs', ['foo', 'bar', 'baz'], function (params) {
  console.log('Ran some prereqs first.')
})

desc('This is an asynchronous task.')
task('asyncTask', function () {
  setTimeout(function () {
    console.log('This is an asynchronous task.')
  }, 1000)
}, {async: true})