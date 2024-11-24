import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import card1 from "../images/card1.png";
import card2 from "../images/card2.png";
import card3 from "../images/card3.png";
import card4 from "../images/card4.png";
import card5 from "../images/card5.png";
import card6 from "../images/card6.png";

const Section3 = () => {
  const cards = [
    {
      id: 1,
      image: card1,
      title: "Zero-touch Enrollment",
      description:
        "Onboard endpoints and users with minimal user intervention. Provision devices and set up configurations well before the user gets their hands on.",
    },
    {
      id: 2,
      image: card2,
      title: "Automation",
      description:
        "Automate endpoint compliance with dynamic grouping and breeze through day-to-day IT tasks with scripting capabilities.",
    },
    {
      id: 3,
      image: card3,
      title: "Remote Access Management",
      description:
        "Hexnode UEM enables the enterprise to manage every single device in the corporate ecosystem for optimal and secure operation.",
    },
    {
      id: 4,
      image: card4,
      title: "Endpoint Security and Compliance",
      description:
        "Hexnode helps you maintain compliance with international regulatory bodies and set up custom rules for compliance within your business for security purposes.",
    },
    {
      id: 5,
      image: card5,
      title: "Integrations",
      description:
        "Hexnode's various integrations make it easy to fit into your current endpoint ecosystem. These integrations include Azure AD, Okta, Android Enterprise, Apple School and Business manager, and many more enterprise and technology integrations.",
    },
    {
      id: 6,
      image: card6,
      title: "App Management",
      description:
        "Set up a bespoke app store, enable mandatory apps, and ensure endpoints come equipped with all the required applications, custom enterprise apps included.",
    },
  ];

  return (
    <div className="container text-center py-5">
      <h2 className="fw-bold mb-5">
        Powerful endpoint management, built for <br />
         the devices you choose
      </h2>
      <div className="row g-5">
        {cards.map((card) => (
          <div key={card.id} className="col-md-4">
            <div className="mx-auto h-100" style={{ maxWidth: "360px" }}>
              <img
                src={card.image}
                alt={card.title}
                className="card-img-top img-fluid"
              />
              <div className="card-body" style={{textAlign:"left"}}>
                <h2 className="fw-semibold py-4" style={{textAlign:"left"}}>{card.title}</h2>
                <p className="card-text text-muted">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section3;
