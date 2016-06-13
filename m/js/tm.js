var t = window.location.href.split('/')[window.location.href.split('/').length - 2];
t = parseInt(t);

window.onload = function(){
  setTimeout(function(){
    if(t>1){
      window.location.href = 'http://ars32.gq/m/' + (t -1);
    }
  }, 1000);
}
