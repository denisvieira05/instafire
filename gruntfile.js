module.exports = function(grunt) {
    grunt.initConfig({
        cssmin: {
            sitecss: {
                files: {
                    'dist/assets/css/styles-1.0.0.min.css': [
                        'lib/bootswatch/paper/bootstrap.css',
                        'lib/animate.css/animate.css',
                        'lib/font-awesome/css/font-awesome.css',
                        'lib/toastr/toastr.css',
                        'lib/ng-img-crop/compile/minified/ng-img-crop.css',
                        'src/assets/styles.css'
                    ]
                }
            }
        },
        uglify: {
            options: {
                compress: true,
                mangle: false
            },
            applib: {
                src: [
                    'lib/jquery/dist/jquery.js',
                    'lib/bootstrap/dist/js/bootstrap.js',
                    'lib/angular/angular.js',
                    'lib/angular-route/angular-route.js',
                    'lib/firebase/firebase.js',
                    'lib/angularfire/dist/angularfire.js',
                    'lib/ngImgCrop/compile/minified/ng-img-crop.js',
                    'lib/toastr/toastr.js',
                    'src/app/app.js',
                    'src/app/config.js',
                    'src/app/routes.js',
                    'src/app/modules/dashboard/DashboardCtrl.js',
                    'src/app/modules/post/PostCtrl.js',
                    'src/app/modules/login/LoginCtrl.js'
                ],
                dest: 'dist/assets/js/scripts-1.0.0.min.js'
            }
        },
        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'lib/font-awesome/fonts',
                    src: '**',
                    dest: 'dist/assets/font',
                    flatten: false,
                }],
                files: [{
                    expand: true,
                    cwd: 'src/assets/images',
                    src: '**',
                    dest: 'dist/assets/images',
                    flatten: false,
                }]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/app/components/header/header.html': 'src/app/components/header/header.html',
                    'dist/app/modules/home/home.html': 'src/app/modules/home/home.html',
                    'dist/app/modules/login/login.html': 'src/app/modules/login/login.html',
                    'dist/app/modules/post/post.html': 'src/app/modules/post/post.html',
                }
            }
        }
    });

    grunt.registerTask("dist", [
        'cssmin',
        'uglify',
        'copy',
        'htmlmin'
    ]);

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
};