import gql from 'graphql-tag';


export const GET_POST = gql`
	query postById($id: ID!) {
		postById(id: $id){
			id
			title
			description
      date
      commentsIds
		
		}
	}
`




