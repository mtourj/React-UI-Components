import React from 'react';
import './Button.css';

const NumberButton = props => {
  return (
    <a onClick={props.click} href="##" className='button numBtn '>{props.value}</a>
  );
}

export default NumberButton;