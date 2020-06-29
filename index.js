const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const expressGraphQL = require("express-graphql");

const app = express();
const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

// all requests coming in to `graphql` will be handled by the expressGraphQL
app.use("/graphql", expressGraphQL({ graphiql: true }));
app.use(bodyParser.json());

app.listen(5000, () => console.log('Server is running on port 5000'));