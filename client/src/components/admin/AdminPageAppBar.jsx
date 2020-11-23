import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import drawerWidth from './AdminPageStyles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShifted: {
    width: `calc(100% - ${drawerWidth})`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

const AdminPageAppBar = ({ isShifted, onIconClick }) => {
  const classes = useStyles();
  return (
    <AppBar className={clsx(classes.appBar, isShifted && classes.appBarShifted)}>
      <Toolbar>
        <IconButton edge="start" onClick={onIconClick}>
          <MenuIcon />
        </IconButton>
        <Typography component="h1" variant="h6">
          Admin Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

AdminPageAppBar.propTypes = {
  isShifted: PropTypes.bool.isRequired,
  onIconClick: PropTypes.func.isRequired,
};

export default AdminPageAppBar;
