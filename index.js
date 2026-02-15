const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("This is patch fix double thirble");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
































