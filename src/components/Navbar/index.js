import React, { useState, useEffect } from 'react';
import "./Navbar.styles.css";


const Navbar = () => {
    const [open, setOpen]= useState(false);
    const [isSticky, setIsSticky]= useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
        <nav className={`navbar ${isSticky ? "sticky_nav" : ""}`} id="navbar">
            <h2 className='navbarTitle'>Explore</h2>
            <div className='navbarContent'>
                <img src={
                    open ? "assets/nav/close.svg" : "assets/nav/menu.svg"
                } alt="" className='menuIcon' onClick={()=>setOpen(!open)}/>
                <ul className={`navbarMenu ${open && "menuOpen"}`} onClick={()=>setOpen(false)}>
                    <li className='menuItem'>
                        <a href="#category">Categories</a>
                    </li>

                    <li className='menuItem'>
                        <a href='#top_selling'>Top Selling</a>
                    </li>

                    <li className='menuItem'>
                        <a href="#eazy_and_fast">Eazy and fast</a>
                    </li>

                    {/* <li className='menuItem'>
                        <a href="#testimonial">Testimonials</a>
                    </li> */}

                    {/* <li className='menuItem'>
                        <a href="#subscribe">Subscribe</a>
                    </li> */}
                    <li className='menuItem'>
                        <a href="#footer">About us </a>
                    </li>
                </ul>
            </div>
        </nav>
  )
}

export default Navbar;