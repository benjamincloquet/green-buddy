import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { fetchUser as fetchUserAction } from '../actions/auth';
import HomePage from './HomePage';
import AuthPage from './user/AuthPage';
import UserPage from './user/UserPage';
import AdminPage from './admin/AdminPage';
import UserRoute from './routes/UserRoute';
import AdminRoute from './routes/AdminRoute';

const App = ({ fetchUser }) => {
  useEffect(() => {
    fetchUser();
  });

  return (
    <Router>
      <Switch>
        <Route path="/auth" component={AuthPage} />
        <UserRoute path="/user" component={UserPage} />
        <AdminRoute path="/admin" component={AdminPage} />
        <Route component={HomePage} />
      </Switch>
    </Router>
  );
};

App.propTypes = {
  fetchUser: PropTypes.func.isRequired,
};

export default connect(null, { fetchUser: fetchUserAction })(App);
