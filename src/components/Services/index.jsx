import React from "react";
import "./index.css";
//import theme pattern
import ServicesData from "../../assets/services";
import {
  AiOutlineArrowRight,
  AiOutlineBackward,
  AiOutlineForward,
  AiOutlineMore,
} from "react-icons/ai";

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src="" alt="theme pattern" />
      </div>
      <div className="services-container">
        {ServicesData.map((service, index) => (
          <div className="services-format" key={index}>
            <h3>{service.service_no}</h3>
            <h2>{service.service_name}</h2>
            <p>{service.service_description}</p>
            <div className="services-readmore">
              <p>Read More</p>
              <AiOutlineArrowRight />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
