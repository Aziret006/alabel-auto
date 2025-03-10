import React, { useEffect, useState } from "react";
import axios from "axios";
import Promo from "../../components/Promo/Promo";
import OurContacts from "../../components/OurContacts/OurContacts";
import Feedback from "../../components/Feedback/Feedback";
import { Api } from "../../Api";

const Contacts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${Api}/car/contact-main/`, {
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
    <>
      <Promo
        class="contacts"
        subtitle={data?.title}
        title={data?.description}
      />
      <OurContacts classes="our_contacts_contacts" />
      <Feedback />
    </>
  );
};

export default Contacts;
