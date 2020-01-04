import React from "react"
import nameLogo from "../images/raft-name-logo.png"
import { FaFacebook, FaLinkedin } from "react-icons/fa"

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="row row-1">
          <div className="logo">
            <img src={nameLogo} alt="raft logo with text" />
          </div>
          <div className="contact address">
            2100 6th Avenue
            <br />
            Arlington, VA 22212
          </div>
          <div className="contact other">
            <div className="phone">Phone: (888)555-5121</div>
            <div className="fax">Fax: (888)555-3432</div>
            <div className="email">E-mail: info@raft.com</div>
          </div>
        </div>

        <div className="row social">
          <div className="platform fb">
            <FaFacebook />
          </div>
          <div className="platform li">
            <FaLinkedin />
          </div>
        </div>
      </footer>
      <div id="copyright">&copy; Raft 2020</div>
    </>
  )
}