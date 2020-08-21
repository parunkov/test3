import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {required, lowercaseLetter, uppercaseLetter, digit} from '../../utils/validators';
import {Input} from '../common/FormsControl';

const LoginForm = ({handleSubmit, error}) => {
	return (
		<form onSubmit={handleSubmit} className="">
			<h1>Вход</h1>
			<Field component={Input} name={"login"} validate={[required]} title="Логин" />
			<Field component={Input} name={"password"} validate={[required, lowercaseLetter, uppercaseLetter, digit]} type={"password"} title="Пароль" />
			<div className="">
				<button type={"submit"}>Войти</button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm ({
	form: 'login'
})(LoginForm);

const Login = () => {
	const onSubmit = (formData) => {
		console.log(formData);
	}
	return (
		<LoginReduxForm onSubmit={onSubmit} />
	)
}

export default Login;