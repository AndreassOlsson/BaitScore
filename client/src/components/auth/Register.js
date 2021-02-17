import React from 'react';
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirm: '',
  });

  const { name, email, password, password_confirm } = formData;

  return (
    <Fragment>
      <h1 className='large textbox'>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user'></i>Create your account
      </p>
      <form className='form' action='create-profile.html'></form>
      <div className='form-group'>
        <input type='text' placeholder='Name' name='name' required />
      </div>
      <div className='form-group'>
        <input type='email' placeholder='Email Adress' name='email' />
        <small className='form-text'>
          This site uses gravatar, so if you want a profile image, use a
          Gravatar email
        </small>
      </div>
      <div className='form-group'>
        <input
          type='password'
          placeholder='Password'
          name='password'
          minLength='6'
        />
      </div>
      <div className='form-group'>
        <input
          type='password'
          placeholder='Confirm Password'
          name='password_confirm'
          minLength='6'
        />
      </div>
      <input type='submit' className='btn btn-primary' value='Register' />
      <p className='my-1'>
        Already have an account? <Link to='/login'>Sign in</Link>
      </p>
    </Fragment>
  );
};

export default Register;
