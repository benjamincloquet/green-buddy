import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { fetchUser as fetchUserAction } from '../../actions/auth';

const UserRoute = ({
  isAuthenticated, fetchUser, component: Component, exact, path, redirect,
}) => {
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const renderRoute = () => {
    if (isAuthenticated === null) {
      return <p>Loading...</p>;
    }
    return isAuthenticated ? <Component /> : <Redirect to={redirect} />;
  };

  return <Route exact={exact} path={path} render={renderRoute} />;
};

UserRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
  fetchUser: PropTypes.func.isRequired,
  component: PropTypes.elementType.isRequired,
  redirect: PropTypes.string,
  exact: PropTypes.bool,
  path: PropTypes.string,
};

UserRoute.defaultProps = {
  isAuthenticated: null,
  redirect: '/',
  exact: false,
  path: '/',
};

const mapStateToProps = (state) => ({ isAuthenticated: state.auth.isAuthenticated });

export default connect(mapStateToProps, { fetchUser: fetchUserAction })(UserRoute);
