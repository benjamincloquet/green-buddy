import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login as loginAction } from '../../actions/auth';

const AuthPage = ({ login }) => <button type="button" onClick={login}>Login</button>;

AuthPage.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, { login: loginAction })(AuthPage);
