import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const HomePage = ({ auth }) => (
  <div className="home-page">
    <p>
      {`Welcome ${auth.isAuthenticated ? auth.user.firstName : 'guest'} !`}
    </p>
    <Link to="/auth">Log in</Link>
    <Link to="/user">User Page</Link>
    <Link to="/admin">Admin Page</Link>
  </div>
);

HomePage.propTypes = {
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool,
    user: PropTypes.shape(),
  }).isRequired,
};

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps, null)(HomePage);
