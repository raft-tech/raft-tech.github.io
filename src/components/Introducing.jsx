import React from "react"
import { Link } from "gatsby"
import raftLogo from "../images/raft-logo-712.jpg"

export const Introducing = () => {
  return (
    <div id="introducing">
      <div className="left">
        <h1>
          Introducing <span>raft</span>
        </h1>
        <p>
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum Lorem ipsum Lorem ipsum..{" "}
        </p>
        <Link to="#about">
          <div className="button learn-more">Learn More ></div>
        </Link>
      </div>
      <div className="right">
        <img src={raftLogo} alt="raft quad circle logo" />
      </div>
    </div>
  )
}
