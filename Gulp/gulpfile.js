import gulp from "gulp";

import {deleteAsync} from "del";
import miniHTML from  "gulp-htmlmin";
import concat from "gulp-concat";
import stripDebug from "gulp-strip-debug"
import uglify from "gulp-uglify";


const src = "./src";
const dest = "./dist";

const htmlPath = `${src}/**/*.html`
const scriptPath = [
    "src/scripts/entity.js",
    "src/scripts/service.js",
    "src/scripts/index.js",
    "src/scripts/form-create-order.js",

]
const reset = () => {
    return deleteAsync(dest)
}
const copy = () => {
    return gulp.src([
        `${src}/**/*.*`,
        `!${htmlPath}`,
        `!${scriptPath}`
    ])
        .pipe(gulp.dest(dest))
};
const html = () => {
    return gulp.src(htmlPath)
        .pipe(miniHTML({ collapseWhitespace: true }))
        .pipe(gulp.dest(dest))
}

const watchers = () => {
    gulp.watch(htmlPath, html);
    gulp.watch([
        `${src}/**/*.*`,
        `!${htmlPath}`,
        `!${scriptPath}`
    ], copy)
};
const scripts = () => {
    return gulp.src(scriptPath)
        .pipe(stripDebug())
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(gulp.dest(dest))
};

const launch = gulp.series(reset, copy, html, scripts, watchers)

gulp.task('default', launch)