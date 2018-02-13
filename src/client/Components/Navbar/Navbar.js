import React from 'react';

import './Navbar.scss';

const Navbar = function(props) {
  return (
    <div className="navbar-container">
      <a href="#">Home</a>
      <a href="#">Profile</a>
      <a href="#">Trails</a>
      <button>Logout</button>
    </div>
  );
}

export default Navbar;
