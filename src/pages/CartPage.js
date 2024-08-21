import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../redux/cartSlice';
import './CartPage.css';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Calcular el total de plantas y el coste total
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const totalCost = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.replace('$', '')); // Asegúrate de que price es un número
    return total + (price * item.quantity);
  }, 0);

  return (
    <div className="cart-page">
      <h1>Carrito de Compras</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>Precio: {item.price}</p>
            <p>Cantidad: {item.quantity}</p>
            <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
            <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
            <button onClick={() => dispatch(removeFromCart(item.id))}>Eliminar</button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Total de Plantas: {totalItems}</h2>
        <h2>Costo Total: ${totalCost.toFixed(2)}</h2>
        <button disabled>Finalizar Compra</button>
        <Link to="/products">
          <button>Continuar Comprando</button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
