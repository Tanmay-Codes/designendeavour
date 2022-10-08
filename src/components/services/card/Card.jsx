import "./card.css";
import React from "react";

function Card({heading, desc, image}) {
  return (
    <div class="card" style={{ backgroundImage: `url(${image})` }}>
      <div class="img">
        <div className="tag">
          <h2>{heading}</h2>
          <p>
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
