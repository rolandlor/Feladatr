module.exports = function (grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'style.css': 'style.scss'
                } 
            }
        },
        karma: {  
            unit: {
              options: {
                frameworks: ['jasmine'],
                singleRun: true,
                browsers: ['PhantomJS'],
                files: [
                  'public/components/angular/angular.js',
                  'public/components/angular-mocks/angular-mocks.js',
                  'src/js/**/*.js'
                ]
              }
            }
          }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-karma');
    grunt.registerTask('default', ['sass','karma']);
}



   
    