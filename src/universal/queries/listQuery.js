import gql from 'graphql-tag';

export const GET_LIST = gql`
  {
    list {
      title
    }
  }
`

export const CREATE_POST = gql`
  mutation createPost( $title: String) {
    createPost(title: $title){
      title
    }
  }
`
