import React from 'react';

const Landing = () => {
  return (
    <section className='landing  dark-overlay'>
      <div>
        <div className='landing-content'>
          <h1 className='x-large'>BaitScore</h1>
          <p className='lead'>
            BaitScore is a social network that brings all fishermen together and
            lets users share their favorite fishing stories, techniques and
            lures
          </p>
          <div className='btns'>
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
