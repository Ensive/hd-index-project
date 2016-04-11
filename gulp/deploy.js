'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('deploy', ['build'], function () {
  return gulp.src('dist')
    .pipe($.subtree())
    .pipe($.clean());
});
