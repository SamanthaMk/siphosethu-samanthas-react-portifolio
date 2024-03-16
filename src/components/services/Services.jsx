import React from "react";
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
                Create visually appealing user interfaces for websites, mobile
                apps, or software applications.
              </p>
            </li>
            <li>
              <LuBadgeCheck className="service__list-icons" />
              <p>Design intuitive navigation and layout structures.</p>
            </li>
            <li>
              <LuBadgeCheck className="service__list-icons" />
              <p>
                Conduct user research to understand target audiences and their
                needs.
              </p>
            </li>
            <li>
              <LuBadgeCheck className="service__list-icons" />
              <p>
                Design wireframes and prototypes for usability testing and
                feedback.
              </p>
            </li>
            <li>
              <LuBadgeCheck className="service__list-icons" />
              <p>
                Provide expertise and advice on best practices for UI/UX design.
                Help clients make informed decisions to improve their digital
                products.
              </p>
            </li>
            <li>
              <LuBadgeCheck className="service__list-icons" />
              <p>
                Ensure that designs are optimized for various devices and screen
                sizes. Implement responsive web design principles for a seamless
                user experience across platforms.
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
                Built and designed responsive, custom websites tailored to
                clients' specific needs and brand identity.
              </p>
            </li>
            <li>
              <LuBadgeCheck className="service__list-icons" />
              <p>
                Developed and launched fully functional e-commerce websites with
                seamless payment gateway integrations.
              </p>
            </li>
            <li>
              <LuBadgeCheck className="service__list-icons" />
              <p>
                Implemented pixel-perfect HTML/CSS coding for visually appealing
                and user-friendly interfaces.
              </p>
            </li>
            <li>
              <LuBadgeCheck className="service__list-icons" />
              <p>
                Developed dynamic and responsive front-end and back-end using
                Javascript, React and Node js.
              </p>
            </li>
            <li>
              <LuBadgeCheck className="service__list-icons" />
              <p>
                implemented SEO best practices, resulting in improved search
                engine rankings for clients' websites.
              </p>
            </li>
            <li>
              <LuBadgeCheck className="service__list-icons" />
              <p>
                Provided bespoke solutions to meet clients' unique requirements,
                delivering tailored functionalities and features.
              </p>
            </li>
            <li>
              <LuBadgeCheck className="service__list-icons" />
              <p>
                Integrated third-party APIs to enhance website functionalities
                and provide additional features.
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
                Developed engaging and high-quality written content for
                websites, blogs, and social media platforms.
              </p>
            </li>
            <li>
              <LuBadgeCheck className="service__list-icons" />
              <p>
                Advised clients on technology choices, recommending solutions
                aligned with business goals. Provided technical insights and
                expertise to solve specific challenges.
              </p>
            </li>
            <li>
              <LuBadgeCheck className="service__list-icons" />
              <p>
                Crafted compelling headlines and taglines to capture audience
                attention.
              </p>
            </li>
            <li>
              <LuBadgeCheck className="service__list-icons" />
              <p>
                Developed content strategies aligned with business goals and
                target audience.
              </p>
            </li>
            <li>
              <LuBadgeCheck className="service__list-icons " />
              <p>
                Edited and proofread content for grammar, style, and
                consistency. Ensured all content met quality standards and
                followed brand guidelines.
              </p>
            </li>
          </ul>
        </article>
        {/*End of Content Creation*/}
      </div>
    </section>
  );
};

export default Services;
