// const wd = __dirname;
const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");
const curl = require("./curl");
const date = require("./date");

process.stdout.write("prompt >");

process.stdin.on("data", (data) => {
  const [token, arg] = data.toString().trim().split(" ");

  switch (token) {
    case "pwd":
      pwd(print);
      break;
    case "ls":
      ls(print);
      break;
    case "cat":
      cat(arg, print);
      break;
    case "curl":
      curl(arg, print);
      break;
    case "date":
      date(print);
      break;
    default:
      print("\nInvalid input.");
      break;
  }
});

const print = (output) => {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
};
