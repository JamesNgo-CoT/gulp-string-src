/* Credit: https://stackoverflow.com/questions/23230569/how-do-you-create-a-file-from-a-string-in-gulp */

const stream = require('stream');
const Vinyl = require('vinyl');

/**
 * Creates a new Vinyl from a string.
 * @param {string} filename
 * @param {string} value
 * @returns {Vinyl}
 */
module.exports = function (filename, value = '') {
  const src = stream.Readable({ objectMode: true });

  src._read = function () {
    this.push(new Vinyl({
      path: filename,
      contents: Buffer.from(value, 'utf-8')
    }));

    this.push(null);
  };

  return src;
};
