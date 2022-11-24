//module is present in global object
//console.log(module);
//we will use exports that is present in module
//-----------------------------------------------
//3-types of module
//1-default, node ja pahnja modules.
//2-third-party modules, jeki biyo kehn thahy rakhya ahin..
//3-custom, jeki asan pan thahyun, pahnjy hisab san..
//-------------------------------------------------------
// const obj = require("./lib");
// console.log(obj);
// obj.greet();
//------------------------------------------------------
// const func = require("./lib");
// console.log(func);
//------------------------------------------------------
//console.log(process);
//console.log(process.title);
//console.log(process.pid);
//console.log(process.argv);
//console.log(process.argv[0]); //file in which the file runs
//console.log(process.argv[1]); //file which will runs
//console.log(process.argv[2]); //array in which there are arguments
//console.log(process.argv.slice(2)); //will give all arguments
//------------------------------------------------------
//require("dotenv").config;
// console.log(process.env.PORT);
//------------------------------------------

//example
// require("dotenv").config();
// console.log(process.env.PORT);

//example
// const qs = require("querystring");
// const url = "https://www.helloworld.com?msg=hello+world";
// const person = {
//   name: "Waheed",
//   age: 21,
//   gender: "male",
// };
// const str = qs.stringify(person);
// console.log(str);
// console.log(qs.parse(str));
//console.log(url.substring(url.indexOf("?")));
// const subStr = url.substring(url.indexOf("?") + 1);
// console.log(qs.parse(subStr));
//--------------------------------------------------------------------
require("dotenv").config();
const http = require("http");
const fs = require("fs");
//const aboutPage = fs.readFileSync("about.html");
// const server = http.createServer(function (req, res) {
//   //console.log(req);
//   if (req.url === "/products") {
//     return res.end("Products");
//   }
//   if (req.url === "/about") {
//     return res.end(aboutPage);
//   }
//   if (req.url === "/aboutt") {
//     res.write("Hello");
//     return res.end();
//   }

//   res.end("Not Found");
// });

// server.listen(process.env.PORT, function () {
//   console.log("server is listening at " + process.env.PORT);
// });

//configuration by convention
//convention by configuration
//nest.jsp
//nextjs
//expressjs
//----------------------------
//study them --- write,send,end,json
//-----------------------------
//study about profilers in react
//rendering-cost
//gives details about rendering of componensts, analysis
//------------------------------
//e chart js library in react, study and use it in react project..
//explore it
//--------------------------------------
//working with Express JS
const express = require("express");
const path = require("path");
const app = express();
const ejs = require("ejs");
const mongoose = require("mongoose");
//===================================
mongoose.connect("mongodb://127.0.0.1/27017/db-name", {
  useNewUrlParser: true,
});
//==========================================
//middleware
//mvc == middleware , views , controllers == mvc model
// we use middleware here, either our own made middleware or thirdparty middleware..
app.use(express.static("public")); //to access static sources in html, we will add those folders in public folder
app.set("view engine", "ejs");
//----------------------------------------
//template engines = for server side rendering..
// namely: ejs and pug
app.get("/home", function (req, res) {
  //res.send({ name: "waheed" });
  //res.json({ name: "waheed" });
  //res.sendFile(path.resolve(__dirname, "about.html"));
  res.render("home", { name: "Waheed" });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.get("/products", function (req, res) {
  const products = ["Apple", "Samsung", "Oppo", "Vivo", "Sony"];
  res.render("products", { products });
});

//mongodb , schemaless db, collections, documents

app.listen(process.env.PORT, function () {
  console.log("Express listening on Port - " + process.env.PORT);
});

//mongodb installation
//mongodb aggregation //important to study, very useful
