'use strict';
var assert = require('assert');
var isFileGlobal = require('./');

it('Should return location of where.exe', function (done) {
	isFileGlobal('where.exe', function(err, path) {
		assert.strictEqual(path[0], 'C:/Windows/system32/where.exe');
		done();
	});
});
