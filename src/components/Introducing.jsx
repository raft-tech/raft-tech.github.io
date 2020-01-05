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
          A new breed of digital consulting firm, that’s part full stack consultancy, part think tank and part band of creative mercenaries. We’re problem solvers and innovators with a focus on Open Source. Our name is actually inspired from the <a href="raft.github.io"> Raft Consensus Algorithm </a>, which revolutionized solving consensus problems by being more reliable and easier to understand. It is also the algorithm implemented by etcd (brain of the Kubernetes). We took on this name because we share a similar goal; replace any outdated, overly complex and outdated system with a new, effecient and secure one that <i>just</i> works.
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
