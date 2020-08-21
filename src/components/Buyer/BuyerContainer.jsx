import Buyer from './Buyer';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
	return {
		id: state.buyer.currentBuyerId,
		buyers: state.buyers.sortedBuyers
	}
}

export default connect(mapStateToProps, {})(Buyer);