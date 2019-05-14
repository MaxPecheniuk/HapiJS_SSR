import { postsByIdLoader } from "../loader/postByIdLoader";

export const postsByIdResolver = {

	Query: {
		postById: (_, {id}, context) => {
		  console.log(id);
			return postsByIdLoader(_, {id}, context);
		},
	},
}