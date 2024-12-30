import React from "react";
import "./specialistCard.css";

const SpecialistCard = ({ specialists }) => {
  const {
    name,
    location,
    avatar,
    topRated,
    quickResponse,
    title,
    description,
    reviews,
    projects,
    expertise,
  } = specialists;

  return (
    <div className="specialist-card">
      <div className="specialist-header">
        <div className="header-left">
          <img src={avatar} alt={`${name}'s avatar`} className="avatar" />
          <div className="info">
            <h2 className="specialist-name">{name}</h2>
            <p className="specialist-location">{location}</p>
          </div>
        </div>

        <div className="header-right">
          {topRated && <span className="top-badge">TOP</span>}
          {quickResponse && (
            <span className="response-time">Responds quickly</span>
          )}
        </div>
      </div>
      <div className="specialist-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="expertise">
          {expertise.map(item => (
            <img
              key={item.id}
              src={item.logo}
              alt={item.alt}
              className="expertise-logo"
            />
          ))}
        </div>
      </div>
      <div className="stats">
        <p>{reviews} reviews</p>
        <p>{projects} projects</p>
      </div>
      <button className="hire-button">Hire an expert</button>
    </div>
  );
};

export default SpecialistCard;
