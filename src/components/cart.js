import React, { useState, useEffect } from "react";
import "./cart.css";
import {FaRupeeSign} from 'react-icons/fa';

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans +=  parseInt(item.Fee)));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.page} alt="" />
            <p>{item.CourseName}</p>
          </div>
          {/* <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div> */}
          <div>
            <span><small><FaRupeeSign/></small>{item.Fee}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span><small><FaRupeeSign/></small>{price}</span>
      </div>
    </article>
  );
};

export default Cart;
