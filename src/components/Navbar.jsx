import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="nav-container">
      <nav className="nav">
        <img className="logo" src="/alba-logo.svg" alt="" />
        <div className={`nav-links ${nav ? "" : "hideNav"}`}>
          <Link to="/services">Service</Link>
          <Link to="/services">About</Link>
          <Link to="/services">Portoflio</Link>
          <Link to="/services">Blog</Link>
          <Link to="/services">Career</Link>
        </div>
        <button className="btn">Contact Us</button>
        <img className="nav-menu" src="/icons8-hamburger-menu-24.png" alt="" onClick={()=>setNav(prev => !prev)}/>
      </nav>
    </div>

  );
};

export default Navbar;
