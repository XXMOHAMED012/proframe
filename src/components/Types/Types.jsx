import React from "react";
import "./types.css";
import { Link } from "react-router-dom";
import wedding from "../../assets/wedding.png";
import exhibition from "../../assets/exhibition.png";
import films from "../../assets/films.png";
import workshops from "../../assets/workshops.png";
import special from "../../assets/special.png";

const Types = () => {
  return (
    <div className="types">
      <div className="container">
        <Link to="/weddings" className="box">
          <img src={wedding} alt="Type" />
          <h3>أعراس</h3>
        </Link>
        <Link to="/exhibitions" className="box">
          <img src={exhibition} alt="Type" />
          <h3>معارض ومؤتمرات</h3>
        </Link>
        <Link to="/films" className="box">
          <img src={films} alt="Type" />
          <h3>أفلام</h3>
        </Link>
        <Link to="/workshops" className="box">
          <img src={workshops} alt="Type" />
          <h3>ورش عمل</h3>
        </Link>
        <Link to="/coverage" className="box">
          <img src={special} alt="Type" />
          <h3>تغطيات خاصة</h3>
        </Link>
      </div>
    </div>
  );
};

export default Types;
