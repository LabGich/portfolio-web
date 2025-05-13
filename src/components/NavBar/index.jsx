import React, { useState } from "react";
import "./index.css";
import { AiOutlineLine } from "react-icons/ai";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
// import logo from "../../assets/logo.svg";

const NavBar = () => {
  const [menu, setMenu] = useState("home");

  const navigate = useNavigate();

  return (
    <div className="navbar">
      <img src="" alt="logo" />
      <ul className="nav-menu">
        <li>
          <p
            onClick={() => {
              setMenu("home");
              navigate("/");
            }}
          >
            Home
          </p>
          {menu === "home" ? <AiOutlineLine className="icon" /> : <></>}
        </li>

        <li onClick={() => setMenu("services")}>
          <p
            onClick={() => {
              navigate("/services");
            }}
          >
            Services
          </p>
          {menu === "services" ? <AiOutlineLine className="icon" /> : <></>}
        </li>

        <li>
          <p
            onClick={() => {
              setMenu("about");
              navigate("/about");
            }}
          >
            About Me
          </p>
          {menu === "about" ? <AiOutlineLine className="icon" /> : <></>}
        </li>
        <li>
          <p
            onClick={() => {
              setMenu("portfolio");
              navigate("/portfolio");
            }}
          >
            Portfolio
          </p>
          {menu === "portfolio" ? <AiOutlineLine className="icon" /> : <></>}
        </li>
        <li>
          <p
            onClick={() => {
              setMenu("contact");
              navigate("/contact");
            }}
          >
            Contact
          </p>
          {menu === "contact" ? <AiOutlineLine className="icon" /> : <></>}
        </li>
      </ul>
      <div
        className="nav-connect"
        onClick={() => {
          setMenu("contact");
          navigate("/contact");
        }}
      >
        Contact Me
      </div>
    </div>
  );
};

export default NavBar;
