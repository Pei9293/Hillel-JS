const {src, dest, series, watch} = require('gulp');
const concat = require('gulp-concat');
const clean = require('gulp-clean');
const uglify = require('gulp-uglify');

function cleanDest() {
    return src('./dest', {read: false, allowEmpty: true}).pipe(clean())
}

function copyJs() {
    return src('./src/**/*.js', {sourcemaps: true})
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(dest('./dest', {sourcemaps: true}))
}

function copyHtml() {
    return src('./src/index.html').pipe(dest('./dest'))
}

function copyCss() {
    return src('./src/style.css').pipe(dest('./dest'))
}

function copyVendorJs() {
    return src([
        './node_modules/jquery/dist/jquery.min.js'
    ])
    .pipe(concat('vendor.js'))
    .pipe(dest('./dest'))
}

function watchFiles() {
    return watch(['./src/**/*.js'], {ignoreInitial: true}, () => copyJs())
}

module.exports.build = series(cleanDest, copyJs, copyHtml, copyCss, copyVendorJs);
module.exports.serve = series(cleanDest, copyJs, copyHtml, copyCss, copyVendorJs, watchFiles);