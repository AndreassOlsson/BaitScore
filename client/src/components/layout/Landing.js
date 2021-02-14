import React from 'react';

const Landing = () => {
  return (
    <section className='landing'>
      <div className='darkOverlay'>
        <div className='landing-content'>
          <h1 className='x-large'>BaitScore</h1>
          <p className='lead'>
            A social network that brings fishermen together and lets users share
            their favorite fishing stories, techniques and lures
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
