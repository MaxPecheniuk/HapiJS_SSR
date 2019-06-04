import gql from 'graphql-tag';

export const typeDefs = gql`
  type Post {
    id: ID!
    title: LangOptions
    description: LangOptions
    date: Int
    commentsIds: [ID!]
    comments: [Comment]
  }
  type LangOptions {
    en: String
    ru: String
  } 
  type LangOptions2 {
    en: String
    ru: String
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
    posts(title: String, lang: String): [Post]
    comments(id: [ID!]): [Comment]
    authors: [Author]
    postById(id: ID!): Post

  }
`;