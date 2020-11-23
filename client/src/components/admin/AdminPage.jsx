import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Switch, Route, useRouteMatch,
} from 'react-router-dom';
import ProductsPage from './products/ProductsPage';
import AdminPageAppBar from './AdminPageAppBar';
import AdminPageDrawer from './AdminPageDrawer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    height: '100vh',
    padding: theme.spacing(4),
  },
}));

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
