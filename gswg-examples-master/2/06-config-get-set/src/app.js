var app = {

  foo: 42,

  bar: function() {

    var bazz = function(n) {
      console.warn(n);
      return n;
    };

    return bazz(7);
  }

};
