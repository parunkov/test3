import Buyers from './Buyers';
import {connect} from 'react-redux';
// import {reset} from 'redux-form';
import {sortByCheck, sortById, sortByAmount, sortByProceeds, filter, clearFilter} from '../../redux/buyers-reducer';
import {setCurrentBuyerId} from '../../redux/buyer-reducer';

const mapStateToProps = (state) => {
	return {
		filteredBuyers: state.buyers.filteredBuyers,
		sortedBuyers: state.buyers.sortedBuyers,
		filtered: state.buyers.filtered,
		sortedById: state.buyers.sortedById,
		sortedByCheck: state.buyers.sortedByCheck,
		sortedByAmount: state.buyers.sortedByAmount,
		sortedByProceeds: state.buyers.sortedByProceeds
	}
}

export default connect(mapStateToProps, {sortByCheck, sortById, sortByAmount, sortByProceeds, filter, clearFilter, setCurrentBuyerId})(Buyers);