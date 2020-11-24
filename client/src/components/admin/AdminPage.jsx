import { useState } from 'react';
import {
  Switch, Route, useRouteMatch,
} from 'react-router-dom';
import ProductsPage from './products/ProductsPage';
import AdminPageAppBar from './AdminPageAppBar';
import AdminPageDrawer from './AdminPageDrawer';
import useStyles from './styles/AdminPageStyles';

const AdminPage = () => {
  const classes = useStyles();
  const match = useRouteMatch();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <div className={classes.root}>
      <AdminPageAppBar isShifted={isDrawerOpen} onIconClick={openDrawer} />
      <AdminPageDrawer isOpen={isDrawerOpen} close={closeDrawer} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Switch>
          <Route path={`${match.path}/products`} component={ProductsPage} />
          <Route>
            <p>Admin Home</p>
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default AdminPage;
