import gql from 'graphql-tag';


export const GET_POSTS = gql`
  query GetPosts($title: String) {
   posts(title: $title){
     id
   }
  }
`




