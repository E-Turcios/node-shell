const request = require("request");

function requestHTTP(url, callback) {
  request("http://" + url, function (error, response, body) {
    console.error("error:", error); // Print the error if one occurred
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    callback("body:"+ body); // Print the HTML for the  page.
  });
}

module.exports = requestHTTP;
