import {addTerminal, removeTerminal} from '../../redux/terminals-reducer';
import Terminals from './Terminals';
import {connect} from 'react-redux';
import {reset} from 'redux-form';

const mapStateToProps = (state) => {
	return {
		terminals: state.terminals.terminals,
		maxId: state.terminals.maxId
	}
}

export default connect(mapStateToProps, {addTerminal, removeTerminal, reset})(Terminals);