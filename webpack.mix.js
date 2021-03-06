let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
    .styles(
        [
            'node_modules/open-sans-all/css/open-sans.css',
            'node_modules/font-awesome/css/font-awesome.css',
            'resources/assets/css/style.css',
        ],
        'public/css/style.css')
    .copy('node_modules/open-sans-all/fonts', 'public/fonts')
    .copy('node_modules/font-awesome/fonts', 'public/fonts')
    .copy('resources/assets/images', 'public/images')
    .webpackConfig({
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.runtime.esm.js'
            }
        }
    })
    .browserSync({
        host: '192.168.10.10',
        proxy: process.env.APP_URL,
        open: false,
        files: [
            'app/**/*.php',
            'resources/views/**/*.php',
            'public/js/**/*.js',
            'public/css/**/*.css'
        ],
        watchOptions: {
            usePolling: true,
            interval: 500
        }
    })
    .options({
        extractVueStyles: 'public/css/vue-style.css'
    })
;
