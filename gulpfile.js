const gulp = require('gulp');
const del = require('del');

const gulpStringSrc = require('./index');

function clean() {
	return del('dist');
}

function test1() {
	return gulpStringSrc('test1.txt', 'test string')
		.pipe(gulp.dest('dist'));
}

function test2() {
	return gulpStringSrc('test2.json', { test: 'test string' })
		.pipe(gulp.dest('dist'));
}

const test = gulp.parallel(test1, test2);

module.exports.test = gulp.series(clean, test);
