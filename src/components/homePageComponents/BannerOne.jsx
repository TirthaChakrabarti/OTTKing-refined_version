import React from 'react';
import SubscribeButton from '../button/SubscribeButton'

const BannerOne = ({ BannerOneData }) => {
  return (
    <div className="banner-one" style={{ backgroundImage: `url(${BannerOneData.image})` }}>
      <div className="banner-details">
        <h1>{BannerOneData.title}</h1>
        <p>{BannerOneData.description}</p>
        <div className='banner-buttons'>
            <button className='banner-details-button'>Play Now</button>
            <button className='banner-details-button'>Subscribe</button>
        </div>
      </div>
      <div className='banner-video'>
        <iframe
            src={BannerOneData.video} 
            title="Video"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          >
            <p>Video not available</p>
          </iframe>
      </div>
    </div>
  );
};

export default BannerOne;
