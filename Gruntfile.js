/*global __dirname */
module.exports = function (grunt) {
  'use strict';

  // loads grunt tasks, loads configs from ./grunt, initializes config i.e. grunt.config.init(loadedConfigs)
  require('load-grunt-config')(grunt, {
    postProcess: function (config) {
      config.pkg = grunt.file.readJSON('package.json');
      config.projectRoot = __dirname;
      config.build.target = grunt.option('target') || config.build.target;
    }
  });

  var dump = function (thing) {
    if (typeof thing === 'object') {
      thing = JSON.stringify(thing, null, 2);
    }
    console.log(thing);
  };

  grunt.registerTask('dump-config', function (key, expand) {
    var value = grunt.config.get(key);
    if (expand) {
      value = grunt.file.expand(value);
    }
    dump(value);
  });

  /**
   * Alias which runs all code quality tasks
   * - jshint
   * - jscs
   *
   */
  grunt.registerTask('code-quality', ['jshint', 'jscs']);

  grunt.registerTask('test', function () {
    try {
      grunt.task.run('karma:unit');
    } catch (e) {
      grunt.log.error(e.message);
    }
  });

  grunt.registerTask('chrome-app-manifest', function () {
    var manifestJSON = grunt.config.get('chrome-app-manifest.options.manifest');
    var manifestDest = grunt.config.get('chrome-app-manifest.options.dest');
    grunt.file.write(manifestDest, JSON.stringify(manifestJSON));
  });

  grunt.registerTask('build', function () {
    var buildTarget = grunt.config.get('build.target');
    grunt.log.ok('Build. Target:' + buildTarget);

    var tasks = [
      'clean:temp',
      'clean:dest',
      'code-quality',
      'test',
      'chrome-app-manifest'
    ];

    //TODO move target specific tasks list to build.js grunt config
    if (buildTarget === 'dev') {
      tasks.push('symlink:app');
      tasks.push('symlink:bower_components');
    }

    tasks.push('sass:' + buildTarget);

    grunt.task.run(tasks);
  });

  grunt.registerTask('serve', function () {
    var buildTarget = grunt.config.get('build.target');

    var tasks = [
      'build:' + buildTarget,
      'connect:serve',
      'watch'
    ];


    grunt.task.run(tasks);
  });

  grunt.registerTask('default', function () {
    var buildTarget = grunt.config.get('build.target');

    var tasks = [
      'build:' + buildTarget
    ];

    grunt.task.run(tasks);
  });


};
