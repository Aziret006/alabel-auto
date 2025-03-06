import React from "react";
import UpTitle from "../../../components/UI/UpTitle/UpTitle";
import Title from "../../../components/UI/Title/Title";
import "./Process.css";

import processImg from "../../../assets/images/process_car.png";
import { processData } from "../../../data";

const Process = () => (
  <div className="container">
    <div className="process_title">
      <UpTitle uptitle="Process" />
      <Title title="Steps to buy a car from Canada" />
    </div>
    <div className="process_block">
      <div className="process_block_left">
        <img src={processImg} alt="Alavel" />
      </div>
      <div className="process_block_right">
        {processData?.map((item, i) => (
          <div key={`process_card${i}`} className="process_card">
            {/* eslint-disable-next-line react/no-danger */}
            <div dangerouslySetInnerHTML={{ __html: item.img }} />
            <div>
              <h4>{item.text}</h4>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Process;
