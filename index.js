if(typeof $ == 'undefined'){
  console.log("include jquery");
  document.write('<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>');
}
var atext = {
  navobj: navigator.language.slice(0,2) || 'en',
  g: function(file, callback, err){
      !callback?callback=function(){}:void(0);!err?err=function(){}:void(0);!file?return 0;void(0);
      $.ajax({
         url:"https://raw.githubusercontent.com/arsenicum32/ars32data/gh-pages/"+atext.navobj+"/" + file + '.json',
         dataType: 'json', // Notice! JSONP <-- P (lowercase)
         success: callback,
         error: err
      });
  },
  data: {},
  getany: function(arr){
    var jsonprofile  =  {};
    for(var i = 0; i < arr.length; i++){
      if(typeof arr[i] === typeof ''){
        atext.g( arr[i] , function(data){
          jsonprofile[ arr[i] ] = data;
          if(i == arr.length - 1) return jsonprofile;
        }, function(err){ console.log(err); });
      }
    }
  },
  fire: function(callback){
    var fin = {};
    for(var n = 0; n< atext.dtjson.length; n++ ){
      atext.g( atext.dtjson[n] , function(data){
        atext.data[ atext.dtjson[n] ] = data;
        fin[ atext.dtjson[n] ] = data;
      }, function(err){ console.log(err); });
    }
    if (callback) callback(fin);
  },
  dtjson: ['about']
}
