import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { click } from "@testing-library/user-event/dist/click";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="container">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" />
        </Link>
        <ul
          className="links"
          onMouseEnter={() => {
            let links = document.getElementsByTagName("li"),
              l = [];
            for (let i of links) {
              l.push(i);
            }
            l.forEach((e) => {
              e.addEventListener(click, () => {
                e.classList.toggle("active");
              });
            });
          }}
        >
          <li>
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
  );
};

export default Navbar;
