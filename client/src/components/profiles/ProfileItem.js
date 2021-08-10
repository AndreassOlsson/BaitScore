import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    age,
    city,
    species,
    pbs,
    favoriteLure,
  },
}) => {
  const history = useHistory();

  function navigate() {
    history.push(`/profile/${_id}`);
  }

  return (
    <div className='parent shadow' onClick={navigate}>
      <img src={avatar} alt='' className='div1 round avatar' />
      <h3 className='div2'>{name}</h3>
      <h5
        className={
          status
            ? status.toString().replace(/ /, '-').toLowerCase() + ' div3'
            : 'div3'
        }
      >
        {status}
      </h5>
      {age && city ? (
        <h6 className='div4'>
          {age}, {city}
        </h6>
      ) : (
        <h6 className='div4'>
          {age} {city}
        </h6>
      )}
      {favoriteLure ? (
        <p className='div5 miniFont'>
          <span className='hide-sm'>Favorite Lure:</span>
          <p
            className={
              status
                ? status.toString().replace(/ /, '-').toLowerCase() +
                  ' miniHeader no-wordwrap'
                : 'miniHeader'
            }
          >
            {favoriteLure}
          </p>
        </p>
      ) : (
        ''
      )}

      <ul className='div6 x-list'>
        {species.slice(0, 3).map((specie, index) => (
          <li key={index}>{specie}</li>
        ))}
      </ul>
      <ul className='div7 x-list'>
        {pbs.slice(0, 3).map((pb, index) => (
          <li key={index}>
            <i className='fas fa-medal'></i>
            {pb}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
