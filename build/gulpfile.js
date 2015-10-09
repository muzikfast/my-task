var gulp           = require('gulp'),
    watch          = require('gulp-watch'),
    less           = require('gulp-less'),
    livereload     = require('gulp-livereload');

var plumberErrors = function(err) {
  notify.onError({
    title    : 'Gulp',
    subtitle : 'Failure!',
    message  : 'Error: <%= error.message %>',
    sound    : 'Bee'
  })(err);

  this.emit('end');
};

gulp.task('watch', function () {
  gulp.watch('../source/less/*.less', {interval : 300}, ['less']);
  livereload.listen();
  gulp.watch(['../source/less/*.less', '../source/css/*.css', '../source/js/*.js', '../*.html']).on('change', livereload.changed);
});

gulp.task('less', function () {
  // gulp.src('../source/less/frontend.less')
  gulp.src('../source/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('../source/css/'));
});


gulp.task('less', function() {
   gulp.src('../source/less/*.less')
      .pipe(less())
      .pipe(gulp.dest('../source/css/'))
      .pipe(livereload());
});