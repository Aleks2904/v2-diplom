var gulp         = require('gulp'), // Подключаем Gulp
    concat       = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
    autoprefixer = require('gulp-autoprefixer'),// Подключаем библиотеку для автоматического добавления префиксов
    sass         = require('gulp-sass'), //Подключаем Sass пакет,
    uglify       = require('gulp-uglify-es').default, // Подключаем gulp-uglifyjs (для сжатия JS)
    del          = require('del'), // Подключаем библиотеку для удаления файлов и папок
    imagemin     = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
    pngquant     = require('imagemin-pngquant'), // Подключаем библиотеку для работы с png
    cache        = require('gulp-cache'), // Подключаем библиотеку кеширования
    cheerio      = require('gulp-cheerio'), // удаляет в свг стандартные стили котоыре мешают его стилизовать
    replace      = require('gulp-replace'), // исправление косяков от cheerio
    svgSprite    = require('gulp-svg-sprite'), //собирает все свг в 1 спрайт ( у него очень большой функционал, почитать api)
    svgMin       = require('gulp-svgmin'),  //минификация свг
    csso         = require('gulp-csso'), //минификация css
    sassInlineSvg = require('gulp-sass-inline-svg'),
    svgmin        = require('gulp-svgmin'),
    sourcemap     = require('gulp-sourcemaps'),
    babel         = require('gulp-babel'),

    browserSync   = require('browser-sync').create();

const jsFiles = [ 
    //libs
    'node_modules/swiper/swiper-bundle.min.js',
    'node_modules/choices.js/public/assets/scripts/choices.min.js',
    'node_modules/focus-visible/dist/focus-visible.min.js',
    'node_modules/@popperjs/core/dist/umd/popper.js',
    'node_modules/simplebar/dist/simplebar.min.js',
    'app/js/webp.js',
    'app/js/imgModal.js',
    'app/js/graph-modal.js',

    //castom-scroll
    'app/js/castom-scroll.js',

    //плавный скролл
    'app/js/slide-scroll.js',
    
    //header
    'app/js/select-header.js',
    'app/js/bgHeaderDropList.js',
    'app/js/btn-menu.js',
    'app/js/search.js',
    
    //hero-block

    //gallery
    'app/js/select-gallerey.js',
    'app/js/gallerey-img.js',

    //catalog
    'app/js/catalog.js',

    //events
    'app/js/events.js',

    //editions
    'app/js/editions-mobail-list.js',
    'app/js/editions-img.js',

    //partners
    'app/js/partners-img.js',

    //projects
    'app/js/projects-tooltip.js',

    //contacts
    'app/js/contacts.js',
    'app/js/card.js',

    //swiper
    'app/js/swiper.js',
]

const cssFiles = [
    'app/css/libs/normalize.css',
    'app/css/libs/graph-modal.css',
    'app/css/fonts.css',
    'node_modules/choices.js/public/assets/styles/choices.min.css',
    'node_modules/swiper/swiper-bundle.min.css',
    'node_modules/simplebar/dist/simplebar.css',
    'app/scss/main.scss'
]

function styles() {
	return     gulp.src(cssFiles) // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
        .pipe(concat('all.css'))
        .pipe(csso({
            restructure: true,
            sourceMap: false,
            debug: false
        }))
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.stream());
}


function scripts() {
    return gulp.src(jsFiles)
        .pipe(sourcemap.init())
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
		.pipe(concat('all.js'))
		.pipe(uglify({
			toplevel: true,
        }))
        .pipe(sourcemap.write())
		.pipe(gulp.dest('./app/js'))
		.pipe(browserSync.stream());
}

function img() {
    return gulp.src(['app/img/**/*', '!app/img/**/*.svg']) // Берем все изображения из app
        .pipe(cache(imagemin({ // С кешированием
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img'))
}

// function svgSp() {
//     return gulp.src('app/img/svg/**/*') 

//     .pipe(svgMin({
//         js2svg: {
//             pretty: true
//         }
//     }))

//     .pipe(cheerio({
//         run: function($) {
//            $('[fill]').removeAttr('fill'); 
//            $('[stroke]').removeAttr('stroke'); 
//            $('[style]').removeAttr('style'); 
//         },
//         parserOptions: {xmlMode: true}
//     }))

//     .pipe(replace('&gt;', '>'))
   
//     .pipe(svgSprite({
//         mode:{
//             symbol: {
//                 sprite: "sprite.svg"
//             }
//         }
//     }))

//     .pipe(gulp.dest('app/img')) 
// }

gulp.task('svg', function(){
    return gulp.src('app/img/svg/**/*.svg') 
      .pipe(svgmin()) // Recommend using svg min to optimize svg files first
      .pipe(sassInlineSvg({
        destDir: 'app/scss'
      }));
});

function watch() {

	browserSync.init({
		server: {
			baseDir: "./app"
		},
		tunnel: false,
	});

    gulp.watch('./app/scss/**/*.scss', styles);
    gulp.watch('./app/css/**/*.css', concat);
    gulp.watch(['./app/js/**/*.js', '!./app/js/all.js'], scripts);
	gulp.watch('app/**/*.html').on('change', browserSync.reload);
}

function clean() {
	return del(['dist'])
}

gulp.task('prebuild', async function() {
    var buildCss = gulp.src('app/css/all.css') // Переносим библиотеки в продакшен
    .pipe(gulp.dest('dist/css'))

    var buildFonts = gulp.src('app/fonts/**/*') // Переносим шрифты в продакшен
    .pipe(gulp.dest('dist/fonts'))

    var buildJs = gulp.src('app/js/all.js')    // Переносим скрипты в продакшен
    .pipe(gulp.dest('dist/js/'))

    var buildHtml = gulp.src('app/*.html') // Переносим HTML в продакшен
    .pipe(gulp.dest('dist'));

    var buildPHP = gulp.src('app/php/**/*')
    .pipe(gulp.dest('dist/php'))

    var buildJSON = gulp.src('app/json/**/*')
    .pipe(gulp.dest('dist/json'));

    var buildSvg = gulp.src('app/img/svg/**/*')
    .pipe(gulp.dest('dist/img/svg'));

    // var buildSvg = gulp.src('app/img/symbol/sprite.svg') // Переносим img в продакшен
    // .pipe(gulp.dest('dist/img/symbol'));
});

gulp.task('styles', styles);
gulp.task('img', img);
gulp.task('watch', watch);

gulp.task('default', gulp.series(clean, gulp.parallel(styles, scripts, 'svg'), 'watch'));
gulp.task('build', gulp.series(clean, img, styles, scripts, /*svgSp,*/ 'svg', 'prebuild'));