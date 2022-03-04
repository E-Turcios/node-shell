const pwdFunc = () => {
  const wd = process.cwd();
  process.stdout.write(wd)
};

module.exports = pwdFunc;
