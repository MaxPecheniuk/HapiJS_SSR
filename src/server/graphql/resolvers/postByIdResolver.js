import { postsByIdLoader } from "../loader/postByIdLoader";

export const postsByIdResolver = {

	Query: {
		postById: (_, {id}, context) => {
			return postsByIdLoader(_, {id}, context);
		},
	},
}