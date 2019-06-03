import gql from 'graphql-tag';

export const GET_POSTS = gql`
  query getPosts($title: String, $lang: String) {
   posts(title: $title, lang: $lang){
     id
   }
  }
`;