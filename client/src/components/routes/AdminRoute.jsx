import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { fetchUser as fetchUserAction } from '../../actions/auth';

const AdminRoute = ({
  auth, fetchUser, component: Component, exact, path, redirect,
}) => {
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const renderRoute = () => {
    if (auth.isAuthenticated === null) {
      return <p>Loading...</p>;
    }
    return auth.isAuthenticated && auth.user.admin ? <Component /> : <Redirect to={redirect} />;
  };

  return <Route exact={exact} path={path} render={renderRoute} />;
};

AdminRoute.propTypes = {
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool,
    user: PropTypes.shape(),
  }).isRequired,
  fetchUser: PropTypes.func.isRequired,
  component: PropTypes.elementType.isRequired,
  redirect: PropTypes.string,
  exact: PropTypes.bool,
  path: PropTypes.string,
};

AdminRoute.defaultProps = {
  redirect: '/',
  exact: false,
  path: '/',
};

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps, { fetchUser: fetchUserAction })(AdminRoute);
