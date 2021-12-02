const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const compression = require("compression");
if (process.env.NODE_ENV !== "production") require("dotenv").config();

/* -------------------------------------------------------------------------- */
/*                                   SET-UP                                   */
/* -------------------------------------------------------------------------- */

const app = express();
const port = process.env.PORT || 5001;

// gzips responses
app.use(compression());
// parses request body for json
app.use(bodyParser.json());
// ensures URL strings we receive or send out are properly formatted and escaped
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.listen(port, (error) => {
  if (error) throw error;
  console.log("Server running on port " + port);
});

/* -------------------------------------------------------------------------- */
/*                                   ROUTES                                   */
/* -------------------------------------------------------------------------- */

// respond with text
app.get("/", (req, res) => {
  res.status(200).send('<h1>Hello</h1>')
});

// respond with html file
app.get("/about", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '/about.html'));
});
