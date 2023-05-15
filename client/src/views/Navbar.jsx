import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const navOption = [
    ["Inicio", "/"],
    ["Sobre Mi", "/sobremi"],
    ["Proyectos", "/proyectos"],
    ["Contacto", "/contacto"],
  ];

  const [isHover, setIsHover] = useState(false);
  const className = isHover ? "text-grisClaro-0" : "text-lilaClaro-0";
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <nav
      className="flex justify-around p-5 animate__animated animate__fadeInDown animate__delay-5s"
      id="sidebar"
    >
      <span
        className="text-2xl font-bold text-gray-400 hover:text-lilaClaro-0 hover:scale-110"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link
          to={"/"}
          className="special-underline focus:scale-110 focus:text-lilaClaro-0"
        >
          <strong className={className}>[</strong> CristianLarrauri{" "}
          <strong className={className}>]</strong>
        </Link>
      </span>
      <ul className="flex gap-4 ">
        {navOption.map(([opt, url]) => (
          <li
            key={url}
            className="text-gray-400 hover:scale-110 hover:text-lilaClaro-0 hover:font-bold"
          >
            <NavLink to={url}>{opt}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
