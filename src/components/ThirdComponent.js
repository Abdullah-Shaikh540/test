import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ThirdComponent.css'; // Import your custom CSS file for additional styling

const ThirdComponent = () => {
  return (
    
    <div className="container-fluid d-flex align-items-center justify-content-center main-container">
      {/* First div with three paragraphs */}
      <div className="testimonial-div">
        <p className="white-text">Testimonials</p>
        <h1 className="white-text">What People Are Saying</h1>
        <p className="white-text">Multi-chain interoperability</p>
      </div>

      <div>
      <div className="image-div">
        <img
          src={process.env.PUBLIC_URL + '/Images/girl.jpg'}
          alt="Image"
          className="image"
        />
      </div>

      {/* Third div with a single paragraph */}
      <div className="text-div">
        <p className="white-text">
          “Web3makr provides a solution for web3 developers and beginners by integrating the drag and drop feature for properties like NFT Search Marketplace, Wallet Integration, downloadable source code, and Smart Contract. Aside from this, the software also provides its users with ready-made and customizable templates that users can use when creating their web3 applications.”
        </p>
        <p className="white-text">- Sophie Adderiy</p>
      </div>
    </div>
    </div>
  );
};

export default ThirdComponent;
