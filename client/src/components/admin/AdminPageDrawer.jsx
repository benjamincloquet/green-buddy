import PropTypes from 'prop-types';
import {
  Link, useRouteMatch,
} from 'react-router-dom';
import clsx from 'clsx';
import {
  Drawer,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListIcon from '@material-ui/icons/List';
import { useStyles } from './styles/AdminPageDrawerStyles';

const AdminPageDrawer = ({ isOpen, close }) => {
  const classes = useStyles();
  const match = useRouteMatch();

  return (
    <Drawer
      classes={{ paper: clsx(classes.paper, !isOpen && classes.paperClose) }}
      variant="permanent"
      open={isOpen}
    >
      <div className={classes.closeIcon}>
        <IconButton onClick={close}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button component={Link} to={`${match.url}/products`} key="drawer-products-button">
          <ListItemIcon><ListIcon /></ListItemIcon>
          <ListItemText primary="Products" />
        </ListItem>
      </List>
    </Drawer>
  );
};

AdminPageDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

export default AdminPageDrawer;
