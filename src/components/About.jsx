import React from 'react';
import { NavLink } from 'react-router-dom';
import '../static/css/About.css';

const About = () =>{
    return (
        <>
        <div className='a-about'>
            <div className='a-about-title'>
                <h2>About Me -</h2>
            </div>
            <div className='a-about-content' >
                <div className='a-content-text' >
                    <h4>Hi !</h4>
                    <p className=''>I am <b>Ankit Gupta</b>. I am a Web Developer. I am pursuing
                        <a href='https://ipsacademy.org' > Integrated MCA from IPS Academy Indore. </a>
                    </p>
                    <p>
                    I develop websites for small businessess, schools, personal portfolio.
                    Feel free to <NavLink exact to='/contact' > Contact me </NavLink>for any of these services.
                    </p>
                </div>
                <div className='a-content-images' >
                    <div>
                        <img src={require('../static/images/profile.jpg')} alt='about' className='a-content-image' />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default About;