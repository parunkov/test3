import Navbar from './Navbar';
import {connect} from 'react-redux';
import {logout} from '../../redux/login-reducer';

const mapStateToProps = (state) => {
	return {
		avatarUrl: state.login.avatarUrl,
		isLogined: state.login.isLogined
	}
}

export default connect(mapStateToProps, {logout})(Navbar);