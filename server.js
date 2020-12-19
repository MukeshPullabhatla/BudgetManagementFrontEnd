const express = require("express");

const app = express();

app.use(express.static("./dist/BudgetManagementFrontEnd"));

app.get("/*", (req, res) => {
  res.sendFile("index.html", { root: "./dist/BudgetManagementFrontEnd/" });
});

app.listen(process.env.PORT || 8080);
