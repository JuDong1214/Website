import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="Navbar">
            <NavLink to="/Website" activeClassName="Navbar-active" end>Home</NavLink>
            <NavLink to="/Website/about" activeClassName="Navbar-active">About</NavLink>
            <NavLink to="/Website/projects" activeClassName="Navbar-active">Projects</NavLink>
            <a href="https://judong1214.github.io/Website/Julians_Resume_2023_2024.pdf" className="Navbar-link" rel="noopener noreferrer">Resume</a>
        </nav>
    )
}

export default Navbar;