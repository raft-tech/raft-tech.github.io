import React from "react"
// import { Link } from "gatsby"
import client1 from '../images/cp-dd.png'
import client2 from '../images/cp-doh.png'
import client3 from '../images/cp-18f.png'
import client4 from '../images/cp-usaf.jpg'
import client5 from '../images/cp-gsa.svg'
import client6 from '../images/cp-psc.png'

export const Clients = () => {
  return (
    <section id="clients">
      <h1 className='section-title'>Clients &amp; Partners</h1>
      <div className="logos">
        <ClientPartner url="" image={client1} alt='Department of Defense'/>
        <ClientPartner url="" image={client2} alt='Department of Health and Human Services'/>
        <ClientPartner url="" image={client3} alt='18f'/>
        <ClientPartner url="" image={client4} alt='United States Air Force'/>
        <ClientPartner url="" image={client5} alt='General Services Administration'/>
        <ClientPartner url="" image={client6} alt='Program Support Center'/>
      </div>
    </section>
  )
}

const ClientPartner = ({ image, url, alt }) => {
  return (
    <div className="logo">
      {/* <Link to={url}> */}
        <img src={image} alt={alt} />
      {/* </Link> */}
    </div>
  )
}
