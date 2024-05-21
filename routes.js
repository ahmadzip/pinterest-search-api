const express = require("express");
const router = express.Router();
const { search } = require("pinterest-dl");

router.get("/", (req, res) => {
  const params = req.query.q;
  search(params)
    .then((data) => {
      res.send(data[0]);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ error: "An error occurred while fetching data" });
    });
  if (params === undefined) {
    res.send({ error: "Mau ngapain?" });
  }
});

module.exports = router;
