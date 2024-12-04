import React from "react";

const BannerTwo = ({ BannerTwoData }) => {
    // console.log(preTitle, title, date, logo);
    return (
        <section className="banner-two"
            style={{ backgroundImage: `url(${BannerTwoData.image})` }}
        >
            <div className="banner-two-details">
                <p>{BannerTwoData.preTitle}</p>
                <p>{BannerTwoData.title}</p>
                <p>{BannerTwoData.date}</p>
                <p style={{logo: `url(${BannerTwoData.logo})`}}></p>
                <div className='banner-two-button'>
                    <button className='Button'>Watch Trailer</button>
                </div>
            </div>
        </section>
    )
}

export default BannerTwo;