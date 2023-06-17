import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

const Card = ({ props, img }) => {
  return (
    <Link to={`/${props.id}`} className="card">
      <img src={img} alt="Ph" />
      <div className="text">
        <h3>{props.name}</h3>
        <p>{props.date}</p>
      </div>
    </Link>
  );
};

export default Card;
