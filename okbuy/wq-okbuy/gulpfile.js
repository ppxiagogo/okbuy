var gulp = require('gulp');//引入gulp插件  创建gulp对象
var connect=require('gulp-connect');//引入自动刷新插件
var sass = require('gulp-sass');

//1.es6转es5
//安装如下插件
//gulp-babel
//gulp-preset-es2015
//babel-core
/*gulp.task("babeljs", function () {
    gulp.src("js/index.js")  
    .pipe(babel({
     	presets:['es2015']
    }))
    .pipe(gulp.dest("dist/"));  
 });  
gulp.task("watchjs",function(){
    gulp.watch('js/index.js',function(){
    	gulp.run('babeljs');
    });
});*/




//2.自动刷新
//安装如下插件
//gulp-connect
gulp.task('connect',function(){//新建一个任务
	connect.server({//配置连接服务器
		port:8888,
		livereload:true//自动刷新
	});
});

gulp.task('html',function(){
	gulp.src(['details.html','css/*.css','js/index.js'])//引入的文件路径
	.pipe(connect.reload());//自动刷新的方法
});
gulp.task('runsass',function(){
	gulp.src('sass/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('css/'));
})

gulp.task('watch',function(){//监听
	gulp.watch(['details.html','css/*.css','js/index.js',],['html','runsass']);
});


//执行的任务
gulp.task('default',['connect','watch']);
