import React from 'react'


class Navbar extends React.Component {
  render() {
    return(
        <nav class="#1e88e5 blue darken-1">
          <div class="nav-wrapper">
            <a href="#" class="brand-logo ">LMS</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><a href="/">Home</a></li>
              <li><a href="/about_us">About us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
       </nav>
    )

  }
}
export default Navbar;
