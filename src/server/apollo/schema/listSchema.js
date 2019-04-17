const {gql} = require('apollo-server/dist/index');

const typeDefs = gql`
  type Post {
    id: Int
    title: String
    likes: Detail
  }
  type Detail {
    name: String
    age: String
  }
  
  type Mutation {
    createPost(title: String): [Post]
  }

  type Query {
    list: [Post]
    deletePost: Post
  }
`;
module.exports = typeDefs;