const lieuDeTournage = require("./lieux-de-tournage-a-paris");
const express = require("express");
const path = require("path");
require("dotenv").config();
const PORT = process.env.PORT || 7000;
const app = express();
if (process.env.NODE_ENV === "production") {
  app.use(express.static("./Front/build"));
}
app.use(express.json());
let arrayFilter = [];
let arrayFilterForPagination = [];

const Filter = (req) => {
  let lieu = lieuDeTournage.features;
  let result = lieu.filter(function (e) {
    return req.includes(e.properties.ardt_lieu);
  });
  arrayFilter.push(result);
  if (arrayFilterForPagination.length) {
    arrayFilterForPagination = [];
    arrayFilterForPagination.push(result);
  } else {
    arrayFilterForPagination.push(result);
  }
};

app.get("/api/macaron", (req, res) => {
  let min = req.query.min;
  let max = req.query.max;
  if (min === undefined && max === undefined) {
    Filter(req.query.codePostale);
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

app.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, "./Front/build/index.html"));
});

app.listen(5000, () => {
  console.log(`server est sur le port  : ${PORT}`);
});
