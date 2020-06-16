import React from "react";
import "./home.css";
import { useSpring, animated } from "react-spring";
import NavBar from "../components/Nav";

function Home() {
  const props = useSpring({
    marginTop: "25vh",
    from: { marginTop: "-25vh" },
    delay: 100,
  });
  return (
    <div className="bg">
      <NavBar></NavBar>
      <animated.div style={props} className="bannerText">
        <h1>Full Stack Web Developer</h1>
        <hr />
        <p>
          React | Javascript | Express | MySQL | MongoDB | Python | Bootstrap
        </p>
        <div className="socialLinks">
          <a
            href="https://www.linkedin.com/in/tyler-collins-0a5ab6162/"
            target="blank"
          >
            Linkedin
          </a>
          <a
            className="link"
            href="https://github.com/tcollins2011"
            target="blank"
          >
            GitHub
          </a>
        </div>
      </animated.div>
    </div>
  );
}

export default Home;
