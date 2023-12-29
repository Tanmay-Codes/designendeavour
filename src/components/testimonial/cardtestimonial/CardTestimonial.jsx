import React from "react";
import "./cardtestimonial.css";
import { Rating } from "react-simple-star-rating";

function CardTestimonial({
  clientName,
  clientImage,
  clientQuote,
  designation,
}) {
  return (
    <div className="main-container">
      <div className="card-container">

      <div className="card-main">
        <div className="card-test-container">
          <div className="img-test-container">
            <img className="img-test" src={clientImage} alt="A guy" />
          </div>
          <div className="name">
            <h2>{clientName}</h2>
            <h4 className="designation">{designation}</h4>
          </div>
          <div className="quote">
            <blockquote>
              {" "}
              <span>&#8220;</span>
              {clientQuote} <span>&#8221;</span>{" "}
            </blockquote>
          </div>
          <div className="stars">
            <Rating
              iconsCount={5}
              fillColor={"var(--tintcolor)"}
              initialValue={5}
              readonly={true}
              size={22}
              />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default CardTestimonial;
