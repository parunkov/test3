import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {required, lowercaseLetter, uppercaseLetter, digit, length} from '../../utils/validators';
import {Input} from '../common/FormsControl';
import {Redirect} from 'react-router-dom';
import './Login.scss';

const LoginForm = ({handleSubmit, error}) => {
	return (
		<form onSubmit={handleSubmit} className="Login">
			<h1>Вход</h1>
			<Field component={Input} name={"login"} validate={[required]} title="Логин" />
			<Field component={Input} name={"password"} type={"password"} title="Пароль" />
			<div className="">
				<button type={"submit"}>Войти</button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm ({
	form: 'login'
})(LoginForm);

const Login = ({isLogined, checkLogin}) => {
	const onSubmit = (formData) => {
		checkLogin(formData.login);
	}
	if (isLogined) {
		return <Redirect to={"/terminals"} />
	}
	return (
		<LoginReduxForm onSubmit={onSubmit} />
	)
}

export default Login;