import React from "react";
import "./projects.css";
import IMG1 from '../../assets/interior-decor.png';
import IMG2 from '../../assets/fish-recipe.png';
import IMG3 from "../../assets/Forecast-app.png";
import IMG4 from "../../assets/web.png";
import IMG5 from "../../assets/webbie.png";
import IMG6 from '../../assets/yourgurt.png';

//Create an Array method that will be mapped to

const data = [
  {
  id: 1,
  image: IMG1,
  title:"Amazing Properties",
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  github:'https://github.com',
  demo: 'https://github.com',
  },
  {
  id:2,
  image: IMG2,
  title:'Declicious Recipes forever',
   info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  github:'https://github.com',
  demo:'https://github.com',
  },
  {
    id:3,
  image:IMG3,
  title:'Daily Forecast rush',
   info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  github:'https://github.com',
  demo:'https://github.com',
  },
  {
    id:4,
  image:IMG4,
  title :'Travel Blogger',
   info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  github:'https://github.com',
  demo:'https://github.com',
  },
  {
    id:5,
  image: IMG5,
  title:'Weather Com 24',
   info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  github : 'https://github.com',
  demo:'https://github.com',
  },
  {
    id: 6,
  image:IMG6,
  title:'Yogurt Delux cafe',
   info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  github:'https://github.com',
  demo:'https://github.com',
  },
]

const Projects = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container projects__container">
      {
        data.map(({id, image, title,info, github, demo}) => {
          return(
            <article key={id} className="projects__item">
          <div className="project__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <p className="project__info">{info}</p>
          <div className="project__item-cta">
            <a href={github} className="btn" target="_blank" rel="noreferrer">
              Github
            </a>
            <a
              href={demo}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
       </article>
          )
        })
      }
      </div>
    </section>
  );
};

export default Projects;
