import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const HomePage = ({ user }) => (
  <div className="home-page">
    <p>
      {`Welcome ${user ? user.firstName : 'guest'} !`}
    </p>
  </div>
);

HomePage.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
  }),
};

HomePage.defaultProps = {
  user: null,
};

const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps, null)(HomePage);
