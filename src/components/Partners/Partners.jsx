import React from "react";
import "./partners.css";
import img from "../../assets/image.png";

const Partners = () => {
  return (
    <div className="partners">
      <h2 className="main-title">شركاء النجاح</h2>
      <div className="container">
        <img src={img} alt="Partner" />
        <img src={img} alt="Partner" />
        <img src={img} alt="Partner" />
        <img src={img} alt="Partner" />
        <img src={img} alt="Partner" />
        <img src={img} alt="Partner" />
        <img src={img} alt="Partner" />
        <img src={img} alt="Partner" />
        <img src={img} alt="Partner" />
        <img src={img} alt="Partner" />
      </div>
    </div>
  );
};

export default Partners;
