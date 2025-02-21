import React, { useEffect } from "react";
import Promo from "../../components/Promo/Promo";
import Services from "../../components/Services/Services";
import Process from "./Process/Process";
import Statics from "./Statics/Statics";
import Portfolio from "../../components/Portfolio/Portfolio";
import Reviews from "../../components/Reviews/Reviews";
import OurContacts from "../../components/OurContacts/OurContacts";
import Feedback from "../../components/Feedback/Feedback";

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Promo
        class="services"
        title="Quis fringilla convallis et vitae volutpat."
        subtitle="Alabel Auto Export"
      />
      <Process />
      <Statics />
      <Services />
      <Portfolio />
      <Reviews />
      <OurContacts />
      <Feedback />
    </>
  );
};

export default ServicesPage;
