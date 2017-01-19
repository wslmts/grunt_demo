(function() {
  var bar;

  bar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

}).call(this);

(function() {
  var foo;

  foo = function(x) {
    return x * x;
  };

}).call(this);
