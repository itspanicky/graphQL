const graphql = require("graphql");
const mongoose = require("mongoose");

const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLString } = graphql;

// Define graphQL type (similar to defining a model)
const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    posts: {
      type: new GraphQLList(require("./post_type")), // PostType
      resolve(parentValue) {
          return UserType.findById(parentValue.id)
            .populate("posts")
            .then(user => user.posts)
      }
    },
  }),
});

module.exports = UserType;