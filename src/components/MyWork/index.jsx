import React from "react";
import "./index.css";
//import theme pattern
import MyWorkData from "../../assets/mywork";
import { AiOutlineArrowRight } from "react-icons/ai";

const MyWork = () => {
  return (
    <div id="mywork" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src="" alt="theme pattern" />
      </div>
      <div className="mywork-container">
        {MyWorkData.map((project, index) => (
          <img key={index} src={project.project_img} alt="project image" />
        ))}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <AiOutlineArrowRight />
      </div>
    </div>
  );
};

export default MyWork;
