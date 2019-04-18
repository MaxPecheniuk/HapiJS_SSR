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
  type User {
    id: Int,
    username: String
    fullname: String
    email: String
    password:String
    image:String
    role: String
    phone: String
    is_confirmed: Boolean
  }

  type Mutation {
    createPost(title: String): [Post]
    deleteUser(id: Int): [User]
  }

  type Query {
    list: [Post]
    deletePost: Post
    users: [User]
  }
`;
module.exports = typeDefs;