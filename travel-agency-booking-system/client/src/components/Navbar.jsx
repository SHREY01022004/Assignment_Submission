import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <h2>Travel Agency</h2>
    <Link to="/">Packages</Link>
    <Link to="/admin">Admin</Link>
  </nav>
);

export default Navbar;
