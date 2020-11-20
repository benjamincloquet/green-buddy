import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const AdminPage = ({ auth }) => {
  if (!auth.isAuthenticated || !auth.user.admin) {
    return null;
  }
  return (
    <div className="admin-page">
      <p>
        Admin Page
      </p>
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
