
// gulp-concat		//合并文件
// gulp-htmlmin		//html压缩
// gulp-sass		//sass文件编译
// gulp-minify-css	//压缩css
// gulp-obfuscate	//js混淆
// gulp-uglify		//js压缩
// gulp-html-beautify //自定义代码格式化
// gulp-rev			//对文件名加MD5后缀
// gulp-notify		//提示信息
// gulp-webserver   //web server
// gulp-rev-collector	//路径替换
// gulp-plumber		//误处理插件，当出现错误时,防止程序运行终止
// gulp-sourcemaps		//添加映射关系，可以方便调试
// gulp-autoprefixer		//根据浏览器兼容，添加浏览器所需要支持的前缀
// gulp-file-include   //html模块化
// gulp-babel         //编译Es6
// babel-preset-es2015 //Es6转Es5
// gulp-order       //文件顺序设置
//
// gulp-cache         //监控图片改变，替换，进行压缩
// gulp-imagemin      //图片压缩
// gulp-size          //统计文件大小
// npm install

/*
*
*
* 	@*---严禁出现此写法---*@
*
*	const botsrp={s
*		'in':'live2.0+/Content/bootstrap-sass/assets/stylesheets/_bootstrap.scss',
*		'tmp':'tmp/live2.0+/Content/css'
*	}
*
* 	***http://stackoverflow.com/questions/24620629/gulp-sass-error-unhandled-stream-error-in-pipe
*
*
 */

'use strict';
const gulp=require("gulp");							//gulp
const gulpLoadPlugins=require("gulp-load-plugins"); //加载 gulp 插件类库
const browserSync=require("browser-sync").create();			//是浏览器同步工具
const del = require('del');							//删除文件/文件夹
const wiredep = require('wiredep').stream;			//从 bower 同步到 html 中资源引用的插件，有了它引用 js，css 就可以直接自动生成到 html 文件中。
const runSequence = require('run-sequence');		//让gulp任务，可以相互独立，解除任务间的依赖，增强task复用

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

//编译bootstrap-sass
gulp.task('botsass',()=>{
	return gulp.src(['src/Content/scss/**/*.scss','!src/Content/scss/bootstrap-sass/test/**/*'])
	.pipe($.plumber())
	// .pipe($.concat('main.min.css'))		//合并后的文件名
	.pipe($.sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.']
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({browsers: ['> 0.2%', 'last 2 versions','safari 5','Firefox >= 20','ie 8','ie 9','ios 6','android 4']}))
    // .pipe($.minifyCss())					//压缩文件为一行
 	// .pipe($.rev())						//对文件名加MD5后缀
    .pipe(gulp.dest('dist/Content/css/'))
    // .pipe($.rev.manifest())  				//生成一个rev-manifest.json
 	// .pipe(gulp.dest('rev'))             //将 rev-manifest.json 保存到 rev 目录内
    .pipe(reload({stream: true}))
    // .pipe($.notify({message:'编译bootstrap完成!'}))
});


//inculd模板
gulp.task('fileinclude', ()=> {
    return gulp.src('src/Htmls/**/*.html')
    .pipe($.fileInclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe($.htmlBeautify({	//代码格式化
        indent_size: 4,
        indent_char: ' ',
        // 这里是关键，可以让一个标签独占一行
        unformatted:true,
        // 默认情况下，body | head 标签前会有一行空格
        extra_liners: []
    }))
    .pipe(gulp.dest('dist/Htmls'))
    .pipe(reload({stream: true}))
    // .pipe($.notify({message:'html编译完成'}))
});

//编译sass
gulp.task('scss',()=>{
	return gulp.src('src/Content/scss/**/*.scss')
	.pipe($.plumber())
	// .pipe($.concat('main.min.css'))		//合并后的文件名
	.pipe($.sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.']
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({browsers: ['> 0.2%', 'last 2 versions','safari 5','Firefox >= 20','ie 8','ie 9','ios 6','android 4']}))
    // .pipe($.minifyCss())					//压缩文件为一行
 	.pipe($.rev())						//对文件名加MD5后缀
    .pipe(gulp.dest('dist/Content/css/'))
    .pipe($.rev.manifest())  				//生成一个rev-manifest.json
 	.pipe(gulp.dest('rev'))             //将 rev-manifest.json 保存到 rev 目录内
    .pipe(reload({stream: true}))
    // .pipe($.notify({message:'编译scss完成!'}))
})

//bot字体
gulp.task('fonts', () => {
  return gulp.src('src/Content/scss/bootstrap-sass/**/*.{eot,svg,ttf,woff,woff2}')
    .pipe(gulp.dest('dist/Content/css/bootstrap-sass/'));
});


//压缩html
gulp.task('htmls',()=>{
	 const options = {
        removeComments: true,  //清除HTML注释
        collapseWhitespace: true,  //压缩HTML
        collapseBooleanAttributes: true,  //省略布尔属性的值 <input checked="true"/> ==> <input checked />
        removeEmptyAttributes: true,  //删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,  //删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,  //删除<style>和<link>的type="text/css"
        minifyJS: true,  //压缩页面JS
        minifyCSS: true  //压缩页面CSS
    };
	return gulp.src('src/Htmls/**/*.html')
	.pipe($.htmlmin(options))
	.pipe(gulp.dest('dist/Htmls'))
	// .pipe($.notify({message:'html编译完成!'}))
});

//代码格式化
gulp.task('pug', ()=> {
    return gulp.src('dist/Htmls/Zhibo/Main.html')
    .pipe($.htmlBeautify({
        indent_size: 4,
        indent_char: ' ',
        // 这里是关键，可以让一个标签独占一行
        unformatted:true,
        // 默认情况下，body | head 标签前会有一行空格
        extra_liners: []
    }))
    .pipe(gulp.dest('dist/Htmls/Zhibo'))
    .pipe(reload({stream: true}))
    // .pipe($.notify({message:'html格式化完成!'}))
})

//bootstrapjs
gulp.task('botjs', () => {
  return gulp.src('src/Content/scss/bootstrap-sass/assets/javascripts/bootstrap.min.js')
    .pipe($.plumber())
    // .pipe($.babel())
    .pipe(gulp.dest('dist/Content/css/bootstrap-sass/assets/javascripts/'))
    .pipe(reload({stream: true}))
    // .pipe($.notify({message:'botjs编译完成!'}))
});

//js
gulp.task('scripts', () => {
  return gulp.src('src/Scripts/**/*.js')
    .pipe($.plumber())
   // .pipe($.babel({presets: ['es2015']})) //编译ES6
    //.pipe($.babel({presets: ['es2015']})) //编译ES6
    .pipe(gulp.dest('dist/Scripts'))
    .pipe(reload({stream: true}))
    // .pipe($.notify({message:'js编译完成!'}))
});

gulp.task('scriptcopy', () => {
  return gulp.src(['src/Scripts/**/*','!src/Scripts/**/*.js'])
    .pipe($.plumber())
    .pipe(gulp.dest('dist/Scripts'))
    .pipe(reload({stream: true}))
    // .pipe($.notify({message:'js编译完成!'}))
});

//图片处理
gulp.task('images', () => {
  return gulp.src('src/Images/**/*')
    .pipe($.cache($.imagemin()))
    .pipe(gulp.dest('dist/Images'));
});

//删除文件夹
gulp.task('clean', del.bind(null, ['dist']));

// 静态服务器 + 监听 scss/html/js/img 文件
// http://localhost:9000/
// 浏览器实时刷新
gulp.task('server', () => {
  runSequence(['clean'], ['botsass', 'botjs','Contcopy','scriptcopy','scripts','fileinclude','images','fonts'], () => {
    browserSync.init({
      notify: false,
      port: 9000,
      server: {
        baseDir: "./dist",
        routes: {       //路由配置
          '/Content': 'Content',
          '/Images':'Images',
          '/Scripts':'Scripts'
        }
      }
    });

    //此方法是在task回流时函数没有加.pipe(reload({stream: true}))，才使用，否则会卡浏览器
    // gulp.watch([
    //   'src/Htmls/**/*.html',
    //     'src/Images/**/*',
    //     'src/Content/scss/**/*.scss',
    //     'src/Scripts/**/*.js'
    // ]).on('change', reload);

    gulp.watch('src/Htmls/**/*.html',['fileinclude']);
    gulp.watch('src/Content/scss/**/*.scss', ['botsass']);
    gulp.watch('src/Scripts/**/*.js', ['scripts']);
    gulp.watch('src/Images/**/*', ['images']);
    // gulp.watch('bower.json', ['wiredep', 'fonts']);
  });
});

//webserver
// gulp.task('loadpageserver', function() {
//     gulp.src('./src')
//     .pipe($.webserver({
//         open:true,
//         port:9001,
//         livereload: true,
//         directoryListing: true,
//         //path:'www',
//         fallback: 'Jinshi.html'
//     }));
// });

//rev
gulp.task('rev', ()=>{
    gulp.src(['rev/*.json', 'dist/Htmls/**/*.html'])   //- 读取 rev-manifest.json 文件以及需要进行css名替换的文件
        .pipe($.revCollector())                                   //- 执行文件内css名的替换
        .pipe(gulp.dest('dist/Htmls'))                     //- 替换后的文件输出的目录
});

//layer
gulp.task('Contcopy',()=>{
    return gulp.src('src/Content/**/*')
    .pipe($.plumber())
    .pipe(gulp.dest('dist/Content'))
})

//设置文件顺序
// gulp.task('jsorder',()=>){
//   return gulp.src("**/*.js")
//     .pipe($.order([
//       "vendor/js1.js",
//       "vendor/**/*.js",
//       "app/coffee1.js",
//       "app/**/*.js"
//     ]))
//     .pipe($.concat("all.js"))
//     .pipe(gulp.dest("dist/"));
// }



//监听jumpPage文件变化
gulp.task('watchjumpPage',()=>{
    gulp.watch('src/Content/scss/jumpPage/*.scss',['sass']);
})

//单任务
// gulp.task('lrdo',()=>{
//    return gulp.src('src/Content/scss/base/**/*.scss')
//    .pipe($.plumber())
//   // .pipe($.concat('main.min.css'))    //合并后的文件名
//   .pipe($.sass.sync({
//       outputStyle: 'expanded',
//       precision: 10,
//       includePaths: ['.']
//     }).on('error', $.sass.logError))
//     .pipe($.autoprefixer({browsers: ['> 0.2%', 'last 2 versions','safari 5','Firefox >= 20','ie 8','ie 9','ios 6','android 4']}))
//     // .pipe($.minifyCss())         //压缩文件为一行
//   // .pipe($.rev())           //对文件名加MD5后缀
//     .pipe(gulp.dest('dist/Content/css/base/'))
//     // .pipe($.rev.manifest())          //生成一个rev-manifest.json
//   // .pipe(gulp.dest('rev'))             //将 rev-manifest.json 保存到 rev 目录内
//     .pipe(reload({stream: true}))
//     // .pipe($.notify({message:'编译bootstrap完成
// })

//任务集合
gulp.task('build', ['botsass','botjs','scriptcopy','scripts','images','fonts','fileinclude','server'], () => {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});


//默认任务
gulp.task('default', () => {
  runSequence(['clean'],'build')
});
