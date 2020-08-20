import {updateObjectInArray} from '../utils/object-helpers';

const ADD_TERMINAL ='terminals/ADD_TERMINAL';

const initialState = {
	terminals: [],
	maxId: 0
}
const terminalsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TERMINAL: {
			return {
				...state,
				maxId: action.maxId,
				terminals: [...state.terminals,
				{
					id: action.id,
					name: action.name,
					description: action.description
				}]
			}
		}
		default:
			return state;
	}
}

export const addTerminal = (id, name, description, maxId) => ({
	type: ADD_TERMINAL,
	id,
	name,
	description,
	maxId
});

export default terminalsReducer;