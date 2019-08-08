import React from 'react'
import {
  Link
} from 'react-router-dom';

const Navbar = () => (
	<nav className="#1e88e5 blue darken-1">
          <div className="nav-wrapper">
            <Link to = "/" className="brand-logo">LMS</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to = "/" >Home</Link>
                </li>
              <li>
                <Link to = "/about_us" >About</Link>
              </li>
              <li>
                <Link to = "/contact" >Contact</Link>
              </li>
              <li>
                <Link to = "/books" >Books List</Link>
              </li>
            </ul>
          </div>
       </nav>


	)
  
        

export default Navbar;
