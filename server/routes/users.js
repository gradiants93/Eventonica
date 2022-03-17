var express = require("express");
var router = express.Router();

// mock data
let mockUsers = [
  { id: 1, name: "Marlin", email: "marlin@gmail.com" },
  { id: 2, name: "Nemo", email: "nemo@gmail.com" },
  { id: 3, name: "Dory", email: "dory@gmail.com" },
];

/* GET users listing. */
router.get("/", function (req, res, next) {
  console.log(req.body, "the body");
  res.json({ users: mockUsers });
});
// add to users listing
router.post("/", function (req, res, next) {
  res, send(req.body);
  res.send("User has been added", mockUsers);
});

// delete from users listing

module.exports = router;
