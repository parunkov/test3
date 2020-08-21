import {addTerminal, removeTerminal} from '../../redux/terminals-reducer';
import Terminals from './Terminals';
import {connect} from 'react-redux';
import {reset} from 'redux-form';
import {compose} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

const mapStateToProps = (state) => {
	return {
		terminals: state.terminals.terminals,
		maxId: state.terminals.maxId
	}
}

export default compose(
	connect(mapStateToProps, {addTerminal, removeTerminal, reset}),
	withAuthRedirect
)(Terminals);