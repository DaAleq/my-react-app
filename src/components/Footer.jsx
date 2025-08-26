import React from "react";
import "./Footer.css";
import logo from "../assets/Capture_5.PNG";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={logo} alt="AIT School logo" />
          <p>+374 (93) 67-69-66</p>
          <p>info@aitschool.am</p>
          <p>Ք. Արարատ, Արշակունյաց 2/1</p>
          <p>Ք. Վեդի, Արամայիսյան 42/6</p>
        </div>

        <div className="footer-links">
          <div className="footer-section">
            <h4>Դասընթացներ</h4>
            <ul>
              <li><a href="/courses#web">Web ծրագրավորում</a></li>
              <li><a href="/courses#ui-ux">UI/UX դիզայն</a></li>
              <li><a href="/courses#graphic">Գրաֆիկ դիզայն</a></li>
              <li><a href="/courses#smm">SMM</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Մեր մասին</h4>
            <ul>
              <li><a href="/about">Դպրոց</a></li>
              <li><a href="/#">Բլոգ</a></li>
              <li><a href="/fantasy-space">Fantasy Space</a></li>
              <li><a href="/privacy-policy">Գաղտնիության քաղաքականություն</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Սոցիալական ցանցեր</h4>
            <ul className="social-links">
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://telegram.org" target="_blank" rel="noopener noreferrer">Telegram</a></li>
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