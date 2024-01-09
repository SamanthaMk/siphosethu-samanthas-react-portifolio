import React from 'react'
import "./services.css";
import { LuBadgeCheck } from "react-icons/lu";

const Services = () => {
    return (
      <section id="services">
        <h5>What I Offer</h5>
        <h2>Services</h2>

        <div className="container services__container">
          <article className="service">
            <div className="service__head">
              <h3>UI/UX Design</h3>
               </div>
              <ul className="service__list">
                <li>
                  <LuBadgeCheck className="service__list-icons" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
                <li>
                  <LuBadgeCheck className="service__list-icons" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
                <li>
                  <LuBadgeCheck className="service__list-icons" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
                <li>
                  <LuBadgeCheck className="service__list-icons" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
                <li>
                  <LuBadgeCheck className="service__list-icons" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
              </ul>
        
          </article>
          {/*End of UI/UX */}
          <article className="service">
            <div className="service__head">
              <h3>Web Development</h3>
               </div>
              <ul className="service__list">
                <li>
                  <LuBadgeCheck className="service__list-icons" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
                <li>
                  <LuBadgeCheck className="service__list-icons" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
                <li>
                  <LuBadgeCheck className="service__list-icons" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
                <li>
                  <LuBadgeCheck className="service__list-icons" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
                <li>
                  <LuBadgeCheck className="service__list-icons" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
              </ul>
          </article>
          {/*Enof web development*/}
          <article className="service">
            <div className="service__head">
              <h3>Content Creation</h3>
               </div>
              <ul className="service__list">
                <li>
                  <LuBadgeCheck className="service__list-icons" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
                <li>
                  <LuBadgeCheck className="service__list-icons" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
                <li>
                  <LuBadgeCheck className="service__list-icons" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
                <li>
                  <LuBadgeCheck className="service__list-icons" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
                <li>
                  <LuBadgeCheck className="service__list-icons" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
              </ul>
           
          </article>
          {/*End of Content Creation*/}
        </div>
      </section>
    );

};

export default Services
