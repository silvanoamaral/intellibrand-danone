const gulp = require('gulp')
const sass = require('gulp-sass')

sass.compiler = require('node-sass')

const scssFiles = './src/scss/style.scss'

gulp.task('default', watch)

gulp.task('sass', compilaSass)

function compilaSass() {
  return gulp
    .src(scssFiles)
    .pipe(sass({ outputStyle: 'compressed' })
    .on('error', sass.logError))
    .pipe(gulp.dest('src/css'))
}

function watch() {
  gulp.watch(scssFiles, compilaSass)
}