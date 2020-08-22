const ADD_TERMINAL = 'terminals/ADD_TERMINAL';
const REMOVE_TERMINAL = 'terminals?REMOVE_TERMINAL';

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
		case REMOVE_TERMINAL: {
			return {
				...state,
				terminals: state.terminals.filter(item => item.id !== action.id)
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
export const removeTerminal = (id) => ({
	type: REMOVE_TERMINAL,
	id
});

export default terminalsReducer;