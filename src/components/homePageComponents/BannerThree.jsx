import React from 'react'

const BannerThree = ({ BannerThreeData }) => {
  return (
    <section className='banner-three'>
        <div style={{ backgroundImage: `url(${BannerThreeData.image})`}}></div>
        <div className="banner-three-details">
          <p>{BannerThreeData.heading}</p>
          <p>{BannerThreeData.subheading}</p>
          <p>Streming on {BannerThreeData.date}</p>
        </div>
        <div className="banner-three-logo">
          <img src={BannerThreeData.logo} alt="Logo" />
        </div>
        <div className='banner-three-button'>
          <button className='Button'>Watch Trailer</button>
        </div>
    </section>
  )
}

export default BannerThree