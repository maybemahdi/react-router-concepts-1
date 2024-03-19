import { NavLink } from "react-router-dom";
import './nav.css'

const NavBar = () => {
  
  return (
    <nav className="flex gap-8 my-10 font-semibold">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact US</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/posts">Posts</NavLink>
    </nav>
  );
};

export default NavBar;
