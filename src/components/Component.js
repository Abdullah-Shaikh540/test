import React from 'react';
import './Component.css';

const Component = () => {
  return (
    <div className="container">
      <div className="div toronto-div">
        <h1>TORONTO</h1>
        <p>Canada’s most delicious cupcakes for Business Meetings, Birthdays, Weddings...</p>
        <p>Our cupcakes are baked daily using the finest ingredients.</p>
      </div>
      <div className="div cupcakes-div">
        <p><h1>CUPCAKES</h1></p>
        <p>SWEET</p>
        <p>DELICIOUS</p>
        <p className="order-now">Order now.</p>
        <p>647-478-9464</p>
      </div>
      <div className="div image-div">
        <img src={process.env.PUBLIC_URL + '/Images/Component.png'} alt="Cupcake" />
      </div>
    </div>
  );
};

export default Component;
