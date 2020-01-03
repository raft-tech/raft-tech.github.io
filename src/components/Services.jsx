import React from "react"
import { Link } from "gatsby"
import cloudNative from '../images/cloud-native.png'
import dataScience from '../images/data-science.png'
import digitalTransformation from '../images/digital-transformation.png'
import productStrategy from '../images/product-strategy.png'


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
          image={cloudNative}
        />
        <ServiceCard
          title="Data Science"
          description=""
          url="#data"
          color="lightgrey"
          image={dataScience}
        />
        <ServiceCard
          title="Digital Transformation"
          description=""
          url="#transformation"
          color="darkgrey"
          image={digitalTransformation}
        />
        <ServiceCard
          title="Product Strategy"
          description=""
          url="#strategy"
          color="seagreen"
          image={productStrategy}
        />
      </div>
    </div>
  )
}

const ServiceCard = ({ color, title, description, url, image }) => {
  const lorem =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque est ipsa porro, necessitatibus sed nobis ducimus atque voluptatibus exercitationem expedita qui, nostrum, nam minima maiores tempora incidunt. Natus, asperiores in."
  return (
    <div className="card">
      {/* <div className={`circle ${color}`}></div> */}
      <img className='circle' src={image} alt='service icon'/>
      <h2 className="title">{title}</h2>
      <p className="description">{description || lorem}</p>
      <Link to={url}>Read More..</Link>
    </div>
  )
}
