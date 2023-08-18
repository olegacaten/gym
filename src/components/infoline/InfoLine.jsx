import React from "react";
import "./infoline.css";

const InfoLine = () => {
  return (
    <div>
      <div className="info section__padding">
        <div className="info__contact">
          <p className="info__contact__title">CONTACT</p>
          <p className="info__contact__context">gymImproveoleg@gmail.com </p>
          <p className="info__contact__context">+1 999 999 9999 </p>
        </div>
        <div className="info__availability">
          <p className="info__availability__title">OPEN HOURS</p>
          <p className="info__availability__context">MON/FRI 9:00AM - 10:00PM </p>
          <p className="info__availability__context">
            SAT 9:00AM - 10:00PM
          </p>
          <p className="info__availability__context">
            SUN 9:00AM - 10:00PM
          </p>
        </div>
        <div className="info__address">
          <p className="info__address__title">LOCATION</p>
          <p className="info__address__context">
            1818 olegacat avenue, Los Angeles, 90018
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoLine;
