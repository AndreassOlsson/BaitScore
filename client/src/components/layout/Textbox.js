import React from 'react';

const Textbox = (props) => {
  return (
    <div className='textbox'>
      <h1>{props.header}</h1>
      <p>{props.text}</p>
    </div>
  );
};

export default Textbox;
