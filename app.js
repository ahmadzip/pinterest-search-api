const express = require("express");
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;
const { search } = require("pinterest-dl");

app.get("/", (req, res) => {
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

app.listen(PORT, () => {
  console.log("http://localhost:3000/?q=cat");
  console.log("Server Listening on PORT:", PORT);
});
