const pwdFunc = (callback) => {
  const wd = process.cwd();
  callback(wd)
};

module.exports = pwdFunc;
