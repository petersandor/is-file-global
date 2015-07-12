'use strict';
var assert = require('assert');
var isFileGlobal = require('./');

// describe('When searching for where.exe', function() {
// 	it('does return location', function(done) {
// 		isFileGlobal('where.exe', function(err, path) {
// 			assert(Boolean(path[0]));
// 			done();
// 		});
// 	});
// });

describe('When searching for non-existing file', function() {
	it('returns undefined', function(done) {
		isFileGlobal('what.exe', function(err, path) {
			assert(!Boolean(path[0]));
			done();
		});
	});
});
