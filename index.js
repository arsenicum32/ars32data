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
  getany: function(arr){
    var jsonprofile  =  {};
    for(var i = 0; i < arr.length; i++){
      if(typeof arr[i] === typeof ''){
        atext.dthelp.gdata( arr[i] , function(data){
          jsonprofile[ arr[i] ] = data;
          if(i == arr.length - 1) return jsonprofile;
        }, function(err){ console.log(err); });
      }
    }
  },
  fire: function(callback){
    var fin = {};
    for(var n = 0; n< atext.dtjson.length; n++ ){
      atext.dthelp.gdata( atext.dtjson[n] , function(data){
        atext.data[ atext.dtjson[n] ] = data;
        fin[ atext.dtjson[n] ] = data;
        if( n === atext.dtjson.length -1 && callback) callback(fin);
      }, function(err){ console.log(err); });
    }
  },
  dtjson: ['about','test']
}
