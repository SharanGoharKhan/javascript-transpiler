var gulp = require('gulp')
var filenames = require('gulp-filenames')
var runSequence = require('run-sequence')
var babel = require('gulp-babel')

gulp.task('read-files',function(){
    var list_of_files = filenames.get('javascript')
    for(let i=0;i<list_of_files.length;++i) {
        var full_path_src = 'src/'+list_of_files[i]
        var full_path_dist = 'dist/'+list_of_files[i]
        gulp.src(full_path_src)
            .pipe(babel({
                presets: ['es2015']
            }))
            .pipe(gulp.dest(full_path_dist))
    }
    

})
gulp.task('read-file-names',function(){
    return gulp.src('src/**/*.js')
    .pipe(filenames('javascript'))
})

gulp.task('run-all',[], function(){
    runSequence('read-file-names','read-files')
});