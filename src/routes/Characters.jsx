import { Link } from "react-router-dom"

import "./Characters.css"


const Characters = () => {
  return (
    <div className="characters-container">
    <h1>Personagens</h1>
    <p>
      <Link to="/characters/gon">Gon</Link>
    </p>
    <p>
      <Link to="/characters/killua">Killua</Link>
    </p>
    <p>
      <Link to="/characters/meruem">Meruem</Link>
    </p>
    </div>
  )
}

export default Characters