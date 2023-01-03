const path = require("path");

function getMessages(req, res) {
  res.sendFile(path.join(__dirname, "..", "public", "skimountain.jpg"));
  // res.send("<ul><li>Hello Albert Einstein!</li></ul>");
}

function postMessage(req, res) {
  res.send("Updating messages...");
}

module.exports = {
  getMessages,
  postMessage,
};
