import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const UserPage = ({ auth }) => {
  if (!auth.isAuthenticated) {
    return null;
  }
  return (
    <div className="user-page">
      <p>
        Your account :
      </p>
    </div>
  );
};

UserPage.propTypes = {
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool,
    user: PropTypes.shape(),
  }).isRequired,
};

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps, null)(UserPage);
