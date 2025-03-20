import React, { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import axios from "axios"; 
import Promo from "../Promo/Promo";
import OurContacts from "../OurContacts/OurContacts";
import Feedback from "../Feedback/Feedback";
import "./Trecking.css";
import logo1 from "../../assets/icons/logo.svg";
import logo2 from "../../assets/icons/logo2.svg";
import logo3 from "../../assets/icons/logo3.svg";
import logo4 from "../../assets/icons/logo4.svg";
import logo5 from "../../assets/icons/logo5.svg";
import { Api } from "../../Api";

const carriers = [
  {
    id: "hapag-lloyd",
    name: "HAPAG-LLOYD",
    logo: logo1,
    url: "https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html",
  },
  {
    id: "maersk",
    name: "MAERSK",
    logo: logo2,
    url: "https://www.maersk.com/tracking/",
  },
  {
    id: "zim",
    name: "ZIM",
    logo: logo3,
    url: "https://www.zim.com/tools/track-a-shipment",
  },
  {
    id: "msc",
    name: "MSC TRACKING",
    logo: logo5,
    url: "https://www.msc.com/track-a-shipment",
  },
  {
    id: "cma-cgm",
    name: "CMA CGM",
    logo: logo4,
    url: "https://www.cma-cgm.com/ebusiness/tracking",
  },
];
function Trecking() {
    const [input, setInput] = useState(""); // Хранит ввод
    const [searchQuery, setSearchQuery] = useState(""); // Хранит строку после нажатия
  
    const filteredCarriers = carriers.filter((carrier) =>
      carrier.name.toLowerCase().includes(searchQuery.toLowerCase())
    );


    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${Api}/car/tracking-main/`, {
            headers: {
              "Accept": "application/json",
              "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzczMTM1MTc3LCJpYXQiOjE3NDE1OTkxNzcsImp0aSI6ImE2ZTIxZGVjMTdmNTRjYWY5MzBlOGE4YzhjMzczNTYyIiwidXNlcl9pZCI6MX0.Rb6No4cAlmGLWjaKdGBS5JKyhMWtL1CVfCYDp4cJPrM",
            }
          });
          console.log(response, "response");
          
          setData(response.data.results[0]); 
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);

  return (
    <div>
      <Promo
        class="trecking"
        subtitle={data?.title}
        title={data?.description}
      />
      <div className="container">
        <h1 className="main-title">
          Container, Bill of lading or Booking reference
        </h1>
        <form className="search-form">
          <input
            type="text"
            placeholder="Enter your VIN number"
            className="search-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <span onClick={() => setSearchQuery(input)}>
            <RiSearchLine size={18} color="#fff" />
          </span>
        </form>
        <h3 className="carrier-title">Choose your ocean carrier company</h3>
        <div className="carrier-row">
          {filteredCarriers.slice(0, 3).map((carrier) => (
            <div key={carrier.id} className="carrier-wrapper">
              <a
                target="_blank"
                href={carrier.url}
                className="carrier-item"
                rel="noopener noreferrer"
              >
                <div className="carrier-logo-wrapper">
                  <img
                    src={carrier.logo}
                    alt={`${carrier.name} logo`}
                    className="carrier-logo"
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className="carrier-row">
          {filteredCarriers.length > 3 ? (
            filteredCarriers.slice(3).map((carrier) => (
              <div key={carrier.id} className="carrier-wrapper">
                <a
                  target="_blank"
                  href={carrier.url}
                  className="carrier-item"
                  rel="noopener noreferrer"
                >
                  <div className="carrier-logo-wrapper">
                    <img
                      src={carrier.logo}
                      alt={`${carrier.name} logo`}
                      className="carrier-logo"
                    />
                  </div>
                </a>
              </div>
            ))
          ) : (
            <p className="no-data">No data available</p>
          )}
        </div>
      </div>
      <OurContacts classes="our_contacts_contacts" />
      <Feedback />
    </div>
  );
}

export default Trecking;
