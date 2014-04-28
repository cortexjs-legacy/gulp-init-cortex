'use strict';

var gulp = require('gulp');
var template = require('gulp-template');
var rename = require("gulp-rename");
var argv = require('optimist').argv;

gulp.task('default', function () {
  gulp.src('templates/*.*')
    .pipe(template({name: argv.name}))
    .pipe(gulp.dest(argv.dest));

  gulp.src('templates/test/*.*')
    .pipe(template({name: argv.name}))
    .pipe(gulp.dest(argv.dest + '/test'));

  gulp.src('templates/test/tool/*.*')
    .pipe(template({name: argv.name}))
    .pipe(gulp.dest(argv.dest + '/test/tool'));

  gulp.src('templates/test/spec/name.js')
  	.pipe(template({name: argv.name}))
  	.pipe(rename({basename: argv.name + '_test'}))
    .pipe(gulp.dest(argv.dest + '/test/spec'));
});
