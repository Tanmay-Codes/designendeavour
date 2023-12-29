import React from "react";
import CardTestimonial from "./cardtestimonial/CardTestimonial";
import "./testimonial.css";
import clientA from "../statics/person/1.jpeg";
import clientB from "../statics/person/2.jpeg";
import clientC from "../statics/person/4.jpeg";
import clientD from "../statics/person/5.jpeg";

export default function Testimonial() {
  return (
    <div className="testimonial-container">
      <CardTestimonial
        clientName={"Someone"}
        designation={"Project Manager, Graebert"}
        clientImage={clientA}
        clientQuote={"My good wishes to the team here"}
      />
      <CardTestimonial
        clientName={"Someone"}
        designation={"Project Manager, BIM ARC"}
        clientImage={clientB}
        clientQuote={"My good wishes to the team here"}
      />
      <CardTestimonial
        clientName={"Someone"}
        designation={"Project Manager, Graebert"}
        clientImage={clientC}
        clientQuote={"My good wishes to the team here"}
      />
      <CardTestimonial
        clientName={"Someone"}
        designation={"Project Manager, Graebert"}
        clientImage={clientD}
        clientQuote={"My good wishes to the team here"}
      />
    </div>
  );
}
