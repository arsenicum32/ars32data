$.ajax({
     url:"https://raw.githubusercontent.com/arsenicum32/ars32data/gh-pages/"+(navigator.language.slice(0,2) || 'en')+"/about.json",
     dataType: 'json', // Notice! JSONP <-- P (lowercase)
     success:function(json){
         $('h1').text(json.h1);
         $('p').text(json.p);
     },
     error:function(){
         $('h1').text('sww');
     }      
});