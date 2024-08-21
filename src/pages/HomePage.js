import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; 

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Plantitas Anaya</h1>
      <p>LLeva vida y decoraccion a tu casa</p>
      <Link to="/products">
        <button>Comenzar</button>
      </Link>
    </div>
  );
};

export default HomePage;

