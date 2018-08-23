'use strict'

let gulp = require('gulp'),
  autoprefixer = require('gulp-autoprefixer'),
  cssnano = require('gulp-cssnano'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  imagemin = require('gulp-imagemin'),
  rename = require('gulp-rename'),
  runSequence = require('run-sequence'),
  nodemon = require('gulp-nodemon'),
  del = require('del'),
  gutil = require('gulp-util')

// Start:prod
gulp.task('start:prod', function () {
  nodemon({
    script: 'server.js',
    env: {
      'NODE_ENV': 'production'
    }
  })
})

// Start
gulp.task('start', function () {
  nodemon({
    script: 'server.js',
    env: {
      'NODE_ENV': 'development'
    }
  })
})

// Styles
gulp.task('styles', function () {
  return gulp.src('public/css/**/*.css')
    .pipe(autoprefixer('last 2 version'))
    .pipe(concat('application.min.css'))
    .pipe(cssnano())
    .pipe(gulp.dest('public/dist'))
})

// Scripts
gulp.task('scripts', function () {
  return gulp.src(['public/js/jquery-2.1.4.min.js', 'public/js/**/*.js', 'public/plugins/**/*.js'])
    .pipe(concat('application.min.js'))
    .pipe(uglify())
    .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()) })
    .pipe(gulp.dest('public/dist'))
})

// Images
gulp.task('images', function () {
  return gulp.src('public/images/**/*')
    .pipe(imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest('public/dist/images'))
})

// Fonts
gulp.task('fonts', function () {
  return gulp.src(['public/css/fonts/*.woff', 'public/css/fonts/*.ttf'])
    .pipe(gulp.dest('public/dist/fonts'))
})

// Clean
gulp.task('clean', function () {
  return del(['public/dist/images', 'public/dist/fonts', 'public/dist'])
})

// Run the project in production mode
gulp.task('prod', function (done) {
  runSequence('clean', ['styles', 'scripts', 'images', 'fonts'], 'start:prod', done)
})

// Run the project in development / default mode
gulp.task('default', function (done) {
  runSequence('clean', 'start', done)
})
