const express = require("express");
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  host = req.get("host");
  let html = `
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f0f0f0;
      }
      h1 {
        text-align: center;
        margin-top: 50px;
      }
      p {
        text-align: center;
      }
    </style>
    <h1>API Pinterest Downloader</h1>
    <p>Usage:</p>
    <p>GET /api?q=cat</p>
    <p>Example:</p>
    <p><a href="http://${host}/api?q=cat">http://${host}/api?q=cat</a></p>
  `;
  res.send(html);
});

const routes = require("./routes");
app.use("/api", routes);

app.listen(PORT, () => {
  console.log("http://localhost:3000/?q=cat");
  console.log("Server Listening on PORT:", PORT);
});
