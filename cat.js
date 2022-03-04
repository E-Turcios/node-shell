var fs = require('fs');

function catFunc(filename, callback){
  fs.readFile(filename, 'utf8', function(err, data){
    if (err) {
      throw err;
    } else {
    callback(data);
    }
  });
}

module.exports = catFunc;

