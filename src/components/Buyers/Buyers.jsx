import React from 'react';
// import {reduxForm, Field} from 'redux-form';
// import {required} from '../../utils/validators';
// import {Input} from '../common/FormsControl';
import './Buyers.scss';

const Buyers = ({filteredBuyers, sortedBuyers, filtered, sortedById, sortedByCheck,sortedByAmount, sortedByProceeds, sortByCheck, sortById, sortByAmount, sortByProceeds}) => {

	const BuyersTableRow = ({id, name, check, amount, proceeds}) => {
		return(
			<tr>
				<td>{id}</td>
				<td>{name}</td>
				<td>{check}</td>
				<td>{amount}</td>
				<td>{proceeds}</td>
			</tr>
		)
	}

	const BuyersTable = ({filteredBuyers}) => {
		return (
			filteredBuyers.map(item => <BuyersTableRow key={item.id} id={item.id} name={item.name} check={item.check} amount={item.amount} proceeds={item.proceeds} />)
		)
	}

	return (
		<div className="">
			<h1>Покупатели</h1>
				<table className="Buyers__table">
					<tbody>
						<tr>
							<th>ID покупателя</th>
							<th>Имя покупателя</th>
							<th>Средний чек</th>
							<th>Количество покупок</th>
							<th>Общая выручка</th>
						</tr>
						<tr>
							<td>
								<button type="button" onClick={sortById} disabled={sortedById}>По возрастанию</button>
							</td>
							<td></td>
							<td>
								<button type="button" onClick={sortByCheck}  disabled={sortedByCheck}>По возрастанию</button>
							</td>
							<td>
								<button type="button" onClick={sortByAmount} disabled={sortedByAmount}>По возрастанию</button>
							</td>
							<td>
								<button type="button" onClick={sortByProceeds} disabled={sortedByProceeds}>По возрастанию</button>
							</td>
						</tr>
						<BuyersTable filteredBuyers={filteredBuyers} />
					</tbody>
				</table>
		</div>
	)
}

export default Buyers;