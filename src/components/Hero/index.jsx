import React from "react";
import "./index.css";
import Services from "../Services";
import About from "../About";
import MyWork from "../MyWork";
import Contact from "../Contact";
import { useNavigate } from "react-router-dom";
// import profile_img from "../../assets/profile_img.svg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div id="home" className="hero">
        <img src="" alt="profile image" />
        <h1>
          <span>Hi, I'm Gichohi Mwangi. </span>A fullstack developer based in
          Kenya
        </h1>
        <p>
          I'm a fullstack developer from Nairobi, Kenya with 3+ years of
          experience
        </p>
        <div className="hero-action">
          <div
            className="hero-connect"
            onClick={() => {
              // setMenu("contact");
              navigate("/contact");
            }}
          >
            Let's Connect
          </div>
          <div className="hero-resume">My Resume</div>
        </div>
      </div>
      <Services />
      <About />
      <MyWork />
      <Contact />
    </div>
  );
};

export default Hero;
