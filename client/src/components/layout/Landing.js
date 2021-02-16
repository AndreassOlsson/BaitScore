import React from 'react';
import Textbox from '../layout/Textbox';
import Imgcontainer from '../layout/Imgcontainer';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section>
      <section className='landing  dark-overlay'>
        <div>
          <div className='landing-content'>
            <h1 className='x-large'>BaitScore</h1>
            <p className='lead'>
              BaitScore is a social network that brings all fishermen together
              and lets users share their favorite fishing stories, techniques
              and lures
            </p>
            <div className='btns'>
              <Link to='/register' className='btn btn-primary'>
                Sign Up
              </Link>
              <Link to='/login' className='btn btn-light'>
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className='content-cluster bg-shark'>
        <Textbox
          header='Find the best lures'
          text='BaitScore hosts regular polls that allows members to vote on their favorite lures and thereby 
            sheds light on the lures that are the most effective'
        />
        <Imgcontainer />
        <Textbox
          header='Learn from others'
          text='BaitScore allows anglers to learn new fishing strategies from others by encouraging users to share their 
            knowledge and stories on active discussion threads'
        />
      </section>
    </section>
  );
};

export default Landing;
