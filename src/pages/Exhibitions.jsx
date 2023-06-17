import React from "react";
import { Card } from "../components";
import { exhibitions } from "../data";
import "./pages.css";
import image from "../assets/ex.jpg";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Exhibitions = () => {
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
            <li>
              <Link to="/weddings">أعراس</Link>
            </li>
            <li className="active">
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
      <div className="exhibitions">
        <h2 className="main-title">المؤتمرات</h2>
        <div className="container">
          {exhibitions.map((e) => {
            return <Card key={e.id} props={e} img={image} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Exhibitions;
