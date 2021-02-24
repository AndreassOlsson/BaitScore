import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
//import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('SUCCESS');
  };

  return (
    <Fragment>
      <section className='whole-screen abstract-background'>
        <div className='content-card shadow'>
          <h1 className='large'>Login</h1>
          <p className='lead black'>
            <i className='fas fa-user'></i>Login to your account
          </p>
          <form className='form' onSubmit={(e) => onSubmit(e)}>
            <div className='form-group'>
              <input
                type='email'
                placeholder='Email Adress'
                name='email'
                value={email}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className='form-group'>
              <input
                type='password'
                placeholder='Password'
                name='password'
                value={password}
                onChange={(e) => onChange(e)}
                minLength='6'
                required
              />
            </div>
            <input type='submit' className='btn btn-primary' value='Login' />
          </form>
          <p className='my-1 black'>
            Don´t have an account?{' '}
            <Link to='/register' className='link-primary'>
              Sign up
            </Link>
          </p>
        </div>
      </section>
    </Fragment>
  );
};

export default Login;
