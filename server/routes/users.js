var express = require("express");
var router = express.Router();
var db = require("../db/db-connection");

// mock data
let mockUsers = [
  { id: 1, name: "Marlin", email: "marlin@gmail.com" },
  { id: 2, name: "Nemo", email: "nemo@gmail.com" },
  { id: 3, name: "Dory", email: "dory@gmail.com" },
];

/* GET users listing. */
router.get("/", async function (req, res, next) {
  try {
    const users = await db.any("SELECT * FROM users", [true]);
    res.send(users);
  } catch (e) {
    return res.status(400).json({ e });
  }

  // // using hardcoded data on server
  // console.log(req.body, "the body");
  // res.json({ users: mockUsers });
});

// add to users listing
router.post("/", async function (req, res, next) {
  try {
    await db
      .one("INSERT INTO users(name, email) VALUES($1, $2) RETURNING *", [
        req.body.name,
        req.body.email,
      ])
      .then((data) => {
        console.log(data);
        res.send(data);
      });
  } catch (e) {
    return res.status(400).json({ e });
  }

  // console.log(req.headers);
  // mockUsers.push(req.body);
  // console.log(req.body, "the POST body");
  // res.status(201).send(`Added user ${res.body}`);
  // console.log("User has been added", users);
  // res.send(req.body);
});

// delete from users listing

module.exports = router;
