const SORTED_BY_CHECK = 'buyers/SORTED_BY_CHECK';
const SORTED_BY_ID = 'buyers/SORTED_BY_ID';
const SORTED_BY_AMOUNT = 'buyers/SORTED_BY_AMOUNT';
const SORTED_BY_PROCEEDS = 'buyers/SORTED_BY_PROCEEDS';
const FILTER = 'buyers/FILTER';
const FILTER_CLEARED = 'buyers/FILTER_CLEARED';

const initialBuyers = [
	{id: 1, name: 'Иван', check: 500, amount: 10, proceeds: 5000},
	{id: 2, name: 'Андрей', check: 250, amount: 1, proceeds: 250},
	{id: 3, name: 'Мария', check: 300, amount: 2, proceeds: 600},
	{id: 4, name: 'Анна', check: 100, amount: 10, proceeds: 1000},
	{id: 5, name: 'Иван', check: 400, amount: 2, proceeds: 800},
	{id: 6, name: 'Анна', check: 1000, amount: 3, proceeds: 3000},
	{id: 7, name: 'Иван', check: 900, amount: 1, proceeds: 900},
	{id: 8, name: 'Мария', check: 700, amount: 5, proceeds: 3500},
	{id: 9, name: 'Олег', check: 800, amount: 8, proceeds: 6400},
	{id: 10, name: 'Иван', check: 200, amount: 5, proceeds: 1000},
	{id: 11, name: 'Олег', check: 600, amount: 6, proceeds: 3600},
	{id: 12, name: 'Наталья', check: 50, amount: 20, proceeds: 1000},
	{id: 13, name: 'Максим', check: 150, amount: 4, proceeds: 600},
	{id: 14, name: 'Федор', check: 10, amount: 100, proceeds: 1000},
	{id: 15, name: 'Глеб', check: 20, amount: 7, proceeds: 140}
];

const initialState = {
	filteredBuyers: initialBuyers,
	sortedBuyers: initialBuyers,
	filtered: false,
	sortedById: true,
	sortedByCheck: false,
	sortedByAmount: false,
	sortedByProceeds: false,
	reverse: false
}

const buyersReducer = (state = initialState, action) => {
	switch (action.type) {
		case SORTED_BY_CHECK: {
			return {
				...state,
				filteredBuyers: state.filteredBuyers.sort((a, b) => a.check - b.check),
				sortedBuyers: state.sortedBuyers.sort((a, b) => a.check - b.check),
				sortedByCheck: true,
				sortedById: false,
				sortedByAmount: false,
				sortedByProceeds: false
			}
		}
		case SORTED_BY_ID: {
			return {
				...state,
				filteredBuyers: state.filteredBuyers.sort((a, b) => a.id - b.id),
				sortedBuyers: state.sortedBuyers.sort((a, b) => a.id - b.id),
				sortedByCheck: false,
				sortedById: true,
				sortedByAmount: false,
				sortedByProceeds: false
			}
		}
		case SORTED_BY_AMOUNT: {
			return {
				...state,
				filteredBuyers: state.filteredBuyers.sort((a, b) => a.amount - b.amount),
				sortedBuyers: state.sortedBuyers.sort((a, b) => a.amount - b.amount),
				sortedByCheck: false,
				sortedById: false,
				sortedByAmount: true,
				sortedByProceeds: false
			}
		}
		case SORTED_BY_PROCEEDS: {
			return {
				...state,
				filteredBuyers: state.filteredBuyers.sort((a, b) => a.proceeds - b.proceeds),
				sortedBuyers: state.sortedBuyers.sort((a, b) => a.proceeds - b.proceeds),
				sortedByCheck: false,
				sortedById: false,
				sortedByAmount: false,
				sortedByProceeds: true
			}
		}
		case FILTER: {
			return {
				...state,
				filteredBuyers: state.sortedBuyers.filter(item => item.name === action.name),
				filtered: true
			}
		}
		case FILTER_CLEARED: {
			return {
				...state,
				filteredBuyers: state.sortedBuyers,
				filtered: false
			}
		}
		default:
			return state;
	}
}

export const sortByCheck = () => ({	type: SORTED_BY_CHECK});
export const sortById = () => ({type: SORTED_BY_ID});
export const sortByAmount = () => ({type: SORTED_BY_AMOUNT});
export const sortByProceeds = () => ({type: SORTED_BY_PROCEEDS});
export const filter = (name) => ({
	type: FILTER,
	name
});
export const clearFilter = () => ({type: FILTER_CLEARED});

export default buyersReducer;