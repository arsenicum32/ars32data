if(typeof $ == 'undefined'){
  console.log("include jquery");
  document.write('<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>');
}
var atext = {
  navobj: navigator.language.slice(0,2) || 'en',
  dthelp: {
    gdata: function(file, callback, err){
      $.ajax({
         url:"https://raw.githubusercontent.com/arsenicum32/ars32data/gh-pages/"+atext.navobj+"/" + file + '.json',
         dataType: 'json', // Notice! JSONP <-- P (lowercase)
         success: callback,
         error: err
      });
    }
  },
  data: {},
  fire: function(callback){
    for(var n in atext.dtjson){
      atext.dthelp.gdata( atext.dtjson[n] , function(data){ atext.data[ atext.dtjson[n] ] = data }, function(err){ console.log(err); });
    }
    if (callback) callback(atext.data);
  },
  dtjson: ['about']
}
