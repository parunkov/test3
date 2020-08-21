const SET_CURRENT_BUYER_ID = 'buyer/SET_CURRENT_BUYER_ID';

const initialState = {
	currentBuyerId: 1
}

const buyerReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CURRENT_BUYER_ID: {
			return {
				...state,
				currentBuyerId: action.id
			}
		}
		default: 
			return state;
	}
}

export const setCurrentBuyerId = (id) => ({
	type: SET_CURRENT_BUYER_ID,
	id
});

export default buyerReducer;