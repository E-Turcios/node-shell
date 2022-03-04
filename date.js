function date(callback) {
  let date_obj = new Date(Date.now());
  let day = date_obj.getDate().toString();
  let month = date_obj.getMonth() + 1;
  let year = date_obj.getFullYear().toString();

  callback(`${month}/${day}/${year}`);
}

module.exports = date;
