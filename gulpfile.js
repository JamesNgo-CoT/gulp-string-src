const { dest, series } = require('gulp');
const del = require('del');

const stringSrc = require('./index');

function clean() {
	return del('dist');
}

function test() {
	return stringSrc('test.txt', 'test string')
		.pipe(dest('dist'));
}

module.exports.default = series(clean, test);
