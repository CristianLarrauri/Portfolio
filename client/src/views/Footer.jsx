import React from "react";
import imgGithub from "../images/github.png";
import imgLinkedin from "../images/linkedin.png";

export default function Footer() {
  return (
    <div className="flex justify-center gap-7 p-5 animate__animated animate__fadeInDown animate__delay-5s">
      <a href="https://github.com/CristianLarrauri" target="_blank">
        <img
          src={imgGithub}
          alt="imagen github"
          className="w-10 h-10 opacity-50 hover:opacity-100"
        />
      </a>
      <a href="https://www.linkedin.com/in/cristianlarrauri/" target="_blank">
        <img
          src={imgLinkedin}
          alt="iamgen linkedin"
          className="w-10 h-10 opacity-50 hover:opacity-100"
        />
      </a>
    </div>
  );
}
