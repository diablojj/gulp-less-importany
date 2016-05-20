/*jshint node: true*/
'use strict';

var path = require('path');
var through2 = require('through2');
var gutil = require('gulp-util');

module.exports = function (importText) {

    // less相关函数
    function makeLessImportTransObj(importText) {
        return (through2.obj(
            function (file, enc, done) {
                // 写入import的变量包含文件
                var lessimportText = '\n@import "' + importText + '"; \n';
                file.contents = new Buffer(file.contents + lessimportText);
                this.push(file);
                done();
            }
        ));
    }

  return makeLessImportTransObj(importText);
};
