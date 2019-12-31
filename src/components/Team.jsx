import React from "react"
import placeholder from "../images/raft-member.png"

export const Team = () => {
  return (
    <div id="team">
      <h1>Our Team</h1>
      <div className="members">
        <Member
          name="First Name Last Name"
          title="Company Title"
          image={placeholder}
        />
        <Member
          name="First Name Last Name"
          title="Company Title"
          image={placeholder}
        />
        <Member
          name="First Name Last Name"
          title="Company Title"
          image={placeholder}
        />
        <Member
          name="First Name Last Name"
          title="Company Title"
          image={placeholder}
        />
      </div>
    </div>
  )
}

const Member = ({ name, title, image }) => {
  return (
    <div className="member">
      <img className="image" src={image} alt="profile pic" />
      <p className="name">{name}</p>
      <p className="title">{title}</p>
    </div>
  )
}
