import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <Link className="header__title" to="/">
          Calculadora
        </Link>
        <nav className="nav">
          <ol className="navbar">
            <li>
              <Link to="/calculadoras/micro">Microcinta</Link>
            </li>
            <li>
              <Link to="/calculadoras/coaxial">Coaxial</Link>
            </li>
            <li>
              <Link to="/calculadoras/bifiliar">Bifiliar</Link>
            </li>
          </ol>
        </nav>
      </div>
    </header>
  )
}

export default Header
