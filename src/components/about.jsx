import { useState, useEffect } from "react";
import axios from "axios";
import SlideInText from "../others/SlideInText.jsx";
import { Link } from "react-router-dom";
import Dp from "../others/dp.jsx";
import URL from "../assets/variables.js";
import "../css/about.css";

const About = () => {
  const [aboutDescription, setAboutDescription] = useState("");

  useEffect(() => {
    axios
      .get(`${URL}/about`)
      .then((response) => {
        setAboutDescription(response.data.about);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [URL]); // Added URL to dependencies

  return (
    <section id="about" className="about-section">
      <div className="smaller">
        <div className="container">
          <div className="left-side">
            <h2 className="section-title text-warning">
              Hi, I&apos;m <span className="name">Farzana Akter</span>
            </h2>
            <h3 className="description-title">FrontEnd Developer</h3>
            <SlideInText />
            <div className="contact-button-container">
              <Link to="/contact" className="btn btn-contact">
                Contact Me <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
            <div className="cv-button-container">
              <button className="style">
                <a
                  className="st"
                  href="chttps://drive.usercontent.google.com/download?id=1ZwWdR96CruXi11I2BnZQWXIs0f843sZk&export=download&authuser=0"
                >
                  Download CV <i className="fa-solid fa-download"></i>
                </a>
              </button>
            </div>
          </div>
          <div className="right-side">
            <Dp />
          </div>
        </div>
      </div>
      <section id="about-details" className="about-details-section">
        <div className="container">
          <h2 className="section-title text-warning">About Me</h2>
          <div
            className="section-description text-light"
            dangerouslySetInnerHTML={{
              __html:
                "<p>Hello, I'm Farzana Akter, a passionate FrontEnd developer and a student in CST. My journey in technology has fueled my passion for building fully responsive and interactive web applications.</p><br/> <p>My expertise extends to front-end technologies like HTML, CSS, and JavaScript(React), with a keen eye for design using frameworks like Bootstrap. </p><br/><p>With a strong foundation in both computer science and web development, I am eager to contribute my skills to innovative and user-centric digital experiences. Let's build something amazing together!</p>",
            }}
            // aboutDescription
          />
        </div>
      </section>
    </section>
  );
};

export default About;
