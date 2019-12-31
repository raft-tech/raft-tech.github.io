import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState} from "react"
import headerLogo from "../images/raft-header-logo.png"

const Navbar = () => {
  const [full, setFull] = useState('')
  const showMenu = val => val ? 'show' : ''

  return (
  <header>
    <nav>
      <div className="left">
        <img src={headerLogo} alt="quad circle with text" />
      </div>
      <div className="right">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/services">
            <li>Services</li>
          </Link>
          <Link to="/clients">
            <li>Clients</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/blog">
            <li>Blog</li>
          </Link>
        </ul>
      </div>
      <a href="javascript:void(0);" className="icon" onClick={() => setFull(!full)}>
        <i class="fa fa-bars"></i>
      </a>
    </nav>
  </header>
)}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
