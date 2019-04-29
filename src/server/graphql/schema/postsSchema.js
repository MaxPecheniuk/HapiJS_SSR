import gql from 'graphql-tag';

export const typeDefs = gql`
  type Post {
    id: ID!
    title: String
    description: String
    comments: [Comment]
  }
  type Comment {
    id: ID!
    author: Author
    text: String
  }
  type Author{
    id: ID!
    name: String
  } 

  type Query {
    posts: [Post]
    comments: [Comment]
    authors: [Author]
	  postById(id: ID!): Post
    
  }
`;