const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Well this is going to be the seventh GIT push correct");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});





















