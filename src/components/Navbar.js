import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import resume from './Julians_Resume_2023_2024.pdf'

const Navbar = () => {
    return (
        <nav className="Navbar">
            <NavLink to="/Website/"  activeClassName="Navbar-active" end>Home</NavLink>
            <NavLink to="/Website/about" activeClassName="Navbar-active">About</NavLink>
            <NavLink to="/Website/projects" activeClassName="Navbar-active">Projects</NavLink>
            <a href={resume} className="Navbar-link"  rel="noopener noreferrer">Resume</a>
        </nav>
    )
}

export default Navbar;