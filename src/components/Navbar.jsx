import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <img src="/alba-logo.svg" alt="" />
      <div className="nav-links">
        <Link to="/services">Service</Link>
        <Link to="/services">About</Link>
        <Link to="/services">Portoflio</Link>
        <Link to="/services">Blog</Link>
        <Link to="/services">Career</Link>
      </div>
      <button className="btn">Contact Us</button>
    </nav>
  );
};

export default Navbar;
