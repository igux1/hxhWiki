import { Link } from "react-router-dom"

import "./Navbar.css"


const Navbar = () => {
  return (
    <div>
    <nav>
        <Link to ="/hxhWiki/">Home</Link>
        <Link to ="characters">Characters</Link>
        <Link to ="phantomTroupe">Phantom Troupe</Link>
    </nav>
    </div>
  )
}

export default Navbar