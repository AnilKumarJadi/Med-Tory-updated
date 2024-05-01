import React from 'react'
import Routess from "../Routes/Routess";
import Header from "../NavandFooter/Header";
import Navbar from "../NavandFooter/Navbar";
import Footer from "../NavandFooter/Footer";
import { NavLink } from 'react-router-dom';
const InventoryStaff = () => {
  return (
    <div>
      <Header />
    <div className="navbarr">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto  ">
            <li className="nav-item ">
              <NavLink to="/" className="nav-link">
                Home{" "}
              </NavLink>
            </li>
           
            <li className="nav-item ">
              <NavLink to="/inventorymangement" className="nav-link">
                Inventory Management
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink to="/ordermanagement" className="nav-link">
                Order Management
              </NavLink>
            </li>
           
          </ul>
        </div>
      </nav>
    </div>
  

      <Routess />
      <Footer />
    </div>
  )
}

export default  InventoryStaff 

