import React from 'react'
import Navbar from './Navbar'
import './landing.css'
const Hero = () => {
  return (
    <div>
      <div className="hero-container">
        <div className="navbar-container">
          <div className="logo-container">
            <div className="logo"></div>
            <div className="logo-heading">DESIGN ENDEAVOUR</div>
            <div className="tagline">Innovation Happens Here</div>
          </div>
          <Navbar/>
        </div>
        <div className="hero-text-container">
          <div className="hero-text">
            <h1 className="hero-heading">
              We provide precision modeling and detailing
            </h1>
            <p>Services for Builders, Architects and Engineers to model and detail Scan To BIM, CIS, Precast and more.</p>
          </div>
          <div className="hero-cta">
            <div>
            <button className="cta active">Know More</button>
            </div>
            <div>
            <button className="cta">Lets Connect</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero