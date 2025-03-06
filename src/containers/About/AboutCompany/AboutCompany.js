import React from "react";
import UpTitle from "../../../components/UI/UpTitle/UpTitle";
import Title from "../../../components/UI/Title/Title";
import SubTitle from "../../../components/UI/SubTitle/SubTitle";
import "./AboutCompany.css";

import first from "../../../assets/images/about_first.png";
import second from "../../../assets/images/main_about.jpg";
import last from "../../../assets/images/about_last.jpg";

import quality from "../../../assets/images/quality.png";
import lowPrices from "../../../assets/images/low-prices.png";
import licensed from "../../../assets/images/licensed.png";

const AboutCompany = () => (
  <div className="about_company">
    <div className="container">
      <div className="all_title_block">
        <UpTitle uptitle="About" />
        <Title title="Alabel Auto Export" />
        <SubTitle subtitle="We specialize in helping customers purchase vehicles and equipment at IAA, Copart, Adesa auctions, and from authorized dealers, with worldwide shipping. In addition, we also purchase Bikes & ATVs, snowmobiles, and watercraft" />
      </div>
      <div className="about_block_images">
        <div>
          <img src={first} alt="Alabel" />
        </div>
        <div>
          <img src={second} alt="Alabel" />
        </div>
      </div>
      <p>
        Our company was founded in 2020 as an exporter of used vehicles from
        Canada. We specialize in purchasing cars from Canadian auctions, as well
        as from official dealers and private individuals. Our goal is to offer
        our clients a wide selection of high-quality vehicles at competitive
        prices.
      </p>
      <p>
        We are licensed by <strong>OMVIC</strong> under number 5696380, which
        means that we comply with all regulations and standards in the
        automotive industry. Our team of experts works hard to ensure that each
        vehicle we export meets our high standards for quality and performance.
        We conduct thorough inspections and provide detailed vehicle reports and
        photos to help our clients make informed decisions.
      </p>
      <p>
        At our company, we understand that every client has unique needs and
        requirements. That&apos;s why we offer personalized service and tailored
        solutions to meet your needs. Whether you&apos;re an individual looking
        to purchase a single vehicle or a business in need of a fleet, we have
        the resources and expertise to make it happen. We provide comprehensive
        assistance throughout the entire process, from finding the right car to
        arranging for safe and timely transport to your destination country.
      </p>
      <div className="about_block_bottom">
        <div className="about_block_image">
          <img src={last} alt="Alabel" />
        </div>
        <div className="about_block_description">
          <p>
            We take pride in our commitment to customer satisfaction and quality
            service. Our clients can rely on us for honest and transparent
            communication, competitive pricing, and efficient and reliable
            service. Contact us today to learn more about our services and how
            we can help you purchase and export used vehicles from Canada to any
            country in the world.
          </p>
          <div className="about_block_description_images">
            <div>
              <img src={quality} alt="Alabel" />
            </div>
            <div>
              <img src={lowPrices} alt="Alabel" />
            </div>
            <div>
              <img src={licensed} alt="Alabel" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutCompany;
