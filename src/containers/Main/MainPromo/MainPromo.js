import React from "react";
import MainCalculator from "./MainCalculator/MainCalculator";
import SliderComponent from "./SliderComponent/SliderComponent";
import "./MainPromo.css";
import Smoke from "../../../assets/images/smoke.png";
import Line from "../../../assets/images/main_promo_line.png";

const MainPromo = () => (
  <div className="main_promo">
    <div className="main_promo_con">
      <div className="main_promo_left">
        <img className="main_promo_line" src={Line} alt="Line" />
        <div className="main_promo_in_title">
          <p>alabel</p>
          <p>auto</p>
          <p>
            <span>exp</span>ort
          </p>
        </div>
        <div className="main_promo_in_carousel">
          <SliderComponent />
          <img className="main_promo_smoke" src={Smoke} alt="Smoke" />
        </div>
      </div>
      <div className="main_promo_right">
        <MainCalculator />
      </div>
    </div>
  </div>
);

export default MainPromo;
