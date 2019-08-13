// task(name, [prerequisites{array}], [action{function}], [opts{object}]);

desc('This is the default task.');
task('default', function (params) {
  console.log(`This is the default task with ${params}.`);
});

desc('This task has prerequisites.');
task('hasPrereqs', ['foo', 'bar', 'baz'], function (params) {
  console.log('Ran some prereqs first.');
});

desc('This is an asynchronous task.');
task('asyncTask', function () {
  setTimeout(function () {
    console.log('Hello world')
  }, 1000);
}, {async: true});