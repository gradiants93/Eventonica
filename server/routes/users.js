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
  console.log(req.headers);
  mockUsers.push(req.body);
  console.log(req.body, "the POST body");
  res.status(201).send(`Added user ${res.body}`);
  console.log("User has been added", users);
  res.send(req.body);
});

// delete from users listing

module.exports = router;
