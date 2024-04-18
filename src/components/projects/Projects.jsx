import React from "react";
import "./projects.css";
import IMG1 from "../../assets/movie-m-h.png";
import IMG2 from "../../assets/zoom-car-hire.png";
import IMG3 from "../../assets/nikey.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Movie Rush APP",
    info: "Project completed using Html and CSS ,Repository found on Github and  Deployed using Vercel.",
    github: "https://github.com/SamanthaMk/movie-rush",
    demo: "https://movie-rush-henna.vercel.app/",
    paragraph:"Welcome to Movie Rush, where every movie night is an adventure! Explore a curated selection of blockbuster hits, timeless classics, and hidden gems. With personalized recommendations and easy navigation, finding your next favorite film is a thrill in itself. Join us and elevate your movie-watching experience to new heights!"
  },
  {
    id: 2,
    image: IMG2,
    title: "Zoom Fleet Car Rentals",
    info: "Project completed using Javascript React,TypeScript, Next.js, Tailwind CSS, Headless UI, with an Api and Deployed using Vercel.",
    github: "https://github.com/SamanthaMk/zoom_fleet_rentals",
    demo: "https://zoom-fleet-rentals.vercel.app/",
    paragraph:
      "Welcome to Zoom Fleet Rentals, the ultimate car rental destination offering a perfect blend of luxury and affordability Our world-class fleet caters to diverse tastes and budgets, ensuring an unforgettable travel experience.With seamless bookings, a user-friendly app, and top-notch customer service, we proudly stand as the best car rental business globally. Elevate your journey with Zoom Fleet Rentals where every drive is an adventure!",
  },  
  {
    id: 3,
    image: IMG3,
    title: "NIKE cloned App",
    info: "Project completed using Javascript React, Vite & Tailwind CSS and is mobile responsive,Repository found on Github and  Deployed using Vercel.",
    github: "https://github.com/SamanthaMk/nike",
    demo: "https://nike-two-flame.vercel.app/",
    paragraph:
      "Shop the latest Nike products, including the new Air Max Dn with Dynamic Air Unit, Explore shoes, clothing, gifts and more for men, women and kids",
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
