import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
}) => {
  const [formData, setFormData] = useState({
    city: '',
    age: '',
    status: '',
    species: '',
    pbs: '',
    favoriteLure: '',
    bio: '',
    youtube: '',
    twitter: '',
    facebook: '',
    instagram: '',
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      city: loading || !profile.city ? '' : profile.city,
      age: loading || !profile.age ? '' : profile.age,
      status: loading || !profile.status ? '' : profile.status,
      species: loading || !profile.species ? '' : profile.species.join(','),
      pbs: loading || !profile.pbs ? '' : profile.pbs.join(','),
      favoriteLure:
        loading || !profile.favoriteLure ? '' : profile.favoriteLure,
      bio: loading || !profile.bio ? '' : profile.bio,
      youtube: loading || !profile.social ? '' : profile.social.youtube,
      twitter: loading || !profile.social ? '' : profile.social.twitter,
      facebook: loading || !profile.social ? '' : profile.social.facebook,
      instagram: loading || !profile.social ? '' : profile.social.instagram,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  const {
    city,
    age,
    status,
    species,
    pbs,
    favoriteLure,
    bio,
    youtube,
    twitter,
    facebook,
    instagram,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, true);
  };

  return (
    <Fragment>
      <section className='whole-screen center-content abstract-background'>
        <div className='content-card shadow'>
          <h1 className='large'>Edit your profile</h1>
          <p className='lead'>
            <i className='fas fa-user'></i>
            Add some information to make your profile stand out!
          </p>
          <small>* = required field</small>
          <form className='form' onSubmit={(e) => onSubmit(e)}>
            <div className='form-group'>
              <select
                name='status'
                className='primary-font'
                value={status}
                onChange={(e) => onChange(e)}
              >
                <option value='0'>* Select your fishing status</option>
                <option value='Fishing Novice'>Fishing Novice</option>
                <option value='Casual Angler'>Casual Angler</option>
                <option value='Experienced Fisherman'>
                  Experienced Fisherman
                </option>
                <option value='Professional Fisherman'>
                  Professional Fisherman
                </option>
                <option value='Other'>Other</option>
              </select>
              <small className='form-text'>
                Give us an idea of what type of fisherman you are
              </small>
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Age'
                name='age'
                value={age}
                onChange={(e) => onChange(e)}
              />
              <small className='form-text'>How old are you?</small>
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='City'
                name='city'
                value={city}
                onChange={(e) => onChange(e)}
              />
              <small className='form-text'>Where do you live?</small>
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Species'
                name='species'
                value={species}
                onChange={(e) => onChange(e)}
              />
              <small className='form-text'>Ex: Pike, Perch, Char</small>
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Pbs'
                name='pbs'
                value={pbs}
                onChange={(e) => onChange(e)}
              />
              <small className='form-text'>Ex: 10kg, 1kg, 2kg</small>
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='* Favoritelure'
                name='favoriteLure'
                value={favoriteLure}
                onChange={(e) => onChange(e)}
              />
              <small className='form-text'>What is your favorite lure?</small>
            </div>
            <div className='form-group'>
              <textarea
                placeholder='A short description of yourself'
                name='bio'
                value={bio}
                onChange={(e) => onChange(e)}
              ></textarea>
              <small className='form-text'>
                Tell us something about yourself!
              </small>
            </div>
            <div className='my-2 added-margin'>
              <button
                onClick={() => toggleSocialInputs(!displaySocialInputs)}
                type='button'
                className='btn btn-light'
              >
                Add social network links
              </button>
            </div>

            {displaySocialInputs && (
              <Fragment>
                <div className='form-group social-input'>
                  <i className='fab fa-instagram fa-2x'></i>
                  <input
                    type='text'
                    placeholder='Instagram URL'
                    name='instagram'
                    value={instagram}
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div className='form-group social-input'>
                  <i className='fab fa-facebook fa-2x'></i>
                  <input
                    type='text'
                    placeholder='Facebook URL'
                    name='facebook'
                    value={facebook}
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div className='form-group social-input'>
                  <i className='fab fa-twitter fa-2x'></i>
                  <input
                    type='text'
                    placeholder='Twitter URL'
                    name='twitter'
                    value={twitter}
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div className='form-group social-input'>
                  <i className='fab fa-youtube fa-2x'></i>
                  <input
                    type='text'
                    placeholder='Youtube URL'
                    name='youtube'
                    value={youtube}
                    onChange={(e) => onChange(e)}
                  />
                </div>
              </Fragment>
            )}

            <input type='submit' className='btn btn-primary my-1' />
            <Link to='/dashboard' className='btn btn-light my-1'>
              Go back
            </Link>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
