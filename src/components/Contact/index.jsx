import React from "react";
import "./index.css";
import { AiFillHome, AiFillMail, AiFillPhone } from "react-icons/ai";
//import theme pattern
//import mail, location, call icon

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    formData.append("access_key", "2912e8ab-6c84-422d-bca7-49441a2c9c58");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res?.success) {
      alert(res.message);
      console.log("Success", res);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src="" alt="theme pattern" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I'm currently available to take on a new project, feel free to reach
            out...
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <AiFillMail /> <p>labradorgichohi@gmail.com</p>
            </div>
            <div className="contact-detail">
              <AiFillPhone /> <p>+254 799 141 839</p>
            </div>
            <div className="contact-detail">
              <AiFillHome /> <p>Nairobi, Kenya</p>
            </div>
          </div>
        </div>
        <form className="contact-right" onSubmit={handleSubmit}>
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message</label>
          <textarea
            name="message"
            rows={8}
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
