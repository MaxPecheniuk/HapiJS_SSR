import gql from 'graphql-tag';

export const GET_POSTS_EN = gql`
  query getPosts($title: String, $lang: String) {
    posts(title: $title, lang: $lang){
      id
      title{
        en
      }
      description{
        en
      }
      date
      commentsIds

    }
  }

`;
export const GET_POSTS_RU = gql`
  query getPosts($title: String, $lang: String) {
    posts(title: $title, lang: $lang){
      id
      title {
        ru
      }
      description{
        ru
      }
      date
      commentsIds
    }
    
  }
`;