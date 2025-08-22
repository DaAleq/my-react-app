import React from "react";
import "./Footer.css";
import logo from "../assets/Capture_5.PNG"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={ logo } alt="AIT School logo" />
          <p>+374(93)-67-69-66</p>
          <p>info@aitschool.am</p>
          <p>Ք․Արարատ, Աբովյան 2/1</p>
          <p>Ք․Վեդի, Արարատյան 42/6</p>
        </div>

        <div className="footer-links">
          <div className="footer-section">
            <h4>Դասընթացներ</h4>
            <ul>
              <li><a href="#">Web ծրագրավորում</a></li>
              <li><a href="#">UI/UX դիզայն</a></li>
              <li><a href="#">Գրաֆիկ դիզայն</a></li>
              <li><a href="#">SMM</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Մեր մասին</h4>
            <ul>
              <li><a href="#">Դպրոց</a></li>
              <li><a href="#">Բլոգ</a></li>
              <li><a href="#">Fantasy Space</a></li>
              <li><a href="#">Գաղտնիության քաղաքականություն</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Սոցիալական ցանցեր</h4>
            <ul>
              {/* <li><a href="#"><Facebook/></a></li>
              <li><a href="#"><Instagram/></a></li> */}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} AIT School — Բոլոր իրավունքները պաշտպանված են</p>
      </div>
    </footer>
  );
};

export default Footer;