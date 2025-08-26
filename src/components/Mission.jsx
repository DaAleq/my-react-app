import React from "react";
import "./Mission.css";
import image1 from "../assets/building.png";
import image2 from "../assets/classroom.png";
import image3 from "../assets/students.png";
import icon10of10 from "../assets/icon-10-of-10.svg"; 
import iconArrow from "../assets/icon-arrow.svg";     

const Mission = () => {
  return (
    <section className="mission-section">
      <div className="title-container">
        <h2 className="mission-title">Մեր նպատակը</h2>
      </div>

      <div className="mission-content-grid">
        <div className="mission-left-column">
          <div className="image-cluster">
            <img src={image1} alt="AIT Building" className="cluster-img img-1" />
            <img src={image2} alt="AIT Classroom" className="cluster-img img-2" />
            <img src={image3} alt="AIT Students" className="cluster-img img-3" />
          </div>
          <p className="mission-description">
            Ապակենտրոնացնել որակյալ IT կրթությունը և դարձնել այն հասանելի ոչ միայն
            Երևանում, այլ նաև նրա սահմաններից դուրս։
          </p>
        </div>

        <div className="mission-right-column">
          <div className="mission-card">
            {/* 2. SVG-ն փոխարինված է <img> թեգով */}
            <img src={icon10of10} alt="10 out of 10 Icon" className="mission-icon" />
            <p className="card-text">
              Ստեղծել որակյալ կադրեր աշխատաշուկայի զարգացման համար և համալրել
              նրանցով մեր դպրոցին կից Fantasy Space ընկերությունը։
            </p>
          </div>
          <div className="mission-card">
            {/* 3. SVG-ն փոխարինված է <img> թեգով */}
            <img src={iconArrow} alt="Development Arrow Icon" className="mission-icon" />
            <p className="card-text">
              Զարգացնել Արարատի մարզի IT պոտենցիալը շնորհիվ նորաստեղծ և
              որակյալ մասնագետների։
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;