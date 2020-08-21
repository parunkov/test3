import Login from './Login';
import {connect} from 'react-redux';
import {checkLogin} from '../../redux/login-reducer';

const mapStateToProps = (state) => {
	return {
		login: state.login.login,
		isLogined: state.login.isLogined
	}
}

export default connect(mapStateToProps, {checkLogin})(Login);