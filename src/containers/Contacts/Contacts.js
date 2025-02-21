import React, { useEffect } from "react";
import Promo from "../../components/Promo/Promo";
import OurContacts from "../../components/OurContacts/OurContacts";
import Feedback from "../../components/Feedback/Feedback";

const Contacts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Promo
        class="contacts"
        subtitle="Alabel Auto Export"
        title="Quis fringilla convallis et vitae volutpat."
      />
      <OurContacts classes="our_contacts_contacts" />
      <Feedback />
    </>
  );
};

export default Contacts;
