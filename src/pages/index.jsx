import React from "react"
import Layout from "../components/layout"
import heroImage from "../images/raft-hero-team.jpg"
import { Introducing } from "../components/Introducing"
import { Services } from "../components/Services"
import { Clients } from "../components/Clients"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IndexHero />
    <Introducing />
    <Services />
    <Clients />
  </Layout>
)

const IndexHero = () => {
  return (
    <div id="hero" className="hero">
      <img src={heroImage} alt="hero team" />
    </div>
  )
}

export default IndexPage
