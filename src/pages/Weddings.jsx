import React from "react";
import { Card } from "../components";
import { widdings } from "../data";
import "./pages.css";
import image from "../assets/card.jpg";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Weddings = () => {
  return (
    <div>
      <div className="nav">
        <div className="container">
          <Link to="/" className="logo">
            <img src={logo} alt="Logo" />
          </Link>
          <ul className="links">
            <li>
              <Link to="/">الرئيسية</Link>
            </li>
            <li className="active">
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
      <div className="widdings">
        <h2 className="main-title">الأعراس</h2>
        <div className="container">
          {widdings.map((e) => {
            return <Card key={e.id} props={e} img={image} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Weddings;
