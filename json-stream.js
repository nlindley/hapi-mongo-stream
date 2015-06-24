const Util = require('util');
const Transform = require('stream').Transform;

function JSONStream(options) {
  Transform.call(this, options);
  this.first = true;
  this.push('[')
}

Util.inherits(JSONStream, Transform);

JSONStream.prototype._transform = function(chunk, enc, callback) {
  this.push((this.first ? '' : ',') + JSON.stringify(chunk), enc);
  this.first = false;
  callback();
};

JSONStream.prototype._flush = function(callback) {
  this.push(']');
  callback()
};

module.exports = JSONStream;
