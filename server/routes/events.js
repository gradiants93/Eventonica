var express = require("express");
var router = express.Router();

/* GET events page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Events route" });
});

module.exports = router;
