import gql from 'graphql-tag';


export const SEARCH_POSTS = gql`

  query SearchPosts($title: String!) {
    searchPosts(title: $title){
      id
      title
      description
      date
      commentsIds

    }
  }

`


