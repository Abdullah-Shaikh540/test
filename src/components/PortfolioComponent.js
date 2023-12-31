import React from 'react';
import './PortfolioComponent.css';

const PortfolioComponent = () => {
  return (
    <div className="portfolio-container">
      <div className="title-div">
        <p className="title"><h1>PORTFOLIO</h1></p>
        <hr className="hr-line" />
      </div>
      <div className="content-div">
        <p>
          Si stante, hoc natura videlicet vult, salvam esse se, quod concedimus ses haec dicturum fuisse
        </p>
      </div>
      <div className="nav-bar">
        <div className="nav-item" id="blue" >All</div>
        <div className="nav-item">App</div>
        <div className="nav-item">Card</div>
        <div className="nav-item">WEB</div>
      </div>
      <div className="image-grid">
        <div className="image-grid-item">
          <img src={process.env.PUBLIC_URL + '/Images/portfolio.png'} alt="Image 1" />
        </div>
        <div className="image-grid-item">
        <img src={process.env.PUBLIC_URL + '/Images/portfolio.png'} alt="Image 1" />
        </div>
        <div className="image-grid-item">
        <img src={process.env.PUBLIC_URL + '/Images/portfolio.png'} alt="Image 1" />
        </div>
        <div className="image-grid-item">
        <img src={process.env.PUBLIC_URL + '/Images/portfolio.png'} alt="Image 1" />
        </div>
        <div className="image-grid-item">
        <img src={process.env.PUBLIC_URL + '/Images/portfolio.png'} alt="Image 1" />
        </div>
        <div className="image-grid-item">
        <img src={process.env.PUBLIC_URL + '/Images/portfolio.png'} alt="Image 1" />
        </div>
        <div className="image-grid-item">
        <img src={process.env.PUBLIC_URL + '/Images/portfolio.png'} alt="Image 1" />
        </div>
        <div className="image-grid-item">
        <img src={process.env.PUBLIC_URL + '/Images/portfolio.png'} alt="Image 1" />
        </div>
        <div className="image-grid-item">
        <img src={process.env.PUBLIC_URL + '/Images/portfolio.png'} alt="Image 1" />
        </div>
      </div>
    </div>
  );
};

export default PortfolioComponent;
