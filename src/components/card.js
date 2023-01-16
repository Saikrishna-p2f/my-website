import React from "react";
import './cart.css'
import {FaRupeeSign} from 'react-icons/fa';

const Cards = ({ item, handleClick }) => {
  const { CourseName, CourseDuration, Fee, page } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={page} alt="" />
      </div>
      <div className="details">
        <p>{CourseName}</p>
        <p>{CourseDuration}</p>
        <p>Price - <small><FaRupeeSign/></small>{Fee}</p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Cards;