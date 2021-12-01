const { dest, series } = require('gulp');
const del = require('del');

const gulpStringSrc = require('./index');

function clean() {
	return del('dist');
}

function test() {
	return gulpStringSrc('test.txt', 'test string')
		.pipe(dest('dist'));
}

module.exports.default = series(clean, test);
