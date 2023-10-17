// Imports
const express = require("express");

const handlebarsConfig = require("./config/handlebarsConfig");
const expressConfig = require("./config/expressConfig");
const dbConnect = require("./config/dbConfig");

const { PORT } = require("./constants");
const routes = require("./router");

// Local variables
const app = express();

// Configs
handlebarsConfig(app);
expressConfig(app);

// Connecting to the database
dbConnect()
  .then(() => console.log("yay"))
  .catch((err) => console.log(`Woops: ${err}`));

// Routing
app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}.....`));
