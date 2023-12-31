
import React from 'react';
import './App.css';
/*
import Header from './components/Header';
import SecondComponent from './components/SecondComponent';
import ThirdComponent from './components/ThirdComponent';

import Component from "./components/Component";
import PracticeComponent from "./components/PracticeComponent";
*/



import PracticeComponent from "./components/PracticeComponent";

function App() {

  let imageaddress = process.env.PUBLIC_URL + '/Images/card.png';
  let imageaddress1 = process.env.PUBLIC_URL + '/Images/card2.png';
  let imageaddress2 = process.env.PUBLIC_URL + '/Images/card3.png';
  let imageaddress3 = process.env.PUBLIC_URL + '/Images/card4.png';

  let textp = "Abdullah Shaikh";
  let text1 = "Fahad Maqsood";
  let text2 = "Muhammad Ali";
  let text3 = "Muhammad Noman";

  return (
    <>
    <PracticeComponent id={imageaddress} textsend={textp}/>
    <PracticeComponent id={imageaddress1} textsend={text1}/>
    <PracticeComponent id={imageaddress2} textsend={text2}/>
    <PracticeComponent id={imageaddress3} textsend={text3}/>



    </>
  );
}

export default App;


/*
import React from 'react';
import ProductList from './components/ProductList';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <h1>Product List</h1>
      <ProductList />
    </div>
  );
}

export default App;
*/


/*
import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}   

export default App;
*/

