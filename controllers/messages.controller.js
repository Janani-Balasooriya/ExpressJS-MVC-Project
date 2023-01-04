const path = require("path");

function getMessages(req, res) {
  res.render("messages", {
    title: "Messages to my Friends!",
    friend: "Elon Musk",
  });
  // res.sendFile(
  //   path.join(__dirname, "..", "public", "images", "skimountain.jpg")
  // );
  // res.send("<ul><li>Hello Albert Einstein!</li></ul>");
}

function postMessage(req, res) {
  res.send("Updating messages...");
}

module.exports = {
  getMessages,
  postMessage,
};
