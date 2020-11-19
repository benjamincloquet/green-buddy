import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { fetchUser as fetchUserAction } from '../actions/user';
import HomePage from './HomePage';
import AuthPage from './auth/AuthPage';

const App = ({ fetchUser }) => {
  useEffect(() => {
    fetchUser();
  });

  return (
    <Router>
      <Switch>
        <Route exact path="/auth" component={AuthPage} />
        <Route component={HomePage} />
      </Switch>
    </Router>
  );
};

App.propTypes = {
  fetchUser: PropTypes.func.isRequired,
};

export default connect(null, { fetchUser: fetchUserAction })(App);
