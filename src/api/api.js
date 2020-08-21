import * as axios from 'axios';

const instance = axios.create ({
	withCredentials: true,
	baseURL: 'https://api.github.com/users/',
	headers: {
		 // "Access-Control-Allow-Origin": "*"
		// "API-KEY": "835d872a-f736-4d6d-9d7e-efec24ff176d",
	}
});

export const userAPI = {
	getUser(user) {
		return instance.get(user).then(response => {
			return response
		});
	}
}