import {userAPI} from '../api/api';

const GET_USER = 'login/GET_USER';

const initialState = {
	login: null,
	password: null,
	isLogined: false,
	loginError: null
}

const loginReducer = (state = initialState, action) => {
	return state;
}

const getUser = (user) => ({
	type: GET_USER,
	user
});

export const checkLogin = (user) => async (dispatch) => {
	const response = await userAPI.getUser(user);
	console.log(response);
}
export default loginReducer;