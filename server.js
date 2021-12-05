//import { lieuDeTournage } from "./lieux-de-tournage-a-paris.json";
const lieuDeTournage = require("./lieux-de-tournage-a-paris");
const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 7000;
const app = express();
app.use(express.json());
let arrayFilter = [];

const testFilter = (req) => {
  let test = lieuDeTournage.features;
  var result = test.filter(function (e) {
    return req.includes(e.properties.ardt_lieu);
  });

  arrayFilter.push(result);
};

app.get("/api/macaron", (req, res) => {
  // console.log(req.query.codePostale);
  let min = req.query.min;
  let max = req.query.max;
  if (min === undefined && max === undefined) {
    console.log("je suis la");
    testFilter(req.query.codePostale);
    res.send({
      msg: arrayFilter,
    });
    arrayFilter = [];
  }
  if (
    (min !== undefined && Number(min) !== 0) ||
    (max !== undefined && Number(max) !== 0)
  ) {
    console.log("je suis la error");
    res.send({
      error: "error",
    });
  }
});

app.listen(5000, () => {
  console.log(`server est sur le port  : ${PORT}`);
});
