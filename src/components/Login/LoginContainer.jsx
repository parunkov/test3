import Login from './Login';
import {connect} from 'react-redux';
import {checkLogin} from '../../redux/login-reducer';

const mapStateToProps = (state) => {
	return {
		login: state.login.login,
		password: state.login.password,
		isLogined: state.login.isLogined,
		loginError: state.login.loginError
	}
}

export default connect(mapStateToProps, {checkLogin})(Login);