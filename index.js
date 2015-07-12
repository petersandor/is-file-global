'use strict';
var path = require('path');
var delimiter = path.delimiter;
var globby = require('globby');

function isFileGlobal(fileName, cb) {
	return globby(process.env.PATH.split(delimiter).map(function(globalPath) {
		return path.join(globalPath, fileName);
	}), cb);
}

module.exports = isFileGlobal;
