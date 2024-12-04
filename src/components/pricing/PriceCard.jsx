import React from "react";
import { Link } from "react-router-dom";
import StaticLogoSection from "../LogoSection/StaticLogoSection";

const PriceCard = (
    {
        name, 
        price, 
        feature1, 
        feature2, 
        feature3, 
        feature4, 
        logoList,
        onShowFullList
    }) => {

    const smallerLogoList = logoList.slice(0, 8);

    return (
        <div className="plan-card">
           <div>
                <StaticLogoSection className="pricecard-logo-section" logoList={smallerLogoList} />
                <button
                    className="plan-card-show-list-button"
                    onClick={onShowFullList}
                >
                    Show Full List
                </button>
            </div>
            <hr style={{color: 'gold'}}/>
            <div>
                <p id="name">{name}</p>
                <p id="quality">{price}</p>
                <Link to={'/log-in'}>
                    <button 
                        className="plan-card-subscribe-button"
                    >
                        Choose Plan
                    </button>
                </Link>
                <div className="features-container">
                    <p className="features">{feature1}</p>
                    <p className="features">{feature2}</p>
                    <p className="features">{feature3}</p>
                    <p className="features">{feature4}</p>
                </div>
            </div>
        </div>
    )
}

export default PriceCard;