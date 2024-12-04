import React from "react";

import { Link } from "react-router-dom";
import LargeSmallSectionCard from "./LargeSmallSectionCard";

const SmallTwoLinesSection = ({ title, SmallTwoLinesSectionData = [] }) => {

    return (
        <section className="smallTwoLinesCardsection-parent">
            <div>
                <p className="smallTwolinesCardSection-heading">{title}</p>
            </div>
            <div className="smallTwolinesCardSection">
                {SmallTwoLinesSectionData.map((card, index) => (
                    <div key={index} className="small-cards-div">
                        <Link to={`/top-web-series/${index}`}>
                            <LargeSmallSectionCard 
                                image={card.image} 
                                name={card.name} 
                                season={card.season} 
                            />
                        </Link>
                    </div>
                    
                ))}
            </div>
        </section>
    );
};

export default SmallTwoLinesSection
