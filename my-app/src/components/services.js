import React from 'react';

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <h1 className="sub-title">My <span>Services</span></h1>
        <div className="service-list">
          <div>
            <i className="fa-solid fa-code" style={{ color: '#00eeff' }}></i>
            <h2>Frontend Development</h2>
            <p>I build responsive and interactive front-end web apps using HTML, CSS, JavaScript, and React.</p>
            <a href="#Skills" className="read">Learn More</a>
          </div>

        <div>
          <i className="fa-solid fa-code" style={{ color: '#00eeff' }}></i>
          <h2>Programming Skills</h2>
          <p>
            I have a strong foundation in C++ besides I am currently exploring Java to expand my knowledge in object oriented programming.
          </p>
          <a href="#about" className="read">Learn More</a>
        </div>

          <div>
            <i className="fa-solid fa-laptop-code" style={{ color: '#00eeff' }}></i>
            <h2>Web Projects</h2>
            <p>I've built web projects like a travel blog, alumni platform and a voice-based grammar correction tool.</p>
            <a href="https://github.com/Kathakali07" className="read">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
