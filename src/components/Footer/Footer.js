import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import Feedback from '../Feedback/Feedback'
import './Footer.css'

const Footer = () => (
  <footer className="footer">
    <div className="container footer_top">
      <div className="footer_top_left">
        <div className="footer_logo">
          <Logo />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur. Elit dolor sed nec aliquam ultrices in aliquet. Nunc odio in a integer
          senectus integer massa euismod iaculis.{' '}
        </p>
      </div>
      <div className="footer_top_middle">
        <h5>Useful Links</h5>
        <div className="page_links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About company</Link>
          <Link to="/contacts">Contacts</Link>
        </div>
        <p>
          <a className="footer_whatsapp" href="#" />
          <a className="footer_telegram" href="#" />
          <a className="footer_instagram" href="#" />
        </p>
      </div>
      <div className="footer_top_right">
        <h5 className="footer_top_title">Subscribe</h5>
        <Feedback footer />
      </div>
    </div>
    <hr className="footer_hr" />
    <div className="container footer_bottom">
      <p>
        Copy right 2023 <span>All rights reserved</span>
      </p>
    </div>
  </footer>
)

export default Footer
