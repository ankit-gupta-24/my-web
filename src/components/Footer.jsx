import React from 'react';
import { NavLink } from 'react-router-dom';
import '../static/css/Footer.css';

const Footer = () =>{

    const year = new Date().getFullYear();

    return (
        <>
        <div className='a-footer'>
            <div className='a-footer-links'>
                <NavLink to='/portfolio' >Portfolio</NavLink>
                <NavLink to='/skills'>Skills</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <a href='https://github.com/ankit-gupta-24'>GitHub</a>
                <a href='https://www.facebook.com/AnkitGupta2408/'>Facebook</a>
                <a href='https://www.instagram.com/gupta.ankit.2408/'>Instagram</a>
                <a href='https://www.linkedin.com/in/ankit8989gupta/'>LinkedIn</a>
                <a href='/'>WhatsApp</a>
            </div>
            <div className='a-copyright text-center'>
                <small>Ankit Gupta &copy; {year} </small>
            </div>
        </div>
        </>
    );
}

export default Footer;