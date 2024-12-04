import React from "react";

const LargeSmallSectionCard = ( {image, name, season} ) => {
    return (
        <div className="large-small-card">
            <img className="large-small-poster"
                src={image} 
                alt={name} 
            />
            <div className="large-small-card-text">
                <p>{name}</p>
                <p>{season}</p>
            </div>
        </div>
    )
};

export default LargeSmallSectionCard;