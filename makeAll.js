var fs = require("fs");

for (var i = 1; i < 164; i++) {
  var out = '';
  out += "---\n";
  out += "layout: drawing_page\n";
  out += "number: "+i+"\n";
  out += "permalink: "+i+"/\n";
  out += "---\n";

  var file = 'drawings/'+i+".html";

  fs.writeFileSync(file, out);
}
