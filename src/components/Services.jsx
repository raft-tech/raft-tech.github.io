import React from "react"
import { Link } from "gatsby"

export const Services = () => {
  return (
    <div id="services">
      <h1>Services</h1>
      <div className="cards">
        <ServiceCard
          title="Cloud Native"
          description=""
          url="#cloud"
          color="purple"
        />
        <ServiceCard
          title="Data Science"
          description=""
          url="#data"
          color="lightgrey"
        />
        <ServiceCard
          title="Digital Transformation"
          description=""
          url="#transformation"
          color="darkgrey"
        />
        <ServiceCard
          title="Product Strategy"
          description=""
          url="#strategy"
          color="seagreen"
        />
      </div>
    </div>
  )
}

const ServiceCard = ({ color, title, description, url }) => {
  const lorem =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque est ipsa porro, necessitatibus sed nobis ducimus atque voluptatibus exercitationem expedita qui, nostrum, nam minima maiores tempora incidunt. Natus, asperiores in."
  return (
    <div className="card">
      <div className={`circle ${color}`}></div>
      <h2 className="title">{title}</h2>
      <p className="description">{description || lorem}</p>
      <Link to={url}>Read More..</Link>
    </div>
  )
}
