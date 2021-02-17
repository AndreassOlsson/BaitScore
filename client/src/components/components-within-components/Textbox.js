import React from 'react';

const Textbox = (props) => {
  return (
    <div className='textbox'>
      <h1>{props.header}</h1>
      <p>{props.text}</p>
      <img src={props.src} alt={props.alt} />
    </div>
  );
};

export default Textbox;
