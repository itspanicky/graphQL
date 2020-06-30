
const mongoose = require("mongoose");
const graphql = require("graphql");
const UserType = require("./user_type");

const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const User = mongoose.model("user");

// A root query is an entry point into the data 
// which exists in the backend
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    users: {
      // Specifies that the data will be returned as an array.
      type: new GraphQLList(UserType),
      // Resolve function to tell GraphQL how to access the data.
      // Only the fields we specified on the User type will be returned.
      resolve() {
        return User.find({});
      },
    },
    user: {
      // A Querying for a single User, does not need to be wrapped
      type: UserType,
      // GraphQLNonNull specifies that the argument must be included
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return User.findById(id);
      },
    },
  },
});

module.exports = RootQuery;