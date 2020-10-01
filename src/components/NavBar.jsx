import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../static/css/navbar.css';


const NavBar = () =>{
    const [navStatus,setNavStatus] = useState(true);
    // const [dispGreet,setDispGreet] = useState(true);
    const node = useRef();
    useEffect(()=>{
        window.addEventListener('resize',(e)=>{
            if(window.innerWidth > 1050 ) { 
                setNavStatus(true); 
                // setDispGreet(true); 
            }
            else{ setNavStatus(false); 
                // setDispGreet(false); 
            }
        });

        window.addEventListener('load',(e)=>{
            (window.innerWidth <= 1050)?setNavStatus(false):setNavStatus(true);
        });

        document.addEventListener('mousedown',(e)=>{
            (!(node.current && node.current.contains(e.target)) && window.innerWidth <=1050)?setNavStatus(false):setNavStatus(true);
        });

        return ()=>{
            window.removeEventListener('resize');
            window.removeEventListener('load');
            document.removeEventListener('mousedown');
        }
    },[]);   
    const toggleNav = () =>{
        (navStatus === true && window.innerWidth<=1050)?setNavStatus(false):setNavStatus(true);
    }

    return (
        <>
        <div className='a-nav'>
            <button className='a-nav-opener fa fa-bars' onClick={toggleNav}>
            </button>
            { (navStatus)?
            (
                <div className='a-sidenav-content' ref={node}>
                <div className='a-greeting'>
                    <h3>Welcome <span onClick={toggleNav} className='a-hidden a-nav-closer'>X</span> </h3>
                </div>
                <div className='a-nav-items' >
                    <NavLink exact className='a-nav-item' to='/' activeClassName='a-active-class' onClick={toggleNav} >Home</NavLink>
                    <NavLink exact className='a-nav-item' to='/about' activeClassName='a-active-class' onClick={toggleNav} >About</NavLink>
                    <NavLink exact className='a-nav-item' to='/portfolio' activeClassName='a-active-class' onClick={toggleNav} >Portfolio</NavLink>
                    <NavLink exact className='a-nav-item' to='/skills' activeClassName='a-active-class' onClick={toggleNav} >Skills</NavLink>
                    <NavLink exact className='a-nav-item' to='/contact' activeClassName='a-active-class' onClick={toggleNav} >Contact</NavLink>                    
                </div>
                <div className='a-nav-contact'>
                    <a className='a-nav-contact-item fa fa-facebook a-nav-contact-fb' style={{color:'blue'}} onClick={toggleNav} href='https://www.facebook.com/AnkitGupta2408' ><span className='a-hidden' >Facebook</span></a>
                    <a className='a-nav-contact-item fa fa-instagram a-nav-contact-insta' href='https://www.instagram.com/gupta.ankit.2408/' style={{color:'maroon'}} onClick={toggleNav}  ><span className='a-hidden' >Instagram</span></a>
                    <a className='a-nav-contact-item fa fa-whatsapp a-nav-contact-whatsapp' href='https://wa.me/918989411680?text=Hello' style={{color:'green'}} onClick={toggleNav} ><span className='a-hidden' >WhatsApp</span></a>
                    <a className='a-nav-contact-item fa fa-github a-nav-contact-github' href='https://github.com/ankit-gupta-24' style={{color:'black'}} onClick={toggleNav} ><span className='a-hidden' >GitHub</span></a>
                    <a className='a-nav-contact-item fa fa-linkedin a-nav-contact-linkedin' href='https://www.linkedin.com/in/ankit8989gupta/' style={{color:'teal'}} onClick={toggleNav} ><span className='a-hidden' >LinkedIn</span></a>
                    <a className='a-nav-contact-item fa fa-twitter a-nav-contact-twitter' href='https://twitter.com/ANKITGU28845706' style={{color:'blue'}} onClick={toggleNav} ><span className='a-hidden' >Twitter</span></a>
                    <a className='a-nav-contact-item fa fa-phone a-nav-contact-phone' href='tel:8989411680' style={{color:'teal'}} onClick={toggleNav}><span className='a-hidden' >Call</span></a>
                </div>
                </div>
            ):(null)}
            
        </div>
        </>
    );
}

export default NavBar;