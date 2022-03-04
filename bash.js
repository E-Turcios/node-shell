// const wd = __dirname;
const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");

process.stdout.write("prompt >");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim().split(' ');
  const token = cmd[0];

  switch(token)
  {
    case "pwd":
      pwd();
      break;
    case "ls":
      ls();
      break;
    case "cat":
      cat(cmd[1]);
      break;
    default:
      process.stdout.write("\nInvalid input.");
      break;
  }

  process.stdout.write("\nprompt > ");

});
