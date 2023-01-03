const express = require("express");
const path = require("path");

const friendsRouter = require("./routes/friends.router.js");
const messagesRouter = require("./routes/messages.router.js");

const messagesController = require("./controllers/messages.controller");

const app = express();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  //actions go here...
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use("/site", express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use("/", (req, res) => {
  res.render("index", {
    title: "My Friends Are Very Clever",
    caption: "Let's go Skiing!",
  });
});
app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
