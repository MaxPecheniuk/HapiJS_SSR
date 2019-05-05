import gql from 'graphql-tag';

export const typeDefs = gql`
  type Post {
    id: ID!
    title: String
    description: String
    date: Int
	  comment: [ID!]
    comments: [Comment]
  }
  type Comment {
    id: ID!
    author: Author
    text: String
  }
  type Author{
    id: ID!
	  avatar: String
    name: String
  } 

  type Query {
    posts: [Post]
    comments(id: [ID!]): [Comment]
    authors: [Author]
	  postById(id: ID!): Post
    
  }
`;