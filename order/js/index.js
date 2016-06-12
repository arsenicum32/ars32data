(function() {
  var b;

  b = document.getElementById('sender');

  b.addEventListener('click', function() {
    var n, r, t;
    r = document.querySelector('.cont');
    document.body.removeChild(r);
    t = document.createElement("p");
    n = document.createTextNode("Спасибо за заявку я скоро свяжусь...");
    t.appendChild(n);
    document.body.appendChild(t);
    return t.className = 'center';
  });

}).call(this);