(function(blahblah) {
  var EXCLAMATION_MARK_COUNT = 5

  function shout(string) {
    return string + "!".repeat(EXCLAMATION_MARK_COUNT);
  };

  blahblah.shout = shout;
})(this);

console.log(shout("hi"));



(function(exports) {
  var EXCLAMATION_MARK_COUNT = 5;

  function exclaim(repeat, string) {
    return string + repeat("!", EXCLAMATION_MARK_COUNT);
  };

  exports.exclaim;
})(this);


var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) { privateCounter += val;}
  return {
    increment: function() { changeBy(1);},
    decrement: function() { changeBy(-1); },
    value: function() { return privateCounter; }
        };
  })
();
