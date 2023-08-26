import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/hxhWiki/">Home</Link>
        <Link to="characters">Characters</Link>
        <Link to="phantomTroupe">Phantom Troupe</Link>
        <Link to="zoldyckFamily">Zoldyck Family</Link>
        <Link to="nen">Nen</Link>
      </nav>
    </div>
  );
};

export default Navbar;
