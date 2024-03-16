import React from "react";
import "./projects.css";
import IMG1 from "../../assets/zoom-car-hire.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Zoom Fleet Car Rentals",
    info: "Project completed using Javascript React,TypeScript, Next.js, Tailwind CSS, Headless UI, with an Api and Deployed using Vercel.",
    github: "https://github.com/SamanthaMk/zoom_fleet_rentals",
    demo: "https://zoom-fleet-rentals.vercel.app/",
    paragraph:
      "Welcome to Zoom Fleet Rentals, the ultimate car rental destination offering a perfect blend of luxury and affordability Our world-class fleet caters to diverse tastes and budgets, ensuring an unforgettable travel experience.With seamless bookings, a user-friendly app, and top-notch customer service, we proudly stand as the best car rental business globally. Elevate your journey with Zoom Fleet Rentals where every drive is an adventure!",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container projects__container">
        {data.map(({ id, image, title, info, github, demo, paragraph }) => {
          return (
            <article key={id} className="projects__item">
              <div className="project__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <p className="project__info">
                {" "}
                <h3>{info}</h3>
              </p>
              <div className="project__item-cta">
                <p className="card__para">{paragraph}</p>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
