import gql from 'graphql-tag';


export const SEARCH_POSTS = gql`

  query searchPosts($title: String!) {
    searchPosts(title: $title){
      id
      title
      description
      date
      commentsIds

    }
  }

`


