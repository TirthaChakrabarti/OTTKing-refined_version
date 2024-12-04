import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import PriceCard from '../components/pricing/PriceCard';
import StaticLogoSection from '../components/LogoSection/StaticLogoSection';


const PricesSection = ({ plansData = [], logosList = [] }) => {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const [showFullList, setShowFullList] = useState(false);
  const [logoList, setCurrentLogoList] = useState([]);

  const handleShowFullList = (logoList) => {
    setCurrentLogoList(logoList);
    setShowFullList(true);
  };

  const handleHideFullList = () => {
    setShowFullList(false);
    setCurrentLogoList([]);
  };

  return (
    <section className="price-parent">
      <div className="price-overlay"></div>
      <div className="price-content">
        <h1 className="price-heading">
          Choose a Plan That Suits Your Need
        </h1>

        <div className="price-section-wrapper">
        {plansData.map((plan, index) => (
            <PriceCard
                key={index}
                name={plan.name}
                price={plan.price}
                feature1={plan.features[0]}
                feature2={plan.features[1]}
                feature3={plan.features[2]}
                feature4={plan.features[3]}
                logoList={logosList[index]}
                onShowFullList={() => handleShowFullList(logosList[index])}
            />
        ))}

      {showFullList && (
        <div className="pricecard-overlay" onClick={handleHideFullList}>
          <div className="pricecard-modal">
            <button
              className="pricecard-close-button"
              onClick={handleHideFullList}
            >
              &times;
            </button>
            <StaticLogoSection
              className="pricecard-logo-section-full"
              logoList={logoList}
            />
          </div>
        </div>
      )}
        </div>

        <Link to="/">
          <button variant="primary" className="home-button">
            Home
          </button>
        </Link>
      </div>
    </section>
  );
};

export default PricesSection;
