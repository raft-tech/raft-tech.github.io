import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import headerLogo from "../images/raft-header-logo.png"
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
  const [menuViz, setMenuViz] = useState("")
  const toggleMenu = () => setMenuViz(!menuViz)
  const menuClass = menuViz ? "right show" : "right"

  return (
    <header>
      <nav>
        <div className="left">
          <img className="logo" src={headerLogo} alt="quad circle with text" />
        </div>
        <div id="nav-links" className={menuClass}>
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Services</Link>
          <Link to="/">Clients</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Blog</Link>
        </div>
        <div id="hamburger" className="menubars" onClick={toggleMenu}>
         {menuViz ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    </header>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
