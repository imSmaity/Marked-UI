const {src,dest,watch,series}=require('gulp');
const sass=require('gulp-sass')(require('sass'));

function building(){
    return src('marked/**/*.scss')
        .pipe(sass())
        .pipe(dest('css'))
}

function watching(){
    watch(['marked/**/*.scss'],building);
}

exports.default= series(building,watching)
