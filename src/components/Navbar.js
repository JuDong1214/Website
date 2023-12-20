import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="Navbar">
            <NavLink exact to="/" activeClassName="Navbar-active">Home</NavLink>
            <NavLink exact to="/about" activeClassName="Navbar-active">About</NavLink>
            <NavLink exact to="/projects" activeClassName="Navbar-active">Projects</NavLink>
            <a href="./Julians_Resume_2023_2024.pdf" className="Navbar-link">Resume</a>
        </nav>
    )
}

export default Navbar;