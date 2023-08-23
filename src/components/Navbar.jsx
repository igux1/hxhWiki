import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div>
    <nav>
        <Link to ="/">Home</Link>
        <Link to ="characters">Characters</Link>
    </nav>
    </div>
  )
}

export default Navbar