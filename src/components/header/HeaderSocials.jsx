import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/siphosethu-mkandwana-a80018279/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
      <a href="https://github.com/SamanthaMk" target="_blank" rel="noreferrer">
        {" "}
        <FaGithub />
      </a>
      <a
        href="https://twitter.com/Samantha_Sethu"
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitterSquare />
      </a>
    </div>
  );
};
export default HeaderSocials;
