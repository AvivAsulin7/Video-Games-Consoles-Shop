const fs = require("fs");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/products", (req, res) => {
  fs.readFile("./products.json", "utf8", (err, data) => {
    if (err) throw err;
    if (data) {
      const users = JSON.parse(data);
      res.send(users);
    }
  });
});

app.listen(8000, () => {
  console.log("Example app listening on port 8000!");
});
