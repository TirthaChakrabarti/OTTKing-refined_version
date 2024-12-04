import React from "react";
import { Link } from "react-router-dom";
import LargeSmallSectionCard from "./LargeSmallSectionCard";

const LargeSmallSection = ({ title, LargeSmallSectionData = [] }) => {

  const leftLargeData = LargeSmallSectionData.slice(0, 1); // First item
  const rightLargeData = LargeSmallSectionData.slice(1); // Remaining items

  return (
    <section className="large-small-section-parent">
      <div>
        <p className="large-small-heading">{title}</p>
      </div>
      <div className="large-small-section">

        <div className="large-small-subsection left-large">
          {leftLargeData.map((card, index) => (
            <Link to={`/deal-of-the-week/${index}`}>
              <LargeSmallSectionCard
                key={index}
                image={card.image}
                name={card.name}
                season={card.season}
              />
            </Link>
          ))}
        </div>

        <div className="large-small-subsection right-large">
          {rightLargeData.map((card, index) => (
            <Link to={`/deal-of-the-week/${index}`}>
              <LargeSmallSectionCard
                key={index}
                image={card.image}
                name={card.name}
                season={card.season}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LargeSmallSection;
