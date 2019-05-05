import gql from 'graphql-tag';


export const GET_COMMENTS = gql`
	query comments($id: [ID!]) {
		comments(id: $id){
			id
			text
			author{
				name
				avatar
			}
		}
	}
`