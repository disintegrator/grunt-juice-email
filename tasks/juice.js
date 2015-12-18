/*
 * grunt-juice-email
 * https://github.com/disintegrator/grunt-juice-email
 *
 * Copyright (c) 2013 George Haidar
 * Licensed under the MIT license.
 */

'use strict';
var juice = require('juice');

module.exports = function(grunt) {

  grunt.registerMultiTask('juice',
      'Inline stylesheets into email HTML templates using Automattic\'s Juice',
      function() {
        var options = this.options({}),
            done = this.async(),
            jobs = [],
            juiceGlobals = options.globals || {};

        Object.keys(juiceGlobals).forEach(function(key) {
          juice[key] = juiceGlobals[key]
        })

        // Iterate over all specified file groups.
        this.files.forEach(function(f) {
          // Concat specified files.
          var src = f.src.filter(function(filepath) {
            // Warn on and remove invalid source files (if nonull was set).
            if (!grunt.file.exists(filepath)) {
              grunt.log.warn('Source file "' + filepath + '" not found.');
              return false;
            }
            return true;
          }).forEach(function(filepath) {
            jobs.push(function(callback) {
              juice.juiceFile(filepath, options, function(err, html) {
                if (err) {
                  callback(err);
                  grunt.warn(err, 3);
                }
                else {
                  grunt.file.write(f.dest, html);
                  grunt.log.writeln('File "' + f.dest + '" created.');
                  callback();
                }
              });
            });
          });
        });

        grunt.util.async.series(jobs, done);
      });
};
