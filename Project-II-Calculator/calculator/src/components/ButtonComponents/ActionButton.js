import React from 'react';
import './Button.css';

const ActionButton = props => {
  return (
    <a onClick={props.click} href="##" className="button actionBtn">{props.value}</a>
  );
}

export default ActionButton;