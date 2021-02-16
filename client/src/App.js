import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import Contentbox from './components/layout/Contentbox';
import Imgcontainer from './components/layout/Imgcontainer';
import './App.css';

const App = () => (
  <Fragment>
    <div className='content'>
      <Navbar />
      <Landing />
      <div className='content-cluster bg-shark'>
        <Contentbox
          header='Find the best lures'
          text='BaitScore hosts regular polls that allows members to vote on their favorite lures and thereby 
          sheds light on the lures that are the most effective'
        />
        <Imgcontainer />
        <Contentbox
          header='Learn from others'
          text='BaitScore allows anglers to learn new fishing strategies from others by encouraging users to share their 
          knowledge and stories on active discussion threads'
        />
      </div>
    </div>
    <Footer />
  </Fragment>
);

export default App;
