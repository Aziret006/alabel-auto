import React from "react";
import Promo from "../Promo/Promo";
import OurContacts from "../OurContacts/OurContacts";
import Feedback from "../Feedback/Feedback";
import "./Trecking.css";
import logo1 from "../../assets/icons/logo.svg";
import logo2 from "../../assets/icons/logo2.svg";
import logo3 from "../../assets/icons/logo3.svg";
import logo4 from "../../assets/icons/logo4.svg";
import logo5 from "../../assets/icons/logo5.svg";

function Trecking() {
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
      logo: logo4,
      url: "https://www.msc.com/track-a-shipment",
    },
    {
      id: "cma-cgm",
      name: "CMA CGM",
      logo: logo5,
      url: "https://www.cma-cgm.com/ebusiness/tracking",
    },
  ];

  return (
    <div>
      <Promo
        class="trecking"
        subtitle="Alabel Auto Export"
        title="Track my Container"
      />
      <div className="container">
        <h3 className="carrier-title">Choose your ocean carrier company</h3>
        <h1 className="main-title">
          Container, Bill of lading or Booking reference
        </h1>
        <div className="carrier-row">
          {carriers.slice(0, 3).map((carrier) => (
            <div key={carrier.id} className="carrier-wrapper">
               <a target="_blank" href={carrier.url} className="carrier-item" rel="noopener noreferrer">
                <div className="carrier-logo-wrapper">
                  <img
                    src={carrier.logo}
                    alt={`${carrier.name} logo`}
                    className="carrier-logo"
                  />
                </div>
              </a>
              <p className="carrier-name">{carrier.name}</p>
            </div>
          ))}
        </div>
        <div className="carrier-row">
          {carriers.slice(3).map((carrier) => (
            <div key={carrier.id} className="carrier-wrapper">
              <a target="_blank" href={carrier.url} className="carrier-item" rel="noopener noreferrer">
                <div className="carrier-logo-wrapper">
                  <img
                    src={carrier.logo}
                    alt={`${carrier.name} logo`}
                    className="carrier-logo"
                  />
                </div>
              </a>
              <p className="carrier-name">{carrier.name}</p>
            </div>
          ))}
        </div>
      </div>
      <OurContacts classes="our_contacts_contacts" />
      <Feedback />
    </div>
  );
}

export default Trecking;
