import React, { useEffect } from 'react'
import './About.css'
import { Link } from "react-router-dom"

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <div className='about'>
      <div className='aboutTitle'>
        <h2>About</h2>
      </div>
      <div className='aboutContent'>
        <section className='acrs'>
          <h3>Company Overview</h3>
          <p>
          Oceania was established in 2008 with a focus on e-commerce, green energy solutions, andadvanced materials.
Our brands are sold internationally through brand websites and over 10 ecommerce platforms such as Amazon, Shopify, eBay, Walmart, HomeDepot, Wayfair, Houzz, etc. We have nearly 10 million users in more than 20 countries around the world.
          </p>

          <h3>Company Mission</h3>
          <p>
          Our mission is to achieve product excellence, provide an effortless customer experience, and accelerate our global expansion. We strive to complete goals by methods that our competition cannot or are unwilling to do. We challenge the status quo and strive to build winning strategies that are efficient and sustainable.
          </p>

          <h3>Data-Driven Management</h3>
          <p>
          Our decisions, operations, and business strategies are driven by data with careful analysis. Self-developed PR, ERP, warehouse management, and other key systems bring higher efficiency and lean operation processes.
          </p>

          <h3>Flat Organizational Structure</h3>
          <p>
          The company brings together domestic and foreign professionals in various fields. The flat and compact organizational structure breaks down internal barriers and inspires our teams to innovate and challenge the status quo.
          </p>
          <img src="https://res.cloudinary.com/inovatormatin/image/upload/v1653646910/eway/other/about2_nsnt01.jpg" alt="about2img" />
        </section>
        <section className='acls'>
          <img src="https://res.cloudinary.com/inovatormatin/image/upload/v1653646901/eway/other/about1_om5e4d.jpg" alt="about1img" />
          <h3>Company Profile</h3>
          <p>
            The Company first online retailer to globally distribute a wide
            range of fashion, beauty and lifestyle products from Asia through
            their website example.com. Every season brings customers the
            latest trends along with thousands of items from brands across Asia.
            example.com now represents the best platform for brands in Asia
            to connect with customers worldwide.
          </p>

          <h3>Mission 2030</h3>
          <p>
          We formed our core competency around deep product research, especially on technical products. Our thorough research ability has brought us a competitive edge.
          </p>
          <p>
            offers express shipping on all orders. Shipments arrive within approximately
            3 working days from date of dispatch. Our ecommerce Phasellus luctus id
            turpis cursus. Donec at augue dictum dolor In tempor ultrices est,
          </p>
        </section>
      </div>
      <div className='needToKnow'>
        <h1>Need to Know anything contact us</h1>
        <button>
          <Link to={'/contact'}>
            Contact us
          </Link>
        </button>
      </div>
    </div>
  )
}

export default About;