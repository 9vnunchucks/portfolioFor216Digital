Developer Dependencies
Gulp -
  responsible for compiling scss to class
  responsible for reloading pages when code is updated
  to run gulp when developing from portfolioFor216Digital root -
    use cli to run command - node_modules/.bin/gulp

  Gulp-sass -
    There was a dependency issue where it was requiring a newer version of node.js than i could install using the linux low latency kernel.  /node_modules/gulp-sass/index.js had to be run in strict mode as a result.
