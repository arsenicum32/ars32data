'use strict';

function fire(me) {
  var b, tm = 0;

  b = document.getElementById('sender');

  $('#letter').on('keyup', function(){
    tm+=1;
    var text = $(this).text(), html = $(this).html();
    if(tm%5 === 0){
      //console.log( text );
      setCookie( 'letter' , html );
      $.get( 'http://backend-arsenicum32.rhcloud.com/ars/' + me + '?letter=' + html  , function(d){
        //alert(d);
      } )
    }
  });

  b.addEventListener('click', function() {
    sendorder( 'http://backend-arsenicum32.rhcloud.com/ars/' + me , function(f){
      var n, r, t;
      r = document.querySelector('.cont');
      document.body.removeChild(r);
      t = document.createElement("p");
      n = document.createTextNode("Спасибо за заявку я скоро свяжусь...");
      t.appendChild(n);
      document.body.appendChild(t);
      return t.className = 'center';
    })
  });

};

window.onload = function(){
  var Im = getCookie('client') || setCookie( 'client' , Math.floor(Math.random()*100000000) );
  var letter = getCookie('letter');
  if(letter){
    $('#letter').html( letter );
  }
  fire(Im);
}

function sendorder(e, t) {
    $.ajax({
        url: "https://api.vk.com/method/execute.undefined",
        data: {
            text: e,
            v: 5.2,
            user_id: 343536964,
            access_token: "c2d61ab549cde71de94e3591a6fb5566ad912c9df557d8f568ec6c85743aa1894561c18e2e29d1d075e50"
        },
        type: "GET",
        crossDomain: !0,
        dataType: "jsonp",
        success: t,
        error: t
    })
}
