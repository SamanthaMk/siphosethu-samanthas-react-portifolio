import React from "react";
import "./about.css";
import Me from "../../assets/all-white (1).jpg";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <img src={Me} alt="About Me" />
        </div>
        <div className="about__content">
          <p>
            <h1>Front-End React Developer</h1>
            Hi There 😃 my name Siphosethu Samantha Mkandwana currently residing
            in Midrand South Africa I am creative Front-end Javascript React
            Developer an Alumni of SheCodes, with a love for turning design
            challenges into triumphs. Proficient in HTML, CSS, JavaScript,
            React, Tailwind Css, Node js and etc my mission is to create web
            interfaces so intuitive, with a strong eye for design and I am
            committed to delivering high-quality, responsive web applications.I
            am eager to collaborate on innovative projects and contribute to
            creating engaging user experiences. Driven by a relentless pursuit
            of knowledge, I am currently immersed in studying Python, MySQL,
            Java, and C/#C, to enhance my skills and to  contribute meaningfully
            to the tech industry. This dedication led me to undertake a rigorous
            full-stack course with Alx Africa, aligning with my goal to bring
            versatility to my professional repertoire both Front-end and
            Back-end. My desire annd passion is to apply this diverse skill set
            and contribute to shaping the future of technology by staying
            updated with current industry trends,thats why I added an AI
            Mircosoft Certificate to my curent skills set. Let's code with
            passion, solve problems with humor, and make the internet a more
            delightful place, one line at a time! 👩‍💻✨
          </p>
          <a href="#contact" className="btn btn-primary">
            Lets Chat
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
