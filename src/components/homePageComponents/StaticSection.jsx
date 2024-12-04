import React from "react";

const StaticSection = ({ title, movies = [] }) => {
    
    return (
        <div className="static-cardlist-parent">
            <section className="static-cardlist-title">{title}</section>
            <div className="static-cardlist-wrapper">
                <section className="static-cardlist">
                    {movies.map((movie, index) => (
                        <div key={index}>
                            <img src={movie} alt={`Movie ${index + 1}`} />
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
}

export default StaticSection;
