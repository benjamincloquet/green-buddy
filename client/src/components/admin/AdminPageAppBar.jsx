import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './styles/AdminPageAppBarStyles';

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
