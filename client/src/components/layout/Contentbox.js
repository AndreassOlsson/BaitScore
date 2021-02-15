import React from 'react';

const Contentbox = (props) => {
  return (
    <div className='contentbox'>
      <h1>{props.header}</h1>
      <p>{props.text}</p>
      <img src={props.src} alt={props.alt} />
    </div>
  );
};

export default Contentbox;
