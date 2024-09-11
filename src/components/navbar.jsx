import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css';
import { MdOutlineAddHomeWork, MdInfoOutline, MdContactMail, MdBuild, MdEvent } from 'react-icons/md';
import  { useState } from 'react';
import { Button } from '@chakra-ui/react';

const Navbar = () => {
  const [query, setQuery] = useState('');

  // Handle input change
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // Optionally, you can implement a search submit handler if needed
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Perform search or redirect based on the query
    console.log('Search query:', query);
  };



  return (
    <nav>
      

      <img src="src/assets/logo.jpg" alt="Eclinic logo" className="logo" />
      <ul>
        
        <li>
          <Link to="/">
            <MdOutlineAddHomeWork /> Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            <MdInfoOutline /> About
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <MdContactMail /> Contact
          </Link>
        </li>
        <li>
          <Link to="/services">
            <MdBuild /> Services
          </Link>
        </li>
        <li>
          <Link to="/appointments">
            <MdEvent /> Appointments
          </Link>
        </li>
      </ul>
      <div className="navbar-container">
       
        <form onSubmit={handleSearchSubmit} className="search-form">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search..."
          />
          <button type="submit">Search</button>
          
        </form>
        
      </div>
      <div className="book">
        <Link to="/Bookward">
      <Button  colorScheme='blue'>Book Ward</Button>
        </Link>
      </div>
      <div className="book">
        <Link to="/Emergency">
      <Button  colorScheme='blue'>Emergency</Button>
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;