import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import headerLogo from "../images/raft-header-logo.png"
import { FaBars } from "react-icons/fa"

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
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/clients">Clients</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <div id="hamburger" className="menubars" onClick={toggleMenu}>
          <FaBars />
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
