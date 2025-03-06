import React from "react";
import UpTitle from "../../../components/UI/UpTitle/UpTitle";
import Title from "../../../components/UI/Title/Title";
import SubTitle from "../../../components/UI/SubTitle/SubTitle";
import "./AboutWorld.css";

import world from "../../../assets/images/about_big.png";

const AboutWorld = () => (
  <>
    <div className="about_world_title">
      <UpTitle uptitle="Export" />
      <Title title="We export to these countries" />
      <SubTitle subtitle="Lorem ipsum dolor sit amet consectetur. Tincidunt nam in elit sapien amet et netus. Vestibulum ornare a nunc malesuada egestas id sit justo blandit. Gravida viverra vulputate sit porta risus ornare. Turpis urna adipiscing cursus massa duis mattis dui porta accumsan. Malesuada vitae adipiscing eu id ultrices enim at." />
    </div>
    <div className="about_world">
      <img src={world} alt="Alabel" />
    </div>
  </>
);

export default AboutWorld;
