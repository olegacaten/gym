import React from "react";
import "./textoverflow.css";

const TextOverflow = ({title, description, align }) => {
  return (
    <div>
      <div className="text_overflow section__padding" style={{  textAlign:  align }}>
        <div className="behind_text">{title}</div>
        <div className="front_text">{title}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default TextOverflow;
