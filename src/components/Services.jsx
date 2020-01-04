import React from "react"
// import { Link } from "gatsby"
import cloudNative from '../images/cloud-native.png'
import dataScience from '../images/data-science.png'
import digitalTransformation from '../images/digital-transformation.png'
import productStrategy from '../images/product-strategy.png'


export const Services = () => {
  return (
    <section id="services">
      <h1 className='section-title'>Services</h1>
      <div className="cards">
        <ServiceCard
          title="Cloud Native"
          url="#cloud"
          image={cloudNative}
        />
        <ServiceCard
          title="Data Science"
          url="#data"
          image={dataScience}
        />
        <ServiceCard
          title="Digital Transformation"
          url="#transformation"
          image={digitalTransformation}
        />
        <ServiceCard
          title="Product Strategy"
          url="#strategy"
          image={productStrategy}
        />
      </div>
    </section>
  )
}

const ServiceCard = ({ title, url, image }) => {
  return (
      <div className="card">
        <img className="circle" src={image} alt="service icon" />
        <h2 className="title">{title}</h2>
      </div>
  )
}
