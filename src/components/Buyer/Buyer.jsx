import React from 'react';

const Buyer = ({id, buyers}) => {
	const buyer = buyers.filter(item => item.id === id)[0];
	return (
		<div className="">
			<h1>Покупатель</h1>
			<div className="">ID покупателя - {buyer.id}</div>
			<div className="">Имя покупателя - {buyer.name}</div>
			<div className="">Средний чек - {buyer.check} рублей</div>
			<div className="">Количество покупок - {buyer.amount}</div>
			<div className="">Общая выручка - {buyer.proceeds} рублей</div>
		</div>
	)
}

export default Buyer;