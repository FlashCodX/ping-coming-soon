import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";

import styles from "./styles/App.module.css";
import illustration from "./assets/illustration-dashboard.png";
import { useState } from "react";
const logo = require("./assets/logo.svg").default;

function App() {
  const {
    container,
    logoStyle,
    socials,
    heading,
    inputContainer,
    illustrationStyle,
    iconContainer,
    attribution,
    formContainer,
    copyright,
  } = styles;

  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    email !== "" && email.includes("@") ? setError(false) : setError(true);
  };
  return (
    <>
      <main className={container}>
        <img src={logo} className={logoStyle} alt="logo" />
        <div className={heading}>
          <h1>
            We are lauching <span>soon!</span>
          </h1>
          <p>Subscribe to get notified</p>
        </div>
        <div className={formContainer}>
          <div className={inputContainer}>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Your email address..."
            />
            <p
              style={
                error ? { visibility: "visible" } : { visibility: "hidden" }
              }
            >
              Please provide a valid email address
            </p>
          </div>
          <button onClick={() => handleSubmit()}>Notify Me</button>
        </div>
        <img
          src={illustration}
          className={illustrationStyle}
          alt="illustration"
        />
        <div className={socials}>
          <div className={iconContainer}>
            <GrFacebookOption />
          </div>
          <div className={iconContainer}>
            <AiOutlineTwitter />
          </div>
          <div className={iconContainer}>
            <AiFillInstagram />
          </div>
        </div>
        <p className={copyright}>
          {" "}
          &copy; Copyright Ping. All rights reserved.
        </p>
      </main>

      <footer className={attribution}>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.linkedin.com/in/luispintodev/"
          target="_blank"
          rel="noreferrer"
        >
          Luís Pinto
        </a>
        .
      </footer>
    </>
  );
}

export default App;
