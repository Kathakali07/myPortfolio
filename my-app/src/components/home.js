import React, { useEffect } from "react";
import profileImage from './about_me.jpg';
import { initTyped } from "./main";

const Home = () => {
  useEffect(() => {
    const typedInstance = initTyped();
    return () => typedInstance.destroy();
  }, []);

  return (
    <section id="home" className="home">
      <div className="home-main flex-container">
        
        <div className="home-left">
          <div className="home-text">
            <h3>Hello, It's me</h3>
            <h1>Kathakali Das</h1>
            <h3>
              I am a <span className="text"></span>
            </h3>
            <p>My expertise is to create and design websites.</p>

            <div className="home-sci">
              <a href="https://x.com/Katha_kali07" target="_blank" rel="noopener noreferrer" style={{ "--i": 6 }}>
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/kathakali-kd-46a93623b/" target="_blank" rel="noopener noreferrer" style={{ "--i": 7 }}>
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/katha_kali07/" target="_blank" rel="noopener noreferrer" style={{ "--i": 8 }}>
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>

            <a href="#about" className="btn-box">More About Me</a>
          </div>
        </div>

        <div className="home-right">
          <div className="logo-img">
            <img src={profileImage} alt="Kathakali Das" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
