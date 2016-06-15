$('a,button').on('mouseover', function(){
  $(this).remove();
})

var SUPERMOVE = 0;

setTimeout(function(){
  setInterval(function(){
     SUPERMOVE ? SUPERMOVE -- : alert('Ты пока в нуле...');
  }, 100);
}, 3000)


$(window).scroll(function() {
  SUPERMOVE++;
  console.log(SUPERMOVE);
  if(SUPERMOVE==50) alert('Оддда быстрее')
  if(SUPERMOVE==100) alert('ГОсподи детка продолжай не останавливайся...')
  if(SUPERMOVE==120) prompt('Если сможешь пройти этот этап Тебя ждёт вкусняшка :)')
  if(SUPERMOVE==150) window.location.href = 'http://ars32.gq/m/10';
   if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
     //var template = ; // feshkfshdkj

     var endl = $('#rec' + chance.integer({min: 0, max: 12}) ).html().toString();
     //// chance.pickone(mes)
     $('body').append( endl.replace(/feshkfshdkj/g, chance.pickone(mes)) );
   }
});

// $(window).scroll(function() {
//    if($(window).scrollTop() + $(window).height() == $(document).height()) {
//        $('body').append(fr);
//    }
// });
