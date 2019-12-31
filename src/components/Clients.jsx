import React from "react"
import { Link } from "gatsby"

export const Clients = () => {
  return (
    <div id="clients">
      <h1>Clients &amp; Partners</h1>
      <div className="logos">
        <Logo url="" image="" />
        <Logo url="" image="" />
        <Logo url="" image="" />
        <Logo url="" image="" />
        <Logo url="" image="" />
        <Logo url="" image="" />
      </div>
    </div>
  )
}

const Logo = ({ image, url }) => {
  return (
    <div className="logo">
      <Link to={url}>
        <img src={image} alt="" />
      </Link>
    </div>
  )
}