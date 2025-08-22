import React from "react";
import "./MainSection.css";
import AITIMG from "../assets/Capture_10.PNG"; 

const MainSection = () => {
  return (
    <section className="main-section">
      <div className="main-left">
        <h1 className="main-title">
          Ararat <span className="title-it">IT</span>
        </h1>
        <p className="main-subtitle">
          Դարձեք հաջողակ IT-մասնագետ և սկսեք վաստակել գումար ուսմանն
          ավարտից հետո:
        </p>

        <div className="course-buttons">
          <button>WEB ծրագրավորում</button>
          <button>UI/UX դիզայն</button>
          <button>Գրաֆիկ դիզայն</button>
          <button>SMM</button>
          <button>AIT Kids</button>
          <button>Բոլոր դասընթացները</button>
        </div>

        <p className="cta-text">Գրանցվեք հիմա</p>
        <div className="action-buttons">
          <button className="btn-primary">Դասընթացային</button>
          <button className="btn-secondary">Անվճար խորհրդատվություն</button>
        </div>
      </div>

      <div className="main-right">
        <img src={AITIMG} alt="Student working on a computer" className="main-image" />
      </div>
    </section>
  );
};

export default MainSection;