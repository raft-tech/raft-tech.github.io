import React from "react"
import { Link } from "gatsby"
import raftLogo from "../images/raft-logo-712.jpg"
import raftWordLogo from '../images/raft-name-logo.png'

export const Introducing = () => {
  return (
    <section id="introducing">
      <div className="left">
        <h1 className="section-title">
          {/* Introducing <span>raft</span> */}
          Introducing <img className='word-logo' src={raftWordLogo} alt="raft word logo" />
        </h1>
        <p className='about'>
          We are a full stack digital consultancy that working synergistically with
          clients to achieve the state of continuous transformation and
          innovation. We have startup agility coupled with enterprise expertise.
          We believe transformation isn’t just a rush to catch up, it’s an
          opportunity to liberate people to fulfill their creative potential, to
          work more collaboratively, and to enjoy more meaningful professional
          relationships.
        </p>
        <Link to="#about">
          <div className="button learn-more">Learn More ></div>
        </Link>
      </div>
      <div className="right">
        <img src={raftLogo} alt="raft quad circle logo" />
      </div>
    </section>
  )
}
