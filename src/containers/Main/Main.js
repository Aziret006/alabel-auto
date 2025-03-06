import React, { useEffect } from "react";
import MainPromo from "./MainPromo/MainPromo";
import Services from "../../components/Services/Services";
import MainAbout from "./MainAbout/MainAbout";
import MainAdvantages from "./MainAdvantages/MainAdvantages";
import Portfolio from "../../components/Portfolio/Portfolio";
import Reviews from "../../components/Reviews/Reviews";
import OurContacts from "../../components/OurContacts/OurContacts";

const Main = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <MainPromo />
      <Services />
      <MainAbout />
      <MainAdvantages />
      <Portfolio />
      <Reviews />
      <OurContacts />
    </>
  );
};

export default Main;
