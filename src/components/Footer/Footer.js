import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiFillHome } from "react-icons/ai";
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footerHead'>
        <h1>Sign up our Newsletter</h1>
        <p>Recieve 15% off for first three Order</p>
      </div>
      <label className='subscribeLetter' htmlFor="subscribe">
        <input name='subscribe' type="text" placeholder='Your email address' />
        <button>Subscribe</button>
      </label>
      <section className='footerFoot'>
        <ul className='checkout'>
          <li>
            <Link to={'./blog'}>
              Blog
            </Link>
          </li>
          <li>
            <Link to={'./shop'}>
              Shop
            </Link>
          </li>
          <li>
            <Link to={'./about'}>
              About
            </Link>
          </li>
          <li>
            <Link to={'./contact'}>
              Contact
            </Link>
          </li>
        </ul>
        <span className='credits'>An E-commerce Furniture Store built as job application for Website Specialist position at Oceania.</span>
        <ul className='socialHandels'>
          <li>
            <a href="https://fuuko08.github.io/React-Portfolio/" target="_blank" rel="noreferrer">
              <AiFillHome />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/selinatpsu/" target="_blank" rel="noreferrer">
              <AiFillLinkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com/fuuko08" target="_blank" rel="noreferrer">
              <AiFillGithub />
            </a>
          </li>
        </ul>
      </section>
    </footer>
  )
}

export default Footer;