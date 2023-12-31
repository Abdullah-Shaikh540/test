import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SecondComponent.css'; // Import your custom CSS file for additional styling

const SecondComponent = () => {
  return (
    <>
      <div className="container-fluid d-flex align-items-center justify-content-center main-container">
        {/* First div with paragraphs and an image */}
        <div className="first-div">
          <p>
            <h1>Web3Makr Redefining</h1>
          </p>
          <p>
            <h2>How to Create</h2>
          </p>
          <p>unblock the blockchain potential to create</p>
          <p>Web3 Applications</p>

          {/* Second div with YouTube icon */}
          <div className="youtube-icon">
            <img
              src={process.env.PUBLIC_URL + '/Images/Play 02.png'}
              alt="YouTube Icon"
              className="youtube-icon-img"
            />
          </div>
        </div>
      </div>

      <div className="container-fluid d-flex align-items-center justify-content-center secondclass">
        <div className="youtube-icon">
          <img
            src={process.env.PUBLIC_URL + '/Images/Mockup.png'}
            alt="Square Image"
            className="Square-image"
          />
        </div>
      </div>
    </>
  );
};

export default SecondComponent;
