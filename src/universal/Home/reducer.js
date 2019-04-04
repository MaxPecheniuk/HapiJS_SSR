import {COUNT} from "../constants/constants";

const initialState = {
	count: 0
}

export const HomeReducer = (state = initialState, action) => {
	switch (action.type){
		case COUNT:
			return{}
		default: initialState
	}
}