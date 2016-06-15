$('a,button').on('mouseover', function(){
  $(this).remove();
})

$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
     //var template = $('#rec' + chance.integer({min: 0, max: 12}) ).html();
     var t = document.querySelector( '#rec' + chance.integer({min: 0, max: 12}) );
     t.content.querySelector('#img') ? t.content.querySelector('#img').src = 'http://lorempixel.com/'+chance.integer({min: 1200, max: 1800})+'/'+chance.integer({min: 1200, max: 1800})+'/' : void(0);
     var clone = document.importNode(t.content, true);
     document.body.appendChild(clone);
   }
});

// $(window).scroll(function() {
//    if($(window).scrollTop() + $(window).height() == $(document).height()) {
//        $('body').append(fr);
//    }
// });


var fr = "<div id='rec6233594' class='r' style=' ' data-animationappear='off' data-record-type='46'   >\
<div class='t-cover' id='recorddiv6233594' bgimgfield='img' style='height:100vh; background-image:-webkit-linear-gradient(top, "+chance.color()+", "+chance.color()+"); background-image:-moz-linear-gradient(top, #ccc, #777); background-image:-o-linear-gradient(top, #ccc, #777); background-image:-ms-linear-gradient(top, #ccc, #777); background-image:linear-gradient(top, #ccc, #777); ' >\
	<div class='t-cover__carrier' id='coverCarry6233594' data-content-cover-id='6233594'  data-content-cover-bg='images/741e9d48-e869-4690-95ad-ac2733c1f001__photo142264080599818a4dd89bec2.jpg' data-content-cover-height='100vh' data-content-cover-parallax='fixed'      style='background-image:url('images/741e9d48-e869-4690-95ad-ac2733c1f001__photo142264080599818a4dd89bec2.jpg');height:100vh; '></div>\
    <div class='t-cover__filter' style='height:100vh;background-image: -moz-linear-gradient(top, rgba(0,0,0,0.40), rgba(0,0,0,0.40));background-image: -webkit-linear-gradient(top, rgba(0,0,0,0.40), rgba(0,0,0,0.40));background-image: -o-linear-gradient(top, rgba(0,0,0,0.40), rgba(0,0,0,0.40));background-image: -ms-linear-gradient(top, rgba(0,0,0,0.40), rgba(0,0,0,0.40));background-image: linear-gradient(top, rgba(0,0,0,0.40), rgba(0,0,0,0.40));filter: progid:DXImageTransform.Microsoft.gradient(startColorStr='#99000000', endColorstr='#99000000');'></div>\
    <div class='t-container'>\
        <div class='t-cover__wrapper t-valign_middle' style='height:100vh;'>\
            <div class='t032'>\
            <div class='t032__wrapper' data-hook-content='covercontent'>\
                <h1 class='t032__title t-title t-title_md' field='title'>всё будет фонтаном</h1>\
                <div class='t-row'>\
                    <div class='t-col t-col_2 t-prefix_5'>\
                        <div class='t032__line' ></div>\
                    </div>\
                </div>\
                <div class='t-row'>\
                    <div class='t-col t-col_10 t-prefix_1'>\
                        <div class='t032__descr t-descr t-descr_lg' field='descr'>Getting things done is a process, demands accountability, and has clear goals. Follow through is the most valuable asset to any organization. Successful teams ask questions, evaluate reality, and navigate toward specific solutions. Action implies taking responsibility for results.</div>\
                    </div>\
                </div>\
                <span class='space'></span>\
            </div>\
            </div>\
        </div>\
    </div>\
</div>\
</div>";
