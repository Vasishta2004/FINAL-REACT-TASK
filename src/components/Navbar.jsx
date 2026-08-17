import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Auto<span>Hub</span></div>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cars">Cars</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;