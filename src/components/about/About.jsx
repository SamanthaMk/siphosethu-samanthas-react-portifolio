import React from "react";
import "./about.css";
import Me from "../../assets/coding-video.mp4";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

<div className="ccontainer about__container">
<div className="about__me">
<video src={Me} autoPlay loop muted className="vid"></video>
</div>

<div className="about__content">
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Ipsam adipisci, ab nam ut molestias nihil qui hic molestiae
  perspiciatis voluptatibus doloremque amet et sapiente vel
  animi odio dolore laborum voluptates Lorem ipsum dolor sit 
  amet consectetur adipisicing elit. Quaerat vel ea sit unde
  aperiam cum nemo veritatis quisquam vitae recusandae eos
  aliquid repellendus quo, laboriosam magni ipsam
   laborum blanditiis quam.
</p>
<a href="#contact" className="btn btn-primary" >Lets Chat</a>
</div>

</div>
    </section>

  );

};

export default About;
