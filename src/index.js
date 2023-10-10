const express = require("express");
const app = express();
const PORT = 5050;

app.get("/", (req, res) => {
  res.send("Hello from express server! Testing sourcetree commit!");
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}.....`));
