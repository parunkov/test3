const GET_USER = 'login/GET_USER';

const initialState = {
	login: null,
	password: null,
	isLogined: false,
	loginError: null,
	avatarUrl: null
}

const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_USER: {
			return {
				...state,
				login: action.user,
				avatarUrl: action.avatarUrl,
				isLogined: action.isLogined
			}
		}
		default:
			return state;
	}
}

const getUser = (user, avatarUrl, isLogined) => ({
	type: GET_USER,
	user,
	avatarUrl,
	isLogined
});

export const checkLogin = (user) => async (dispatch) => {
	const result = await fetch(`https://api.github.com/users/${user}`).then(
      successResponse => {
        if (successResponse.status !== 200) {
          return null;
        } else {
          return successResponse.json();
        }
      },
      failResponse => {
        return null;
      }
    );
    if (result) {
    	dispatch(getUser(user, result.avatar_url, true));
    }
}
export default loginReducer;