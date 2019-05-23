import gql from 'graphql-tag';

export const GET_POST_RU = gql`
  query postById($id: ID!) {
    postById(id: $id){
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
`


export const GET_POST_EN = gql`
  query postById($id: ID!) {
    postById(id: $id){
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
`




