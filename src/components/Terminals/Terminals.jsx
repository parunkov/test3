import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {required} from '../../utils/validators';
import {Input, Textarea} from '../common/FormsControl';
import './Terminals.scss';

const TerminalsForm = ({handleSubmit, error}) => {
	return (
		<form onSubmit={handleSubmit} className="">
			<h2>Добавить терминал</h2>
			<Field component={Input} name={"name"} validate={[required]} title="Название терминала" />
			<Field component={Textarea} name={"description"} title="Описание"/>
			<div className="">
				<button type={"submit"}>Добавить</button>
			</div>
		</form>
	)
}

const Terminals = ({terminals, maxId, addTerminal, removeTerminal, reset}) => {

	const onSubmit = (formData) => {
		const id = maxId + 1;
		addTerminal(id, formData.name, formData.description, id);
		reset('terminals');
	}

	const TerminalsTableRow = ({id, name, description, removeTerminal}) => {
		const onButtonClick = () => {
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
				<h1>Терминалы</h1>
				<table className="Terminals__table">
					<tbody>
						<tr>
							<th>Название</th>
							<th>Описание</th>
							<th></th>
						</tr>
						<TerminalsTable />
					</tbody>
				</table>
			</div>
		</div>
	)
}

const TerminalsReduxForm = reduxForm ({
	form: 'terminals'
})(TerminalsForm);

export default Terminals;