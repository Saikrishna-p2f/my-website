import React from "react";
import "./navbar.css";
import { FaCartArrowDown } from 'react-icons/fa';
// import homestyles from './Header.module.css';
// import logo from '../images/sibney1.png'

const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      
      <div className="nav_box">

        <span className="my_shop" onClick={() => setShow(true)}>
          Add Course to cart
        </span>

        <div className="cart" onClick={() => setShow(false)}>

          <span>
            <FaCartArrowDown />
            <i className="fas fa-cart-plus"></i>

          </span>
          <span>{size}</span>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;