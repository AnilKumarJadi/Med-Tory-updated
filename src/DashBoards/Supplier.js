import React from 'react'
import { NavLink } from 'react-router-dom'

const SupplierDashboard = () => {
  return (
    <div>
      
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
              <NavLink to="suppliermangement" className="nav-link">
                Supplier Management
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  

    </div>
  )
}

export default SupplierDashboard
