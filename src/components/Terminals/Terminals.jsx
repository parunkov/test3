import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {required} from '../../utils/validators';
import {Input, Textarea} from '../common/FormsControl';
import './Terminals.scss';

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

const Terminals = ({terminals, maxId, addTerminal, removeTerminal, reset}) => {

	console.log(terminals);
	console.log(removeTerminal);

	const onSubmit = (formData) => {
		console.log(formData);
		const id = maxId + 1;
		addTerminal(id, formData.name, formData.description, id);
		reset('terminals');
	}

	const TerminalsTableRow = ({id, name, description, removeTerminal}) => {
		const onButtonClick = () => {
			console.log(id);
			removeTerminal(id);
		}
		return (
					<tr>
						<td>{name}</td>
						<td>{description}</td>
						<td>
							<button type="button" onClick={onButtonClick}>Удалить</button>
						</td>
					</tr>
				)
	}

	const TerminalsTable = () => {
		return (
			terminals.map(item => <TerminalsTableRow key={item.id} id={item.id} name={item.name} description={item.description} removeTerminal={removeTerminal} />)
		)
	}

	return (
		<div className="">
			<TerminalsReduxForm onSubmit={onSubmit} />
			<div className="">
				<table className="Terminals__table">
					<tr>
						<th>Название</th>
						<th>Описание</th>
						<th></th>
					</tr>
					<TerminalsTable />
				</table>
			</div>
		</div>
	)
}

const TerminalsReduxForm = reduxForm ({
	form: 'terminals'
})(TerminalsForm);

export default Terminals;