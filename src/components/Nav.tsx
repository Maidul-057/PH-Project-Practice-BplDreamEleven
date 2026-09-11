import React from 'react';
import logo from '../assets/logo.png'

const Nav = () => {
    return (
        <nav className=" bg-red-100" > 
        <div className=" container mx-auto flex justify-between">
      <img src={logo} alt="logo" />
      <ul className="flex gap-5 items-center">
        <li>Home</li>
        <li>Fixtures</li>
        <li>Player</li>
        <li>Schedule</li>
      </ul>
      </div>
    </nav>
    );
};

export default Nav;