import React from "react";
import UpTitle from "../../../components/UI/UpTitle/UpTitle";
import Title from "../../../components/UI/Title/Title";
import AdvantagesCard from "../../../components/AdvantagesCard/AdvantagesCard";
import "./AboutAdvantages.css";

import { mainAdvantages } from "../../../data";
import second from "../../../assets/images/02.png";

const AboutAdvantages = () => (
  <div className="about_advantages">
    <div className="container">
      <div className="about_advantages_title">
        <UpTitle uptitle="Why" />
        <Title title="you should consider purchasing a car from Canada?" />
      </div>
      <div className="about_advantages_content">
        <div className="about_advantages_top">
          <div className="about_advantages_left">
            <p>
              Cars in Canada are often priced lower than in other countries due
              to the favorable exchange rate, which makes buying a car from
              Canada a more cost-effective option. Additionally, Canada has a
              reputation for producing high-quality vehicles that are built to
              last, making them a reliable choice for buyers. With a wide
              selection of used cars available, from luxury vehicles to economy
              cars, and an easy export process with the help of a reputable
              export company, purchasing a car from Canada can be a smart and
              hassle-free decision.
            </p>
          </div>
          <div className="about_advantages_right">
            <p>180+</p>
            <p>happy clients</p>
          </div>
        </div>
        <div className="about_advantages_bottom">
          {mainAdvantages?.map((item) => (
            <AdvantagesCard key={item.title} card={item} />
          ))}
        </div>
      </div>
      <img className="about_advantages_second" src={second} alt="" />
    </div>
  </div>
);

export default AboutAdvantages;
