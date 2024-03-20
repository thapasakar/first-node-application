const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.json({
    Hey: "This is the first application",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
