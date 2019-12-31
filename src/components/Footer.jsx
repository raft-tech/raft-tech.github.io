import React from "react"
import footerLogo from "../images/raft-footer-logo.png"
import { FaFacebook, FaLinkedin } from "react-icons/fa"

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="logo">
          <img src={footerLogo} alt="raft logo with text" />
        </div>
        <div className="contact">
          <div className="company">Raft</div>
          <div className="address">
            2100 6th Avenue
            <br />
            Arlington, VA 22212
          </div>
          <div className="email">info@raft.com</div>
          <div className="phone">(888)555-5121</div>
          <div className="fax">(888)555-3432</div>
        </div>
        <div className="social">
          <div className="platform fb">
            <FaFacebook />
          </div>
          <div className="platform li">
            <FaLinkedin />
          </div>
          {/* <div className="platform"></div> */}
          {/* <div className="platform"></div> */}
        </div>
      </footer>
      <div id="copyright">&copy; Raft 2020</div>
    </>
  )
}
