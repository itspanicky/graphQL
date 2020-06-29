require("dotenv").config();

module.exports = {
  mongoURI: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@graphql-1jras.mongodb.net/<dbname>?retryWrites=true&w=majority`,
};