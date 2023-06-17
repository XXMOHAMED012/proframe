import React from "react";
import image from "../assets/event.jpg";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Event = () => {
  return (
    <div>
      <div className="nav">
        <div className="container">
          <Link to="/" className="logo">
            <img src={logo} alt="Logo" />
          </Link>
          <ul className="links">
            <li className="active">
              <Link to="/">الرئيسية</Link>
            </li>
            <li>
              <Link to="/weddings">أعراس</Link>
            </li>
            <li>
              <Link to="/exhibitions">معارض ومؤتمرات</Link>
            </li>
            <li>
              <Link to="/films">أفلام</Link>
            </li>
            <li>
              <Link to="/workshops">ورش عمل</Link>
            </li>
            <li>
              <Link to="/products">منتجات</Link>
            </li>
            <li>
              <Link to="/order">طلب تصوير</Link>
            </li>
          </ul>
          <div
            onClick={(_) => {
              let nav = document.querySelector(".links");
              nav.classList.toggle("active");
            }}
            className="lines"
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </div>
      <div className="event">
        <div className="img">
          <h1>محمد خالد عبد اللطيف</h1>
        </div>
        <div className="container">
          <div className="gallery">
            <img src={image} alt="Event" />
            <img src={image} alt="Event" />
            <img src={image} alt="Event" />
            <img src={image} alt="Event" />
            <img src={image} alt="Event" />
            <img src={image} alt="Event" />
            <img src={image} alt="Event" />
            <img src={image} alt="Event" />
            <img src={image} alt="Event" />
            <img src={image} alt="Event" />
            <img src={image} alt="Event" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
