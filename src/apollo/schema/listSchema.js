const {gql} = require('apollo-server/dist/index');

const typeDefs = gql`
  type List {
  title: String
  likes: Likes
  }
  type Likes {
    name: String
    avatar: String
    }
    
    type Query {
   list: [List]
    }
`;
module.exports = typeDefs;