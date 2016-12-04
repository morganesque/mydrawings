var fs = require("fs");
var moment = require("moment");
var csv = require("csv");

var values = fs.readFileSync('_data/drawings.csv','utf8');
csv.parse(values,function(err,data)
{
  for (var i = 1; i < data.length; i++) {
    var timet = data[i][3];
    var date = new moment(timet*1000,"x");
    console.log(date);
  }
});

// for (var i = 1; i < 164; i++) {
//   var out = '';
//   out += "---\n";
//   out += "layout: drawing_page\n";
//   out += "number: "+i+"\n";
//   out += "permalink: "+i+"/\n";
//   out += "---\n";
// 
//   var file = 'drawings/'+i+".html";
//
//   fs.writeFileSync(file, out);
// }
