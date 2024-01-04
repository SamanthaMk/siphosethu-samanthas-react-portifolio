import React from "react";
import "./nav.css";
import { TiHomeOutline } from "react-icons/ti";
import { GrUserManager } from "react-icons/gr";
import { BsPersonWorkspace } from "react-icons/bs";
import { GoBook } from "react-icons/go";
import { TiMessageTyping } from "react-icons/ti";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a
        href="/#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : " "}
      >
        <TiHomeOutline />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <GrUserManager />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <GoBook />
      </a>
      <a
        href="#projects"
        onClick={() => setActiveNav("#projects")}
        className={activeNav === "#projects" ? "active" : ""}
      >
        <BsPersonWorkspace />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <TiMessageTyping />
      </a>
    </nav>
  );
};

export default Nav;
