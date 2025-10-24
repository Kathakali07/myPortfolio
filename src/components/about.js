import React from 'react';
import profileImage from './about_me.jpg'; 

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={profileImage} alt="About" />
      </div>
      <div className="about-text">
        <h2>About<span> ME</span></h2>
        <p>
          I am a passionate and dedicated B.Tech student in Information Technology(2023–2027) at St. Thomas College of Engineering & Technology.
          I enjoy building modern,responsive and user-friendly web applications with a strong foundation in HTML, CSS, JavaScript. 
          With hands-on experience in React.js and Tailwind CSS, I love creating projects that combine functionality with clean design.
          Besides that I know languages like C++, Python and currently learning Java to strengthen my understanding of Object-Oriented Programming.
          Some of my works include a Travel Blog Website and Speak Right: a grammar correction platform with voice input support.
          Though I currently have no formal industry experience but I am eager to learn, grow and apply my skills in real-world environments.
          Beyond coding I value problem-solving, teamwork and effective communication, which help me to collaborate and adapt in dynamic settings.
        </p>
      </div>
    </section>
  );
};

export default About;
