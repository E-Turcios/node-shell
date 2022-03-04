var fs = require('fs');

function catFunc(filename){
  fs.readFile(filename, 'utf8', function(err, data){
    if (err) {
      throw err;
    } else {
    process.stdout.write(data);
    process.stdout.write("\nprompt > ");
    }
  });
}

module.exports = catFunc;

