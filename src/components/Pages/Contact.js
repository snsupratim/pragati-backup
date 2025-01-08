import { useState } from "react";
import React from "react";
import Background from "./Background";
import Background2 from "./Background2";
import Footer from '../Footer';
import './css/contact.css'; // Import your CSS
import call from "../images/phone-call2.png";

export const Contact = () => {
  const faqData = [
    {
      question: "Can we participate in Multiple Events ?",
      answer:
        "Yes you can.",
    },
    {
      question: "On spot registration is there ?",
      answer:
      "Yes. ",
    },
    {
      question: "What's the Venue ?",
      answer:
        "MCKVIE Campus, Liluah, West Bengal.",
    },
    {
      question: "How to register ?",
      answer: "Check our instagram page for more information.",
    },
  ];
  const [visibleIndex, setVisibleIndex] = useState(null);

  const toggleAnswer = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };
  return (
    <div><Background /><Background2 />
    <div className="pages"> 
     <div className="segment111">
        <div className="segment111-1">
          <div className="contuct-us-text">
            <h1>Faqs</h1>
          </div>

          <div className="contacts">
              <div className="cont-1">
              <img src={call} alt="Description of image" className="sponsor-images"/>

              </div>
              <div className="cont-2">

              <div className="part1">
              <h2>Contact Us for your Problem</h2>
              </div>

              <div className="inside">

                <div className="part2">
                
                </div>
                <div className="part3">
                  
                </div>


              </div>
              

              </div>
            
          </div>


          <div className="faqs-text"><h1>Frequently Asked Questions</h1></div>
        </div>
        <div className="faq-1">
          
          <div className="faq1"><h1>GOT QUESTIONS ? <br/>WE HAVE ANSWERS </h1 >
          <p>Discover detailed answers to the most frequently asked questions, uncover valuable information, and gain in-depth knowledge about the event to ensure you're fully informed and ready to make the most of the experience.</p></div>


          <div className="faq2">
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <h1
            className="faq-question"
            onClick={() => toggleAnswer(index)}
            style={{ cursor: "pointer", color: "#007BFF" }}
          >
            {item.question} 
          </h1>
          {visibleIndex === index && (
            <b><p className="faq-answer" style={{ marginTop: "5px" }}>
              {item.answer}
            </p></b>
          )}
        </div>
      ))}
    </div>
        </div>
        <div className="loc-text"><h1>Event Location</h1></div>
        <div className="contuct-us-text">
        <iframe className="map"
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.9151917805607!2d88.34512757435475!3d22.61964193124633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d65da7b3775%3A0x30915f7e98f1b0d5!2sMCKV%20Institute%20of%20Engineering!5e0!3m2!1sen!2sin!4v1733461586378!5m2!1sen!2sin"
                              width="100%"
                              height="100%"
                              style={{ border: 0 }}
                              allowFullScreen
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"/>
          </div>
        
      </div>
      </div>
      <Footer/>
    </div>
  );
};
