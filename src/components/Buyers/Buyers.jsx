import React, {useState} from 'react';
import {reduxForm, Field} from 'redux-form';
import {Input} from '../common/FormsControl';
import './Buyers.scss';

const Buyers = ({filteredBuyers, sortedBuyers, filtered, reversed, sortedById, sortedByCheck,sortedByAmount, sortedByProceeds, sortByCheck, sortById, sortByAmount, sortByProceeds, filter, clearFilter, setCurrentBuyerId, reverseBuyers}) => {

	const [showedBuyersValue, setShowedBuyersValue] = useState(15);
	const [page, setPage] = useState(1);

	const setShowedBuyers = (filteredBuyers) => {
		return(
			showedBuyersValue === 5 ?
			filteredBuyers.slice((page - 1) * showedBuyersValue, page * showedBuyersValue) :
			filteredBuyers.slice(0, showedBuyersValue)
		)
	}

	let showedBuyers = setShowedBuyers(filteredBuyers);
	if (reversed) {
		showedBuyers = setShowedBuyers(filteredBuyers.reverse());
	}

	const BuyersForm = ({handleSubmit, error}) => {
		return (
			<form onSubmit={handleSubmit} className="Buyers__form">
				<Field component={Input} name={"name"} />
				<button className="Buyers__searchButton" type={"submit"}>Найти</button>
			</form>
		)
	}

	const BuyersReduxForm = reduxForm ({
		form: 'buyers'
	})(BuyersForm);

	const onSubmit = (formData) => {
		filter(formData.name);
	}

	const BuyersTableRow = ({id, name, check, amount, proceeds}) => {
		return(
			<tr>
				<td><a href="/#/buyers/id" onClick={() => setCurrentBuyerId(id)}>{id}</a></td>
				<td>{name}</td>
				<td>{check}</td>
				<td>{amount}</td>
				<td>{proceeds}</td>
			</tr>
		)
	}

	const Button = ({sort, sorted}) => {
		if (sorted && !reversed) {
			return <button className="Buyers__buttonDown" type="button" onClick={() => reverseBuyers(true)}>По убыванию</button>
		} else {
			return <button className="Buyers__buttonUp" type="button" onClick={sort}>По возрастанию</button>
		}
	}

	const BuyersTable = ({filteredBuyers}) => {
		return (
			showedBuyers.map(item => <BuyersTableRow key={item.id} id={item.id} name={item.name} check={item.check} amount={item.amount} proceeds={item.proceeds} />)
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
						<tr className="Buyers__buttons">
							<td>
								<Button sort={sortById} sorted={sortedById} />
							</td>
							<td className="Buyers__filter">
								{filtered ? <button className="Buyers__buttonClear" type="button" onClick={clearFilter}>Сбросить фильтр</button> : <BuyersReduxForm onSubmit={onSubmit} />}
							</td>
							<td>
								<Button sort={sortByCheck} sorted={sortedByCheck} />
							</td>
							<td>
								<Button sort={sortByAmount} sorted={sortedByAmount} />
							</td>
							<td>
								<Button sort={sortByProceeds} sorted={sortedByProceeds} />
							</td>
						</tr>
						<BuyersTable filteredBuyers={filteredBuyers} />
					</tbody>
				</table>
				{showedBuyersValue === 5 && <div className="Buyers__pagination">
					<span>Страница </span>
					<span className={"Buyers__paginationItem" + (page === 1 ? " Buyers__paginationItem_active" : "")} onClick={() => setPage(1)}>1 </span>
					<span className={"Buyers__paginationItem" + (page === 2 ? " Buyers__paginationItem_active" : "")} onClick={() => setPage(2)}>2 </span>
					<span className={"Buyers__paginationItem" + (page === 3 ? " Buyers__paginationItem_active" : "")} onClick={() => setPage(3)}>3 </span>
				</div>}
				<div className="Buyers__itemsValueSelector">
					<span>Показывать </span> 
					<button onClick={() => setShowedBuyersValue(5)} disabled={showedBuyersValue === 5}>5</button>
					<button onClick={() => setShowedBuyersValue(10)} disabled={showedBuyersValue === 10}>10</button>
					<button onClick={() => setShowedBuyersValue(15)} disabled={showedBuyersValue === 15}>15</button>
					<span> покупателей</span>
				</div>
		</div>
	)
}

export default Buyers;