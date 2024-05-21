import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <h2>Selling</h2>
          <h2 className="point">.</h2>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink>Products</NavLink>
              </li>
              <li>
                <NavLink>About Us</NavLink>
              </li>
              <li>
                <NavLink>Special</NavLink>
              </li>
              <li>
                <NavLink>Testimonials</NavLink>
              </li>
              <li>
                <NavLink>Blog</NavLink>
              </li>
              <li>
                <NavLink to="/add-product">Add Product</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
