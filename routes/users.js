var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", req => res => next => {
  res.send("respond with a resource");
});

router.put("/user", req => res => {
  res.send("Got a POST request");
});

router.put("/user", req => res => {
  res.send("Got a PUT mrequest at /user");
});

module.exports = router;
