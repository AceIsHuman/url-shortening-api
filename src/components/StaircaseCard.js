import React from 'react';

function StaircaseCard(props) {
  const { icon, title, text, alt } = props;
  return (
    <div className="staircase-card">
      <span className="staircase-icon">
        <img src={icon} alt={alt} />
      </span>
      <h5 className="staircase-card-title">{title}</h5>
      <span className="staircase-card-text">{text}</span>
    </div>
  );
}

export default StaircaseCard;
