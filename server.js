//import { lieuDeTournage } from "./lieux-de-tournage-a-paris.json";
const lieuDeTournage = require("./lieux-de-tournage-a-paris");
const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 7000;
const app = express();
app.use(express.json());
let arrayFilter = [];
let arrayFilterForPagination = [];

const testFilter = (req) => {
  let test = lieuDeTournage.features;
  var result = test.filter(function (e) {
    return req.includes(e.properties.ardt_lieu);
  });

  arrayFilter.push(result);
  arrayFilterForPagination.push(result);
};

app.get("/api/macaron", (req, res) => {
  console.log("je suis dans macaron server");
  let min = req.query.min;
  let max = req.query.max;
  if (min === undefined && max === undefined) {
    testFilter(req.query.codePostale);
    arrayFilter = [];
  }
  if (
    (min !== undefined && Number(min) !== 0) ||
    (max !== undefined && Number(max) !== 0)
  ) {
    res.send({
      error: "error",
    });
  }
});

app.get("/api/macaron/pagination", (req, res) => {
  const page = req.query.page;
  const limit = req.query.limit;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const resultPagination = arrayFilterForPagination[0].slice(
    startIndex,
    endIndex
  );
  res.send(resultPagination);
});

app.listen(5000, () => {
  console.log(`server est sur le port  : ${PORT}`);
});
