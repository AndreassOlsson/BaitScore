import React from 'react';

const Landing = () => {
  return (
    <section className='landing'>
      <div>
        <div className='landing-content linear-gradient rounded shadow'>
          <div className='logo'></div>
          <p className='lead'>
            BaitScore is a social network that brings all fishermen together and
            lets users share their favorite fishing stories, techniques and
            lures
          </p>
          <div className='buttons'>
            <a href='register.html' className='btn btn-primary'>
              Sign Up
            </a>
            <a href='login.html' className='btn btn-light'>
              Login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
