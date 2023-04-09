import React, { useState, useEffect } from "react";
import "./Contact.css";
import { useSelector } from "react-redux";
import { SpinLoader } from "../../components"
import map from "../../img/other/map.png";

const Contact = () => {
  let userName = localStorage.getItem("userName");
  let userEmail = localStorage.getItem("userEmail");
  const [userMessage, setUserMessage] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const contactState = useSelector(state => state.sendMessage);

  // on input set values 
  const onChangeHandler = (e) => {
    let obj = {
      ...userMessage,
      [e.target.name]: e.target.value
    }
    setUserMessage(obj)
  };

  // to scroll on top automatically
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div className="contact">
      <div className="contactTitle">
        <h2>Contact</h2>
      </div>
      <div className="contactContain">
        <form method='post'>
          <input
            type="text"
            value={userName === null ? userMessage.name : userName}
            disabled={userName === null ? false : true}
            onChange={(e) => onChangeHandler(e)}
            name="name"
            required
            placeholder="Your Name*"
          />
          <input
            type="text"
            value={userEmail === null ? userMessage.email : userEmail}
            disabled={userEmail === null ? false : true}
            onChange={(e) => onChangeHandler(e)}
            name="email"
            required
            placeholder="Your email*"
          />
          <input
            type="text"
            value={userMessage.subject}
            onChange={(e) => onChangeHandler(e)}
            name="subject"
            required
            placeholder="Subject*"
          />
          <textarea
            value={userMessage.message}
            onChange={(e) => onChangeHandler(e)}
            name="message"
            required
            cols="30"
            rows="5"
            placeholder="Your message*"
          />
          {
            <button type="submit" disabled={contactState.loading}>
              {contactState.loading ?
                <SpinLoader /> :
                'Submit'
              }
            </button>
          }
        </form>
        <img
          title="title"
          src={map}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="map"
          alt="map"
        />
      </div>
    </div>
  );
};

export default Contact;
