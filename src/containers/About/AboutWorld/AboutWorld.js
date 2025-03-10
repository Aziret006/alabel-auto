import React, { useEffect, useState } from "react";
import axios from "axios";
import UpTitle from "../../../components/UI/UpTitle/UpTitle";
import Title from "../../../components/UI/Title/Title";
import SubTitle from "../../../components/UI/SubTitle/SubTitle";
import "./AboutWorld.css";
import world from "../../../assets/images/about_big.png";
import { Api } from "../../../Api";

const AboutWorld = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${Api}/car/export/`, {
          headers: {
            "Accept": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzczMTM1MTc3LCJpYXQiOjE3NDE1OTkxNzcsImp0aSI6ImE2ZTIxZGVjMTdmNTRjYWY5MzBlOGE4YzhjMzczNTYyIiwidXNlcl9pZCI6MX0.Rb6No4cAlmGLWjaKdGBS5JKyhMWtL1CVfCYDp4cJPrM",
          }
        });
        console.log(response, "response");
        
        setData(response.data.results[0]); // Берём первый объект из массива results
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  return (
    <>
      <div className="about_world_title">
        <UpTitle uptitle="Export" />
        <Title title={data?.title} />
        <SubTitle subtitle={data?.descriptions || "Default subtitle"} />
      </div>
      <div className="about_world">
        <img src={world} alt="Alabel" />
      </div>
    </>
  );
};

export default AboutWorld;
