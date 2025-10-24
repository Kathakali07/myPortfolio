import React from 'react';

const Skills = () => {
  return (
    <section>
      <div className="container1" id="Skills">
        <h1 className="heading1"><span>Technical</span> Skills</h1>
        <div className="Technical-bars">
          <div className="bar">
            <i className="fa-brands fa-html5" style={{ color: 'aliceblue' }}></i>
            <div className="info"><span>HTML</span></div>
            <div className="progress-line html"><span></span></div>
          </div>

          <div className="bar">
            <i className="fa-brands fa-css3-alt"></i>
            <div className="info"><span>CSS</span></div>
            <div className="progress-line css"><span></span></div>
          </div>

          <div className="bar">
            <i className="fa-brands fa-js"></i>
            <div className="info"><span>JavaScript</span></div>
            <div className="progress-line javascript"><span></span></div>
          </div>

          <div className="bar">
            <i className="fa-solid fa-code"></i>
            <div className="info"><span>C++</span></div>
            <div className="progress-line cpp"><span></span></div>
          </div>

          <div className="bar">
            <i className="fa-brands fa-react"></i>
            <div className="info"><span>ReactJS</span></div>
            <div className="progress-line react"><span></span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
