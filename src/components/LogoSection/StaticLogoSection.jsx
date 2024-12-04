import React from 'react';

// import '../../styles/homeSections/logoSection.css'; 

const StaticLogoSection = ({ className, logoList = [] }) => {
  return (
    <section className='logo-section-wrapper'>
      <div className={`logo-section ${className}`}>
        {logoList.map((logo, index) => (
          <div className="logo-container" key={index}>
            <img src={logo} alt={`Logo ${index}`} className="logo-image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default StaticLogoSection;