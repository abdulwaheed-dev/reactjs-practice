require("dotenv").config();

const express = require("express");
//const path = require("path");
//const ejs = require("ejs");
const mongoose = require("mongoose");
//const Player = require("./models/Player");
//const bodyparser = require("body-parser");
//const User = require("./models/User");
//const bcrypt = require("bcrypt");
const expressSession = require("express-session");
const playerValidateMiddleware = require("./middleware/playerDataValidation");
const authRedirectMiddleware = require("./middleware/authRedirectMiddleware");
const authIsLoggedInMiddleware = require("./middleware/authIsLoggedInMiddleware");
const Auth = require("./controllers/Auth");
const Players = require("./controllers/Players");
const userController = require("./controllers/UserController");

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

global.isLoggedIn = false;

app.get("/", authRedirectMiddleware, Auth.home);
app.get("/about", authRedirectMiddleware, Auth.about);
app.get("/players", authRedirectMiddleware, Players.getPlayers);
app.get("/player/:id", authRedirectMiddleware, Players.getSelectedPlayer);
app.post("/player/create", playerValidateMiddleware, Players.createPlayer);
app.get("/newplayer", authRedirectMiddleware, Players.createPlayerPage);
app.get("/signup", authIsLoggedInMiddleware, Auth.signup);
app.post("/user/create", userController.createUser);
app.post("/authenticate", userController.authenticatUser);
app.get("/login", authIsLoggedInMiddleware, Auth.login);
app.get("/logout", Auth.logout);

app.listen(process.env.PORT, function () {
  console.log("Express listening on Port - " + process.env.PORT);
});
