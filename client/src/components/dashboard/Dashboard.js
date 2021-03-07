import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <section className='whole-screen'>
        <div className='content-card'>
          <h1 className='x-large'>Dashboard</h1>
          <p className='lead'>
            <i className='fas fa-user'></i>
            Welcome {user && user.name}
          </p>
          {profile !== null ? (
            <Fragment>HAS GOT A PROFILE</Fragment>
          ) : (
            <Fragment>
              <p className='lead dark-font'>
                You have not yet created a profile :(
              </p>
              <Link to='/create-profile' className='btn btn-primary my-1'>
                Create profile
              </Link>
            </Fragment>
          )}
        </div>
      </section>
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
