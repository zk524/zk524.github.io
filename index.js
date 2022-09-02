// const rank = require("index.json");
// console.log(rank);
// import fetch from "node-fetch";
const fetch = require("node-fetch");

fetch(".\index.json").then((data) => {
  console.log(data);
});
