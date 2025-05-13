import React from "react";
import "./index.css";
// import theme_pattern from '../../assets/theme_pattern.svg'
//import profile image

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src="" alt="theme pattern" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src="" alt="profile image" />
        </div>
        <div className="about-right">
          <div className="about-p">
            <p>
              I'm an experienced fullstack developer with over 3 years of
              experience in ... ...
            </p>
            <p>My passion for development is not only .. ...</p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>REACT JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JAVASCRIPT</p>
              <hr style={{ width: "56%" }} />
            </div>
            <div className="about-skill">
              <p>NODE JS</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>3+</h1>
          <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>30+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  );
};

export default About;
