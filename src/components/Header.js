import React from 'react';
import './Header.css'; // Import your CSS file

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src={process.env.PUBLIC_URL + '/Images/image.jpg'}
          alt="Logo"
          className="logo"
        />
      </div>
      <div className="links-container">
        <div className="link">Web3Makr</div>
        <div className="link silver">White Paper</div>
        <div className="link silver">Services</div>
        <div className="link silver">Tool</div>
        <div className="link silver">Contact Us</div>
        <div className="link blue start-for-free" id="border">Start for Free</div>
      </div>
    </div>
  );
};

export default Header;
