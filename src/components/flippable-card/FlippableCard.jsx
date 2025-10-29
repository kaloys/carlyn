import { useState } from "react";
import "./flippable-card.css";

export const FlippableCard = ({ src, description }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => setFlipped((prev) => !prev);

  return (
    <div className={`flip-card ${flipped ? "flipped" : ""}`} onClick={handleFlip}>
      <div className="flip-card-inner">
        {/* FRONT SIDE */}
        <div className="flip-card-front">
          <img src={src} alt="slide" loading="lazy" decoding="async"/>
        </div>

        {/* BACK SIDE */}
        <div className="flip-card-back">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
