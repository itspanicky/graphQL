const graphql = require("graphql");
const mongoose = require("mongoose");

const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = graphql;
const UserType = require("./user_type");
const User = mongoose.model("user");
const PostType = require("./post_type");
const Post = mongoose.model("post");

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
        password: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parentValue, { name, email, password }) {
        return new User({ name, email, password }).save();
      },
    },
    newPost: {
      type: PostType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        body: { type: new GraphQLNonNull(GraphQLString) },
        author: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parentValue, { title, body, author }) {
        return new Post({ title, body, author }).save();
      },
    },
  },
});

module.exports = mutation;

