// const gulp = require("gulp");
// const webpackConfig = require("./webpack.config.js");
// const webpack = require("webpack-stream");
// const browserSync = require("browser-sync");
// const notify = require("gulp-notify");
// const plumber  = require("gulp-plumber");

import gulp from 'gulp';
import webpackConfig from './webpack.config.js';
import webpack from 'webpack-stream';
import browserSync from 'browser-sync';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';

const server = browserSync.create();

const paths = {
  scripts: {
    src: 'src/js/app.js',
    dest: 'dist/js/'
  }
}


function scripts(){
  return gulp.src(paths.scripts.src)
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(paths.scripts.dest));
}

function serve(done){
  server.init({
    server: {
      baseDir: './',
      index: "index.html"
    }
  })
  done();
}
function reload(done){
  server.reload();
  done();
}

const watch = () => gulp.watch(paths.scripts.src, gulp.series(scripts, reload));

const dev = gulp.series(scripts, serve, watch);

export default dev;




// // gulpタスクの作成
// gulp.task('build', function(){
//   gulp.src('src/js/app.js')
//     .pipe(plumber({
//       errorHandler: notify.onError("Error: <%= error.message %>")
//     }))
//     .pipe(webpack(webpackConfig))
//     .pipe(gulp.dest('dist/js/'));
// });
// gulp.task('browser-sync', function() {
//   browserSync.init({
//     server: {
//       baseDir: "./", // 対象ディレクトリ
//       index: "index.html" //indexファイル名
//     }
//   });
// });
// gulp.task('bs-reload', function () {
//   browserSync.reload();
// });

// // Gulpを使ったファイルの監視
// gulp.task('default', ['build', 'browser-sync'], function(){
//   gulp.watch('./src/*/*.js', ['build']);
//   gulp.watch('./src/*/*/*.js', ['build']);
//   gulp.watch("./*.html", ['bs-reload']);
//   gulp.watch("./dist/*/*.+(js|css)", ['bs-reload']);
//   gulp.watch("./dist/*/*/*.+(js|css)", ['bs-reload']);
// });

