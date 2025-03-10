import React, { useEffect, useState } from "react";
import axios from "axios";
import UpTitle from "../UI/UpTitle/UpTitle";
import Title from "../UI/Title/Title";
import SubTitle from "../UI/SubTitle/SubTitle";
import ServicesCard from "./ServicesCard/ServicesCard";
import Brands from "./Brands/Brands";
import "./Services.css";
import image1 from "../../assets/icons/shield.png";
import image2 from "../../assets/icons/chronometer.png";
import image3 from "../../assets/icons/world.png";
import image4 from "../../assets/icons/conversation.png";
import { Api } from "../../Api";

const images = [image1, image2, image3, image4];

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`${Api}/car/services/`, {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzczMTM1MTc3LCJpYXQiOjE3NDE1OTkxNzcsImp0aSI6ImE2ZTIxZGVjMTdmNTRjYWY5MzBlOGE4YzhjMzczNTYyIiwidXNlcl9pZCI6MX0.Rb6No4cAlmGLWjaKdGBS5JKyhMWtL1CVfCYDp4cJPrM',
          },
        });
        if (response.data?.results) { 
          const formattedData = response.data.results?.map((item, index) => ({
            image: images[index % images.length],
            title: item.title,
            description: item.descriptions,
          }));
          setServices(formattedData);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchServices();
  }, []);

  return (
    <div className="container services_con">
      <div className="all_title_block">
        <UpTitle uptitle="Our" />
        <Title title="Services" />
        <SubTitle subtitle="At Canadian auctions, various categories of vehicles are available, classified as follows: " />
      </div>
      <div className="services_cards_row">
        <div className="services_cards">
          {services.map((item, i) => (
            <ServicesCard key={`services${i}`} item={item} />
          ))}
        </div>
      </div>
      <div className="services_brands_row">
        <Brands />
      </div>
    </div>
  );
};

export default Services;