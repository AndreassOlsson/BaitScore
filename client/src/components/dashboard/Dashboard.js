import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteAccount, getCurrentProfile } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import DashboardActions from './DashboardActions';
import ProfileTop from '../profile/ProfileTop';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <section className={profile === null ? '' : 'whole-screen py-0'}>
        <div className='center-x py-0'>
          {profile !== null ? (
            <Fragment>
              <ProfileTop profile={profile} />
              <div className='btns'>
                <DashboardActions />
                <div className='my-2'>
                  <button
                    className='btn btn-danger'
                    onClick={() => deleteAccount()}
                  >
                    <i className='fas fa-user-minus'></i>
                    {''}
                    Delete Account
                  </button>
                </div>
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <div className='noProfilePage'>
                <div className='bruh'>
                  <p className='lead light-font'>
                    You have not yet created a profile :(
                  </p>
                  <Link to='/create-profile' className='btn btn-primary my-1'>
                    Create profile
                  </Link>
                </div>
              </div>
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
  deleteAccount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  getCurrentProfile,
  deleteAccount,
})(Dashboard);
