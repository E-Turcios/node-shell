const fs = require("fs");

function lsFunc() {
  fs.readdir("./", "utf8", (err, files) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write("\n");
      process.stdout.write(files.join("\n"));
    }
  });
}

module.exports = lsFunc;
