import React from "react";
import { Link } from "react-router-dom";
import UpTitle from "../../../components/UI/UpTitle/UpTitle";
import Title from "../../../components/UI/Title/Title";
import SubTitle from "../../../components/UI/SubTitle/SubTitle";
import "./MainAbout.css";

import mainAbout from "../../../assets/images/main_about.jpg";
import canada from "../../../assets/images/sheet-canada.png";

const MainAbout = () => (
  <div className="main_about">
    <div className="container">
      <div className="all_title_block">
        <UpTitle uptitle="About" />
        <Title title="Alabel Auto Export" />
        <SubTitle subtitle="We specialize in helping customers purchase vehicles and equipment at IAA, Copart, Adesa auctions, and from authorized dealers, with worldwide shipping. In addition, we also purchase Bikes & ATVs, snowmobiles, and watercraft." />
      </div>
      <div className="main_about_flex">
        <div className="main_about_left">
          <img src={mainAbout} alt="Alabel" />
          <div />
        </div>
        <div className="main_about_right">
          <p>
            Our company was founded in 2020 as an exporter of used vehicles from
            Canada. We specialize in purchasing cars from Canadian auctions, as
            well as from official dealers and private individuals. Our goal is
            to offer our clients a wide selection of high-quality vehicles at
            competitive prices.
          </p>
          <div className="main_about_button">
            <Link className="button" to="/">
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
    <img className="main_about_canada" src={canada} alt="Alabel" />
  </div>
);

export default MainAbout;
