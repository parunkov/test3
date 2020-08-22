import React from 'react';

const Buyer = ({id, buyers}) => {
	const buyer = buyers.filter(item => item.id === id)[0];
	return (
		<div>
			<h1>Покупатель</h1>
			<div>ID покупателя - {buyer.id}</div>
			<div>Имя покупателя - {buyer.name}</div>
			<div>Средний чек - {buyer.check} рублей</div>
			<div>Количество покупок - {buyer.amount}</div>
			<div>Общая выручка - {buyer.proceeds} рублей</div>
		</div>
	)
}

export default Buyer;