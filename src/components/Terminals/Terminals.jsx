import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {required} from '../../utils/validators';
import {Input, Textarea} from '../common/FormsControl';

const TerminalsForm = ({handleSubmit, error}) => {
	return (
		<form onSubmit={handleSubmit} className="">
			<h1>Терминалы</h1>
			<Field component={Input} name={"name"} validate={[required]} title="Название терминала" />
			<Field component={Textarea} name={"description"} title="Описание"/>
			<div className="">
				<button type={"submit"}>Добавить</button>
			</div>
		</form>
	)
}

const Terminals = () => {
	return (
		<div className="">
			<TerminalsReduxForm />
		</div>
	)
}

const TerminalsReduxForm = reduxForm ({
	form: 'terminals'
})(TerminalsForm);

export default Terminals;