require("dotenv").config();

const express = require("express");
const path = require("path");
const ejs = require("ejs");
const mongoose = require("mongoose");
const Player = require("./models/Player");
//const bodyparser = require("body-parser");
const User = require("./models/User");
const bcrypt = require("bcrypt");
const expressSession = require("express-session");
const playerValidateMiddleware = require("./middleware/playerDataValidation");
const authRedirectMiddleware = require("./middleware/authRedirectMiddleware");
const authIsLoggedInMiddleware = require("./middleware/authIsLoggedInMiddleware");
const { logout } = require("./controllers/Auth");
const Players = require("./controllers/Players");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/players-db");

app.use(express.static("public")); //to access static sources in html, we will add those folders in public folder
app.set("view engine", "ejs");
app.use(
  expressSession({
    secret: process.env.SECRET_KEY,
  })
);
app.use(express.urlencoded()); //for express version > 4.16
//app.use(bodyparser.json()); //for < 4.16

app.get("/", authRedirectMiddleware, function (req, res) {
  res.render("home");
});

app.get("/about", authRedirectMiddleware, function (req, res) {
  res.render("about");
});

app.get("/players", authRedirectMiddleware, Players.getPlayers);

app.get("/player/:id", authRedirectMiddleware, async function (req, res) {
  console.log(req.params.id);
  const player = await Player.findById(req.params.id);
  //console.log("===============================");
  //console.log(player);
  res.render("playerDetails", { player });
});

app.post("/player/create", playerValidateMiddleware, function (req, res) {
  console.log("Data=>", req.body);
  Player.create(req.body, function (err, result) {
    if (!err) {
      return res.redirect("/players");
    }
    console.log(err);
  });
});

app.get("/newPlayer", authRedirectMiddleware, async function (req, res) {
  res.render("newPlayer");
});

app.get("/player/newPlayer", async function (req, res) {
  res.render("newPlayer");
});

app.get("/signup", authIsLoggedInMiddleware, async function (req, res) {
  res.render("signup");
});

app.post("/createUser", function (req, res) {
  console.log("Data=>" + res.body);
  User.create(res.body, function (err, result) {
    if (!err) {
      res.redirect("/login");
    }
    console.log(err);
  });
});

app.post("/authenticate", function (req, res) {
  console.log(res.body);
  const { username, password } = req.body;
  User.findOne({ username: username }, function (err, user) {
    if (!!user) {
      bcrypt.compare(password, user.password, function (err, same) {
        if (same) {
          req.session.uid = user._id;
          return res.redirect("/players");
        }
        res.redirect("/login");
      });
    }
  });
});

app.get("/login", authIsLoggedInMiddleware, async function (req, res) {
  res.render("login");
});

app.get("/logout", logout);

app.listen(process.env.PORT, function () {
  console.log("Express listening on Port - " + process.env.PORT);
});
