// BlueButtonComponent.js
import React from 'react';
import './BlueButtonComponent.css';

const BlueButtonComponent = (props) => {
  return (
    <div className="blue-button-container">
      <button className="btn btn-primary custom-button">Click Me</button> {props.children}
    </div>
  );
};

export default BlueButtonComponent;
