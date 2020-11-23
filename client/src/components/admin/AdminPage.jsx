import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Link, Switch, Route, useRouteMatch,
} from 'react-router-dom';
import ProductsPage from './products/ProductsPage';

const AdminPage = ({ auth }) => {
  const match = useRouteMatch();

  if (!auth.isAuthenticated || !auth.user.admin) {
    return null;
  }
  return (
    <div className="admin-page">
      <h1>Admin Page</h1>
      <Link to={`${match.url}/products`}>Products Page</Link>
      <Switch>
        <Route path={`${match.path}/products`} component={ProductsPage} />
      </Switch>
    </div>
  );
};

AdminPage.propTypes = {
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool,
    user: PropTypes.shape(),
  }).isRequired,
};

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps, null)(AdminPage);
