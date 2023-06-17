import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.JPG";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <img src={logo} alt="LOGO" />
        <div className="text">
          <div className="top">
            <h2>برو فريم</h2>
            <p>
              برو فريم هي شركة إنتاج إعلامي متخصصة بتغطية وتوثيق المناسبات بكافة
              أشكالها، حفلات، أعراس، معارض، مؤتمرات وغيرها. في برو فريم نسعى
              ونهدف إلى تخليد لحظاتكم، ونبذل الكثير لتقديمها لكم باحترافية عالية
              عبر فريق متخصص ومتميز.
            </p>
          </div>
          <ul className="links">
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
          <div className="bottom">
            <h4>جميع الحقوق محفوظة</h4>
            <div className="social">
              <a
                href="https://instagram.com/proframee?igshid=MzRlODBiNWFlZA=="
                target="_blank"
                rel="noreferrer"
                className="insta"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.snapchat.com/add/proframee"
                target="_blank"
                rel="noreferrer"
                className="snap"
              >
                <i className="fa-brands fa-snapchat"></i>
              </a>
              <a
                href="https://wa.me/966508433852"
                target="_blank"
                rel="noreferrer"
                className="whatsapp"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a
                href="https://twitter.com/proframee"
                target="_blank"
                rel="noreferrer"
                className="twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="tel:0555950320"
                target="_blank"
                rel="noreferrer"
                className="phone"
              >
                <i className="fa-solid fa-phone"></i>
              </a>
              <a
                href="https://maps.app.goo.gl/DRHMVnBWpndhYoZv9?g_st=ic"
                target="_blank"
                rel="noreferrer"
                className="location"
              >
                <i className="fa-solid fa-location-dot"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
