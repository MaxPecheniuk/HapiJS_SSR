import gql from 'graphql-tag';

export const GET_LIST = gql`
  {
    list {
      title
    }
  }
`

export const GET_USERS = gql`
  {
    users {
      username
    }
  }
`

export const DELETE_USER = gql`
mutation deleteUser($id: Int) {
  deleteUser(id: $id) {
    id
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
