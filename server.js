const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');
const CORS_WHITELIST = require('./constants/frontend');

const app = express();
const PORT = process.env.PORT || 3001;

const corsOptions = {
  origin: (origin, callback) => {
    (CORS_WHITELIST.indexOf(origin) !== -1 || !(origin))
      ? callback(null, true)
      : callback(new Error(`origin ${origin} Not allowed by CORS`)); 
    }
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, API
const routes = require("./routes")(app);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/sweet_idea");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
