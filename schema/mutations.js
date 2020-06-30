const graphql = require("graphql");
const mongoose = require("mongoose");

const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = graphql;
const UserType = require("./user_type");
const User = mongoose.model("user");

// Mutation that will allow us to add users using GraphiQL
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
      // name of mutation
      newUser: {
          type: UserType,
          args: {
              name: { type: new GraphQLNonNull(GraphQLString) },
              email: { type: new GraphQLNonNull(GraphQLString) },
              password: { type: new GraphQLNonNull(GraphQLString) }
          },
          resolve(parentValue, { name, email, password }) {
              return new User({ name, email, password }).save();
          }
      }
  }
});

module.exports = mutation;

