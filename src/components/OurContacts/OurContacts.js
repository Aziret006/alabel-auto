import React from 'react'
import Title from '../UI/Title/Title'
import SubTitle from '../UI/SubTitle/SubTitle'
import './OurContacts.css'

const OurContacts = ({ classes }) => (
  <div className={`container our_contacts_con ${classes}`}>
    <div className="all_title_block">
      <Title title="Contact us" />
      <SubTitle subtitle="Lorem ipsum dolor sit amet consectetur. Elit dolor sed nec aliquam ultrices in aliquet. " />
    </div>
    <div className="our_contacts">
      <div className="our_contacts_left">
        <div>
          <p className="contacts_title contacts_email">E-mail</p>
          <a className="contacts_text" href="mailto:carnadamotors@gmail.com">
            carnadamotors@gmail.com
          </a>
        </div>
        <div>
          <p className="contacts_title contacts_phone">Phone</p>
          <a className="contacts_text" href={`tel:${+14316888484}`}>
            +1 431 688 8484
          </a>
          <a className="contacts_text" href={`tel:${+13435006677}`}>
            +1 343 500 6677
          </a>
        </div>
        <div>
          <p className="contacts_title contacts_time">Working Hours</p>
          <p className="contacts_text">Monday-Friday</p>
          <p className="contacts_text">8:00AM-7:00PM</p>
        </div>
        <div>
          <p className="contacts_title contacts_jps">Main Office</p>
          <p className="contacts_text">1600-2300 YONGE ST TORONTO</p>
          <p className="contacts_text">ON M4P 1E4 CANADA</p>
        </div>
      </div>
      <div className="our_contacts_right">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7587164.591701395!2d-113.05666418355389!3d57.502145824152194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2z0JrQsNC90LDQtNCw!5e0!3m2!1sru!2skg!4v1684134582479!5m2!1sru!2skg"
          width="600"
          height="400"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </div>
)

export default OurContacts
