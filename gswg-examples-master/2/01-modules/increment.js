
var add = require('./math').add;

exports.increment = function(b) {
  return add(b, 1);
};
exports.reduce = function(b) {
    return  require('./math').minus(6, 1);
};