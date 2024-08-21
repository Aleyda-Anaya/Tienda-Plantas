import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice'; 
import './ProductsPage.css';

import plant1 from '../assets/planta1.jpg';
import plant2 from '../assets/planta2.jpg';
import plant3 from '../assets/planta3.jpg';
import plant4 from '../assets/planta4.jpg';
import plant5 from '../assets/planta5.jpg';
import plant6 from '../assets/planta6.jpg';

const products = [
  { id: 1, name: 'Bonsai', price: '$10', image: plant1 },
  { id: 2, name: 'Savila', price: '$15', image: plant2 },
  { id: 3, name: 'Patano', price: '$20', image: plant3 },
  { id: 4, name: 'Mostera', price: '$25', image: plant4 },
  { id: 5, name: 'Balazo', price: '$30', image: plant5 },
  { id: 6, name: 'Cactus', price: '$35', image: plant6 },
];

const ProductsPage = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="products-page">
      <h1>Nuestras Plantas</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Añadir a la cesta</button>
          </div>
        ))}
      </div>
      <Link to="/" className="back-home">
        <button>Volver al Inicio</button>
      </Link>
      <Link to="/cart" >
        <button className="view-cart">Ir al Carrito</button>
      </Link>
    </div>
  );
};

export default ProductsPage;