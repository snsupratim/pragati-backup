import React from "react";
import "./css/Members.css";
import { FaWhatsapp, FaInstagram, FaGithub } from "react-icons/fa";
import Footer from "../Footer"; // Import Footer component
import Background from "./Background";
import Background2 from "./Background2";
import snsupratim from "../members/snsupratim.jpg";

export const Members = () => {
  return (
    <div className="member-page">
      {" "}
      <Background />
      <Background2 />
      <h1 className="page-title">Our Team</h1>
      {/* Tech Team Section */}
      <section className="team-section">
        <h2 className="section-title">Tech Team</h2>
        <div className="team-container">
          {/* Tech Team Members */}
          <div className="team-member">
            <div className="member-photo">
              <img src="/" alt="Tech Team Member" className="member-img" />
            </div>
            <div className="member-info">
              <h3 className="member-name">Akash Banerjee</h3>
              <p className="member-role">Developer</p>
              <p className="member-roll">CSE/</p>
              <div className="member-social">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          <div className="team-member">
            <div className="member-photo">
              <img src="/" alt="Tech Team Member" className="member-img" />
            </div>
            <div className="member-info">
              <h3 className="member-name">Nishka Shrimali</h3>
              <p className="member-role"> Developer</p>
              <p className="member-roll">CSE/</p>
              <div className="member-social">
                <a
                  href="https://wa.me/9876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          <div className="team-member">
            <div className="member-photo">
              <img
                src="/003-Somnath.jpg"
                alt="Tech Team Member"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Somnath Paul</h3>
              <p className="member-role">Developer</p>
              <p className="member-roll">CSE/AIML-3rd Year</p>
              <div className="member-social">
                <a
                  href="https://wa.me/2345678901"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          <div className="team-member">
            <div className="member-photo">
              <img
                src="/001-Rohit.jpg"
                alt="Tech Team Member"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Rohit Kumar</h3>
              <p className="member-role">Developer</p>
              <p className="member-roll">B.VOC/SD-2nd Year</p>
              <div className="member-social">
                <a
                  href="https://wa.link/9l81kp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://www.instagram.com/rohit..writes_?igsh=Zm1hMnI3aGZvZXRx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com/Rohitsaw6207"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          <div className="team-member">
            <div className="member-photo">
              <img
                src={snsupratim}
                alt="Tech Team Member"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">SUPRATIM NAG</h3>
              <p className="member-role">Developer</p>
              <p className="member-roll">CSE/AIML-3rd Year</p>
              <div className="member-social">
                <a
                  href="https://wa.me/4567890123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          <div className="team-member">
            <div className="member-photo">
              <img
                src="/007-Naina.jpg"
                alt="Tech Team Member"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Naina Jha</h3>
              <p className="member-role">Developer</p>
              <p className="member-roll">B.Voc/SD-2nd Year</p>
              <div className="member-social">
                <a
                  href="https://wa.me/5678901234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Event Organizers Section */}
      <section className="team-section">
        <h2 className="section-title">Event Organizers</h2>
        <div className="team-container">
          {/* Event Organizers */}
          <div className="team-member">
            <div className="member-photo">
              <img
                src="/004-Rakesh.jpg"
                alt="Event Organizer"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Rakesh Mandal</h3>
              <p className="member-role">Organizer</p>
              <p className="member-roll">ME</p>
              <div className="member-social">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          <div className="team-member">
            <div className="member-photo">
              <img
                src="https://via.placeholder.com/150"
                alt="Event Organizer"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Akash Banerjee</h3>
              <p className="member-role">Organizer</p>
              <p className="member-roll">CSE</p>
              <div className="member-social">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          <div className="team-member">
            <div className="member-photo">
              <img
                src="https://via.placeholder.com/150"
                alt="Event Organizer"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Nishka Shrimali</h3>
              <p className="member-role">Organizer</p>
              <p className="member-roll">CSE</p>
              <div className="member-social">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          <div className="team-member">
            <div className="member-photo">
              <img
                src="/005-Aayushman.jpg"
                alt="Event Organizer"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Aayushman Baruah</h3>
              <p className="member-role">Organizer</p>
              <p className="member-roll">CSE-DS</p>
              <div className="member-social">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          <div className="team-member">
            <div className="member-photo">
              <img
                src="1-Ahelee.jpg"
                alt="Event Organizer"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Ahelee Mukherjee</h3>
              <p className="member-role">Organizer</p>
              <p className="member-roll">IT-AIML</p>
              <div className="member-social">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          <div className="team-member">
            <div className="member-photo">
              <img
                src="/006-Anirban.jpg"
                alt="Event Organizer"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Anirban Dey</h3>
              <p className="member-role">Organizer</p>
              <p className="member-roll">B.Voc-AS</p>
              <div className="member-social">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="team-member">
            <div className="member-photo">
              <img
                src="010-Antak.jpg"
                alt="Event Organizer"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Antak Rakshit</h3>
              <p className="member-role">Organizer</p>
              <p className="member-roll">AUE</p>
              <div className="member-social">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="team-member">
            <div className="member-photo">
              <img
                src="0-Anusmita.jpg"
                alt="Event Organizer"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Anusmita Adhikary</h3>
              <p className="member-role">Organizer</p>
              <p className="member-roll">CSE</p>
              <div className="member-social">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="team-member">
            <div className="member-photo">
              <img
                src="22-Apurba.jpg"
                alt="Event Organizer"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Apurba Bairagya</h3>
              <p className="member-role">Organizer</p>
              <p className="member-roll">ME</p>
              <div className="member-social">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="team-member">
            <div className="member-photo">
              <img
                src="009-Aritra.jpg"
                alt="Event Organizer"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Aritra Chatterjee</h3>
              <p className="member-role">Organizer</p>
              <p className="member-roll">EE</p>
              <div className="member-social">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="team-member">
            <div className="member-photo">
              <img
                src="011-Arnab.jpg"
                alt="Event Organizer"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Arnab Debnath</h3>
              <p className="member-role">Organizer</p>
              <p className="member-roll">IT-AIML</p>
              <div className="member-social">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="team-member">
            <div className="member-photo">
              <img
                src="019-Ashutosh.jpg"
                alt="Event Organizer"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Ashutosh Tiwari</h3>
              <p className="member-role">Organizer</p>
              <p className="member-roll">ECE</p>
              <div className="member-social">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="team-member">
            <div className="member-photo">
              <img
                src="014-Bijay.jpg"
                alt="Event Organizer"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Bijay Nayak</h3>
              <p className="member-role">Organizer</p>
              <p className="member-roll">ME</p>
              <div className="member-social">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="team-member">
            <div className="member-photo">
              <img
                src="29-Harsh Singh.jpg"
                alt="Event Organizer"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Harsh Kumar Singh</h3>
              <p className="member-role">Organizer</p>
              <p className="member-roll">IT-AIML</p>
              <div className="member-social">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="team-member">
            <div className="member-photo">
              <img
                src="007-Naina.jpg"
                alt="Event Organizer"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Naina Jha</h3>
              <p className="member-role">Organizer</p>
              <p className="member-roll">B.Voc-SD</p>
              <div className="member-social">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="team-member">
            <div className="member-photo">
              <img
                src="008-Himanshu.jpg"
                alt="Event Organizer"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Himanshu Kumar Thakur</h3>
              <p className="member-role">Organizer</p>
              <p className="member-roll">IT</p>
              <div className="member-social">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          <div className="team-member">
            <div className="member-photo">
              <img
                src="Kunal.jpg"
                alt="Event Organizer"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Kunal Das</h3>
              <p className="member-role">Organizer</p>
              <p className="member-roll">IT</p>
              <div className="member-social">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="team-member">
            <div className="member-photo">
              <img
                src="015-Rohit.K.jpg"
                alt="Event Organizer"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Rohit Kumar</h3>
              <p className="member-role">Organizer</p>
              <p className="member-roll">B.Voc-SD</p>
              <div className="member-social">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="team-member">
            <div className="member-photo">
              <img
                src="27-Parna.jpg"
                alt="Event Organizer"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Parna Biswas</h3>
              <p className="member-role">Organizer</p>
              <p className="member-roll">EE</p>
              <div className="member-social">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="team-member">
            <div className="member-photo">
              <img
                src="Partha.jpg"
                alt="Event Organizer"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Partha Sarathi Hazra</h3>
              <p className="member-role">Organizer</p>
              <p className="member-roll">CSE-DS</p>
              <div className="member-social">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="team-member">
            <div className="member-photo">
              <img
                src="21-Rohan.jpg"
                alt="Event Organizer"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Rohan Sasmal</h3>
              <p className="member-role">Organizer</p>
              <p className="member-roll">ME</p>
              <div className="member-social">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="team-member">
            <div className="member-photo">
              <img
                src="23-RohitS.jpg"
                alt="Event Organizer"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Rohit Santra</h3>
              <p className="member-role">Organizer</p>
              <p className="member-roll">ECE</p>
              <div className="member-social">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="team-member">
            <div className="member-photo">
              <img
                src="20-RounakB.jpg"
                alt="Event Organizer"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Rounak Bhadra</h3>
              <p className="member-role">Organizer</p>
              <p className="member-roll">IT-AIML</p>
              <div className="member-social">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="team-member">
            <div className="member-photo">
              <img
                src="Rupsa.jpg"
                alt="Event Organizer"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Rupsa Nandy</h3>
              <p className="member-role">Organizer</p>
              <p className="member-roll">CSE</p>
              <div className="member-social">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="team-member">
            <div className="member-photo">
              <img
                src="31-Sakangsa.jpg"
                alt="Event Organizer"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Sakangsa Parui</h3>
              <p className="member-role">Organizer</p>
              <p className="member-roll">CSE-DS</p>
              <div className="member-social">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="team-member">
            <div className="member-photo">
              <img
                src="012-Sandip.jpg"
                alt="Event Organizer"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Sandip Roy</h3>
              <p className="member-role">Organizer</p>
              <p className="member-roll">ME</p>
              <div className="member-social">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="team-member">
            <div className="member-photo">
              <img
                src="Sankalp.jpg"
                alt="Event Organizer"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Sankalp Kumar Yadav</h3>
              <p className="member-role">Organizer</p>
              <p className="member-roll">ECE</p>
              <div className="member-social">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="team-member">
            <div className="member-photo">
              <img
                src="Semanti.jpg"
                alt="Event Organizer"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Semanti Ghosh</h3>
              <p className="member-role">Organizer</p>
              <p className="member-roll">IT-AIML</p>
              <div className="member-social">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="team-member">
            <div className="member-photo">
              <img
                src="Shreesukh.jpg"
                alt="Event Organizer"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Shreesukh Bidyuth Das</h3>
              <p className="member-role">Organizer</p>
              <p className="member-roll">EE</p>
              <div className="member-social">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="team-member">
            <div className="member-photo">
              <img
                src="016-Soumyadip.jpg"
                alt="Event Organizer"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Soumyadip Dhara</h3>
              <p className="member-role">Organizer</p>
              <p className="member-roll">CSE-DS</p>
              <div className="member-social">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="team-member">
            <div className="member-photo">
              <img
                src="25-Sourajyoti.jpg"
                alt="Event Organizer"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Sourajyoti Giri</h3>
              <p className="member-role">Organizer</p>
              <p className="member-roll">CSE-DS</p>
              <div className="member-social">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="team-member">
            <div className="member-photo">
              <img
                src="013-SouravG.jpg"
                alt="Event Organizer"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Sourav Ghosh</h3>
              <p className="member-role">Organizer</p>
              <p className="member-roll">IT</p>
              <div className="member-social">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="team-member">
            <div className="member-photo">
              <img
                src="24-SouvikDas.jpg"
                alt="Event Organizer"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Souvik Das</h3>
              <p className="member-role">Organizer</p>
              <p className="member-roll">ECE</p>
              <div className="member-social">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="team-member">
            <div className="member-photo">
              <img
                src="017-Subikash.jpg"
                alt="Event Organizer"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Subikash Patra</h3>
              <p className="member-role">Organizer</p>
              <p className="member-roll">AUE</p>
              <div className="member-social">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Members;
