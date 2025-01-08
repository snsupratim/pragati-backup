
import React, { useState } from "react";
import "./css/Inner-Event.css";
import Background from "./Background";
import Background2 from "./Background2";
import Footer from "../Footer";
import eventImage from "./../images/cotact-small-bg.jpg"; // Import the image

const InnovativeIdeaContest = () => {
  const [activeTab, setActiveTab] = useState("About");

  const tabsContent = {
    About: "Innovate to Elevate – Your Ideas, Our Future! Get ready to showcase your innovation ideas💡 in this thrilling competition presented by PRAGATI 2025.",
    Timeline: "Event starts at 7 PM and ends at 11 PM. Be on time to grab the best seats!",
    RegistrationFee: "Outer College Teams: ₹400 MCKVIE + Outer College Teams: ₹400  MCKVIE Only Teams: ₹100 .",
    Contacts: "For any query contact "
  };

  const card = {
    id: 1,
    image: eventImage, // Replace with actual image URL
    rating: "team : 4-6",
    title: "Innovative Idea Contest",
  };

  return (
    <div>
      <Background />
      <Background2 />
      <section className="event-section">
        <div className="content">
          <div className="card">
            <img src={card.image} alt={card.title} />
            <div className="overlay">
              <span>{card.rating}</span>
              <h2>{card.title}</h2>
            </div>
          </div>
          <div className="info">
            {/* Added Heading */}
            <h3>Innovative Idea Contest</h3>
            <div className="tabs">
              {Object.keys(tabsContent).map((tab) => (
                <button
                  key={tab}
                  className={`tab ${activeTab === tab ? "active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.replace(/([A-Z])/g, " $1").trim()}
                </button>
              ))}
            </div>
            <p>{tabsContent[activeTab]}</p>
            <div className="button-group">
              <button className="btn">Register</button>
              <button className="btn">Rule Book</button>
              <button className="btn">General Rule</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default InnovativeIdeaContest;
