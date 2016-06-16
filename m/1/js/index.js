(function() {
  var i, intr;

  i = 0;

  intr = setInterval(function() {
    $('body').append('<p>1</p>');
    if ((i++) % 10 === 0) {
      return $('body').css('background', chance.color());
    }
  }, 10);

}).call(this);