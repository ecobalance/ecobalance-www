module.exports = function (grunt) {
    "use strict";

    grunt.initConfig({
        copy: {
            build: {
                files: [
                    {
                        expand: true,
                        cwd: "./public",
                        src: ["**"],
                        dest: "./dist/public"
                    },
                    {
                        expand: true,
                        cwd: "./views",
                        src: ["**"],
                        dest: "./dist/views"
                    }
                ]
            }
        },
        ts: {
            app: {
                files: [{
                    src: ["src/**/*.ts", "!src/.baseDir.ts"],
                    dest: "./dist"
                }],
                options: {
                    module: "commonjs",
                    target: "es6",
                    sourceMap: false,
                    rootDir: "src"
                }
            }
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/styles',
                    src: ['*.scss'],
                    dest: 'dist/styles',
                    ext: '.css'
                }]
            }
        },
        watch: {
            ts: {
                files: ["src/**/*.ts"],
                tasks: ["ts"]
            },
            views: {
                files: ["views/**/*.pug"],
                tasks: ["copy"]
            },
            sass: {
                files: ["src/styles/*.scss"],
                tasks: ["sass"]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks("grunt-ts");

    grunt.registerTask("default", [
        "copy",
        "ts",
        "sass"
    ]);

};
