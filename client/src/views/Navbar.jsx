import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const navOption = [
    ["Inicio", "/"],
    ["Sobre Mí", "/sobremi"],
    ["Proyectos", "/proyectos"],
    ["CV", "/cv"],
    ["Contacto", "/contacto"],
  ];

  const [isHover, setIsHover] = useState(false);
  const className = isHover ? "text-grisClaro-0" : "text-azulClaro-0";
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <nav
      className="h-full w-full p-5 flex justify-around animate__animated animate__fadeInDown animate__delay-5s"
      id="sidebar"
    >
      <span
        className="text-2xl font-bold text-gray-400 hover:text-azulClaro-0 hover:scale-110 transform transition-transform"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link
          to={"/"}
          className="special-underline focus:scale-110 focus:text-azulClaro-0"
        >
          <strong className={className}>{"{"}</strong> CristianLarrauri{" "}
          <strong className={className}>{"}"}</strong>
        </Link>
      </span>
      <ul className="flex gap-4 ">
        {navOption.map(([opt, url]) => (
          <li
            key={url}
            className="text-gray-400 mx-1 hover:scale-110 transform transition-transform hover:text-azulClaro-0 hover:font-bold"
          >
            <NavLink to={url}>{opt}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
